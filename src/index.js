import { initializeApp } from "firebase/app"
import { collection, getFirestore, getDocs } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAnzu0IF7xVZ0dnLmOlckpLZINHnmgbJk4",
  authDomain: "fir-9-dojo-16a15.firebaseapp.com",
  projectId: "fir-9-dojo-16a15",
  storageBucket: "fir-9-dojo-16a15.appspot.com",
  messagingSenderId: "624605491814",
  appId: "1:624605491814:web:93616f98d00016bc68f3a7"
}
initializeApp(firebaseConfig)

// Initialize Firestore once
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books');
getDocs(colRef).then((snapshot) => {
let books = []
snapshot.docs.forEach((doc) => {
books.push({...doc.data(), id: doc.id })
}) 
console.log(books)
}).catch(err=> {
console.log(err.message)})
//adding documents 
const addBookFrom = document.querySelector('add')
addBookFrom.addEventListener('submit',(e)=>{
  e.preventDefault()
})
//deleting documents 
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit',(e)=>{
e.preventDefault()
})