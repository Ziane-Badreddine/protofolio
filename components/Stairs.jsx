import { animate, delay, motion } from "framer-motion"

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
}


const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1
}


const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((item, index) => {
                return <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1
            }}
            className = 'w-full h-full relative bg-white'
            />
            })}
        </>
    )
}

export default Stairs