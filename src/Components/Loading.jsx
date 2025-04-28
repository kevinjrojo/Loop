import React, { useState } from "react";

const Loading = ({ setLoading, loading }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className={loading ? "loading-container" : "loading"}>
      <svg
        viewBox="0 0 16 16"
        height={48}
        width={48}
        className="windows-loading-spinner"
      >
        <circle r="7px" cy="8px" cx="8px" />
      </svg>
    </div>
  );
};

export default Loading;
