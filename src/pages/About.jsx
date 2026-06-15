import AboutBanner from "../components/AboutBanner";
import AboutHero from "../components/AboutHero";

export default function About() {
  return (
    <main className="mx-auto w-[92%] py-20">
      <AboutHero />
      <AboutBanner />
    </main>
  );
}
