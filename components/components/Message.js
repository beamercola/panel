import React from "react";
import moment from "moment";

const Message = ({ image, name, body, date }) => {
  return (
    <div className="text-xs break-words">
      <div className="flex items-center font-medium mb-1">
        <img
          className="w-4 h-4 inline-block rounded-full mr-2"
          src={image}
          alt={name}
        />
        <span className="flex-grow">{name}</span>
        {date && (
          <span className="text-xxs text-gray-300">
            {moment()
              .startOf("hour")
              .fromNow()}
          </span>
        )}
      </div>
      <p>{body}</p>
    </div>
  );
};

export default Message;
