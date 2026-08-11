Layered architecture splits a system into horizontal tiers — typically presentation, application/service, domain, and persistence — where each layer only talks to the one beneath it.

It is a familiar default for CRUD-heavy systems. The main risk is anemic domain models and leakage of business rules into controllers or repositories when boundaries are not enforced.
