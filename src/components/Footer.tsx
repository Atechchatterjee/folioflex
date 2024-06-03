import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative w-full bg-black py-5 mt-[5rem] items-center">
      <div className="flex w-[85rem] m-auto">
        <Image src="logo-dark.svg" width={120} height={10} alt="logo" />
        <div className="flex gap-7 ml-auto text-sm font-medium items-center">
          <Link href="#" className="text-slate-300 hover:text-white">
            Features
          </Link>
          <Link href="#" className="text-slate-300 hover:text-white">
            About
          </Link>
          <Link href="#" className="text-slate-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
