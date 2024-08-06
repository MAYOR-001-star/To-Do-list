let books = document.querySelector('ul')

books.addEventListener('click', (e)=>{
    if(e.target.className = '.removal'){
        const li = e.target.parentNode;
        li.remove()
    }
})


const addBooks = document.querySelector("#add-form")
addBooks.addEventListener('click', (e)=>{
    e.preventDefault();
    const input = addBooks.querySelector('input[type="text"]').value;
    if(input){
        const list = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        list.className = 'book';
        bookName.className = 'booklet';
        bookName.textContent = input;
        deleteBtn.className = 'removal';
        deleteBtn.textContent = 'delete';

        
        list.appendChild(bookName);
        list.appendChild(deleteBtn);
        books.appendChild(list);

        addBooks.querySelector('input[type="text"]').value = '';
    }
})




