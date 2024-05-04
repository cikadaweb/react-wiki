import './UserItem.css';

const UserItem = ({ user }) => (
  <div className="item">
    <div
      className="item__avatar"
      style={{
        backgroundImage: `url(${user.avatarUrl})`,
      }}
    />
    <div className="item__login">{user.login}</div>
  </div>
);

export default UserItem;
