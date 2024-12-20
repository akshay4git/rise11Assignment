import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import Sidebar from "./components/Sidebar";
import ClaimForm from "./components/ClaimForm";
import UploadSections from "./components/UploadSections";
import TopRibbon from "./components/TopRibbon";

const App = () => {
  const [currentStep, setCurrentStep] = useState(4);

  return (
    <main className="flex h-8">
      <Sidebar/>
      <div>
        <div className="">
          <TopRibbon/>
        </div>
        <div className="min-h-screen w-full bg-gray-100 rounded-3xl pr-2">
          <div className="w-full p-4">
            <ProgressBar currentStep={currentStep} />
          </div>
          <body className=" flex mt-4">
            <ClaimForm/>
          </body>
          {/* <UploadSections/> */}
        </div>
      </div>
    </main>
  );
};

export default App;