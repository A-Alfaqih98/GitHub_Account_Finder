import Loading from './Loading';
import { useState, useEffect } from 'react';
import { FaCommentsDollar } from 'react-icons/fa';
import User from './User';

function Users({ forminput }) {
  const [userNames, setUsers] = useState('');
  const [loading, setLoading] = useState(true);
  const [orn, setorn] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [loading, forminput, orn]);
  const fetchUsers = async () => {
    if (forminput.length > 0) {
      setorn(true);
      const response = await fetch(
        `https://api.github.com/search/users?q=${forminput}`,
        {
          headers: {
            Authorization: 'token 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',
          },
        }
      );
      const data = await response.json();
      setUsers(data.items);
      console.log(data.items);

      setLoading(false);
    } else {
      setUsers('');
      setLoading(true);
      setorn(false);
    }
  };

  return loading ? (
    <Loading orn={orn} />
  ) : (
    <div className="container d-flex flex-wrap justify-content-center row-hl pb-5">
      {userNames.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

export default Users;
