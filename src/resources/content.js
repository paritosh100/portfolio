import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Paritosh",
  lastName: "Gandre",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Scientist",
  avatar: "/images/LINKEDIN-PROFILE.png",
  email: "paritoshkrcg@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., &#39;Europe/Vienna&#39;
  languages: ["English", "Marathi", "Hindi"], // optional: Leave the array empty if you don&#39;t want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&#39;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/paritosh100",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/paritosh-gandre/",
  },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "CV",
    icon: "clipboard", // or "document" depending on what’s available in your /once-ui/icons.ts
    link: "/Paritosh_Gandre_CV.pdf", // place your CV file in the public/ directory
    download: true, // optional: helps browsers download instead of open
  },
];

const home = {
  path: "/",
  image: "/images/LINKEDIN-PROFILE.png",
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning Complex Data into Real-World Solutions </>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Infection-Spread</strong></>,
    href: "/work/infection-simulation-project",
  },
  subline: (
    <>
      I&#39;m Paritosh, a data scientist with a background in AI and computer vision, currently exploring
       ways to turn complex problems into simple, intelligent systems. Outside of work, I experiment 
       with personal projects: from multi-agent simulations to generative AI tools.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&#39;m Paritosh Gandre, a data scientist with hands-on experience in machine learning, 
        deep learning, and computer vision. I recently completed my Master&#39;s in Data Science from 
        Kent State University and have worked on real-world projects in genomics, AI-powered automation,
         and multi-agent systems. I build intelligent systems that solve problems from DNA 
         sequence classification to AI-driven blog generation and 
         I’m actively looking for full-time opportunities where I can turn data into impact.
      </>
    ),
  },
  work:{
    display:false,
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Kent State University",
        description: <>Master&#39;s in Data Science 2023 - 2025</>,
      },
      {
        name: "University of Mumbai",
        description: <>Bachelor&#39;s of Engineering in Computer Engineering 2021 - 2023</>,
      },
    ],
  },
  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Machine Learning & Deep Learning",
      description: (
        <>
          Experienced with TensorFlow, Keras, PyTorch, Scikit-learn, XGBoost, and HMMs for building and training predictive models on structured and unstructured data.
        </>
      ),
      images: [
        // {
        //   src: "/images/projects/project-02/genomic-sequence-classification.png",
        //   alt: "Genomic model project",
        //   width: 16,
        //   height: 9,
        // },
        // {
        //   src: "/images/projects/project-02/music-genre-classifier.png",
        //   alt: "Music genre classifier",
        //   width: 16,
        //   height: 9,
        // },
      ],
    },
    {
      title: "Data Engineering & Analytics",
      description: (
        <>
          Proficient in writing SQL (T-SQL), building ETL pipelines with Python and Airflow, and using BigQuery for large-scale analytics and reporting.
        </>
      ),
      images: [
        // {
        //   src: "/images/projects/project-02/infection-simulation.png",
        //   alt: "Infection simulation dashboard",
        //   width: 16,
        //   height: 9,
        // },
      ],
    },
    {
      title: "Visualization & BI Tools",
      description: (
        <>
          Skilled in Power BI, Tableau, and Matplotlib for creating dashboards, data storytelling, and real-time visualizations across domains.
        </>
      ),
      images: [
        // {
        //   src: "/images/projects/project-02/ai-blog-generator.png",
        //   alt: "AI blog generator output",
        //   width: 16,
        //   height: 9,
        // },
      ],
    },
    {
      title: "Web & Automation",
      description: (
        <>
          Built microservices and web tools using Flask, GitHub Actions, Streamlit, and OpenAI APIs to automate content generation and data tasks.
        </>
      ),
      images: [
        // {
        //   src: "/images/projects/project-02/ai-blog-generator.png",
        //   alt: "OpenAI Flask service",
        //   width: 16,
        //   height: 9,
        // },
      ],
    },
    {
      title: "Domain-Specific Applications",
      description: (
        <>
          Hands-on with computer vision (MediaPipe, OpenCV), agent-based modeling (Mesa), genomic classification, and audio signal processing (Librosa).
        </>
      ),
      // images: [
      //   {
      //     src: "/images/projects/project-05/genomic-sequence-classification.png",
      //     alt: "Genomic project",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
  ],
}
};

