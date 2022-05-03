import { StyledButton } from "@/styles/component";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell"
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Image from "next/Image";
import Link from "next/Link";

const StyledTableCell = styled(TableCell)({
  fontWeight: "bold",
});

interface CartItem {
  imgPath: string,
  itemName: string,
  price: number,
  cartCounts: number,
};

const createRow = (
  imgPath: CartItem.imgPath,
  itemName: CartItem.itemName,
  price: CartItem.price,
  cartCounts: CartItem.cartCounts
  ): CartItem => {
  return {
    imgPath,
    itemName,
    price,
    cartCounts,
  }
};

const data = [
  createRow("/images/sea_glass_bl.jpg", 'itemName', 1000, 1),
  createRow("/images/sea_glass_bl.jpg", 'itemName', 1000, 2),
  createRow("/images/sea_glass_bl.jpg", 'itemName', 1000, 3),
  createRow("/images/sea_glass_bl.jpg", 'itemName', 1000, 4),
]

const Purchase = () => {
  return (
    <div>
      <h1 className="subtitle">商品購入ページ</h1>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">商品画像</StyledTableCell>
              <StyledTableCell align="center">商品名</StyledTableCell>
              <StyledTableCell align="center">単価</StyledTableCell>
              <StyledTableCell align="center">数量</StyledTableCell>
              <StyledTableCell align="center">btn</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => {
              return (
                <TableRow>
                  <TableCell>
                    <Image 
                      src={row.imgPath}
                      alt={row.itemName}
                      width="300"
                      height="300"
                    />
                  </TableCell>
                  <TableCell>{row.itemName}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.cartCounts}</TableCell>
                  <TableCell>
                    <StyledButton variant="contained">+</StyledButton>
                    <StyledButton variant="contained">-</StyledButton>
                    <StyledButton variant="contained">x</StyledButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Link href="/cart/userform">
        <StyledButton variant="contained">購入する</StyledButton>
      </Link>
    </div>
  )
};

export default Purchase;
