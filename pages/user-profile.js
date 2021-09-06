import { Fragment } from "react";

const UserProfilePage = (props) => {
  return (
    <Fragment>
      <h1>{props.username}</h1>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      username: "Pepe",
    },
  };
}

export default UserProfilePage;
