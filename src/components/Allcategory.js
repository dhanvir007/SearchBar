import { useState, useEffect } from 'react'
import './Allcategory.css'

const Allcategory = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => (response.json()))
            .then((data) => {
                setCategory(data)
            })
            .catch((error) => {
                console.error("There is certain problem in fetching", error)
            })
    })
    return (
        <>
            {category.map((list) => (
                <div className="listCategories" >
                    <>
                        <div className="Categories" >
                            <div className="header"><img src={list.image}></img></div>
                            <div className="body">
                                <p className="title">{list.title}</p>
                                <p>Category :- {list.category}</p>
                                <p>Price :- {list.price}</p>
                                <p>Rating :- {list.rating.rate} Review :- {list.rating.count}</p>
                            </div>
                        </div>
                    </>

                </div>
))}
        </>
    )
}
export default Allcategory