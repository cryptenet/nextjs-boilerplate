import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Index.module.css';

const IndexPage = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Cryptenet | NextJS</title>
    </Head>
    <section className={styles.container}>
      <Image src="/cryptenet.png" height="80" width="400" />
      <h1>NextJS Boilerplate</h1>
    </section>
  </>
);

export default IndexPage;
