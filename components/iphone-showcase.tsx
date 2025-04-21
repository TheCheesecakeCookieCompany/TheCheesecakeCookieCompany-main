"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, Facebook } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

// Happy client images
const clientImages = [
  "https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/4.webp",
  "https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/5.webp",
  "https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/6.webp",
  "https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/7.webp",
  "https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/8.webp",
  "https://pub-23f93f8f1ded4780b874b4d57a106da3.r2.dev/9.webp",
]

export default function IphoneShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Rotate through images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % clientImages.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Floating animation values
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    // Don't apply floating animation on mobile for better performance
    if (isMobile) return

    let animationFrame: number
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Simple sine wave for smooth up and down motion
      const newYOffset = Math.sin(elapsed / 1000) * 5
      setYOffset(newYOffset)

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [isMobile])

  // Mobile styling - ensuring iPhone frame shows on mobile
  const mobileStyling = isMobile ? {
    transform: "none",
    transition: "none"
  } : {
    transform: `rotateY(15deg) rotateZ(8deg) translateY(${yOffset}px)`,
    transformStyle: "preserve-3d" as "preserve-3d",
    transition: "transform 0.1s ease-out",
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* Mobile layout structure fixed to ensure iPhone shows */}
      <div className={`${isMobile ? 'w-full flex flex-col items-center gap-4 mb-6' : 'absolute -left-20 sm:-left-24 md:-left-32 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4'} z-10`}>
        {/* Social Media Buttons */}
        <div className="flex flex-row justify-center gap-4 mb-2">
          {/* Instagram Link Button */}
          <a
            href="https://www.instagram.com/thecheesecakecookiecompany?igsh=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group transform hover:-translate-y-1"
            aria-label="View on Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#E1306C] group-hover:scale-110 transition-transform" />
          </a>

          {/* Facebook Link Button */}
          <a
            href="https://www.facebook.com/thecheesecakecookie"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group transform hover:-translate-y-1"
            aria-label="View on Facebook"
          >
            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-[#1877F2] group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Mobile Social Info (only visible on mobile) */}
        {isMobile && (
          <div className="text-center mb-4 px-4">
            <p className="text-sm text-gray-600 mb-2">
              Follow <span className="font-bold">@cheesecakecookieco</span> and use
              <span className="font-bold"> #CheesecakeCookieMoments</span> for a chance to be featured
            </p>
          </div>
        )}

        {/* Decorative Line - hide on mobile */}
        {!isMobile && <div className="w-px h-16 md:h-24 bg-gradient-to-b from-gray-300/50 to-transparent"></div>}
      </div>

      {/* iPhone Frame Container - Improved mobile visibility */}
      <div
        className="relative w-full max-w-[280px] h-[480px] sm:max-w-[320px] sm:h-[550px] md:w-[350px] md:h-[600px] lg:w-[380px] lg:h-[650px] mx-auto block"
        style={{
          perspective: isMobile ? "none" : "1200px",
        }}
      >
        {/* iPhone frame with floating animation */}
        <div
          className="relative w-full h-full"
          style={mobileStyling}
        >
          <div
            className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-r from-[#e2e2e2] via-[#f5f5f5] to-[#e8e8e8] shadow-xl overflow-hidden"
            style={{
              boxShadow: `
              ${isMobile ? "-4px 4px 12px" : "-10px 10px 20px"} rgba(0,0,0,0.15),
              inset -3px 0 8px rgba(255,255,255,0.8),
              inset 3px 0 8px rgba(0,0,0,0.1)
            `,
            }}
          >
            {/* Buttons on the side of the phone */}
            <div className="absolute right-0 top-24 w-[2px] md:w-[3px] h-8 md:h-12 bg-[#d4d4d4] rounded-l-sm shadow-inner"></div>
            <div className="absolute right-0 top-36 md:top-40 w-[2px] md:w-[3px] h-8 md:h-12 bg-[#d4d4d4] rounded-l-sm shadow-inner"></div>
            <div className="absolute right-0 top-48 md:top-56 w-[2px] md:w-[3px] h-12 md:h-16 bg-[#d4d4d4] rounded-l-sm shadow-inner"></div>

            {/* Top notch - sized better for mobile */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] sm:w-[90px] md:w-[100px] h-[20px] sm:h-[25px] md:h-[30px] bg-black rounded-b-2xl"></div>

            {/* Screen with rotating images - better padding for mobile */}
            <div className="absolute inset-[6px] sm:inset-[8px] md:inset-[10px] rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden bg-black">
              <div
                className={`relative w-full h-full transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"
                  }`}
              >
                <Image
                  src={clientImages[currentImageIndex] || "/placeholder.svg"}
                  alt="Happy client enjoying cookies"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-black/10" />

                {/* Instagram-style UI overlay - improved for visibility */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src="/images/logo.png"
                        alt="Cheesecake Cookie Company"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-2 text-white text-xs sm:text-sm">
                      <p className="font-bold">cheesecakecookieco</p>
                      <p className="text-[10px] opacity-80">Original audio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social proof tag - mobile only */}
      {isMobile && (
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">Get featured on our page and win monthly prizes</p>
        </div>
      )}
    </div>
  )
}
