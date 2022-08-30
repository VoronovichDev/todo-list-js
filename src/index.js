import Header from "./Header"
import AddTaskButton from "./AddTaskButton"
import TodoList from "./TodoList"
import TodoItem from "./TodoItem"
import StateButtons from "./StateButtons"
import AddTaskForm from "./AddTaskForm"


// array of todos
const todoItems = [
   { taskName: 'Drink coffee', taskDescription: 'Boil water, pour coffee into a mug. Fill it up with boled water', taskDate: '01-01-2011', isDone: false, isImportant: false },
   { taskName: 'Create awesome todo app', taskDescription: 'Think about the implementation, tap your fingers on the keyboard', taskDate: '01-01-2012', isDone: true, isImportant: true },
   { taskName: 'Go shopping', taskDescription: 'Open todo-list and add products there', taskDate: '01-01-2013', isDone: false, isImportant: false },
   { taskName: 'Do some sport', taskDescription: 'Push-ups, pull-ups, running', taskDate: '01-01-2014', isDone: true, isImportant: true },
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
   document.querySelector('#submit__task').innerText = 'Add Task'

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
   const clickedIndex = e.target.parentNode.getAttribute('taskid')

   // delete task logic
   if (e.target.className === 'todo__delete') {

      todoItems.splice(+clickedIndex, 1)
      // correct display of tasks when clicking the delete-button
      if (curentState === 'done') {
         let doneTasks = todoItems.filter(item => item.isDone)
         console.log(doneTasks)
         const renderDoneItems = () => doneTasks.forEach(item => {
            let taskId = todoItems.indexOf(item)
            todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
         })
         todoList.innerHTML = ''
         renderDoneItems()
      } else if (curentState === 'all') {
         todoList.innerHTML = ''
         renderTodoItems()
      } else if (curentState === 'active') {
         let activeTasks = todoItems.filter(item => !item.isDone)
         const renderActiveItems = () => activeTasks.forEach(item => {
            let taskId = todoItems.indexOf(item)
            todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
         })
         todoList.innerHTML = ''
         renderActiveItems()
      }
      // toggle isDone logic
   } else if (e.target.name === 'isdone') {
      console.log(curentState)
      todoItems[clickedIndex].isDone = !todoItems[clickedIndex].isDone

      // correct display of tasks when clicking the checkmark
      if (curentState === 'done') {
         let doneTasks = todoItems.filter(item => item.isDone)
         console.log(doneTasks)
         const renderDoneItems = () => doneTasks.forEach(item => {
            let taskId = todoItems.indexOf(item)
            todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
         })
         todoList.innerHTML = ''
         renderDoneItems()
      } else if (curentState === 'all') {
         todoList.innerHTML = ''
         renderTodoItems()
      } else if (curentState === 'active') {
         let activeTasks = todoItems.filter(item => !item.isDone)
         const renderActiveItems = () => activeTasks.forEach(item => {
            let taskId = todoItems.indexOf(item)
            todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
         })
         todoList.innerHTML = ''
         renderActiveItems()
      }
   } else if (e.target.className === 'todo__edit') {
      console.log(clickedIndex)

      // insert form for editing task with z-index
      container.appendChild(AddTaskForm)
      document.querySelector('#submit__task').innerText = 'Edit Task'

      // fill the form fields with the current task values
      document.getElementById('taskName').value = todoItems[clickedIndex].taskName
      document.getElementById('taskDescription').value = todoItems[clickedIndex].taskDescription
      document.getElementById('deadline').value = todoItems[clickedIndex].taskDate.split('-').reverse().join('-')
      document.getElementById('check__done').checked = todoItems[clickedIndex].isDone
      document.getElementById('check__important').checked = todoItems[clickedIndex].isImportant

      const backToList = document.querySelector("#close__form")


      // close form while "Back" button was clicked
      backToList.onclick = (e) => {
         container.querySelector('.modal__form').remove()
      }

      // editing current todo-obj
      document.forms.addNewTask.onsubmit = (e) => {
         console.log(clickedIndex)
         const editedTask = {
            taskName: document.getElementById('taskName').value,
            taskDescription: document.getElementById('taskDescription').value,
            // format date
            taskDate: document.getElementById('deadline').value.split('-').reverse().join('-'),
            isDone: document.getElementById('check__done').checked,
            isImportant: document.getElementById('check__important').checked
         }

         todoItems[clickedIndex] = editedTask
         console.log(todoItems[clickedIndex])
         container.querySelector('.modal__form').remove()

         // correct display of tasks when editing any task
         if (curentState === 'done') {
            let doneTasks = todoItems.filter(item => item.isDone)
            console.log(doneTasks)
            const renderDoneItems = () => doneTasks.forEach(item => {
               let taskId = todoItems.indexOf(item)
               todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
            })
            todoList.innerHTML = ''
            renderDoneItems()
         } else if (curentState === 'all') {
            todoList.innerHTML = ''
            renderTodoItems()
         } else if (curentState === 'active') {
            let activeTasks = todoItems.filter(item => !item.isDone)
            const renderActiveItems = () => activeTasks.forEach(item => {
               let taskId = todoItems.indexOf(item)
               todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
            })
            todoList.innerHTML = ''
            renderActiveItems()
         }

         // reset form fields
         // e.target.reset()

         // cancel submit
         return false;
      }

   } else return
})

let curentState = 'all';


// shows tasks depending on the selected state
StateButtons.addEventListener('click', (e) => {
   if (e.target.className === 'done') {
      curentState = 'done';
      console.log(curentState)
      let doneTasks = todoItems.filter(item => item.isDone)
      console.log(doneTasks)
      const renderDoneItems = () => doneTasks.forEach(item => {
         let taskId = todoItems.indexOf(item)
         todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
      })
      todoList.innerHTML = ''
      renderDoneItems()
   } else if (e.target.className === 'all') {
      curentState = 'all';
      todoList.innerHTML = ''
      renderTodoItems()
   } else if (e.target.className === 'active') {
      curentState = 'active';
      let activeTasks = todoItems.filter(item => !item.isDone)
      const renderActiveItems = () => activeTasks.forEach(item => {
         let taskId = todoItems.indexOf(item)
         todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
      })
      todoList.innerHTML = ''
      renderActiveItems()
   }
})