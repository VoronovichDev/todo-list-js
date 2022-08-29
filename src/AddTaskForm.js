export default (function AddTaskForm() {
   const addTaskForm = document.createElement('div');
   addTaskForm.classList.add('modal__form')
   addTaskForm.innerHTML = `<form name="addNewTask" autocomplete="off">
            <div class="form__name">
               <label for="taskName" required>Name:</label>
               <input type="text" name="taskName" id="taskName" required>
            </div>
            <div class="form__description">
               <label for="taskDescription">Description:</label>
               <input type="text" name="taskDescription" id="taskDescription" required>
            </div>
            <div class="form__important">
               <input type="checkbox" name="isImportant" id="check__important"> 
               <label for="isImportant">Is this task important?</label>
            </div>
            <div class="form__done">
               <input type="checkbox" name="isDone" id="check__done">
               <label for="isDone">Is this task completed?</label>
            </div>
            <div class="form__date">
               <input type="date" name="deadline" id="deadline" required>
               <label for="deadline">Сhoose a deadline
               </label>
            </div>
            <div class="form__buttons">
               <button type="submit" id="submit__task">Add new task</button>
               <button type="button" id="close__form">Back</button>
            </div>
         </form>`
   return addTaskForm
})()