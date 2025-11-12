"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Sparkles, Instagram, Mail, Phone, ShoppingBag } from "lucide-react";
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
import { SearchIconButton } from "@/components/ui/GlobalSearchBar";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "mx-auto max-w-8xl rounded-b-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
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
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl text-primary">
                    {appConfig.title}®
                  </span>
                  <Badge 
                    variant="outline" 
                    className="text-[10px] px-1.5 py-0.5 border-orange-500 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 font-bold uppercase tracking-wider"
                  >
                    DEMO
                  </Badge>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-1 text-primary">
              {/* {/* <NavLink href="/feature">
                    <Sparkles className="h-4 w-4" />
                    Feature
                  </NavLink> */}
              <NavLink href={ROUTES.PRODUCTS}>
                <ShoppingBag className="h-4 w-4" />
                Products
              </NavLink>
              <NavLink href={ROUTES.CATEGORIES}>
                <Sparkles className="h-4 w-4" />
                Collection
              </NavLink>
              <NavLink href="https://www.instagram.com/ripplestacks">
                <Instagram className="h-4 w-4" />
                Instagram
              </NavLink>

              <NavLink href="mailto:sales@aavkarmukhwas.com">
                <Mail className="h-4 w-4" />
                Email Support
              </NavLink>

              <NavLink href="tel:+916353528830">
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
              <div className="flex items-center ml-4">
                <SearchIconButton />
              </div>
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
                    <div className="flex items-center gap-2">
                      <span>{appConfig.title}®</span>
                      <Badge 
                        variant="outline" 
                        className="text-[10px] px-1.5 py-0.5 border-orange-500 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/30 font-bold uppercase tracking-wider"
                      >
                        DEMO
                      </Badge>
                    </div>
                  </SheetTitle>
                  <div className="flex flex-col space-y-2 mt-8 bg-background text-primary">
                    <MobileNavLink href={ROUTES.PRODUCTS}>
                      <ShoppingBag className="h-4 w-4" />
                      Products
                    </MobileNavLink>

                    <MobileNavLink href="/categories">
                      <Sparkles className="h-4 w-4" />
                      Collection
                    </MobileNavLink>

                    <MobileNavLink href="https://www.instagram.com/ripplestacks">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </MobileNavLink>

                    <MobileNavLink href="mailto:sales@aavkarmukhwas.com">
                      <Mail className="h-4 w-4" />
                      Email Support
                    </MobileNavLink>

                    <MobileNavLink href="tel:+916353528830">
                      <Phone className="h-4 w-4" />
                      Call Us (+91 63535 28830 )
                    </MobileNavLink>
                  </div>
                </SheetContent>
              </Sheet>
              <SearchIconButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
