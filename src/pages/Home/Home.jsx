import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Projects from "../../components/Projects/Projects";
import "./Home.scss";

function Home() {
  return (
    <>
      <Hero />
      <Header title="FEATURED PROJECTS" subHeader={true} />
      <Projects>
        <ProjectCard />
      </Projects>
    </>
  );
}
export default Home;
