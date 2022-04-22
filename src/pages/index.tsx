import type { NextPage } from "next";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBoxText = styled("p")({
  padding: "1rem",
  textAlign: "left",
});

const Home: NextPage = () => {
  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={6}>
          <h2 className="subtitle">ネックレス</h2>
          <StyledBoxText>
            コーディネートの一部として、首元に可愛らしさをプラスしてみませんか？
          </StyledBoxText>
        </Grid>
        <Grid item md={6}>
          <Image src="/images/sea_glass_bl.jpg" width="250x" height="250x" />
        </Grid>

        <Grid item md={6}>
          <Image src="/images/temari_red.jpg" width="250x" height="250x" />
        </Grid>
        <Grid item md={6}>
          <h2 className="subtitle">ピアス＊イアリング</h2>
          <StyledBoxText>
            季節に合わせたデザインから、１年中お使いいただけるデザインまで豊富に取り揃えています。一部を除き、ピアス⇔イヤリングのパーツ変更も可能です
          </StyledBoxText>
        </Grid>

        <Grid item md={6}>
          <h2 className="subtitle">ヘアアクセサリー</h2>
          <StyledBoxText>
            ヘアゴム・ヘアピン・ポニーフックなど日常に、特別な日に、様々なシーンでお使いいただけます
          </StyledBoxText>
        </Grid>
        <Grid item md={6}>
          <Image src="/images/sea_urchin_hairpin.jpg" width="250x" height="250x" />
        </Grid>

        <Grid item md={6}>
          <Image src="/images/caramel_top.jpg" width="250px" height="250px" />
        </Grid>
        <Grid item md={6}>
          <h3 className="subtitle">about Caramel Labo</h3>
          <StyledBoxText>はじめまして、きゃらめるラボラトリーです。 きゃらめるラボラトリーは、日常を彩る"きゃらきゃらめるめる"なアクセサリー類をお手頃価格にて販売しています。 あなたのお気に入りを見つけてみませんか</StyledBoxText>
          <StyledBoxText className="warning">※手作りのためほとんどが１点物ですが、複数ご希望の場合は、お問い合わせフォームよりご相談ください</StyledBoxText>
        </Grid>
        
      </Grid>

    </div>
  );
};

export default Home;
