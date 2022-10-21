import './Form.css'

const Form =(props)=>{
    return(
        <form className='form-newList'>
            {props.children}
        </form>
    )
}

export default Form