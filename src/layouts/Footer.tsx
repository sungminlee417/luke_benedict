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
    <footer className="bg-neutral text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src={album} alt="Album" width="40" className="opacity-80" />
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Luke Benedict. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4">
            {LINKS.map((linkData, i) => (
              <a 
                key={i} 
                href={linkData.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300 transform hover:scale-110"
                aria-label={`Visit Luke Benedict on ${linkData.icon.iconName}`}
              >
                <FontAwesomeIcon icon={linkData.icon} size="lg" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
