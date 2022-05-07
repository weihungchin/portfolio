import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects/Projects";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Projects />
    </Layout>
  );
};
export default Home;
