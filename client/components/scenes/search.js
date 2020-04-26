import React, { useState } from 'react';
import Head from '../head';
import { history } from '../../redux';

const Search = () => {
  const [repository, setRepository] = useState('');
  const navigateToTheRepository = () => {
    history.push(`/${repository}`);
  };
  return (
    <div>
      <Head title="Search" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <input
            type="text"
            className="text-black p-2"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />{' '}
          <button
            type="button"
            aria-label="go"
            className="bg-red-800 ml-4 p-2"
            onClick={navigateToTheRepository}
          >
            {' '}
            Go{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
