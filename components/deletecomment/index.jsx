"use client"

export default function DeleteComment({ handleDeleteComments, i }) {
  return (
    <button onClick={() => handleDeleteComments(i)}>Sil</button>
  )
}