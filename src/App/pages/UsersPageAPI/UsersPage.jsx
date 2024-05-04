import { useEffect, useState } from 'react';

import axios from 'axios';

import UserItem from './components/UserItem';

import './App.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: 'get',
        url: 'https://api.github.com/users',
      });

      setUsers(
        result.data.map((raw) => ({
          id: raw.id,
          login: raw.login,
          avatarUrl: raw.avatar_url,
        })),
      );
    };

    fetch();
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
