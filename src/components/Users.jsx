import Loading from './Loading';
import { useState, useEffect, useReducer } from 'react';

import User from './User';

function Users({ forminput }) {
  /* usereducer function */
  const changeLoading = (state, action) => {
    switch (action.type) {
      case 'isLoading':
        return true;
      case 'notLoading':
        return false;
    }
  };
  const [userNames, setUsers] = useState('');
  // const [loading, setLoading] = useState(true);
  const [loadingState, dispatch] = useReducer(changeLoading, true);
  const [orn, setorn] = useState(false);
  const [fetchLimit, setFetchLimit] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [forminput, orn]);
  const fetchUsers = async () => {
    if (forminput.length > 0) {
      setorn(true);
      const response = await fetch(
        `https://api.github.com/search/users?q=${forminput}`
        /* {
          headers: {
            Authorization: 'token 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',
          },
        } */
      );
      if (response.status == 403) {
        setFetchLimit(
          'you have reached the search limit for the cuurent minute '
        );
        dispatch({ type: 'notLoading' });
      } else {
        const data = await response.json();
        setUsers(data.items);
        setFetchLimit('');
        dispatch({ type: 'notLoading' });
      }
    } else {
      setUsers('');
      dispatch({ type: 'isLoading' });
      setorn(false);
    }
  };

  return loadingState ? (
    <Loading orn={orn} />
  ) : fetchLimit ? (
    <div className="alert alert-danger">{fetchLimit}</div>
  ) : (
    <div className="container d-flex flex-wrap justify-content-center row-hl pb-5">
      {userNames.map((user) => (
        <User user={user} key={user.node_id} />
      ))}
    </div>
  );
}

export default Users;
