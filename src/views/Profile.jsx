import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/creators/userCreator';

function Profile() {
  const dispatch = useDispatch();
  const {firstname}= useSelector((state) => state.user);
  const onSubmitUser = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value,
      })
    );
  };

  return (
    <div>
      <h2>Hi {firstname}</h2>
      <h3>Customize your profile here</h3>

      <form onSubmit={(e) => onSubmitUser(e)}>
        <p>
          Your firstname : <input type="text" name="firstname" placeholder="John" />
        </p>
        <p>
          Your lastname : <input type="text" name="lastname" placeholder="Doe" />
        </p>
        <p>
          Your email: <input type="email" name="email" placeholder="john.doa@email.com" />
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;
