import { Button } from "@/components/ui/button"

export const CallToAction = () => {
    return (
        <>
            <section>
                <div className="bg-[#0C60C4] max-w-screen-xl xl:mx-16 2xl:mx-auto mx-auto border rounded-3xl grid grid-cols-2 text-white">
                    <div className="py-10 px-24">
                        <div className="flex items-center bg-white gap-2 mb-3 w-fit rounded-full px-2">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <span className="text-primary">Blogs</span>
                        </div>
                        <h2 className="text-5xl font-semibold my-4">Unlock your trading potential</h2>
                        <p className="font-extralight">See for yourself why is the broker of choice for over 800,000 traders and 64,000 partners</p>
                        <div className="space-x-2 mt-6">
                            <Button className="text-primary bg-white rounded-full py-6 px-8">Open Account</Button>
                            <Button variant={'outline'} className="rounded-full bg-transparent py-6 px-8">Customer Support</Button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-[70%] absolute top-[-6rem]" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561267/KV_CTA-Desktop_hzqyfu.png" alt="" />
                    </div>
                </div>
                <div className="bg-white h-[100px]"></div>
            </section>
        </>
    )
}
