import { Link } from "react-router-dom";
import edgrowLogo from "@/assets/edgrow-logo.png";

export const EdGrowLogo = ({ variant = "dark" }: { variant?: "dark" | "light" }) => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img src={edgrowLogo} alt="EdGrow — Cultivating Minds, Growing Futures" className="h-10 w-auto" />
    </Link>
  );
};
