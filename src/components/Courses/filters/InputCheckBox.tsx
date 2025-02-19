import React, { Fragment } from 'react'
import { useHandleCheck } from '../../common/hooks/hookCoursesScreen/useHandleCheck';
import RadioInput from './RadioInput';
import CheckboxInput from './CheckBoxInput';
interface Props {
  children: React.ReactNode;
  value: string;
  check: string[];
  radioCheckType: string; 
  radioCheckLevel: string;
}


const InputCheckBox = ({ children, value, check, radioCheckType, radioCheckLevel }: Props) => {
  const { handleCheck } = useHandleCheck()
  const handleChange = (value: string) => {
    const inputType = value.startsWith("type-") ? "radio" : value.startsWith("level-") ? "radio" : "checkbox";
    handleCheck(value, inputType);
  };

  return (
    <Fragment >
      {value.startsWith("type-") || value.startsWith("level-") ? (
          <RadioInput 
                value={value} 
                radioCheck={value.startsWith("type-") ? radioCheckType : radioCheckLevel} 
                onChange={handleChange} 
                children={children}
        />
       ) : (
          <CheckboxInput 
                        value={value} 
                        check={check}
                        onChange={handleChange} 
                        children={children}
        />
      )}
    </Fragment>
  );
};

export default InputCheckBox;