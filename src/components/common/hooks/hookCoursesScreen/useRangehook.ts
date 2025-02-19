import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { setIsActive, setRange } from "../../../../redux/features/coursesSlice";

export const useRange = () => {
  const range = useAppSelector((state) => state.filters.range);
  const dispatch = useAppDispatch();

  const handleChange = (values: number[]) => {
    dispatch(setIsActive(true))
    dispatch(setRange(values));
  };

  return { range, handleChange };
};