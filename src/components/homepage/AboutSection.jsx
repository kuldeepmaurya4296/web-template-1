"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Company</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to delivering exceptional solutions that drive growth
            and success for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/about.jpeg"
              alt="About Us"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive
              advantage in the digital landscape.
            </p>

            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be the leading provider of transformative digital solutions, recognized for our excellence, innovation,
              and commitment to client success.
            </p>

            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <ChevronRight size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Innovation: We embrace creativity and forward-thinking approaches.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Excellence: We strive for the highest quality in everything we do.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Integrity: We operate with honesty, transparency, and ethical standards.</span>
              </li>
              <li className="flex items-start">
                <ChevronRight size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <span>Collaboration: We believe in the power of teamwork and partnership.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

