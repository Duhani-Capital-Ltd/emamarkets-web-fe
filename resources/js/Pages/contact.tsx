import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Navbar } from "@/Components/nav/Nav";
import { Feature } from "@/Components/feature/Feature";
import { Instrument } from "@/Components/instrument/Instrument";
import { Platform } from "@/Components/platform/Platform";
import { AccountType } from "@/Components/accountType/AccountType";
import { Blog } from "@/Components/blogs/Blogs";
import { CallToAction } from "@/Components/CTA/CallToAction";
import { Footer } from "@/Components/footer/Footer";
import { Button } from "@/components/ui/button";

export default function Index({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const title = "Contact us";
    const description =
        "EMA Markets offers a secure and transparent platform for multi-asset trading. Customize your trading experience with a variety of account types and platform features designed to fit your goals.";
    const imageUrl = "https://example.com/image.jpg"; // Ganti dengan URL gambar yang relevan
    const imageType = "image/jpeg";
    const imageWidth = "1200";

    return (
        <>
            <Head>
                {/* Standard Meta Tags */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:secure_url" content={imageUrl} />
                <meta property="og:image:type" content={imageType} />
                <meta property="og:image:width" content={imageWidth} />
                <meta property="og:url" content="https://example.com/" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imageUrl} />

                {/* Favicon */}
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>

            <Navbar />
            <Hero />
            <ContactSection />
            <CallToAction />
            <Footer />
        </>
    );
}
export const Hero = () => {
    return (
        <>
            <section
                className="relative py-32 bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/dnsekavtx/image/upload/v1730668140/contact-hero_modkkz.png")`, // replace with your image URL
                }}
            >
                <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg"></div>{" "}
                {/* Glass effect with 10% opacity */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
                    <span className="px-4 py-2 mb-4 text-sm bg-gray-700 rounded-full bg-opacity-80">
                        Contact Us
                    </span>
                    <h1 className="text-5xl font-semibold">
                        Duhani Capital Contact Us
                    </h1>
                </div>
            </section>
        </>
    );
};
export const ContactSection = () => {
    return (
        <>
            <section className="max-w-screen-xl py-20 mx-auto text-center">
                {/* Section Title */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-lg text-primary">Features</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-800">
                    How to Reach Us
                </h2>
                <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
                    Our dedicated customer support team is readily available to
                    assist you.
                </p>

                <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Live Chat */}
                    <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md">
                        <div className="p-4 mb-4 bg-blue-500 rounded-full">
                            <svg
                                className="w-8 h-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M20 13V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h6l4 4 4-4h0a2 2 0 002-2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Live Chat
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Engage with our live chat representatives 24/5 for
                            quick and efficient troubleshooting.
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md">
                        <div className="p-4 mb-4 bg-blue-500 rounded-full">
                            <svg
                                className="w-8 h-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM3 8l7.39 5.26a2 2 0 002.22 0L20 8"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Email
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Reach out to our support team via email at{" "}
                            <a
                                href="mailto:support@duhanicapital.com"
                                className="text-blue-500 hover:underline"
                            >
                                support@duhanicapital.com
                            </a>{" "}
                            and expect a prompt response.
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-md">
                        <div className="p-4 mb-4 bg-blue-500 rounded-full">
                            <svg
                                className="w-8 h-8 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5h18M3 12h18m-8 7h8"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">
                            Phone
                        </h3>
                        <p className="mt-2 text-gray-600">
                            For direct assistance, call us at +355 52 420 144.
                            Our phone lines are accessible Monday-Friday, 9:00
                            AM to 5:00 PM GMT.
                        </p>
                    </div>
                </div>
                <div className="grid items-center gap-8 md:grid-cols-2 my-14">
                    {/* Image Section */}
                    <div>
                        <img
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730667568/socmed_qis9vg.png" // replace with your image URL
                            alt="Social Media Icons"
                            className="rounded-xl"
                        />
                    </div>

                    {/* Social Media Links Section */}
                    <div className="text-left">
                        <span className="text-lg font-medium text-blue-500">
                            ● Social Media
                        </span>
                        <h3 className="mt-2 text-5xl font-bold text-left text-gray-800 mb-7">
                            Connect with Us on
                            <br />
                            Social Media
                        </h3>
                        <div className="flex flex-col space-y-3 mt-7">
                            <a
                                href="#"
                                className="flex items-center text-lg text-blue-500 hover:underline"
                            >
                                <img
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730668438/Icon_pozsj2.png"
                                    alt=""
                                    className="w-8"
                                />
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="flex items-center text-lg text-blue-500 hover:underline"
                            >
                                <img
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730668437/Icon-1_ge0b14.png"
                                    alt=""
                                    className="w-8"
                                />
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="flex items-center text-lg text-blue-500 hover:underline"
                            >
                                <img
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730668436/Icon-2_e6hyw0.png"
                                    alt=""
                                    className="w-8"
                                />{" "}
                                Twitter
                            </a>
                            <a
                                href="#"
                                className="flex items-center text-lg text-blue-500 hover:underline"
                            >
                                <img
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730668435/Icon-3_kgx1oa.png"
                                    alt=""
                                    className="w-8"
                                />
                                WhatsApp
                            </a>
                            <a
                                href="#"
                                className="flex items-center text-lg text-blue-500 hover:underline"
                            >
                                <img
                                    src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730668435/Icon-4_zmrjvk.png"
                                    alt=""
                                    className="w-8"
                                />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
