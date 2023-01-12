import { createContext, PropsWithChildren, useState } from "react";

export type OverlayContextType = {
  isActive: boolean;
  setActive: (isActive: boolean) => void;
};

export const OverlayContext = createContext<OverlayContextType | null>(null);

export default function OverlayProvider({ children }: PropsWithChildren) {
  const [isActive, setActive] = useState(false);

  return (
    <OverlayContext.Provider value={{ isActive, setActive }}>
      {children}
    </OverlayContext.Provider>
  );
}
