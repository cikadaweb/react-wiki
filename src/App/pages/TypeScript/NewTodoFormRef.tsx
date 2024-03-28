import React, {useRef} from "react";

interface INewTodoFormProps {
    handleClick: (text: string) => void;
}

const NewTodoForm = ({handleClick}: INewTodoFormProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClick = () => {
        if(inputRef.current) {
            handleClick(inputRef.current.value);
        }
    }

    return (
        <>
            <input type="text" placeholder="text" ref={inputRef}/>
            <button onClick={onClick}>Add todo</button>
        </>
    )
}

export default NewTodoForm;