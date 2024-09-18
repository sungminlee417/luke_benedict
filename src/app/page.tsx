import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Album from "@/components/Album";
import UpcomingConcerts from "@/components/UpcomingConcerts";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import Discography from "@/components/Discography";

export default function Home() {
  return (
    <>
      <Hero />
      <Biography />
      <Album />
      <UpcomingConcerts />
      <Discography />
      <Gallery />
      <ContactForm />
    </>
  );
}
