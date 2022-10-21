import './App.css';
import {useState, useEffect} from 'react';
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'
import Header from './components/Header';
import Input from './components/Input'
import Button from './components/Button';
import Form from './components/Form';
import Container from './components/Container'

const API = 'http://localhost:5000/'

function App() {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [tasks, setTasks] = useState([])
  const [loadind, setLoading]= useState(false)

  useEffect(()=>{
    const loadData = async()=>{
      setLoading(true);

      const res = await fetch (API + 'tarefas')
      .then((res)=> res.json())
      .then((data) => data)
      .catch((err)=> console.log(err));
    
      setLoading(false);
      setTasks(res)
    };
    loadData();
  }, []);

  const handleSubmit = async (e)=>{
    e.preventDefault();

    let newTask = {
      id: Math.random(),
      title,
      time,
      done: false
    }

    await fetch(API+'tarefas',{
      method:'POST',
      body: JSON.stringify(newTask),
      headers: {'Content-Type' :"application/json"},
    })

    console.log(newTask)
    
    setTitle('');
    setTime('');

    setTasks((prevState)=>[...prevState,newTask])

  }

  if(loadind){
    return <p>Carregando...</p>
  }
 


  return (
    <div className="App">
      <Container>
        <Header value="Lista de tarefas"/>
        <Form onSubmit={handleSubmit}>
            <div className='input'>
              <Input 
              label={"Nova Tarefa"} 
              id={"task"}
              placeholder={"Resuma sua tarefa aqui..."}
              onChange={(e)=>{setTitle(e.target.value)}}
              value={title || ""}
              />
              <Input 
              label={"Tempo de realização"} 
              id={"time"}
              placeholder={"Qual tempo será necessário (em horas)?"}
              onChange={(e)=>{setTime(e.target.value)}}
              value={time || ""}
              />
            </div>

          <Button label="Criar"/>
        </Form> 
        <div>
          <h3>Tarefas</h3>
          {tasks.length === 0 && <p>Não há tarefas</p>}
          {tasks.map(task=><p key={task.id}>{task.title}</p>)}
        </div>
      </Container> 
    </div>
  );
}

export default App;
