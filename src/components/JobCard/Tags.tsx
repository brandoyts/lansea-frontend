import React from "react";

type TagsProps = {
  tags: TTag[];
};

type TTag = {
  tag: string;
};

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="flex gap-2 items-center t">
      <p>Tags: </p>
      {tags &&
        tags.map((tag, key) => (
          <span className="bg-black text-white p-1 rounded-sm" key={key}>
            {tag.tag}
          </span>
        ))}
    </div>
  );
};

export default Tags;
