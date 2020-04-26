import React from 'react';
import Head from '../head';

const Project = () => {
  return (
    <div>
      <Head title="Project" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          This Project Component
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {};

export default Project;
