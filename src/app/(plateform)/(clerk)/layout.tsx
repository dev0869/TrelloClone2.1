
export default function ClerkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

        <div className="flex justify-center h-screen items-center">{children}</div>
    
  );
}
