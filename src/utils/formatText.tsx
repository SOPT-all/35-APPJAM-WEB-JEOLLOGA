import React from 'react';

const formatText = (text: string): JSX.Element[] => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

export default formatText;
