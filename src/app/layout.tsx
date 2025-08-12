import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import SlideOutNav from "@/components/SlideOutNav";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/layouts/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

config.autoAddCss = false;

const oswald = Oswald({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-oswald',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Luke Benedict - Composer & Pianist",
  description:
    "Explore the music of Luke Benedict, composer-pianist whose innovative sound unites a forward thinking modernistic edge and accessible sound worlds.",
  keywords: "Luke Benedict, composer, pianist, music, classical, contemporary, concerts",
  authors: [{ name: "Luke Benedict" }],
  openGraph: {
    title: "Luke Benedict - Composer & Pianist",
    description: "Innovative composer-pianist uniting modernistic edge with accessible sound worlds.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Benedict - Composer & Pianist",
    description: "Innovative composer-pianist uniting modernistic edge with accessible sound worlds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://identity.netlify.com" />
        <link rel="dns-prefetch" href="https://kit.fontawesome.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={oswald.className}>
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
          defer
        ></script>
        <script
          src="https://kit.fontawesome.com/db311df611.js"
          crossOrigin="anonymous"
          async
          defer
        ></script>
        <DarkModeProvider>
          <SlideOutNav />
          <main>{children}</main>
          <Footer />
        </DarkModeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", (user) => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
