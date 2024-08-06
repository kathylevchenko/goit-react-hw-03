import css from './SearchBox.module.css';

export default function SearchBox(value,onFilter){
    return (
        <div>
        <p>Find contscts by name</p>
        <input type= "text" value={value} onChange={(e)=>onFilter(e.target.value)}/>
        </div>
    );
} 