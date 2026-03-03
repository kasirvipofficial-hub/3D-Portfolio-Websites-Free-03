import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTiktokLine,
  RiMailLine,
} from "react-icons/ri";
import { SiThreads } from "react-icons/si";

export const socialData = [
  {
    name: "YouTube",
    link: "https://youtube.com/@hajicexoassistance",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hajicexoassistance/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/profile.php?id=61561636906690",
    Icon: RiFacebookLine,
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@hajicexoassistance",
    Icon: RiTiktokLine,
  },
  {
    name: "Threads",
    link: "https://www.threads.com/@hajicexoassistance",
    Icon: SiThreads,
  },
  {
    name: "Email",
    link: "mailto:cexohaji@gmail.com",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target={social.name === "Email" ? "_self" : "_blank"}
          rel={social.name === "Email" ? "" : "noreferrer noopener"}
          className={`${
            social.name === "Email"
              ? "hover:text-accent"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
