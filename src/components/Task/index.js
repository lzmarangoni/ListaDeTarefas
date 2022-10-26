import { BsBookmarkCheck, BsBookmarkCheckFill, BsTrash } from 'react-icons/bs'
import './Task.css'


const Task =(props)=>{
    return(
        <div>
            <p key={props.key}>{props.title}</p>
            <p>Duração: {props.time} hs</p>
            <div>
            <span>
                {props.check ? <BsBookmarkCheck/> : <BsBookmarkCheckFill/>}
            </span>
            <BsTrash onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default Task