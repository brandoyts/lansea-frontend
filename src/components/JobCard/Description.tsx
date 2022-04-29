import React from "react";

type DescriptionProps = {
  title: string;
  description: string;
};

const Description = ({ title, description }: DescriptionProps) => {
  return (
    <div className="my-5">
      <h2 className="text-lg font-bold">{title}</h2>
      <span>Brando Endona</span>
      <div className="mt-2">
        <p>
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora adipisci maiores autem, exercitationem dignissimos laboriosam
          in cupiditate eveniet libero laborum qui, distinctio
        </p>
      </div>
    </div>
  );
};

export default Description;
