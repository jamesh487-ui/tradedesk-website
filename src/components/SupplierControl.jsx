const supplierCards = [
  {
    title: "Supplier quote requests",
    text: "Send requests to suppliers, compare pricing more clearly and keep buying decisions closer to the quote workflow.",
  },
  {
    title: "Purchase orders",
    text: "Create professional POs, send them properly, preview the document and track status inside the supplier workflow.",
  },
  {
    title: "Inventory with pricing context",
    text: "Keep an inventory catalogue where one item can hold multiple supplier-specific pricing records instead of relying on a loose parts list.",
  },
  {
    title: "Pricing visibility",
    text: "Track supplier pricing history so the business can see what changed, protect margin and quote with more confidence.",
  },
]

export default function SupplierControl() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            Suppliers and costs
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Take control of supplier pricing, purchasing and margin
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            TradeDesk treats supplier workflow as part of the product, not an
            afterthought. That means quote requests, purchase orders, supplier
            detail and inventory pricing all sit closer to the jobs and quotes
            they affect.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {supplierCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
