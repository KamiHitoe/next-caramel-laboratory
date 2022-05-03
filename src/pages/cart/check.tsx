import { StyledButton } from "@/styles/component";
import Link from "next/Link";

const Check = () => {
  return (
    <div>
      <h1 className="subtitle">Check</h1>
      <Link href="/cart/done">
        <StyledButton variant="contained">go done</StyledButton>
      </Link>
    </div>
  )
};

export default Check;
