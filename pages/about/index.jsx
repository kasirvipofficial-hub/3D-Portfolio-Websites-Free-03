import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCalendarAlt,
  FaMusic,
  FaPalette,
  FaUsers,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaMicrophone,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Event Management & Production",
        icons: [FaCalendarAlt, FaUsers, FaPalette],
      },
      {
        title: "Content & Social Strategy",
        icons: [FaInstagram, FaYoutube, FaTiktok, SiThreads],
      },
      {
        title: "Music & Sound Production",
        icons: [FaMusic, FaMicrophone],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Best Event Curation Award",
        stage: "2023",
      },
      {
        title: "Social Media Excellence Award",
        stage: "2022",
      },
      {
        title: "Content Creator of the Year",
        stage: "2023",
      },
      {
        title: "Music Production Recognition",
        stage: "2021",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Event Planner & Creative Director",
        stage: "2020 - Present",
      },
      {
        title: "Social Media Strategist & Content Creator",
        stage: "2018 - Present",
      },
      {
        title: "Sound Engineer & Music Producer",
        stage: "2015 - Present",
      },
      {
        title: "Community Manager & Brand Activations",
        stage: "2018 - 2020",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Event Management Certification",
        stage: "2020",
      },
      {
        title: "Content Marketing & Social Media Strategy",
        stage: "2019",
      },
      {
        title: "Music Production & Audio Engineering",
        stage: "2017",
      },
      {
        title: "Brand Activations & Community Building",
        stage: "2018",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Orchestrating <span className="text-accent">Unforgettable</span>
            Moments.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            From intimate gatherings to massive festivals, I've orchestrated seamless experiences across concerts, brand activations, digital content, and social campaigns. Combining strategic vision with flawless execution, every event tells a story that resonates.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of event experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Events & activations produced.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Engaged community members.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Award recognition.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start w-full">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="w-full flex flex-col xl:flex-row xl:justify-between xl:items-start gap-y-2 xl:gap-x-4 text-center xl:text-left"
              >
                <div className="flex-1">
                  {/* title */}
                  <div className="font-light text-white mb-1">{item.title}</div>
                  {/* stage */}
                  <div className="text-sm text-white/60">{item.stage}</div>
                </div>

                {/* icons */}
                {item.icons && item.icons.length > 0 && (
                  <div className="flex gap-x-4 justify-center xl:justify-start">
                    {item.icons.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
