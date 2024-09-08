"use client";

import { cn } from "@/utils/cn";
/* eslint-disable @next/next/no-img-element */
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, ThemeToggle } from "../common";

const NAVIGATION = [
  { name: "Home", href: "/", active: false },
  { name: "About", href: "/about", active: false },
  { name: "Projects", href: "/projects", active: false },
];

export default function Navbar() {
  const [navigation, setNavigation] = useState(NAVIGATION);
  const pathname = usePathname();

  const activeNavigation = (href: string) => {
    setNavigation(
      navigation.map((item) => {
        if (item.href === href) {
          return { ...item, active: true };
        } else {
          return { ...item, active: false };
        }
      }),
    );
  };

  useEffect(() => {
    activeNavigation(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Disclosure as="nav" className="bg-background shadow dark:bg-background">
      <div className="fixed top-0 z-50 mx-auto w-full bg-background px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-background hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn("inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground", {
                    "border-b-2 border-foreground": item.active,
                  })}
                  onClick={() => activeNavigation(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="relative flex flex-shrink-0 items-center sm:absolute sm:left-1/2">
              <Link href="/">
                <Logo className="h-20 w-auto fill-foreground" />
              </Link>
            </div>
            <div className="absolute right-0 flex flex-shrink-0 items-center sm:relative">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="fixed top-16 z-10 w-full bg-background sm:hidden">
        <div className="space-y-1 pb-4 pt-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => activeNavigation(item.href)}>
              <DisclosureButton
                className={cn("block w-full py-2 pl-3 pr-4 text-base font-medium text-foreground", {
                  "border-l-4 border-gray-700 bg-foreground text-background": item.active,
                })}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
