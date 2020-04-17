import React from "react";
import { useQuery } from "@apollo/react-hooks";
const Query = ({ children, query, id, dispatch }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });

  if (loading) return null;
  if (error) {
    console.log(error);
    return null
  };
  return children({ data });
};

export default Query;  