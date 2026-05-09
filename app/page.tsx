import { InvitationExperience } from "./Components/invitation-experience";

export default function Home() {
  return <InvitationExperience />;
}

export const metadata = {
  title: "Varshini & Kundhan Wedding Invitation",
  description:
    "Join us in celebrating our love and togetherness on June 28, 2026.",
  openGraph: {
    title: "Varshini & Kundhan Wedding Invitation",
    description:
      "Join us in celebrating our love and togetherness on June 28, 2026.",
    images: ["/Page.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Page.jpeg"],
  },
};
