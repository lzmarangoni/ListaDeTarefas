import './App.css';
import {useState, useEffect} from 'react';
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'
import Header from './components/Header';
import Input from './components/Input'
import Button from './components/Button';
import Form from './components/Form';
import Container from './components/Container'

const API = 'http://localhost:5000'

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [tasks, setTasks] = useState([])
  const [loadind, setLoading]= useState(false)

  function handleSubmit(e){
    e.preventDefault();
    console.log(title)
    setTitle('');

   
  }

 


  return (
    <div className="App">
      <Container>
        <Header value="Lista de tarefas"/>
        <Form onSubmit={handleSubmit}>
          <Input 
            label={"Nova Tarefa"} 
            id={"task"}
            placeholder={"Resuma sua tarefa aqui..."}
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title || " "}
            />
            
          <Button label="Criar"/>
        </Form> 
        <div>
          <h3>Tarefas</h3>
          {tasks.length === 0 && <p>Não há tarefas</p>}
        </div>
      </Container> 
    </div>
  );
}

export default App;
