# Architecture

The Drugstore Platform is built on a **Hexagonal (Ports & Adapters)** architecture, ensuring a clean separation between domain logic and external concerns like databases, HTTP, or message queues.

## Layer Overview

```
┌─────────────────────────────────────────────┐
│              HTTP / REST Layer               │
│      (Spring MVC Controllers + DTOs)        │
├─────────────────────────────────────────────┤
│              Application Layer               │
│          (Use Cases / Services)             │
├─────────────────────────────────────────────┤
│               Domain Layer                  │
│    (Entities, Aggregates, Domain Events)    │
├─────────────────────────────────────────────┤
│           Infrastructure Layer              │
│   (JPA Repositories, Kafka, S3 Clients)    │
└─────────────────────────────────────────────┘
```

## Key Modules

| Module | Responsibility |
|--------|---------------|
| `inventory` | Product catalog, stock tracking, alerts |
| `prescriptions` | Rx validation, doctor lookup, expiry |
| `sales` | Cart, checkout, invoice generation |
| `auth` | JWT issuance, RBAC, refresh tokens |
| `notifications` | Email / SMS via SNS |
| `reporting` | Aggregated analytics, CSV export |

## Domain Model

```java
@Entity
public class Product {
    @Id
    private UUID id;
    private String sku;
    private String name;
    private int stockQuantity;
    private BigDecimal unitPrice;
    private boolean requiresPrescription;
}
```

## Communication

- **Intra-service:** Direct Java method calls (same JVM).
- **Async events:** Kafka topics for sales events and low-stock alerts.
- **External integrations:** REST over HTTPS to pharmacy regulators API.
