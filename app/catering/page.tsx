import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ChevronRight, Package, FileText, Gift, DollarSign, Box } from "lucide-react"

export default function CateringPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - styled like home page */}
      <section className="relative h-[80vh] overflow-hidden px-4 py-8 md:py-12 lg:py-16">
        <div className="absolute inset-x-4 inset-y-8 md:inset-y-12 lg:inset-y-16 z-0 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/7.IG-Image.jpeg"
            alt="Lemon cheesecake cookies with fresh lemons"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Catering for <span className="text-purple-200">every occasion</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Make your next event unforgettable with our delicious cheesecake cookies
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800" asChild>
                <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                  Request a Quote <ShoppingBag className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                View Packages <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cheesecake Cookie Prices Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <SectionTitle textColor="text-gray-800">Cheesecake Cookie Prices</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Perfect for corporate events, weddings, birthday parties, and any special occasion. Our bulk pricing makes
              it easy to treat everyone to our delicious cheesecake cookies.
            </p>

            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="md:w-1/2 lg:w-5/12">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3]">
                    <Image
                      src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/14.IG-Image.jpeg"
                      alt="Bulk cookie orders"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-purple-700 mr-1" />
                      <span className="font-bold text-purple-700">Bulk Pricing Available</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 lg:w-7/12">
                <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-200">
                        Bulk Pricing
                      </h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center group">
                          <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                            30 - 50 Cookies
                          </span>
                          <span className="font-bold text-purple-700 text-lg">
                            $2.00 <span className="text-sm font-normal">per cookie</span>
                          </span>
                        </div>
                        <div className="flex justify-between items-center group">
                          <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                            50 - 100 Cookies
                          </span>
                          <span className="font-bold text-purple-700 text-lg">
                            $1.90 <span className="text-sm font-normal">per cookie</span>
                          </span>
                        </div>
                        <div className="flex justify-between items-center group">
                          <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                            100 - 250 Cookies
                          </span>
                          <span className="font-bold text-purple-700 text-lg">
                            $1.80 <span className="text-sm font-normal">per cookie</span>
                          </span>
                        </div>
                        <div className="flex justify-between items-center group">
                          <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                            250+ Cookies
                          </span>
                          <span className="font-bold text-purple-700 text-lg">
                            $1.75 <span className="text-sm font-normal">per cookie</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-200">
                        Special Options
                      </h3>
                      <div className="bg-purple-50 p-6 rounded-lg mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-medium text-purple-800">Alcohol Infused Flavors</span>
                          <span className="font-bold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                            +$0.15 per cookie
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Minimum order of 30 cookies required for bulk pricing</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Mix and match flavors available</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Custom flavor combinations available upon request</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="bg-purple-700 hover:bg-purple-800">Request Bulk Order Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Custom Packaging Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <SectionTitle textColor="text-gray-800">Individual Custom Packaging</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              You have the option to individually wrap your cookies and even choose your own custom text and graphics to
              place on your order!
            </p>

            <div className="flex flex-col md:flex-row-reverse items-start gap-12">
              <div className="md:w-1/2 lg:w-5/12">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3]">
                    <Image
                      src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/16.IG-Image.jpeg"
                      alt="Custom branded cookie box with purple ribbon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <Package className="h-5 w-5 text-purple-700 mr-1" />
                      <span className="font-bold text-purple-700">Custom Packaging</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 lg:w-7/12">
                <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-200">
                        Packaging Options
                      </h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center group">
                          <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                            Individually wrapped
                          </span>
                          <span className="font-bold text-purple-700 text-lg">
                            $0.10 <span className="text-sm font-normal">per cookie</span>
                          </span>
                        </div>
                        <div className="flex justify-between items-center group">
                          <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                            Custom Cookie Labels
                          </span>
                          <span className="font-bold text-purple-700 text-lg">
                            $0.10 <span className="text-sm font-normal">per cookie</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-200">
                        Custom Label Options
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Company logos</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Event names and dates</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Personalized messages</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Custom designs</p>
                        </div>
                        <div className="flex items-start mt-4">
                          <span className="text-purple-700 mr-2">*</span>
                          <p className="text-purple-700">Custom label design assistance available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="bg-purple-700 hover:bg-purple-800">Inquire About Custom Packaging</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Event Menu Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <SectionTitle textColor="text-gray-800">Custom Event Menu</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Custom folded 8 x 11.5 printed menu on 80lb. thick cardstock. We work with you to make the perfect design
              for your event.
            </p>

            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="md:w-1/2 lg:w-5/12">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3]">
                    <Image
                      src="https://pub-90957cd908df409cb91126ad5cee354b.r2.dev/IndividualCustomPackaging.webp"
                      alt="Custom event menu"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-purple-700 mr-1" />
                      <span className="font-bold text-purple-700">Event Menus</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 lg:w-7/12">
                <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-200">
                        Menu Options
                      </h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center group">
                          <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                            Custom Menu Topper
                          </span>
                          <span className="font-bold text-purple-700 text-lg">
                            $4.00 <span className="text-sm font-normal">each</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-200">
                        Menu Features
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Premium 80lb cardstock</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Full color printing</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Folded design for table display</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Custom flavor descriptions</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Branded with your event details</p>
                        </div>
                        <div className="flex items-start mt-4">
                          <span className="text-purple-700 mr-2">*</span>
                          <p className="text-purple-700">
                            Perfect for weddings, corporate events, and special occasions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="bg-purple-700 hover:bg-purple-800">Order Custom Event Menus</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gifting Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <SectionTitle textColor="text-gray-800">Gifting Options</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Giving the cookies as a gift to others or yourself? We offer gift ribbon wraps for boxes.
            </p>

            <div className="flex flex-col md:flex-row-reverse items-start gap-12">
              <div className="md:w-1/2 lg:w-5/12">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[4/3]">
                    <Image
                      src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/20.IG-Image.jpeg"
                      alt="White cookie gift box with red ribbon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <Gift className="h-5 w-5 text-purple-700 mr-1" />
                      <span className="font-bold text-purple-700">Gift Wrapping</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 lg:w-7/12">
                <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-200">
                        Gift Wrapping
                      </h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center group">
                          <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                            Gift Ribbon Wrap
                          </span>
                          <span className="font-bold text-purple-700 text-lg">
                            $2.00 <span className="text-sm font-normal">per box</span>
                          </span>
                        </div>
                        <div className="flex justify-between items-center group">
                          <span className="font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                            Optional Gift Tag
                          </span>
                          <span className="font-bold text-purple-700 text-lg">
                            $1.00 <span className="text-sm font-normal">each</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-200">
                        Gift Box Features
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Premium satin ribbon</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Elegant box presentation</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Seasonal ribbon colors available</p>
                        </div>
                        <div className="flex items-start">
                          <span className="text-purple-700 mr-2">•</span>
                          <p>Corporate branding options</p>
                        </div>
                        <div className="flex items-start mt-4">
                          <span className="text-purple-700 mr-2">*</span>
                          <p className="text-purple-700">
                            Perfect for client gifts, thank you presents, and special occasions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="bg-purple-700 hover:bg-purple-800">Order Gift Wrapped Boxes</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Packaging Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <SectionTitle textColor="text-gray-800">Cookie Packaging Options</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Choose the perfect packaging size for your event or gift. We offer multiple box sizes to accommodate
              different quantities of cookies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Small Box Option */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:scale-105">
                <div className="relative aspect-square">
                  <Image
                    src="https://pub-90957cd908df409cb91126ad5cee354b.r2.dev/Smallbox-CookiePackagingOptions.webp"
                    alt="Small cookie box"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-lg shadow-md">
                    <span className="font-bold text-purple-700 text-sm">Small Box</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-200">
                    Small Box/Bag
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Size: 6" x 6" x 3"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Capacity: 20-30 cookies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Perfect for small gatherings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Available in kraft or white</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Medium Box Option */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:scale-105">
                <div className="relative aspect-square">
                  <Image
                    src="https://pub-90957cd908df409cb91126ad5cee354b.r2.dev/Mediumbox-CookiePackagingOptions.webp"
                    alt="Medium cookie box"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-lg shadow-md">
                    <span className="font-bold text-purple-700 text-sm">Medium Box</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-200">Medium Box</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Size: 8" x 8" x 4"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Capacity: 30-40 cookies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Ideal for office parties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Window top option available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Large Box Option */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:scale-105">
                <div className="relative aspect-square">
                  <Image
                    src="https://pub-90957cd908df409cb91126ad5cee354b.r2.dev/LargeBox-CookiePackagingOptions.webp"
                    alt="Large cookie box"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-lg shadow-md">
                    <span className="font-bold text-purple-700 text-sm">Large Box</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-purple-200">Large Box</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Size: 10" x 10" x 5"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Capacity: 40-55 cookies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Perfect for large events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-700 mr-2">•</span>
                      <span>Custom inserts available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-purple-700 hover:bg-purple-800">
                <Box className="mr-2 h-5 w-5" />
                Order Custom Packaging
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
        {/* Decorative Cookie Icons */}
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

        <div className="absolute top-1/4 -right-6 w-16 h-16 bg-gradient-to-br from-pink-100 to-white rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-all duration-300">
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
            <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
            <path d="M8.5 8.5a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
            <path d="M14 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M16 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
          </svg>
        </div>

        <div className="absolute bottom-20 -left-6 w-16 h-16 bg-gradient-to-br from-blue-100 to-white rounded-xl shadow-lg flex items-center justify-center transform rotate-6 hover:rotate-12 transition-all duration-300">
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
            className="h-8 w-8 text-blue-600 drop-shadow-md"
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

        <div className="absolute bottom-32 -right-6 w-16 h-16 bg-gradient-to-br from-green-100 to-white rounded-xl shadow-lg flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-all duration-300">
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

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-100 to-white rounded-xl shadow-lg flex items-center justify-center rotate-12 hover:-rotate-12 transition-all duration-300 opacity-30">
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionTitle textColor="text-gray-800">Happy Customers</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              See how our catering services have delighted customers at various events and celebrations. From corporate
              gatherings to weddings, our cookies make every occasion special.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Customer Image 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/6.webp"
                    alt="Happy customer enjoying our cookies at a corporate event"
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    "The cookies were the highlight of our company event! Everyone was asking where they came from."
                  </p>
                  <div className="flex items-center mt-3">
                    <span className="text-xs text-purple-700">#CorporateCatering</span>
                  </div>
                </div>
              </div>

              {/* Customer Image 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/7.webp"
                    alt="Wedding guests enjoying our custom cookie display"
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    "Our wedding guests couldn't stop talking about these amazing cookies. Perfect alternative to
                    traditional cake!"
                  </p>
                  <div className="flex items-center mt-3">
                    <span className="text-xs text-purple-700">#WeddingTreats</span>
                  </div>
                </div>
              </div>

              {/* Customer Image 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/8.webp"
                    alt="Birthday celebration with custom cheesecake cookies"
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    "The custom birthday cookies were absolutely perfect! Everyone wanted to know where to get more."
                  </p>
                  <div className="flex items-center mt-3">
                    <span className="text-xs text-purple-700">#BirthdayCelebration</span>
                  </div>
                </div>
              </div>

              {/* Customer Image 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/9.webp"
                    alt="Family gathering with assorted cheesecake cookies"
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    "These cookies were the perfect dessert for our family reunion. Everyone from kids to grandparents
                    loved them!"
                  </p>
                  <div className="flex items-center mt-3">
                    <span className="text-xs text-purple-700">#FamilyGathering</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-purple-700 hover:bg-purple-800">
                Request Catering Quote <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to make your event special?</h2>
          <p className="text-purple-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your catering needs and get a custom quote for your next event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100" asChild>
              <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                Request a Quote
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
