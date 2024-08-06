import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css"


export default function Contact({
contact: {id, name, number}, onDelete
}) {

    return (
        <div className={css.fullList}>
          <div className={css.listItemContainer}>
            <p className={css.spanItem}>
              <FaUser />{name} </p>
            <p className={css.spanItem}> 
              <FaPhone />
              {number}</p>
          </div>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      );
    }