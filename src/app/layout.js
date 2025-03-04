import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/header/Navbar"
import Footer from "@/components/footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Company Name - Innovative Solutions for Your Business",
  description:
    "We help businesses transform their ideas into reality with cutting-edge technology and creative solutions.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

