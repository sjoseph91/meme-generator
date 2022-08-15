
import './App.css';
import React, {useState, useEffect} from 'react';
import CompleteMemes from "./components/CompletedMemes";
import Preview from "./components/Preview";



function App() {

  const [previewImage, setPreviewImage] = useState("https://i.imgflip.com/1ur9b0.jpg")
  const [memes, setMemes] = useState([]);
   const [completedMemes, setCompletedMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => {
        setMemes(res.data.memes)
      })
      .catch(err => console.log(err))
  }, [])

  
 
  function refreshImage(){
    const randomIndex = Math.floor(Math.random() * memes.length);
    setPreviewImage(memes[randomIndex].url);
  }

  function addMeme(newMeme){
    setCompletedMemes(prevMemes => [...prevMemes, newMeme])
  }
  function deleteMeme(id){
    setCompletedMemes(prevMemes => {
      return prevMemes.filter(meme => meme.id !== id);
    })
  }

  return (
    <main className="App">
      <Preview 
        img={previewImage} 
        refresh={refreshImage}
        addMeme={addMeme}
      />
      <CompleteMemes 
        completedMemes={completedMemes} 
        deleteMeme={deleteMeme} />
    </main>
  );
}

export default App;
