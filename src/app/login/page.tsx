"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { RiGoogleFill, RiGithubFill } from "@remixicon/react";

export default function Login() {
  return (
    <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Let's get you started building you portfolio!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 mt-6">
          <Button variant="gradient-black" className="flex gap-3">
            <RiGithubFill />
            Github Sign In
          </Button>
          <Button variant="gradient" className="gap-3">
            <RiGoogleFill />
            Google Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
