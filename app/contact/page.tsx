export default function ContactPage() {
  return (
    <section className="space-y-12 max-w-4xl">
      <h1 className="text-3xl font-semibold tracking-tight">
        Contact
      </h1>

      <p className="text-neutral-700 leading-relaxed">
        For production inquiries, collaborations, or general information,
        please contact:
      </p>

      <p className="text-neutral-700">
        <strong>Email:</strong>{" "}
        <a
          href="mailto:info@digitalascendarts.com"
          className="underline"
        >
          info@digitalascendarts.com
        </a>
      </p>
    </section>
  );
}
