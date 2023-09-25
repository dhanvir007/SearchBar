import SearchBar from './SearchBar'
import './FetchAPI.css'
import Allcategory from './Allcategory'
import InputSearch from './InputtSearch'

const FetchAPI = () =>{
    return (
     <>
         <div>
             <header>
                <div><InputSearch /></div>
                <div>Search-List</div>
             </header>
             <section>
                  <div>
                  <SearchBar />
                  </div>
                  <div className="cate"> <Allcategory /></div>
             </section>
        </div>
     </>
    )
} 

export default FetchAPI