import React from "react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { FooterMenu } from "@/data/FooterData";
import Logo from "./Logo";
import Subscribe from "./Subscribe";
import Social from "./Social";

const ClientFooter = () => {
  return (
    <footer>
      <Subscribe />

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-4 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-6 md:py-10 lg:grid-cols-5">
        <div className="flex flex-col items-start gap-4 lg:col-span-2">
          <Logo />
          <p className="text-muted-foreground text-balance">
            An open-source collection of copy-and-paste shadcn/ui components,
            blocks, and templates - paired with a powerful Shadcn theme
            generator to craft, customize, and ship faster.
          </p>
          <div className="w-36">
            <Social />
            <Separator className="mt-4" />
          </div>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Roadmap
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Changelog
          </a>
        </div>

        {FooterMenu.map((item) => (
          <div className="flex flex-col gap-5" key={item.title}>
            <div className="text-lg font-medium">{item.title}</div>
            <ul className="text-muted-foreground space-y-3">
              {item.menu.map((eleman) => (
                <li key={eleman.item}>
                  <Link
                    href={eleman.url}
                    className="hover:text-foreground transition-colors duration-300"
                  >
                    {eleman.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto w-full max-w-7xl text-center px-4 py-6 sm:px-6 border-t text-muted-foreground">
        <div>
          <p className="text-balance max-sm:text-center">
            Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş
            elanların məzmununa görə məsuliyyət daşımır.
          </p>
          <p className="mt-2 md:mt-0">
            &copy; 2008-2026 Digital Classifieds MMC.VÖEN: 1405631661
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ClientFooter;
