import React from 'react';
import {Todo} from "@/App/pages/TypeScript/types";

interface ITodoProps extends Todo {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
const TodoItem = ({id, title, completed, children, style={}}: ITodoProps) => {
    return (
        <li style={{color: "red", backgroundColor: 'white', ...style}}>
            <input type="checkbox" checked={completed}/>
            <span>{title}</span>
            <span>&times;</span>
            {children}
        </li>
    )
}

export default TodoItem;