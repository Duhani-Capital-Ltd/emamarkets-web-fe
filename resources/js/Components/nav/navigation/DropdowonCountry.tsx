import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

// Data negara
const countries = [
    { code: "us", name: "ENGLISH", image: "/images/en.svg" },
    { code: "vn", name: "VIETNAMESE", image: "/images/vn.svg" },
    { code: "za", name: "ZULU", image: "/images/zu.svg" },
    { code: "za", name: "SWAHILI", image: "/lang/sw.svg" },
    { code: "af", name: "AFRIKAANS", image: "/images/af.svg" },
    { code: "th", name: "THAI", image: "/images/th.svg" },
    { code: "sa", name: "URDU", image: "/lang/ur.svg" },
    { code: "in", name: "HINDI", image: "/images/hi.svg" },
    { code: "ru", name: "RUSSIAN", image: "/images/ru.svg" },
    { code: "es", name: "SPANISH", image: "/images/es.svg" },
    { code: "de", name: "GERMAN", image: "/images/de.svg" },
    { code: "it", name: "ITALIAN", image: "/images/it.svg" },
    { code: "ar", name: "ARABIC", image: "/images/ar.svg" },
    { code: "fr", name: "FRENCH", image: "/images/fr.svg" },
    { code: "pt", name: "PORTUGUESE", image: "/images/pt.svg" },
    { code: "cn", name: "CHINESE (SIMPLIFIED)", image: "/images/cn.svg" },
    { code: "cn", name: "CHINESE (TRADITIONAL)", image: "/images/zh.svg" },
    { code: "kr", name: "KOREAN", image: "/images/ko.svg" },
    { code: "id", name: "INDONESIAN", image: "/images/ind.svg" },
]

// Definisikan tipe data Country
type Country = {
    code: string;
    name: string;
    image: string;
}

export const DropdownCountry = () => {
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]) // Default country

    const handleSelectCountry = (country: Country) => {
        setSelectedCountry(country)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2">
                {/* Gambar bendera dan kode negara yang dipilih menggunakan flagsapi.com */}
                <img
                    src={`https://flagsapi.com/${selectedCountry.code.toUpperCase()}/flat/24.png`}
                    alt={`${selectedCountry.name} flag`}
                    className="w-5 h-5"
                />
                <span>{selectedCountry.code.toUpperCase()}</span>
                <div>
                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>

                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
                {countries.map((country) => (
                    <DropdownMenuItem
                        key={country.code}
                        onClick={() => handleSelectCountry(country)}
                        className="flex items-center space-x-2"
                    >
                        <img src={`https://flagsapi.com/${country.code.toUpperCase()}/flat/24.png`} alt={`${country.name} flag`} className="w-5 h-5" />
                        <span>{country.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
