const books = [];
const RENDER_EVENT = 'render-book';


document.addEventListener('DOMContentLoaded', function() {
  const submitForm = document.getElementById('form');
  submitForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addBook();

    let title = document.getElementById('title');
    title.value = '';
    let author = document.getElementById('author');
    author.value = '';
    let year = document.getElementById('year');
    year.value = '';
  });
});

function generateId() {
    return +new Date();
}
   
function generateBookObject(id, title, author, year, isFinished) {
    return {
      id,
      title,
      author,
      year,
      isFinished
    }
}

function getSelectValue(){
  const selectedValue = document.getElementById('book-condition').value;
  if (selectedValue == 'sudah'){
    return true;
  } else if (selectedValue == 'belum'){
    return false;
  }
}

function addBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let year = document.getElementById('year').value;
    let isFinished = getSelectValue();
    let generatedID = generateId();

    const BookObject = generateBookObject(generatedID, title, author, year, isFinished);
    books.push(BookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
}

document.addEventListener(RENDER_EVENT, function () {
    const unfinishedBookList = document.getElementById('unfinished');
    unfinishedBookList.innerHTML = '';

    const finishedBookList = document.getElementById('finished');
    finishedBookList.innerHTML = '';
   
    for (const BookItem of books) {
      const BookElement = makeBook(BookItem);
        if (!BookItem.isFinished){
          unfinishedBookList.append(BookElement);
        }
        else{
          finishedBookList.append(BookElement);
        }
    }
});

function makeBook(BookObject) {
    const titleBook = document.createElement('h2');
    titleBook.innerText = BookObject.title;
   
    const authorBook = document.createElement('p');
    authorBook.innerText = BookObject.author;

    const yearBook = document.createElement('p');
    yearBook.innerText = BookObject.year;
   
    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    const tabel = document.createElement('table');
    textContainer.append(tabel);
    
    /*Tr 1*/
    const tr1 = document.createElement('tr');
    tabel.append(tr1);
    const td1 = document.createElement('td');
    tr1.append(td1);
    td1.append(titleBook);
    const td2 = document.createElement('td');
    tr1.append(td2)
    const close = document.createElement('button');
    close.classList.add('delete-button');
    close.setAttribute('onclick', 'deletebook('+ BookObject.id +')');
    close.innerHTML = '<img src="asset/close.png">';
    td2.append(close);

    /*Tr 2*/
    const tr2 = document.createElement('tr');
    tabel.append(tr2);
    const td3 = document.createElement('td');
    tr2.append(td3);
    td3.append(authorBook);

    /*Tr 3*/
    const tr3 = document.createElement('tr');
    tabel.append(tr3);
    const td4 = document.createElement('td');
    tr3.append(td4); 
    td4.append(yearBook);
    const td5 = document.createElement('td');
    tr3.append(td5);
    const edit = document.createElement('button');
    edit.classList.add('edit-button');
    edit.setAttribute('onclick', 'editBook('+ BookObject.id +')');
    td5.append(edit);
    edit.textContent = 'Edit';
    // const remove = document.createElement('button');
    // remove.classList.add('delete-button');
    // remove.setAttribute('onclick', 'deletebook('+ BookObject.id +')');
    // td5.append(remove);
    // remove.textContent = 'Delete';
   
    const container = document.createElement('div');
    container.classList.add('item');
    container.append(textContainer);
    container.setAttribute('id', `${BookObject.id}`);
    return container;
}

// Condition Filter Button
const btn = document.querySelectorAll('.all-btn');
const allBooks = document.querySelectorAll('.book-condition');

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    allBooks.forEach((book)=>{
      if (filter == 'all') {
        book.style.display = 'block'
      } else {
          if (book.classList.contains(filter)){
            book.style.display = 'block'
          } else{
            book.style.display = 'none'
          }
      }
    })
  })
}

// Search Filter
addEventListener('input', searchBook)
function searchBook() {
  const searchInput = document.querySelector('#search');
  const filter = searchInput.value.toLowerCase();
  const BookList = document.querySelectorAll('.item');

  BookList.forEach((book) => {
    let text = book.textContent
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      book.style.display = '';
    } else {
      book.style.display = 'none';
    }
  })
}

// Edit Data
const modal = document.getElementById('myModal');

const editButton = document.getElementsByClassName('edit-button');

const span = document.getElementsByClassName('close')[0];

editButton.onclick = (id) => editBook(id);

function editBook(id) {

  modal.style.display = 'block';
  
  const editTitle = document.getElementById('edit-title');
  const editAuthor = document.getElementById('edit-author');
  const editYear = document.getElementById('edit-year');
  const bookId = document.getElementById('edit-form');

  for(const index in books){
    if(books[index].id == id){
      bookId.value = books[index].id;
      ID = bookId.value;

      editTitle.value = books[index].title;
      EditTitle = editTitle.value;

      editAuthor.value = books[index].author;
      EditAuthor = editAuthor.value;

      editYear.value = books[index].year;
      EditYear = editYear.value;

      editCondition = books[index].isFinished;
    }
  }

  span.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

// Save Data
document.addEventListener('DOMContentLoaded', function() {
  const saveForm = document.getElementById('edit-form');

  saveForm.addEventListener('submit', function(e) {
    e.preventDefault();
    saveBook();
  });
});

function getEditSelectValue(){
  const editSeletedValue = document.getElementById('edit-condition').value;
  if (editSeletedValue == 'sudah'){
    return true;
  } else if (editSeletedValue == 'belum'){
    return false;
  }
}

function saveBook(){
  const bookId = document.getElementById('edit-form');
  Id = bookId.value;

  const editTitle = document.getElementById('edit-title');
  Title = editTitle.value;

  const editAuthor = document.getElementById('edit-author');
  Author = editAuthor.value;

  const editYear = document.getElementById('edit-year');
  Year = editYear.value;

  isFinished = getEditSelectValue();

  for(const index in books){
      if(books[index].id == Id){
        const BookObject = generateBookObject(Id, Title , Author, Year, isFinished);
        books.splice(index, 1, BookObject);
  
        document.dispatchEvent(new Event(RENDER_EVENT));
        saveData();
      }
  }

  modal.style.display = 'none';
}

// Delete Data
const delBtn = document.getElementsByClassName('delete-button');

delBtn.onclick = (id) => deletebook(id);

function deletebook(id){
  const confirm = document.getElementById('confirm-alert');
  const yes = document.getElementById('yes');
  const cancel = document.getElementById('cancel');
  const saveAlert = document.getElementById('save-alert');

  confirm.style.display = 'block';

  yes.onclick = function(){
    for(const index in books){
      if(books[index].id === id){
        books.splice(index, 1);
      }
      
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();

      confirm.style.display = 'none';

      saveAlert.style.display = 'block';
      setTimeout(() => {
        saveAlert.style.display = 'none';
      }, 1000); //time in milliseconds
    }
  }
  
  cancel.onclick = function() {
    confirm.style.display = 'none';
  }
}

// Local Session
function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'Books';

function isStorageExist() /* boolean */ {
if (typeof (Storage) === undefined) {
  alert('Browser kamu tidak mendukung local storage');
  return false;
}
return true;
}

document.addEventListener(SAVED_EVENT, function () {
  console.log(localStorage.getItem(STORAGE_KEY));
});

window.onload = (event) => {
  loadDataFromStorage();
}

function loadDataFromStorage() {
  const BookFromStorage = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(BookFromStorage);
  if (data !== null) {
    for (const book of data){
      books.push(book);
    }
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
}