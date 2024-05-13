import { FacebookIcon, InstagramIcon, GithubIcon, TwitterIcon, Link } from "lucide-react"
import { FOOTER } from "../constants"

const Footer = () => {
  return (
    <div className="bg-black text-white py-20">
        <div className="container mx-auto">
            <div className="flex flex-wrap border-b border-neutral-700 ">
                <div className="w-full sm:w-1/2 lg:w-6/12 p-4">
                    <h2 className="">RealEs</h2>
                    <p className="lg:max-w-sm py-8 text-sm">{FOOTER.description}</p>
                    <div className="flex flex-wrap gap-4 mt-10">
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <GithubIcon/>
                        <TwitterIcon/>
                    </div>
                </div>
                {FOOTER.categories.map((category, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-2/12 p-4 ">
                        <h3 className="font-semibold uppercase pb-4">
                            {category.name}
                        </h3>
                        <ul>
                            {category.links.map((link, index) => (
                                <li key={index} className="my-4">
                                    <a href={link.url} className="text-sm hover:text-neutral-500">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p className="p-4 text-center text-sm text-neutral-500">
                {FOOTER.copyright}
            </p>
        </div>
    </div>
  )
}

export default Footer