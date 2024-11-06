import SuggesstionLayout from "@/components/suggestion-layout";
import { getCategory } from "@/utils/fetchBase";

export default async function SuggestionsPage() {

  const response = await getCategory();
 
  console.log(response, "response asdasdsd");
  
  return (
    <div className="bodycontent">
      <SuggesstionLayout CategoryData={response} />
    </div>
  );
}
