import type { NextPage } from "next";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemCard from "@/components/items/ItemCard";
// import { styled } from "@mui/material/styles";

const contents = [
  {
    imageSrc: "/images/sea_glass_bl.jpg",
    subtitle: "ネックレス",
    text: "コーディネートの一部として、首元に可愛らしさをプラスしてみませんか？",
  },
  {
    imageSrc: "/images/temari_red.jpg",
    subtitle: "ピアス＊イアリング",
    text: "季節に合わせたデザインから、１年中お使いいただけるデザインまで豊富に取り揃えています。一部を除き、ピアス⇔イヤリングのパーツ変更も可能です",
  },
  {
    imageSrc: "/images/sea_urchin_hairpin.jpg",
    subtitle: "ヘアアクセサリー",
    text: "ヘアゴム・ヘアピン・ポニーフックなど日常に、特別な日に、様々なシーンでお使いいただけます",
  },
  {
    imageSrc: "/images/caramel_top.jpg",
    subtitle: "きゃらめるらぼらとりーについて",
    text: "はじめまして、きゃらめるラボラトリーです。きゃらめるラボラトリーは、日常を彩るきゃらきゃらめるめるなアクセサリー類をお手頃価格にて販売しています。あなたのお気に入りを見つけてみませんか？"
  },
];

const Home: NextPage = () => {
  return (
    <div>
      {contents.map((e, i) => {
        if (i%2 === 0) {
          return (
            <ItemCard
              imageSrc={contents[i].imageSrc}
              subtitle={contents[i].subtitle}
              text={contents[i].text}
              side="left"
            />
          )
        } else {
          return (
            <ItemCard
              imageSrc={contents[i].imageSrc}
              subtitle={contents[i].subtitle}
              text={contents[i].text}
              side="right"
            />
          )
        }
      })}

      <p>※手作りのためほとんどが１点物ですが、複数ご希望の場合は、お問い合わせフォームよりご相談ください</p>

    </div>
  );
};

export default Home;
