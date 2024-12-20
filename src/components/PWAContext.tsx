'use client'

import React, { createContext, useContext, useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
  prompt(): Promise<void>;
}

interface PwaContextProps {
  deferredPrompt: BeforeInstallPromptEvent | null;
  setDeferredPrompt: React.Dispatch<React.SetStateAction<BeforeInstallPromptEvent | null>>;
}

const PwaContext = createContext<PwaContextProps | undefined>(undefined);

export const usePwaContext = () => {
  const context = useContext(PwaContext);
  if (!context) {
    throw new Error("usePwaContext must be used within a PwaProvider");
  }
  return context;
};

export const PwaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);
    };
  }, []);

  return (
    <PwaContext.Provider value={{ deferredPrompt, setDeferredPrompt }}>
      {children}
    </PwaContext.Provider>
  );
};
