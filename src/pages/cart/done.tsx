import { StyledButton } from "@/styles/component";
import Link from "next/Link";

const Done = () => {
  return (
    <div>
      <h1 className="subtitle">Done</h1>
      <Link href="/">
        <StyledButton variant="contained">go top page</StyledButton>
      </Link>
    </div>
  )
};

export default Done;
