"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  User,
  Code,
  Shield,
  Clock,
  MapPin,
  Calendar,
  ExternalLink,
  FileLock,
  Radar,
} from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import Link from "next/link"
import { useState } from "react"

// Timeline data
const timelineData = [
  {
    year: "2025 - 2027",
    title: "Master of Science in Cybersecurity and Networks",
    company: "Queensland University of Technology",
    location: "Brisbane, QLD",
    type: "education",
  },
  {
    year: "2023 - 2024",
    title: "IT Administrator",
    company: "Webster University Geneva",
    description:
      "Secured networks with VLANs, DNS protection, and automated system backups. Automated processes using Python and PowerShell, improving efficiency. Led teams and delegated tasks to deliver complex projects on time. Monitored systems, applied patches, and addressed vulnerabilities to ensure reliability.",
    location: "Geneva, Switzerland",
    type: "work",
  },
  {
    year: "2022 - 2023",
    title: "IT Assistant",
    company: "Webster University Geneva",
    description:
      "Maintained networks, hardware, and provided tech support. Improved infrastructure under time-sensitive conditions. Solved complex problems with a results-driven approach. Earned a promotion through commitment and continuous learning.",
    location: "Geneva, Switzerland",
    type: "work",
  },
  {
    year: "2021 - 2024",
    title: "Bachelor of Computer Science and Cybersecurity (Hons)",
    company: "Webster University Geneva",
    description:
      "GPA: 3.8/4.0. Specialized in network security, Linux systems, and cloud security. Conducted thesis on quantum computing's impact on RSA encryption (with distinction).",
    location: "Geneva, Switzerland",
    type: "education",
  },
]

// Certifications data
const certifications = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "In progress", icon: Radar},
  { name: "Google Cybersecurity Professional", issuer: "Google", year: "In progress", icon: FileLock },
]

// Publications data
const publications = [
  {
    title: "Impact of Quantum Computing on Encryption",
    publisher: "Joel Gilpin",
    year: "2024",
    link: "/The Impact of Quantum Computing on Encryption 9 May - Final.pdf",
  },
  {
    title: "vulnerability testing on Windows with a Flipper Zero",
    publisher: "Joel Gilpin",
    year: "2024",
    link: "/Cybersecurity_Capstone_4510.pdf",
  },
  
]

