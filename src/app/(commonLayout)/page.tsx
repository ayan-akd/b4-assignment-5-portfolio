import About from "@/components/home-components/About";
import FeaturedProjects from "@/components/home-components/FeaturedProjects";
import Intro from "@/components/home-components/Intro";
import Skills from "@/components/home-components/Skills";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Intro />
      <About />
      <Skills />
      <FeaturedProjects />
    </div>
  );
}
