function User({ user }) {
  return (
    <div
      className="card  item-hl m-2 "
      style={{
        width: '280px',
        height: '130px',
        boxShadow: '0 4px 8px 2px rgba(0,0,0,1)',
      }}
    >
      <div className="card-body row px-4 py-1">
        <img
          src={user.avatar_url}
          alt="user-picture"
          style={{ width: '60px', height: '60px' }}
          className="mt-2 border rounded-circle"
        />
        <h5 className="card-title mt-4 col-8 ">{user.login}</h5>
        <a
          className="btn btn-outline-primary btn-block text-center align-middle p-1"
          href={user.html_url}
          target="_blank"
          style={{ height: '35px' }}
        >
          See in GitHub
        </a>
      </div>
    </div>
  );
}

export default User;
