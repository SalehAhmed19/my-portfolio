import React from "react";

const Expert = () => {
  return (
    <div className="text-gray-400 font">
      <ul>
        <li>
          <div>HTML </div>
          <div>
            <progress
              className="progress progress-error w-56"
              value="90"
              max="100"
            ></progress>
          </div>
        </li>
        <li>
          <div>CSS </div>
          <div>
            <progress
              className="progress progress-error w-56"
              value="90"
              max="100"
            ></progress>
          </div>
        </li>
        <li>
          <div>JavaScript </div>
          <div>
            <progress
              className="progress progress-error w-56"
              value="85"
              max="100"
            ></progress>
          </div>
        </li>
        <li>
          <div>ReactJS </div>
          <div>
            <progress
              className="progress progress-error w-56"
              value="80"
              max="100"
            ></progress>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Expert;
