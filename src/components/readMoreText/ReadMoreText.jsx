import React, { useState } from 'react';
import "../../styles.css"

function ReadMoreText({ text, maxLength }) {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsFullTextVisible(!isFullTextVisible);
  };

  const displayText = isFullTextVisible ? text : text?.slice(0, maxLength);

  return (
    <div>
      <p>{displayText}
      {text?.length > maxLength && (
        <button className='read-more-btn' onClick={toggleTextVisibility}>
          {isFullTextVisible ? "Read Less" : "Read More"}
        </button>
      )}</p>
    </div>
  );
}

export default ReadMoreText;
