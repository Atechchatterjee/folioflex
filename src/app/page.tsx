"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  RiArrowLeftDownLine,
  RiArrowRightLine,
  RiCornerRightDownLine,
  RiExternalLinkLine,
  RiLightbulbFlashFill,
  RiShareForwardBoxFill,
} from "@remixicon/react";
import { motion } from "framer-motion";
import { darkerGrotesque } from "@/lib/font";
import { CardTitle } from "@/components/ui/card-hover-effect";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export default function Home() {
  return (
    <main className="">
      <div className="relative w-[85rem] mx-auto">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 px-4"
        >
          <Navbar />
          <div className="relative flex gap-5">
            <div className="relative flex w-[50%] flex-col gap-3 pt-[6rem]">
              <h1
                className={cn(
                  darkerGrotesque.className,
                  "text-[5rem] font-bold leading-none"
                )}
              >
                Share who you are to the world.
              </h1>
              <p className="text-lg">
                Effortlessly share your portfolio with others with some simple
                and quick steps
              </p>
              <div className="flex gap-5 mt-10 w-[13rem]">
                <Button variant="gradient-black" className="flex gap-4">
                  Create now
                  <RiArrowRightLine size={18} />
                </Button>
                <Button variant="outline" className="gap-4">
                  Quick Demo
                  <RiExternalLinkLine size={18} />
                </Button>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              <Image
                src="gradient.svg"
                alt="gradient"
                height={600}
                width={600}
                className="mt-[-2rem]"
              />
              <div className="absolute flex gap-5 top-[7rem] right-[10rem] bg-white/60 border border-slate-200 rounded-full w-[24rem] h-[4rem] items-center px-6 p-auto backdrop-blur-sm text-slate-600 text-md">
                <p className="flex-1 items-center">Choose a template</p>
                <RiCornerRightDownLine size={20} className="justify-self-end" />
              </div>
              <div className="absolute flex gap-5 top-[13rem] right-[0rem] bg-white/60 border border-slate-200 rounded-full w-[24rem] h-[4rem] items-center px-6 p-auto backdrop-blur-sm text-slate-600 text-md">
                <p className="flex-1">Fill in details</p>
                <RiArrowLeftDownLine size={20} className="justify-self-end" />
              </div>
              <div className="absolute flex gap-5 top-[19rem] right-[10rem] bg-white/60 border border-slate-200 rounded-full w-[24rem] h-[4rem] items-center px-6 p-auto backdrop-blur-sm text-slate-600 text-md">
                <p className="flex-1">That's it!! Share It</p>
                <RiShareForwardBoxFill size={20} className="justify-self-end" />
              </div>
            </div>
          </div>
        </motion.div>
        <Image
          src="shape-1.svg"
          height={152}
          width={98}
          alt="shape-1"
          className="absolute z-[-1] left-[2rem] top-[44rem] scale-150"
        />
        <Image
          src="shape-2.svg"
          height={258}
          width={291}
          alt="shape-2"
          className="absolute z-[-1] right-[-2rem] top-[42rem] scale-150"
        />
        <Image
          src="shape-3.svg"
          height={154}
          width={301}
          alt="shape-3"
          className="absolute z-[-1] left-[2rem] top-[44rem] scale-150 hidden"
        />

        <div className="flex flex-col mt-[10rem]">
          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 px-4"
          >
            <div className="flex flex-col gap-2">
              <h2
                className={cn(
                  darkerGrotesque.className,
                  "text-[2.5rem] font-bold leading-none"
                )}
              >
                Features
              </h2>
              <p>Here are some features that might excite you</p>
            </div>
            <div className="flex flex-col gap-5 mt-[2rem] pb-20">
              <div className="flex gap-5">
                <Card className="relative min-h-[20rem] rounded-2xl shadow-xl shadow-slate-100 hover:shadow-slate-300 hover:shadow-2xl">
                  <CardTitle
                    className={cn(
                      darkerGrotesque.className,
                      "text-slate-800 font-xl font-bold px-7 pt-0 text-[2rem] tracking-tight"
                    )}
                  >
                    Create with ease
                  </CardTitle>
                  <CardContent className="flex flex-col gap-5 px-7 mt-3 text-slate-600 w-[90%] text-lg">
                    <p>
                      Quickly fill out a form with your basic details and create
                      your portfolio
                    </p>
                    <Button
                      variant="ghost"
                      className="absolute bottom-2 left-2 gap-4 items-center"
                    >
                      Know more
                      <RiArrowRightLine size={20} />
                    </Button>
                    <Image
                      src="card-shape-1.svg"
                      height={152}
                      width={98}
                      alt="shape-1"
                      className="absolute bottom-4 right-4 opacity-5"
                    />
                  </CardContent>
                </Card>
                <Card className="relative min-h-[20rem] rounded-2xl shadow-xl shadow-slate-100 hover:shadow-slate-300 hover:shadow-2xl">
                  <CardTitle
                    className={cn(
                      darkerGrotesque.className,
                      "text-slate-800 font-xl font-bold px-7 pt-0 text-[2rem] tracking-tight"
                    )}
                  >
                    Downlaod Source Code
                  </CardTitle>
                  <CardContent className="flex flex-col gap-5 px-7 mt-3 text-slate-600 w-[90%] text-lg">
                    <p>
                      Want more control and customisation? Download the source
                      code of your portfolio and tune it to your heart’s
                      content.
                    </p>
                    <Button
                      variant="ghost"
                      className="absolute bottom-2 left-2 gap-4 items-center"
                    >
                      Know more
                      <RiArrowRightLine size={20} />
                    </Button>
                    <Image
                      src="card-shape-2.svg"
                      height={152}
                      width={152}
                      alt="shape-1"
                      className="absolute bottom-4 right-4 opacity-5"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="flex w-full gap-5">
                <Card className="relative min-h-[20rem] rounded-2xl shadow-xl shadow-slate-100 hover:shadow-slate-300 hover:shadow-2xl">
                  <CardTitle
                    className={cn(
                      darkerGrotesque.className,
                      "text-slate-800 font-xl font-bold px-7 pt-0 text-[2rem] tracking-tight"
                    )}
                  >
                    Share with the world
                  </CardTitle>
                  <CardContent className="flex flex-col gap-5 px-7 mt-3 text-slate-600 w-[90%] text-lg">
                    <p>Share your portfolio to the world!</p>
                    <Button
                      variant="ghost"
                      className="absolute bottom-2 left-2 gap-4 items-center"
                    >
                      Know more
                      <RiArrowRightLine size={20} />
                    </Button>
                    <Image
                      src="card-shape-3.svg"
                      height={152}
                      width={152}
                      alt="shape-1"
                      className="absolute bottom-4 right-4 opacity-5"
                    />
                  </CardContent>
                </Card>
                <Card className="flex-1 relative min-h-[20rem] rounded-2xl shadow-xl shadow-slate-100 hover:shadow-slate-300 hover:shadow-2xl">
                  <CardTitle
                    className={cn(
                      darkerGrotesque.className,
                      "text-slate-800 font-xl font-bold px-7 pt-0 text-[2rem] tracking-tight"
                    )}
                  >
                    Manage with Ease
                  </CardTitle>
                  <CardContent className="flex flex-col gap-5 px-7 mt-3 text-slate-600 w-[90%] text-lg">
                    <p>
                      Change/Update your portfolio with ease using your
                      dashboard admin user interface.
                    </p>
                    <Button
                      variant="ghost"
                      className="absolute bottom-2 left-2 gap-4 items-center"
                    >
                      Know more
                      <RiArrowRightLine size={20} />
                    </Button>
                    <Image
                      src="card-shape-4.svg"
                      height={152}
                      width={152}
                      alt="shape-1"
                      className="absolute bottom-4 right-4 opacity-5"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
          <div className="pl-[2rem] flex gap-5 bg-black text-white p-3 rounded-full items-center">
            <RiLightbulbFlashFill size={30} />
            <h2
              className={cn(
                darkerGrotesque.className,
                "text-[1.8rem] font-semibold mt-[-0.3rem]"
              )}
            >
              Motivation behind this app
            </h2>
          </div>
          <div className="rounded-3xl p-8 mt-5 items-center w-full border border-slate-200 text-lg text-slate-600">
            Not all programmers are web developers. This app was built so that
            anyone could build their portfolio’s easily and share it with the
            world. This could be a modular solution where people can built their
            portfolio’s from these templates and download the source code and
            make it their own if they so wish.
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-[4rem]">
          <h2
            className={cn(
              darkerGrotesque.className,
              "text-[2.5rem] font-semibold"
            )}
          >
            Want to contribute?
          </h2>
          <p className="text-lg text-slate-600">
            We welcome contributions from developers, designers, testers, and
            anyone passionate about improving our software. Whether you're an
            experienced professional or a newcomer eager to learn, there are
            many ways you can help.
          </p>
          <Button
            className="flex gap-4 text-blue-600 justify-start p-0 mt-[2rem] text-lg"
            variant="ghost"
          >
            Github <RiExternalLinkLine />
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
