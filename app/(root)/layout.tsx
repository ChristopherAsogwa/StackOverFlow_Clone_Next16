import Navbar from "@/components/navigation/navbar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="py-9">{children}</div>
    </main>
  );
};

export default RootLayout;
