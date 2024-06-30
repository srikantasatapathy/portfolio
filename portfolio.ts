import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Srikanta Satapathy",
  title: "Hi all, I'm Srikanta",
  description:
    "I'm a passionate MERN Full Stack web developer with experience developing Full Stack web and mobile applications with React-Native,React.js,Next js, Nodejs and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

// export const openSource = {
//   githubUserName: "1hanzla100",
// };

// export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:srikantasatapathy99@gmail.com",
  linkedin: "https://www.linkedin.com/in/srikanta-satapathy-a904511bb/",
  github: "https://github.com/srikantasatapathy",
  instagram:
    "https://www.instagram.com/srikant.satapathy?igsh=NXZuZXFjODI5ODFo",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        "Building both android and ios mobile application using React Native",
        "Building responsive static websites using Next.js",
        "Building RESTful APIs in Node & Express REST Framework",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:nodejs-icon-alt",
        },
        {
          skillName: "React-Native",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },

        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Mongodb",
          iconifyTag: "devicon:mongodb-wordmark",
        },
        {
          skillName: "MySql",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Graphql",
          iconifyTag: "vscode-icons:file-type-graphql",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
  {
    Stack: "Problem solving",
    progressPercentage: "85",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Pj College of Management & Technology",
    subHeader: "Master of Computer Applications",
    duration: "April 2021 - April 2022",
    desc: "",
    grade: "80%",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Sonepur Degree College , Sonepur",
    subHeader: "Bachelor of Science [honours. Computer Science]",
    duration: "April 2016 - April 2019",
    desc: "",
    grade: "78%",
    descBullets: [], // Array of Strings
  }
];

export const experience: ExperienceType[] = [
  {
    role: "MERN Full Stack Developer",
    company: "Hyscaler",
    companyLogo: "/img/icons/common/hyscaler.png",
    date: "March 2022 - Present",
    desc: "I have developed and maintained full-stack web applications using the MERN stack. I have designed and developed RESTful APIs with Express and integrated them with third-party services. Additionally, I manage and optimize MongoDB databases. I collaborate with designers, product managers, and other developers to deliver high-quality software solutions.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Neww App",
    desc: "Neww App is a basically social media platform specially for nurses , where they are challenges to each other on fun activity and can communicate with each others",
    github: "https://github.com/srikantasatapathy",
    link: "#",
  },
  {
    name: "Doctegrity",
    desc: "Doctegrity is a medical consultation provide application, where user can register their self for consulating with doctor by the voice call, video call and message ",
    github: "https://github.com/srikantasatapathy",
    link: "#",
  }
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];

// // See object prototype on /types/section.ts page
// export const seoData: SEODataType = {
//   title: "Hanzla Tauqeer",
//   description: greetings.description,
//   author: "Hanzla Tauqeer",
//   image: "https://avatars.githubusercontent.com/u/59178380?v=4",
//   url: "https://developer-portfolio-1hanzla100.vercel.app",
//   keywords: [
//     "Hanzla",
//     "Hanzla Tauqeer",
//     "@1hanzla100",
//     "1hanzla100",
//     "Portfolio",
//     "Hanzla Portfolio ",
//     "Hanzla Tauqeer Portfolio",
//   ],
// };
