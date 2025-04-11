
const Form = ({addItem, editIndex, inputValue, setInputValue, saveItem}) => {

    

    return(
        <div class="m-4 flex flex-row justify-center">
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Insert your task here" class="p-2 border-amber-300 border-1px border-solid rounded-xl bg-amber-600 text-amber-50"></input>
            { (editIndex === -1) ? <button onClick={()=>{addItem({inputValue}); setInputValue('')}} class="p-2 m-2 bg-green-500 hover:bg-green-900 text-white font-semibold rounded-2xl">Add Task</button> : <button onClick={() => saveItem() }class="p-2 m-2 bg-rose-500 hover:bg-rose-900 text-white font-semibold rounded-2xl">Save</button> }
        </div>
    )
}

export default Form