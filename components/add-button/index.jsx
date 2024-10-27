"use client";
import { CancelBtn } from "@/helpers/icons";
import "./style.css";
import { useRef, useState } from "react";
import ButtonGroup from "../create-btn-group";
import Image from "next/image";
import { useFormState } from "react-dom";
import FormVAlidation from "@/action/actions";

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

  return (
    <>
      <div className="headerBtn">
        <button onClick={() => handleClick()}>+ Add Feedback</button>
      </div>
      <dialog ref={(e) => (newFeedback.current = e)}>
        <Image src={"/img/add.png"} width={56} height={56} className="addPng" />
        <div className="dialogContainer">
          <div className="dialoghead">
            <h2>Create New Feedback</h2>
            <button onClick={() => close()}>
              <CancelBtn />
            </button>
          </div>
          <form action={action}>
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
              <select name="category">
                <option value=""></option>
                <option value="">Feature</option>
                <option value="">UI</option>
                <option value="">UX</option>
                <option value="">Bug</option>
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
              <ButtonGroup /> 
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
