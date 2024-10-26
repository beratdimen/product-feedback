import Comments from "@/components/comments";
import "./globals.css"; 
import SuggestionsPage from "./suggestions/page";
import EditButton from "@/components/edit-button";

export default function Home() {
  return (
    <div className="container"> 
      <SuggestionsPage />
      <EditButton />
    </div>
  );
}
