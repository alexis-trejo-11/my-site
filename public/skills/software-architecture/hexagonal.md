The Hexagonal Architecture, or Ports and Adapters pattern, aims to create loosely coupled application components that can be easily connected to their software environment by means of **ports** and **adapters**. This makes components exchangeable at any level and facilitates test automation.

The core logic is isolated from outside concerns. The application is driven by users, programs, automated tests, or batch scripts, and is developed and tested in isolation from its eventual run-time devices and databases.

## Key ideas

- Domain at the center — no framework imports in the core
- Ports define what the application needs or offers
- Adapters implement those ports for HTTP, databases, queues, and UI
- Swap adapters without rewriting business rules
