import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" width={40} height={40} />
        <span className="text-xl font-semibold">Serfeli Emlak</span>
      </div>
    </Link>
  );
};

export default Logo;
