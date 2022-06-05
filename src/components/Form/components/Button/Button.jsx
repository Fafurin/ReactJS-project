export const Button = ({label, disabled} = false, click = () => null) => {
    return (
        <button disabled={disabled} style={{color: 'red'}} onClick={click}>
            {label}
        </button>
    );
}