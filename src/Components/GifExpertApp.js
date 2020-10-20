import React,{useState} from 'react'
import {AddCategory} from './AddCategory'
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Naruto', 'Dragon Ball']);
    // const handled = ()=>{
    //   setCategories(cats => [...cats,'Boruto']);
    // }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
          
            <ol>
                {
                categories.map(category=>{
                return(<li key={category}>{category}</li>);
                })
            }
            </ol>
            
        </div>
    )
}
