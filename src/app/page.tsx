import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Album from "@/components/home/Album";
import UpcomingConcerts from "@/components/home/UpcomingConcerts";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Album />
      <UpcomingConcerts />
      <ContactForm />
    </>
  );
}
