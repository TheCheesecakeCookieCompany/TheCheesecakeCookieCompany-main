"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, MapPin, Clock, Phone, Mail, X } from "lucide-react"

export default function SiteFooter() {
  // State to track which location's hours popup is shown
  const [hoursPopup, setHoursPopup] = useState<string | null>(null)

  // Function to show hours popup
  const showHoursPopup = (location: string) => {
    setHoursPopup(location)
  }

  // Function to close hours popup
  const closeHoursPopup = () => {
    setHoursPopup(null)
  }

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="container mx-auto px-4 py-12">
        {/* Company Info and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png"
                  alt="The Cheesecake Cookie Company Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="font-serif text-lg font-medium text-white">The Cheesecake Cookie Company</div>
            </div>
            <p className="text-sm">
              Handcrafted cheesecake cookies made with premium ingredients. Bringing joy through delicious treats since
              2015.
            </p>

            {/* Newsletter */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h3 className="text-white font-medium mb-3 relative inline-block">
                <span className="relative z-10">Join Our Newsletter</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
              </h3>
              <p className="text-sm mb-3">
                Subscribe to get special offers, free giveaways, and new flavor announcements.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white border-gray-200 text-gray-900"
                />
                <Button className="bg-purple-700 hover:bg-purple-800 whitespace-nowrap">Subscribe</Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-medium mb-4 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/flavors" className="text-sm hover:text-purple-400 transition-colors">
                  Cookie Flavors
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-sm hover:text-purple-400 transition-colors">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm hover:text-purple-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-purple-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-purple-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Header */}
          <div className="lg:col-span-6">
            <h3 className="text-white font-serif text-xl font-medium mb-6 relative inline-block">
              <span className="relative z-10 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                Our Locations
              </span>
              <span className="absolute bottom-0 left-0 w-3/4 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></span>
            </h3>

            {/* Locations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Anaheim Location */}
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-500">
                <h4 className="text-white font-medium mb-2">Anaheim Ghost Kitchen</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start">
                    <span className="text-purple-400 font-medium mr-2">•</span>
                    <span>App Pick Up or Delivery</span>
                  </p>
                  <p className="pl-5">
                    1560 S Lewis
                    <br />
                    Anaheim, CA 92805
                  </p>
                  <p className="flex items-start">
                    <Phone className="h-4 w-4 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                    <a href="tel:3105612581" className="hover:text-purple-400 transition-colors">
                      (310) 561-2581
                    </a>
                  </p>
                  <p className="flex items-start">
                    <Mail className="h-4 w-4 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                    <a
                      href="mailto:TheCheesecakeCookieCompany@gmail.com"
                      className="hover:text-purple-400 transition-colors break-all"
                    >
                      TheCheesecakeCookieCompany@gmail.com
                    </a>
                  </p>

                  {/* Hours Button */}
                  <button
                    onClick={() => showHoursPopup("anaheim")}
                    className="flex items-center mt-2 text-purple-400 hover:text-purple-300 transition-colors w-full bg-gray-800/70 p-2 rounded"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    <span>View Business Hours</span>
                  </button>
                </div>
              </div>

              {/* Gardena Location */}
              <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-500">
                <h4 className="text-white font-medium mb-2">Gardena Hub</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start">
                    <span className="text-purple-400 font-medium mr-2">•</span>
                    <span className="font-medium">Door Dash Delivery Only (No Pick Up)</span>
                  </p>
                  <p className="pl-5">
                    15032 South Normandie Avenue
                    <br />
                    Gardena, CA 90247
                  </p>
                  <p className="flex items-start">
                    <Phone className="h-4 w-4 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                    <a href="tel:3105612581" className="hover:text-purple-400 transition-colors">
                      (310) 561-2581
                    </a>
                  </p>
                  <p className="flex items-start">
                    <Mail className="h-4 w-4 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                    <a
                      href="mailto:TheCheesecakeCookieCompany@gmail.com"
                      className="hover:text-purple-400 transition-colors break-all"
                    >
                      TheCheesecakeCookieCompany@gmail.com
                    </a>
                  </p>

                  {/* Hours Button */}
                  <button
                    onClick={() => showHoursPopup("gardena")}
                    className="flex items-center mt-2 text-purple-400 hover:text-purple-300 transition-colors w-full bg-gray-800/70 p-2 rounded"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    <span>View Business Hours</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} The Cheesecake Cookie Company. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Anaheim Hours Popup */}
      {hoursPopup === "anaheim" && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full relative animate-fadeIn">
            <button
              onClick={closeHoursPopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              aria-label="Close hours popup"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 mr-2 text-purple-400" />
              <h3 className="text-white font-medium text-lg">Anaheim Ghost Kitchen Hours</h3>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium text-purple-300">
                  <p>Monday:</p>
                  <p>Tuesday:</p>
                  <p>Wednesday:</p>
                  <p>Thursday:</p>
                  <p>Friday:</p>
                  <p>Saturday:</p>
                  <p>Sunday:</p>
                </div>
                <div className="text-white">
                  <p>10:00 am - 1:30 am</p>
                  <p>10:00 am - 1:30 am</p>
                  <p>10:00 am - 1:30 am</p>
                  <p>10:00 am - 1:30 am</p>
                  <p>10:00 am - 2:30 am</p>
                  <p>10:00 am - 2:30 am</p>
                  <p>10:00 am - 1:30 am</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button onClick={closeHoursPopup} className="bg-purple-600 hover:bg-purple-700">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Gardena Hours Popup */}
      {hoursPopup === "gardena" && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full relative animate-fadeIn">
            <button
              onClick={closeHoursPopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              aria-label="Close hours popup"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 mr-2 text-purple-400" />
              <h3 className="text-white font-medium text-lg">Gardena Hub Hours</h3>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium text-purple-300">
                  <p>Monday:</p>
                  <p>Tuesday:</p>
                  <p>Wednesday:</p>
                  <p>Thursday:</p>
                  <p>Friday:</p>
                  <p>Saturday:</p>
                  <p>Sunday:</p>
                </div>
                <div className="text-white">
                  <p>06:00 pm - 11:00 pm</p>
                  <p>06:00 pm - 11:00 pm</p>
                  <p>06:00 pm - 11:00 pm</p>
                  <p>09:00 am - 05:00 pm</p>
                  <p>Hours Vary</p>
                  <p>Hours Vary</p>
                  <p>Hours Vary</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button onClick={closeHoursPopup} className="bg-purple-600 hover:bg-purple-700">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
