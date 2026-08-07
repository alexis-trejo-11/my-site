# Spec: Project Detail — Panel Central y Panel Derecho

## 1. Objetivo

El sidebar izquierdo (árbol de proyectos, expansión, selección) **ya está implementado y funciona correctamente — no tocar.**

Lo que falta es reemplazar el HTML hardcodeado del panel central y del panel derecho por un render dinámico, basado en el esquema de datos de abajo, con navegación por tabs y estado sincronizado con la selección del sidebar.

**Fuera de alcance en esta tarea:** el módulo `apiExplorer`. No implementar nada relacionado a mostrar/probar endpoints tipo Postman todavía. Si el campo existe en el esquema, ignorarlo por ahora.

---

## 2. Esquema de datos

```typescript
type Link = {
  type: "github" | "demo" | "docs" | "external";
  url: string;
  label?: string; // si no se especifica, usar un label default por type
};

type ProjectType = "backend" | "frontend" | "infra" | "fullstack";

interface Project {
  slug: string;
  name: string;
  type: ProjectType;
  tagline: string;
  status?: "active" | "wip" | "archived";
  tags: string[]; // badges simples para el panel derecho

  overview?: {
    description?: string;
    features?: Feature[];
    exampleRequest?: {
      title: string; // "Example Request: GET /api/v1/inventory/search"
      language: string; // "bash"
      code: string;
    };
  };

  architecture?: {
    description?: string;
    diagram?: {
      format: "image" | "terminal-tree" | "mermaid";
      content: string;
    };
    decisions?: Decision[];
    why?: string; // callout "Why I use this"
  };

  infra?: {
    pipeline?: PipelineStep[];
    monitoring?: {
      description?: string;
      link?: Link;
    };
  };

  stack?: { category: string; items: string[] }[]; // opcional, solo si aporta más detalle que `tags`

  services?: Project[]; // microservicios, mismo shape recursivo

  apiExplorer?: unknown; // NO IMPLEMENTAR — fuera de alcance

  links?: Link[]; // Resources: repo, docs, demo, dashboard
  recentChanges?: { title: string; date: string; tag?: string }[];
}

interface Feature {
  title: string;
  description: string;
  link?: Link;
}

interface Decision {
  title: string;
  rationale: string;
  tradeoff?: string;
  snippet?: { language: string; code: string };
  link?: Link;
}

interface PipelineStep {
  step: string; // etiqueta funcional, ej. "Containerization"
  tool: string; // herramienta específica, ej. "Docker"
  description?: string;
  snippet?: { language: string; code: string };
  link?: Link;
}
```

**Regla importante:** todos los campos anidados son opcionales. Si un campo no existe en los datos del proyecto, la sección o sub-bloque correspondiente **no se renderiza** — no mostrar placeholders vacíos, headers sin contenido, ni "Coming soon". La UI debe verse completa aunque un proyecto solo tenga `overview.description` lleno y nada más.

---

## 3. Wireframe de referencia

Basado en las capturas ya aprobadas (adjuntas por separado). Layout de 3 columnas ya existente:

```
┌─────────────┬──────────────────────────────────────────┬────────────────┐
│  SIDEBAR    │  HEADER: nombre + tagline                 │  TECH STACK    │
│ (ya hecho,  │  [Share]                                  │  (badges)      │
│  no tocar)  ├──────────────────────────────────────────┤                │
│             │  TAB BAR: Overview.md | Architecture...   │  RESOURCES     │
│             ├──────────────────────────────────────────┤  (links)       │
│             │                                            │                │
│             │  CONTENIDO DEL TAB ACTIVO                 │  RECENT        │
│             │  (varía según sección, ver punto 5)       │  CHANGES       │
│             │                                            │                │
└─────────────┴──────────────────────────────────────────┴────────────────┘
```

Los tabs visibles dependen de qué campos tenga el `Project` cargado:

- `overview` presente → tab `Overview.md`
- `architecture` presente → tab `Architecture.drawio`
- `infra` presente → tab `Infra` (nombre de archivo sugerido: `deploy.yml` o similar, mantener la convención de nombre-de-archivo-con-extensión que ya se usa)
- `stack` presente Y tiene más de una categoría → tab `Stack` (nombre sugerido: `stack.json`). Si el proyecto no define `stack`, no mostrar este tab; los `tags` generales igual se muestran siempre en el panel derecho.
- `apiExplorer` → excluido, no generar tab aunque el campo exista.

El primer tab disponible (en el orden de arriba) se abre por default al entrar al proyecto.

---

## 4. Panel derecho — componentes

1. **Technology Stack** — siempre visible si `tags.length > 0`. Renderiza `tags` como badges (no `stack`, ese va en su propio tab si existe).
2. **Resources** — visible si `links.length > 0`. Cada `Link` como ítem clickeable con ícono según `type` (github, docs, demo, external → íconos ya definidos en el design system existente).
3. **Recent Changes** — visible si `recentChanges.length > 0`. Lista con avatar/ícono, título, fecha relativa, y tag opcional.

Cualquiera de los 3 bloques que no tenga datos, se omite completo (no colapsa con altura 0 visible, directamente no se renderiza el contenedor).

---

## 5. Contenido de cada tab

### Overview.md

