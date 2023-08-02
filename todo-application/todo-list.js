window.addEventListener('load', ()=>{
	const form = document.querySelector('#new-task-form');
	const userInput = document.querySelector('#new-task-input');
	const list_el = document.querySelector('#tasks');
	
	// stop the page from refreshing after the submit button(add task) is clicked
	form.addEventListener('submit', (e)=>{
		e.preventDefault();

		const task = userInput.value
	
		if(!task){
			alert("Please add Task");
			return
		};
	
		const task_el = document.createElement('div');
		task_el.classList.add("tasks");
		list_el.appendChild(task_el);

		const task_content_el = document.createElement('div');
		task_content_el.classList.add("content");
		// task_content_el.innerText = task;
		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add("text");
		task_input_el.type = "text"
		task_input_el.value = task;
		task_input_el.setAttribute("readonly", "readonly");
		task_content_el.appendChild(task_input_el);



		const task_action_el = document.createElement('div');
		task_action_el.classList.add("action");
		task_el.appendChild(task_action_el);

		const task_edit_button = document.createElement('button');
		task_edit_button.classList.add("edit");
		task_edit_button.innerHTML = "Edit"
		task_action_el.appendChild(task_edit_button)

		const task_delete_button = document.createElement('button');
		task_delete_button.classList.add("delete");
		task_delete_button.innerHTML = "Delete"
		task_action_el.appendChild(task_delete_button)

		const task_completed_button = document.createElement('button');
		task_completed_button.classList.add("completed");
		task_completed_button.innerHTML = "Completed"
		task_action_el.appendChild(task_completed_button)

		// button functions

		task_edit_button.addEventListener('click', ()=>{
			if(task_edit_button.innerText.toLowerCase() == "edit"){
				task_input_el.removeAttribute('readonly');
				task_input_el.focus();
				task_edit_button.innerText = "Save"
			}else{
				task_input_el.setAttribute("readonly", "readonly");
				task_edit_button.innerText ="Edit";
		}
		});

		task_delete_button.addEventListener('click', ()=>{
			if(confirm("Are you sure you want to delete this task?")){
				list_el.removeChild(task_el)
			}
		})

		task_completed_button.addEventListener('click', ()=>{
            
			task_input_el.style.textDecoration="line-through";
			task_input_el.style.color="green"
			task_input_el.setAttribute("readonly", "readonly");
		 
		});
		
		userInput.value = ""

	});

});


