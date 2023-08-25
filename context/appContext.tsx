'use client'
import React, {createContext,  useContext, useEffect, useState} from 'react';



const AppContex = createContext<AppContexData | null>(null);

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const value = useProviderApp();
  return (
    <AppContex.Provider value={value}>{children}</AppContex.Provider>
  );
};
const useProviderApp = () => {
  const [editPost,setEditPost]=useState<any>();

  return {
    editPost,setEditPost
  };
};
type AppContexData = ReturnType<typeof useProviderApp>;

export const useAppContext = () => {
  const appState = useContext(AppContex);
  if (!appState) {
    throw new Error('useProfile must be used inside ProfileContexProvider');
  }
  return appState;
};