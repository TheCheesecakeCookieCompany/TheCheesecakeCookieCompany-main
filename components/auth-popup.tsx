"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CircleCheck, History, CreditCard } from "lucide-react"

interface AuthPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthPopup({ isOpen, onClose }: AuthPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6 mx-4">
        <div className="flex justify-center mb-6">
          <div className="relative h-16 w-16">
            <Image
              src="https://pub-1d03db704b9f4995a9360aefd46a4ab9.r2.dev/logo-origional.webp"
              alt="The Cheesecake Cookie Company Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
          <h2 className="text-xl font-medium text-purple-700">
            Sign in or create an account with just your phone number
          </h2>
        </div>

        <div className="space-y-6 mb-6">
          <div className="flex items-start space-x-3">
            <CircleCheck className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
            <p>Get order status notifications</p>
          </div>

          <div className="flex items-start space-x-3">
            <History className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
            <p>View your order history and quickly reorder</p>
          </div>

          <div className="flex items-start space-x-3">
            <CreditCard className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
            <p>Manage your Square Pay payment details for faster checkout from any Square Online site</p>
          </div>
        </div>

        <Button className="w-full bg-purple-700 hover:bg-purple-800 py-6 text-base">Sign in or sign up</Button>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 px-4 py-2 rounded-md bg-gradient-to-b from-purple-600 to-purple-700 text-white font-medium shadow-md transform transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[1px] active:shadow-sm border border-purple-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}
