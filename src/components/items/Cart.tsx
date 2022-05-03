import Link from "next/Link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  return (
    <div>
      <Link href="/cart/purchase">
        <a><ShoppingCartIcon /></a>
      </Link>
    </div>
  );
};

export default Cart;
