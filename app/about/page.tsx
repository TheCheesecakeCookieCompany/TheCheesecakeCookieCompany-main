"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ChevronRight } from "lucide-react"

export default function AboutPage() {
  const valuesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!valuesRef.current) return

      const cards = valuesRef.current.querySelectorAll(".value-card")

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 20
        const rotateY = (centerX - x) / 20

        if (card instanceof HTMLElement) {
          // Only apply the 3D effect if the mouse is over or near the card
          const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
          const isNearCard = distance < rect.width

          if (isNearCard) {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          } else {
            card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
          }
        }
      })
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
            src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/21.iG-Image.jpeg"
            alt="Assorted cheesecake cookies on display"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Our <span className="text-purple-200">story</span> and journey
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              How we turned our passion for baking into the perfect cheesecake cookie
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                Meet Our Team <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Our Mission <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stephon + Cheesecake Cookies = Bliss Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <SectionTitle textColor="text-gray-800" alignment="text-left">
                  Stephon + Cheesecake Cookies = Bliss
                </SectionTitle>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p>
                    Cheesecake and cookies weren't the only sweet things to come out of the pandemic. What started as a
                    passion project during quarantine quickly turned into a mission: to create something delicious,
                    meaningful, and totally unique. With a background in retail and a serious love for dessert, I set
                    out to blend two of the most iconic treats—cheesecake and cookies—into one unforgettable bite.
                  </p>
                  <p>
                    Travel has always been one of my greatest joys. Exploring new places, cultures, and cuisines
                    constantly fuels my creativity—each trip inspires new flavor combinations and fresh ideas for how to
                    grow, connect, and bring people together through food. That spirit of adventure lives in every
                    recipe and every cookie we bake.
                  </p>
                  <p>
                    After months of recipe testing and late-night baking sessions, Cheesecake Cookies were born. They're
                    rich, soft, flavorful, and impossible to forget. Whether you're into sweet, tart, crunchy, or
                    creamy, there's a flavor on the menu for you. One bite, and you'll understand why we had to share
                    them with the world.
                  </p>
                  <p>This is more than just dessert—it's an experience. And now, it's yours to enjoy.</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-square">
                    <video
                      src="https://pub-6c2fdb03f8b6459f83e8bcaf125f92a1.r2.dev/Stephon.mov"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="text-white font-medium">Founder's passion for creating the perfect cookie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cheesecake + Cookie = Happiness Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <SectionTitle textColor="text-gray-800" alignment="text-left">
                  Cheesecake + Cookie = Happiness
                </SectionTitle>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p>
                    If you love the smooth, luxurious taste of cheesecake but also crave the nostalgic comfort of a
                    cookie, you've found your new favorite treat. Born in the middle of the pandemic, this idea grew
                    from passion, hustle, and community support. The overwhelming love for our creations led to a
                    rebrand and rebirth: welcome to The Cheesecake Cookie Company.
                  </p>
                  <p>
                    We're proudly Black-owned, 100% self-funded, and built with heart. Our mission is simple—use baking
                    to spread joy, good vibes, and that "treat yourself" energy we all need more of.
                  </p>
                  <p>Every cookie is a little journey—and you're just one bite away from happiness.</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-square">
                    <video
                      src="https://pub-334dd080718649afae28f757b2607b1f.r2.dev/customers-inline-4-cookies.mp4"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="text-white font-medium">Our delicious cookies bring joy with every bite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section - NEW */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg border border-purple-100 relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
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

            <div className="text-center">
              <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-8 relative font-serif">
                <span className="absolute -top-6 -left-6 text-6xl text-purple-200">"</span>
                <p className="px-8">This is more than just dessert—it's an experience. And now, it's yours to enjoy.</p>
                <span className="absolute -bottom-6 -right-6 text-6xl text-purple-200">"</span>
              </blockquote>

              <div className="flex items-center justify-center mt-8">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <span className="text-purple-700 font-serif font-bold text-lg">S</span>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900">Stephon</p>
                  <p className="text-sm text-gray-500">Founder, The Cheesecake Cookie Company</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center transform rotate-180">
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
          </div>
        </div>
      </section>

      {/* Values Section with 3D Effects */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle textColor="text-gray-800">Our Values</SectionTitle>
            <p className="text-lg text-gray-600 mb-12">
              At The Cheesecake Cookie Company, we're guided by our commitment to quality, community, and creativity.
            </p>

            <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
              {/* Passion Card */}
              <div
                className="value-card group bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg border border-purple-100/50 
                          hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2
                          relative overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 
                                transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-purple-200
                                shadow-md group-hover:shadow-lg"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <Heart className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 transform transition-transform duration-500"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    Passion
                  </h3>
                  <p
                    className="text-gray-600 transform transition-transform duration-500"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    We pour our hearts into every cookie we make, ensuring each bite brings joy and satisfaction.
                  </p>
                </div>
              </div>

              {/* Quality Card */}
              <div
                className="value-card group bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg border border-purple-100/50 
                          hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2
                          relative overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 
                                transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-purple-200
                                shadow-md group-hover:shadow-lg"
                    style={{ transform: "translateZ(20px)" }}
                  >
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
                      className="text-purple-600 group-hover:text-purple-700 transition-colors"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m7 10 2 2 6-6" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 transform transition-transform duration-500"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    Quality
                  </h3>
                  <p
                    className="text-gray-600 transform transition-transform duration-500"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    We use only premium ingredients and meticulous techniques to create cookies that exceed
                    expectations.
                  </p>
                </div>
              </div>

              {/* Community Card */}
              <div
                className="value-card group bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg border border-purple-100/50 
                          hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2
                          relative overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 
                                transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-purple-200
                                shadow-md group-hover:shadow-lg"
                    style={{ transform: "translateZ(20px)" }}
                  >
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
                      className="text-purple-600 group-hover:text-purple-700 transition-colors"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 transform transition-transform duration-500"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    Community
                  </h3>
                  <p
                    className="text-gray-600 transform transition-transform duration-500"
                    style={{ transform: "translateZ(15px)" }}
                  >
                    We believe in building connections and supporting our local community through our business.
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
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100" asChild>
              <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
            <Button size="lg" className="bg-white/20 border-white text-white hover:bg-white/30">
              Contact Us
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
        <span
          className={`absolute -bottom-4 ${alignment === "text-left" ? "left-0" : "left-1/2 transform -translate-x-1/2"} w-24 h-1 bg-purple-700 rounded-full`}
        ></span>
      </h2>
    </div>
  )
}
