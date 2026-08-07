import Skills from "./hero/Skills";
import Hero from "./hero/Hero";

export default function HomePage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-16 pb-32">
      <Hero />
      <div className="dashed-divider my-8"></div>
      <Skills />
    </div>
  );
}
