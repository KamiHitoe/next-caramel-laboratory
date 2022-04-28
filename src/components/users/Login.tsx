import Box from "@mui/material/Box";
import Cart from "../items/Cart";
import { styled } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

const StyledDiv = styled("div")({
  backgroundColor: "#fff",
});

const StyledSpan = styled("span")({
  "&:hover": {
    color: amber[500],
  }
});

const Login = () => {
  return (
    <StyledDiv>
      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}>
        <h4 className="text-gray"><StyledSpan>Sign in</StyledSpan> | <StyledSpan>Sign out</StyledSpan> | </h4>
        <Box sx={{ alignSelf: "center" }}>
          <Cart />
        </Box>
      </Box>
    </StyledDiv>
  );
};

export default Login;
