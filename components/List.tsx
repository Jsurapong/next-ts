import React from "react";

type ListProps = {
  data?: [];
};

const List: React.FunctionComponent<ListProps> = ({ data }) => {
  return <div>List{data}</div>;
};

export default List;
