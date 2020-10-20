import React,{useState} from 'react'
import {AddCategory} from './AddCategory'
import { GifGrid } from './GifGrid';
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Boruto']);
    // const handled = ()=>{
    //   setCategories(cats => [...cats,'Boruto']);
    // }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
          
            <ol>
                {
                categories.map(category=>
                    <GifGrid 
                    key={category}
                    category={category}/>
                )
            }
            </ol>
            
        </div>
    )
}
