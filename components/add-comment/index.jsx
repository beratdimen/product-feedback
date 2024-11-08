"use client";
import "./style.css";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import FormVAlidation, { postComments } from "@/action/actions";
import { getMe } from "@/utils/fetchBase";
import { useFormState } from "react-dom";

export default function AddComment({ feedbackId, setActive, active }) {
  const [state, action] = useFormState(
    (prevState, formData) => FormVAlidation(prevState, formData),
    {
      message: null,
      error: null,
    }
  );

  const [text, setText] = useState("");
  const MAX_CHAR = 250;
  const [remainigChar, setRemaningChar] = useState(250);

  useEffect(() => {
    const remaining = MAX_CHAR - text.length;
    setRemaningChar(remaining);
    if (remainigChar <= 0) {
      toast.error("250 karaktaerden fazla");
    }
  }, [text]);

  async function handleSubmit(e) {
    e.preventDefault();

    const user = await getMe();
    const formObj = Object.fromEntries(new FormData(e.target));
    await action(new FormData(e.target));

    if (state?.error) {
      return;
    }

    if (user.data) {
      try {
        const clientResponse = await postComments(formObj);
        console.log("Müşteri kaydı başarılı:", clientResponse);

        setActive(!active);

        // Yeni feedback eklendikten sonra veriyi tekrar çek
        fetchData(); // Ana bileşende feedback verilerini tekrar çek
        setText("");
        setRemaningChar(MAX_CHAR);
      } catch (error) {
        console.error("Kayıt hatası:", error);
      }
    } else {
      toast.error("Giriş Yapmalısınız");
    }
  }

  return (
    <div className="addCommentContainer">
      <h4>Add Comment</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          name="content"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="type your comment here"
        ></textarea>
        {state?.error && <p>Kankaaa yanlış kkanna</p>}
        <input type="hidden" name="feedbackid" value={feedbackId} />
        <div className="commentFooter">
          <span>{remainigChar} karakter hakkın kaldı</span>
          <button disabled={remainigChar < 0}>Post Comment</button>
        </div>
      </form>
    </div>
  );
}
