import Box from "@mui/material/Box";
import Cart from "../items/Cart";
import { styled } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

const StyledSpan = styled("span")({
  "&:hover": {
    color: amber[500],
  }
});

const Login = () => {
  return (
    <div>
      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}>
        <h4><StyledSpan>Sign in</StyledSpan> | <StyledSpan>Sign out</StyledSpan> | </h4>
        <Box sx={{ alignSelf: "center" }}>
          <Cart />
        </Box>
      </Box>
    </div>
  );
};

export default Login;
