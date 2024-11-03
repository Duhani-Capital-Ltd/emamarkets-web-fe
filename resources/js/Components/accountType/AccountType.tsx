import { Button } from "@/components/ui/button";

export const AccountType = () => {
    const accountTypes = [
        {
            label: "Starters",
            title: "Micro",
            features: [
                "As low as 1.2 pips",
                "No Commission",
                "Swap Free",
                "No Minimum Deposit",
                "Margin Call 100%",
                "Stop Out 30%",
                "FX Leverage up to 1000",
                "Gold Leverage up to 500",
            ],
            isHighlighted: false,
        },
        {
            label: "Starters",
            title: "Standard",
            features: [
                "As low as 1.2 pips",
                "No Commission",
                "Swap Free",
                "No Minimum Deposit",
                "Margin Call 100%",
                "Stop Out 30%",
                "FX Leverage up to 1000",
                "Gold Leverage up to 500",
            ],
            isHighlighted: false,
        },
        {
            label: "Advance",
            title: "Professional",
            features: [
                "As low as 0.6 pips",
                "No Commission",
                "Swap Free",
                "$1000 Minimum Deposit",
                "Margin Call 100%",
                "Stop Out 30%",
                "FX Leverage up to 1000",
                "Gold Leverage up to 500",
            ],
            isHighlighted: true,
        },
        {
            label: "In-Demand",
            title: "Low Spread",
            features: [
                "As low as 0.6 pips",
                "No Commission",
                "Swap Free",
                "No Minimum Deposit",
                "Margin Call 50%",
                "Stop Out 20%",
                "FX Leverage up to 1000",
                "Gold Leverage up to 500",
            ],
            isHighlighted: false,
        },
        {
            label: "In-Demand",
            title: "Zero Spread",
            features: [
                "As low as 0.0 pips",
                "$5 Commission",
                "Swap Free",
                "No Minimum Deposit",
                "Margin Call 100%",
                "Stop Out 30%",
                "FX Leverage up to 1000",
                "Gold Leverage up to 500",
            ],
            isHighlighted: false,
        },
    ];

    return (
        <>
            <section className="bg-[#f8fafb]">
                <div className="max-w-screen-xl py-10 mx-auto text-center xl:px-16 2xl:px-0">
                    <div className="flex items-center gap-2 mx-auto mb-3 rounded-full w-fit">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-primary">Account Types</span>
                    </div>
                    <h2 className="mb-5 text-5xl font-semibold">
                        Maximize your benefits with <br /> the right account
                    </h2>
                    <p className="text-gray-600 w-[60%] mx-auto">
                        Open your account today and tailor your experience to
                        fit your goals. It's easy to start - customize your
                        settings and dive into EMA Markets
                    </p>
                    <div className="grid grid-cols-1 gap-3 px-5 mt-10 md:grid-cols-3 lg:grid-cols-5">
                        {accountTypes.map((account, idx) => (
                            <div
                                key={idx}
                                className={`rounded-md p-5 ${
                                    account.isHighlighted
                                        ? "bg-[#0c60c4] text-white"
                                        : "bg-white text-black"
                                }`}
                            >
                                <p
                                    className={`${
                                        account.isHighlighted
                                            ? "text-white-800 text-lg font-semibold"
                                            : "text-blue-500 text-lg font-semibold"
                                    } rounded-full w-fit mb-3`}
                                >
                                    {account.label}
                                </p>
                                <h4
                                    className={`text-2xl mb-2 text-left ${
                                        account.isHighlighted
                                            ? "capitalize"
                                            : ""
                                    }`}
                                >
                                    {account.title}
                                </h4>
                                <hr
                                    className={
                                        account.isHighlighted
                                            ? "border-white"
                                            : "border-gray-300"
                                    }
                                />
                                <ul className="mt-3 space-y-4 text-sm font-extralight">
                                    {account.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2 text-start"
                                        >
                                            <img
                                                src={
                                                    account.isHighlighted
                                                        ? "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561263/Icon-1_lwgodi.svg"
                                                        : "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561261/Icon_lgl26w.svg"
                                                }
                                                alt=""
                                                className="w-4 h-4"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center w-full mt-10">
                        <Button className="px-8 py-6 text-white transition rounded-full">
                            Open an Account
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};
