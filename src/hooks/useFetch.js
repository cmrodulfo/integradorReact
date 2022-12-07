

import { useEffect, useState } from "react";

export const useFetch =(id)=>{

    const [productsDB, setproductsDB] = useState([]);
  
    useEffect(()=>{
      fetch("productsDB.json")
        .then(response => response.json()
        .then(datos =>{

          datos = id ? datos.find(product => product.id === id) : datos

          setproductsDB(datos)



        }))
    }, [id])


    return{productsDB}
}


/*
export const useFetch = (ruta= "productsDB.json" , id=false )=>{

  const [productsDB, setproductsDB] = useState([]);

  useEffect(() => {

    async function getData(){
        let datos 
        datos = await fetch(ruta)
        datos = await datos.json()

        datos = id ? datos.find(product => product.id === id) : datos

        setproductsDB(datos)

      }

      setTimeout(()=>{
        getData()
      },1000);

    

  },[id])

  return{productsDB}
}
*/