class Idea {
    isStarred = false
    constructor(title, body) {
        this.title = title
        this.body = body
        this.id = new Date().getTime() + Math.floor((Math.random(1) * 1000000000)) + 1
    }
}

function addIdea() {
    var title = titleInputEl.value
    var body = bodyInputEl.value

    if (checkValuesPresent(title,body))return alert("Not a valid idea.");
      if (checkDuplicate(title, body)) {
        return alert("This idea already exists, try another.")
    }

    const idea = new Idea(title, body)
    list.push(idea)
    clearInputs()
    resetList()

    // create idea and put onto the dom by creating a new element
}

document.addEventListener('click', function(e) {
    if (e.target && e.target.id == 'delete-btn') {
        removeIdea(Number(e.target.dataset.id))
    }
});

function resetList() {
    clearIdeaSection()
    list.forEach(idea => addIdeaElement(idea))
}

function clearInputs() {
    titleInputEl.value = ""
    bodyInputEl.value = ""

}

function removeIdea(id) {
    list = list.filter(idea => idea.id !== id)
    resetList()
}

function addIdeaElement(idea) {
    const div = window.document.createElement('div')
    div.innerHTML = `<h1>${idea.title}</h1> <p>${idea.body}</p> <button data-id=${idea.id} id="delete-btn" >delete</button>`
    window.document.querySelector('#idea-section').prepend(div)
}

function clearIdeaSection() {
    window.document.querySelector('#idea-section').innerHTML = ''
}

function checkValuesPresent(title, body) {
    return !title || !body
}

function checkDuplicate(newTitle, newBody) {
    return !!list.find(({ title, body }) => title === newTitle && body === newBody)
}
