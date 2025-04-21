import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "The Cheesecake Cookie Company",
  description: "Handcrafted cheesecake cookies made with premium ingredients",
  generator: 'v0.dev',
  openGraph: {
    title: "The Cheesecake Cookie Company",
    description: "Handcrafted cheesecake cookies that will change the way you think about dessert",
    url: "https://thecheesecakecookie.com",
    siteName: "The Cheesecake Cookie Company",
    images: [
      {
        url: "https://pub-1d03db704b9f4995a9360aefd46a4ab9.r2.dev/4.TheCheesecakeCookieCompany-Thumbnail.png",
        width: 1200,
        height: 630,
        alt: "The Cheesecake Cookie Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cheesecake Cookie Company",
    description: "Handcrafted cheesecake cookies that will change the way you think about dessert",
    images: ["https://pub-1d03db704b9f4995a9360aefd46a4ab9.r2.dev/4.TheCheesecakeCookieCompany-Thumbnail.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
