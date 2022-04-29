import React from "react";

type ContainerProps = {
  children: JSX.Element[] | JSX.Element;
};
const Container = ({ children }: ContainerProps) => {
  return <div className="container p-5 max-w-7xl m-auto">{children}</div>;
};

export default Container;
