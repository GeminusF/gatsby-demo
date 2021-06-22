// Step 1: Import your component
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        src="https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/05/07/gatsby-mti-jacket-3_4.jpg"
        alt="gatsby movie"
      />
    </Layout>
  );
};

// Step 3: Export your component
export default AboutPage;
