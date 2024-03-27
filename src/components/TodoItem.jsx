import '../styles/TodoItem.css';
import { BsCheck } from "react-icons/bs";
import { LuDelete } from "react-icons/lu";

function TodoItem(props) {
   return (
  <li className="TodoItem">
    <BsCheck 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onCompleted}
    />
    <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
    <LuDelete
      className="Icon Icon-delete"
      onClick={props.onDelete}
    />
  </li>
 ); 
}
export { TodoItem };