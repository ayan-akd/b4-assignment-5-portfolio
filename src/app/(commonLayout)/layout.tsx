import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <AuroraBackground className="flex-1">
        <div className="w-[90%] mx-auto py-8">
          {children}
        </div>
      </AuroraBackground>
      <Footer />
    </div>
  );
};

export default CommonLayout;