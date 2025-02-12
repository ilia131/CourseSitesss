import NewsItem from "./NewsItem"

const NewsList = ({news}) => {
  return (
    <div className='mb-[12px] grid   dark:text-white max-md:pt-[40px] max-md:gap-[30px] max-md:p-[20px] max-xl:gap-0'>
           {news.slice(0,3).map((item, index) => (
                          <NewsItem  
                            key={index} 
                             title={item.googleTitle} 
                             date={item.insertDate} />
            ))}
                    
    </div>
  )
}

export default NewsList