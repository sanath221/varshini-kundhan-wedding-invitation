import "./globals.css";

const siteUrl = new URL("https://varshini-kundhan-wedding-invitation.vercel.app/");

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Varshini - kundhan Wedding Invitation",
    template: "%s | Varshini - kundhan Wedding Invitation",
  },
  description:
    "Wedding Invitation for Varshini and kundhan. Join us in celebrating our love and togetherness on June 28, 2026.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Varshini - kundhan Wedding Invitation",
    description:
      "Join us in celebrating our love and togetherness on June 28, 2026.",
    url: siteUrl,
    siteName: "Varshini - kundhan Wedding Invitation",
    images: ["/Page-cover.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Page-cover.jpeg"],
  },
  creator: "Sanath Kishore Kadari ",
  publisher: "Sanath Kishore Kadari",
  authors: [{ name: "Sanath Kishore Kadari " }],
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
