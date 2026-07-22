import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import GithubRepos from '@/components/GithubRepos';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import ShaderBackground from '@/components/ShaderBackground';
import SnakeGameCTA from '@/components/SnakeGameCTA';
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <main className="relative z-10 overflow-x-clip">
        <Nav />
        <Hero />
        <TechStack />
        <FeaturedProjects />
        <SnakeGameCTA />
        <GithubRepos />
        <Footer />
      </main>
    </>
  );
}
