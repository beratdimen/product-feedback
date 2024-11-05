"use client";
import { CancelBtn } from "@/helpers/icons";
import "./style.css";
import { useRef, useState } from "react";
import ButtonGroup from "../create-btn-group";
import Image from "next/image";
import { useFormState } from "react-dom";
import FormVAlidation, { saveFeedback } from "@/action/actions";
import { postFeedback } from "@/utils/fetchBase";

export default function AddButton() {
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
    const formObj = Object.fromEntries(new FormData(e.target));
    await action(new FormData(e.target));

    if (state?.errors) {
      return;
    }

    try {
      const clientResponse = await postFeedback(formObj);
      console.log("Müşteri kaydı başarılı:", clientResponse);
    } catch (error) {
      console.error("Kayıt hatası:", error);
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
          <form action={saveFeedback}>
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
                <option value={1}>Feature</option>
                <option value={2}>UI</option>
                <option value={3}>UX</option>
                <option value={4}>Bug</option>
              </select>
            </label>
            {state?.error?.categoryId && (
              <p className="error">{state?.error.categoryId}</p>
            )}

            <label name="content">
              <div className="labeltext">
                <p>Feedback detais</p>
                <p>
                  Include any specific comments on what should be improved,
                  added, etc.
                </p>
              </div>
              <textarea rows="5" name="content"></textarea>
              <ButtonGroup close={close} />
            </label>
            {state?.error?.content && (
              <p className="error">{state?.error.content}</p>
            )}
          </form>
        </div>
      </dialog>
    </>
  );
}
