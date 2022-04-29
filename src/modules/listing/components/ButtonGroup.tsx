import React from "react";

type ButtonGroupProps = {
  children: JSX.Element[] | JSX.Element;
};

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return <div className="flex gap-5 my-20">{children}</div>;
};

export default ButtonGroup;
