import { useState } from "react";
export default function Counter(props) {
  const [count, setCount] = useState(props.c);
  const inc = () => {
    setCount(count + props.i);
  };
  const dec = () => {
    setCount(count - props.i);
  };
  return (
    <div className={props.a}>
      <h3> Counter: {count}</h3>
      <button onClick={inc}> INC</button>&nbsp;&nbsp;
      <button onClick={dec}> DEC</button>&nbsp;&nbsp;
    </div>
  );
}
