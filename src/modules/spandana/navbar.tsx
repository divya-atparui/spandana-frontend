"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/departments", label: "Departments" },
    { href: "/doctors", label: "Our Doctors" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans",
        scrolled ? "bg-white shadow-md shadow-black/30" : "bg-blue-950"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20 gap-10">
          <div className="bg-white rounded-lg border border-white-500/50 lg:border-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/spandana_telugu.png"
                alt="Spandana Hospital Logo"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-blue-600",
                  scrolled ? "text-gray-700" : "text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 text-base"
            >
              <Link href="/">Book Appointment</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <span className="sr-only">Toggle menu</span>
                {isOpen ? (
                  <X
                    className={cn(
                      "h-6 w-6",
                      scrolled ? "text-gray-700" : "text-white"
                    )}
                  />
                ) : (
                  <Menu
                    className={cn(
                      "h-12 w-12",
                      scrolled ? "text-gray-700" : "text-white"
                    )}
                  />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-xl font-medium">Menu</SheetTitle>
              <Separator className="my-4" />
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 w-full text-base"
                >
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}