import { useState } from "react";
import Link from "next/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { StyledMenuItem } from '@/styles/component';
import Cart from "@/components/items/Cart";

const Appbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const gray = "#9e9e9e";

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{ color: "#000" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link href="/info">
              <a>
                <StyledMenuItem onClick={handleClose}>新着情報</StyledMenuItem>
              </a>
            </Link>
            <Link href="/item/accessory">
              <a>
                <StyledMenuItem onClick={handleClose}>桜貝アクセサリー</StyledMenuItem>
              </a>
            </Link>
            <Link href="/item/earring">
              <a>
                <StyledMenuItem onClick={handleClose}>ピアス*イアリング</StyledMenuItem>
              </a>
            </Link>
            <Link href="/item/neckless">
              <a>
                <StyledMenuItem onClick={handleClose}>ネックレス</StyledMenuItem>
              </a>
            </Link>
            <Link href="/item/hair_accessory">
              <a>
                <StyledMenuItem onClick={handleClose}>ヘアアクセサリー</StyledMenuItem>
              </a>
            </Link>
            <Link href="/item/other">
              <a>
                <StyledMenuItem onClick={handleClose}>雑貨</StyledMenuItem>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <StyledMenuItem onClick={handleClose}>お問い合わせ</StyledMenuItem>
              </a>
            </Link>
          </Menu>

          <Typography variant="h6" component="div" style={{ color: "#000" }}>
            こつぶファクトリー
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
            sx={{ alignItems: "flex-end" }}
          >
            <Cart />
          </IconButton>

          <Link href="/user/login">
            <a>
              <Typography variant="h6" component="div" style={{ color: "#000" }}>
                Sign up
              </Typography>
            </a>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Appbar;
