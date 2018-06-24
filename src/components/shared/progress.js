import React from 'react';

const Progress = props => {
  if (props.show === false) return <div />;
  return (
    <div className="progress animated fadeIn">
      <div className="indeterminate bg-success" />
    </div>
  );
};

export default Progress;
