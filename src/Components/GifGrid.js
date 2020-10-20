import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const apiKey = 'pXCeps1OZJX4Yf90I4iehoAkPgq7nL2s';
    const [images,setImages]=useState([]);
    useEffect(()=>{
        getGifs();
    }, [])
// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const getGifs = async()=>{
        
        const url = `http://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=${apiKey}`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img=>{
            return {
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        // console.log(gifs);
        setImages(gifs);
    }
    //getGifs();
    return (
        <div>
            <h3>{category}</h3>
           
                {
                    images.map(img => (
                       <GifGridItem 
                       key={img.id}
                       { ...img }
                       />
                    ))
                }
           
        </div>
    )
}
