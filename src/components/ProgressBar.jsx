import React from "react";

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "Preliminary", time: "Approx 5 Min" },
    { id: 2, label: "Your Details", time: "Approx 5 Min" },
    { id: 3, label: "KYC", time: "Approx 5 Min" },
    { id: 4, label: "Parties", time: "Approx 5 Min" },
    { id: 5, label: "Claim", time: "Approx 5 Min" },
    { id: 6, label: "Review", time: "Approx 5 Min" },
    { id: 7, label: "Payment", time: "Approx 5 Min" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full p-4 rounded-lg ">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center w-full sm:w-auto">
          {/* Circle */}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep > step.id
                ? "bg-blue-500 text-white"
                : currentStep === step.id
                ? "bg-blue-200 text-blue-500"
                : "bg-gray-500 text-gray-900"
            } font-semibold`}
          >
            {currentStep > step.id ? "✔" : step.id}
          </div>

          {/* Label and Time */}
          <div className="flex flex-col items-start sm:items-center sm:text-center ml-2 sm:ml-0 sm:mt-2">
            <p
              className={`text-sm ${
                currentStep === step.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {step.label}
            </p>
            <p className="text-xs text-gray-400">{step.time}</p>
          </div>

          {/* Line */}
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-full sm:w-16 mx-2 sm:mx-0 bg-gradient-to-r ${
                currentStep > step.id
                  ? "from-blue-500 to-blue-300"
                  : "from-gray-300 to-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;