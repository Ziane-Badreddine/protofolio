"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import WorkSliderBts from '@/components/WorkSliderBts'


const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Tic Tae Toe',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam asperiores nam accusantium molestiae dignissimos doloribus distinctio deleniti.",
    stack: [{ name: "Html" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/1.png",
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Tic Tae Toe',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam asperiores nam accusantium molestiae dignissimos doloribus distinctio deleniti.",
    stack: [{ name: "Html" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/2.png",
    live: "",
    github: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Tic Tae Toe',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam asperiores nam accusantium molestiae dignissimos doloribus distinctio deleniti.",
    stack: [{ name: "Html" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/3.png",
    live: "",
    github: "",
  },
  {
    num: '04',
    category: 'frontend',
    title: 'Tic Tae Toe',
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam asperiores nam accusantium molestiae dignissimos doloribus distinctio deleniti.",
    stack: [{ name: "Html" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/4.png",
    live: "",
    github: "",
  },
];


const Work = () => {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex

    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
      className='min-h-[80vh] flex flex-col items-center justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] leading-none font-bold text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              <p className='text-white/60'>
                {project.description}
              </p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return <li key={index} className='text-xl text-accent'>
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] bg-white/5 rounded-full flex items-center justify-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>project live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] bg-white/5 rounded-full flex items-center justify-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index}>
                  <div className='w-full h-[460px] flex items-center justify-center relative bg-pink-50/20 group'>
                    <div className='absolute w-full h-full top-0 bottom-0 bg-black/10 z-10'></div>
                    <div className='relative w-full h-full'>
                      <Image
                        src={project.image}
                        fill
                        alt=''
                        className='object-cover'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBts btnStyles="bg-accent hover:bg-accent-hover w-[44px] h-[44px] flex items-center justify-center text-primary text-[22px] transition-all duration-500"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work