export default function About() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <main className="container min-h-screen pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-green-400 font-mono">
          <GlitchText text="About Me" />
        </h1>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-1"
          >
            <Card className="bg-black/50 border-green-900/50 overflow-hidden h-full">
              <div className="relative">
                <div className="w-full h-40 bg-gradient-to-r from-green-900/50 to-blue-900/50"></div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-28 h-32 rounded-full bg-black/70 border-4 border-green-500/50 flex items-center justify-center overflow-hidden">
                    <img
                      src="/joel photo.jpg?height=128&width=128"
                      alt="Joel Gilpin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <CardContent className="pt-20 pb-6 text-center">
                <h2 className="text-2xl font-bold text-green-400 mb-1">Joel Gilpin</h2>
                <p className="text-gray-400 mb-4">Cybersecurity Expert & Ethical Hacker</p>

                <div className="flex justify-center space-x-2 mb-6">
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    <Shield className="w-3 h-3 mr-1" /> Security
                  </Badge>
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    <Code className="w-3 h-3 mr-1" /> Developer
                  </Badge>
                </div>

                <div className="space-y-2 text-left">
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-green-400" /> Europe
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Briefcase className="w-4 h-4 mr-2 text-green-400" /> Available for consulting
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Clock className="w-4 h-4 mr-2 text-green-400" /> 2.5 years experience
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-2"
          >
            <Card className="bg-black/50 border-green-900/50 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-400">
                  <User className="w-5 h-5" />
                  Professional Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
               I am a Junior Cybersecurity Specialist with a Bachelor's degree in Computer Science and Cybersecurity 
               (Hons), now pursuing a Masters in cybersecurity. With hands-on experience in IT administration, network security, and cloud technologies, 
               I have successfully automated system patches, implemented scalable and secure IT solutions. 
               My work spans configuring and troubleshooting network equipment, ensuring infrastructure resilience.
             </p>
            <p className="leading-relaxed">
              My experiance and interests includes penetration testing, malware analysis, and system hardening. I have secured networks using VLANs, 
              DNS protection, and automated backups, leveraging tools like Nessus, Wireshark, Nmap, and Burp Suite. Additionally, I have 
              extensive experience with Linux and programming in Python, C++, and Bash, allowing me to develop robust security solutions 
              and automation scripts that enhance system efficiency.
            </p>
           <p className="leading-relaxed">
            My current foucs is AI-driven cybersecurity solutions, developing an AI-powered malware detection tool was one of my favorite projects 
            and I'm continuing to develop and AI systems that improve system security.
           </p>

                <div className="pt-4">
                  <h3 className="text-green-400 font-semibold mb-2">Areas of Expertise:</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Penetration Testing",
                      "Vulnerability Assessment",
                      "Threat Modeling",
                      "Security Architecture",
                      "Automated analysis",
                      "Cloud Security",
                      "Network Security",
                    ].map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-green-900/30 hover:bg-green-900/50 text-green-400 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-black/50 border border-green-900/50">
              <TabsTrigger
                value="timeline"
                className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400"
              >
                <Clock className="w-4 h-4 mr-2" /> Timeline
              </TabsTrigger>
              <TabsTrigger
                value="certifications"
                className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400"
              >
                <Award className="w-4 h-4 mr-2" /> Certifications
              </TabsTrigger>
              <TabsTrigger
                value="research"
                className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400"
              >
                <BookOpen className="w-4 h-4 mr-2" /> Research
              </TabsTrigger>
            </TabsList>

            <TabsContent value="timeline" className="mt-0">
              <div className="relative border-l-2 border-green-900/50 pl-8 ml-4 space-y-10">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(`timeline-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div
                      className={`absolute -left-[42px] w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredItem === `timeline-${index}`
                          ? "bg-green-500 scale-110"
                          : item.type === "work"
                            ? "bg-green-900/50"
                            : "bg-blue-900/50"
                      }`}
                    >
                      {item.type === "work" ? (
                        <Briefcase className="w-4 h-4 text-white" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-white" />
                      )}
                    </div>

                    <div
                      className={`absolute -left-[50px] w-4 h-4 rounded-full transition-all duration-300 ${
                        hoveredItem === `timeline-${index}` ? "bg-green-400 animate-pulse-glow" : "bg-transparent"
                      }`}
                    ></div>

                    <div
                      className={`transition-all duration-300 ${
                        hoveredItem === `timeline-${index}` ? "transform translate-x-2" : ""
                      }`}
                    >
                      <div className="flex items-center mb-1">
                        <Badge variant="outline" className="border-green-500 text-green-400 mr-2">
                          <Calendar className="w-3 h-3 mr-1" /> {item.year}
                        </Badge>
                        <Badge variant="outline" className="border-green-500 text-green-400">
                          <MapPin className="w-3 h-3 mr-1" /> {item.location}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-green-400">{item.title}</h3>
                      <p className="text-gray-400 mb-2">{item.company}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-black/50 border border-green-900/50 rounded-lg p-4 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
                  >
                    <div className="flex items-start">
                      <div className="bg-green-900/30 p-3 rounded-lg mr-4">
                        <cert.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-400">{cert.name}</h3>
                        <p className="text-gray-400 text-sm">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="research" className="mt-0">
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {publications.map((pub, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.03 }}
                      className="bg-black/50 border border-green-900/50 rounded-lg p-5 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10"
                    >
                      <h3 className="text-lg font-semibold text-green-400 mb-2">{pub.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">
                        {pub.publisher} • {pub.year}
                      </p>
                      <Link
                        href={pub.link}
                        className="inline-flex items-center text-sm text-green-400 hover:text-green-300 transition-colors duration-300"
                      >
                        Read Publication <ExternalLink className="w-3 h-3 ml-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-green-400 mb-4">Research Interests</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="bg-black/50 border border-green-900/50 rounded-lg p-4"
                    >
                      <h4 className="flex items-center text-green-400 font-semibold mb-2">
                        <Shield className="w-4 h-4 mr-2" /> Current Focus
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          Zero-day vulnerability research in critical infrastructure
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          Machine learning applications in threat detection and prevention
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          Quantum computing implications for cryptography
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="bg-black/50 border border-green-900/50 rounded-lg p-4"
                    >
                      <h4 className="flex items-center text-green-400 font-semibold mb-2">
                        <BookOpen className="w-4 h-4 mr-2" /> Future Directions
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          Blockchain security and smart contract vulnerabilities
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          IoT security frameworks for smart cities
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          AI-powered autonomous security systems
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </main>
  )
}

