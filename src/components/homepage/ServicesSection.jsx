"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies to meet your specific business needs.",
      icon: "🖥️",
      link: "/services/web-development",
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: "📱",
      link: "/services/mobile-development",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description:
        "User-centered design solutions that enhance usability, accessibility, and visual appeal of your digital products.",
      icon: "🎨",
      link: "/services/ui-ux-design",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that increase your online visibility, drive traffic, and generate leads.",
      icon: "📊",
      link: "/services/digital-marketing",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure and services to optimize your business operations.",
      icon: "☁️",
      link: "/services/cloud-solutions",
    },
    {
      id: "consulting",
      title: "Consulting Services",
      description:
        "Expert guidance and strategic advice to help you navigate the digital landscape and achieve your goals.",
      icon: "💼",
      link: "/services/consulting",
    },
  ]

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services to help your business thrive in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

