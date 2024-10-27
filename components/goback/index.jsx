import { RightIcon } from "@/helpers/icons";
import "./style.css";
import Link from "next/link";

export default function GoBack() {
  return (
    <div className="goback">
      <Link href={"/"}>
        <RightIcon /> Go Back
      </Link>
    </div>
  );
}
