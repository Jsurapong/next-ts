import ListContainer from "../containers/ListContainer";
import Layout from "../components/Layout";

type TodoProps = {
  value: string;
};

const Todo: React.FunctionComponent<TodoProps> = () => {
  return (
    <Layout title="Todo">
      <ListContainer />
    </Layout>
  );
};

export default Todo;
