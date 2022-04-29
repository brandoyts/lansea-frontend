import React from "react";

type FormGroupProps = {
  children: JSX.Element[] | JSX.Element;
};

const FormGroup = ({ children }: FormGroupProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-1">
      {children}
    </div>
  );
};

export default FormGroup;