const blog = {
  path: "/blog",
  label: "Work Experience",
  title: `${person.name} - Work Experience`,
  description: `Read what ${person.name} has been up to recently`,
  work: {
    display: true, // set to false to hide this section
    experiences: [
      {
        company: "Kent State University",
        timeframe: "JUL 2025 - Present",
        role: "Research Assistant - Computer Vision & Pose Estimation",
        achievements: [
          <>
            Designed a real-time exercise form correction system using MediaPipe,
             and joint angle analysis to detect posture deviations with 85%+ accuracy.
          </>,
          <>
            Collected and processed pose data for model training, 
            enabling robust classification of movement patterns using lightweight CNNs.
          </>,
        ],
        images: [
          // // optional: leave the array empty if you don&#39;t want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Kent State University",
        timeframe: "FEB 2025 - MAY 2025",
        role: "Research Assistant - Deep Learning for Genomics",
        achievements: [
          <>
            Designed predictive models and transformer-based classifiers for 50K+ DNA sequences, 
            increasing pipeline efficiency by 40% and ROC AUC by 15%.
          </>,
          <>
            Built Power BI dashboards and Python-SQL ETL workflows, 
            reducing support tickets by 20% and improving research transparency.
          </>,
        ],
        images: [],
      },
      {
        company: "Kent State University",
        timeframe: "JAN 2025 - MAY 205",
        role: "Food Service Supply Chain Analyst",
        achievements: [
          <>
            Built SQL and Python models to forecast foot traffic and ingredient demand, 
            reducing over-purchase costs by 15% on a $10K budget.
          </>,
          <>
            Developed Power BI visualizations with automated KPI alerts for event operations serving 1,000+ guests.
          </>,
        ],
        images: [],
      },
      {
        company: "SafeSpace",
        timeframe: "MAY 2024 - DEC 2024",
        role: "Data Scientist",
        achievements: [
          <>
            Created 5+ automated dashboards and real-time Python tools for supply chain monitoring, 
            increasing operational efficiency by 90%.
          </>,
          <>
            Developed GCP-based ETL pipelines and launched an OpenAI-powered support assistant, 
            cutting ticket resolution time by 40%.
          </>,
        ],
        images: [],
      },
      {
        company: "Kent State University",
        timeframe: "APR 2024 - DEC 2024",
        role: "Catering Operations & Analytics Associate",
        achievements: [
          <>
            Merged 15K+ rows of SQL and inventory data to identify waste drivers, 
            reducing food costs by 12% MoM on a $40K budget.
          </>,
          <>
            Built weekly Power BI dashboards, 
            and led menu optimization analysis that increased average check size by 5%.
          </>,
        ],
        images: [],
      },
      {
        company: "Jobaaj Learning",
        timeframe: "DEC 2022 - AUG 2023",
        role: "Data Analyst",
        achievements: [
          <>
            Analyzed learner engagement and assessment data, uncovering trends that led to a 12% increase in course completion rates.
          </>,
          <>
            Created interactive dashboards in Excel and Power BI to track KPIs and student progress across 5+ departments.
          </>,
          <>
          Designed and deployed Excel-based dashboards to visualize sales and campaign metrics, reducing reporting time by 30%.
          </>,
          <>
          Conducted exploratory analysis on customer feedback, helping improve user satisfaction by identifying key pain points.
          </>
        ],
        images: [],
      },
    ],
  }
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};
const certificates = [
  {
    slug: "bioinformatics",
    title: "Biology Meets Programming: Bioinformatics for Beginners",
    issuer: "University of California San Diego",
    date: "Aug 2025",
    summary: "An introduction to bioinformatics and algorithms applied to DNA.",
    image: "/images/certificates/Biology_programming.png",
    link: "https://www.coursera.org/account/accomplishments/verify/XZRFEZ8ZEDMV",
  },
  {
    slug: "cv-python",
    title: "Building Computer Vision Applications with Python",
    issuer: "LinkedIn Learning",
    date: "Jul 2025",
    summary: "Hands-on computer vision workflows using Python.",
    image: "/images/certificates/COMPUTER_VISION-1.png",
    link: "https://www.linkedin.com/learning/certificates/693598670cfe9c715af210c87b59a03e9dd66416f7fce775d509763a836e0ddb",
  },
  {
    slug: "diffusion",
    title: "Generative AI with Diffusion Models",
    issuer: "Nvidia",
    date: "Nov 2024",
    summary: "Practical applications of diffusion models in generative AI.",
    image: "/images/certificates/GENAI_DIFFUSION_MODELS-1.png",
    link: "https://www.linkedin.com/in/paritosh-gandre/details/certifications/1731709384372/single-media-viewer",
  },
  {
    slug: "data-analysis-r",
    title: "Data Analysis with R Programming",
    issuer: "Google",
    date: "Oct 2024",
    summary: "R programming applied to exploratory and statistical data analysis.",
    image: "/images/certificates/DATA_ANALYSIS_R-1.png",
    link: "https://www.coursera.org/account/accomplishments/verify/UU47EMIV791H",
  },
];

const badges = [
  {
    slug: "aws-genai",
    title: "AWS Educate Introduction to Generative AI",
    issuer: "Amazon Web Services Training and Certification",
    date: "2024",
    image: "/images/badges/AWS_EDUCATE.png",
    link: "https://www.credly.com/badges/8f7218d6-a436-4fd5-adff-1eb01796ddf2",
  },
  {
    slug: "aws-data-analytics",
    title: "AWS Academy Graduate - Data Analytics",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "/images/certificates/aws-data-analytics.png",
    link: "https://www.credly.com/...",
  },
  {
    slug: "aws-genai-intro",
    title: "Introduction to GenAI - AWS Educate",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "/images/certificates/aws-genai.png",
    link: "https://www.credly.com/badges/8f7218d6-a436-4fd5-adff-1eb01796ddf2",
  },
];


export { person, social, newsletter, home, about, work, blog , gallery, certificates,badges };
