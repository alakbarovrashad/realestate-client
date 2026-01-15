import React from "react";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href={"/"}>
        <FaFacebookF />
      </Link>
      <Link href={"/"}>
        <FaYoutube />
      </Link>
    </div>
  );
};

export default Social;
