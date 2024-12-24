import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import {
  DivOrigami1,
  DivOrigami2,
  DivOrigami3,
  DivOrigami4,
} from "./Languagebox";

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-6 lg:grid-cols-12 md:max-w-6xl ++"
      >
        <HeaderBlock className="col-span-1 md:col-span-6 lg:col-span-12" />
        <SocialsBlock className="col-span-1 md:col-span-3 lg:col-span-6" />
        <AboutBlock className="col-span-1 md:col-span-3 lg:col-span-6" />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("col-span-4 rounded-lg  bg-zinc-800 ", className)}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 p-6 border border-zinc-600">
    <img
      src="https://api.dicebear.com/9.x/adventurer/svg?seed=Avery&hair=long01,long02,long03,long04,long05,long06,long07,long08,long09,long10,long11,long14,long15,long16,long17,long18,long21,long26&hairColor=0e0e0e,562306,592454,6a4e35,ab2a18&mouth=variant01,variant05,variant25,variant08,variant07,variant06,variant03,variant02,variant04,variant09,variant22,variant23,variant26,variant30,variant29,variant28,variant27&skinColor=ecad80,f2d3b1,763900"
      alt="avatar"
      className="mb-2 size-14 rounded-full"
    />
    <h1 className="mb-10 text-4xl font-medium leading-tight">
      Hi, I'm Aditi 👋,{" "}
      <span className="text-zinc-400">
        currently a CSE AI & ML undergrad at SRM University 🎓. I like to build
        cool websites like this one.
      </span>
    </h1>
    <a className="flex items-center md:pl-[410px] gap-1 text-zinc-400">
      <span className="hidden md:flex items-center gap-1">
        My Skills <FiArrowRight /> {/* Desktop view */}
      </span>
      <span className="flex md:hidden items-center gap-2">
        My Skills <FiArrowDown /> {/* Mobile view */}
      </span>
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block className="col-span-6  md:col-span-3 zinc-800">
      <DivOrigami1 />
    </Block>
    <Block className="col-span-6  md:col-span-3 zinc-800">
      <DivOrigami2 />
    </Block>
    <Block className="col-span-6  md:col-span-3 zinc-800">
      <DivOrigami3 />
    </Block>
    <Block className="col-span-6  md:col-span-3 zinc-800">
      <DivOrigami4 />
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug p-6 border border-zinc-600">
    <span className="text-zinc-300">
      A self-taught developer with a strong passion for AI 🤖. I enjoy solving
      problems and building impactful projects. My expertise lies in several
      programming languages 🖥️ and frameworks, but I also enjoy exploring new
      technologies. I've contributed to multiple open-source
      projects and build seamless user experiences. My Aim is to create
      innovative solutions to real-world problems 💡.
    </span>
  </Block>
);
