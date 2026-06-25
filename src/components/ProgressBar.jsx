import React from 'react'

function ProgressBar({ step, totalSteps }) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="mb-8">

      <div className="flex justify-between mb-2">
        <span className="font-medium">
          Step {step} of {totalSteps}
        </span>

        <span className="font-medium">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3">

        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

    </div>
  );
}

export default ProgressBar;