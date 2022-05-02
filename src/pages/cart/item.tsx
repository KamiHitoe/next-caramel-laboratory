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
  createRow('url', 'itemName', 1000, 1),
  createRow('url', 'itemName', 1000, 2),
  createRow('url', 'itemName', 1000, 3),
  createRow('url', 'itemName', 1000, 4),
]

const CartItem = () => {
  return (
    <div>
      <h1 className="subtitle">商品購入ページ</h1>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>商品画像</StyledTableCell>
              <StyledTableCell>商品名</StyledTableCell>
              <StyledTableCell>単価</StyledTableCell>
              <StyledTableCell>数量</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => {
              return (
                <TableRow>
                  <TableCell>
                    <Image 
                      src="/images/kotsubu_factory.png"
                      alt="caramel_top"
                      width="800"
                      height="600"
                    />
                    {row.imgPath}
                  </TableCell>
                  <TableCell>{row.itemName}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.cartCounts}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <StyledButton variant="contained">購入する</StyledButton>
    </div>
  )
};

export default CartItem;
