import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Fərəh Feyzullayev">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://pyxis.nymag.com/v1/imgs/538/0ad/6133a245424105e22932c22ba2f5b48644-1-The-Great-Gatsby-Book.2x.rsocial.w600.jpg"
        alt="gatsby movie"
      />
    </Layout>
  );
};

export default IndexPage;
