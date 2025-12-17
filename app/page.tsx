export default function HomePage() {
  return (
    <section className="space-y-16">
      {/* Hero */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Digital Ascend Arts Production
        </h1>
        <p className="mt-6 text-xl text-neutral-700">
          Ascending Through Art
        </p>
        <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
          A global arts production company dedicated to physical theatre and
          movement-based performance. We create conceptually rigorous work that
          explores human experience through the body, form, and presence.
        </p>
      </div>

      {/* What We Do */}
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold">
          What We Do
        </h2>
        <ul className="mt-6 space-y-2 text-neutral-700">
          <li>Physical Theatre Productions</li>
          <li>Movement-Based Performance</li>
          <li>Interdisciplinary & Experimental Works</li>
          <li>International Collaborations</li>
        </ul>
      </div>

      {/* Philosophy */}
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold">
          Our Philosophy
        </h2>
        <p className="mt-6 text-neutral-700 leading-relaxed">
          We believe the body is a universal language. Through physical
          intelligence and disciplined process, we create performance work that
          transcends spoken word and cultural boundaries.
        </p>
      </div>
    </section>
  );
}
