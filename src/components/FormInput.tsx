import { useController } from "react-hook-form";

export interface FormInputProps {
  name: string
  type?: string
	rules?: Object,
	errors?: any,
	control?: any,
}

const FormInput: React.FC<FormInputProps> = (props) => {

	const { field } = useController(props);

	const { name, type, errors } = props;

	return (
		<div className="form-input">
			<input
				type={type}
				{...field}
			/>

      <div className="error-message">
				{errors[name] && errors[name].type === 'required' && 'Email field is required'}
			</div>

      <div className="error-message">
				{errors[name] && errors[name].type === 'pattern' && errors[name].message}
			</div> 
		</div>
	);
}
 
export default FormInput;