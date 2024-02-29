"use client";
import React from "react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

function page() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-gray-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4 mt-[80px]">
        <h1 className="relative z-10 text-7xl bg-clip-text text-transparent bg-gradient-to-b text-white  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto mt-10 text-[15px] text-center relative z-10">
          We're here to help with questions about our courses, programs or events. Reach out and let us know how we can assist you in your musical journey.
        </p>
        <input
          type="email"
          placeholder="Your Email Address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4"
        />
        <textarea className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4 resize-none" placeholder="Your Message" id="" cols={30} rows={10}></textarea>
      </div>
      <BackgroundBeams />
      <Link href={"/"} >
            <Button type="submit" borderRadius="1.75rem">Submit</Button>
      </Link>
    </div>
  )
}

export default page