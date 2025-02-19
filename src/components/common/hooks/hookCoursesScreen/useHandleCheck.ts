// useHandleCheck.tsx
import { useAppDispatch, useAppSelector } from '../../../../redux/hook'; 
import { setCheck, setType, setLevel, setRadioCheckLevel, setRadioCheckType, setArray } from '../../../../redux/features/coursesSlice';

export const useHandleCheck = () => {
  const dispatch = useAppDispatch();
  const { check } = useAppSelector((state) => state.filters);

  const handleCheck = (id: any, type: string) => {
    if (type === 'radio') {
      if (id.startsWith('type-')) {
        dispatch(setRadioCheckType(id));
        dispatch(setType(id.replace(/^tech-|^type-/, '')));
      } else {
        dispatch(setRadioCheckLevel(id));
        dispatch(setLevel(id.replace(/^tech-|^level-/, '')));
      }
    } else {
      let updatedItems;
      if (check.includes(id)) {
        updatedItems = check.filter((item) => item !== id);
      } else {
        updatedItems = [...check, id];
      }

      dispatch(setCheck(updatedItems));

      const isNotEmpty = updatedItems.length > 0;
      const cleanedIds = updatedItems.map((item) =>
        String(item).replace(/^tech-|^type-/, '')
      );

      if (isNotEmpty) {
        const count = cleanedIds.join(',').split(',');
        dispatch(setArray(count));
      }
    }
  };

  return { handleCheck };
};
