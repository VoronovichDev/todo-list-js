import Header from "./Header"
import AddTaskButton from "./AddTaskButton"
import TodoList from "./TodoList"
import TodoItem from "./TodoItem"
import StateButtons from "./StateButtons"
import AddTaskForm from "./AddTaskForm"


// array of todos
const todoItems = [
   { taskName: 'task1', taskDescription: 'description for task1', taskDate: '10-10-2011', isDone: false, isImportant: false },
   { taskName: 'task2', taskDescription: 'description for task2', taskDate: '10-10-2012', isDone: true, isImportant: true },
   { taskName: 'task3', taskDescription: 'description for task3', taskDate: '10-10-2013', isDone: false, isImportant: false },
   { taskName: 'task4', taskDescription: 'description for task4', taskDate: '10-10-2014', isDone: false, isImportant: false },
]

// render layout
const container = document.querySelector('#container')
container.appendChild(Header)
container.appendChild(AddTaskButton)
container.appendChild(TodoList)
const todoList = document.querySelector('.todos')
container.appendChild(StateButtons)

// render todos
const renderTodoItems = () => todoItems.forEach(item => {
   let taskId = todoItems.indexOf(item)
   todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
})
renderTodoItems()

// "Add task +" button logic
AddTaskButton.addEventListener('click', (e) => {
   // insert form with z-index
   container.appendChild(AddTaskForm)

   const backToList = document.querySelector("#close__form")

   // close form while "Back" button was clicked
   backToList.onclick = (e) => {
      container.querySelector('.modal__form').remove()
   }

   // creating new-todo-obj, pushing it into array of todos, rerender todo-list
   document.forms.addNewTask.onsubmit = (e) => {

      let newTask = {
         taskName: document.getElementById('taskName').value,
         taskDescription: document.getElementById('taskDescription').value,
         // format date
         taskDate: document.getElementById('deadline').value.split('-').reverse().join('-'),
         isDone: document.getElementById('check__done').checked,
         isImportant: document.getElementById('check__important').checked
      }
      todoItems.push(newTask)
      container.querySelector('.modal__form').remove()
      todoList.innerHTML = ''
      renderTodoItems()

      // reset form fields
      e.target.reset()

      // cancel submit
      return false;
   }
})



TodoList.addEventListener('click', (e) => {
   // delete task logic
   if (e.target.className === 'todo__delete') {
      todoItems.splice(+e.target.parentNode.getAttribute('taskid'), 1)
      todoList.innerHTML = ''
      renderTodoItems()
      // toggle isDone logic
   } else if (e.target.name === 'isdone') {
      todoItems[e.target.parentNode.getAttribute('taskid')].isDone = !todoItems[e.target.parentNode.getAttribute('taskid')].isDone
   } else return
})