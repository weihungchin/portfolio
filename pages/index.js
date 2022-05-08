import Projects from "../components/Projects/Projects";
import Layout from "../layout/Layout";
import Landing from "../components/Landing/Landing";
import Tech from "../components/Tech/Tech";
import About from "../components/About/About";
import Head from "next/head";

const Home = () => {
  { console.log("🤓 Nothing to see here")}
  return (
    <Layout>
      <Head>
        <title>WeiHung | Full-stack Developer | Porfolio</title>
        <meta name="description" content="Wei Hung is a full-stack web developer specializing in Angular." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.weihung.tech" />
        <meta property="og:title" content="WeiHung | Full-stack Developer | Porfolio" />
        <meta
          property="og:description"
          content="Wei Hung is a full-stack web developer specializing in Angular."
        />
      </Head>
      <Landing />
      <Tech />
      <Projects />
      <About />
    </Layout>
  );
};
export default Home;
