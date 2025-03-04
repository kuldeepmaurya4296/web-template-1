import Link from "next/link"
import Image from "next/image"

export default function ProjectPage({ params }) {
  const projectId = params.project

  // In a real application, you would fetch this data from a database or API
  const projects = {
    "e-commerce-platform": {
      title: "E-commerce Platform",
      category: "Web Development",
      client: "RetailCo Inc.",
      completionDate: "June 2023",
      description:
        "A fully responsive e-commerce platform with advanced features and seamless user experience. The platform includes product management, inventory tracking, payment processing, and customer management features.",
      challenge:
        "The client needed a scalable e-commerce solution that could handle a large inventory and high traffic volumes while providing a seamless shopping experience across all devices.",
      solution:
        "We developed a custom e-commerce platform using Next.js for the frontend and a headless CMS for content management. The platform was designed with a mobile-first approach and optimized for performance and SEO.",
      results:
        "The new platform resulted in a 40% increase in mobile conversions, a 25% reduction in cart abandonment, and a 30% increase in average order value.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "AWS"],
      images: [
        "/project1.jpeg",
        "/project2.jpeg",
        "/project3.png",
      ],
    },
    "healthcare-app": {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      client: "MediCare Solutions",
      completionDate: "March 2023",
      description:
        "An innovative healthcare application that connects patients with doctors for virtual consultations. The app includes features for appointment scheduling, video consultations, prescription management, and medical records.",
      challenge:
        "The client wanted to create a telemedicine solution that would make healthcare more accessible while ensuring patient data security and compliance with healthcare regulations.",
      solution:
        "We developed a cross-platform mobile app using React Native with end-to-end encryption for all communications. The app was integrated with a secure backend for managing patient data and appointments.",
      results:
        "The app has been downloaded over 50,000 times and has facilitated more than 10,000 virtual consultations in its first six months.",
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "MongoDB", "AWS"],
      images: [
        "/project1.jpeg",
        "/project2.jpeg",
        "/project3.png",
      ],
    },
    "financial-dashboard": {
      title: "Financial Dashboard",
      category: "UI/UX Design",
      client: "FinTech Innovations",
      completionDate: "November 2022",
      description:
        "A comprehensive financial dashboard that visualizes complex data in an intuitive interface. The dashboard provides real-time insights into financial performance, market trends, and investment opportunities.",
      challenge:
        "The client needed a way to present complex financial data in a clear, intuitive manner that would allow users to make informed decisions quickly.",
      solution:
        "We designed a user-centered dashboard with customizable widgets, interactive charts, and data visualization tools. The design process included extensive user research and usability testing.",
      results:
        "The new dashboard reduced the time spent on data analysis by 60% and improved user satisfaction scores by 45%.",
      technologies: ["Figma", "Adobe XD", "D3.js", "React", "Next.js", "TypeScript"],
      images: [
        "/project1.jpeg",
        "/project2.jpeg",
        "/project3.png",
      ],
    },
    "real-estate-website": {
      title: "Real Estate Website",
      category: "Web Development",
      client: "Prime Properties",
      completionDate: "August 2022",
      description:
        "A modern real estate website with property listings, search functionality, and virtual tours. The website includes features for property management, agent profiles, and lead generation.",
      challenge:
        "The client wanted to create a website that would showcase their properties in an engaging way and generate high-quality leads for their agents.",
      solution:
        "We developed a custom real estate website with advanced search functionality, virtual property tours, and integrated CRM for lead management. The website was optimized for performance and SEO.",
      results:
        "The website increased property inquiries by 65% and reduced the average time to sell a property by 20%.",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Google Maps API", "AWS"],
      images: [
        "/project1.jpeg",
        "/project2.jpeg",
        "/project3.png",
      ],
    },
    "fitness-app": {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      client: "FitLife Inc.",
      completionDate: "May 2022",
      description:
        "A fitness tracking application that helps users monitor their workouts and achieve their goals. The app includes features for workout planning, progress tracking, nutrition logging, and social sharing.",
      challenge:
        "The client wanted to create a fitness app that would motivate users to stay active and provide personalized workout recommendations based on their goals and progress.",
      solution:
        "We developed a mobile app with gamification elements, personalized workout plans, and social features. The app uses machine learning to analyze user data and provide tailored recommendations.",
      results:
        "The app has achieved a 70% user retention rate after 3 months and has been featured in the App Store's health and fitness category.",
      technologies: ["React Native", "Redux", "Firebase", "TensorFlow", "Node.js", "MongoDB"],
      images: [
        "/project1.jpeg",
        "/project2.jpeg",
        "/project3.png",
      ],
    },
    "corporate-branding": {
      title: "Corporate Branding",
      category: "Design",
      client: "Global Enterprises",
      completionDate: "February 2022",
      description:
        "A complete brand identity redesign for a corporate client, including logo, color scheme, and guidelines. The project included the development of a comprehensive brand style guide and marketing materials.",
      challenge:
        "The client needed to refresh their brand identity to reflect their evolution as a company while maintaining recognition among their existing customers.",
      solution:
        "We conducted extensive market research and stakeholder interviews to understand the company's values and goals. Based on this research, we developed a new brand identity that balanced tradition with innovation.",
      results:
        "The new brand identity was successfully implemented across all channels and received positive feedback from both customers and employees.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma"],
      images: [
        "/project1.jpeg",
        "/project2.jpeg",
        "/project3.png",
      ],
    },
  }

  const project = projects[projectId] || {
    title: "Project Not Found",
    category: "",
    client: "",
    completionDate: "",
    description: "The requested project does not exist.",
    challenge: "",
    solution: "",
    results: "",
    technologies: [],
    images: ["/placeholder.svg?height=400&width=600"],
  }

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/portfolio" className="text-primary hover:underline inline-flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Portfolio
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{project.category}</span>
            {project.client && (
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Client: {project.client}</span>
            )}
            {project.completionDate && (
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                Completed: {project.completionDate}
              </span>
            )}
          </div>
          <p className="text-gray-600 max-w-3xl">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            {project.challenge && (
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">The Challenge</h2>
                <p className="text-gray-600">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Our Solution</h2>
                <p className="text-gray-600">{project.solution}</p>
              </div>
            )}
            {project.results && (
              <div>
                <h2 className="text-xl font-bold mb-2">The Results</h2>
                <p className="text-gray-600">{project.results}</p>
              </div>
            )}
          </div>
        </div>

        {project.technologies.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.images.length > 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.slice(1).map((image, index) => (
                <Image
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 2}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

