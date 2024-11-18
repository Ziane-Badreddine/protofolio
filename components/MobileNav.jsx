"use client"

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"


const Links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  }
]

const MobileNav = () => {

  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className="text-center text-2xl mt-32 mb-40 ">
          <h1 className="text-4xl font-semibold">Badr<span className="text-accent">.</span></h1>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 ">
          {Links.map((link, index) => {
            return (
              <Link key={index} href={link.path} className={`${link.path === pathname && "border-b-2 text-accent"} hover:text-accent text-xl capitalize transition-all`} >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav