import React from "react";
import { useEffect, useRef, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  onChange: (option: Option) => void;
  label: string;
  defaultOption?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = React.memo(
  ({ options, onChange, label, defaultOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
      defaultOption
        ? options.find((option) => option.value === defaultOption) ?? options[0]
        : options[0]
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    const handleOptionClick = (option: Option) => {
      setSelectedOption(option);
      onChange(option);
      setIsOpen(false);
    };

    return (
      <div>
        <label className="text-sm">{label}</label>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 w-full text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {selectedOption.label}
          </button>
          {isOpen && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-48 overflow-scroll">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer font-${option.value}`}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
);

CustomSelect.displayName = "CustomSelect"; // Add display name to the component

export default CustomSelect; // Export the component
