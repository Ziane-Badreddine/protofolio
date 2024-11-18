import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

import {FiDownload} from "react-icons/fi"

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            Software Devolloper
            <h1 className="h1 mb-6">Hello I'm <br />
              <span className="text-accent">Badr Eddine</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
            J'ai une forte passion pour la création d'applications web conviviales pour les mobiles
            </p>
            <div className="flex flex-col xl:flex-row items-center  gap-8">
              <div>
                <Button variant={"outline"} size={"lg"} className ="uppercase gap-2 flex items-center">
                  Download cv
                  <FiDownload />
                </Button>
              </div>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>

          <div>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
