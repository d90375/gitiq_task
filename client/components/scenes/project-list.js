import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Head from '../head';
import { getRepos } from '../../redux/reducers/repositories';

const ProjectList = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.repositories.list);

  useEffect(() => {
    dispatch(getRepos(username));
  }, [dispatch, username]);

  return (
    <div>
      <Head title="Project-List" />
      <div className="flex items-center justify-center h-screen flex-col">
        <div className="w-full h-10 bg-yellow-400">{username}</div>
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 flex flex-col">
          {list.map((rep) => (
            <div className="p-2 my-2" key={rep}>
              <Link to={`/${username}/${rep}`}>{rep}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectList.propTypes = {};

export default ProjectList;
