import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

function ProjCard1() {
  return (
    <>
      <div className="card shadow-[0px_4px_16px_px_#367E08] md:w-[350px] h-[300px] w-[300px] group rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden mx-auto">
        <div className="absolute top-0 left-0 h-full w-full bg-[#111111] group">
          <motion.div
            key= "1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl overflow-hidden"
          ></motion.div>

          <img
            src="/images/ecoNova.png"
            alt="Image Description"
            className="h-44 w-full object-cover group-hover:hidden rounded-lg transition-transform duration-300  ease-in-out"
          />
          
          
        </div>

        <div className="card_name container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em]">
          <div className="h-fit w-full">
            <h1
              className="card_heading text-[1.5em] tracking-[.2em]"
              style={{
                fontWeight: 900,
                WebkitTextFillColor: "transparent",
                WebkitTextStrokeWidth: "1px",
                textShadow: "0 0 7px #fff",
              }}
            >
              Eco Nova
            </h1>
          </div>

          <div className="flex justify-center items-center h-fit w-fit gap-[0.5em]">
            <div className="border-2 border-white rounded-[0.5em] text-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
              <p>Node.js </p>
            </div>
            <div className="border-2 border-white rounded-[0.5em] text-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
              <p>Java</p>
            </div>
            <div className="border-2 border-white rounded-[0.5em] text-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
              <p>React</p>
            </div>
            <div className="border-2 border-white rounded-[0.5em] text-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
              <p>MySQL</p>
            </div>
          </div>
        </div>

        <div className="card_desc 
        font-nunito block text-white font-light relative h-[0em] group-hover:h-[9em] leading-[1.2em] duration-500 overflow-hidden group-hover:mt-8">
          A full-stack e-commerce solution with real-time inventory management.
          <div className="absolute inset-0 bg-[#111111] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 mt-4 ">
            <a
              href="https://github.com/aditionkar/ecoNova"
              className="p-2 mt-4 text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
            >
              <Github className="  w-6 h-6" />
            </a>
            <a
              href=""
              className="p-2 mt-4 text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
          
        </div>

      </div>
    </>
  );
}

export default ProjCard1;
