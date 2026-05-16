import { DEFAULT_CATEGORIES } from '@serviceshub/shared';
import { MapPin, Search } from 'lucide-react';
import { UIButton } from '../components/ui-button';

export function LandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="glass rounded-2xl p-8">
        <p className="mb-2 text-sm uppercase tracking-wide text-blue-300">ServicesHub</p>
        <h1 className="text-4xl font-bold">Local services at your doorstep</h1>
        <p className="mt-2 text-slate-300">Book trusted local providers with live location and AI-assisted matching.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-[1fr_1fr_auto_auto]">
          <label className="glass flex items-center gap-2 rounded-xl px-3 py-2">
            <Search size={16} />
            <input aria-label="Service" className="w-full bg-transparent text-sm outline-none" placeholder="Service" />
          </label>
          <label className="glass flex items-center gap-2 rounded-xl px-3 py-2">
            <MapPin size={16} />
            <input aria-label="Location" className="w-full bg-transparent text-sm outline-none" placeholder="Location" />
          </label>
          <UIButton variant="ghost">Use my location</UIButton>
          <UIButton>Find Providers</UIButton>
        </div>
      </section>

      <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DEFAULT_CATEGORIES.map((category) => (
          <article key={category} className="glass rounded-xl p-4">
            <h2 className="font-semibold">{category}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
