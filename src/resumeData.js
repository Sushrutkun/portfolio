export const resumeData = {
  name: "Sushrut Athawale",
  email: "sushrutathawale1509@gmail.com",
  phone: "+91-9623479393",
  location: "Nagpur, India",

  social: {
    linkedin: "https://www.linkedin.com/in/sushrut-athawale-89bb411bb/",
    github: "https://github.com/Sushrutkun",
    leetcode: "https://leetcode.com/sushrutathawale1509/",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/sushrutathawale1509/",
    codingninjas: "https://www.codingninjas.com/studio/profile/7ecca849-e15b-41eb-80c8-180105dd533b",
    codechef: "https://www.codechef.com/users/sushrut_123",
  },

  summary: "Reliability-focused Backend Engineer with 2+ years designing fault-tolerant distributed systems handling 76M+ daily communications with 99.9% uptime SLA. Architected multi-tenant CRM platform processing 400K RPM, reducing operational costs by INR 40-60L/month through optimized event sourcing and state management. Expert in building resilient infrastructure with Apache Kafka, RocksDB, circuit breakers, and failover strategies. Proficient in Java, GoLang, Spring Boot, PostgreSQL, MySQL, Redis, Kubernetes, Prometheus, and Grafana. Strong track record documenting architecture decisions and managing cross-functional incident response. Solved 800+ DSA problems with 5-star badges (LeetCode/CodeChef); completed UIUC CS Fundamentals and Imperial College Math for ML.",

  roles: [
    "Backend Engineer",
    "Distributed Systems Architect",
    "Full-Stack Developer",
    "Systems Reliability Engineer",
  ],

  experience: [
    {
      position: "Software Development Engineer 1 (SDE 1)",
      company: "Groww -- Engagement & Communications Platform",
      location: "Bengaluru, India",
      startDate: "July 2024",
      endDate: "Present",
      highlights: [
        "Architected CRM platform serving 10+ tenant applications using Java, Spring Boot, Scala, Spark, processing 76M+ daily events with Kafka-based event sourcing and RocksDB for local state, reducing operational costs by INR 40-60L/month.",
        "Owned scalable journey analytics platform using Apache Spark, enabling real-time marketing segmentation across 100+ campaigns; optimized query performance, reducing p95 latency by 33% and improving end-user experience for marketing teams.",
        "Engineered real-time financial streaming pipelines for F&O data using Kafka and Spark across 5,000+ instruments; achieved sub-100ms end-to-end latency, partnering with trading teams to ensure reliable data feeds for 16M+ daily downstream communications.",
        "Drove WhatsApp vendor integration and messaging microservices handling 400K RPM; implemented circuit breaker patterns and failover strategies, maintaining 99.9% SLA across 0.56M+ messages/day and led incident response reviews to improve reliability.",
        "Spearheaded zero-downtime service migrations across clusters — designed dual-write strategy leveraging read replicas, paused writes for only 5-7 minutes, and led cross-functional team to recreate data pipelines.",
        "Designed multi-tenant microservices architecture enforcing strict resource isolation and failover mechanisms across 4 applications; documented incident response runbooks and operational procedures.",
        "Led CI/CD infrastructure migration to Argo CD and Kubernetes, automating deployment workflows across 8+ services; instrumented critical services with Prometheus and Grafana, reducing MTTD by 30%.",
      ],
    },
    {
      position: "Software Development Engineer Intern",
      company: "Groww -- Engagement & Communications Platform",
      location: "Bengaluru, India",
      startDate: "January 2024",
      endDate: "June 2024",
      highlights: [
        "Designed MessageBoard service with tenant-aware routing and failover logic, maintaining SLA compliance; validated system resilience under production load and documented runbooks.",
        "Implemented resilience patterns with exponential backoff for CDP API calls, achieving sub-second failover during vendor outages; reduced cascading failure incidents by 100%.",
      ],
    },
  ],

  education: [
    {
      school: "Indian Institute of Information Technology, Nagpur",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      cgpa: "8.44/10",
      startDate: "November 2020",
      endDate: "July 2024",
      location: "Nagpur, India",
    },
  ],

  projects: [
    {
      name: "Cash-flow Management Application",
      technologies: ["Node.js", "Express", "React", "MongoDB", "JWT"],
      description: "Built full-stack financial management tool using MERN stack; implemented secure JWT authentication and optimized MongoDB aggregation pipelines for complex data queries, demonstrating end-to-end system design.",
      github: "https://github.com/Sushrutkun/Cash-Flow",
      live: "https://cash-floww.vercel.app/",
    },
  ],

  skills: {
    languages: ["Java", "GoLang", "Python", "Scala", "SQL"],
    databases: ["PostgreSQL", "MySQL", "Redis", "RocksDB", "MongoDB"],
    streaming: ["Apache Kafka", "Apache Spark"],
    infrastructure: ["Kubernetes", "Docker", "Argo CD", "Prometheus", "Grafana", "Monitoring", "High Availability"],
    patterns: ["Distributed Systems", "Microservices", "Event Sourcing", "Circuit Breaker", "Failover Strategies"],
  },

  achievements: [
    "Solved 800+ DSA problems with 5-star badges on LeetCode and CodeChef",
    "Completed UIUC CS Fundamentals course",
    "Completed Imperial College Math for ML course",
    "Designed systems handling 76M+ daily communications",
    "Optimized services to handle 400K requests per minute",
    "Reduced operational costs by INR 40-60L/month",
    "Maintained 99.9% uptime SLA for critical services",
    "Led zero-downtime service migrations with minimal write pauses",
  ],
};
