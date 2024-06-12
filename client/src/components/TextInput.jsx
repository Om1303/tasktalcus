import React from "react";

const TextInput = React.forwardRef(
  ({ type, placeholder, styles, label, register, name, error }, ref) => {
    return <div className="flex flex-col mt-2">
             <p className='text-gray-600 text-sm mb-1 '>{label}</p>
   
    </div>;
    
  };
);

export default TextInput;
