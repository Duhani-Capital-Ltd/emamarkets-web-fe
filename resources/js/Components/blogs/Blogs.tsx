export const Blog = () => {
    return (
        <>
            <section className="max-w-screen-xl mx-auto my-20 text-center xl:px-16 2xl:px-0">
                <div className="flex items-center gap-2 mx-auto mb-3 rounded-full w-fit">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-primary">Blogs</span>
                </div>
                <h2 className="mb-4 text-5xl font-semibold">
                    Keep up with EMA
                </h2>
                <p className="text-base text-gray-600">
                    Stay on top of our news, product and technology updates,
                    events, partnership, and more
                </p>
                <div className="grid grid-cols-3 gap-4 mt-14">
                    <div className="">
                        <img
                            className="rounded-xl"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730620831/piggybank-rkkMvTwmitA-unsplash_rj0d1l.jpg"
                            alt=""
                        />
                        <div className="flex items-center gap-3 mt-5">
                            <p className="text-[#0677EF] bg-[#EDFAFF] py-1 px-3 rounded-full">
                                Trading
                            </p>
                            <p>December 2, 2018</p>
                        </div>
                        <div className="mt-5 text-start">
                            <h3 className="mb-2 text-2xl font-medium">
                                Popular Options Strategies
                            </h3>
                            <p className="mb-5 text-gray-600">
                                One of the major benefits is that options allow
                                for the systematic transfer of risk from someone
                                wishing.
                            </p>
                            <a className="text-[#0677EF]" href="#">
                                {"Learn more >"}
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <img
                            className="rounded-xl"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730620831/piggybank-rkkMvTwmitA-unsplash_rj0d1l.jpg"
                            alt=""
                        />
                        <div className="flex items-center gap-3 mt-5">
                            <p className="text-[#0677EF] bg-[#EDFAFF] py-1 px-3 rounded-full">
                                Swaption
                            </p>
                            <p>December 19, 2013</p>
                        </div>
                        <div className="mt-5 text-start">
                            <h3 className="mb-2 text-2xl font-medium">
                                Options Trading for Beginners
                            </h3>
                            <p className="mb-5 text-gray-600">
                                This blog explores various options trading
                                strategies, emphasizing the importance of
                                selecting the right.
                            </p>
                            <a className="text-[#0677EF]" href="#">
                                {"Learn more >"}
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <img
                            className="rounded-xl"
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730620831/piggybank-rkkMvTwmitA-unsplash_rj0d1l.jpg"
                            alt=""
                        />
                        <div className="flex items-center gap-3 mt-5">
                            <p className="text-[#0677EF] bg-[#EDFAFF] py-1 px-3 rounded-full">
                                Engineering
                            </p>
                            <p>August 2, 2013</p>
                        </div>
                        <div className="mt-5 text-start">
                            <h3 className="mb-2 text-2xl font-medium">
                                Hedging Fixed & Interest Rate
                            </h3>
                            <p className="mb-5 text-gray-600">
                                "Swaption" is just an option to swap financial
                                instruments, typically interest rates, between
                                two parties.
                            </p>
                            <a className="text-[#0677EF]" href="#">
                                {"Learn more >"}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
