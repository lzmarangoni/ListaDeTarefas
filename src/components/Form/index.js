import './Form.css'

const Form =(props)=>{
    return(
        <form onSubmit={props.onSubmit} className='form-newList'>
            {props.children}
        </form>
    )
}

export default Form