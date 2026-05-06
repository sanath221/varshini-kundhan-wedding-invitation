import "./globals.css";

const siteUrl = new URL("https://kundhan-varshini-wedding-invitation.vercel.app/");

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Supraj - Varshini Wedding Invitation",
    template: "%s | Supraj - Varshini Wedding Invitation",
  },
  description:
    "Wedding Invitation for Supraj and Varshini. Join us in celebrating our love and togetherness on June 28, 2026.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Supraj - Varshini Wedding Invitation",
    description:
      "Join us in celebrating our love and togetherness on June 28, 2026.",
    url: siteUrl,
    siteName: "Supraj - Varshini Wedding Invitation",
    images: ["/Page.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Page.jpeg"],
  },
  creator: "Sanath Kishore Kadari",
  publisher: "Sanath Kishore Kadari",
  authors: [{ name: "Sanath Kishore Kadari" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
