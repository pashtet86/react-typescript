import { useForm, FormProvider } from "react-hook-form";
import 						 			'./login-styles.scss';
import FormInput 				from 'components/FormInput'

interface ILoginInputs {
	email: string,
	password: string,
};
 
const LoginPage: React.FC = () => {
	
	const onSubmit = () => console.log('submitted');

	const { control, handleSubmit, errors } = useForm<ILoginInputs>({
    defaultValues: {
      email: ""
    },
    mode: "onChange"
  });

	const rules = {
		email: {
			required: true,
			pattern: {
				value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
				message: 'Invalid email address'
			}
		},
		password: {
			required: true,
		}
	}

	const methods = useForm();

	return (<>
		<h1>Login page</h1>
		<FormProvider {...methods} >
			<form onSubmit={handleSubmit(onSubmit)}>

			{/* *************** EMAIL field section *************** */}

			<FormInput
				control={control}
				errors={errors}
				rules={rules.email}
				name='email'
				type='email'
			/>

			<FormInput
				control={control}
				errors={errors}
				rules={rules.password}
				name='password'
				type='password'
			/>


				{/* <input
					name="email"
					ref={register({ required: true, pattern: patterns.email })}
					/>

				<div className="error-message">
					{errors.email && errors.email.type === 'required' && 'Email field is required'}
				</div>

				<div className="error-message">
					{errors.email && errors.email.type === 'pattern' && errors.email.message}
				</div> */}

				{/* ***************  PASSWORD field section *************** */}
				{/* <input
					name="password"
					ref={register({ required: true })}
				/>

				<div className="error-message">
					{errors.password && <span>Password field is required</span>}
				</div> */}

				<input type="submit" />
			</form>
		</FormProvider>
	</>);
}
 
export default LoginPage;