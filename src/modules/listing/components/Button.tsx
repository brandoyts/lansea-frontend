import React from "react";
import AddIcon from "../../../components/Icon/AddIcon";
import ClearIcon from "../../../components/Icon/ClearIcon";
import UpdateIcon from "../../../components/Icon/UpdateIcon";

type ButtonProps = {
  type: string;
  text: string;
  onClick?: () => boolean;
};

const buttonTypeClass = (type: string): undefined | string => {
  switch (type) {
    case "add":
      return "bg-green-500 hover:bg-green-600";
    case "clear":
      return "bg-red-500 hover:bg-red-600";
    case "update":
      return "bg-yellow-500 hover:bg-yellow-600";
    default:
      break;
  }
};

const generateIcon = (type: string): JSX.Element | undefined => {
  switch (type) {
    case "add":
      return <AddIcon />;
    case "clear":
      return <ClearIcon />;
    case "update":
      return <UpdateIcon />;
    default:
      break;
  }
};

const Button = ({ type, text, onClick }: ButtonProps) => {
  const buttonColor = buttonTypeClass(type);
  const buttonIcon = generateIcon(type);
  return (
    <button
      className={`w-32 h-12 p-2 text-md text-white rounded-xl ${buttonColor} inline-flex items-center justify-center gap-1`}
    >
      {buttonIcon}
      {text}
    </button>
  );
};

export default Button;
