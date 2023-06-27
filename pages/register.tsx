import { createUserHandler } from '@/apps/api/modules/user/user.handlers';
import { createUserServices } from '@/apps/api/modules/user/user.services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function Register() {
  const queryClient = useQueryClient();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation(createUserServices, {
    onSuccess: (data) => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Wystąpił błąd podczas dodawania obiektu:', error);
    },
  });

  const registerUser = async (event: any) => {
    event.preventDefault();

    try {
      await mutation.mutateAsync({ name, email, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={registerUser}>
        <label>
          First Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Register User</button>
      </form>
    </>
  );
}
