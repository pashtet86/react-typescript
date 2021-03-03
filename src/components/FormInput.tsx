import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormInputProps {
  name: string,
  type?: string,
  rules?: Object,
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { register, errors } = useFormContext();

  const { name, type, rules } = props;

  return (
    <div className="form-input">
      <input
        type={type}
        name={name}
        ref={register(rules)}
        data-testing={name}
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
