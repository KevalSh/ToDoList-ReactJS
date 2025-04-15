
const List =({toDoList, completeHandler, editListIndex}) => {
    
    return(
        <div class="m-2 p-2 flex flex-col text-center">
            <h1 class="text-white text-2xl">Tasks</h1>
            {toDoList.map((item, index)=> <div class="text-white m-2 p-2" key={index}> {item.task} 
                <button onClick = {() => {completeHandler(item, index)}}
                 class='m-2 p-2 bg-yellow-600 text-white font-bold rounded-2xl hover:bg-amber-900'>Completed</button>
                 <button class='m-2 p-2 bg-sky-500 text-white font-bold rounded-2xl hover:bg-sky-800' onClick = {() => {editListIndex(item, index); }} >Edit</button>
                 </div>)}
            
        </div>
    )
}

export default List