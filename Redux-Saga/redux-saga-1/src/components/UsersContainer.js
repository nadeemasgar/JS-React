import React from "react";
import { connect } from "react-redux";

function UsersContainer(props) {
  return <div>Users Container - {props.loading}</div>;
}

const mapStateToProps = ({ loading, users, error }) => {
  return {
    loading,
    users,
    error,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return () => {};
// };

export default connect(mapStateToProps, null)(UsersContainer);
