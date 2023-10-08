import React from "react";

import Button from "@/App/components/Button";

type CounterProps = {
    index: number
}

const Counter: React.FC<CounterProps> = ({ index }: CounterProps) => {
    const [curCounterValue, setCurCounterValue] = React.useState(1);
    const incCurCounterValue = () => setCurCounterValue((count) => count + 1);

    return (
        <div>
            <Button onClick={incCurCounterValue}>
                Значение #{index + 1} = {curCounterValue}. Увеличить
            </Button>
        </div>
    );
}

export default Counter;
