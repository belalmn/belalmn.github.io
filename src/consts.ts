export const PROFILE = {
  name: "Belal Mohammed-Nur",
  shortName: "Belal",
  tagline: [
    "NDS Computer Science @ UBC",
    "BS Information Systems @ CMU '24",
    "Vancouver, Canada",
  ],
};

export const LINKS = {
  home: { label: "Home", href: "/" },
  blog: { label: "Blog", href: "/blog" },
//   projects: { label: "Projects", href: "/projects" },
//   resume: { label: "Resume", href: "/resume.pdf" },
  email: { label: "Email", href: "mailto:belal.mnur@gmail.com" },
  github: { label: "GitHub", href: "https://github.com/belalmn" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/belalm/" },
};

export const EXPERIENCES = [
  {
    title: "Research Collaborator",
    org: "UBC CS Computer Vision Lab (Supervised by Prof. Leonid Sigal)",
    orgUrl: "https://www.cs.ubc.ca/~lsigal/",
    when: "Jan '26 – Present",
    details:
      "Collaborating with the UBC Computer Vision Lab to explore self-supervised representation learning for vision, focusing on the JEPA family of architectures. Investigating novel pre-training strategies and their impact on downstream tasks, contributing to both theoretical insights and practical implementations.",
  },
  {
    title: "Research Volunteer",
    org: "UBC Addictions & Concurrent Disorders Lab",
    orgUrl: "https://acdresearch.med.ubc.ca/",
    when: "Jul '25 – Present",
    details:
      "Conducting statistical and data-driven analyses on trauma and Adverse Childhood Experiences (ACE) in relation to addiction and mental-health outcomes, including data preprocessing, regression analyses, and research-oriented visualizations for interdisciplinary collaborators.",
  },
  {
    title: "Data Science Intern",
    org: "Qatar Islamic Bank",
    orgUrl: "https://www.qib.com.qa/",
    when: "Jun '24 – Sep '24",
    details:
      "Built a Python-based ETL pipeline to ingest and structure large-scale archived email data, enabling downstream analytics for operations teams. Applied NLP and LLM-based methods to classify unstructured text, extract themes, and evaluate the practical trade-offs between modern LLM approaches and traditional techniques in a financial-services setting.",
  },
  {
    title: "Software Engineering Intern",
    org: "Qatar Science & Technology Park",
    orgUrl: "https://qstp.org.qa/",
    when: "Jun '24 – Aug '24",
    details:
      "Explored multi-agent LLM systems for enterprise applications, prototyping agentic workflows using Microsoft Autogen and LangChain. Developed and evaluated a proof-of-concept SEO content generation system, contributing technical feedback that informed product direction toward more robust, configurable AI pipelines.",
  },
];

export const TEACHING_SERVICE = [
  {
    title: "Vice President Academic",
    org: "UBC CSSS – Computer Science Student Society",
    orgUrl: "https://ubccsss.org/",
    when: "May '26 – Present",
    details:
      "Overseeing academic initiatives and student support programs for the UBC Computer Science Student Society, including curriculum feedback, academic workshops, and mentorship programs. Collaborating with faculty and student groups to enhance the academic experience for undergraduate and graduate students in the computer science department.",
  },
  {
    title: "Conference Chair",
    org: "UBC CSSS – Computer Science Student Society",
    orgUrl: "https://ubccsss.org/",
    when: "Aug '25 – Apr '26",
    details:
      "Leading planning and execution of the inaugural UBC Computer Science Student Research Conference, coordinating logistics, programming, and stakeholder engagement to create a platform showcasing undergraduate and graduate research.",
  },
  {
    title: "Undergraduate Teaching Assistant",
    org: "Carnegie Mellon University Qatar",
    orgUrl: "https://www.qatar.cmu.edu/",
    when: "2020 – 2024",
    details: [
      // "Supported instruction across multiple computer science and information systems courses, mentoring students in programming, data science, and software development. Contributed to course delivery through lab support, assignment development, and one-on-one academic mentorship.",
      // "",
      // "Courses Assisted:",
      "67-272: Application Design and Development (S24)",
      "67-364: Practical Data Science (F23)",
      "15-110: Principles of Computing (F21, F23)",
      "67-250: Information Systems Millieux (S22)",
      "15-112: Fundamentals of Programming and CS (S22)",
    ],
  },
];

export const EDUCATION = [
  {
    title: "Non-Degree Coursework (CS)",
    org: "University of British Columbia",
    orgUrl: "https://www.ubc.ca/",
    when: "2024 – Present",
    details: [
      "Notable Coursework:",
      "CPSC 532B: NLP Open Questions",
      "CPSC 440: Advanced Machine Learning",
      "CPSC 425: Computer Vision",
      "CPSC 406: Computational Optimization",
      "CPSC 340: Machine Learning and Data Mining",
    ]
  },
  {
    title: "B.S. Information Systems",
    org: "Carnegie Mellon University",
    orgUrl: "https://www.cmu.edu/",
    when: "2020 – 2024",
    details: [
      "Notable Coursework:",
      "11-485: Introduction to Deep Learning",
      "67-364: Practical Data Science",
      "67-443: Mobile Application Development",
      "17-313: Foundations of Software Engineering"
    ]
  },
];
