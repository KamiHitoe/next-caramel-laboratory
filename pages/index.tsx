import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Caramel Laboratory</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <h1>This is an index page.</h1>
        <Footer />
      </main>

    </div>
  )
};

export default Home;
