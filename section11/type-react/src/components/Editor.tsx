import { ReactElement, useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {
  children?: ReactElement;
}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();

  const [text, setText] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    dispatch.handleAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={handleInput} />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}
