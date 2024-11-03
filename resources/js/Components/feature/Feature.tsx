import { Button } from "@/components/ui/button"

export const Feature = () => {
    return (
        <>
            <section className="max-w-screen-xl xl:px-16 2xl:px-0 mx-auto py-20 text-center">
                <div className="flex items-center gap-2 text-center justify-center mb-3">
                    <div className="bg-primary w-2 h-2 rounded-full"></div>
                    <span className="text-primary">Features</span>
                </div>
                <h2 className="text-4xl font-semibold mb-3">Why it's better to trade with us</h2>
                <p className="text-gray-600">Trade with confidience with our platform for secure and transaparent trading. <br />Trade with confidience with our platform for secure</p>
                <div className="grid grid-cols-4 gap-3 mt-8">
                    <div className="col-span-1 space-y-3">
                        <div className="border rounded-md p-5 text-start">
                            <h3 className="text-primary text-3xl font-semibold mb-4">No minimum deposite</h3>
                            <h4 className="font-semibold text-lg mb-2">Trade with confidience</h4>
                            <p className="text-gray-600">Start trading instantly without the need for a minimum deposite, offering you flexibility and convience</p>
                        </div>
                        <div className="border rounded-md p-5 text-start">
                            <h3 className="text-primary text-3xl font-semibold mb-4">1:1000</h3>
                            <h4 className="font-semibold text-lg mb-2">Laverage for every trades</h4>
                            <p className="text-gray-600">Amplify your trading potential with up to 1:1000 leverage, giving your more power in each trade</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <img className="" src="https://res.cloudinary.com/dnsekavtx/image/upload/v1730561265/Illustration_Tab-Mobile_jnmfdu.png" alt="" />
                    </div>
                    <div className="col-span-1 space-y-3">
                        <div className="border rounded-md p-5 text-start">
                            <h3 className="text-primary text-3xl font-semibold mb-4">0.7 pips</h3>
                            <h4 className="font-semibold text-lg mb-2">Spreads for each instrument</h4>
                            <p className="text-gray-600">Benefit from competitive spreads as low as 0.7 pips, ensuring better opportunities for success</p>
                        </div>
                        <div className="border rounded-md p-5 text-start">
                            <h3 className="text-primary text-3xl font-semibold mb-4">0%</h3>
                            <h4 className="font-semibold text-lg mb-2">Commission every transactions</h4>
                            <p className="text-gray-600">Enjoy zero commission on all your trades, maximin your profits without extra costs</p>
                        </div>
                    </div>
                </div>
                <Button className="rounded-full py-6 px-6 mt-10">Open an Account</Button>
            </section>
        </>
    )
}
