import './Input.css'

const Input=(props)=>{
    return(
        <div className="input">
            <label htmlFor={props.id}>{props.label}</label>
            <input value={props.value} id={props.id} placeholder={props.placeholder} onChange={props.onChange} type={props.type} />
        </div>
        
    )
}

export default Input