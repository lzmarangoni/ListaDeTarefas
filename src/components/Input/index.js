import './Input.css'

const Input=(props)=>{
    return(
        <input onChange={props.onChange} type={props.type} className="input"/>
    )
}

export default Input