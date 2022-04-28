import Image from "next/image";

const Top = () => {
  return (
    <div>
      <h1 className="title">きゃらめるラボラトリー</h1>
      <Image 
        src="/images/caramel_top.jpg"
        alt="caramel_top"
        width="500"
        height="375"
      />

    </div>
  );
};

export default Top;
