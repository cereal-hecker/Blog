import React from 'react';
import Navbar from "./Navbar";
import Write from "./Write";

// function AppWrite() {
//     const [notes, setNotes] = useState([]);
  
//     function addNote(newNote) {
//       setNotes(prevNotes => {
//         return [...prevNotes, newNote];
//       });
//     }
  
//     function deleteNote(id) {
//       setNotes(prevNotes => {
//         return prevNotes.filter((noteItem, index) => {
//           return index !== id;
//         });
//       });
//     }

function AppWrite(){
    return (
    <div>
        <Navbar />
        <Write />
    </div>)
}

export default AppWrite;