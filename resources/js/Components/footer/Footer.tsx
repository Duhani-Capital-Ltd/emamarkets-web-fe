export const Footer = () => {
    const icon = [
        'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561251/Icon_iqrbwh.svg',
        'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561247/Icon-9_jceteq.svg',
        'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561248/Icon-10_wh0nvq.svg',
        'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561249/Icon-11_atuzkr.svg',
        'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561250/Icon-12_ns3ypb.svg',
        'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561254/Icon-13_fbfu5n.svg',
        'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561252/Icon-14_znvwko.svg',
        'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561252/Icon-15_ciqks8.svg',
        'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561250/Icon-16_upfxza.svg'
    ]
    return (
        <>
            <section className="bg-[#0D0D12] text-gray-300">
                <div className="max-w-screen-xl xl:px-16 2xl:px-0 mx-auto py-10">
                    {/* Bagian atas - Links */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-white mb-8">
                        <div>
                            <h4 className="mb-3 font-semibold">Features</h4>
                            <ul className="space-y-1 font-extralight">
                                <li>Account</li>
                                <li>Markets</li>
                                <li>Platform</li>
                                <li>EMA Provides</li>
                                <li>Ease Trading</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Promotion</h4>
                            <ul className="space-y-1 font-extralight">
                                <li>Refer a Friend</li>
                                <li>30% Tradable Bonus</li>
                                <li>Seasonal Promotions</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Partner</h4>
                            <ul className="space-y-1 font-extralight">
                                <li>Introducing Broker</li>
                                <li>Affiliate CPA</li>
                                <li>Influencer</li>
                                <li>EMA Trainers</li>
                                <li>IB Loyalty</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">Company</h4>
                            <ul className="space-y-1 font-extralight">
                                <li>Story</li>
                                <li>Legal</li>
                                <li>Regulations</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-3 font-semibold">EMA Centre</h4>
                            <ul className="space-y-1 font-extralight">
                                <li>Education</li>
                                <li>EMA Discovery</li>
                                <li>Market Outlook</li>
                                <li>Trading Ideas</li>
                                <li>EMA TV</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border border-gray-700 p-4 rounded-3xl mb-10">
                        {/* Bagian Tengah - Kontak dan Alamat */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm text-gray-300 mb-8">
                            <div>
                                <h4 className="font-semibold mb-2">Registered Address:</h4>
                                <p>43 Great George Street, St Great George, Roseau, Dominica</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Physical Address:</h4>
                                <p>Rruga Pavaresia, Nd:129 H-5, Ap/27, Durres, Albania</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Email:</h4>
                                <p>support@emamarkets.com</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mt-4 mb-2">Phone Number:</h4>
                                <p>+355 524 20144</p>
                                <p>+355 524 20144</p>
                            </div>
                            <div>
                                <p>KYC & AML Policy</p>
                            </div>
                        </div>

                        {/* Bagian Ikon Sosial Media */}
                        <p className="mb-3">Follow Duhani Capital Global</p>
                        <div className="flex">
                            {icon.map((icon, idx) => (
                                <a key={idx} href="#" className="text-gray-300 hover:text-white transition">
                                    <img
                                        src={icon}
                                        alt={`${icon} icon`}
                                        className="w-14 h-14"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Bagian Bawah - Informasi Perusahaan */}
                    <div className="text-sm text-gray-500 border-t border-dashed border-gray-700 pt-8">
                        <p className="mb-4">
                            EMA Markets is registered in the British Virgin Islands with Company Registration: 2006432. EMA Markets, as a Group, is composed of Multiple Brands 100% (Wholly) owned, authorised and regulated in various jurisdictions through the following Subsidiaries: EMA Markets Registration Number: 2016/164943/07 and registered address: Dock Road Junction Cnr Dock Road and Stanley Street V&A Waterfront Cape Town 8001, South Africa. Authorised by the Financial Services Conduct Authority with FSP (Financial Services Provider) Number: 48248. Traze (Pty) Ltd does not carry out any Principal activities and is not an ODP. EMA Markets (Seychelles) Limited, is regulated as a Securities Dealer by the Financial Services Authority of Seychelles, license number: SD027. Its principal office is at: Office 1, Unit 3, 1st Floor, Dekk Complex, Plaisance, Mahe, Seychelles.
                        </p>
                        <p>
                            EMA Markets does not provide services for residents of certain countries such as the United States of America, Brazil, Canada, Egypt, Iran, and North Korea (Democratic People's Republic of Korea) and EU countries.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
