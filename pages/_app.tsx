// Third party
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { config } from "@fortawesome/fontawesome-svg-core";

// Custom
import "../styles/global.css";
import socialImage from "../public/images/socialImage.png";

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  const structuredDataPerson: Object = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Karl Sellergren",
    "url": "https://karlsellergren.se/about",
    "image": "https://karlsellergren.se/_next/image?url=%2Fimages%2Fsocial.png",
    "sameAs": [
      "https://www.linkedin.com/in/karlsellergren",
      "https://www.github.com/sakerhetspolisen",
      "https://karlsellergren.se",
      "https://www.karlsellergren.se"
    ],
    "jobTitle": "Freelancing web developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Sellergren"
    }  
  }

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/faq5ywx.css"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataPerson) }}
        />
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:image" content={'https://karlsellergren.se' + socialImage}/>
        <meta property="og:image" content={'https://karlsellergren.se' + socialImage}/>
        <meta property="og:type" content="website"/>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}
