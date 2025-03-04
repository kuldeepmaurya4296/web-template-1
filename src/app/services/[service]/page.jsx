import Link from "next/link"
import Image from "next/image"

export default function ServicePage({ params }) {
  const serviceId = params.service

  // In a real application, you would fetch this data from a database or API
  const services = {
    "web-development": {
      title: "Web Development",
      description:
        "Our web development services focus on creating custom, high-performance websites and web applications that meet your specific business needs.",
      features: [
        "Custom website development",
        "E-commerce solutions",
        "Progressive Web Apps (PWAs)",
        "Content Management Systems (CMS)",
        "Web application development",
        "API development and integration",
      ],
      image: "/project1.jpeg",
    },
    "mobile-development": {
      title: "Mobile App Development",
      description:
        "We create native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "iOS app development",
        "Android app development",
        "Cross-platform app development",
        "Mobile app UI/UX design",
        "App maintenance and support",
        "App store optimization",
      ],
      image: "/project1.jpeg",
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      description:
        "Our design team creates user-centered design solutions that enhance usability, accessibility, and visual appeal of your digital products.",
      features: [
        "User research and analysis",
        "Wireframing and prototyping",
        "Visual design",
        "Interaction design",
        "Usability testing",
        "Design systems",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description:
        "We develop strategic marketing campaigns that increase your online visibility, drive traffic, and generate leads.",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) advertising",
        "Social media marketing",
        "Content marketing",
        "Email marketing",
        "Analytics and reporting",
      ],
      image: "/project1.jpeg",
    },
    "cloud-solutions": {
      title: "Cloud Solutions",
      description:
        "We provide scalable and secure cloud infrastructure and services to optimize your business operations.",
      features: [
        "Cloud migration",
        "Cloud infrastructure setup",
        "Cloud-native application development",
        "DevOps implementation",
        "Serverless architecture",
        "Cloud security",
      ],
      image: "/project1.jpeg",
    },
    consulting: {
      title: "Consulting Services",
      description:
        "Our expert consultants provide strategic guidance to help you navigate the digital landscape and achieve your goals.",
      features: [
        "Digital transformation strategy",
        "Technology assessment",
        "Product strategy",
        "Technical architecture",
        "Process optimization",
        "Team training and enablement",
      ],
      image: "/project1.jpeg",
    },
  }

  const service = services[serviceId] || {
    title: "Service Not Found",
    description: "The requested service does not exist.",
    features: [],
    image: "/project1.jpeg",
  }

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/services" className="text-primary hover:underline inline-flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Services
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h1>
            <p className="text-gray-600 mb-8">{service.description}</p>

            <h2 className="text-xl font-bold mb-4">What We Offer</h2>
            <ul className="space-y-2 mb-8">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block"
            >
              Get a Quote
            </Link>
          </div>

          <div>
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

