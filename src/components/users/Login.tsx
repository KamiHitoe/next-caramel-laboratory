import Box from "@mui/material/Box";
import Cart from "../items/Cart";
import { styled } from "@mui/material/styles";
import { amber } from "@mui/material/colors";
import Link from "next/Link";

const StyledDiv = styled("div")({
  backgroundColor: "#fff",
});

const StyledAnchor = styled("a")({
  "&:hover": {
    color: amber[500],
    cursor: "pointer",
  }
});

const Login = () => {
  return (
    <StyledDiv>
      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}>
        <h4 className="text-gray">
          <Link href="/login">
            <StyledAnchor>Sign in </StyledAnchor>
          </Link>
          |
          <StyledAnchor> Sign out </StyledAnchor> | </h4>
        <Box sx={{ alignSelf: "center" }}>
          <Cart />
        </Box>
      </Box>
    </StyledDiv>
  );
};

export default Login;
