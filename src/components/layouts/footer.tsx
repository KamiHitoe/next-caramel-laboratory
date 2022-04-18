import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/material/styles';

const StyledText = styled('p')({
  fontSize: "12px",
});

const Footer = () => {
  return (
    <footer>
      <a 
        href="https://twitter.com/kotsubufactory"
        target="_blank"
      >
        <TwitterIcon fontSize="large" />
      </a>
      <a 
        href="https://www.facebook.com/kotsubufactory"
        target="_blank"
      >
        <FacebookIcon fontSize="large" />
      </a>

      <StyledText>
        1 日本国内への配送に適用されます。その他の国についてはこちらをご参照ください
      </StyledText>
      <StyledText>
        概要 | 利用規約 | 返金条件と返品取消申請書 | 配送/支払い条件 | プライバシーポリシー| Cookie ポリシー | サイトマップ
      </StyledText>
      <p>&copy; { new Date().getFullYear() } Caramel Laboratory</p>
    </footer>
  );
};

export default Footer;
