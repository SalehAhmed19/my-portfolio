import React from "react";

const Comfortable = () => {
  return (
    <div className="text-gray-400 font">
      <ul>
        <li>
          <div>NodeJS </div>
          <div>
            <progress
              class="progress progress-error w-56"
              value="75"
              max="100"
            ></progress>
          </div>
        </li>
        <li>
          <div>MongoDB </div>
          <div>
            <progress
              class="progress progress-error w-56"
              value="75"
              max="100"
            ></progress>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Comfortable;
