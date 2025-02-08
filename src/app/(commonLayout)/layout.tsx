import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Navbar />
      <div className="w-[90%] mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
