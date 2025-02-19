export interface CheckboxInputProps {
    value: string;
    check: string[];
    children: React.ReactNode;
    onChange: (value: string) => void;
}
  
export interface RadioInputProps {
    value: string;
    radioCheck: string;
    children: React.ReactNode;
    onChange: (value: string) => void;
}