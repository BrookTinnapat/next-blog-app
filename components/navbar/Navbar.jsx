import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-2 border-red-500">
      <div className=" lg:gap-10 flex-1 md:flex sm:gap-2 hidden">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className=" flex-1 items-center font-bold">NEXT Blog</div>
      <div className=" items-center gap-[20px] font-xl flex">
        <ThemeToggle />
        <div className="md:flex gap-4 hidden">
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>
        <div className="flex">
          <AuthLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
