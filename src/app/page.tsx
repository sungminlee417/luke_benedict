import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Album from "@/components/Album";
import UpcomingConcerts from "@/components/UpcomingConcerts";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Biography />
      <Album />
      <UpcomingConcerts />
      <Gallery />
      <ContactForm />
    </>
  );
}
