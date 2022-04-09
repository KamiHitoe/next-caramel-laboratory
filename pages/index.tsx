import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="title">きゃらめるラボラトリー</h1>
      <Image 
        src="/images/caramel_top.jpg"
        alt="caramel_top"
        width="700"
        height="500"
      />

    </div>
  )
};

export default Home;
