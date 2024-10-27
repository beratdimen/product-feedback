import "./style.css";
export default function ButtonGroup({ close }) {
  return (
    <div className="btnGroup">
      <button type="button" onClick={close}>
        Cancel
      </button>
      <button>Add Feedback</button>
    </div>
  );
}
