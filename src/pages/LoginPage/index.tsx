import React, { useState }                    from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import                                './login-styles.scss';
import FormInput                 from 'components/FormInput';
import { useTypedSelector }      from 'hooks/useTypedSelector';
import { useActions }            from 'hooks/useActions';
import validationRules           from 'helpers/validation';
import { Helmet }                from 'react-helmet';
// import { useParams }             from 'react-router-dom';

interface ILoginInputs {
  email: string,
  password: string,
}

// interface IRouteParam {
//   id: string | undefined,
// }

const LoginPage: React.FC = () => {
  const { login, update } = useActions();
  const {
    token, error, loading, form,
  } = useTypedSelector(
    (state) => state.login,
  );

  const [credentials, setCredentials] = useState<ILoginInputs>({ email: '', password: '' });
  // const [password, setPassword] = useState('');

  // const { id } = useParams<IRouteParam>();

  const onSubmit = () => {
    login(form);
  };

  const methods = useForm<ILoginInputs>();

  const onChange = (value: string, name: string) => {
    // update store
    update({ value, name });
    // try local hook
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="login-page">
      <Helmet>
        <title>Login page</title>
      </Helmet>

      <div>
        <h1>Login page</h1>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>

            {/* { id } */}
            <br />
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
              value={form.email}
              type="email"
              onChange={onChange}
            />

            {/* *************** PASSWORD field section *************** */}
            <FormInput
              onChange={onChange}
              value={form.password}
              rules={validationRules.password}
              name="password"
              type="password"
            />

            <input type="submit" />

          </form>
        </FormProvider>

      </div>
    </div>
  );
};

export default LoginPage;
