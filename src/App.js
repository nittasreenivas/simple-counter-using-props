import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter c={10} i={10} a="a" />
      <Counter c={20} i={30} a="b" />
      <Counter c={30} i={30} a="c" />
    </div>
  );
}
