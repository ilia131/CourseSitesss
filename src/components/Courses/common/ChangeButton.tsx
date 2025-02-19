import GridButton from "../../../assets/coursesvg/GridButton"
import ListButton from "../../../assets/coursesvg/ListButton"
import { useAppSelector , useAppDispatch } from "../../../redux/hook"
import { setGridView  , setListView } from "../../../redux/features/courseViewSlice"
const ChangeButton = () => {
  const { isGrid, isList } = useAppSelector((state) => state.cardView);
  
  const dispatch = useAppDispatch()
   const handleGridView = () => {
    dispatch(setGridView())
   }
   const handleListView =  () => {
    dispatch(setListView())
   }
  return (
    <div className='w-[100px] h-[45px]  flex justify-between'>
       <GridButton handleGridView={handleGridView} isGrid={isGrid} />
       <ListButton handleListView={handleListView} isList={isList}/>
    </div>
  )
}

export default ChangeButton