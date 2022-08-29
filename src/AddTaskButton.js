export default (function AddTaskButton() {
   const addTaskButton = document.createElement('button');
   addTaskButton.type = 'text'
   addTaskButton.classList.add('add__todo')
   addTaskButton.innerText = 'Add task +'
   return addTaskButton
})()