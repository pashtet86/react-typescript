import React                     from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import './login-styles.scss';
import FormInput                 from 'components/FormInput';
import { useTypedSelector }      from 'hooks/useTypedSelector';
import { useActions }            from 'hooks/useActions';
import validationRules           from 'helpers/validation';

interface ILoginInputs {
  email: string,
  password: string,
}

const LoginPage: React.FC = () => {
  const { login } = useActions();
  const { token, error, loading } = useTypedSelector(
    (state) => state.login,
  );

  const onSubmit = () => {
    console.log('onSubmit');

    login({ email: 'email', password: 'pswd' });
  };

  const methods = useForm<ILoginInputs>();

  return (
    <div className="login-form">
      <h1>Login page</h1>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>

          { token }
          <br />
          {error}
          <br />
          {loading }
          <br />

          {/* *************** EMAIL field section *************** */}
          <FormInput
            rules={validationRules.email}
            name="email"
            type="email"
          />

          {/* *************** PASSWORD field section *************** */}
          <FormInput
            rules={validationRules.password}
            name="password"
            type="password"
          />

          <input type="submit" />

        </form>
      </FormProvider>
    </div>
  );
};

export default LoginPage;
