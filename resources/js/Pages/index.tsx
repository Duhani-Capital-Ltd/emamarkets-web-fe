import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Navbar } from "@/Components/nav/Nav";
import { Hero } from "@/Components/hero/Hero";
import { Feature } from "@/Components/feature/Feature";
import { Instrument } from "@/Components/instrument/Instrument";
import { Platform } from "@/Components/platform/Platform";
import { AccountType } from "@/Components/accountType/AccountType";
import { Blog } from "@/Components/blogs/Blogs";
import { CallToAction } from "@/Components/CTA/CallToAction";
import { Footer } from "@/Components/footer/Footer";

export default function Index({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const title = "Welcome to";
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
            <Feature />
            <Instrument />
            <Platform />
            <AccountType />
            <Blog />
            <CallToAction />
            <Footer />
        </>
    );
}
