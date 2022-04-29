import Image from "next/image";
import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")({
  padding: "2rem 0",
  backgroundColor: "#fff",
});

const Top = () => {
  return (
    <StyledDiv>
      <Image 
        src="/images/kotsubu_factory.png"
        alt="caramel_top"
        width="800"
        height="600"
      />
    </StyledDiv>
  );
};

export default Top;
