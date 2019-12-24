import React from "react";

const PhotoArray = ({ items }) => {
  return (
    <div className="flex flex-wrap -mx-1">
      {items.map((item, index) => (
        <div className="w-2/12 px-1 mb-2" key={index}>
          <img
            className="w-auto inline-block rounded-full"
            src={item.image}
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoArray;
