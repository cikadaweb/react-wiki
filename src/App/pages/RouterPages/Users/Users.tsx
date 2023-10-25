import { useNavigate } from 'react-router-dom';

import style from './Users.module.css';
import USERS from '@/config/users';


// const Users = () => (
//     <ul className={style.list}>
//         {USERS.map(user => (
//             <li className={style.item} key={user.id}>
//                 <Link className={style.card} to={`/user/${user.id}`}>
//                     {user.name}
//                 </Link>
//             </li>
//         ))}
//     </ul>
// );

const Users = () => {
    const navigate = useNavigate();
    return (
        <ul className={style.list}>
            {USERS.map(user => (
                <li className={style.item} key={user.id} onClick={() => navigate(`/users/${user.id}`)}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
}

export default Users;