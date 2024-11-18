import Link from "next/link"

import { FaGithub, FaLinkedin, FaInstagram ,FaTwitter} from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaInstagram />, path: "" },
    { icon: <FaTwitter />, path: "" },
]

const Social = () => {
    return (
        <div className="flex gap-6" >
            {socials.map((social,index) => {
                return <Link href={social.path} key={index} className="w-9 h-9 flex items-center justify-center text-accent text-base border-2 rounded-full border-accent hover:bg-accent hover:text-primary hover:transition-all hover:duration-500">
                    {social.icon}
                </Link>
            })}
        </div>
    )
}

export default Social