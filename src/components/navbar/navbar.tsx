"use client";

import { cn } from "@/utils/cn";
/* eslint-disable @next/next/no-img-element */
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAVIGATION = [
  { name: "Home", href: "/", active: false },
  { name: "About", href: "/about", active: false },
  { name: "Projects", href: "/projects", active: false },
  { name: "Contact", href: "/contact", active: false },
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
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Your Company" src="/logo/1.png" className="h-16 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn("inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900", {
                    "border-b-2 border-gray-700": item.active,
                  })}
                  onClick={() => activeNavigation(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="absolute z-10 w-full bg-white sm:hidden">
        <div className="space-y-1 pb-4 pt-2">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Calendar
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
