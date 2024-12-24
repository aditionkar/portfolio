import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiExpress,
  SiNodemon,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiMongoose,
  SiNextdotjs,
  SiGit,
  SiGraphql,
  SiJsonwebtokens,
} from "react-icons/si";
import { twMerge } from "tailwind-merge";
import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaNode,
  FaReact,
} from "react-icons/fa";

export const DivOrigami1 = () => {
  return (
    <section className=" bg-zinc-900">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-black">
            <SiC /> {/* C icon */}
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-black">
            <SiCplusplus /> {/* C++ icon */}
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-black">
            <SiTailwindcss /> {/* Tailwindcss icon */}
          </LogoItem>,
          <LogoItem key={4} className="bg-yellow-300 text-black">
            <SiJavascript /> {/* JavaScript icon */}
          </LogoItem>,
          <LogoItem key={5} className="bg-blue-500 text-black">
            <SiPython /> {/* Python icon */}
          </LogoItem>,
        ]}
      />
    </section>
  );
};

export const DivOrigami2 = () => {
  return (
    <section className=" bg-zinc-900 ">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-black">
            <FaHtml5 /> {/* HTML icon */}
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-black">
            <FaCss3 /> {/* Css icon */}
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-black">
            <FaJava /> {/* Java icon */}
          </LogoItem>,
          <LogoItem key={4} className="bg-yellow-300 text-black">
            <SiExpress /> {/* JavaScript icon */}
          </LogoItem>,
          <LogoItem key={5} className="bg-blue-500 text-black">
            <SiNodemon /> {/* nodemon icon */}
          </LogoItem>,
        ]}
      />
    </section>
  );
};

export const DivOrigami3 = () => {
  return (
    <section className=" bg-zinc-900">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-black">
            <SiMongoose /> {/* mongoose icon */}
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-black">
            <SiPostman /> {/* postman icon */}
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-black">
            <SiMysql /> {/* mysql icon */}
          </LogoItem>,
          <LogoItem key={4} className="bg-yellow-300 text-black">
            <SiMongodb /> {/* mongo icon */}
          </LogoItem>,
          <LogoItem key={5} className="bg-blue-500 text-black">
            <FaNode /> {/* node icon */}
          </LogoItem>,
        ]}
      />
    </section>
  );
};

export const DivOrigami4 = () => {
  return (
    <section className=" bg-zinc-900">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-black">
            <FaReact /> {/* react icon */}
          </LogoItem>,
          <LogoItem key={2} className="bg-green-300 text-black">
            <SiNextdotjs /> {/* next icon */}
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-300 text-black">
            <SiGit /> {/* Git icon */}
          </LogoItem>,
          <LogoItem key={4} className="bg-yellow-300 text-black">
            <SiGraphql /> {/* graphQL icon */}
          </LogoItem>,
          <LogoItem key={5} className="bg-blue-500 text-black">
            <SiJsonwebtokens /> {/* jwt. icon */}
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="z-0 rounded-xl border border-zinc-600 bg-zinc-800 
             md:h-48 md:w-[276px] h-36 w-[180px]" 
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid md:h-36 md:w-[235px] h-[115px] w-[155px] place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
