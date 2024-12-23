"use client";
import { CancelBtn } from "@/helpers/icons";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import ButtonGroup from "../create-btn-group";
import Image from "next/image";
import { useFormState } from "react-dom";
import FormVAlidation, { saveFeedback } from "@/action/actions";
import { getCategory, getMe, postFeedback } from "@/utils/fetchBase";
import { toast } from "sonner";
export default function AddButton({ CategoryData, fetchData }) {
  const [state, action] = useFormState(
    (prevState, formData) => FormVAlidation(prevState, formData),
    {
      message: null,
      error: null,
    }
  );
  const newFeedback = useRef();

  function handleClick() {
    if (newFeedback.current) {
      newFeedback.current.showModal();
    }
  }

  function close() {
    if (newFeedback.current) {
      newFeedback.current.close();
    }
  }

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
        const clientResponse = await saveFeedback(formObj);
        console.log("Müşteri kaydı başarılı:", clientResponse);

        close();

        // Yeni feedback eklendikten sonra veriyi tekrar çek
        fetchData(); // Ana bileşende feedback verilerini tekrar çek
      } catch (error) {
        console.error("Kayıt hatası:", error);
      }
    } else {
      toast.error("Giriş Yapmalısınız");
    }
  }

  function optionClick(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <div className="headerBtn">
        <button onClick={() => handleClick()}>+ Add Feedback</button>
      </div>
      <dialog ref={(e) => (newFeedback.current = e)}>
        <Image
          src={"/img/add.png"}
          alt=""
          width={56}
          height={56}
          className="addPng"
        />
        <div className="dialogContainer">
          <div className="dialoghead">
            <h2>Create New Feedback</h2>
            <button onClick={() => close()}>
              <CancelBtn />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <label name="title">
              <div className="labeltext">
                <p>Feedback title</p>
                <p>Add a short, descriptive headline</p>
              </div>
              <input type="text" name="title" />
            </label>
            {state?.error?.title && (
              <p className="error">{state?.error.title}</p>
            )}

            <label name="category">
              <div className="labeltext">
                <p>Category</p>
                <p>Choose a category for your feedback</p>
              </div>
              <select onChange={optionClick} name="category">
                {CategoryData?.map((x, i) => (
                  <option key={i} value={x.id}>
                    {x.name}
                  </option>
                ))}
              </select>
            </label>
            {state?.error?.categoryId && (
              <p className="error">{state?.error.categoryId}</p>
            )}

            <label name="content">
              <div className="labeltext">
                <p>Feedback details</p>
                <p>
                  Include any specific comments on what should be improved,
                  added, etc.
                </p>
              </div>
              <textarea rows="5" name="detail"></textarea>
              {state?.error?.detail && (
                <p className="error">{state?.error.detail}</p>
              )}
              <ButtonGroup close={close} />
            </label>
          </form>
        </div>
      </dialog>
    </>
  );
}
