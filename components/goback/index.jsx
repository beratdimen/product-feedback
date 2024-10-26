import { RightIcon } from "@/helpers/icons"
import "./goback.css"

export default function GoBack({closeDialog}) {
  return (
    <button onClick={closeDialog}>
      <RightIcon /> Go Back
    </button>
  )
}