import { useEffect, useRef, useState } from "react";

var UseRef = () => {
  var [text, setText] = useState("");
  var[state,setState]=useState(0);
  function increment(){
    setState(state+1);
  }
  function decrement(){
    setState(state-1);
  }
  var prevState=useRef()
  var prevText = useRef();
  useEffect(() => {
    prevText.curr = text;
  }, [text]);
  useEffect(()=>{
    prevState.state=state;
  },[state]);
  return (
    <section>
      <h1>This is an example of useref</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>My current render is {text}</h2>
      <h3>My Previous text is {prevText.curr}</h3>
      <h2>Task</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h3>My current task is {state}</h3>
      <h3>My previous task is {prevState.state}</h3>
    </section>
  );
};
export default UseRef;