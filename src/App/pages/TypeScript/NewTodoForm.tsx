import React from "react";

interface INewTodoFormProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: () => void;
}

const NewTodoForm = ({value, onChange, handleClick}: INewTodoFormProps) => {
    return (
        <>
            <input type="text" placeholder="text" value={value} onChange={onChange}/>
            <button onClick={handleClick}>Add todo</button>
        </>
    )
}

export default NewTodoForm;