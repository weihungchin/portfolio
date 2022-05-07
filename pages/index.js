import Projects from "../components/Projects/Projects";
import Layout from "../layout/Layout";
import Landing from "../components/Landing/Landing";
import Tech from "../components/Tech/Tech";
import About from "../components/About/About";

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Tech />
      <Projects />
      <About />
    </Layout>
  );
};
export default Home;
