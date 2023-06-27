import React, { FormEventHandler, useEffect, useState } from 'react';
import { NextPage } from 'next/types';
import { signIn, useSession } from 'next-auth/react';

const SignIn: NextPage = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { data } = useSession();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn('credentials', {
        name,
        password,
        callbackUrl: '/horse',
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        First Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="login" />
    </form>
  );
};
export default SignIn;
