import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import UpcomingConcerts from "@/components/UpcomingConcerts";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery/Gallery";
import Discography from "@/components/Discography";
import Compositions from "@/components/Compositions";

export default function Home() {
  return (
    <>
      <Hero />
      <Biography />
      <UpcomingConcerts />
      <Discography />
      <div className="flex flex-col gap-16 md:flex-row justify-between mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="md:w-1/2">
          <Compositions />
        </div>
        <div className="md:w-1/2 self-center md:self-start">
          <Gallery />
        </div>
      </div>
      <ContactForm />
    </>
  );
}
