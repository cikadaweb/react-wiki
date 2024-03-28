import { Todo } from "@/App/pages/TypeScript/types";
import TodoItem from "@/App/pages/TypeScript/TodoItem";

interface ITodoListProps {
    list: Todo[]
}

const  TodoList = ({list}: ITodoListProps) => {
    return (
        <ul>
            {
                list.map((todo) => (
                    <TodoItem key={todo.id} {...todo}/>
                ))
            }
        </ul>
    )
}

export default TodoList;