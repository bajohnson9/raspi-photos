import '../styles.css'

export default function AddPhoto(props:{nav:Function}){
    //preview of photos to add?
    
    return(<div className='menu'>
        <div className='add-photo-preview-container'>
            <img className='add-photo-preview' src="https://www.w3schools.com/images/w3schools_green.jpg" alt="wow imag"/>
        </div>
        <button className="add-button">Add Photo</button>
        <button className="del-button" onClick={()=>{props.nav("home")}}>Go Back</button>

    </div>)
}