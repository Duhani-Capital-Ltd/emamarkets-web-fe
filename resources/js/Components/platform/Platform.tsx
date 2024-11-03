import { Button } from "@/components/ui/button"

export const Platform = () => {
    return (
        <>
            <section className="max-w-screen-xl xl:px-16 2xl:px-0 mx-auto my-16">
                <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-xl p-8">
                        <div className="flex items-center gap-2 mb-3 w-fit rounded-full">
                            <div className="bg-primary w-2 h-2 rounded-full"></div>
                            <span className="text-primary">Platform</span>
                        </div>
                        <h2 className="text-4xl font-semibold mb-3">Seameless trading with MetaTrader 5</h2>
                        <p className="text-gray-600">Trade with confidence with our platform for secure transparent trading. Trade with confidence with our platform</p>
                        <Button className="rounded-full py-6 px-8 mt-5">Learn More</Button>
                        <div className="mt-7 text-xl">
                            <ul className="space-y-2">
                                <li className="flex items-center font-medium">
                                    WebTerminal
                                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                    </svg>
                                </li>
                                <li className="text-gray-600">App Store</li>
                                <li className="text-gray-600">Google Playstore</li>
                                <li className="text-gray-600">APK File</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561267/Illustration_Phone-Desktop_afpgzj.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
