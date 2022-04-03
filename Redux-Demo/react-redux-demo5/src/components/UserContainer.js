import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../Redux/users/UsersActions";

function UserContainer() {
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      {userData.loading && <h2>Loading</h2>}

      {!userData.loading && <h2>List of Users</h2>}
      {!userData.loading &&
        userData.users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}

      {!userData.loading && <h2>{userData.error}</h2>}
    </div>
  );
}

export default UserContainer;
