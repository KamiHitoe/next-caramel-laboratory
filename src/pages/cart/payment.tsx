import { StyledButton } from "@/styles/component";
import Link from "next/Link";

const Payment = () => {
  return (
    <div>
      <h1 className="subtitle">payment</h1>
      <Link href="/cart/check">
        <StyledButton variant="contained">go check</StyledButton>
      </Link>
    </div>
  )
};

export default Payment;
