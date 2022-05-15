import Link from "next/Link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  return (
    <div>
      <Link href="/cart/purchase">
        <a><ShoppingCartIcon
          style={{ color: "#000" }}
        /></a>
      </Link>
    </div>
  );
};

export default Cart;
