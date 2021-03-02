import { useFormContext } from "react-hook-form";

export interface FormInputProps {
  name: string
  type?: string
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
			/>

      <div className="error-message">
				{errors[name] && errors[name].type === 'required' && 'Field is required'}
			</div>

      <div className="error-message">
				{errors[name] && errors[name].type === 'pattern' && errors[name].message}
			</div> 
		</div>
	);
}
 
export default FormInput;