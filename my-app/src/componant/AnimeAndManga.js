import {useState,useEffect} from "react";
const axios = require('axios');
let showItem;

function AnimeAndManga(){
    
    
    const [word,setWord] = useState("anime");
    const [items , setItems] = useState([])
   
   
    
      
     useEffect(() => {
        
        axios
        .get(`https://kitsu.io/api/edge//trending/${word}`)
        .then((response)=>{console.log(response.data.data) 
            setItems(response.data.data)
            
        })
        .catch(e => console.log(e))


        
  

    },[word]);

 
    

    return(
        <div >
            <button onClick = {() => setWord('anime')} >Anime</button>
            <button onClick = {() => setWord('manga')}>Manga</button>
            <div id = "yt">
                
            
            {items.map((e)=>{

                return (
                    <div >
                    <h3>{e.attributes.titles.ja_jp}</h3>
                         <img src={e.attributes.posterImage.original} alt=""/>
                    
                    </div>   
                    
                        )
                    
    
            })}
            </div>
            </div>
    )

}export default AnimeAndManga