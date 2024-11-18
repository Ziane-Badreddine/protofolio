"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"

const services = [
  {
    num: '01',
    href: '/',
    title: 'Création de sites web',
    description: "Création de sites web modernes et adaptés à vos besoins, qu’il s’agisse de sites vitrines, blogs, ou plateformes d'entreprise."
  },
  {
    num: '02',
    href: '/',
    title: 'Design Graphique',
    description: "Conception de visuels attractifs et alignés sur votre identité visuelle pour améliorer l'expérience utilisateur."
  },
  {
    num: '03',
    href: '/',
    title: 'Rédaction Scientifique avec LaTeX',
    description: "Mise en forme professionnelle de documents académiques et techniques pour répondre aux standards scientifiques."
  },
  {
    num: '04',
    href: '/',
    title: "Développement Java ",
    description: "Développement d'applications robustes et performantes avec Java, en utilisant la programmation orientée objet"
  }
]


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className='container m-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 1.4,
              ease: 'easeIn'
            }
          }}
          className = 'grid grid-cols-1 xl:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="flex justify-between items-center w-full">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h2 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">
                {service.description}
              </p>
              <div className="border-b border-white/30 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services