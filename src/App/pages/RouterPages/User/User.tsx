import { useParams } from 'react-router-dom';

import USERS from '@/config/users';

const User = () => {
  const { id } = useParams();

  const user = USERS.find((user) => user.id === id);

  return <div>Страница пользователя {user?.name}</div>;
};

export default User;
