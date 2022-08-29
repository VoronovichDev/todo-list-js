import Header from "./Header"
import AddTaskButton from "./AddTaskButton"
import TodoList from "./TodoList"
import TodoItem from "./TodoItem"
import StateButtons from "./StateButtons"

const todoItems = [
   { taskName: 'task1', taskDescription: 'description for task1', taskDate: '10-10-2011', isDone: false, isImportant: false },
   { taskName: 'task2', taskDescription: 'description for task2', taskDate: '10-10-2012', isDone: true, isImportant: true },
   { taskName: 'task3', taskDescription: 'description for task3', taskDate: '10-10-2013', isDone: false, isImportant: false },
   { taskName: 'task4', taskDescription: 'description for task4', taskDate: '10-10-2014', isDone: true, isImportant: true },
   { taskName: 'task5', taskDescription: 'description for task5', taskDate: '10-10-2015', isDone: false, isImportant: false }
]

const container = document.querySelector('#container')
container.appendChild(Header)
container.appendChild(AddTaskButton)
container.appendChild(TodoList)

const todoList = document.querySelector('.todos')
container.appendChild(StateButtons)

const renderTodoItems = () => todoItems.forEach(item => {
   let taskId = todoItems.indexOf(item) + 1
   todoList.appendChild(TodoItem(item.taskName, item.taskDescription, item.taskDate, item.isDone, taskId, item.isImportant))
})
renderTodoItems()



