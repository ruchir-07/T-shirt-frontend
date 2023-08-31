import React from 'react'

import CustomButton from './CustomButton'
import PropTypes from 'prop-types';

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className='filepicker-container'>
      <div className="flex-1 flex flex-col">
        <input 
          id = 'file-upload'
          type='file'
          accept='image/*'
          onChange={(e) => setFile(e.target.files[0]) }
        />

        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>

        <p className='mt-2 text-gray-500 text-xs truncate'>
          {file === '' ? "No File Selceted" : file.name}
        </p>
      </div>

      <div className="mt-28 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker

FilePicker.propTypes = {
  // someProp: PropTypes.number.isRequired,
  // onTap: PropTypes.func.isRequired,
  file: PropTypes.any,
  setFile: PropTypes.any,
  readFile: PropTypes.any,
};