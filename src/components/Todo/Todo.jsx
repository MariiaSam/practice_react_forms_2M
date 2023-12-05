import { render } from "@testing-library/react"
import { IconButton } from "components/IconButton/IconButton"
import {ReactComponent as DeleteIcon} from '../../icons/delete.svg'


export const Todo = (text, completed, onToggleCompleted, onDeleteTodo) => {
render (<div>
   <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted}
        ></input>

        <p className="TodoList__text">{text}</p>
        {/* <button onClick={() => onDeleteTodo}>Delete</button> */}
<IconButton><DeleteIcon width='40'height='40'/></IconButton>
</div>)
}