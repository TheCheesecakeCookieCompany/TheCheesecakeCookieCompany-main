"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import { useIsMobile } from "@/components/ui/use-mobile"
import { AuthPopup } from "./auth-popup"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleAuthPopup = () => {
    setIsAuthPopupOpen(!isAuthPopupOpen)
  }

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Get link class based on active state
  const getLinkClass = (path: string) => {
    const baseClass = "mx-4 px-3 py-2 text-sm font-medium rounded-md transition-colors relative group"
    const activeClass = "text-purple-700 bg-purple-50"
    const inactiveClass = "hover:text-purple-700 hover:bg-purple-50"

    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Company Name - Left-aligned */}
            <Link href="/" className="flex items-center" scroll={true}>
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src="/images/logo.png"
                  alt="The Cheesecake Cookie Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="block">
                <div className="font-serif text-xs sm:text-sm">The</div>
                <div className="font-serif text-sm sm:text-lg font-bold tracking-wider">CHEESECAKE COOKIE</div>
                <div className="font-serif text-xs sm:text-sm">Company</div>
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden md:flex items-center">
              <Link href="/" className={getLinkClass("/")} scroll={true}>
                Home
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transition-transform origin-left ${isActive("/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </Link>
              <Link href="/flavors" className={getLinkClass("/flavors")} scroll={true}>
                Cookie Flavors
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transition-transform origin-left ${isActive("/flavors") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </Link>
              <Link href="/catering" className={getLinkClass("/catering")} scroll={true}>
                Catering
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transition-transform origin-left ${isActive("/catering") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </Link>
              <Link href="/events" className={getLinkClass("/events")} scroll={true}>
                Events
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transition-transform origin-left ${isActive("/events") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </Link>
              <Link href="/about" className={getLinkClass("/about")} scroll={true}>
                Our Story
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transition-transform origin-left ${isActive("/about") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </Link>
              <Link href="/contact" className={getLinkClass("/contact")} scroll={true}>
                Contact
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transition-transform origin-left ${isActive("/contact") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                ></span>
              </Link>
            </nav>

            {/* Action Buttons - Right */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" onClick={toggleAuthPopup}>
                <User className="h-5 w-5" />
              </Button>
              <Button className="hidden md:flex bg-purple-700 hover:bg-purple-800" asChild>
                <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`text-sm font-medium p-2 rounded-md transition-colors ${isActive("/") ? "bg-purple-50 text-purple-700" : "hover:bg-purple-50"}`}
                  onClick={() => setIsMenuOpen(false)}
                  scroll={true}
                >
                  Home
                </Link>
                <Link
                  href="/flavors"
                  className={`text-sm font-medium p-2 rounded-md transition-colors ${isActive("/flavors") ? "bg-purple-50 text-purple-700" : "hover:bg-purple-50"}`}
                  onClick={() => setIsMenuOpen(false)}
                  scroll={true}
                >
                  Cookie Flavors
                </Link>
                <Link
                  href="/catering"
                  className={`text-sm font-medium p-2 rounded-md transition-colors ${isActive("/catering") ? "bg-purple-50 text-purple-700" : "hover:bg-purple-50"}`}
                  onClick={() => setIsMenuOpen(false)}
                  scroll={true}
                >
                  Catering
                </Link>
                <Link
                  href="/events"
                  className={`text-sm font-medium p-2 rounded-md transition-colors ${isActive("/events") ? "bg-purple-50 text-purple-700" : "hover:bg-purple-50"}`}
                  onClick={() => setIsMenuOpen(false)}
                  scroll={true}
                >
                  Events
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium p-2 rounded-md transition-colors ${isActive("/about") ? "bg-purple-50 text-purple-700" : "hover:bg-purple-50"}`}
                  onClick={() => setIsMenuOpen(false)}
                  scroll={true}
                >
                  Our Story
                </Link>
                <Link
                  href="/contact"
                  className={`text-sm font-medium p-2 rounded-md transition-colors ${isActive("/contact") ? "bg-purple-50 text-purple-700" : "hover:bg-purple-50"}`}
                  onClick={() => setIsMenuOpen(false)}
                  scroll={true}
                >
                  Contact
                </Link>
                <Button className="w-full bg-purple-700 hover:bg-purple-800 mt-2" asChild>
                  <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                    Order Now
                  </a>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Auth Popup */}
      <AuthPopup isOpen={isAuthPopupOpen} onClose={() => setIsAuthPopupOpen(false)} />
    </>
  )
}
