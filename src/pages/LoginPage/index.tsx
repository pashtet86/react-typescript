import { useForm, FormProvider } from "react-hook-form";
import 						 					'./login-styles.scss';
import FormInput 						from 'components/FormInput';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } 			from 'hooks/useActions';

interface ILoginInputs {
	email: string,
	password: string,
};
 
const LoginPage: React.FC = () => {

	const { login } = useActions(); 
  const { token, error, loading } = useTypedSelector(
    (state) => state.login
  );
	
	const onSubmit = () => {
		console.log('onSubmit');
		
		login({ email: 'email', password: 'pswd'});
	};

	interface validation {
		required: Boolean,
		pattern?: {
			value: string | RegExp,
			message: string,
		}
	}

	const emailRules: validation = {
		required: true,
		pattern: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			message: 'Invalid email address'
		}
	}

	const defaultRule: validation = {
		required: true,
	}

	const rules = {
		email: emailRules,
		password: defaultRule
	}

	const methods = useForm<ILoginInputs>();

	return (<>
		<h1>Login page</h1>
		<FormProvider {...methods} >
			<form onSubmit={methods.handleSubmit(onSubmit)}>

			{ token } <br/>
			 {error} <br/>
			 {loading } <br/>

				{/* *************** EMAIL field section *************** */}
				<FormInput
					rules={rules.email}
					name='email'
					type='email'
				/>

				{/* *************** PASSWORD field section *************** */}
				<FormInput
					rules={rules.password}
					name='password'
					type='password'
				/>

				<input type="submit" />

			</form>
		</FormProvider>
	</>);
}
 
export default LoginPage;
