import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface Country {
  name: string;
  code: string;
  displayName: string;
  image: string;
}

const countries: Country[] = [
  { code: '+62', name: 'ID', displayName: 'INDONESIAN', image: '/images/ind.svg' },
  { code: '+1', name: 'US', displayName: 'ENGLISH', image: '/images/en.svg' },
  { code: '+84', name: 'VN', displayName: 'VIETNAMESE', image: '/images/vn.svg' },
  { code: '+27', name: 'ZA', displayName: 'ZULU', image: '/images/zu.svg' },
  { code: '+255', name: 'TZ', displayName: 'SWAHILI', image: '/lang/sw.svg' },
  { code: '+27', name: 'ZA', displayName: 'AFRIKAANS', image: '/images/af.svg' },
  { code: '+66', name: 'TH', displayName: 'THAI', image: '/images/th.svg' },
  { code: '+92', name: 'PK', displayName: 'URDU', image: '/lang/ur.svg' },
  { code: '+91', name: 'IN', displayName: 'HINDI', image: '/images/hi.svg' },
  { code: '+7', name: 'RU', displayName: 'RUSSIAN', image: '/images/ru.svg' },
  { code: '+34', name: 'ES', displayName: 'SPANISH', image: '/images/es.svg' },
  { code: '+49', name: 'DE', displayName: 'GERMAN', image: '/images/de.svg' },
  { code: '+39', name: 'IT', displayName: 'ITALIAN', image: '/images/it.svg' },
  { code: '+966', name: 'SA', displayName: 'ARABIC', image: '/images/ar.svg' },
  { code: '+33', name: 'FR', displayName: 'FRENCH', image: '/images/fr.svg' },
  { code: '+351', name: 'PT', displayName: 'PORTUGUESE', image: '/images/pt.svg' },
  { code: '+86', name: 'CN', displayName: 'CHINESE (SIMPLIFIED)', image: '/images/cn.svg' },
  { code: '+852', name: 'HK', displayName: 'CHINESE (TRADITIONAL)', image: '/images/zh.svg' },
  { code: '+82', name: 'KR', displayName: 'KOREAN', image: '/images/ko.svg' },
];

const DropdownForNumberPhone: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(countries[0]); // Default to first country

  const selectCountry = (country: Country) => {
    console.log('Selected country:', country);
    setSelectedCountry(country);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="space-x-2" variant="ghost">
          <img
            src={`https://flagsapi.com/${selectedCountry?.name ?? 'ID'}/flat/24.png`}
            alt="Flag"
            className="w-5 h-5"
          />
          <span>{selectedCountry?.code ?? '+62'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown-container">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            onClick={() => selectCountry(country)}
            className="flex items-center space-x-2"
          >
            <img
              src={`https://flagsapi.com/${country.name}/flat/24.png`}
              alt="Flag"
              className="w-5 h-5 mr-2"
            />
            <span>{country.displayName}</span>
            <span className="ml-auto">{country.code}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownForNumberPhone;
