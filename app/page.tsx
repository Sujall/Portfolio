"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Page() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
  })

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <Link
            href="/Sujal Yadav (Resume).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto"
          >
            <Button variant="outline">Resume</Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Sujal Yadav - Full Stack Developer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Building digital experiences with modern technologies. Focused on creating elegant solutions to complex problems.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="https://github.com/Sujall" target="_blank">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/sujal-yadav-/" target="_blank">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:sujaly1104@example.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects with Carousel */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <ProjectCard
                  title="Settler – Scalable Expense Management"
                  description="Built a high-performance expense tracking platform to manage personal and group finances. Enabled users to manage multiple bank accounts, track individual transactions, and split group expenses with real-time balance updates."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["React.js", "Firebase", "Group Finance", "Role-based UI"]}
                />
              </div>
              <div className="keen-slider__slide">
                <ProjectCard
                  title="Talk-A-Tive – Real-Time Chat App"
                  description="Developed a real-time chat application using Socket.io for messaging, typing indicators, and notifications. Integrated React.js front-end with a Node.js and Express.js back-end, supported by MongoDB for storing chat data."
                  image="/Talk-A-Tive – Real-Time Chat App.png"
                  link="https://github.com"
                  tags={["React.js", "Socket.io", "Node.js", "MongoDB"]}
                />
              </div>
              <div className="keen-slider__slide">
                <ProjectCard
                  title="Currency Converter App"
                  description="A modern, feature-rich currency converter application built with React Native and Expo. Convert currencies from around the world, get real-time exchange rates, and access AI-powered help whenever you need it."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["React.js", "Node.js", "E-Commerce", "UX"]}
                />
              </div>
                <div className="keen-slider__slide">
                <ProjectCard
                  title="E-Commerce Shopping Website"
                  description="Designed and implemented a seamless shopping experience with cart management, form validation, and dynamic UI. Managed server-side operations using Node.js to ensure smooth front-end/back-end communication."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["React.js", "Node.js", "E-Commerce", "UX"]}
                />
              </div>
                <div className="keen-slider__slide">
                <ProjectCard
                  title="E-Commerce Shopping Website"
                  description="Designed and implemented a seamless shopping experience with cart management, form validation, and dynamic UI. Managed server-side operations using Node.js to ensure smooth front-end/back-end communication."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["React.js", "Node.js", "E-Commerce", "UX"]}
                />
              </div>
                <div className="keen-slider__slide">
                <ProjectCard
                  title="E-Commerce Shopping Website"
                  description="Designed and implemented a seamless shopping experience with cart management, form validation, and dynamic UI. Managed server-side operations using Node.js to ensure smooth front-end/back-end communication."
                  image="/placeholder.svg?height=400&width=600"
                  link="https://github.com"
                  tags={["React.js", "Node.js", "E-Commerce", "UX"]}
                />
              </div>
              {/* Add more slides here if needed */}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-base text-gray-500 dark:text-gray-400">
            Built with ❤️
          </p>
        </div>
      </footer>
    </div>
  )
}
