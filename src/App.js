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
  const [title, setTask] = useState('')
  const [time, setTime] = useState('')
  const [tasks, setTasks] = useState([])
  const [loadind, setLoading]= useState(false)

  return (
    <div className="App">
      <Container>
        <Header value="Lista de tarefas"/>
        <Form>
          <Input/>
          <Button label="Nova Tarefa"/>
        </Form> 
        <div>
          <h3>Tarefas</h3>
        </div>
      </Container> 
    </div>
  );
}

export default App;
