import React from "react";
import Content from "./Content";
import Description from "./Description";
import ImagePreview from "./ImagePreview";
import Tags from "./Tags";

const tags = [{ tag: "React" }, { tag: "laravel" }, { tag: "Docker" }];

const JobCard = () => {
  return (
    <div className="rounded-lg bg-[#f2f2f2] shadow-sm w-auto h-[500px] flex flex-col relative border-2 border-indigo-200">
      <ImagePreview />
      <Content>
        <Tags tags={tags} />
        <Description title="Full Stack Developer" description="teast" />
      </Content>
      <span className="absolute left-5 bottom-5 text-gray-500 text-sm">
        8h ago
      </span>
    </div>
  );
};

export default JobCard;
