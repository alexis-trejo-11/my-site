Clean Architecture organizes code so that business rules do not depend on UI, frameworks, or databases. Dependencies point **inward** toward entities and use cases.

## Layers (outside → in)

1. Frameworks & drivers
2. Interface adapters
3. Application business rules (use cases)
4. Enterprise business rules (entities)

The goal is independent testability and the freedom to postpone or replace infrastructure decisions.
