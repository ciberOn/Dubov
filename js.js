const input = document.querySelector("#todo-input")

const datealtems = [
    { title: "Go to gim", paragraph: "20 push ups, 10 pull ups, 12 minutes cardio" },
    { title: "Do homework", paragraph: "do math, cry, do music prqctice, cry" },
    { title: "Get smth", paragraph: "get 5 kb from your teacher" },
    { title: "Cry if you are tired", paragraph: "Wellcome to the club body" },
    { title: "You must do all your work", paragraph: "Go to the school" },
    { title: "спать", paragraph: "время спать" },
]

document.querySelector("#btn-submit").addEventListener('click', () => {
    const inputDate = input.value
    input.value = ""
    console.log(inputDate)
    const todo_el = document.createElement('div')
    todo_el.classList.add('todo-items')

    const todo_content_el = document.createElement('div')
    todo_el.appendChild(todo_content_el)

    const todo_input_el = document.createElement('input')
    todo_input_el.classList.add('text')
    todo_input_el.tupe = 'text'
    todo_input_el.value =
        inputDate ? inputDate : datealtems[Math.floor(Math.random() * datealtems.length)].title

    todo_input_el.setAttribute('readonly', 'readonly')

    todo_content_el.appendChild(todo_input_el)

    const todo_action_el = document.createElement('div')
    todo_action_el.classList.add('action-items')

    const todo_done_el = document.createElement('i')
    todo_done_el.classList.add('fa-solid')
    todo_done_el.classList.add('fa-check')

    const todo_edit_el = document.createElement('i')
    todo_edit_el.classList.add('fa-solid')
    todo_edit_el.classList.add('fa-pen-to-square')
    todo_edit_el.classList.add('edit')

    const todo_delet_el = document.createElement('i')
    todo_delet_el.classList.add('fa-solid')
    todo_delet_el.classList.add('fa-trash')

    todo_action_el.appendChild(todo_done_el)
    todo_action_el.appendChild(todo_edit_el)
    todo_action_el.appendChild(todo_delet_el)

    todo_el.appendChild(todo_action_el)
    document.querySelector(".todo_lists").appendChild(todo_el)
})