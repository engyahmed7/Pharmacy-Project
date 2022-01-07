import { useState } from "react";
import Msg from "./Msg";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [MsgIsOpen, setMsgIsOpen] = useState(false);
  function deleteHandler() {
    setMsgIsOpen(true);
  }
  function closeMsg() {
    setMsgIsOpen(false);
  }
  return (
    <div className="div1">
      <img class="mat" src={props.src} />
      <h4>{props.title}</h4>
      <button className="Dbtn" onClick={deleteHandler}>
        Delete
      </button>
      {MsgIsOpen ? (
        <Msg onCancel={closeMsg} onConfirm={props.deleteTodo} />
      ) : null}
      {MsgIsOpen ? <Backdrop onCancel={closeMsg} /> : null}
    </div>
  );
}
export default Todo;
