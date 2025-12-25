"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, Search } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [auth, setAuth] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  return (
    <header className="h-16 border-b">
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="block lg:hidden">
            <CiMenuFries onClick={() => setOpen(!open)} />
          </div>
          <Link href={"/"}>Serfeli Emlak</Link>
        </div>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-4 text-gray-600">
            <li>
              <Link
                className="inline-block px-3 py-1 hover:text-primary"
                href={"/"}
              >
                Alqı-satqı
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-3 py-1 hover:text-primary"
                href={"/"}
              >
                Kirayə
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-3 py-1 hover:text-primary"
                href={"/"}
              >
                Günlük
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-3 py-1 hover:text-primary"
                href={"/"}
              >
                Agentliklər
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-3 py-1 hover:text-primary"
                href={"/"}
              >
                Yaşayış kompleksləri
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <Search />
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <Heart />
          </button>
          {auth ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size={"lg"}>
                  <FaUser />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Rashad Alakbarov</DropdownMenuLabel>

                <DropdownMenuGroup>
                  <DropdownMenuItem>Şəxsi kabinet</DropdownMenuItem>
                  <DropdownMenuItem>Tənzimləmələr</DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={() => setAuth(false)}>
                  Çıxış
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant={"outline"} size={"lg"}>
              Giriş
            </Button>
          )}
        </div>
      </div>

      {open && (
        <div className="block lg:hidden">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute top-10 left-0 w-full h-screen z-20"
            >
              <div className="text-xl font-semibold bg-amber-600 text-white py-10 m-6 rounded-xl">
                <ul className="flex flex-col justify-center items-center gap-10">
                  <li>
                    <Link className="inline-block px-3 py-1" href={"/"}>
                      Alqı-satqı
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-block px-3 py-1" href={"/"}>
                      Kirayə
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-block px-3 py-1" href={"/"}>
                      Günlük
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-block px-3 py-1" href={"/"}>
                      Agentliklər
                    </Link>
                  </li>
                  <li>
                    <Link className="inline-block px-3 py-1" href={"/"}>
                      Yaşayış kompleksləri
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </header>
  );
};

export default Header;
