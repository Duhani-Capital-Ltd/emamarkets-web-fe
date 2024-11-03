import { Button } from "@/components/ui/button"
import { FeaturesCarousel } from "./FeatureCarousel"

export const Hero = () => {
    return (
        <>
            <section className="bg-[#f8fafb]">
                <div className="grid grid-cols-2 items-center max-w-screen-xl xl:px-16 2xl:px-0 mx-auto">
                    <div className="">
                        <span className="bg-[#eceff3] flex w-fit rounded-full py-2 px-3">🎉 Announcing our $14M Fundarise <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                        </span>
                        <h1 className="text-6xl my-6 font-bold">Empower Your Trade Seamless and Secure Experince</h1>
                        <p className="w-[75%] text-lg">Trade with confidence useing our advanced platform, designed to provide you with a scure, tranaparent, and reliable trading environtment</p>
                        <Button className="mt-8 rounded-full text-sm py-6 px-6">Open an Account</Button>
                    </div>
                    <div className="">
                        <img className="" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561268/KV_Hero-Desktop_t5bvli.png" alt="" />
                    </div>
                </div>
                <FeaturesCarousel/>
            </section>
        </>
    )
}
