import InputCheckBox from "./InputCheckBox";

interface TechnologyFilterProps {
    technology: { id: number; techName: string; name: string }[];
    check: number[];
    onCheck: (id: number) => void;
  }
  
const TechnologyFilter: React.FC<TechnologyFilterProps> = ({ technology, check, onCheck }) => {
    return (
      <div className="grid justify-item-end gap-[20px] mt-2 overflow-y-scroll pt-[15px] px-[20px]" dir="rtl">
        {technology.map((item) => (
          <InputCheckBox
            key={item.id}
            value={item.id}
            check={check}
            id={item.id}
            name={item.techName}
            HandleCheck={onCheck}
          >
            {item.name}
          </InputCheckBox>
        ))}
      </div>
    );
  };
  
export default TechnologyFilter;
  