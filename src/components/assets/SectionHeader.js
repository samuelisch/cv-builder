import React from 'react';

const SectionHeader = ({ className, text }) => {
  return (
    <h2 className={`sectionHeader ${className}`}>{text}</h2>
  )
}

export default SectionHeader;