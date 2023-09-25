import { useState,useEffect } from "react"

 

const InputSearch = ()=>{
  const [category,setCategory] = useState([])
  const [selectedCategory,setSelecetedCategory] = useState("All")
  const [product,setProduct] = useState([])
  const [searchTerm,setSearchTerm] = useState('')

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
    .then((response)=>(response.json()))
    .then((data)=>{
        setCategory(["All",...data])
    })
    .catch((error)=>{
       console.error("Problem in Fetching...",error)
    })
  },[])

  useEffect(()=>{
     
    const API = 'https://fakestoreapi.com/products'
    
    if( selectedCategory !== "All"){
      
      API += `/categories/${selectedCategory}`
    }

    fetch(API)
    .then((response)=>(response.json()))
    .then((data)=>{
        setProduct(data)
    })
    .catch((error)=>{
       console.error("Some Error",error)
    })
  },[selectedCategory])

  const FilterSearch = product.filter((item)=>{
    return(
      (selectedCategory==="All" || selectedCategory=== item.category)&&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return(
    <>
      <div>
           <h1>Fake Store Shopping </h1>
      </div>
      <div>
        <select 
          value={selectedCategory}
          onChange={e=>setSelecetedCategory(e.target.value)}
        >
          {category.map((categorys)=>(
            <option value = {categorys}>{categorys}</option>
          ))}

           
        </select>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search Products.."
          onChange={e=>setSearchTerm(e.target.value)}
         ></input>
      </div>
      
      <div className="list">
         { FilterSearch.map((lists)=>(
            <div key={lists.id}>
              <h3>{lists.title}</h3>
              <p>Price :- {lists.price}</p>
              <p>Category :- {lists.category}</p>
            </div>
         ))}
      </div>
    </>
  )
}
export default InputSearch