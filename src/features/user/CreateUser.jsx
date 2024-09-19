import { useState } from 'react';
import Button from '../../ui/Buttton';
import { useDispatch } from 'react-redux';
import { updateUserName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    // Dispatch an action to save the username
    dispatch(updateUserName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && <Button type="primary">Start ordering</Button>}
    </form>
  );
}

export default CreateUser;
