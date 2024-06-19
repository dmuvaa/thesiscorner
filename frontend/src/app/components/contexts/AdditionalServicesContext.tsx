import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdditionalService {
  title: string;
  price: number;
}

interface AdditionalServicesContextProps {
  selectedServices: AdditionalService[];
  toggleService: (service: AdditionalService) => void;
}

const AdditionalServicesContext = createContext<AdditionalServicesContextProps | undefined>(undefined);

export const AdditionalServicesProvider = ({ children }: { children: ReactNode }) => {
  const [selectedServices, setSelectedServices] = useState<AdditionalService[]>([]);

  const toggleService = (service: AdditionalService) => {
    setSelectedServices((prevSelectedServices) => {
      if (prevSelectedServices.some((s) => s.title === service.title)) {
        return prevSelectedServices.filter((s) => s.title !== service.title);
      } else {
        return [...prevSelectedServices, service];
      }
    });
  };

  return (
    <AdditionalServicesContext.Provider value={{selectedServices, toggleService}}>
      {children}
    </AdditionalServicesContext.Provider>
  );
};

export const useAdditionalServicesContext = () => {
  const context = useContext(AdditionalServicesContext);
  if (!context) {
    throw new Error('useAdditionalServicesContext must be used within an AdditionalServicesProvider');
  }
  return context;
};