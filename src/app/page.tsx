import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";

// Lazy load components below the fold for better performance
const UpcomingConcerts = lazy(() => import("@/components/UpcomingConcerts"));
const Discography = lazy(() => import("@/components/Discography"));
const Videos = lazy(() => import("@/components/Videos"));
const Compositions = lazy(() => import("@/components/Compositions"));
const Gallery = lazy(() => import("@/components/Gallery/Gallery"));
const ContactForm = lazy(() => import("@/components/ContactForm"));

// Loading component for Suspense fallbacks
const SectionLoader = () => (
  <div className="flex items-center justify-center h-32 bg-gray-50 dark:bg-gray-800">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors">
      <Hero />
      <Biography />
      
      <Suspense fallback={<SectionLoader />}>
        <UpcomingConcerts />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Discography />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Videos />
      </Suspense>
      
      <div className="flex flex-col gap-12 md:flex-row justify-between mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors overflow-hidden">
        <div className="flex-1 min-w-0 overflow-hidden">
          <Suspense fallback={<SectionLoader />}>
            <Compositions />
          </Suspense>
        </div>
        <div className="flex-1 min-w-0 overflow-hidden">
          <Suspense fallback={<SectionLoader />}>
            <Gallery />
          </Suspense>
        </div>
      </div>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
