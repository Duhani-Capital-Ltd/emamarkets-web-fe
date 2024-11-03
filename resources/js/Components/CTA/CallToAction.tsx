import { Button } from "@/components/ui/button";

export const CallToAction = () => {
    return (
        <>
            <section>
                <div className="bg-[#0C60C4] max-w-screen-xl xl:mx-16 2xl:mx-auto mx-auto border rounded-3xl grid grid-cols-2 text-white">
                    <div className="px-24 py-10">
                        <div className="flex items-center gap-2 px-2 mb-3 bg-white rounded-full w-fit">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span className="text-primary">Platform</span>
                        </div>
                        <h2 className="my-4 text-5xl font-semibold">
                            Unlock your trading potential
                        </h2>
                        <p className="font-extralight">
                            See for yourself why is the broker of choice for
                            over <br /> 800,000 traders and 64,000 partners
                        </p>
                        <div className="mt-6 space-x-2">
                            <Button className="px-8 py-6 bg-white rounded-full text-primary">
                                Open Account
                            </Button>
                            <Button
                                variant={"outline"}
                                className="px-8 py-6 bg-transparent bg-white rounded-full bg-opacity-10"
                            >
                                {/* <img
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561253/Frame_jflevp.svg"
                                    alt=""
                                    className="w-4"
                                /> */}
                                Customer Support
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="w-[70%] absolute top-[-6rem]"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561267/KV_CTA-Desktop_hzqyfu.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="bg-white h-[100px]"></div>
            </section>
        </>
    );
};
