"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Instagram, Facebook, Twitter, Mail, MapPin, Calendar } from "lucide-react"
import type React from "react"

export default function ContactPage() {
  // Refs for the sections with 3D effects
  const formSectionRef = useRef<HTMLDivElement>(null)
  const infoSectionRef = useRef<HTMLDivElement>(null)
  const locationsSectionRef = useRef<HTMLDivElement>(null)
  const instagramSectionRef = useRef<HTMLDivElement>(null)

  // Function to handle subtle 3D hover effect
  const handleHover = (e: MouseEvent, sectionRef: React.RefObject<HTMLDivElement>) => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    const rect = section.getBoundingClientRect()

    // Only apply a subtle effect to the entire section, not individual elements inside
    // This creates a more cohesive, less distracting effect
    if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
      // Apply a very subtle shadow effect to indicate depth
      section.style.boxShadow = "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
      section.style.transform = "translateY(-2px)"
    } else {
      section.style.boxShadow = "0 5px 20px -10px rgba(0, 0, 0, 0.1)"
      section.style.transform = "translateY(0)"
    }
  }

  // Reset transforms when mouse leaves
  const resetTransforms = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (!sectionRef.current) return

    const section = sectionRef.current
    section.style.boxShadow = "0 5px 20px -10px rgba(0, 0, 0, 0.1)"
    section.style.transform = "translateY(0)"
  }

  // Add event listeners for mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handleHover(e, formSectionRef)
      handleHover(e, infoSectionRef)
      handleHover(e, locationsSectionRef)
      handleHover(e, instagramSectionRef)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - styled like home page */}
      <section className="relative h-[80vh] overflow-hidden px-4 py-8 md:py-12 lg:py-16">
        <div className="absolute inset-x-4 inset-y-8 md:inset-y-12 lg:inset-y-16 z-0 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/1.IG-Image.jpeg"
            alt="Colorful assortment of cheesecake cookies on a black plate with red roses on a pink background"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Get in <span className="text-purple-200">touch</span> with us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Have questions or feedback? We'd love to hear from you
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                Send Message <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Follow Us <Instagram className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Note Section - NEW */}
      <section className="py-10 bg-gradient-to-r from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-purple-100 relative transform -translate-y-16">
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-700"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
              </svg>
            </div>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">We're Cookie People. Let's Talk!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you have questions about our flavors, want to place a special order, or just want to say hello,
                we're here to help make your cookie dreams come true.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span className="text-purple-700 font-medium">Quick Responses</span>
                </div>
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span className="text-purple-700 font-medium">Friendly Service</span>
                </div>
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span className="text-purple-700 font-medium">Cookie Expertise</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center transform rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-700"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
              </svg>
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12L0 0H40L20 12Z" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div
                ref={formSectionRef}
                className="relative overflow-hidden bg-white rounded-xl p-5 shadow-sm transition-all duration-300 h-full flex flex-col"
                onMouseLeave={() => resetTransforms(formSectionRef)}
              >
                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-100/30 rounded-full opacity-50 z-0"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-100/30 rounded-full opacity-50 z-0"></div>

                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4 transition-transform duration-300">
                    <MessageSquare className="h-8 w-8 text-purple-700" />
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Send us a message</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Have a question about our cookies, catering services, or upcoming events? Fill out the form below
                    and we'll get back to you as soon as possible.
                  </p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <Input id="first-name" placeholder="Your first name" />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Your last name" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <Input id="subject" placeholder="What is your message about?" />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message here..." className="h-24" />
                    </div>

                    <Button className="w-full bg-purple-700 hover:bg-purple-800">Send Message</Button>

                    {/* Image Grid */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <h4 className="text-sm text-gray-500 mb-3 relative inline-block font-normal">
                        Our most popular cookies:
                        <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-purple-300 rounded-full"></span>
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="relative aspect-square rounded-md overflow-hidden">
                          <Image
                            src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/CookiesNCream.webp"
                            alt="Cookies N' Cream Cheesecake Cookie"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="relative aspect-square rounded-md overflow-hidden">
                          <Image
                            src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/Strawberry.webp"
                            alt="Strawberry Cheesecake Cookie"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="relative aspect-square rounded-md overflow-hidden">
                          <Image
                            src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/Lemon.webp"
                            alt="Lemon Cheesecake Cookie"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <h4 className="text-sm text-gray-500 mb-3 relative inline-block font-normal">
                        Watch our customers enjoy our cookies:
                        <span className="absolute bottom-0 left-0 w-3/4 h-0.5 bg-purple-300 rounded-full"></span>
                      </h4>
                      <div className="relative aspect-square rounded-md overflow-hidden shadow-md">
                        <video className="w-full h-full object-cover" controls autoPlay loop muted playsInline>
                          <source
                            src="https://pub-334dd080718649afae28f757b2607b1f.r2.dev/client-review-table-flavors.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div
                ref={infoSectionRef}
                className="relative overflow-hidden bg-white rounded-xl p-8 shadow-sm transition-all duration-300"
                onMouseLeave={() => resetTransforms(infoSectionRef)}
              >
                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-purple-100/30 rounded-full opacity-50 z-0"></div>
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-100/30 rounded-full opacity-50 z-0"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-purple-700" />
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 mb-8">We'd love to hear from you! Here's how you can reach us.</p>

                  <div className="space-y-8">
                    {/* Email */}
                    <div className="flex items-start space-x-4 transition-transform duration-300">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-purple-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                        <p className="text-gray-600 mb-2">For general inquiries and questions:</p>
                        <a
                          href="mailto:info@TheCheesecakeCookieCompany.com"
                          className="text-purple-700 font-medium hover:underline"
                        >
                          info@TheCheesecakeCookieCompany.com
                        </a>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex items-start space-x-4 transition-transform duration-300">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Instagram className="h-6 w-6 text-purple-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
                        <p className="text-gray-600 mb-4">
                          Stay updated with our latest flavors, events, and promotions on social media.
                        </p>

                        <div className="flex space-x-4">
                          <a
                            href="https://instagram.com/cheesecakecookieco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-3 rounded-full hover:shadow-lg transition-all hover:scale-110"
                          >
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                          </a>
                          <a
                            href="https://facebook.com/cheesecakecookieco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white p-3 rounded-full hover:shadow-lg transition-all hover:scale-110"
                          >
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                          </a>
                          <a
                            href="https://twitter.com/cheesecakecookieco"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-400 text-white p-3 rounded-full hover:shadow-lg transition-all hover:scale-110"
                          >
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Locations */}
                    <div
                      ref={locationsSectionRef}
                      className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm mt-8 transition-all duration-300"
                      onMouseLeave={() => resetTransforms(locationsSectionRef)}
                    >
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 transition-transform duration-300">
                        <MapPin className="h-6 w-6 text-purple-700" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4">Our Locations</h3>

                      <div className="space-y-6">
                        <div className="transition-transform duration-300">
                          <h4 className="font-medium text-gray-900 flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Anaheim Ghost Kitchen
                          </h4>
                          <p className="text-gray-600 ml-4">
                            1560 S Lewis
                            <br />
                            Anaheim, CA 92805
                          </p>
                        </div>

                        <div className="transition-transform duration-300">
                          <h4 className="font-medium text-gray-900 flex items-center">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Gardena Hub
                          </h4>
                          <p className="text-gray-600 ml-4">
                            15032 South Normandie Avenue
                            <br />
                            Gardena, CA 90247
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Instagram Feed Preview */}
                    <div
                      ref={instagramSectionRef}
                      className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 shadow-sm mt-8 transition-all duration-300"
                      onMouseLeave={() => resetTransforms(instagramSectionRef)}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4 transition-transform duration-300">
                        <Instagram className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us on Instagram</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <a
                          href="https://instagram.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative aspect-square rounded-md overflow-hidden group transition-transform duration-300"
                        >
                          <Image
                            src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/5.IG-Image.jpeg"
                            alt="Instagram post"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </a>
                        <a
                          href="https://instagram.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative aspect-square rounded-md overflow-hidden group transition-transform duration-300"
                        >
                          <Image
                            src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/6.IG-Image.jpeg"
                            alt="Instagram post"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </a>
                        <a
                          href="https://instagram.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative aspect-square rounded-md overflow-hidden group transition-transform duration-300"
                        >
                          <Image
                            src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/7.IG-Image.jpeg"
                            alt="Instagram post"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </a>
                      </div>
                      <div className="mt-4 text-center">
                        <a
                          href="https://instagram.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-700 font-medium hover:underline inline-flex items-center"
                        >
                          <Instagram className="h-4 w-4 mr-2" />
                          @cheesecakecookieco
                        </a>
                      </div>
                    </div>
                    {/* Quote Section - NEW */}
                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-sm mt-8 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                        </svg>
                      </div>

                      <blockquote className="text-lg text-gray-700 italic mb-4 relative">
                        <span className="absolute -top-2 -left-2 text-4xl text-purple-200">"</span>
                        <p className="pl-4">
                          This is more than just dessert—it's an experience. And now, it's yours to enjoy.
                        </p>
                        <span className="absolute -bottom-4 -right-2 text-4xl text-purple-200">"</span>
                      </blockquote>

                      <div className="flex items-center mt-6">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <span className="text-purple-700 font-serif font-bold">S</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Stephon</p>
                          <p className="text-sm text-gray-500">Founder, The Cheesecake Cookie Company</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle textColor="text-gray-800">Frequently Asked Questions</SectionTitle>
            <p className="text-lg text-gray-600 mb-12">
              Find answers to our most commonly asked questions. If you don't see what you're looking for, feel free to
              contact us directly.
            </p>

            <div className="space-y-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-12 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-red-600 drop-shadow-md"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
                    <path d="M4.23 10.39a.5.5 0 1 0 .71.7.49.49 0 0 0 0-.7.48.48 0 0 0-.71 0z"></path>
                    <path d="M10.83 5.17a.5.5 0 1 0 .71.7.49.49 0 0 0 0-.7.51.51 0 0 0-.71 0z"></path>
                    <path d="M10.83 9.9a.5.5 0 1 0 .71.7.49.49 0 0 0 0-.7.51.51 0 0 0-.71 0z"></path>
                    <path d="M8.65 11.65a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
                    <path d="M14.36 11.65a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
                    <path d="M18.14 14.14a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
                    <path d="M5.5 14.5a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
                    <path d="M12.5 16.5a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
                  </svg>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How can I order your cookies?</h3>
                  <p className="text-gray-600">
                    You can order our cookies through our online store, or visit one of our pop-up locations. For
                    catering and bulk orders, please contact us directly.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-100 to-white rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-12 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-pink-600 drop-shadow-md"
                  >
                    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                    <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                    <circle cx="7" cy="18" r="2" />
                    <path d="M15 18H9" />
                    <circle cx="17" cy="18" r="2" />
                  </svg>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer nationwide shipping?</h3>
                  <p className="text-gray-600">
                    Yes! We ship our cookies nationwide. Orders are carefully packaged to ensure they arrive fresh and
                    intact.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-100 to-white rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-12 transition-all duration-300">
                  <Calendar className="h-8 w-8 text-blue-600 drop-shadow-md" />
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    How far in advance should I place a catering order?
                  </h3>
                  <p className="text-gray-600">
                    For catering orders, we recommend placing your order at least 7-10 days in advance to ensure
                    availability. For large events, 2-3 weeks notice is preferred.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-100 to-white rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-12 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-green-600 drop-shadow-md"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
                    <path d="M8.5 8.5a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
                    <path d="M14 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                    <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                    <path d="M16 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                    <path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                  </svg>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">How should I store my cookies?</h3>
                  <p className="text-gray-600">
                    Our cookies are best enjoyed chilled. Store them in the refrigerator for up to 7 days, or freeze for
                    up to 3 months.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] relative">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-100 to-white rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-12 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-yellow-600 drop-shadow-md"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
                    <path d="M6 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                    <path d="M10 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                    <path d="M15 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                    <path d="M12.5 15a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0z"></path>
                    <path d="M7 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                    <path d="M16 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
                  </svg>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer gluten-free options?</h3>
                  <p className="text-gray-600">
                    We're currently developing gluten-free versions of our most popular flavors. Sign up for our
                    newsletter to be the first to know when they're available!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to experience cookie perfection?</h2>
          <p className="text-purple-100 max-w-2xl mx-auto mb-8">
            Order online for local pickup or delivery, or contact us about catering for your next event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 transition-transform hover:scale-105"
              asChild
            >
              <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white/20 border-white text-white hover:bg-white/30 transition-transform hover:scale-105"
            >
              Follow Us <Instagram className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Section Title Component - same as used on homepage
function SectionTitle({
  children,
  textColor = "text-white",
  alignment = "text-center",
}: {
  children: React.ReactNode
  textColor?: string
  alignment?: string
}) {
  return (
    <div className={`mb-4 ${alignment}`}>
      <h2
        className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ${textColor} mb-6 relative px-2`}
      >
        <span className="inline-block">{children}</span>
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-700 rounded-full"></span>
      </h2>
    </div>
  )
}
