import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ChevronRight, Star, Cookie, Info, Gift, ShoppingCart, Instagram } from "lucide-react"

export default function FlavorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - styled like home page */}
      <section className="relative h-[80vh] overflow-hidden px-4 py-8 md:py-12 lg:py-16">
        <div className="absolute inset-x-4 inset-y-8 md:inset-y-12 lg:inset-y-16 z-0 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/4.IG-Image.jpeg"
            alt="Colorful assortment of cheesecake cookies with fresh strawberries and lemons"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Our Cookie <span className="text-purple-200">Flavors</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Discover our handcrafted cheesecake cookies in a variety of mouthwatering flavors
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800" asChild>
                <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                  Order Now <ShoppingBag className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Explore Flavors <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle textColor="text-gray-800">Our Cookie Flavors</SectionTitle>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Discover all the delicious flavors we personally deliver to your door or join us at one of our Pop-Up
            events. Each cookie is handcrafted with premium ingredients for a unique cheesecake cookie experience.
          </p>
        </div>
      </section>

      {/* Rest of the flavors page content remains the same */}
      {/* Limited Time Series */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                  Limited Time Only
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Limited Time Series</h2>
                <p className="mt-2 text-lg text-gray-600 max-w-2xl">
                  Old Fashion Thanksgiving favorites transformed into Cheesecake Cookies.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-amber-600 font-medium">Available until November 30th</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Apple Cin Cookie */}
              <div className="bg-gradient-to-r from-amber-50 to-white rounded-xl overflow-hidden shadow-lg border border-amber-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/AppleCin.webp"
                      alt="Apple Cin Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      Limited
                    </div>
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-3">
                        Seasonal Favorite
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Apple Cin
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-amber-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-amber-600" />
                          <h4 className="font-medium text-amber-800">Flavor Profile</h4>
                        </div>
                        <p className="text-gray-700">
                          Taste just like apple pie à la mode, and every bite melts in your mouth the same. Flavored
                          perfectly with cinnamon, nutmeg, and diced apples that are tossed in cinnamon sugar and
                          toasted.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-amber-600" />
                          <h4 className="font-medium text-amber-800">Ingredients</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Cream cheese, butter, sugar, flour, cinnamon, nutmeg, diced apples, cinnamon sugar, vanilla
                          extract, and Oreo's.
                        </p>
                        <div className="mt-6 flex justify-between items-center">
                          <span className="text-lg font-bold">$4.49</span>
                          <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                            <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                              Taste Now
                            </a>
                          </Button>
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

      {/* Classic Series */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                Fan Favorites
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Classic Series</h2>
              <p className="mt-2 text-lg text-gray-600 max-w-2xl">
                Our Original and Most Popular flavors. Something for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Cookies N' Cream */}
              <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl overflow-hidden shadow-lg border border-purple-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/CookiesNCream.webp"
                      alt="Cookies N' Cream Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Bestseller
                    </div>
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full mb-3">
                        Classic Favorite
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Cookies N' Cream
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-purple-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">Flavor Profile</h4>
                        </div>
                        <p className="text-gray-700">
                          This is "that cookie," if you know what we mean. This is our original Cheesecake Cookie that
                          all of the other cookies were based. Only six simple ingredients, no preservatives, and our
                          proprietary process has created the most amazingly decadent and delicious treat you will ever
                          have!
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-purple-600" />
                          <h4 className="font-medium text-purple-800">Ingredients</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Cream cheese, butter, sugar, flour, vanilla extract, and Oreo's.
                        </p>
                        <div className="mt-6 flex justify-between items-center">
                          <span className="text-lg font-bold">$3.99</span>
                          <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                            <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                              Taste Now
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strawberry */}
              <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl overflow-hidden shadow-lg border border-pink-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/Strawberry.webp"
                      alt="Strawberry Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 text-xs font-medium rounded-full mb-3">
                        Customer Favorite
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Strawberry
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-pink-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-pink-600" />
                          <h4 className="font-medium text-pink-800">Flavor Profile</h4>
                        </div>
                        <p className="text-gray-700">
                          This Cheesecake Cookie tastes more like strawberry than strawberries! With an aftertaste to
                          die for, created by the organic, freeze-dried and finely crushed strawberries. This cookie has
                          never been met with a frown.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-pink-600" />
                          <h4 className="font-medium text-pink-800">Ingredients</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Cream cheese, butter, sugar, flour, freeze-dried organic strawberries, strawberry extract and
                          Golden Oreo's.
                        </p>
                        <div className="mt-6 flex justify-between items-center">
                          <span className="text-lg font-bold">$4.29</span>
                          <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                            <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                              Taste Now
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lemon */}
              <div className="bg-gradient-to-r from-yellow-50 to-white rounded-xl overflow-hidden shadow-lg border border-yellow-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/Lemon.webp"
                      alt="Lemon Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mb-3">
                        Refreshing Treat
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Lemon
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-yellow-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-yellow-600" />
                          <h4 className="font-medium text-yellow-800">Flavor Profile</h4>
                        </div>
                        <p className="text-gray-700">
                          This Cheesecake Cookie was made for lemon-lovers everywhere. The perfect amount of sweet and
                          tart melts over your tongue with every bite. Golden Oreo bits for a slight crunch and perfect
                          texture combination.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-yellow-600" />
                          <h4 className="font-medium text-yellow-800">Ingredients</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Cream cheese, butter, sugar, flour, vanilla extract, lemon extract, lemon zest, and Golden
                          Oreo's.
                        </p>
                        <div className="mt-6 flex justify-between items-center">
                          <span className="text-lg font-bold">$4.29</span>
                          <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                            <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                              Taste Now
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Triple Chocolate */}
              <div className="bg-gradient-to-r from-amber-50 to-white rounded-xl overflow-hidden shadow-lg border border-amber-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/TripleChocolate.webp"
                      alt="Triple Chocolate Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-3">
                        Chocolate Lover's Dream
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Triple Chocolate
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-amber-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
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
                          <h4 className="font-medium text-amber-800">Ingredients</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Cream cheese, butter, sugar, flour, cocoa powder, espresso, mini chocolate chips and Oreo's.
                        </p>
                        <div className="mt-6 flex justify-between items-center">
                          <span className="text-lg font-bold">$4.49</span>
                          <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                            <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                              Taste Now
                            </a>
                          </Button>
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

      {/* Exotic Series */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
                Unique Flavors
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Exotic Series</h2>
              <p className="mt-2 text-lg text-gray-600 max-w-2xl">
                Our exotic and out-of-the-box flavors. Dare to try something new!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* White Chocolate Blueberry */}
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl overflow-hidden shadow-lg border border-blue-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/WhiteChocolateBlueberry.webp"
                      alt="White Chocolate Blueberry Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                        Berry Delicious
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        White Chocolate Blueberry
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-blue-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center mb-2">
                            <Cookie className="h-4 w-4 mr-2 text-blue-600" />
                            <h4 className="font-medium text-blue-800">Flavor Profile</h4>
                          </div>
                          <p className="text-gray-700">
                            This Cheesecake Cookie is extremely refreshing with every bite bursting in blueberry flavor.
                            White chocolate chips provide exceptional texture contrast in every bite. A blue cookie
                            guaranteed to cure the blues!
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center mb-2">
                            <Info className="h-4 w-4 mr-2 text-blue-600" />
                            <h4 className="font-medium text-blue-800">Ingredients</h4>
                          </div>
                          <p className="text-gray-700 mb-4">
                            Cream cheese, butter, sugar, flour, freeze-dried blueberry powder, blueberry extract, white
                            chocolate chips, vanilla extract, and Golden Oreo's.
                          </p>
                          <div className="mt-6 flex justify-between items-center">
                            <span className="text-lg font-bold">$4.49</span>
                            <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                              <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                                Taste Now
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mango - Guava */}
              <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl overflow-hidden shadow-lg border border-orange-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/Mango-Guava.webp"
                      alt="Mango - Guava Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full mb-3">
                        Tropical Escape
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Mango - Guava
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-orange-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center mb-2">
                            <Cookie className="h-4 w-4 mr-2 text-orange-600" />
                            <h4 className="font-medium text-orange-800">Flavor Profile</h4>
                          </div>
                          <p className="text-gray-700">
                            Allow us to welcome your tongue to the tropics. With this Cheesecake Cookie you can take a
                            mini vacation in your mouth anytime of the day. Every bite tastes like the ripest mango you've
                            ever bitten into, with bits of guava paste perfectly placed throughout.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center mb-2">
                            <Info className="h-4 w-4 mr-2 text-orange-600" />
                            <h4 className="font-medium text-orange-800">Ingredients</h4>
                          </div>
                          <p className="text-gray-700 mb-4">
                            Cream cheese, butter, sugar, flour, freeze-dried mango powder, mango extract, guava paste, and
                            Golden Oreo's.
                          </p>
                          <div className="mt-6 flex justify-between items-center">
                            <span className="text-lg font-bold">$4.49</span>
                            <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                              <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                                Taste Now
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confetti Celebration */}
              <div className="bg-gradient-to-r from-indigo-50 to-white rounded-xl overflow-hidden shadow-lg border border-indigo-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/ConfettiCelebration.webp"
                      alt="Confetti Celebration Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full mb-3">
                        Party Time
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Confetti Celebration
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-indigo-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Cookie className="h-4 w-4 mr-2 text-indigo-600" />
                          <h4 className="font-medium text-indigo-800">Flavor Profile</h4>
                        </div>
                        <p className="text-gray-700">
                          With this Cheesecake Cookie, there's always a reason to celebrate! This cookie is a fan
                          favorite that always sells out. Come find out why.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center mb-2">
                          <Info className="h-4 w-4 mr-2 text-indigo-600" />
                          <h4 className="font-medium text-indigo-800">Ingredients</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Cream cheese, butter, sugar, flour, rainbow sprinkles, white chocolate chips, vanilla browned
                          butter, vanilla extract, and Golden Oreo's.
                        </p>
                        <div className="mt-6 flex justify-between items-center">
                          <span className="text-lg font-bold">$4.49</span>
                          <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                            <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                              Taste Now
                            </a>
                          </Button>
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

      {/* Alcohol-Infused Series */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="inline-block px-4 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-4">
                21+ Only
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Alcohol-Infused Series</h2>
              <p className="mt-2 text-lg text-gray-600 max-w-2xl">
                Adult Cookies with a kick. Try one of our alcohol-infused creations for a glaze that brings the heat and
                a smile. Not recommended for children.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Piña Colada */}
              <div className="bg-gradient-to-r from-rose-50 to-white rounded-xl overflow-hidden shadow-lg border border-rose-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/PiñaColada.webp"
                      alt="Piña Colada Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
                      21+
                    </div>
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-medium rounded-full mb-3">
                        Tropical Buzz
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Piña Colada
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-rose-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center mb-2">
                            <Cookie className="h-4 w-4 mr-2 text-rose-600" />
                            <h4 className="font-medium text-rose-800">Flavor Profile</h4>
                          </div>
                          <p className="text-gray-700">
                            Every thick and decadent Cheesecake Cookie starts with a base made of butter, cream cheese,
                            flour, sugar and Oreo's. Flavor provided by freeze-dried pineapples, pineapple extract,
                            coconut flakes, and Malibu Coconut Rum.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center mb-2">
                            <Info className="h-4 w-4 mr-2 text-rose-600" />
                            <h4 className="font-medium text-rose-800">Ingredients</h4>
                          </div>
                          <p className="text-gray-700 mb-4">
                            Cream cheese, butter, sugar, flour, freeze-dried pineapples, pineapple extract, coconut
                            flakes, Malibu Coconut Rum, and Oreo's.
                          </p>
                          <div className="mt-6 flex justify-between items-center">
                            <span className="text-lg font-bold">$4.99</span>
                            <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                              <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                                Taste Now
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CinnaRum */}
              <div className="bg-gradient-to-r from-rose-50 to-white rounded-xl overflow-hidden shadow-lg border border-rose-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/CinnaRum.webp"
                      alt="CinnaRum Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
                      21+
                    </div>
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-medium rounded-full mb-3">
                        Spiced Delight
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        CinnaRum
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-rose-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center mb-2">
                            <Cookie className="h-4 w-4 mr-2 text-rose-600" />
                            <h4 className="font-medium text-rose-800">Flavor Profile</h4>
                          </div>
                          <p className="text-gray-700">
                            Every thick and decadent Cheesecake Cookie starts with a base made of butter, cream cheese,
                            flour, sugar and Oreo's. Flavor provided by cinnamon, allspice, rum extract, and RumChata.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center mb-2">
                            <Info className="h-4 w-4 mr-2 text-rose-600" />
                            <h4 className="font-medium text-rose-800">Ingredients</h4>
                          </div>
                          <p className="text-gray-700 mb-4">
                            Cream cheese, butter, sugar, flour, cinnamon, allspice, rum extract, RumChata, and Oreo's.
                          </p>
                          <div className="mt-6 flex justify-between items-center">
                            <span className="text-lg font-bold">$4.99</span>
                            <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                              <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                                Taste Now
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Devil's Spiked */}
              <div className="bg-gradient-to-r from-rose-50 to-white rounded-xl overflow-hidden shadow-lg border border-rose-100 transition-all hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="relative aspect-square md:w-1/4">
                    <Image
                      src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/DevilsSpiked.webp"
                      alt="Devil's Spiked Cheesecake Cookie"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium">
                      21+
                    </div>
                  </div>
                  <div className="p-6 md:p-8 md:w-3/4">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-medium rounded-full mb-3">
                        Devilishly Good
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 inline-block relative mb-3">
                        Devil's Spiked
                        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-rose-400 rounded-full"></span>
                      </h3>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center mb-2">
                            <Cookie className="h-4 w-4 mr-2 text-rose-600" />
                            <h4 className="font-medium text-rose-800">Flavor Profile</h4>
                          </div>
                          <p className="text-gray-700">
                            Every thick and decadent Cheesecake Cookie starts with a base made of butter, cream cheese,
                            flour, sugar and Oreo's. Flavor provided by black cocoa powder, raspberry extract,
                            freeze-dried raspberrys, whole raspberrys and raspberry Liquor.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center mb-2">
                            <Info className="h-4 w-4 mr-2 text-rose-600" />
                            <h4 className="font-medium text-rose-800">Ingredients</h4>
                          </div>
                          <p className="text-gray-700 mb-4">
                            Cream cheese, butter, sugar, flour, black cocoa powder, raspberry extract, freeze-dried
                            raspberries, whole raspberries, raspberry Liquor, and Oreo's.
                          </p>
                          <div className="mt-6 flex justify-between items-center">
                            <span className="text-lg font-bold">$4.99</span>
                            <Button size="sm" className="bg-purple-700 hover:bg-purple-800" asChild>
                              <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                                Taste Now
                              </a>
                            </Button>
                          </div>
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

      {/* Closing Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
              <div className="lg:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/1.IG-Image.jpeg"
                    alt="Delicious cheesecake cookies assortment"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-1 font-medium text-sm">Customers love us!</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Gift className="h-8 w-8 text-purple-700" />
                </div>
                <SectionTitle textColor="text-gray-800" alignment={`text-center lg:text-left`}>
                  Experience Cookie Perfection
                </SectionTitle>
                <p className="text-lg text-gray-600 mb-8">
                  Each of our cheesecake cookies is crafted with love and premium ingredients. Whether you're treating
                  yourself or sharing with friends and family, our unique flavors are sure to delight your taste buds
                  and create sweet memories.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all hover:scale-105 hover:shadow-md">
                <div className="flex justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Mix & Match</h3>
                <p className="text-gray-600">Create your own custom box with your favorite flavors</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all hover:scale-105 hover:shadow-md">
                <div className="flex justify-center mb-4">
                  <Gift className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Gift Boxes</h3>
                <p className="text-gray-600">Perfect for birthdays, holidays, or just because</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all hover:scale-105 hover:shadow-md">
                <div className="flex justify-center mb-4">
                  <Cookie className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">Monthly Subscription</h3>
                <p className="text-gray-600">Get new flavors delivered to your door every month</p>
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800 transform transition-all hover:scale-105">
                Explore All Flavors <ChevronRight className="ml-2 h-5 w-5" />
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
            <path d="M12.5 16.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0z"></path>
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

        {/* Additional Cookie Icons */}
        <div className="absolute top-1/3 left-12 w-12 h-12 bg-gradient-to-br from-amber-100 to-white rounded-xl shadow-md flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-all duration-300 opacity-70">
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
            className="h-6 w-6 text-amber-600 drop-shadow-sm"
          >
            <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
            <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M12 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M16 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M7 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
          </svg>
        </div>

        <div className="absolute top-2/3 right-16 w-10 h-10 bg-gradient-to-br from-purple-100 to-white rounded-xl shadow-md flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-300 opacity-70">
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
            className="h-5 w-5 text-purple-600 drop-shadow-sm"
          >
            <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
            <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M12 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M16 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
          </svg>
        </div>

        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-gradient-to-br from-green-100 to-white rounded-xl shadow-md flex items-center justify-center transform -rotate-6 hover:rotate-6 transition-all duration-300 opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7 text-green-600 drop-shadow-sm"
          >
            <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
            <path d="M6 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M10 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M15 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M18 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M10 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
          </svg>
        </div>

        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-br from-yellow-100 to-white rounded-xl shadow-md flex items-center justify-center transform rotate-12 hover:rotate-0 transition-all duration-300 opacity-70">
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
            className="h-6 w-6 text-yellow-600 drop-shadow-sm"
          >
            <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
            <path d="M8.5 8.5a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
            <path d="M14 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M16 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M11 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
          </svg>
        </div>

        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-md shadow-md flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-all duration-300 opacity-60">
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
            className="h-8 w-8 text-red-600 drop-shadow-sm"
          >
            <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
            <path d="M4.23 10.39a.5.5 0 1 0 .71.7.49.49 0 0 0 0-.7.48.48 0 0 0-.71 0z"></path>
            <path d="M10.83 5.17a.5.5 0 1 0 .71.7.49.49 0 0 0 0-.7.51.51 0 0 0-.71 0z"></path>
            <path d="M10.83 9.9a.5.5 0 1 0 .71.7.49.49 0 0 0 0-.7.51.51 0 0 0-.71 0z"></path>
            <path d="M8.65 11.65a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
            <path d="M14.36 11.65a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
            <path d="M18.14 14.14a.5.5 0 1 0 .7.7.5.5 0 0 0 0-.7.5.5 0 0 0-.7 0z"></path>
          </svg>
        </div>

        <div className="absolute top-20 left-1/3 w-10 h-10 bg-gradient-to-br from-pink-100 to-white rounded-md shadow-md flex items-center justify-center transform rotate-45 hover:rotate-90 transition-all duration-300 opacity-70">
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
            className="h-5 w-5 text-pink-600 drop-shadow-sm"
          >
            <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
            <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M12 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
            <path d="M16 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SectionTitle textColor="text-gray-800">Our Cookie Fans</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              See what our customers have to say about our delicious cheesecake cookies. Join the community of cookie
              enthusiasts!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Customer Image 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/10.webp"
                    alt="Happy customer enjoying our cookies"
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    "These cookies are absolutely incredible! The perfect blend of cheesecake and cookie texture."
                  </p>
                  <div className="flex items-center mt-3">
                    <span className="text-xs text-purple-700">#CheesecakeCookieFan</span>
                  </div>
                </div>
              </div>

              {/* Customer Image 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/11.webp"
                    alt="Customer sharing cookies with friends"
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    "I brought these to a party and everyone was asking where I got them! The strawberry flavor is
                    amazing."
                  </p>
                  <div className="flex items-center mt-3">
                    <span className="text-xs text-purple-700">#CookieMoments</span>
                  </div>
                </div>
              </div>

              {/* Customer Image 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/12.webp"
                    alt="Family enjoying cookies together"
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    "My kids can't get enough of these cookies! The Cookies N' Cream flavor is their absolute favorite."
                  </p>
                  <div className="flex items-center mt-3">
                    <span className="text-xs text-purple-700">#FamilyFavorite</span>
                  </div>
                </div>
              </div>

              {/* Customer Image 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/2.webp"
                    alt="Customer enjoying cookies at an event"
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 font-medium">
                    "I've tried a lot of cookies in my life, but these are truly something special. The texture is
                    perfect!"
                  </p>
                  <div className="flex items-center mt-3">
                    <span className="text-xs text-purple-700">#CheesecakeCookieCo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-purple-700 hover:bg-purple-800">
                Share Your Cookie Experience <Instagram className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to order your favorites?</h2>
          <p className="text-purple-100 max-w-2xl mx-auto mb-8">
            Order online for local pickup or delivery, or contact us about catering for your next event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100" asChild>
              <a href="https://linktr.ee/thecheesecakecookie" target="_blank" rel="noopener noreferrer">
                Order Now <ShoppingBag className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" className="bg-white/20 border-white text-white hover:bg-white/30">
              View Catering Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

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
