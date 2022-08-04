import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import "./Home.scss";

function Home() {
  return (
    <main className="index">
      <Header />
      <Hero />
      <Header title="FEATURED PROJECTS" subHeader={true} />
      <Projects />
      <Header title="CONTACT" subHeader={true} />
      <Contact />
    </main>
  );
}
export default Home;
