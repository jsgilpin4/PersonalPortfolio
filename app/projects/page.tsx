"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Search, Star, Code, ChevronDown } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// All available tags for filtering
const allTags = [
  "Python",
  "Machine Learning",
  "Network Security",
  "Blockchain",
  "Powershell",
  "IoT"
]

const projects = [
  {
    
      title: "Linux Security Chatbot",
      description: "A Telegram chatbot powered by Llama 3.1 and LangChain RAG, providing Linux documentation and security tool usage guidance.",
      tags: ["Python", "LangChain", "RAG", "Llama 3.1", "ChromaDB"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "AI",
      techDetails: {
        backend: ["Python", "FastAPI", "LangChain"],
        LLM: ["Meta Llama 3.1", "Hugging Face Transformers"],
        database: ["ChromaDB", "FAISS"],
        chatbot: ["Telegram Bot API", "Telethon"],
        deployment: ["Docker", "AWS Lambda", "VPS"],
      },
      features: [
        "Retrieval-Augmented Generation (RAG) for accurate responses",
        "Queries Linux documentation and security tool guides",
        "Conversational memory for better user experience",
        "Fast search with ChromaDB for vectorized queries",
        "Customizable responses using LangChain agents",
      ],
      challenges: "Optimizing response time while ensuring accurate retrieval of security-related documentation.",
  
  },
  {
    title: "Facial Recognition with Raspberry Pi",
    description: "A facial recognition system built using a Raspberry Pi, OpenCV, and Python for security and access control applications.",
    tags: ["Python", "Raspberry Pi", "IoT"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "AI",
    techDetails: {
        backend: ["Python", "Flask"],
        libraries: ["OpenCV", "Dlib", "Face Recognition"],
        hardware: ["Raspberry Pi 4", "Camera Module"],
        deployment: ["Raspberry Pi OS"],
    },
    features: [
        "Real-time facial recognition using OpenCV and Dlib",
        "Secure access control with authenticated face recognition",
        "Ability to train on new faces and add to the database",
        "Alert system for unauthorized access attempts",
        "Low-latency image processing and recognition",
    ],
    challenges: "Handling lighting variations and optimizing the system for performance on a Raspberry Pi.",
  },
  {
    title: "Ducky Scripts for Malicious PowerShell Execution",
    description: "A series of Ducky Scripts designed to exploit vulnerabilities by executing PowerShell-based malware and payloads via USB Rubber Ducky.",
    tags: ["Malware", "Pentesting", "Powershell"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Powershell",
    techDetails: {
        scripting: ["Ducky Script", "Powershell"],
        tools: ["USB Rubber Ducky", "Kali Linux", "Metasploit"],
        deployment: ["Windows", "Linux"],
    },
    features: [
        "Automates execution of PowerShell scripts to gain unauthorized access",
        "Injects malicious payloads into target machines via USB Rubber Ducky",
        "Capable of bypassing security mechanisms like antivirus and UAC",
        "Exploits vulnerabilities to run reverse shells or download additional payloads",
        "Can be customized for various attack scenarios",
    ],
    challenges: "Ensuring stealthy execution and avoiding detection by antivirus or endpoint security software.",
  },
  {
    title: "Stock Market Web Scraper",
    description:
      "A web scraper that collects and analyzes stock market data from various financial websites, providing real-time insights and trends.",
    tags: ["Python", "Web Scraping", "Data Analysis"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "web",
    techDetails: {
      frontend: ["React", "Chart.js"],
      backend: ["Python", "Flask", "BeautifulSoup", "Scrapy"],
      database: ["PostgreSQL"],
      deployment: ["Docker", "Heroku"],
    },
    features: [
      "Real-time stock market data collection",
      "Data visualization with interactive charts",
      "Automated alerts for significant market changes",
      "Historical data analysis and trend prediction",
      "Integration with financial APIs for comprehensive insights",
    ],
    challenges:
      "Ensuring accurate and timely data collection while handling website changes and preventing IP bans.",
  },
  {
    title: "Social Media Automation",
    description: "A Python-based automation tool for managing and scheduling posts across multiple social media platforms.",
    tags: ["Python", "Automation", "Social Media", "APIs"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "automation",
    techDetails: {
      backend: ["Python", "Flask", "FastAPI"],
      automation: ["Selenium", "Playwright", "APScheduler"],
      APIs: ["Facebook Graph API", "Twitter API", "Instagram API"],
      deployment: ["Docker", "AWS Lambda", "Heroku"],
    },
    features: [
      "Automated post scheduling and content management",
      "Multi-platform integration (Twitter, Facebook, Instagram, LinkedIn)",
      "AI-powered hashtag and caption generation",
      "Analytics dashboard for engagement tracking",
      "User authentication and role-based access control",
    ],
    challenges: "Handling API rate limits and ensuring compliance with platform policies while automating interactions efficiently.",
  },
  {
    title: "CryptoGuard",
    description: "Blockchain security audit tool for smart contracts with automated vulnerability detection.",
    tags: ["Blockchain", "Web3", "Smart Contracts"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "security",
    techDetails: {
      frontend: ["React", "Ethers.js", "Web3.js"],
      backend: ["Node.js", "Hardhat", "Truffle"],
      testing: ["Mocha", "Chai", "Slither", "Mythril"],
      deployment: ["IPFS", "Ethereum Mainnet/Testnet"],
    },
    features: [
      "Static analysis of smart contract code for security vulnerabilities",
      "Dynamic testing through automated transaction simulation",
      "Gas optimization recommendations",
      "Token economics analysis and validation",
      "Formal verification of critical contract components",
    ],
    challenges:
      "Keeping up with rapidly evolving attack vectors in the blockchain space and supporting multiple blockchain platforms.",
  },
  {
    title: "AI-Powered Malware Detection",
    description:
      "Train a machine learning model to classify benign vs. malicious files. Implement an interactive web dashboard using React + Django.",
    tags: ["Python", "Machine Learning", "TensorFlow", "Network Security"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "security",
    techDetails: {
      frontend: ["React"],
      backend: ["Django"],
      machineLearning: ["scikit-learn", "TensorFlow", "PyTorch"],
    },
    features: [
      "Classify benign vs. malicious files using ML",
      "Interactive web dashboard for visualization",
    ],
    challenges: "Training accurate models and integrating them with the web dashboard.",
  },
  {
    title: "Honeypot System with Real-Time Dashboard",
    description:
      "Deploy a honeypot server that logs attacks and shows data in a React dashboard with D3.js for visualizations.",
    tags: ["Python", "Security", "Honeypot", "Network Security",],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "security",
    techDetails: {
      frontend: ["React", "D3.js"],
      backend: ["Python"],
      deployment: ["Docker"],
    },
    features: [
      "Logs attacks on honeypot server",
      "Real-time data visualization",
    ],
    challenges: "Ensuring accurate logging and real-time data updates.",
  },
  {
    title: "Malware Analysis Sandbox",
    description:
      "Create a Dockerized malware analysis lab that runs suspicious files in an isolated VM and uses Suricata IDS + YARA rules for detection.",
    tags: ["Docker", "Suricata", "ELK Stack", "Python", "Security"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "security",
    techDetails: {
      containerization: ["Docker"],
      detection: ["Suricata", "YARA"],
      logging: ["ELK Stack"],
    },
    features: [
      "Isolated VM for running suspicious files",
      "Detection using Suricata IDS and YARA rules",
      "Automated logging with ELK Stack",
    ],
    challenges: "Maintaining isolation and accurate detection.",
  },
  {
    title: "PowerShell Wake on LAN for Active Directory",
    description:
      "Automate updating computers via network using PowerShell Wake on LAN for Active Directory.",
    tags: ["PowerShell", "Active Directory", "Automation", "Network"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "automation",
    techDetails: {
      scripting: ["PowerShell"],
      directoryServices: ["Active Directory"],
    },
    features: [
      "Automate computer updates via network",
      "Use PowerShell Wake on LAN",
    ],
    challenges: "Ensuring reliable network communication and updates.",
  },
]

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  // Filter projects based on search term, selected tags, and active category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      searchTerm === "" ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => project.tags.includes(tag))

    const matchesCategory = activeCategory === "all" || project.category === activeCategory

    return matchesSearch && matchesTags && matchesCategory
  })

  // Get featured projects
  const featuredProjects = projects.filter((project) => project.featured)

  // Handle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTags([])
    setActiveCategory("all")
  }

  return (
    <main className="container min-h-screen pt-32 pb-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold mb-8 text-green-400 font-mono">
          <GlitchText text="Projects" />
        </h1>

        {/* Featured Project Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-400" /> Featured Project
            </h2>
            <motion.div
              className="grid gap-8 md:grid-cols-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg border border-green-900/50 bg-black/50 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="p-6">
                    <div>
                      <h3 className="text-xl font-bold text-green-400 mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="border-green-500 text-green-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Collapsible className="w-full">
                        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-3 mt-2 text-sm font-medium text-green-400 hover:text-green-300 bg-green-900/20 rounded-md hover:bg-green-900/30 transition-colors">
                          <span>View Technical Details</span>
                          <ChevronDown className="h-4 w-4 transition-transform duration-300 ui-open:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-4 space-y-6">
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium text-green-400 mb-2">Technologies Used</h4>
                              <div className="grid grid-cols-2 gap-4">
                                {project.techDetails &&
                                  Object.entries(project.techDetails).map(([category, techs]) => (
                                    <div key={category} className="space-y-1">
                                      <h5 className="text-xs font-semibold text-green-300 capitalize">{category}:</h5>
                                      <ul className="text-xs text-gray-300 list-disc list-inside">
                                        {Array.isArray(techs) ? techs.map((tech, i) => <li key={i}>{tech}</li>) : null}
                                      </ul>
                                    </div>
                                  ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium text-green-400 mb-2">Key Features</h4>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                                {project.features &&
                                  project.features.map((feature, i) => (
                                    <li key={i} className="leading-tight">
                                      {feature}
                                    </li>
                                  ))}
                              </ul>
                            </div>

                            {project.challenges && (
                              <div>
                                <h4 className="text-sm font-medium text-green-400 mb-2">Technical Challenges</h4>
                                <p className="text-sm text-gray-300 italic">{project.challenges}</p>
                              </div>
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Project Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-wrap gap-2 items-center">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className={activeCategory === "all" ? "bg-green-500 text-black" : "border-green-500 text-green-400"}
              size="sm"
            >
              All Projects
            </Button>
            <Button
              variant={activeCategory === "security" ? "default" : "outline"}
              onClick={() => setActiveCategory("security")}
              className={activeCategory === "security" ? "bg-green-500 text-black" : "border-green-500 text-green-400"}
              size="sm"
            >
              Security Projects
            </Button>
            <Button
              variant={activeCategory === "web" ? "default" : "outline"}
              onClick={() => setActiveCategory("web")}
              className={activeCategory === "web" ? "bg-green-500 text-black" : "border-green-500 text-green-400"}
              size="sm"
            >
              Web Projects
            </Button>
            {(selectedTags.length > 0 || searchTerm || activeCategory !== "all") && (
              <Button variant="ghost" onClick={clearFilters} className="text-green-400 hover:text-green-500" size="sm">
                Clear Filters
              </Button>
            )}
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="Search projects by title, description or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-black/50 border-green-900/50 text-green-400"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 w-4 h-4" />
          </div>

          <div>
            <h3 className="text-sm text-green-400 mb-2">Filter by tags:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag, index) => (
                <Badge
                  key={index}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedTags.includes(tag)
                      ? "bg-green-500 text-black hover:bg-green-600"
                      : "border-green-500 text-green-400 hover:bg-green-500/10"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Project Results */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            {activeCategory === "all"
              ? "All Projects"
              : activeCategory === "security"
                ? "Security Projects"
                : "Web Projects"}
            <span className="text-sm ml-2 text-gray-400">({filteredProjects.length} projects)</span>
          </h2>
        </div>

        <AnimatePresence>
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl text-green-400 mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filters</p>
            </motion.div>
          ) : (
            <motion.div className="grid gap-8 md:grid-cols-2" layout>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  layout
                >
                  <Card
                    className={`bg-black/50 border-green-900/50 transition-all duration-300 ${
                      hoveredProject === project.title ? "border-green-400 shadow-lg shadow-green-500/20" : ""
                    }`}
                    onMouseEnter={() => setHoveredProject(project.title)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-400">
                        <Shield
                          className={`w-5 h-5 text-green-400 transition-transform duration-300 ${
                            hoveredProject === project.title ? "scale-110" : ""
                          }`}
                        />
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-300">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className={`border-green-500 text-green-400 transition-colors duration-300 ${
                              hoveredProject === project.title ? "border-green-400 bg-green-900/20" : ""
                            }`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Collapsible className="w-full">
                        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-3 mt-2 text-sm font-medium text-green-400 hover:text-green-300 bg-green-900/20 rounded-md hover:bg-green-900/30 transition-colors">
                          <span>View Technical Details</span>
                          <ChevronDown className="h-4 w-4 transition-transform duration-300 ui-open:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-4 space-y-4">
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-sm font-medium text-green-400 mb-2">Technologies Used</h4>
                              <div className="grid grid-cols-1 gap-2">
                                {project.techDetails &&
                                  Object.entries(project.techDetails).map(([category, techs]) => (
                                    <div key={category} className="space-y-1">
                                      <h5 className="text-xs font-semibold text-green-300 capitalize">{category}:</h5>
                                      <ul className="text-xs text-gray-300 list-disc list-inside">
                                        {Array.isArray(techs) ? techs.map((tech, i) => <li key={i}>{tech}</li>) : null}
                                      </ul>
                                    </div>
                                  ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium text-green-400 mb-2">Key Features</h4>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                {project.features &&
                                  project.features.map((feature, i) => (
                                    <li key={i} className="leading-tight">
                                      {feature}
                                    </li>
                                  ))}
                              </ul>
                            </div>

                            {project.challenges && (
                              <div>
                                <h4 className="text-sm font-medium text-green-400 mb-2">Technical Challenges</h4>
                                <p className="text-sm text-gray-300 italic">{project.challenges}</p>
                              </div>
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}

