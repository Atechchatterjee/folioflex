import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  return (
    <div
      className={cn(
        "w-full bg-black m-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border border-1 border-slate-200 px-6 h-16 mt-4 flex gap-5 rounded-full items-center",
        className
      )}
      {...props}
    >
      <Link href="/">
        <Image src="logo-dark.svg" width={120} height={10} alt="logo" />
      </Link>
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
        <Button
          variant="default-white"
          className="bg-white text-black rounded-full"
          onClick={() => window.location.assign("/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
