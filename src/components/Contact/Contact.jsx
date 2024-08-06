import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css"


export default function Contact({
contact: {id, name, number}, onDelete
}) {

return(
    <>
    <div>
    <span>
    <FaUser /> */<p>{name}</p>
    </span>
    <span><FaPhoneAlt />{number}</span>
    </div>
    <button type="button" onClick={()=>onDelete(id)}>Delete</button>
    </>
     );
}
