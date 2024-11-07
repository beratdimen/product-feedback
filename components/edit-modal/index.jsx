"use client";

import { CancelBtn } from "@/helpers/icons";
import ButtonGroup from "../create-btn-group";
import "./editmodal.css";
import Image from "next/image";
import { useFormState } from "react-dom";
import FormVAlidation, {
  deleteFeedbacks,
  updateFeedbacks,
} from "@/action/actions";

export default function EditFeedback({
  editFeedback,
  close,
  data,
  categoryList,
}) {
  const [state, action] = useFormState(
    (prevState, formData) => FormVAlidation(prevState, formData),
    {
      message: null,
      error: null,
    }
  );

  async function handleSubmitedit(e) {
    e.preventDefault();
    const formObj = Object.fromEntries(new FormData(e.target));
    await action(new FormData(e.target));

    if (state?.errors) {
      return;
    }

    try {
      const clientResponse = await updateFeedbacks(formObj);
      console.log("Müşteri kaydı başarılı:", clientResponse);
    } catch (error) {
      console.error("Kayıt hatası:", error);
    }

    close();
  }

  async function handleDeleteFeedback(params) {
    const confirmDelete = window.confirm("Silmek istediğinize emin misiniz?");

    if (!confirmDelete) return;
    const deleteResponse = await deleteFeedbacks(params);
    if (deleteResponse) {
      console.log("Feedback has been deleted successfully.");
    } else {
      console.error("Feedback could not be deleted.");
    }
  }

  return (
    <dialog ref={(e) => (editFeedback.current = e)}>
      <Image
        src={"/img/edit.png"}
        alt=""
        width={56}
        height={56}
        className="addPng"
      />
      <div className="editDialogContainer">
        <div className="dialoghead">
          <h2>Editing ‘{data.title}’</h2>
          <button onClick={close}>
            <CancelBtn />
          </button>
        </div>
        <form onSubmit={handleSubmitedit}>
          <label>
            <div className="labeltext">
              <p>Feedback title</p>
              <p>Add a short, descriptive headline</p>
            </div>
            <input type="text" defaultValue={data?.title || ""} name="title" />
          </label>
          {state?.error?.title && <p className="error">{state?.error.title}</p>}

          <label>
            <div className="labeltext">
              <p>Category</p>
              <p>Choose a category for your feedback</p>
            </div>
            <select defaultValue={data?.category || ""} name="categoryId">
              {categoryList.map((x, i) => (
                <option key={i} value={x.id}>
                  {x.name}
                </option>
              ))}
            </select>
          </label>
          {state?.error?.categoryId && (
            <p className="error">{state?.error.categoryId}</p>
          )}

          <label>
            <div className="labeltext">
              <p>Update Status</p>
              <p>Change feedback state</p>
            </div>
            <select name="status" defaultValue={data?.status || ""}>
              <option value="0">Suggestion</option>
              <option value="1">Planned</option>
              <option value="2">In-Progress</option>
              <option value="3">Live</option>
            </select>
          </label>

          <label>
            <div className="labeltext">
              <p>Feedback details</p>
              <p>
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </div>
            <textarea
              rows="5"
              defaultValue={data?.detail || ""}
              name="detail"
            ></textarea>

            {state?.error?.content && (
              <p className="error">{state?.error.detail}</p>
            )}
            <input type="hidden" name="dataid" value={data?.id} />
            <div className="btnGroup">
              <button
                type="button"
                onClick={() => handleDeleteFeedback(data.id)}
                className="deletebtn"
              >
                Delete
              </button>
              <ButtonGroup close={close} />
            </div>
          </label>
        </form>
      </div>
    </dialog>
  );
}
