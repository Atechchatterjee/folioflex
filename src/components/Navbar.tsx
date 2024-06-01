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
        "w-[60%] m-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border border-1 border-slate-200 px-6 h-16 mt-4 flex gap-5 rounded-lg items-center",
        className
      )}
      {...props}
    >
      <Link href="/">
        <Image src="logo.svg" width={120} height={10} alt="logo" />
      </Link>
      <div className="flex gap-7 ml-auto text-sm font-medium items-center">
        <Link href="#" className="text-slate-600 hover:text-slate-800">
          Features
        </Link>
        <Link href="#" className="text-slate-600 hover:text-slate-800">
          About
        </Link>
        <Link href="#" className="text-slate-600 hover:text-slate-800">
          Contact
        </Link>
        <Button
          variant="gradient-black"
          onClick={() => window.location.assign("/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
