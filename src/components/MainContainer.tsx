import { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <main className="min-h-screen w-full bg-white text-black">
      {children}
    </main>
  );
};

export default MainContainer;
