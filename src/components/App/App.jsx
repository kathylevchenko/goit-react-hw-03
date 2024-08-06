import { useState, useEffect } from 'react';
import initialContacts from "../../contacts.json"
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList"
import css from "./App.module.css";


export default function App(){
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts !== null
      ? JSON.parse(savedContacts)
      : initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
 const [filter, setFilter] = useState('');
 const addContact =(newContact)=>{
  setContacts((prevContact)=>{
    return[...prevContact, newContact]     
  })
}
       
const deleteContacts = (contactId) => {
  setContacts((prevContacts) => {
    return prevContacts.filter((contact) => contact.id !== contactId);
  });
};

  const visibleContacts = contacts.filter((contact) =>
   contact.name.toLowerCase().includes(filter.toLowerCase())
  );
          useEffect(()=>{
            const savedContacts =localStorage.getItem("contacts")
            if (savedContacts){
                setContacts(JSON.parse(savedContacts))
            }
          },[]);
        return (
            <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm onAdd = {addContact}/>
            <SearchBox value={filter} onFilter={setFilter}/>
            <ContactList contacts = {visibleContacts} onDelete={deleteContacts}/>
          </div>
        );
    };