- `overview.description` — párrafo.
- `overview.features` — lista de `Feature`. Cada una: ícono check + título en bold + descripción inline. Si `feature.link` existe, todo el bloque de la feature es clickeable y navega a `link.url` en nueva pestaña; mostrar un ícono pequeño indicando que es clickeable (ej. ícono de GitHub en la esquina del bloque, sutil, no invasivo).
- `overview.exampleRequest` — si existe, bloque de código con header (título + botón "Copy" que copia `code` al portapapeles).

### Architecture.drawio

- `architecture.diagram` — renderizar según `format`:
  - `'image'` → `<img>` con el `content` como src.
  - `'terminal-tree'` → bloque monoespaciado, whitespace preservado, `content` es texto ASCII plano.
  - `'mermaid'` → renderizar con librería de mermaid si está disponible en el proyecto; si no, tratar como fallback de texto plano por ahora.
- `architecture.description` — párrafo.
- `architecture.decisions` — lista de tarjetas. Cada tarjeta: título, rationale, tradeoff (si existe, mostrar con label visual distinto, ej. "Trade-off:"), snippet de código opcional (colapsable o visible directo, decisión de UI libre), y si `link` existe, mismo patrón de clickeable + ícono que en Features.
- `architecture.why` — callout con ícono (bombilla u otro), fondo ligeramente distinto al resto del contenido, para que resalte como nota personal.

### Infra (deploy.yml u otro nombre elegido)

- `infra.pipeline` — pasos horizontales conectados con flecha/línea. Cada paso muestra `tool` como texto principal (con ícono si aplica) y `step` como subtítulo pequeño debajo. Al hacer click o expandir (decisión de UI libre) se muestra `description`, `snippet` opcional, y `link` opcional con el mismo patrón de clickeable ya usado en el resto del esquema.
- `infra.monitoring` — bloque aparte debajo del pipeline (no es un "paso" secuencial), con descripción y link a dashboard si existe.

### Stack (stack.json) — solo si el campo existe

- Renderizar `stack` agrupado por `category`, cada grupo con su título y sus `items` como badges, mismo estilo visual que `tags` del panel derecho pero organizados por sección.

---

## 6. Componente reutilizable: `CodeSnippetLink`

Varias secciones (Features, Decisions, PipelineStep) comparten el mismo patrón: bloque de contenido + snippet opcional + link opcional a GitHub. Implementar un solo componente reutilizable en vez de duplicar la lógica en cada sección:

```typescript
interface CodeSnippetLinkProps {
  snippet?: { language: string; code: string };
  link?: Link;
  children: ReactNode; // el contenido textual (título+descripción) que envuelve
}
```

Este componente decide: si hay `link`, envuelve `children` en un elemento clickeable con ícono indicador; si hay `snippet`, renderiza el bloque de código debajo (con syntax highlighting si ya hay una librería integrada en el proyecto, si no, texto monoespaciado simple está bien por ahora).

---

## 7. Estado y navegación

- El proyecto activo (`Project` completo) se determina por la selección en el sidebar (ya implementado) — el panel central/derecho debe reaccionar a ese estado, no duplicar lógica de selección.
- El tab activo dentro del panel central es estado local de este componente (no necesita persistirse en URL necesariamente, pero si el proyecto ya usa routing por query param o hash para otras cosas, seguir la misma convención existente).
- Al cambiar de proyecto en el sidebar, el tab activo debe resetear al primer tab disponible de ese nuevo proyecto (no mantener, por ejemplo, "Infra" seleccionado si el nuevo proyecto no tiene ese campo).
- Los tabs cerrables (el ícono "X" que se ve en el mockup, ej. junto a "Overview.md") — mantener visualmente porque es parte del lenguaje del sitio, pero funcionalmente pueden no hacer nada más que volver al primer tab disponible al cerrarse, o simplemente ser decorativos. Confirmar con diseño si se requiere lógica real de "cerrar tab" o es solo estético (mi recomendación: decorativo, no vale la pena la complejidad de un sistema real de tabs cerrables para este caso de uso).

---

## 8. Decisión: botones "Share" / "Run Workspace"

**Recomendación: eliminar "Run Workspace".** Es un elemento copiado directamente de la referencia visual (Postman/Yaak) que no tiene una acción real definida en este contexto — no hay nada que "correr". Mantenerlo sin función clara resta credibilidad más de lo que suma estéticamente.

**Mantener "Share"**, pero con acción concreta: copiar al portapapeles la URL del proyecto actual (con feedback visual breve tipo "¡Copiado!"). Esto sí tiene un caso de uso real (compartir el link de un proyecto específico).

Si más adelante se define una acción real para un segundo botón (por ejemplo, un link directo al repo como CTA primario), se puede reintroducir con otro label, pero no como "Run Workspace".

---

## 9. Criterios de aceptación

- [ ] Sidebar izquierdo no modificado.
- [ ] Panel central renderiza dinámicamente desde el esquema `Project`, sin HTML hardcodeado por proyecto.
- [ ] Tabs se generan condicionalmente según campos presentes; ninguna sección vacía se muestra.
- [ ] Panel derecho (Tech Stack, Resources, Recent Changes) dinámico, con el mismo criterio de ocultar bloques sin datos.
- [ ] `apiExplorer` no implementado en esta iteración.
- [ ] `CodeSnippetLink` implementado como componente único, reutilizado en Features, Decisions y PipelineStep.
- [ ] Cambiar de proyecto en el sidebar resetea el tab activo al primero disponible.
- [ ] Botón "Run Workspace" eliminado; "Share" funcional (copiar URL).
