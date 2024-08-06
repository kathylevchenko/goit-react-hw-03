import { useState, useEffect } from 'react';
import initialContacts from "../../contacts.json"
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList"
import css from "./App.module.css";


export default function App(){
const [contacts, setContacts] = useState(initialContacts);
 const [filter, setFilter] = useState('');
const addUser = (newUser) => {
    setContacts((prevContacts)=>{
        const saveContacts = [...prevContacts,newUser];
        localStorage.setItem("contacts", JSON.stringify(saveContacts));
        return saveContacts;
    }
        )};
       
        const deleteContact = (contactId) => {
            setContacts((prevContacts) => {
              const saveContacts = prevContacts.filter(
                (contact) => contact.id !== contactId
              );
              localStorage.setItem("contacts", JSON.stringify(saveContacts));
              return saveContacts;
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
            <ContactForm onAdd = {addUser}/>
            <SearchBox value={filter} onFilter={setFilter}/>
            <ContactList contacts = {visibleContacts} onDelete={deleteContact}/>
          </div>
        );
    };
