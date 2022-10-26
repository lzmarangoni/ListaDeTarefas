import { BsBookmarkCheck, BsBookmarkCheckFill, BsTrash } from 'react-icons/bs'
import './Task.css'


const Task =(props)=>{
    
    return(
        <div className='task'>
                <h3>{props.title}</h3>
                <p>Duração: {props.time} hs</p>
            <div>
                <span onClick={props.done}>
                    {props.check ? <BsBookmarkCheck/> : <BsBookmarkCheckFill/>}
                </span>
                <BsTrash onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default Task