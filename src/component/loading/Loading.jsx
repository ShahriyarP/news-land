import React from "react";
import loading from "../../asset/svg/loading.gif";
const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <img src={loading} />
    </div>
  );
};

export default Loading;
