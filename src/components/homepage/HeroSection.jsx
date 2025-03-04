"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Innovative Solutions for Your Business
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We help businesses transform their ideas into reality with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#ff9933] text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-center"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-gray-50 transition-colors text-center flex items-center justify-center"
              >
                Our Services <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <Image
              src="/hero.jpeg"
              alt="Hero Image"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

