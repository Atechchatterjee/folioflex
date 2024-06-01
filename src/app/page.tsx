"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bricolage_Grotesque } from "next/font/google";
import { RiArrowRightLine, RiExternalLinkLine } from "@remixicon/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 px-4"
        >
          <Navbar />
          <div className="flex flex-col gap-3 w-[55%] self-center text-center pt-[6rem]">
            <h1
              className={cn(
                bricolageGrotesque.className,
                "text-[5rem] font-bold leading-none"
              )}
            >
              Share who you are to the world.
            </h1>
            <p className="text-lg">
              Effortlessly share your portfolio with others with some simple and
              quick steps
            </p>
            <div className="flex gap-5 self-center mt-10">
              <Button variant="gradient-black" className="flex gap-4">
                Create now
                <RiArrowRightLine size={18} />
              </Button>
              <Button variant="outline" className="gap-4">
                Know more
                <RiExternalLinkLine size={18} />
              </Button>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      {/* <div className="w-[50%] mx-auto text-center leading-none mt-24">
        <div className="flex flex-col gap-3 w-full">
          <h1
            className={cn(
              bricolageGrotesque.className,
              "text-[5rem] font-bold"
            )}
          >
            Share who you are to the world.
          </h1>
          <p className="text-lg">
            Effortlessly share your portfolio with others with some simple and
            quick steps
          </p>
          <div className="flex gap-5 self-center mt-10">
            <Button className="gap-4">
              Create now
              <RiArrowRightLine size={18} />
            </Button>
            <Button variant="outline" className="gap-4">
              Know more
              <RiExternalLinkLine size={18} />
            </Button>
          </div>
        </div>
      </div> */}
    </main>
  );
}
