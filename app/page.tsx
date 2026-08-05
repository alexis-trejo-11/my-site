import Skills from "./hero/Skills";
import Hero from "./hero/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="dashed-divider my-8"></div>
      <Skills />
    </>
  );
}
