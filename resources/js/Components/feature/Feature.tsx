import { Button } from "@/components/ui/button";

export const Feature = () => {
    return (
        <>
            <section className="max-w-screen-xl py-20 mx-auto text-center xl:px-16 2xl:px-0">
                <div className="flex items-center justify-center gap-2 mb-3 text-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-primary">Features</span>
                </div>
                <h2 className="mb-3 text-4xl font-semibold">
                    Why it's better to trade with us
                </h2>
                <p className="text-gray-600">
                    Trade with confidience with our platform for secure and
                    transparent trading.
                </p>
                <div className="grid grid-cols-4 gap-3 mt-8">
                    <div className="col-span-1 space-y-3">
                        <div className="p-5 border rounded-md text-start">
                            <h3 className="mb-4 text-3xl font-semibold text-primary">
                                No minimum deposite
                            </h3>
                            <h4 className="mb-2 text-lg font-semibold">
                                Trade with confidience
                            </h4>
                            <p className="text-gray-600">
                                Start trading instantly without the need for a
                                minimum deposite, offering you flexibility and
                                convience
                            </p>
                        </div>
                        <div className="p-5 border rounded-md text-start">
                            <h3 className="mb-4 text-3xl font-semibold text-primary">
                                1:1000
                            </h3>
                            <h4 className="mb-2 text-lg font-semibold">
                                Laverage for every trades
                            </h4>
                            <p className="text-gray-600">
                                Amplify your trading potential with up to 1:1000
                                leverage, giving your more power in each trade
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <img
                            className=""
                            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561265/Illustration_Tab-Mobile_jnmfdu.png"
                            alt=""
                        />
                    </div>
                    <div className="col-span-1 space-y-3">
                        <div className="p-5 border rounded-md text-start">
                            <h3 className="mb-4 text-3xl font-semibold text-primary">
                                0.7 pips
                            </h3>
                            <h4 className="mb-2 text-lg font-semibold">
                                Spreads for each instrument
                            </h4>
                            <p className="text-gray-600">
                                Benefit from competitive spreads as low as 0.7
                                pips, ensuring better opportunities for success
                            </p>
                        </div>
                        <div className="p-5 border rounded-md text-start">
                            <h3 className="mb-4 text-3xl font-semibold text-primary">
                                0%
                            </h3>
                            <h4 className="mb-2 text-lg font-semibold">
                                Commission every transactions
                            </h4>
                            <p className="text-gray-600">
                                Enjoy zero commission on all your trades,
                                maximin your profits without extra costs
                            </p>
                        </div>
                    </div>
                </div>
                <Button className="px-6 py-6 mt-10 rounded-full">
                    Open an Account
                </Button>
            </section>
        </>
    );
};
