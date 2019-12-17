import React from "react";

import ListContainer from "../containers/ListContainer";
import Layout from "../components/Layout";

type TodoProps = {};

const Todo: React.FunctionComponent<TodoProps> = () => {
  return (
    <Layout>
      <ListContainer />
    </Layout>
  );
};

export default Todo;
