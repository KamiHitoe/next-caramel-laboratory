import { StyledButton } from "@/styles/component";
import Link from "next/Link";

const Userform = () => {
  return (
    <div>
      <h1 className="subtitle">input user form</h1>
      <Link href="/cart/payment">
        <StyledButton variant="contained">go payment</StyledButton>
      </Link>
    </div>
  )
};

export default Userform;
