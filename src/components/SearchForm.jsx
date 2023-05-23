import React from 'react'
import { useGlobalContext } from '../../Context'

const SearchForm = () => {
  // I'll be using uncontrolled inuput

    const {setSearchTerm} = useGlobalContext();
    const searchValue = React.useRef("");
    const serachCocktail = () => {
      setSearchTerm(searchValue.current.value);
    }
    const handleSubmit = (e) => {
      e.preventDefault(); 
    }
    React.useEffect(() => {
      //This is applied when loading the page so the input is triggered
      searchValue.current.focus();
    },[])
  return (
    <section className='section search'>
      <form action='' className='search-form' onSubmit = {handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite cocktail</label><input type="text" id="name" ref={searchValue} onChange={serachCocktail} />
  
        </div>
      </form>
    </section>
  )
}

export default SearchForm
