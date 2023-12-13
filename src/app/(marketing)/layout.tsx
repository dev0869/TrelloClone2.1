import Navbar from "./_components/navbar";
export default function MarketLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
  
          <>
          <Navbar/>
          {children}</>
      
    );
  }
  