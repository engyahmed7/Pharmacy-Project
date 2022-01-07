function Backdrop(props) {
  function remove() {
    props.onCancel();
  }
  return <div className="backdrop" onClick={remove} />;
}
export default Backdrop;
