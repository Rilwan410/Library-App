const addBtn = document.querySelector('.add-button')
const addBook = document.querySelector('.container')
const overlay = document.querySelector('.overlay')
const booksGrid = document.querySelector('.books-grid')
const submitBtn = document.querySelector('.submit-btn')
const title = document.querySelector('.title')
const author = document.querySelector('.author')
const numPages = document.querySelector('.pages')
const checkbox = document.querySelector('.checkbox')








const myLibrary = []

function Book (title,author,numpages){
this.title = title
this.author = author
this.pages = numpages
}
// let gameOfThrones = new Book ('Game Of Thrones', 'A guy', 5000)
// let thePowerOfNow = new Book ('The Power Of Now','Eckhart Tolle', 1000)

// console.log(thePowerOfNow)
// myLibrary.push(gameOfThrones,thePowerOfNow)
// console.log(myLibrary)


function removeCard(){
booksGrid.removeChild(card)
}

addBtn.addEventListener('click', ()=>{
    addBook.classList.add('transition')
    addBook.classList.toggle('active')
    overlay.classList.toggle('active')
})

overlay.addEventListener('click', () =>{
overlay.classList.add('active')
addBook.classList.add('active')
})

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    // myLibrary.push(new Book (title.value, author.value, numPages.value))
    // console.log(myLibrary)

    const card = document.createElement('div')
    const newTitle = document.createElement('p')
    const newAuthor = document.createElement('p')
    const newNumPages = document.createElement('p')
    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')
    const buttonDiv = document.createElement('div')


 
    if(title.value === '' || author.value === '' || numPages.value === ''){
        return
    }
    if(numPages.value > 10000){ return alert('Maximum Pages: 10,000') }
    if(title.value.length > 30) return alert('Character Limit: 30')
    if(author.value.length > 30) return alert('Character Limit: 30')

    newTitle.innerText = `"${title.value}"`
    newAuthor.innerText = `By ${author.value}`
    newNumPages.innerText = `${numPages.value} pages`
    card.classList.add('book-card')
    newTitle.classList.add('book-card-text')
    newAuthor.classList.add('book-card-text')
    newNumPages.classList.add('book-card-text')
    removeButton.classList.add('book-button','remove')
    readButton.style.marginLeft =  '10px'
    readButton.style.marginTop =  '15px'
    removeButton.style.marginLeft =  '10px'
    removeButton.style.marginTop =  '15px'
    readButton.classList.add('book-button','read')
    checkbox.checked === false ? readButton.innerText = 'Not Read' : readButton.innerText = 'Read'
    readButton.style.backgroundColor = readButton.innerText === 'Read' ? 'rgb(64, 156, 64)' : 'rgb(175, 78, 78)' 
    removeButton.innerText = 'Remove'
    buttonDiv.classList.add('books-grid-buttons')
    buttonDiv.append(readButton,removeButton)
    card.append(newTitle,newTitle,newAuthor,newNumPages,buttonDiv)
    booksGrid.appendChild(card)
    
    const addNewBook = new Book (title.value, author.value, numPages.value)
    myLibrary.push(addNewBook)
    console.log(myLibrary)
    
    removeButton.addEventListener('click', () => {
        card.style.opacity = '0'
        setTimeout(()=> {
        booksGrid.removeChild(card)
        },500)
    })

    readButton.addEventListener('click', () => {
        readButton.innerText= readButton.innerText === 'Read' ? 'Not Read' : 'Read'
        if(readButton.innerText === 'Not Read'){
        readButton.style.backgroundColor = 'rgb(175, 78, 78)'
        }else{
        readButton.style.backgroundColor = 'rgb(64, 156, 64)'
        }
    })

    
    
    overlay.classList.toggle('active')
    addBook.classList.toggle('active')
    title.value = ''
    author.value = ''
    numPages.value = ''
    
})




