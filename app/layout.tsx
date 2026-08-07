import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-body-md text-body-md overflow-x-hidden flex flex-col">
        <div className="page-bg" aria-hidden="true" />
        <Header />
        <main className="relative w-full flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
