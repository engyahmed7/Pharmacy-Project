function Msg(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="div2">
      <h3>Are you sure?</h3>
      <div className="div3">
        <button className="Conbtn" onClick={confirmHandler}>
          Confirm
        </button>

        <button className="Canbtn" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default Msg;
