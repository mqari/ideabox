let list = []
let filteredList = []
const saveBtnEl = window.document.querySelector('#form-section__button')
const titleInputEl = window.document.querySelector('#input-title')
const bodyInputEl = window.document.querySelector('#input-body')
const searchInputEl = window.document.querySelector('#search-box')


saveBtnEl.addEventListener('click', addIdea)

// titleInputEl.addEventListener('keyup', checkToDisableSaveBtn)
// bodyInputEl.addEventListener('keyup', checkToDisableSaveBtn)


function checkToDisableSaveBtn() {
  const title = titleInputEl.value
  const body = bodyInputEl.value
  const shouldEnableSaveBtn = checkValuesPresent(title, body)

  updateSaveBtn(shouldEnableSaveBtn)
}

function updateSaveBtn(shouldEnable) {
  saveBtnEl.disabled = shouldEnable ? false : true
  saveBtnEl.classList = shouldEnable ? [] : ['disabled-save-btn']
}

document.querySelector('.search-icon').addEventListener('click', function(e) {
  displaySearchResults()
});

document.querySelector('#search-box').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    displaySearchResults()
  }
});

function displaySearchResults() {
  filteredList = list.filter(idea => filterSearchResult(idea.title, idea.body))
  clearIdeaSection()
  filteredList.forEach((idea, i) => {
    addIdeaElement(idea)
  });
}

function filterSearchResult(title, body) {
  return title.toLowerCase().indexOf(searchInputEl.value.toLowerCase()) !== -1 || body.toLowerCase().indexOf(searchInputEl.value.toLowerCase()) !== -1
};
