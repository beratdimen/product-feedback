import "./style.css";
export default function ButtonGroup({ closeDialog }) {
  return (
    <div className="btnGroup">
      <button onClick={closeDialog}>Cancel</button>
      <button>Add Feedback</button>
    </div>
  );
}
