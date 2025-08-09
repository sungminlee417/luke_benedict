import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import MainNav from "@/layouts/MainNav";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/layouts/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

config.autoAddCss = false;

const inter = Oswald({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: "Luke Benedict",
  description:
    "Explore the music of Luke Benedict, composer-pianist whose innovative sound unites a forward thinking modernistic edge and accessible sound worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
        <script
          src="https://kit.fontawesome.com/db311df611.js"
          crossOrigin="anonymous"
          async
        ></script>
        <DarkModeProvider>
          <div className="flex flex-col h-screen">
            <MainNav />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
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
