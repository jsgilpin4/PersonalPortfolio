"use client"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Shield,
  Terminal,
  Code,
  Cloud,
  Database,
  Server,
  Lock,
  Globe,
  Cpu,
  Layers,
  GitBranch,
  Zap,
  FileCode,
  Network,
  HardDrive,
  Wifi,
  Key,
  FileSearch,
  AlertTriangle,
  BarChart,
  Search,
  Fingerprint,
  ShieldAlert,
  Webhook,
  Braces,
  Hash,
} from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { useState } from "react"

const skills = [
  {
    category: "Penetration Testing",
    icon: Terminal,
    skills: [
      { name: "Network Penetration", level: 95 },
      { name: "Web Application Security", level: 90 },
      { name: "Mobile App Security", level: 85 },
      { name: "IoT Security", level: 80 },
    ],
  },
  {
    category: "Security Tools",
    icon: Shield,
    skills: [
      { name: "Metasploit", level: 95 },
      { name: "Wireshark", level: 90 },
      { name: "Burp Suite", level: 92 },
      { name: "Nmap", level: 88 },
    ],
  },
  {
    category: "Programming",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "Shell Scripting", level: 85 },
      { name: "C/C++", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    category: "Infrastructure",
    icon: Cloud,
    skills: [
      { name: "Cloud Security", level: 88 },
      { name: "Docker Security", level: 85 },
      { name: "Kubernetes Security", level: 82 },
      { name: "CI/CD Security", level: 80 },
    ],
  },
]

// Technology categories with icons
const technologyCategories = [
  {
    name: "Programming Languages",
    technologies: [
      { name: "Python", icon: <FileCode className="w-4 h-4" /> },
      { name: "JavaScript", icon: <Braces className="w-4 h-4" /> },
      { name: "C++", icon: <Code className="w-4 h-4" /> },
      { name: "Bash", icon: <Terminal className="w-4 h-4" /> },
      { name: "SQL", icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    name: "Infrastructure",
    technologies: [
      { name: "Docker", icon: <Layers className="w-4 h-4" /> },
      { name: "Kubernetes", icon: <Cloud className="w-4 h-4" /> },
      { name: "AWS", icon: <Server className="w-4 h-4" /> },
      { name: "Azure", icon: <Cloud className="w-4 h-4" /> },
      { name: "GCP", icon: <Cloud className="w-4 h-4" /> },
      { name: "Linux", icon: <Terminal className="w-4 h-4" /> },
      { name: "Windows", icon: <Layers className="w-4 h-4" /> },
    ],
  },
  {
    name: "Security Tools",
    technologies: [
      { name: "Kali Linux", icon: <Shield className="w-4 h-4" /> },
      { name: "Metasploit", icon: <AlertTriangle className="w-4 h-4" /> },
      { name: "Nmap", icon: <Search className="w-4 h-4" /> },
      { name: "Wireshark", icon: <Network className="w-4 h-4" /> },
      { name: "Burp Suite", icon: <ShieldAlert className="w-4 h-4" /> },
      { name: "OWASP ZAP", icon: <Zap className="w-4 h-4" /> },
    ],
  },
  {
    name: "Development",
    technologies: [
      { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
      { name: "CI/CD", icon: <Webhook className="w-4 h-4" /> },
      { name: "Machine Learning", icon: <BarChart className="w-4 h-4" /> },
    ],
  },
  {
    name: "Security Domains",
    technologies: [
      { name: "Blockchain", icon: <Hash className="w-4 h-4" /> },
      { name: "IoT", icon: <Cpu className="w-4 h-4" /> },
      { name: "5G Security", icon: <Wifi className="w-4 h-4" /> },
      { name: "SIEM", icon: <HardDrive className="w-4 h-4" /> },
      { name: "IDS/IPS", icon: <Shield className="w-4 h-4" /> },
      { name: "Firewall", icon: <ShieldAlert className="w-4 h-4" /> },
      { name: "VPN", icon: <Globe className="w-4 h-4" /> },
      { name: "Encryption", icon: <Key className="w-4 h-4" /> },
      { name: "PKI", icon: <Lock className="w-4 h-4" /> },
      { name: "OSINT", icon: <Search className="w-4 h-4" /> },
      { name: "Reverse Engineering", icon: <FileSearch className="w-4 h-4" /> },
      { name: "Malware Analysis", icon: <FileCode className="w-4 h-4" /> },
      { name: "Forensics", icon: <Fingerprint className="w-4 h-4" /> },
    ],
  },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <main className="container min-h-screen pt-32 pb-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold mb-8 text-green-400 font-mono">
          <GlitchText text="Technical Skills" />
        </h1>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="transition-all duration-300"
            >
              <Card className="bg-black/50 border-green-900/50 overflow-hidden hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-400">
                    <category.icon className="w-5 h-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.1, duration: 0.3 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{skill.name}</span>
                        <span
                          className={`text-green-400 transition-all duration-300 ${
                            hoveredSkill === skill.name ? "scale-110" : ""
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress
                          value={skill.level}
                          className={`h-2 transition-all duration-300 ${
                            hoveredSkill === skill.name ? "bg-green-900/40" : "bg-green-900/20"
                          }`}
                        />
                        <div
                          className={`absolute top-0 left-0 h-2 bg-green-400 rounded-full transition-all duration-300 ${
                            hoveredSkill === skill.name ? "opacity-80" : "opacity-50"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-green-400">Technologies & Tools</h2>

            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === null
                    ? "bg-green-500 text-black"
                    : "bg-green-900/20 text-green-400 hover:bg-green-900/40"
                }`}
              >
                All
              </button>
              {technologyCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                    activeCategory === category.name
                      ? "bg-green-500 text-black"
                      : "bg-green-900/20 text-green-400 hover:bg-green-900/40"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="custom-scrollbar overflow-x-auto pb-4">
              <div className="flex gap-2 min-w-max">
                {technologyCategories
                  .filter((category) => activeCategory === null || category.name === activeCategory)
                  .flatMap((category) => category.technologies)
                  .map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.02, duration: 0.3 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(34, 197, 94, 0.2)",
                        boxShadow: "0 0 15px rgba(34, 197, 94, 0.3)",
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm bg-green-900/20 text-green-400 whitespace-nowrap transition-all duration-300 hover:bg-green-900/30"
                    >
                      {tech.icon}
                      {tech.name}
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}

