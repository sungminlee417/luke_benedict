import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import UpcomingConcerts from "@/components/UpcomingConcerts";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery/Gallery";
import Discography from "@/components/Discography";
import Compositions from "@/components/Compositions";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <Hero />
      <Biography />
      <UpcomingConcerts />
      <Discography />
      <div className="flex flex-col gap-12 md:flex-row justify-between mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors overflow-hidden">
        <div className="flex-1 min-w-0 overflow-hidden">
          <Compositions />
        </div>
        <div className="flex-1 min-w-0 overflow-hidden">
          <Gallery />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
