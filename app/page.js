import "./globals.css";
import SideBar from "@/components/side-bar";
import SuggestionsPage from "./suggestions/page";

export default function Home() {
  return (
    <div className="container">
      <SideBar />
      <SuggestionsPage />
    </div>
  );
}
