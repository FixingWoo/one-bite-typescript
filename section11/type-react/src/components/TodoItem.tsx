import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const handleDelete = () => {
    dispatch.handleDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}
