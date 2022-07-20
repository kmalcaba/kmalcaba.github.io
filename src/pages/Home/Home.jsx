import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import "./Home.scss";

function Home() {
  return (
    <>
      <Hero />
      <Header title="PROJECTS" subHeader={true} />
    </>
  );
}
export default Home;
