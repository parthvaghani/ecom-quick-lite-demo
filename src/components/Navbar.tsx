"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Sparkles, Instagram, Mail, Phone } from "lucide-react";
import { appConfig } from "@/appConfig";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ROUTES } from "@/utils/constants";
import Image from "next/image";

export function Navbar() {
  const [isScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="text-primary hover:text-primary/80 flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );

  const MobileNavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="flex items-center gap-2 p-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors text-primary"
      onClick={() => setIsSheetOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <>
      {/* Spacer div to prevent content overlap */}
      {/* <div className={`${isScrolled ? "h-0" : "h-16"} w-full`}></div> */}
      <div className={`h-16 w-full`}></div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "top-4 left-4 right-4 mx-auto max-w-8xl rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-8xl">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 font-bold text-gray-900 dark:text-white"
              >
                <Image
                  src="/images/logo.png"
                  alt="Aavkar Mukhwas Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-lg sm:text-xl text-primary">
                  {appConfig.title}®
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-1 text-primary">
              {/* {/* <NavLink href="/feature">
                    <Sparkles className="h-4 w-4" />
                    Feature
                  </NavLink> */}
              <NavLink href={ROUTES.CATEGORIES}>
                <Sparkles className="h-4 w-4" />
                Our Mukhwas Collection
              </NavLink>
              <NavLink href="https://www.instagram.com/aavkar_mukhwas">
                <Instagram className="h-4 w-4" />
                Instagram
              </NavLink>

              <NavLink href="mailto:sales@aavkarmukhwas.com">
                <Mail className="h-4 w-4" />
                Email Support
              </NavLink>

              <NavLink href="tel:+918128826764">
                <Phone className="h-4 w-4" />
                Call Us
              </NavLink>
              {/* <NavLink href="/profile">
                    {metadata?.photoURL ? (
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={metadata.photoURL} alt="Profile" />
                        <AvatarFallback>
                          {metadata.displayName?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                    Profile
                  </NavLink> */}

              {/* <ThemeToggle /> */}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex items-center">
              {/* <ThemeToggle /> */}
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72 bg-background">
                  <SheetTitle className="flex items-center gap-2 text-primary">
                    <Image
                      src="/images/logo.png"
                      alt="Aavkar Mukhwas Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{appConfig.title}®</span>
                  </SheetTitle>
                  <div className="flex flex-col space-y-2 mt-8 bg-background text-primary">
                    <MobileNavLink href="/categories">
                      <Sparkles className="h-4 w-4" />
                      Our Mukhwas Collection
                    </MobileNavLink>

                    <MobileNavLink href="https://www.instagram.com/aavkar_mukhwas">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </MobileNavLink>

                    <MobileNavLink href="mailto:sales@aavkarmukhwas.com">
                      <Mail className="h-4 w-4" />
                      Email Support
                    </MobileNavLink>

                    <MobileNavLink href="tel:+918128826764">
                      <Phone className="h-4 w-4" />
                      Call Us (+91 81288 26764)
                    </MobileNavLink>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
