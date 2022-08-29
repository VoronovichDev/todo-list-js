export default (function StateButtons() {
   const stateButtons = document.createElement('div');
   stateButtons.classList.add('state__btns')
   stateButtons.innerHTML = `
   <button type="button" class="all">All</button>
   <button type="button" class="done">Done</button>
   <button type="button" class="active">Active</button>
   `
   return stateButtons
})()

