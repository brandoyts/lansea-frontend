import React from "react";

type ContentProps = {
  children: JSX.Element[] | JSX.Element;
};
const Content = ({ children }: ContentProps) => {
  return <div className="w-full p-2 mt-2">{children}</div>;
};

export default Content;
