"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, ShoppingBag, Star, Instagram, Facebook } from "lucide-react"
import RotatingReviews from "@/components/rotating-reviews"
import IphoneShowcase from "@/components/iphone-showcase"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden px-4 py-8 md:py-12 lg:py-16">
        <div className="absolute inset-x-4 inset-y-8 md:inset-y-12 lg:inset-y-16 z-0 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/15.IG-Image.jpeg"
            alt="Cookies and cream cheesecake cookies with Oreo pieces and individually packaged cookies"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start">
          <div className="max-w-2xl space-y-6 px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
              Bite into <span className="text-purple-200">happiness</span>, today!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Handcrafted cheesecake cookies that will change the way you think about dessert.
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

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle textColor="text-gray-800">Our Signature Flavors</SectionTitle>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Discover our most popular cheesecake cookie creations that keep our customers coming back for more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden bg-[#F9FAFB]">
                <Image
                  src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/CookiesNCream.webp"
                  alt="Cookies N' Cream Cheesecake Cookie"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Cookies N' Cream</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Our original bestseller with creamy cheesecake and Oreo cookies.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">$3.99</span>
                  <Button size="sm" className="bg-purple-700 hover:bg-purple-800">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden bg-[#F9FAFB]">
                <Image
                  src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/DevilsSpiked.webp"
                  alt="Devil's Spiked Cheesecake Cookie"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Devil's Spiked</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">4.8</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Dark chocolate with raspberry liquor for a devilish treat.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">$4.99</span>
                  <Button size="sm" className="bg-purple-700 hover:bg-purple-800">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden bg-[#F9FAFB]">
                <Image
                  src="https://pub-7776d0951c2b4184b092c7827efb2190.r2.dev/Lemon.webp"
                  alt="Lemon Cheesecake Cookie"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">Lemon</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">4.7</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">The perfect balance of sweet and tart in every bite.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">$4.29</span>
                  <Button size="sm" className="bg-purple-700 hover:bg-purple-800">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
              View All Flavors <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section with iPhone */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <SectionTitle textColor="text-gray-800">See Our Cookies in Action</SectionTitle>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Follow us on social media to see how our customers are enjoying their cheesecake cookies.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">Join Our Cookie Community</h3>
              <p className="text-gray-600 mb-6">
                Our customers love sharing their cookie moments! Tag us in your posts and stories for a chance to be
                featured on our page.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <Instagram className="h-3 w-3 text-purple-700" />
                  </div>
                  <span className="text-gray-700">Follow us @cheesecakecookieco</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-700 text-sm font-bold">#</span>
                  </div>
                  <span className="text-gray-700">Share with #CheesecakeCookieMoments</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-700 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Get featured on our page and win monthly prizes</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/thecheesecakecookiecompany?igsh=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition-colors"
                >
                  View on Instagram <Instagram className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/thecheesecakecookie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#1877F2] text-white rounded-md hover:bg-[#166FE5] transition-colors"
                >
                  View on Facebook <Facebook className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <IphoneShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <SectionTitle textColor="text-gray-800">What Our Customers Say</SectionTitle>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Don't just take our word for it - see what our happy customers have to say about our cheesecake cookies.
          </p>

          <RotatingReviews />

          <div className="text-center mt-12">
            <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
              Read More Reviews <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About/Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle textColor="text-gray-800" alignment="text-left">
                Are you ready for the best thing you've never had?
              </SectionTitle>
              <p className="text-gray-600 mb-6">
                At The Cheesecake Cookie Company, we've perfected the art of combining two beloved desserts into one
                extraordinary treat. Our handcrafted cookies feature a creamy cheesecake center surrounded by perfectly
                baked cookie dough.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-700 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Made from scratch daily with premium ingredients</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-700 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Available for local delivery and nationwide shipping</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-purple-700 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Perfect for gifts, events, and special occasions</span>
                </li>
              </ul>
              <Button className="bg-purple-700 hover:bg-purple-800">Our Story</Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="https://pub-d88cc6d9623243d5a5416496bc457456.r2.dev/IG-Dessert-Festival.mp4"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">500+ Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-50 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle textColor="text-gray-800">Cookie Gallery</SectionTitle>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Feast your eyes on our delicious creations. Each cookie is handcrafted with love and care.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Gallery Item 1 - Featured larger video */}
            <div
              className="relative aspect-square group overflow-hidden rounded-xl col-span-2 row-span-2 transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 shadow-lg hover:shadow-xl"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <video
                src="https://pub-334dd080718649afae28f757b2607b1f.r2.dev/IG-WhiteChocolate-BlueBerry.mp4"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-1">Signature Cheesecake</h3>
                  <p className="text-white/80 text-sm">Our most popular flavor</p>
                </div>
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div
              className="relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/5.IG-Image.jpeg"
                alt="Assorted cheesecake cookie flavors"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Chocolate Chip
                </p>
              </div>
            </div>

            {/* Gallery Image 3 */}
            <div
              className="relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/6.IG-Image.jpeg"
                alt="Chocolate cheesecake cookies"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Double Chocolate
                </p>
              </div>
            </div>

            {/* Gallery Image 4 */}
            <div
              className="relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/8.IG-Image.jpeg"
                alt="Red velvet cheesecake cookies"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Red Velvet
                </p>
              </div>
            </div>

            {/* Gallery Image 5 */}
            <div
              className="relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/7.IG-Image.jpeg"
                alt="Lemon cheesecake cookies with fresh lemons"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Baking Process
                </p>
              </div>
            </div>

            {/* Gallery Image 6 */}
            <div
              className="relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/10.IG-Image.jpeg"
                alt="Cookies and cream cheesecake cookies"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Cookies & Cream
                </p>
              </div>
            </div>

            {/* Gallery Image 7 - Taller image */}
            <div
              className="relative aspect-square md:aspect-[1/2] group overflow-hidden rounded-xl row-span-1 md:row-span-2 transform transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/22.IG-Image.jpeg"
                alt="Cookie gift box assortment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Gift Boxes
                </p>
              </div>
            </div>

            {/* Gallery Image 8 */}
            <div
              className="relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/11.IG-Image.jpeg"
                alt="Colorful cheesecake cookie balls with blueberries"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Perfect Pairing
                </p>
              </div>
            </div>

            {/* Gallery Image 9 */}
            <div
              className="relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/9.IG-Image.jpeg"
                alt="Freshly baked cheesecake cookies"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Fresh Batch
                </p>
              </div>
            </div>

            {/* MOBILE-ONLY: Special row for Party Platters and Cookie Assortment images */}
            <div className="block md:hidden col-span-2">
              {/* Fixed row for the two images on mobile ONLY - will ensure they stay together */}
              <div className="grid grid-cols-2 gap-4 w-full">
                {/* Party Platters Image - Mobile version */}
                <div
                  className="relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-md hover:shadow-lg"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/20.IG-Image.jpeg"
                    alt="Cookie gift box with red ribbon"
                    fill
                    sizes="(max-width: 640px) 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Party Platters
                    </p>
                  </div>
                </div>

                {/* Cookie Assortment Image - Mobile square version */}
                <div
                  className="relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-md hover:shadow-lg"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/red-cookies-banking-rack.jpg"
                    alt="Red cookies on baking rack"
                    fill
                    sizes="(max-width: 640px) 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Cookie Assortment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP/TABLET: Party Platters (original) - Hidden on mobile */}
            <div
              className="hidden md:block relative aspect-square group overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/20.IG-Image.jpeg"
                alt="Cookie gift box with red ribbon"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Party Platters
                </p>
              </div>
            </div>

            {/* DESKTOP/TABLET: Cookie Assortment (original) - Hidden on mobile */}
            <div
              className="hidden md:block relative aspect-[2/1] group overflow-hidden rounded-xl col-span-2 transform transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-md hover:shadow-lg"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="https://pub-2149827fdafc453f815e5ae82a3959cf.r2.dev/red-cookies-banking-rack.jpg"
                alt="Red cookies on baking rack"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Cookie Assortment
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button className="bg-purple-700 hover:bg-purple-800 transform transition-transform hover:scale-105 shadow-lg hover:shadow-purple-300/30">
              Follow Us on Instagram <Instagram className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* 3D Decorative Elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -right-20 w-60 h-60 bg-purple-100/20 rounded-full blur-3xl"></div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-700">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle textColor="text-white">Ready to experience cookie perfection?</SectionTitle>
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
              Catering Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Section Title Component
function SectionTitle({
  children,
  textColor = "text-white",
  alignment = "text-center",
}: {
  children: React.ReactNode;
  textColor?: string;
  alignment?: string;
}) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className={`mb-4 ${alignment}`}>
      {isMobile ? (
        /* Mobile optimized heading with smaller font size */
        <h2
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ${textColor} mb-6 relative px-2`}
        >
          <span className="inline-block">{children}</span>
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-700 rounded-full"></span>
        </h2>
      ) : (
        /* Desktop version */
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ${textColor} mb-6 relative`}
        >
          {children}
          <span
            className={`absolute -bottom-4 ${alignment === "text-left" ? "left-0" : "left-1/2 transform -translate-x-1/2"} w-24 h-1 bg-purple-700 rounded-full`}
          ></span>
        </h2>
      )}
    </div>
  );
}
