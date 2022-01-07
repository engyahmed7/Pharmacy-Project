import { useRef } from "react";
import "../App.css";
import Todo from "./Todo";
import { useState } from "react";

function Cart() {
  const [isTodoShown1, showTodo1] = useState(true);
  const [isTodoShown2, showTodo2] = useState(true);
  const [isTodoShown3, showTodo3] = useState(true);

  function del1() {
    showTodo1(false);
  }
  function del2() {
    showTodo2(false);
  }
  function del3() {
    showTodo3(false);
  }

  let inputName = useRef();
  let inputNum = useRef();
  let inputEmail = useRef();
  let inputMsg = useRef();
  function submitHandler(event) {
    event.preventDefault();
    let nameEntered = inputName.current.value;
    let mailEntered = inputEmail.current.value;
    let msgEntered = inputMsg.current.value;
    let numEntered = inputNum.current.value;

    console.log(nameEntered, numEntered, mailEntered, msgEntered);
  }

  return (
    <>
      <div className="contact">
        <div className="leftSide">
          {isTodoShown1 ? (
            <Todo src="images/1.png" title="500$" deleteTodo={del1} />
          ) : null}
          {isTodoShown2 ? (
            <Todo src="images/2.jpeg" title="20$" deleteTodo={del2} />
          ) : null}
          {isTodoShown3 ? (
            <Todo src="images/Adol.png" title="10$" deleteTodo={del3} />
          ) : null}
        </div>
        <div className="rightSide">
          <form id="contact-form" onSubmit={submitHandler}>
            <label htmlFor="name">Full Name</label>
            <input name="name" type="text" ref={inputName} />
            <label htmlFor="name">card number</label>
            <input name="name" type="text" ref={inputNum} />
            <label htmlFor="email">Email </label>
            <input name="email" type="email" ref={inputEmail} />
            <label htmlFor="message">Message</label>
            <textarea rows="2" name="msg" required ref={inputMsg}></textarea>
            <button type="submit"> confirm order</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cart;
