import '../styles.css'

export default function Slideshow(props:{nav:Function}){


    return(<div className="slideshow">
        <img className="current-photo" src="https://www.w3schools.com/images/w3schools_green.jpg"></img>
        <button className="del-button" onClick={()=>{props.nav("home")}}>Go Back</button>
        <img className="nav-button-right" src="https://project1storagebrooks.blob.core.windows.net/photos/buton.png" onClick={()=>{}}/>
        <img className="nav-button-left" src="https://project1storagebrooks.blob.core.windows.net/photos/buton.png" onClick={()=>{}}/>
        
        
    </div>)
}