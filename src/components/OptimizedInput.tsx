import React, { useState, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

interface OptimizedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  wrapperClassName?: string;
}

interface OptimizedTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  error?: string;
  wrapperClassName?: string;
}

interface OptimizedSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{ value: string, label: string }>;
  error?: string;
  wrapperClassName?: string;
}

export const OptimizedInput: React.FC<OptimizedInputProps> = ({
  label,
  name,
  error,
  className = '',
  wrapperClassName = '',
  type = 'text',
  required = false,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className={`mb-6 ${wrapperClassName}`}>
      <label 
        htmlFor={name} 
        className={`block text-sm font-medium mb-1 transition-colors duration-200 ${
          error ? 'text-red-600' : focused ? 'text-brand-gold' : 'text-gray-700'
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={`block w-full rounded-md border-gray-300 shadow-sm p-3 sm:p-4 border text-base ${
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring focus:ring-red-200' 
            : 'focus:border-brand-gold focus:ring focus:ring-brand-gold/20'
        } ${className}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ fontSize: '16px' }} // Prevent zoom on iOS
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export const OptimizedTextarea: React.FC<OptimizedTextareaProps> = ({
  label,
  name,
  error,
  className = '',
  wrapperClassName = '',
  required = false,
  rows = 4,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className={`mb-6 ${wrapperClassName}`}>
      <label 
        htmlFor={name} 
        className={`block text-sm font-medium mb-1 transition-colors duration-200 ${
          error ? 'text-red-600' : focused ? 'text-brand-gold' : 'text-gray-700'
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        className={`block w-full rounded-md border-gray-300 shadow-sm p-3 sm:p-4 border text-base ${
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring focus:ring-red-200' 
            : 'focus:border-brand-gold focus:ring focus:ring-brand-gold/20'
        } ${className}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ fontSize: '16px' }} // Prevent zoom on iOS
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export const OptimizedSelect: React.FC<OptimizedSelectProps> = ({
  label,
  name,
  options,
  error,
  className = '',
  wrapperClassName = '',
  required = false,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className={`mb-6 ${wrapperClassName}`}>
      <label 
        htmlFor={name} 
        className={`block text-sm font-medium mb-1 transition-colors duration-200 ${
          error ? 'text-red-600' : focused ? 'text-brand-gold' : 'text-gray-700'
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          className={`block w-full rounded-md border-gray-300 shadow-sm p-3 sm:p-4 border text-base appearance-none bg-white pr-10 ${
            error 
              ? 'border-red-500 focus:border-red-500 focus:ring focus:ring-red-200' 
              : 'focus:border-brand-gold focus:ring focus:ring-brand-gold/20'
          } ${className}`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ fontSize: '16px' }} // Prevent zoom on iOS
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export const OptimizedRadioGroup: React.FC<{
  label: string;
  name: string;
  options: Array<{ value: string, label: string }>;
  error?: string;
  wrapperClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  required?: boolean;
}> = ({
  label,
  name,
  options,
  error,
  wrapperClassName = '',
  onChange,
  value,
  required = false,
}) => {
  return (
    <div className={`mb-6 ${wrapperClassName}`}>
      <fieldset>
        <legend className={`block text-sm font-medium mb-2 ${error ? 'text-red-600' : 'text-gray-700'}`}>
          {label} {required && <span className="text-red-500">*</span>}
        </legend>
        
        <div className="flex flex-wrap gap-3">
          {options.map((option) => (
            <label 
              key={option.value} 
              className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 min-w-[44px]"
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                onChange={onChange}
                checked={value === option.value}
                required={required}
                className="h-5 w-5 text-brand-gold focus:ring-brand-gold/20"
              />
              <span className="ml-2 text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
        
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </fieldset>
    </div>
  );
};

// Default export for importing any component
export default {
  Input: OptimizedInput,
  Textarea: OptimizedTextarea,
  Select: OptimizedSelect,
  RadioGroup: OptimizedRadioGroup
}; 