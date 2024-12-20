import React from "react";
import Docs from "@mui/icons-material/Description"
import Agreement from "@mui/icons-material/Assignment"
import Content from "@mui/icons-material/ContentCopy"

const FileUpload = ({ label, description, fileType }) => {
  return (
    <div className="flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg px-8  py-10">
      <p className="font-medium text-gray-700">{label}</p>
      <p className="text-sm text-blue-500">{description}</p>
      <button
        className="mt-4 px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        type="button"
      >
        Upload {fileType}
      </button>
    </div>
  );
};
const FileUploadAdd = ({ label, description, fileType }) => {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4">
      <p className="font-medium text-gray-700">{label}</p>
      <p className="text-sm text-blue-500">{description}</p>
      <button
        className="mt-4 px-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        type="button"
      >
        Upload {fileType}
      </button>
    </div>
  );
};

const TextAreaWithUpload = ({ placeholder }) => {
  return (
    <div className="relative border-gray-300 rounded-lg p-1 rounded-full h-full">
      <textarea
        placeholder={placeholder}
        className="w-full h-48 p-2 focus:outline-none bg-gray-100 resize-none rounded-xl"
      ></textarea>
      <button
        className="absolute top-1/2 right-1/2 text-xs px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        type="button"
      >
        Upload PDF
      </button>
    </div>
  );
};

// Main 
const UploadSections = () => {
  return (
      <div className="grid lg:grid-cols-3 gap-6 p-4">
        {/* Statement Section */}
        <div className="col-span-1">
            <div className="flex">
            <Docs className="text-blue-500 mr-1"/>
            <h2 className="text-lg font-medium text-gray-700 mb-2">Statement</h2>
            </div>
            <TextAreaWithUpload  placeholder="Write your statement here or upload a PDF" />
        </div>

        {/* Agreement under Disputes Section */}
        <div className="grid lg:grid-cols-2 gap-3">
            <div className=" col-span-2 flex">
                <Agreement className="text-blue-500 mr-1"/>
                <h2 className="text-lg font-medium text-gray-700 mb-2">
                    Agreement under Disputes
                </h2>
            </div>
            <FileUpload
                label="Upload the Contract"
                description="Max: 2MB, PDF"
                fileType="PDF"
            />
            <FileUpload
                label="Arbitration Agreement"
                description="Max: 2MB, PDF"
                fileType="PDF"
            />
        </div>

        {/* Additional Documentation Section */}
        <div className="">
            <div className="flex">
                <Content className=" text-blue-500 mr-1"/>
                <h2 className="text-lg font-medium text-gray-700 mb-2">Additional Documentation</h2>
            </div>
          <FileUploadAdd
            label="Upload Additional Document"
            description="Max: 2MB, PDF"
            fileType="PDF"
          />
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
            type="button"
          >
            + Add More
          </button>
        </div>
      </div>
  );
};

export default UploadSections;
