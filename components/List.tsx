import React from "react";

import { USERS } from "../mock/data";

type ListProps = {
  data?: [];
};

const List: React.FunctionComponent<ListProps> = ({ data }) => {
  return (
    <>
      List{data}
      <table>
        <thead>
          <tr>
            <th>first_name</th>
            <th>last_name</th>
            <th>email</th>
            <th>gender</th>
            <th>ip_address</th>
          </tr>
        </thead>
        <tbody>
          {USERS.map((item: any) => (
            <tr key={item.ip_address}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
