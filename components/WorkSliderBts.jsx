"use client"

import { useSwiper } from "swiper/react"

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const WorkSliderBts = ({btnStyles,iconsStyles}) => {

    const swiper = useSwiper()
    return (
        <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>

    )
}

export default WorkSliderBts