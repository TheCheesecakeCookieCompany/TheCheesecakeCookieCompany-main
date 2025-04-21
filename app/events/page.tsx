import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronRight, MapPin, Info, Cookie } from "lucide-react"

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
  const isMobile = false // We don't need the hook here since this is server component

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

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - styled like home page */}
      <section className="relative h-[80vh] overflow-hidden px-4 py-8 md:py-12 lg:py-16">
        <div className="absolute inset-x-4 inset-y-8 md:inset-y-12 lg:inset-y-16 z-0 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/red-cookies-banking-rack.jpg"
            alt="Red cheesecake cookies on a baking rack"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Join us at our <span className="text-purple-200">upcoming events</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Find us at pop-up shops and special events throughout the year
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                View Calendar <Calendar className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Event Details <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle textColor="text-gray-800">Pop-Up Locations</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Find our delicious cheesecake cookies at these regular pop-up locations throughout Southern California.
              Follow us on social media for exact dates and times.
            </p>

            <div className="space-y-24">
              {/* Initial Cookie Divider */}
              <div className="relative flex flex-col items-center justify-center py-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative z-10 px-4 bg-white">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 shadow-md">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/AppleCin.webp"
                      alt="Apple Cinnamon Cheesecake Cookie"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-purple-700 font-medium mb-2">Follow us and keep updated</p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="https://instagram.com/cheesecakecookieco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      aria-label="Follow us on Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-600"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/cheesecakecookieco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      aria-label="Follow us on Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/cheesecakecookieco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      aria-label="Follow us on Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-400"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* Brewery X - Anaheim */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-9f6bcd30c1ff4495928bf1799999caff.r2.dev/Breweryx.jpg"
                      alt="Brewery X - Anaheim outdoor patio area"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Brewery X
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-purple-400 rounded-full"></span>
                      </h3>
                      <div className="block mt-3">
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          Anaheim
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <MapPin className="h-4 w-4 mr-1 text-purple-600" />
                      <span>Anaheim, CA</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">Our Cookie Pop-Up</h4>
                        </div>
                        <p className="text-gray-700">
                          The Cheesecake Cookie Company loves setting up at Brewery X where the lively atmosphere and
                          craft beer enthusiasts create the perfect environment for our treats. Our cookies pair
                          wonderfully with their selection of craft beers, creating flavor combinations that customers
                          rave about. We're often found near the outdoor seating area where customers can enjoy fresh
                          cookies while sipping their favorite brews.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">About This Location</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Brewery X has become one of Anaheim's most popular craft beer destinations, known for its
                          spacious outdoor area and rotating selection of innovative brews. The vibrant atmosphere makes
                          it the perfect spot to enjoy our cheesecake cookies paired with your favorite craft beer.
                        </p>
                        <p className="text-sm text-purple-700 font-medium">
                          "The combination of Brewery X's craft beers and our cheesecake cookies creates flavor
                          experiences you won't find anywhere else!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Divider 1 */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative z-10 px-4 bg-white">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 shadow-md">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/CinnaRum.webp"
                      alt="CinnaRum Cheesecake Cookie"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Modern Makers Mart - Huntington Beach */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Modern Makers Mart - Huntington Beach"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Modern Makers Mart
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-purple-400 rounded-full"></span>
                      </h3>
                      <div className="block mt-3">
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          Huntington Beach
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <MapPin className="h-4 w-4 mr-1 text-purple-600" />
                      <span>Huntington Beach, CA</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">Our Cookie Pop-Up</h4>
                        </div>
                        <p className="text-gray-700">
                          The Cheesecake Cookie Company enjoys the creative energy at Modern Makers Mart, where our
                          artisanal cookies fit right in with the handcrafted goods from local makers. Beach-goers and
                          locals alike stop by our booth for a sweet treat, and we've developed a loyal following of
                          surfers who grab our cookies before heading to the waves. Our refreshing flavors like Lemon
                          and Strawberry are especially popular at this coastal location.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">About This Location</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Huntington Beach, known as Surf City USA, brings together beach culture and artisanal
                          craftsmanship at the Modern Makers Mart. This curated marketplace showcases local artisans and
                          small businesses in a vibrant coastal setting, making it the perfect spot to grab our cookies
                          before hitting the beach.
                        </p>
                        <p className="text-sm text-purple-700 font-medium">
                          "The laid-back beach vibe of Huntington Beach pairs perfectly with the sweet indulgence of our
                          cheesecake cookies!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Divider 2 */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative z-10 px-4 bg-white">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 shadow-md">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/ConfettiCelebration.webp"
                      alt="Confetti Celebration Cheesecake Cookie"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Modern Makers - Irvine Woodbridge Village Center */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-9f6bcd30c1ff4495928bf1799999caff.r2.dev/cityofModernMakes.png"
                      alt="Modern Makers - Irvine Woodbridge Village Center outdoor market with vendor tents"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Modern Makers
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-purple-400 rounded-full"></span>
                      </h3>
                      <div className="block mt-3">
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          Irvine
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <MapPin className="h-4 w-4 mr-1 text-purple-600" />
                      <span>Irvine Woodbridge Village Center, CA</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">Our Cookie Pop-Up</h4>
                        </div>
                        <p className="text-gray-700">
                          The Cheesecake Cookie Company's booth at Modern Makers in Irvine has become a monthly
                          tradition for many local families. We love watching customers stroll around the lakeside with
                          our cookies in hand. The upscale Irvine crowd appreciates our premium ingredients and unique
                          flavor combinations, with our Exotic Series being particularly popular here. Many customers
                          make a special trip just to stock up on their favorite flavors.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">About This Location</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Irvine's Woodbridge Village Center offers a picturesque lakeside setting for the Modern Makers
                          marketplace. This master-planned community hub combines upscale shopping with a relaxed
                          atmosphere, creating the ideal environment to discover our gourmet cheesecake cookies while
                          enjoying views of North Lake.
                        </p>
                        <p className="text-sm text-purple-700 font-medium">
                          "The serene lakeside setting of Woodbridge Village Center makes it one of our favorite pop-up
                          locations!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Divider 3 */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative z-10 px-4 bg-white">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 shadow-md">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/CookiesNCream.webp"
                      alt="Cookies and Cream Cheesecake Cookie"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bellflower Farmers Market */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Bellflower Farmers Market"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Bellflower Farmers Market
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-purple-400 rounded-full"></span>
                      </h3>
                      <div className="block mt-3">
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          Bellflower
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <MapPin className="h-4 w-4 mr-1 text-purple-600" />
                      <span>Bellflower, CA</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">Our Cookie Pop-Up</h4>
                        </div>
                        <p className="text-gray-700">
                          The Cheesecake Cookie Company has been a staple at the Bellflower Farmers Market since our
                          early days. We've built wonderful relationships with both customers and fellow vendors, often
                          trading cookies for fresh produce! The family-friendly atmosphere makes this one of our
                          busiest locations, with our Classic Series cookies being the top sellers. We love seeing
                          regular customers who stop by every week to see what new flavors we're offering.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">About This Location</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          The Bellflower Farmers Market brings together the community's love for fresh, local produce
                          and artisanal foods. This charming market has become a neighborhood staple, where residents
                          gather to support local businesses and enjoy the friendly small-town atmosphere that makes
                          Bellflower special.
                        </p>
                        <p className="text-sm text-purple-700 font-medium">
                          "We love being part of Bellflower's tight-knit community and sharing our cookies alongside
                          other local food artisans!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Divider 4 */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative z-10 px-4 bg-white">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 shadow-md">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/DevilsSpiked.webp"
                      alt="Devil's Spiked Cheesecake Cookie"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Downtown Downey Night Market */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                      alt="Downtown Downey Night Market"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Downtown Downey Night Market
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-purple-400 rounded-full"></span>
                      </h3>
                      <div className="block mt-3">
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          Downey
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <MapPin className="h-4 w-4 mr-1 text-purple-600" />
                      <span>Downey, CA</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">Our Cookie Pop-Up</h4>
                        </div>
                        <p className="text-gray-700">
                          The Cheesecake Cookie Company lights up the night at Downtown Downey's vibrant evening market.
                          The festive atmosphere is perfect for showcasing our Alcohol-Infused Series, which has become
                          a hit with the evening crowd. We love setting up under the string lights and watching with the
                          evening crowd. We love setting up under the string lights and watching customers enjoy our
                          cookies while listening to live music. This location has helped us connect with a diverse
                          group of food enthusiasts who appreciate our innovative flavors.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">About This Location</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Downtown Downey comes alive at night with this vibrant market that celebrates the city's
                          diverse cultural heritage. The night market transforms the historic downtown area into a
                          lively gathering space filled with food, music, and local vendors, reflecting Downey's
                          evolution as a cultural hub in Southeast Los Angeles County.
                        </p>
                        <p className="text-sm text-purple-700 font-medium">
                          "The energy of Downey's night market creates the perfect atmosphere to enjoy our cheesecake
                          cookies under the stars!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Divider 5 */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative z-10 px-4 bg-white">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 shadow-md">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/Lemon.webp"
                      alt="Lemon Cheesecake Cookie"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Downtown Anaheim Night Market */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-9f6bcd30c1ff4495928bf1799999caff.r2.dev/Downtown-Anaheim-Market.jpg"
                      alt="Downtown Anaheim Night Market"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Downtown Anaheim Night Market
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-purple-400 rounded-full"></span>
                      </h3>
                      <div className="block mt-3">
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          Anaheim
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-6">
                      <MapPin className="h-4 w-4 mr-1 text-purple-600" />
                      <span>Anaheim, CA</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">Our Cookie Pop-Up</h4>
                        </div>
                        <p className="text-gray-700">
                          The Cheesecake Cookie Company brings a sweet touch to Downtown Anaheim's creative night market
                          scene. Our colorful display and the aroma of freshly baked cookies draw in crowds from all
                          walks of life. We've collaborated with local artists and musicians at this location, creating
                          special themed cookies for events. Tourists and locals alike have discovered our unique treats
                          here, helping us build a diverse and enthusiastic customer base.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">About This Location</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Beyond its famous theme parks, Anaheim has developed a thriving downtown arts and food scene.
                          The Downtown Anaheim Night Market showcases the city's creative renaissance, bringing together
                          local artisans, musicians, and food vendors in the historic center, highlighting Anaheim's
                          evolution as a cultural destination.
                        </p>
                        <p className="text-sm text-purple-700 font-medium">
                          "Anaheim's creative energy and diverse community make it an exciting place to share our unique
                          cookie creations!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Divider 6 - New */}
            <div className="relative flex items-center justify-center mt-24">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative z-10 px-4 bg-white">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 shadow-md">
                  {/* You can replace this with another cookie image URL */}
                  <div className="w-full h-full bg-purple-100 flex items-center justify-center">
                    <Cookie className="h-10 w-10 text-purple-500" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="bg-white px-4 py-1 text-sm text-purple-700 font-medium rounded-full shadow-sm">
                  Strawberry Cheesecake
                </span>
              </div>
            </div>

            {/* Featured Flavor Spotlight - New Section */}
            <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl overflow-hidden shadow-lg border border-pink-100 transition-all hover:shadow-xl mt-16">
              <div className="flex flex-col md:flex-row">
                <div className="relative aspect-square md:w-1/4">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-pink-100 flex items-center justify-center">
                    <Cookie className="h-16 w-16 text-pink-500" />
                  </div>
                </div>
                <div className="p-6 md:p-8 md:w-3/4">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 text-xs font-medium rounded-full mb-3">
                      Featured Flavor
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                      Strawberry Cheesecake Cookie
                      <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-pink-400 rounded-full"></span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Cookie className="h-4 w-4 mr-2 text-pink-600" />
                        <h4 className="font-medium text-pink-800">Flavor Profile</h4>
                      </div>
                      <p className="text-gray-700">
                        This Cheesecake Cookie tastes more like strawberry than strawberries! With an aftertaste to die
                        for, created by the organic, freeze-dried and finely crushed strawberries. This cookie has never
                        been met with a frown.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Info className="h-4 w-4 mr-2 text-pink-600" />
                        <h4 className="font-medium text-pink-800">Where to Find It</h4>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Our Strawberry Cheesecake Cookie is a customer favorite at beach locations like Huntington Beach
                        and summer festivals. The refreshing flavor makes it perfect for warm weather events!
                      </p>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://instagram.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                          aria-label="Follow us on Instagram"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-pink-600"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                        <span className="text-sm text-gray-500">See where we'll be next!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Divider 7 - New */}
            <div className="relative flex items-center justify-center mt-24">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative z-10 px-4 bg-white">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 shadow-md">
                  {/* You can replace this with another cookie image URL */}
                  <div className="w-full h-full bg-purple-100 flex items-center justify-center">
                    <Cookie className="h-10 w-10 text-purple-500" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="bg-white px-4 py-1 text-sm text-purple-700 font-medium rounded-full shadow-sm">
                  Triple Chocolate
                </span>
              </div>
            </div>

            {/* Seasonal Flavor Spotlight - New Section */}
            <div className="bg-gradient-to-r from-amber-50 to-white rounded-xl overflow-hidden shadow-lg border border-amber-100 transition-all hover:shadow-xl mt-16 mb-24">
              <div className="flex flex-col md:flex-row">
                <div className="relative aspect-square md:w-1/4">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-amber-100 flex items-center justify-center">
                    <Cookie className="h-16 w-16 text-amber-500" />
                  </div>
                </div>
                <div className="p-6 md:p-8 md:w-3/4">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-3">
                      Seasonal Favorite
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                      Triple Chocolate Cookie
                      <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-amber-400 rounded-full"></span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Cookie className="h-4 w-4 mr-2 text-amber-600" />
                        <h4 className="font-medium text-amber-800">Flavor Profile</h4>
                      </div>
                      <p className="text-gray-700">
                        This Cheesecake Cookie tastes like the dark side of heaven. With a chilled fudge-like texture
                        and mini chocolate chips, and Oreo's spread throughout, this cookie is dangerously addictive.
                        Try with CAUTION!
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <Info className="h-4 w-4 mr-2 text-amber-600" />
                        <h4 className="font-medium text-amber-800">Where to Find It</h4>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Our Triple Chocolate Cookie is especially popular at evening events like the Downtown Downey and
                        Anaheim Night Markets. It pairs perfectly with coffee or craft beer!
                      </p>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://instagram.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white p-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                          aria-label="Follow us on Instagram"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-amber-600"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                        <span className="text-sm text-gray-500">Check our schedule for upcoming events!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Flavor Showcase Section */}
            <section className="py-16 bg-white border-t border-gray-100">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <SectionTitle textColor="text-gray-800">Our Cookie Flavors</SectionTitle>
                  <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
                    Discover all the delicious flavors we bring to our events. Each cookie is handcrafted with premium
                    ingredients for a unique cheesecake cookie experience.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Cookie Flavor 1 - CinnaRum */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src="https://pub-21c5ab9b763c4c0cb71fc8df5d3c0d32.r2.dev/1.Cookie-Package.jpg"
                          alt="CinnaRum Cheesecake Cookie"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900">CinnaRum</h3>
                        <p className="text-sm text-gray-600 mt-1">Cinnamon spice with a hint of rum</p>
                      </div>
                    </div>

                    {/* Cookie Flavor 2 - Confetti Celebration */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src="https://pub-21c5ab9b763c4c0cb71fc8df5d3c0d32.r2.dev/2.Cookie-Package.jpg"
                          alt="Confetti Celebration Cheesecake Cookie"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900">Confetti Celebration</h3>
                        <p className="text-sm text-gray-600 mt-1">A festive treat for any occasion</p>
                      </div>
                    </div>

                    {/* Cookie Flavor 3 - Cookies & Cream */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src="https://pub-21c5ab9b763c4c0cb71fc8df5d3c0d32.r2.dev/3.Cookie-Package.jpg"
                          alt="Cookies and Cream Cheesecake Cookie"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900">Cookies & Cream</h3>
                        <p className="text-sm text-gray-600 mt-1">Our original bestseller</p>
                      </div>
                    </div>

                    {/* Cookie Flavor 4 - Devil's Spiked */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src="https://pub-21c5ab9b763c4c0cb71fc8df5d3c0d32.r2.dev/4.Cookie-Package.jpg"
                          alt="Devil's Spiked Cheesecake Cookie"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900">Devil's Spiked</h3>
                        <p className="text-sm text-gray-600 mt-1">Dark chocolate with raspberry liquor</p>
                      </div>
                    </div>

                    {/* Cookie Flavor 5 - Lemon */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src="https://pub-21c5ab9b763c4c0cb71fc8df5d3c0d32.r2.dev/5.Cookie-Package.jpg"
                          alt="Lemon Cheesecake Cookie"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900">Lemon</h3>
                        <p className="text-sm text-gray-600 mt-1">The perfect balance of sweet and tart</p>
                      </div>
                    </div>

                    {/* Cookie Flavor 6 - Red Velvet */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src="https://pub-21c5ab9b763c4c0cb71fc8df5d3c0d32.r2.dev/6.Cookie-Package.jpg"
                          alt="Red Velvet Cheesecake Cookie"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900">Red Velvet</h3>
                        <p className="text-sm text-gray-600 mt-1">Rich red velvet with a creamy center</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <Button className="bg-purple-700 hover:bg-purple-800">
                      View All Flavors <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Photos Section */}
            <div className="mt-16 mb-12">
              <SectionTitle textColor="text-gray-800">Our Cookie Fans</SectionTitle>
              <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
                Join our community of cookie enthusiasts and share your moments with us!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Customer Photo 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/3.webp"
                      alt="Happy customer enjoying our cookies at an event"
                      fill
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 font-medium">
                      "These cookies are absolutely amazing! Can't wait for the next event!" - Sarah M.
                    </p>
                    <div className="flex items-center mt-3">
                      <span className="text-xs text-purple-700">#CheesecakeCookieFan</span>
                    </div>
                  </div>
                </div>

                {/* Customer Photo 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/4.webp"
                      alt="Family enjoying our cookies at a community event"
                      fill
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 font-medium">
                      "The perfect treat for our family day out. The kids loved them!" - James T.
                    </p>
                    <div className="flex items-center mt-3">
                      <span className="text-xs text-purple-700">#CookieMoments</span>
                    </div>
                  </div>
                </div>

                {/* Customer Photo 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/5.webp"
                      alt="Friends sharing cookies at a food festival"
                      fill
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 font-medium">
                      "Best discovery at the food festival! We bought a dozen to take home." - Lisa K.
                    </p>
                    <div className="flex items-center mt-3">
                      <span className="text-xs text-purple-700">#CheesecakeCookieCo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-24 text-center">
              <Button className="bg-purple-700 hover:bg-purple-800">
                <Calendar className="mr-2 h-5 w-5" />
                Follow Us For Event Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionTitle textColor="text-gray-800">Upcoming Special Events</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              In addition to our regular pop-up locations, we also participate in special events throughout the year.
              Join us at food festivals, community gatherings, and seasonal celebrations!
            </p>

            {/* Event Calendar Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-12 border border-purple-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full -mt-20 -mr-20 z-0"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Events Calendar</h3>
                    <p className="text-gray-600 mt-2">
                      Our special events calendar is regularly updated with new pop-up locations and special events. Add
                      our calendar to your Google Calendar to stay updated!
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a
                    href="https://calendar.google.com/calendar/embed?src=your_calendar_id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                    View Upcoming Events
                  </a>

                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-white border border-purple-300 hover:border-purple-500 text-purple-700 py-3 px-6 rounded-lg transition-colors font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Contact Us
                  </a>

                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://instagram.com/cheesecakecookieco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      aria-label="Follow us on Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-600"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/cheesecakecookieco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      aria-label="Follow us on Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/cheesecakecookieco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      aria-label="Follow us on Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-400"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Holiday Pop-Up Events Card */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-700 p-3 rounded-lg flex-shrink-0">
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
                    >
                      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.6a2 2 0 0 1 1.4-.6h3.8a2 2 0 0 1 2 2v2.4Z" />
                      <path d="M12 10v6" />
                      <path d="M9 13h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Holiday Pop-Up Events</h3>
                    <p className="text-gray-600 mb-3">
                      Special holiday-themed cookies and gift boxes will be available at select locations during the
                      holiday season.
                    </p>
                    <div className="mt-3">
                      <p className="text-sm text-purple-700 font-medium mb-2">Follow us to join the festivities!</p>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://instagram.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-700 transition-colors"
                          aria-label="Follow us on Instagram"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                        <a
                          href="https://facebook.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                          aria-label="Follow us on Facebook"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </a>
                        <a
                          href="https://twitter.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-500 transition-colors"
                          aria-label="Follow us on Twitter"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summer Food Festival Tour Card */}
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-700 p-3 rounded-lg flex-shrink-0">
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
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                      <path d="M9 2v7" />
                      <path d="M15 2v7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Summer Food Festival Tour</h3>
                    <p className="text-gray-600 mb-3">
                      We'll be touring Southern California food festivals with exclusive summer flavors and special
                      promotions.
                    </p>
                    <div className="mt-3">
                      <p className="text-sm text-purple-700 font-medium mb-2">Stay connected for tour dates!</p>
                      <div className="flex items-center gap-2">
                        <a
                          href="https://instagram.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-700 transition-colors"
                          aria-label="Follow us on Instagram"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                        <a
                          href="https://facebook.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                          aria-label="Follow us on Facebook"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </a>
                        <a
                          href="https://twitter.com/cheesecakecookieco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-500 transition-colors"
                          aria-label="Follow us on Twitter"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
