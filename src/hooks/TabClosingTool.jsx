import React, { useState, useEffect, useRef } from 'react';

const TabClosingTool = () => {

    const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the language selector
    const languageSelectorRef = useRef(null); // Ref to the language selector area

    // Function to toggle the visibility of the language selection area
    const toggleLanguageSelector = () => {
        setIsOpen((prev) => !prev);
    };

    // Close the language selector if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
        // Check if the click was outside the language selection area
        if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target)) {
            setIsOpen(false); // Close the language selection area
        }
        };

    // Add event listener to the document when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>{toggleLanguageSelector}</div>
  )
}

export default TabClosingTool