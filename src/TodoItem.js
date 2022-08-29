export default function TodoItem(name, description, taskDate, isDone, taskId, isImportant) {
   const todo = document.createElement('div')

   todo.setAttribute('taskid', taskId);
   todo.classList.add('todo')

   isImportant ? todo.classList.add('task__important') : ''

   todo.innerHTML = `
   <p class="task__description">${description}</p>
   <p class="task__date">${taskDate}</p>
   <input type="checkbox" name="isdone" id="todo__isdone" ${isDone ? "checked" : ""} >
   <p class="task__name">${name}</p>
   <button type="button" class="todo__delete">X</button>
   <button type="button" class="todo__edit">...</button>
   `
   return todo
}