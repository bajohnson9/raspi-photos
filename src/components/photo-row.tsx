import Photo from "./photo-model";

export default function PhotoRow(props:{img:Photo}){
    return(<tr>
        <h4>{props.img.name}</h4>
        <img className='add-photo-preview' src={props.img.src} alt="wow imag"/>
        <button className="del-button">Delete Photo</button>
    </tr>)

}