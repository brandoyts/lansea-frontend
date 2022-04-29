import React from "react";

type ListingContainerProps = {
  children: JSX.Element[] | JSX.Element;
};

const ListingContainer = ({ children }: ListingContainerProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 content-center">
      {children}
    </div>
  );
};

export default ListingContainer;
