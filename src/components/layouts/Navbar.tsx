import * as React from "react";
import Link from 'next/Link';
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { amber, lightBlue } from "@mui/material/colors";

// styles
const StyledTabs = styled(Tabs)({ 
  backgroundColor: "#fff",
});
const StyledTab = styled(Tab)({
  color: "#000",
  fontSize: 14,
  fontWeight: "bold",
  "&:hover": {
    color: amber[800],
    backgroundColor: amber[100],
    borderBottom: "2px solid orange",
  }
});

// data
const data = [
  { value: "/", label: "ホーム" },
  { value: "/info", label: "新着情報" },
  { value: "/item/accessory", label: "桜貝アクセサリー" },
  { value: "/item/earring", label: "ピアス*イアリング" },
  { value: "/item/neckless", label: "ネックレス" },
  { value: "/item/hair_accessory", label: "ヘアアクセサリー" },
  { value: "/item/other", label: "雑貨" },
  { value: "contact", label: "お問い合わせ" },
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
          value={0}
          // onChange={handleChange}
          centered
          indicatorColor={""}
        >
          {data.map((item, i) => {
            return (
              <Link href={item.value} key={i}>
                <StyledTab value={item.value} label={item.label} />
              </Link>
            )
          }
          )}
        </StyledTabs>

      </Box>
    </div>
  );
};

export default Navbar;
