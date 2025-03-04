"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A fully responsive e-commerce platform with advanced features and seamless user experience.",
      image: "/project1.jpeg",
      link: "/portfolio/e-commerce-platform",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description:
        "An innovative healthcare application that connects patients with doctors for virtual consultations.",
      image: "/project2.jpeg",
      link: "/portfolio/healthcare-app",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "UI/UX Design",
      description: "A comprehensive financial dashboard that visualizes complex data in an intuitive interface.",
      image: "/project3.png",
      link: "/portfolio/financial-dashboard",
    },
    {
      id: 4,
      title: "Real Estate Website",
      category: "Web Development",
      description: "A modern real estate website with property listings, search functionality, and virtual tours.",
      image: "/project4.jpeg",
      link: "/portfolio/real-estate-website",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "A fitness tracking application that helps users monitor their workouts and achieve their goals.",
      image: "/project5.png",
      link: "/portfolio/fitness-app",
    },
    {
      id: 6,
      title: "Corporate Branding",
      category: "Design",
      description:
        "A complete brand identity redesign for a corporate client, including logo, color scheme, and guidelines.",
      image: "/project1.jpeg",
      link: "/portfolio/corporate-branding",
    },
  ]

  const [activeCategory, setActiveCategory] = useState("All")
  const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design", "Design"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped our clients achieve their goals.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category ? "bg-[#ff9933] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={project.link}
                    className="bg-white text-primary px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

