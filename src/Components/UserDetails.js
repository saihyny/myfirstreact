import './UserDetails.css';

const UserDetails = (props) => {
  return (
    
      <ul className='Userdetails'>
        {props.users.map((user) => (
    
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    
  );
};

export default UserDetails;
