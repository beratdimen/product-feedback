import { CancelBtn } from "@/helpers/icons";
import ButtonGroup from "../create-btn-group";
import GoBack from "../goback";
import "./editmodal.css"
import Image from "next/image";


export default function EditFeedback({ editFeedback, closeDialog }) {
  return (

    <dialog ref={(e) => (editFeedback.current = e)} >
      <Image src={"/img/edit.png"} width={56} height={56} className="addPng" />
      <div className="dialogContainer">
        <div className="dialoghead">
          <h2>Editing ‘Add a dark theme option’</h2>
          <button onClick={closeDialog}>
            <CancelBtn />
          </button>
        </div>
        <form>
          <label>
            <div className="labeltext">
              <p>Feedback title</p>
              <p>Add a short, descriptive headline</p>
            </div>
            <input type="text" />
          </label>

          <label>
            <div className="labeltext">
              <p>Category</p>
              <p>Choose a category for your feedback</p>
            </div>
            <select>
              <option value=""></option>
              <option value="">Feature</option>
              <option value="">UI</option>
              <option value="">UX</option>
              <option value="">Bug</option>
            </select></label>

          <label>
            <div className="labeltext">
              <p>Update Status</p>
              <p>Change feedback state</p>
            </div>
            <select name="roadmap">
              <option value=""></option>
              <option value="0">Suggestion</option>
              <option value="1">Planned</option>
              <option value="">In-Progress</option>
              <option value="">Live</option>
            </select></label>

          <label>
            <div className="labeltext">
              <p>Feedback detais</p>
              <p>Include any specific comments on what should be improved, added, etc.</p>
            </div>
            <textarea rows="5"></textarea>
            <div className="btnGroup"> 
              <button className="deletebtn">Delete</button>
              <ButtonGroup closeDialog={closeDialog} />
            </div>
          </label>
        </form>
      </div>
    </dialog>
  );
}
