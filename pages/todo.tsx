import React from "react";

import Layout from "../components/Layout";

type TodoProps = {};
type TodoState = { todos: any; value: string };

class Todo extends React.Component<TodoProps, TodoState> {
  state: any = {
    todos: [{ title: "test 1" }, { title: "test 2" }, { title: "test 3" }],
    value: ""
  };

  handleChange = (value: string): void => {
    this.setState({ value });
  };

  // handleChange = (value: string, { values }: { values?: string }): void => {
  //   this.setState({ value });
  // };

  onCreate = (): void => {
    // const a = "ss";
    const { todos, value }: { todos: any; value: string } = this.state;

    const objectTodo: {} = { title: value };

    this.setState({ todos: [...todos, objectTodo], value: "" });
  };

  onDelete = (id: number): void => {
    const todos: [] = this.state.todos;

    const newTodos: any = todos.filter(
      (t: {}, index: number) => t && index !== id
    );
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <Layout>
        <br />
        add :{" "}
        <input
          type="text"
          onChange={(e): void => this.handleChange(e.target.value)}
        />
        <button onClick={(): void => this.onCreate()}>Add</button>
        <br />
        <table style={{ width: "400px" }}>
          <thead>
            <tr>
              <th></th>
              <th>Todo</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>
                  <td style={{ textAlign: "center" }}>{item.title}</td>
                  <td style={{ textAlign: "center" }}>
                    <button onClick={(): void => this.onDelete(index)}>
                      del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Layout>
    );
  }
}

export default Todo;
