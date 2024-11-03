export const Instrument = () => {
    return (
        <>
            <section className="bg-[#1A1B25]">
                <div className="max-w-screen-xl xl:px-16 2xl:px-0 mx-auto py-14 text-center">
                    <div className="flex items-center gap-2 text-center justify-center mb-3 bg-[#f8fafb] w-fit mx-auto rounded-full px-3">
                        <div className="bg-primary w-2 h-2 rounded-full"></div>
                        <span className="text-primary">Instruments</span>
                    </div>
                    <h2 className="text-[#f8fafb] text-5xl font-medium mb-5">Build your multi asset portfolio</h2>
                    <p className="text-[#f8fafb] font-extralight mb-10">
                        Trade with confidence with our platform for secure and transparent trading.
                        <br />
                        Trade with confidence with our platform for secure
                    </p>

                    {/* Tabel */}
                    <div className="overflow-x-auto px-5">
                        <table className="w-full text-left text-sm text-[#f8fafb] border-collapse">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="px-6 py-3">Instruments</th>
                                    <th className="px-6 py-3">Leverage</th>
                                    <th className="px-6 py-3">Avg. spread, pips</th>
                                    <th className="px-6 py-3">Swap-free</th>
                                    <th className="px-6 py-3">Categories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { instrument: "XAUUSD", leverage: "Customizable", spread: "11.25", swapFree: "Available", category: "Metals" },
                                    { instrument: "USOIL", leverage: "1:200", spread: "1.2", swapFree: "Available", category: "Energies" },
                                    { instrument: "EURUSD", leverage: "Customizable", spread: "0.6", swapFree: "Available", category: "Currencies" },
                                    { instrument: "US30", leverage: "1:400", spread: "1.4", swapFree: "Swap Applied", category: "Indices" },
                                    { instrument: "AAPL", leverage: "1:20", spread: "1.2", swapFree: "Not Available", category: "Stocks" },
                                ].map((item, index) => (
                                    <tr key={index} className="border-b border-x border-gray-700">
                                        <td className="px-6 py-4">{item.instrument}</td>
                                        <td className="px-6 py-4">{item.leverage}</td>
                                        <td className="px-6 py-4">{item.spread}</td>
                                        <td className="px-6 py-4">{item.swapFree}</td>
                                        <td className="px-6 py-4">
                                            {item.category} <span className="">&gt;</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Tombol Open Account */}
                    <div className="mt-10">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition">
                            Open Account
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
