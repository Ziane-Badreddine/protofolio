"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaFigma } from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"

import { motion } from "framer-motion"


const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat rem eaque quibusdam corporis assumenda nobis eius?",
  info: [
    {
      FieldName: "name",
      FieldValue: "Badr Ziane"
    },
    {
      FieldName: "Phone",
      FieldValue: "(+212) 707291630"
    },
    {
      FieldName: "Skype",
      FieldValue: "Badr.02"
    },
    {
      FieldName: "Nationality",
      FieldValue: "Marocain"
    },
    {
      FieldName: "Freelance",
      FieldValue: "Available"
    },
    {
      FieldName: "Email",
      FieldValue: "badrziane5@gmail.com"
    },
    {
      FieldName: "Languages",
      FieldValue: "Francais ,English"
    },

  ]

}


const education = {
  icon: "/assests/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat rem eaque quibusdam corporis assumenda nobis eius?",
  items: [
    {
      institution: "FSTS",
      degree: "DEUST en Mathematique informatique physique",
      duration: "2022-2024"
    },
    {
      institution: "W3Schools",
      degree: "Full Stack Developer",
      duration: "2024-2025"
    },
    {
      institution: "Oracle",
      degree: "Développement Java",
      duration: "2025-2026"
    },
    {
      institution: "FSTS",
      degree: "Ingénieur en Génie Informatique",
      duration: "2024-2027"
    },

  ]
}


const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugiat rem eaque quibusdam corporis assumenda nobis eius?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <FaJava />,
      name: "java"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
        }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="Education">Education</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/30 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60"> {item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="Skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col text-center xl:text-left gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((inf, index) => {
                    return <li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
                      <span className="text-white/60 capitalize">{inf.FieldName}</span>
                      <span className="text-xl">{inf.FieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume