import mongoose from "mongoose";
import dotenv from "dotenv";

import Career from "./src/models/Career.js";
import DocResource from "./src/models/DocResource.js";
import LinkResource from "./src/models/LinkResource.js";
import NewsResource from "./src/models/NewsResource.js";
import VideoResource from "./src/models/VideoResource.js";
import Roadmap from "./src/models/Roadmap.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file");
  process.exit(1);
}

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");

    // 1) CLEAR OLD DATA
    console.log("\n🧹 Clearing old data...");

    await Career.deleteMany({});
    await DocResource.deleteMany({});
    await LinkResource.deleteMany({});
    await NewsResource.deleteMany({});
    await VideoResource.deleteMany({});
    await Roadmap.deleteMany({});

    console.log("✅ Old data cleared");

    // 2) INSERT CAREERS
    console.log("\n🌱 Inserting Careers...");
    const careers = await Career.insertMany([
      {
        title: "Frontend Developer",
        description:
          "Build user interfaces & websites using HTML, CSS, JavaScript and frameworks like React.",
        tags: ["frontend", "web", "react"],
      },
      {
        title: "Backend Developer",
        description:
          "Build APIs, databases, authentication, and server-side logic using Node.js, Express, and databases.",
        tags: ["backend", "nodejs", "api"],
      },
      {
        title: "Full Stack Developer",
        description:
          "Build complete applications from frontend to backend using MERN stack and deployment skills.",
        tags: ["fullstack", "mern", "web"],
      },
      {
        title: "DevOps Engineer",
        description:
          "Automate deployment pipelines, manage Kubernetes, CI/CD, monitoring, and cloud systems.",
        tags: ["devops", "kubernetes", "docker", "cicd"],
      },
      {
        title: "AI/ML Engineer",
        description:
          "Build machine learning models, train systems, deploy ML APIs, and work with real-world datasets.",
        tags: ["ai", "ml", "python", "datascience"],
      },
      {
        title: "Cybersecurity Engineer",
        description:
          "Work on security, pentesting, secure systems, threat monitoring, and vulnerability management.",
        tags: ["security", "cybersecurity", "networking"],
      },
      {
        title: "Cloud Engineer",
        description:
          "Build cloud infrastructure, deploy apps, manage IAM, storage, compute, and networking.",
        tags: ["cloud", "aws", "azure", "gcp"],
      },
      {
        title: "Data Analyst",
        description:
          "Analyze data using SQL, Excel, Python, dashboards, and generate business insights.",
        tags: ["data", "sql", "excel", "analytics"],
      },
    ]);
    console.log(`✅ Careers Inserted: ${careers.length}`);

    // 3) INSERT DOC RESOURCES (25+)
    console.log("\n📚 Inserting Docs...");
    const docs = await DocResource.insertMany([
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/en-US/",
        description:
          "Most trusted official docs for HTML, CSS, JavaScript, and Web APIs.",
        tags: ["html", "css", "javascript", "web"],
      },
      {
        title: "JavaScript Guide (MDN)",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        description:
          "The best structured guide to learn JavaScript fundamentals and concepts.",
        tags: ["javascript", "web"],
      },
      {
        title: "React Official Documentation",
        url: "https://react.dev/learn",
        description:
          "Official React learning docs, components, hooks, and best practices.",
        tags: ["react", "frontend"],
      },
      {
        title: "Node.js Official Docs",
        url: "https://nodejs.org/en/docs",
        description:
          "Official Node.js documentation for runtime, APIs, and guides.",
        tags: ["nodejs", "backend"],
      },
      {
        title: "Express.js Official Docs",
        url: "https://expressjs.com/",
        description:
          "Official Express documentation for building APIs and backend apps.",
        tags: ["express", "backend", "nodejs"],
      },
      {
        title: "MongoDB Official Documentation",
        url: "https://www.mongodb.com/docs/",
        description:
          "Official MongoDB docs for database operations, indexing, aggregation, and more.",
        tags: ["mongodb", "database"],
      },
      {
        title: "Mongoose Official Documentation",
        url: "https://mongoosejs.com/docs/",
        description:
          "Official Mongoose docs for MongoDB schema modeling in Node.js.",
        tags: ["mongoose", "mongodb", "backend"],
      },
      {
        title: "Kubernetes Official Docs",
        url: "https://kubernetes.io/docs/home/",
        description:
          "Official Kubernetes documentation for cluster concepts, workloads, and deployments.",
        tags: ["kubernetes", "devops"],
      },
      {
        title: "Docker Official Docs",
        url: "https://docs.docker.com/",
        description:
          "Official Docker documentation for containers, images, volumes, and networking.",
        tags: ["docker", "devops"],
      },
      {
        title: "roadmap.sh",
        url: "https://roadmap.sh/",
        description:
          "Best free structured roadmaps for Frontend, Backend, DevOps, Full Stack, and more.",
        tags: ["roadmap", "career"],
      },

      // Extra docs
      {
        title: "TypeScript Handbook",
        url: "https://www.typescriptlang.org/docs/handbook/intro.html",
        description:
          "Official TypeScript guide covering types, interfaces, generics, and advanced patterns.",
        tags: ["typescript", "frontend", "backend"],
      },
      {
        title: "Next.js Docs",
        url: "https://nextjs.org/docs",
        description:
          "Official Next.js documentation for building full-stack React apps.",
        tags: ["nextjs", "react", "fullstack"],
      },
      {
        title: "Tailwind CSS Docs",
        url: "https://tailwindcss.com/docs",
        description:
          "Official Tailwind documentation for utility-first styling and design systems.",
        tags: ["tailwind", "css", "frontend"],
      },
      {
        title: "Vite Docs",
        url: "https://vitejs.dev/guide/",
        description:
          "Official Vite docs for fast frontend builds and modern tooling.",
        tags: ["vite", "frontend", "tooling"],
      },
      {
        title: "PostgreSQL Docs",
        url: "https://www.postgresql.org/docs/",
        description:
          "Official PostgreSQL documentation for SQL, indexes, performance, and administration.",
        tags: ["postgresql", "database", "backend"],
      },
      {
        title: "Redis Docs",
        url: "https://redis.io/docs/latest/",
        description:
          "Official Redis docs for caching, pub/sub, streams, and performance tuning.",
        tags: ["redis", "database", "backend"],
      },
      {
        title: "JWT.io Introduction",
        url: "https://jwt.io/introduction",
        description:
          "Learn how JSON Web Tokens work for authentication and authorization.",
        tags: ["jwt", "auth", "security"],
      },
      {
        title: "OWASP Top 10",
        url: "https://owasp.org/www-project-top-ten/",
        description:
          "The most important web security risks and how to protect your applications.",
        tags: ["security", "owasp", "backend"],
      },
      {
        title: "Git Documentation",
        url: "https://git-scm.com/doc",
        description:
          "Official Git documentation for version control, branching, and workflows.",
        tags: ["git", "devops", "tools"],
      },
      {
        title: "GitHub Docs",
        url: "https://docs.github.com/",
        description:
          "GitHub documentation for repos, actions, security, and collaboration.",
        tags: ["github", "git", "devops"],
      },
      {
        title: "Linux Documentation Project",
        url: "https://tldp.org/",
        description:
          "Linux documentation and guides for system administration basics.",
        tags: ["linux", "devops", "fundamentals"],
      },
      {
        title: "Nginx Docs",
        url: "https://nginx.org/en/docs/",
        description:
          "Official Nginx docs for reverse proxy, load balancing, and performance.",
        tags: ["nginx", "devops", "backend"],
      },
      {
        title: "Terraform Docs",
        url: "https://developer.hashicorp.com/terraform/docs",
        description:
          "Infrastructure as code using Terraform with AWS, Azure, GCP providers.",
        tags: ["terraform", "devops", "cloud"],
      },
      {
        title: "AWS Documentation",
        url: "https://docs.aws.amazon.com/",
        description:
          "Official AWS docs for cloud services like EC2, S3, IAM, Lambda.",
        tags: ["aws", "cloud", "devops"],
      },
      {
        title: "Azure Documentation",
        url: "https://learn.microsoft.com/en-us/azure/",
        description:
          "Official Azure docs for cloud services, compute, storage, and networking.",
        tags: ["azure", "cloud", "devops"],
      },
      {
        title: "Google Cloud Docs",
        url: "https://cloud.google.com/docs",
        description:
          "Official GCP documentation for cloud products and architecture.",
        tags: ["gcp", "cloud", "devops"],
      },
    ]);

    console.log(`✅ Docs Inserted: ${docs.length}`);

    // 4) INSERT LINKS (15+)
    console.log("\n🔗 Inserting Links...");
    const links = await LinkResource.insertMany([
      {
        title: "Frontend Developer Roadmap",
        url: "https://roadmap.sh/frontend",
        description: "Best structured roadmap for becoming a Frontend Developer.",
        tags: ["frontend", "roadmap"],
      },
      {
        title: "Backend Developer Roadmap",
        url: "https://roadmap.sh/backend",
        description: "Best structured roadmap for becoming a Backend Developer.",
        tags: ["backend", "roadmap"],
      },
      {
        title: "DevOps Roadmap",
        url: "https://roadmap.sh/devops",
        description: "Best structured roadmap for becoming a DevOps Engineer.",
        tags: ["devops", "roadmap"],
      },
      {
        title: "freeCodeCamp",
        url: "https://www.freecodecamp.org/",
        description:
          "Free high-quality courses and certifications for web development.",
        tags: ["web", "free", "courses"],
      },
      {
        title: "GitHub Student Developer Pack",
        url: "https://education.github.com/pack",
        description:
          "Official GitHub student pack with free tools like domain, cloud credits, and learning resources.",
        tags: ["students", "github", "free"],
      },
      {
        title: "CS50 by Harvard",
        url: "https://cs50.harvard.edu/x/",
        description:
          "One of the best free computer science courses for beginners.",
        tags: ["cs", "fundamentals", "free"],
      },
      {
        title: "LeetCode",
        url: "https://leetcode.com/",
        description:
          "Best platform for DSA interview practice with problems and contests.",
        tags: ["dsa", "interview", "coding"],
      },
      {
        title: "HackerRank",
        url: "https://www.hackerrank.com/",
        description:
          "Practice coding, SQL, and problem solving for interviews.",
        tags: ["coding", "dsa", "sql"],
      },
      {
        title: "Codeforces",
        url: "https://codeforces.com/",
        description: "Competitive programming practice platform.",
        tags: ["cp", "dsa", "coding"],
      },
      {
        title: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/",
        description:
          "Tutorials + coding practice for DSA, CS fundamentals, and interview prep.",
        tags: ["dsa", "cs", "interview"],
      },
      {
        title: "System Design Primer (GitHub)",
        url: "https://github.com/donnemartin/system-design-primer",
        description:
          "The best free system design repository with diagrams and explanations.",
        tags: ["systemdesign", "backend", "interview"],
      },
      {
        title: "Awesome DevOps (GitHub)",
        url: "https://github.com/wmariuss/awesome-devops",
        description:
          "Curated list of DevOps tools, tutorials, and best practices.",
        tags: ["devops", "tools", "github"],
      },
      {
        title: "Awesome Kubernetes (GitHub)",
        url: "https://github.com/ramitsurana/awesome-kubernetes",
        description:
          "Curated Kubernetes learning resources and tools.",
        tags: ["kubernetes", "devops", "tools"],
      },
      {
        title: "Java Roadmap",
        url: "https://roadmap.sh/java",
        description:
          "Structured roadmap for learning Java and building backend apps.",
        tags: ["java", "backend", "roadmap"],
      },
      {
        title: "Python Roadmap",
        url: "https://roadmap.sh/python",
        description:
          "Structured roadmap for Python programming and development.",
        tags: ["python", "roadmap"],
      },
    ]);
    console.log(`✅ Links Inserted: ${links.length}`);

    // 5) INSERT NEWS (10+)
    console.log("\n📰 Inserting News...");
    const news = await NewsResource.insertMany([
      {
        title: "Hacker News",
        url: "https://news.ycombinator.com/",
        description:
          "Most popular tech and startup news platform used by developers.",
        tags: ["news", "tech", "startups"],
      },
      {
        title: "freeCodeCamp News",
        url: "https://www.freecodecamp.org/news/",
        description:
          "Daily web dev articles, tutorials, and modern programming topics.",
        tags: ["news", "webdev"],
      },
      {
        title: "The Verge - Tech",
        url: "https://www.theverge.com/tech",
        description: "Tech updates, product launches, and AI news.",
        tags: ["news", "tech", "ai"],
      },
      {
        title: "Google AI Blog",
        url: "https://ai.googleblog.com/",
        description:
          "Official Google AI research and updates blog (high trust).",
        tags: ["ai", "news", "research"],
      },
      {
        title: "OpenAI Blog",
        url: "https://openai.com/blog",
        description: "OpenAI official updates on research and products.",
        tags: ["ai", "news"],
      },
      {
        title: "AWS News Blog",
        url: "https://aws.amazon.com/blogs/aws/",
        description: "Official AWS updates, features, and cloud announcements.",
        tags: ["aws", "cloud", "news"],
      },
      {
        title: "Kubernetes Blog",
        url: "https://kubernetes.io/blog/",
        description: "Official Kubernetes blog for releases and community news.",
        tags: ["kubernetes", "devops", "news"],
      },
      {
        title: "GitHub Blog",
        url: "https://github.blog/",
        description: "GitHub updates about Actions, Copilot, and dev tooling.",
        tags: ["github", "devtools", "news"],
      },
      {
        title: "Stack Overflow Blog",
        url: "https://stackoverflow.blog/",
        description: "Engineering culture, dev trends, and programming insights.",
        tags: ["dev", "news"],
      },
      {
        title: "Dev.to",
        url: "https://dev.to/",
        description: "Community articles and tutorials from developers.",
        tags: ["webdev", "community", "news"],
      },
    ]);
    console.log(`✅ News Inserted: ${news.length}`);

    // 6) INSERT VIDEOS (20+)
    console.log("\n🎥 Inserting Videos...");
    const videos = await VideoResource.insertMany([
      {
        title: "HTML Full Course",
        url: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
        channelName: "freeCodeCamp.org",
        duration: "2:00:00",
        difficulty: "Beginner",
        tags: ["html", "frontend"],
      },
      {
        title: "CSS Full Course",
        url: "https://www.youtube.com/watch?v=OXGznpKZ_sA",
        channelName: "freeCodeCamp.org",
        duration: "11:00:00",
        difficulty: "Beginner",
        tags: ["css", "frontend"],
      },
      {
        title: "JavaScript Full Course",
        url: "https://www.youtube.com/watch?v=jS4aFq5-91M",
        channelName: "freeCodeCamp.org",
        duration: "8:00:00",
        difficulty: "Beginner",
        tags: ["javascript", "web"],
      },
      {
        title: "React Full Course",
        url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
        channelName: "freeCodeCamp.org",
        duration: "11:55:00",
        difficulty: "Beginner",
        tags: ["react", "frontend"],
      },
      {
        title: "Node.js & Express Full Course",
        url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
        channelName: "freeCodeCamp.org",
        duration: "8:00:00",
        difficulty: "Beginner",
        tags: ["nodejs", "express", "backend"],
      },
      {
        title: "MongoDB Full Course",
        url: "https://www.youtube.com/watch?v=ofme2o29ngU",
        channelName: "freeCodeCamp.org",
        duration: "4:00:00",
        difficulty: "Beginner",
        tags: ["mongodb", "database"],
      },
      {
        title: "Docker Full Course",
        url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
        channelName: "freeCodeCamp.org",
        duration: "2:20:00",
        difficulty: "Beginner",
        tags: ["docker", "devops"],
      },
      {
        title: "Kubernetes Full Course",
        url: "https://www.youtube.com/watch?v=X48VuDVv0do",
        channelName: "freeCodeCamp.org",
        duration: "4:15:00",
        difficulty: "Beginner",
        tags: ["kubernetes", "devops"],
      },

      // extra videos
      {
        title: "TypeScript Full Course",
        url: "https://www.youtube.com/watch?v=30LWjhZzgF4",
        channelName: "freeCodeCamp.org",
        duration: "5:00:00",
        difficulty: "Beginner",
        tags: ["typescript", "frontend"],
      },
      {
        title: "Next.js Full Course",
        url: "https://www.youtube.com/watch?v=ZVnjOPwW4ZA",
        channelName: "freeCodeCamp.org",
        duration: "4:00:00",
        difficulty: "Beginner",
        tags: ["nextjs", "react", "fullstack"],
      },
      {
        title: "Git & GitHub Crash Course",
        url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        channelName: "freeCodeCamp.org",
        duration: "1:00:00",
        difficulty: "Beginner",
        tags: ["git", "github", "devops"],
      },
      {
        title: "Linux Command Line Full Course",
        url: "https://www.youtube.com/watch?v=ZtqBQ68cfJc",
        channelName: "freeCodeCamp.org",
        duration: "6:00:00",
        difficulty: "Beginner",
        tags: ["linux", "devops"],
      },
      {
        title: "SQL Full Course",
        url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        channelName: "freeCodeCamp.org",
        duration: "4:00:00",
        difficulty: "Beginner",
        tags: ["sql", "database"],
      },
      {
        title: "PostgreSQL Full Course",
        url: "https://www.youtube.com/watch?v=qw--VYLpxG4",
        channelName: "freeCodeCamp.org",
        duration: "3:00:00",
        difficulty: "Beginner",
        tags: ["postgresql", "database"],
      },
      {
        title: "Redis Full Course",
        url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
        channelName: "freeCodeCamp.org",
        duration: "2:00:00",
        difficulty: "Beginner",
        tags: ["redis", "backend"],
      },
      {
        title: "JWT Authentication Tutorial",
        url: "https://www.youtube.com/watch?v=mbsmsi7l3r4",
        channelName: "Web Dev Simplified",
        duration: "0:35:00",
        difficulty: "Beginner",
        tags: ["jwt", "auth", "backend"],
      },
      {
        title: "System Design Basics",
        url: "https://www.youtube.com/watch?v=MbjObHmDbZo",
        channelName: "Gaurav Sen",
        duration: "1:00:00",
        difficulty: "Beginner",
        tags: ["systemdesign", "backend"],
      },
      {
        title: "AWS Basics Full Course",
        url: "https://www.youtube.com/watch?v=ulprqHHWlng",
        channelName: "freeCodeCamp.org",
        duration: "10:00:00",
        difficulty: "Beginner",
        tags: ["aws", "cloud", "devops"],
      },
      {
        title: "Terraform Full Course",
        url: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
        channelName: "freeCodeCamp.org",
        duration: "3:00:00",
        difficulty: "Beginner",
        tags: ["terraform", "devops", "cloud"],
      },
      {
        title: "CI/CD with Jenkins Full Course",
        url: "https://www.youtube.com/watch?v=6YZvp2GwT0A",
        channelName: "TechWorld with Nana",
        duration: "2:00:00",
        difficulty: "Beginner",
        tags: ["jenkins", "cicd", "devops"],
      },
    ]);

    console.log(`✅ Videos Inserted: ${videos.length}`);

    // Helper: find video id by title
    const getVideoId = (title) => {
      const v = videos.find((x) => x.title === title);
      return v ? [v._id.toString()] : [];
    };

    // 7) INSERT ROADMAPS
    console.log("\n🛣️ Inserting Roadmaps...");
    const roadmaps = await Roadmap.insertMany([
      {
        title: "Frontend Developer Roadmap",
        description:
          "A structured roadmap for becoming a Frontend Developer with the right progression.",
        tags: ["frontend", "roadmap"],
        steps: [
          {
            title: "HTML Fundamentals",
            description:
              "Learn HTML elements, forms, semantic tags, accessibility basics.",
            videoIds: getVideoId("HTML Full Course"),
          },
          {
            title: "CSS Fundamentals",
            description:
              "Learn layout, flexbox, grid, responsive design, and animations.",
            videoIds: getVideoId("CSS Full Course"),
          },
          {
            title: "JavaScript Fundamentals",
            description:
              "Learn variables, functions, arrays, objects, DOM, events, async JS.",
            videoIds: getVideoId("JavaScript Full Course"),
          },
          {
            title: "React",
            description:
              "Learn components, props, state, hooks, routing, and React patterns.",
            videoIds: getVideoId("React Full Course"),
          },
          {
            title: "TypeScript",
            description:
              "Learn TypeScript types, interfaces, generics, and React + TS.",
            videoIds: getVideoId("TypeScript Full Course"),
          },
          {
            title: "Next.js",
            description:
              "Learn SSR, routing, API routes, auth, and full-stack patterns.",
            videoIds: getVideoId("Next.js Full Course"),
          },
          {
            title: "Deployment + Git",
            description:
              "Learn GitHub, Vercel, Netlify, and best practices for publishing projects.",
            videoIds: getVideoId("Git & GitHub Crash Course"),
          },
        ],
      },

      {
        title: "Backend Developer Roadmap",
        description:
          "A structured roadmap for becoming a Backend Developer with Node.js.",
        tags: ["backend", "roadmap"],
        steps: [
          {
            title: "Node.js Basics",
            description:
              "Understand Node runtime, modules, event loop, npm, and file system.",
            videoIds: getVideoId("Node.js & Express Full Course"),
          },
          {
            title: "Express.js",
            description:
              "Build REST APIs, middleware, error handling, routing structure.",
            videoIds: getVideoId("Node.js & Express Full Course"),
          },
          {
            title: "MongoDB + Mongoose",
            description:
              "Learn CRUD, schema modeling, indexing, and aggregation basics.",
            videoIds: getVideoId("MongoDB Full Course"),
          },
          {
            title: "SQL + PostgreSQL",
            description:
              "Learn relational databases, joins, indexes, and PostgreSQL basics.",
            videoIds: getVideoId("PostgreSQL Full Course"),
          },
          {
            title: "Authentication & Security",
            description:
              "JWT auth, password hashing, validation, and security best practices.",
            videoIds: getVideoId("JWT Authentication Tutorial"),
          },
          {
            title: "System Design Basics",
            description:
              "Learn scalability, caching, queues, load balancers, and API design.",
            videoIds: getVideoId("System Design Basics"),
          },
        ],
      },

      {
        title: "DevOps Roadmap",
        description:
          "A structured roadmap for becoming a DevOps Engineer with modern tooling.",
        tags: ["devops", "roadmap"],
        steps: [
          {
            title: "Linux + Networking Basics",
            description:
              "Learn Linux commands, permissions, systemctl, SSH, ports, DNS, HTTP/HTTPS.",
            videoIds: getVideoId("Linux Command Line Full Course"),
          },
          {
            title: "Docker",
            description:
              "Learn containers, images, Dockerfile, volumes, networking.",
            videoIds: getVideoId("Docker Full Course"),
          },
          {
            title: "Kubernetes",
            description:
              "Learn pods, deployments, services, ingress, configmaps, secrets.",
            videoIds: getVideoId("Kubernetes Full Course"),
          },
          {
            title: "Terraform",
            description:
              "Learn Infrastructure as Code and cloud automation.",
            videoIds: getVideoId("Terraform Full Course"),
          },
          {
            title: "CI/CD",
            description:
              "Learn GitHub Actions + Jenkins, pipelines, artifacts, deployments.",
            videoIds: getVideoId("CI/CD with Jenkins Full Course"),
          },
        ],
      },
    ]);

    console.log(`✅ Roadmaps Inserted: ${roadmaps.length}`);

    console.log("\n🎉 SEEDING COMPLETED SUCCESSFULLY!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding Failed:", err);
    process.exit(1);
  }
};

seedDB();
