import React from 'react';

interface MainLayoutProps {
  sideBar: React.ReactNode;
  children: React.ReactNode;
}

export function MainLayout({
  sideBar,
  children,
}: MainLayoutProps) {
  return (
    <>
      <div>
        {sideBar}
      </div>
      <div>
        {children}
      </div>
    </>
  );
}