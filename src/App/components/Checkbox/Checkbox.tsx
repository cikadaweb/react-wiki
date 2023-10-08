export type CheckboxProps = React.PropsWithChildren<{
    value: boolean;
    onChange: (newValue: boolean) => void;
}>

const Checkbox: React.FC<CheckboxProps> = ({ value, onChange, children}: CheckboxProps) => (
    <div>
        <input type="checkbox" checked={value} onChange={() => onChange(!value)}/>
        {children}
    </div>
)

export default Checkbox;