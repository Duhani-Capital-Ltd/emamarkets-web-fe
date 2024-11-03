import { Button } from "@/components/ui/button";
import { FeaturesCarousel } from "./FeatureCarousel";

export const Hero = () => {
    return (
        <>
            <section className="bg-[#f8fafb]">
                <div className="grid items-center max-w-screen-xl grid-cols-2 mx-auto xl:px-16 2xl:px-0">
                    <div className="">
                        <span className="bg-[#eceff3] flex w-fit rounded-full py-2 px-3">
                            🎉 Announcing our $14M Fundarise{" "}
                            <svg
                                className="w-6 h-6 text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 12H5m14 0-4 4m4-4-4-4"
                                />
                            </svg>
                        </span>
                        <h1 className="my-6 text-6xl font-bold">
                            Empower Your Trade Seamless and Secure Experince
                        </h1>
                        <p className="w-[75%] text-lg">
                            Trade with confidence using our advanced platform,
                            designed to provide you with a secure, transparent,
                            and reliable trading environment.
                        </p>
                        <Button className="px-6 py-6 mt-8 text-sm rounded-full">
                            Open an Account
                        </Button>
                    </div>
                    <div className="">
                        <img
                            className=""
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561268/KV_Hero-Desktop_t5bvli.png"
                            alt=""
                        />
                    </div>
                </div>
                <FeaturesCarousel />
            </section>
        </>
    );
};
