import './Button.css'

const Button =(props)=>{
    return(
        <button onSubmit={props.onSubmit} ></button>
    )
}

export default Button;