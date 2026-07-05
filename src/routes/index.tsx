import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedExperiences } from "@/components/FeaturedExperiences";
import { QuickConnect } from "@/components/QuickConnect";
import { Footer } from "@/components/Footer";
import { FloatingActionButton } from "@/components/FloatingActionButton";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "7ACE Holidays | Premium Travel Experiences" },
      {
        name: "description",
        content:
          "Luxury international holidays, corporate travel, business tours, visa assistance, and global trade fair experiences by 7ACE Holidays Pvt. Ltd.",
      },
      { property: "og:title", content: "7ACE Holidays | Premium Travel Experiences" },
      { property: "og:description", content: "Celebrate Journey. Create Memories. Curated premium travel by 7ACE Holidays." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "7ACE Holidays | Premium Travel Experiences" },
      { name: "twitter:description", content: "Celebrate Journey. Create Memories." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "7ACE Holidays Pvt. Ltd.",
          slogan: "Celebrate Journey. Create Memories.",
          description:
            "Premium international holidays, corporate travel, business tours and global trade fair experiences.",
          url: "/",
          sameAs: [
            "https://instagram.com",
            "https://facebook.com",
            "https://linkedin.com",
            "https://youtube.com",
          ],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <FeaturedExperiences />
        <QuickConnect />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}
