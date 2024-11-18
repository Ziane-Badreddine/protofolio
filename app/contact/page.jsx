"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'

import { motion } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+212) 707291630"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "badrziane5@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adresse",
    description: "Bouabid NR 148 Settat"
  },
]

const Contact = () => {
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
      className='py-6'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h1 className="text-4xl text-accent">Let's work together</h1>
              <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eaque ess elit. Fugiat, eaque ess Fugiat, eaque ess Fugiat, eaque ess   </p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>select a service</SelectLabel>
                    <SelectItem value="1">Création de sites web</SelectItem>
                    <SelectItem value="2">Design Graphique</SelectItem>
                    <SelectItem value="3">Rédaction Scientifique avec LaTeX</SelectItem>
                    <SelectItem value="4">Développement Java</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
              className= "h-[200px]"
              placeholder="Type your message here..."
              />
              <Button size="sm" className = "max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item,index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent bg-[#27272c] rounded-md">
                    <div className="text-[28px]">
                    {item.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact