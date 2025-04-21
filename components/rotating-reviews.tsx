"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

// Review data
const reviews = [
  {
    id: 1,
    name: "Sheron A.",
    location: "Gardena, CA",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "OMG the cookies n cream cheesecake cookies just melts on the roof of your mouth like ice cream",
    date: "April 15, 2025",
  },
  {
    id: 2,
    name: "Lawrence W.",
    location: "Inglewood, CA",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "That strawberry cheesecake cookie, the flavor blew my mind. It taste more like strawberry than strawberries.",
    date: "March 28, 2025",
  },
  {
    id: 3,
    name: "Kiana G.",
    location: "Hawthorne, CA",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "So me and my boyfriend almost got into an argument over who ate the last lemon cheesecake cookie. -_-",
    date: "April 2, 2025",
  },
  {
    id: 4,
    name: "Gary Wright",
    location: "Lawndale, CA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "These are the most delicious cookies I've ever eaten!! Brilliant creation!!",
    date: "March 22, 2025",
  },
  {
    id: 5,
    name: "Ali A.",
    location: "Gardena, CA",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "3rd time i ordered from this place, never disappoints. every bite from one of these scrumptious cookies takes me to a dream i never knew i had. we don't want these cookies, we need those cookies.",
    date: "April 10, 2025",
  },
  {
    id: 6,
    name: "Robert Chen",
    location: "Boston, MA",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "I sent these as a gift to my mom for Mother's Day and she absolutely loved them! She said they were the most unique and delicious cookies she's ever had. Will be ordering again soon!",
    date: "March 5, 2025",
  },
]

export default function RotatingReviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-rotation interval in milliseconds (5 seconds)
  const rotationInterval = 5000

  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1))

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning])

  // Auto-rotate every 5 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, rotationInterval)

      return () => clearInterval(interval)
    }
  }, [isPaused, nextSlide, rotationInterval])

  // Get current review
  const currentReview = reviews[activeIndex]

  return (
    <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* Auto-rotation indicator */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
        {isPaused ? "Paused - Hover to resume" : "Auto-rotating reviews"}
      </div>

      {/* Single Review Card */}
      <div className="max-w-3xl mx-auto">
        <div
          className="bg-white p-8 rounded-xl shadow-lg border-2 border-purple-200 transition-all duration-500 transform"
          style={{
            opacity: isTransitioning ? 0.7 : 1,
            transform: isTransitioning ? "scale(0.98)" : "scale(1)",
          }}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-purple-200">
                <Image
                  src={currentReview.image || "/placeholder.svg"}
                  alt={currentReview.name}
                  width={64}
                  height={64}
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{currentReview.name}</h4>
                <p className="text-sm text-gray-500">{currentReview.location}</p>
              </div>
            </div>
            <Quote className="h-10 w-10 text-purple-200" />
          </div>
          <div className="mb-6">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < currentReview.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-700 text-lg">"{currentReview.text}"</p>
          </div>
          <p className="text-sm text-gray-500">Verified Purchase - {currentReview.date}</p>
        </div>
      </div>

      {/* Profile Images Row */}
      <div className="flex justify-center mt-8 flex-wrap gap-4">
        {reviews.map((review, index) => (
          <button
            key={review.id}
            onClick={() => {
              setIsTransitioning(true)
              setActiveIndex(index)
              setTimeout(() => setIsTransitioning(false), 500)
            }}
            className={`relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 rounded-full`}
            aria-label={`View review from ${review.name}`}
          >
            <div
              className={`h-14 w-14 rounded-full overflow-hidden transition-all duration-300 ${
                index === activeIndex
                  ? "border-3 border-purple-500 scale-110 shadow-lg"
                  : "border border-gray-200 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={review.image || "/placeholder.svg"}
                alt={review.name}
                width={56}
                height={56}
                className="object-cover h-full w-full"
              />
            </div>
            {index === activeIndex && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-purple-500 rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Navigation controls */}
      <div className="flex justify-center mt-8 gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-purple-200 hover:bg-purple-50"
          onClick={prevSlide}
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5 text-purple-700" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-purple-200 hover:bg-purple-50"
          onClick={nextSlide}
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5 text-purple-700" />
        </Button>
      </div>
    </div>
  )
}
