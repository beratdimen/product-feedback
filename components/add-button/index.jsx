"use client";
import { CancelBtn, RightIcon } from "@/helpers/icons";
import "./style.css";
import { useRef, useState } from "react";
import ButtonGroup from "../create-btn-group";
import Image from "next/image";

export default function AddButton() { 
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
      <dialog ref={(e) => (newFeedback.current = e)} >
        <Image src={"/img/add.png"} width={56} height={56} className="addPng" />
        <div className="dialogContainer">
          <div className="dialoghead">
            <h2>Create New Feedback</h2>
            <button onClick={() => close()}>
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
              <select name="categoryId">
                <option value="">Seçiniz</option>
                <option value="0">Feature</option>
                <option value="1">UI</option>
                <option value="2">UX</option>
                <option value="3">Bug</option>
              </select></label>

            <label>
              <div className="labeltext">
                <p>Feedback detais</p>
                <p>Include any specific comments on what should be improved, added, etc.</p>
              </div>
              <textarea rows="5"></textarea>
            </label>
          </form>
              <ButtonGroup />
        </div>
      </dialog>
    </>
  );
}
