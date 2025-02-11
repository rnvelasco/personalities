import { useState } from 'react';
import { softwareDeveloperList } from './data';
import "./App.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < softwareDeveloperList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (index == 0) {
      setIndex(softwareDeveloperList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let softwareDeveloper = softwareDeveloperList[index];
  return (
    <>
      <h1>
        Juan Dela Cruz
      </h1>
      <button onClick={handleBackClick}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{softwareDeveloper.name} </i>
      </h2>
      <h3>
        ({index + 1} of {softwareDeveloperList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{softwareDeveloper.description}</p>}
      <img
        src={softwareDeveloper.url}
        alt={softwareDeveloper.alt}
      />
    </>
  );
}
