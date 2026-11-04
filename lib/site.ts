// Single source of truth for the site's copy. Edit text here, not in the pages.

export const profile = {
  name: "Joel Gilpin",
  initials: "JG",
  role: "Cybersecurity Specialist",
  location: "Brisbane, Australia",
  email: "joel.gilpin.4@gmail.com",
  photo: "/joel photo.jpg",
  summary:
    "Cybersecurity specialist focused on penetration testing, network security and AI-driven threat detection. Currently completing a Master of Science in Cybersecurity and Networks at QUT.",
  links: {
    github: "https://github.com/CrypticCyclone",
    linkedin: "https://www.linkedin.com/in/joelgilpin/",
  },
}

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export const bio = [
  "I'm a junior cybersecurity specialist with a Bachelor's in Computer Science and Cybersecurity (Hons), now pursuing a Master's in Cybersecurity. My background is in IT administration, network security and cloud technologies: automating patching, building secure and scalable infrastructure, and keeping networks resilient.",
  "My interests include penetration testing, malware analysis and system hardening. I've secured networks with VLANs, DNS protection and automated backups, and I work daily with Nessus, Wireshark, Nmap and Burp Suite. I write tooling and automation in Python, C++ and Bash.",
  "Right now I'm focused on AI-driven security: building models and tools that detect threats faster than people can.",
]

export const focusAreas = [
  "Penetration Testing",
  "Vulnerability Assessment",
  "Threat Modeling",
  "Security Architecture",
  "Cloud Security",
  "Network Security",
  "AI for Security",
]

export type TimelineItem = {
  period: string
  title: string
  org: string
  location: string
  type: "work" | "education"
  description?: string
}

export const timeline: TimelineItem[] = [
  {
    period: "2025 – 2027",
    title: "Master of Science in Cybersecurity and Networks",
    org: "Queensland University of Technology",
    location: "Brisbane, QLD",
    type: "education",
  },
  {
    period: "2023 – 2024",
    title: "IT Administrator",
    org: "Webster University Geneva",
    location: "Geneva, Switzerland",
    type: "work",
    description:
      "Secured networks with VLANs, DNS protection and automated backups. Automated routine work with Python and PowerShell. Led small teams to deliver projects on time, and monitored, patched and remediated vulnerabilities.",
  },
  {
    period: "2022 – 2023",
    title: "IT Assistant",
    org: "Webster University Geneva",
    location: "Geneva, Switzerland",
    type: "work",
    description:
      "Maintained networks and hardware and provided technical support under time pressure. Promoted to IT Administrator.",
  },
  {
    period: "2021 – 2024",
    title: "B.Sc. Computer Science and Cybersecurity (Hons)",
    org: "Webster University Geneva",
    location: "Geneva, Switzerland",
    type: "education",
    description:
      "GPA 3.8 / 4.0. Network security, Linux systems and cloud security. Thesis on quantum computing's impact on RSA encryption, awarded with distinction.",
  },
]

export const certifications = [
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", status: "In progress" },
  { name: "Google Cybersecurity Professional", issuer: "Google", status: "In progress" },
]

export const publications = [
  {
    title: "The Impact of Quantum Computing on Encryption",
    year: "2024",
    href: "/The Impact of Quantum Computing on Encryption 9 May - Final.pdf",
  },
  {
    title: "Vulnerability Testing on Windows with a Flipper Zero",
    year: "2024",
    href: "/Cybersecurity_Capstone_4510.pdf",
  },
]

export const skillGroups = [
  {
    name: "Offensive Security",
    items: ["Network Penetration Testing", "Web Application Security", "Mobile App Security", "IoT Security", "OSINT"],
  },
  {
    name: "Defensive Security",
    items: ["SIEM", "IDS / IPS", "Firewalls", "VPN", "PKI & Encryption", "Malware Analysis", "Forensics"],
  },
  {
    name: "Tools",
    items: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "Wireshark", "Nessus", "OWASP ZAP"],
  },
  {
    name: "Programming",
    items: ["Python", "Bash", "PowerShell", "C / C++", "JavaScript", "SQL"],
  },
  {
    name: "Infrastructure & Cloud",
    items: ["Linux", "Windows Server", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "CI/CD"],
  },
]
