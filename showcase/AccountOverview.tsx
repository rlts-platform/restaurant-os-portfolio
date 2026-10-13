/**
 * Restaurant OS portfolio sample — sanitized, presentation-only component.
 * Uses caller-provided values; intentionally has no authentication or database access.
 */
type AccountOverviewProps = {
  status: string;
  plan: string;
  locationCount: number;
};

function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <article className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
      <p className="text-xs uppercase tracking-wider text-neutral-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-neutral-100">{value}</p>
      <p className="mt-1 text-sm text-neutral-500">{detail}</p>
    </article>
  );
}

export default function AccountOverview({
  status,
  plan,
  locationCount,
}: AccountOverviewProps) {
  return (
    <section aria-labelledby="account-overview-title" className="space-y-5">
      <header>
        <h2 id="account-overview-title" className="text-xl font-semibold">
          Account Overview
        </h2>
        <p className="text-sm text-neutral-400">
          A single view of account status and location footprint.
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Account Status" value={status} detail="Current account state" />
        <StatCard label="Plan" value={plan} detail="Assigned subscription tier" />
        <StatCard
          label="Locations"
          value={String(locationCount)}
          detail="Locations associated with this account"
        />
      </div>
    </section>
  );
}
