 import React from "react";
import { motion } from "framer-motion";
import TrustedLearnerCard from "./TrustedLearnerCard";
import profileImg1 from "../../assets/user1.jpg";
import profileImg2 from "../../assets/user2.jpg"; 
import profileImg3 from "../../assets/user3.jpg"; 
import profileImg4 from "../../assets/user4.jpg"; 
import Harsa from "../../assets/Harsa.jpg"
import Neha from "../../assets/Neha.jpg"
import sandeep from "../../assets/sandeep.jpg"
import rohit from "../../assets/Rohit.jpg"
import kavya from "../../assets/kavya.jpg"
import akhil from "../../assets/akhil.jpg"
import sivani from "../../assets/Sivani.jpg"

const cardColors = ["green", "purple", "blue", "orange"];


const cardsData = [
  {
    name: "Ananya Reddy",
    stars: 4,
    level: "B.Tech (Computer Science)",
    testimonial:
      "The Python course was well-structured, and the mentors gave practical examples that made learning easy.",
    company: "Placed at Infosys as Software Developer",
    platform: "Instagram",
    platformColor: "orange-600",
    profileImage: profileImg1,
    color: "green"
  },
  {
    name: "Vignesh Kumar",
    stars: 3,
    level: "Microsoft Dynamics 365 F&O Certification",
    testimonial:
      "I got hands-on training that directly helped me land a Dynamics 365 F&O consultant role.",
    company: "Working at Capgemini as Functional Consultant",
    platform: "Instagram",
    platformColor: "orange-600",
    profileImage: profileImg2,
    color: "purple"
  },
  {
    name: "Priya Sharma",
    stars: 5,
    level: "Class 12 (CBSE)",
    testimonial:
      "I joined the Generative AI beginner program, and it has sparked my interest in AI research for my future career.",
    company: "Preparing for Engineering Entrance Exams",
    platform: "Facebook",
    platformColor: "blue-600",
    profileImage: profileImg3,
    color: "blue"
  },
  {
    name: "Arun Kumar",
    stars: 4,
    level: "B.Tech (Mechanical)",
    testimonial:
      "The fullstack bootcamp helped me land my first internship at a top IT company. Friendly mentors.",
    company: "Intern at Cognizant",
    platform: "LinkedIn",
    platformColor: "purple-600",
    profileImage: profileImg4,
    color: "orange"
  },
   {
    name: "Harsha Vardhan",
    stars: 4,
    level: "MCA (Final Year)",
    testimonial:
      "The DevOps course gave me real deployment skills and CI/CD pipeline knowledge.",
    company: "Intern at Wipro",
    platform: "LinkedIn",
    platformColor: "orange-600",
    profileImage: Harsa,
    color: "green"
  },
   {
    name: "Neha Menon",
    stars: 5,
    level: "B.Com (Business Administration)",
    testimonial:
      "The Microsoft Dynamics 365 Business Central course helped me switch careers with confidence.",
    company: "Now working at Deloitte as Business Analyst",
    platform: "Instagram",
    platformColor: "orange-600",
    profileImage: Neha,
    color: "green"
  },

   {
    name: "Sandeep Nair",
    stars: 4,
    level: "School Student (ICSE)",
    testimonial:
      "The Mobile Application Development workshop helped me create my first Android app for my school project.",
    company: "Won First Prize in School Tech Fest",
    platform: "LinkedIn",
    platformColor: "orange-600",
    profileImage: sandeep,
    color: "green"
  },

   {
    name: "Rohit Singh",
    stars: 5,
    level: "React Native Developer Track",
    testimonial:
      "The course covered everything from basics to advanced app integrations, making me job-ready.",
    company: "Hired at HCL Technologies as App Developer",
    platform: "Instagram",
    platformColor: "orange-600",
    profileImage: rohit,
    color: "blue"
  },
  
   {
    name: "Kavya Iyer",
    stars: 4,
    level: "B.Sc (IT)",
    testimonial:
      "I completed my Generative AI certification and built a chatbot project that impressed my college professors.",
    company: "Selected for Campus Innovation Award",
    platform: "Facebook",
    platformColor: "orange-600",
    profileImage: kavya,
    color: "orange"
  },

  //  {
  //   name: "Ananya Reddy",
  //   stars: 4,
  //   level: "B.Tech (Computer Science)",
  //   testimonial:
  //     "The Python course was well-structured, and the mentors gave practical examples that made learning easy.",
  //   company: "Placed at Infosys as Software Developer",
  //   platform: "Instagram",
  //   platformColor: "orange-600",
  //   profileImage: profileImg1,
  //   color: "green"
  // },

  //  {
  //   name: "Ananya Reddy",
  //   stars: 4,
  //   level: "B.Tech (Computer Science)",
  //   testimonial:
  //     "The Python course was well-structured, and the mentors gave practical examples that made learning easy.",
  //   company: "Placed at Infosys as Software Developer",
  //   platform: "Instagram",
  //   platformColor: "orange-600",
  //   profileImage: profileImg1,
  //   color: "green"
  // },

  //  {
  //   name: "Ananya Reddy",
  //   stars: 4,
  //   level: "B.Tech (Computer Science)",
  //   testimonial:
  //     "The Python course was well-structured, and the mentors gave practical examples that made learning easy.",
  //   company: "Placed at Infosys as Software Developer",
  //   platform: "Instagram",
  //   platformColor: "orange-600",
  //   profileImage: profileImg1,
  //   color: "green"
  // },
];

// Repeat the four cards to create a total of 10 cards
const cards = Array.from({ length: 15 }, (_, i) => {
  const idx = i % cardsData.length;
  const cardData = cardsData[idx];
  return {
    ...cardData,
    id: i + 1,
    color: cardColors[i % cardColors.length]
  };
});

export default function TrustedLearners() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-center text-white">
            Trusted Learners
          </h3>
          <p className="mt-2 text-white text-xl max-w-5xl mx-auto">
            Join thousands of motivated learners who trust us to guide their
            educational journey. Our platform empowers students, professionals,
            and lifelong learners to gain skills that truly make a difference.
          </p>
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0, black 8%, black 92%, transparent 100%)"
          }}
        >
          <MarqueeRow items={cards} direction="rtl" />
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction = "rtl" }) {
  const duration = 30;
  const dir = direction === "ltr" ? ["-50%", "0%"] : ["0%", "-50%"];

  const rowContent = (
    <div className="flex shrink-0 gap-6 pr-6">
      {items.map((card, idx) => (
        <TrustedLearnerCard
          key={card.id + idx}
          color={card.color}
          profileImage={card.profileImage}
          name={card.name}
          stars={card.stars}
          level={card.level}
          testimonial={card.testimonial}
          company={card.company}
          platform={card.platform}
          platformColor={card.platformColor}
        />
      ))}
    </div>
  );

  return (
    <div className="group relative">
      <motion.div
        className="flex w-[200%]"
        animate={{ x: dir }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {rowContent}
        {rowContent}
      </motion.div>
    </div>
  );
}
