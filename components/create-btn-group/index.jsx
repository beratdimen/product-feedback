import "./style.css";
export default function ButtonGroup({ closeDialog }) {
  return (
    <div className="btnGroup">
      <button type="button" onClick={closeDialog}>Cancel</button>
      <button>Add Feedback</button>
    </div>
  );
}
