"use client";

import { createContext, useState, useContext } from "react";
import { NavigationType } from "@/lib/types";

export type NavigationStateType = {
  navigation: NavigationType;
  setNavigation: (navigation: NavigationType) => void;
};

export const NavigationContext = createContext<NavigationStateType>({
  navigation: NavigationType.CODING,
  setNavigation: () => {},
});

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [navigation, setNavigation] = useState<NavigationType>(
    NavigationType.CODING
  );

  const value = { navigation, setNavigation };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
