import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer"
import Photo from "./photo-model";
import PhotoRow from "./photo-row";


export default function DelPhoto(props:{nav:Function}){
    const images:Photo[] = [
        {
            id:0,    
            src:"https://www.w3schools.com/images/w3schools_green.jpg",
            name:"green.jaypeg"
        },
        {
            id:1,    
            src:"https://www.w3schools.com/images/w3schools_green.jpg",
            name:"greener.jaypeg"
        },
        {
            id:2,    
            src:"https://www.w3schools.com/images/w3schools_green.jpg",
            name:"greener.jaypeg"
        },
        {
            id:3,    
            src:"https://www.w3schools.com/images/w3schools_green.jpg",
            name:"greener.jaypeg"
        },
        {
            id:4,    
            src:"https://www.w3schools.com/images/w3schools_green.jpg",
            name:"greener.jaypeg"
        },

    ]

    return(<div className='menu'>
        <div className="del-photo-preview-container">
            <table className="del-photo-preview">
                {images.map(img => <PhotoRow img={img}></PhotoRow>)}
            </table>
        </div>
    <button className="del-button" onClick={()=>{props.nav("home")}}>Go Back</button>
</div>)}