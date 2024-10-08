import React from "react";
import Image from "next/image";
import album from "../../public/images/muse-duo-gray.png";
import {
  faFacebook,
  faInstagram,
  faSpotify,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LINKS = [
  { icon: faFacebook, link: "https://www.facebook.com/luke.benedict.9/" },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/luke__benedict/",
  },
  {
    icon: faYoutube,
    link: "https://www.youtube.com/channel/UC6MX_fM6ewQSVmRc_Mmlr9g",
  },
  {
    icon: faSpotify,
    link: "https://open.spotify.com/artist/6qhfowukxKZo9DgAIOx4cT?si=TxR9SG7RRQ6FscbxLjLZtg",
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <Image src={album} alt="Album" width="40" />
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-5 md:place-self-center md:justify-self-end">
        {LINKS.map((linkData, i) => (
          <a key={i} href={linkData.link} target="_blank">
            <FontAwesomeIcon icon={linkData.icon} size="2x" />
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
