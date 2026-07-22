import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import FeaturedProjects from '@/components/FeaturedProjects';
import GithubRepos from '@/components/GithubRepos';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <GithubRepos />
      <Footer />
    </main>
  );
}
