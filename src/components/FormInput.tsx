import React              from 'react';
import { useFormContext } from 'react-hook-form';

type ChangeType = (value: string, name: string) => void;

interface FormInputProps {
  name: string,
  type?: string,
  rules?: Object,
  onChange: ChangeType,
  value: string,
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { register, errors } = useFormContext();

  const {
    name, type, rules, onChange, value,
  } = props;

  return (
    <div className="form-input">
      <input
        value={value}
        type={type}
        name={name}
        ref={register(rules)}
        data-testing={name}
        onChange={(e) => onChange(e.target.value, name)}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"

      />

      {
        errors[name]
        && errors[name].type === 'required'
        && <div className="error-message">Field is required</div>
      }

      {
        errors[name]
        && errors[name].type === 'pattern'
        && <div className="error-message">{errors[name].message}</div>
      }

    </div>
  );
};

export default FormInput;
