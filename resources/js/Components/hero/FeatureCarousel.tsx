import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export const FeaturesCarousel = () => {
    const features = [
        { title: "No Overnight Fees", description: "Enjoy trading without worrying about overnight or administrative fees. offering a cost-effective solution for your trading needs", icon: 'https://res.cloudinary.com/dnsekavtx/image/upload/v1730561251/Icon-20_pqc94d.svg' },
        { title: "Stable Spreads", description: "Experience consistent and stable spreads, allowing for more predictable and efficient trading performance.", icon: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561252/Icon-19_yfjr3c.svg" },
        { title: "Easy Management", description: "Manage your trades seamlessly with our intuitive platform. designed for ease and conveince", icon: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561249/Icon-18_lyyrvl.svg" },
        { title: "Negative Balance Protection", description: "Manage your trades seamlessly with our intuitive platform. designed for ease and conveince", icon: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561253/Icon-17_szqofq.svg" },
        { title: "Regulated", description: "Manage your trades seamlessly with our intuitive platform. designed for ease and conveince", icon: "https://res.cloudinary.com/dnsekavtx/image/upload/v1730561254/Icon-21_aymbqz.svg" },
        // Tambahkan item lain sesuai kebutuhan
    ];

    return (
        <div className="bg-white py-10">
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={3000} // Kecepatan scroll
                modules={[Autoplay]}
                className="flex items-center"
            >
                {features.map((feature, index) => (
                    <SwiperSlide key={index} className="">
                        <div className='flex items-start px-10 gap-2'>
                            <img className='' src={feature.icon} alt="" />
                            <div className=''>
                                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                                <p className="text-sm">{feature.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
