const Button = ({...props})=>{
    return (
        <button type="submit" className="button-style" onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default Button;
