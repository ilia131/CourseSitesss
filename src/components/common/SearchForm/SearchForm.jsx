import { Fragment } from "react"
import images from '../../../assets/landingpng'

const SearchForm = ({formStyle , inputStyle ,inputdivStyle,placeHolder, handleSearch}) => {
  return (
    <Fragment>
        <form className={formStyle}>  
                      <div className={inputdivStyle}>
                           <img 
                                src={images.Search} 
                                width={24.29} 
                                height={24.97} 
                          />
                      </div>
                      <input    
                               onChange={(e)=>handleSearch(e.target.value)}
                               placeholder='...دنبال چی میگردی؟'
                               className={inputStyle}
                    />
                </form>  
    </Fragment>
  )
}

export default SearchForm