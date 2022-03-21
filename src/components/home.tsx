import { useState } from 'react'
import '../styles.css'
import AddPhoto from './add-photo'
import DelPhoto from './del-photo'
import Slideshow from './slideshow'

export default function HomeScreen(){
    const [focus, setFocus] = useState("home")

    return(<div className='app'>

    {focus==="home"?
    <div className='menu'>
        <button onClick={()=>{setFocus('slideshow')}} className='start-button'>Start Slides</button><br/>
        <button onClick={()=>{setFocus('add')}} className='add-button'>Add Pic</button><br/>
        <button onClick={()=>{setFocus('del')}} className='del-button'>Delete Pic</button>
        
    </div>
    
    :focus==="add"?<AddPhoto nav={setFocus}/>
    :focus==="del"?<DelPhoto nav={setFocus}/>
    :focus==="slideshow"?<Slideshow nav={setFocus}/>
    :<div/>

    }

    </div>)
}

