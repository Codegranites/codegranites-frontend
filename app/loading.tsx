import React from 'react';
import LoadingSpinner from './Components/loaders/LoadingSpinner';

export default function loading() {
  return (
    <div className="w-full gap-x-5 items-center flex justify-start ">
      <LoadingSpinner />
      <span>loading...</span>
    </div>
  );
}
