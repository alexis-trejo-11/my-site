# Features

## Inventory Management

Real-time stock tracking with configurable low-stock thresholds. Supports batch imports via CSV and automatic reorder triggers.

```bash
# Search inventory
GET /v1/products?q=aspirin&category=analgesics&inStock=true

# Update stock
PATCH /v1/products/{sku}/stock
Content-Type: application/json

{ "delta": -5, "reason": "sold" }
```

## Prescription Validation

Integrates with national pharmacy regulatory databases to validate prescriptions before dispensing controlled substances.

- Doctor NPI verification
- Rx expiry enforcement (90-day window)
- Controlled substance flagging

## Sales & Checkout

Full cart-to-invoice flow with:

- Discount code resolution
- Insurance claim calculation
- PDF invoice generation via JasperReports

```java
// Simplified checkout use case
public Invoice checkout(CartId cartId, PaymentMethod payment) {
    var cart = cartRepository.findById(cartId).orElseThrow();
    var invoice = invoiceService.generate(cart, payment);
    eventPublisher.publish(new SaleCompletedEvent(invoice));
    return invoice;
}
```

## Auth & RBAC

Three built-in roles: `PHARMACIST`, `MANAGER`, `ADMIN`. Endpoints are guarded via Spring Security method-level annotations.

## Reporting

Aggregated daily/weekly/monthly reports on sales volume, top products, and low-stock frequencies. Exportable to CSV via `/v1/reports`.
