import { useState } from 'react'
import Form from './components/Form'
import List from './components/List';



function App() {

  const [inputValue, setInputValue] = useState('')
  const [toDoList, setToDoList] = useState([])
  const [editIndex, setEditIndex] = useState(-1)
  const [editId, setEditId] = useState()
  
  const addItem = () => {

    if(inputValue !== ''){
      const newToDo = [...toDoList];
    
      const singleToDO = {
        id : Math.random(),
        task : inputValue
      }

      newToDo.push(singleToDO)
      setToDoList(newToDo)
      console.log(toDoList)
    }else{
      alert('Please write your task in the Input box')
    }
  }

  const completeHandler = (item, index) =>{
    const completeToDoList = toDoList.filter((_, i)=> i !== index )
    setToDoList(completeToDoList)
  }



  const editListIndex = (item, index) =>{
    setEditIndex(index);
    setEditId(item.id)
    setInputValue(item.task)
  }

  const saveItem = () => {

    const updatedToDo = {
      id : editId,
      task : inputValue
    }
   

    const saveItemList = [...toDoList] 
    
    saveItemList.splice(editIndex, 1, updatedToDo)
  
    setToDoList(saveItemList)
    
    setEditIndex(-1)
    setInputValue('')
  }



  return (
    <div>
      <h1 class='p-4 text-teal-300 text-center text-4xl rounded-2xl'>To Do List</h1>
      <Form addItem={addItem} editIndex={editIndex} inputValue={inputValue} setInputValue={setInputValue} saveItem={saveItem} />
      <List toDoList={toDoList} completeHandler={completeHandler} editListIndex={editListIndex} />
      
    </div>
  )
}

export default App
