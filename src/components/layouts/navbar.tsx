import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { amber, pink } from "@mui/material/colors";

// styles
const StyledTabs = styled(Tabs)({ backgroundColor: amber[100], });
const StyledTab = styled(Tab)({
  color: amber[800],
  "&:hover": {
    color: pink[500],
    backgroundColor: pink[50],
    borderBottom: "2px solid pink",
  }
});

// data
const data = [
  { value: "#", label: "ホーム" },
  { value: "#", label: "新着情報" },
  { value: "#", label: "桜貝アクセサリー" },
  { value: "#", label: "ピアス*イアリング" },
  { value: "#", label: "ネックレス" },
  { value: "#", label: "ヘアアクセサリー" },
  { value: "#", label: "雑貨" },
  { value: "#", label: "お問い合わせ" },
];

const Navbar = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          centered
        >
          {data.map((item, i) => <StyledTab value={item.value} label={item.label} key={i} />)}
        </StyledTabs>

      </Box>
    </div>
  );
};

export default Navbar;
