import { useState , useEffect, createContext,  } from "react";
import { getProducts } from "../Services/api";
import React from 'react'

export const productsContext= createContext();

export default function ProductContextProvider(props) {

    const [products , setProducts]= useState([])

    useEffect(()=>{

            const fetchAPI = async ()=>{

                    setProducts(await getProducts())
            }

            fetchAPI();

    },[])




  return (
    <div>
        <productsContext.Provider value={products}>
            {props.children}
        </productsContext.Provider>
    </div>
  )
}
