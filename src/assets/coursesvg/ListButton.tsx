import clsx from 'clsx'

interface Props {
    isList : boolean
    handleListView: () => void
}


const ListButton = ({isList , handleListView}: Props) => {
  return (
    <div className={clsx('w-[45px] h-[45px] flex items-center justify-center shadow-lg rounded-tr-[10px]', isList ? 'bg-[#E7E7E7]' : '')}
      onClick={handleListView}
    >
    
     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
         <path d="M1.33203 1.94733H24.2744M1.33203 9.24719H24.2744M1.33203 16.547H24.2744" stroke="#005B58" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  )
}

export default ListButton