import React, { useState } from 'react';
import UploadSections from './UploadSections';
import Calculate from "@mui/icons-material/Calculate";
import Place from "@mui/icons-material/LocationOn";
import Translate from '@mui/icons-material/Translate';

const ClaimForm = () => {
  const [contractValue, setContractValue] = useState('');
  const [claimValue, setClaimValue] = useState('');
  const [placeConfirmed, setPlaceConfirmed] = useState(null);
  const [languageConfirmed, setLanguageConfirmed] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({
    statement: null,
    agreement: null,
    additional: [],
  });
  const [errors, setErrors] = useState({});

  const handleFileUpload = (key, files) => {
    setUploadedFiles((prev) => {
      if (key === 'additional') {
        return { ...prev, [key]: [...prev[key], ...files] };
      }
      return { ...prev, [key]: files[0] };
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!contractValue) newErrors.contractValue = 'Contract value is required.';
    if (!claimValue) newErrors.claimValue = 'Claim value is required.';
    if (!placeConfirmed) newErrors.place = 'Please confirm the place for the proceedings.';
    if (!languageConfirmed) newErrors.language = 'Please confirm the language for the proceedings.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const formData = {
      contractValue,
      claimValue,
      placeConfirmed,
      languageConfirmed,
      uploadedFiles,
    };

    console.log('Form Submitted Successfully:', formData);
    alert('Form Submitted! Check the console for data.');
  };

  return (
    <section className='rounded-lg'>
      <div className="shadow-lg bg-white min-h-screen ml-3 rounded-2xl">
      {/* Header of the form*/}
      <div>
      <div className='px-6 flex items-center pt-4 gap-1 justify-start border-b-2'>
        <span className="text-xl font-semibold mb-1">File your Claim.</span>
        <span className='text-gray-600 text-sm'>(Approx 5 Minutes)</span>
      </div>
      </div>
      {/* Claim Value Section */}
      <div className='grid md:grid-cols-3 p-4'>
        <div className="p-4">
        <Calculate className='text-blue-500 mb-1 mr-1'/>
        <span className='text-xl font-semibold text-gray-700'>Claim Value</span>
          <label className="block text-sm font-medium text-gray-700">Contract Value (USD)</label>
          <input
            type="number"
            value={contractValue}
            onChange={(e) => setContractValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="10,000"
          />
          {errors.contractValue && <p className="text-sm text-red-500">{errors.contractValue}</p>}
          
          <label className="block text-sm font-medium text-gray-700">Claim Value (USD)</label>
          <input
            type="number"
            value={claimValue}
            onChange={(e) => setClaimValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="15,000"
          />
          {errors.claimValue && <p className="text-sm text-red-500">{errors.claimValue}</p>}
        
        </div>

      {/* Place and Language Section */}
      {/* Place Card */}
        <div className="p-4 border rounded-lg shadow-sm">
          <div className=' flex'>
          <Place className='text-blue-500'/>
          <label className="block text-lg font-medium text-gray-700">Place</label>
          </div>
          <div className='p-3'>
          <input
            type="number"
            value={contractValue}
            onChange={(e) => setContractValue(e.target.value)}
            className="w-full p-2 border text-sm border-gray-300 bg-gray-200 rounded-lg"
            placeholder="Select the language for proceedings "
          />
          {errors.contractValue && <p className="text-sm text-red-500">{errors.contractValue}</p>}
          <p className="text-sm text-gray-600 m-2">
            Is the Place for the proceedings the one mentioned in the agreement?
          </p>
          <div className="flex items-center gap-4 m-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="language"
                value="yes"
                checked={languageConfirmed === 'yes'}
                onChange={() => setLanguageConfirmed('yes')}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="language"
                value="no"
                checked={languageConfirmed === 'no'}
                onChange={() => setLanguageConfirmed('no')}
                className="mr-2"
              />
              No
            </label>
          </div>
          {errors.language && <p className="text-sm text-red-500 mt-2">{errors.language}</p>}
          </div>
        </div>

        {/* Language Card */}
        <div className="p-4 border rounded-lg shadow-sm ">
          <div className='flex'>
          <Translate className='text-blue-500 mr-1'/>
          <label className="block text-lg font-medium text-gray-700">Language</label>
          </div>
          <div className='p-3'>
          <input
            type="number"
            value={contractValue}
            onChange={(e) => setContractValue(e.target.value)}
            className="w-full p-2 border text-sm border-gray-300 bg-gray-200 rounded-lg"
            placeholder="Select the language for proceedings "
          />
          {errors.contractValue && <p className="text-sm text-red-500">{errors.contractValue}</p>}
          <p className="text-sm text-gray-600 m-2">
            Is the language for the proceedings the one mentioned in the agreement?
          </p>
          <div className="flex items-center gap-4 m-2">
            <label className="flex items-center"> 
              <input
                type="radio"
                name="language"
                value="yes"
                checked={languageConfirmed === 'yes'}
                onChange={() => setLanguageConfirmed('yes')}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="language"
                value="no"
                checked={languageConfirmed === 'no'}
                onChange={() => setLanguageConfirmed('no')}
                className="mr-2"
              />
              No
            </label>
          </div>
          {errors.language && <p className="text-sm text-red-500 mt-2">{errors.language}</p>}
          </div>
        </div>
      </div>
      <div className='w-full border border-2 mt-4'></div>
      <UploadSections/>
    </div>      
    </section>
  );
};

export default ClaimForm;