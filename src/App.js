import './App.css';
import {useState, useEffect} from 'react';
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'

const API = 'http://localhost:5000'

function App() {
  const [title, setTask] = useState('')
  const [time, setTime] = useState('')
  const [tasks, setTasks] = useState([])
  const [loadind, setLoading]= useState(false)

  return (
    <div className="App">
      
          
      
    </div>
  );
}

export default App;
