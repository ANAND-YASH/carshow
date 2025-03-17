import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
   <footer className="flex flex-col text-black-100
   mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap
    justify-between gap-5 sm:px-16px-6 py-10">
        <div className="flex flex-col
        justify-start items-start gap-6">
            <img src="./Car_Hub_Logo.webp"
            alt="Car_Hub_Logo.webp" width={118} height={18}
            className="object-contain"/>
            <p className="text-base
             text-gray-700">
                Carhub 2025 <br/>
                All right reserved  &copy;
             </p>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between gap-8">
              {footerLinks.map((link) =>(
                <div key={link.title}
                className="w-full md:w-auto flex flex-col gap-2">
                    <h3 className="font-bold">{link.title}</h3>
                    {link.links.map((item) =>(
                        <Link
                        key={item.title}
                        href={item.url}
                        className="text-gray-500">
                            {item.title}
                        </Link>
                    ))}

              </div>
             ))}
             <div className="flex justify-center items-center flex-wrap border-t border-gray-100 sm:px-16 px-6 py-5">
                <div className="flex space-x-4">
                    <Link href="/"
                    className="text-gray-500">
                        Privacy Policy
                    </Link>
                    <Link href="/"
                    className="text-gray-500">
                        Terms of use
                    </Link>
                </div>
             </div>
   </div> 
    </div>
   </footer>
  )
}

export default Footer
