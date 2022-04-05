import React, { useEffect } from "react";
import { connect } from "react-redux";

function UsersContainer(props) {
  useEffect(() => {
    props.fetch();
  }, []);

  return (
    <>
      <div>************* Users Container *************</div>
      {props.loading && <div>Loading...</div>}
      {props.users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
      {!props.loading && <div>Error</div>}
    </>
  );
}

const mapStateToProps = ({ loading, users, error }) => {
  return {
    loading,
    users,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () => dispatch({ type: "FETCH" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
