import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Digital Ascend Arts Production, a global physical theatre and arts production company focused on movement-based performance, artistic depth, and professional rigor.",
};

export default function AboutPage() {
  return (
    <section className="space-y-16 max-w-4xl">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          About Digital Ascend Arts Production
        </h1>
        <p className="mt-6 text-neutral-700 leading-relaxed">
          Digital Ascend Arts Production is a global arts production company
          specializing in physical theatre, movement-based performance, and
          contemporary interdisciplinary art. Founded with a commitment to
          artistic depth and professional rigor, the company develops original
          performance works that explore human experience through the body,
          space, and presence.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">
          Our Mission
        </h2>
        <p className="mt-6 text-neutral-700 leading-relaxed">
          To create and produce physically driven, conceptually rigorous
          performance works that explore human experience through movement,
          form, and presence.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">
          Our Vision
        </h2>
        <p className="mt-6 text-neutral-700 leading-relaxed">
          To become a globally recognized physical theatre and arts production
          company, known for elevating movement-based performance and
          interdisciplinary work through depth, innovation, and artistic
          integrity.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">
          Our Approach
        </h2>
        <p className="mt-6 text-neutral-700 leading-relaxed">
          Our creative process is grounded in research, rehearsal, and
          embodiment. Each production develops through sustained exploration,
          ensuring that every movement, image, and design choice serves a clear
          artistic purpose.
        </p>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          While physical theatre is our foundation, Digital Ascend Arts
          Production operates as an umbrella arts platform, allowing expansion
          into digital performance, experimental theatre, and interdisciplinary
          collaborations without compromising its core philosophy.
        </p>
      </div>
    </section>
  );
}
