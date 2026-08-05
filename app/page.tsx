import Skills from "./component/sections/Skills";
import Hero from "./component/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="dashed-divider my-8"></div>
      <Skills />
    </>
  );
}
