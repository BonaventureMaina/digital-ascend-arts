import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Digital Ascend Arts Production",
    template: "%s | Digital Ascend Arts Production",
  },
  description:
    "Digital Ascend Arts Production is a global physical theatre and arts production company creating movement-based, conceptually rigorous performance work.",
  openGraph: {
    title: "Digital Ascend Arts Production",
    description:
      "A global arts production company dedicated to physical theatre and movement-based performance.",
    url: "https://digital-ascend-arts.vercel.app",
    siteName: "Digital Ascend Arts Production",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Ascend Arts Production — Ascending Through Art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Ascend Arts Production",
    description:
      "Ascending Through Art — global physical theatre and movement-based performance.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <header className="border-b border-neutral-200">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-wide">
              DIGITAL ASCEND
            </a>
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/productions" className="hover:underline">
                  Productions
                </a>
              </li>
              <li>
                <a href="/collaborate" className="hover:underline">
                  Collaborate
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-16">
          {children}
        </main>

        <footer className="border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-600">
            <p>© {new Date().getFullYear()} Digital Ascend Arts Production</p>
            <p className="mt-2">Ascending Through Art</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
