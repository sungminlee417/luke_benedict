import React from "react";
import Image from "next/image";
import image from "../../../public/images/piano-play.png";

const About = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="font-bold text-4xl text-center mb-10">Biography</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <article className="lg:w-1/2 flex flex-col gap-4">
          <p>
            Robert Luke Benedict is a pianist and composer born in 1996, who
            studied piano performance at Eastman School of Music and Boston
            Conservatory of Music, where he studied under Rebecca Penneys and
            Michael Lewin. He also earned degrees in music composition at Lynn
            University under the tutelage of Thomas McKinley. As a pianist, Luke
            has had a variety of experiences ranging from orchestral and chamber
            settings to soloistic performances. He is a commonly commissioned
            composer in the South Florida area, and has performed his own music
            across the United States both as a soloist, and as a part of the
            chamber group,‘The Muse Duo’, consisting of himself and classical
            guitarist Collin Holloway, touring locations such as New York, South
            Carolina, Florida, New Hampshire, Tennessee, and Oklahoma.
          </p>
          <p>
            Luke combines the musical languages of the past and present to evoke
            several different idioms while still maintaining accessibility and
            originality. These languages range from the Baroque and Classical
            periods, to the more modern sensibilities of Rock, Serialism, and
            Minimalism. Rhythmic drive is also a prominent force in his works
            and takes center stage alongside unique and coloristic
            instrumentation, pointed motivic direction, and memorable melodic
            content. Alongside maintaining accessibility for audiences, a
            primary motivation of his compositional process lies in the
            enjoyment of the performers who present his works. Not only does
            Luke facilitate a musical experience that will appeal to a variety
            of audiences, but he also ensures his music will be gratifying for
            the performer to execute.
          </p>
        </article>
        <div className="relative lg:w-1/2 w-full">
          <Image
            src={image}
            alt="Picture of the author"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
