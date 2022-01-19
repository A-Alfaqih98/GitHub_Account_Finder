import Ghost from './Ghost.gif';
function Loading({ orn }) {
  return orn ? (
    <div className="container text-center h1">
      <img src={Ghost} alt="Loading..." />
    </div>
  ) : (
    ''
  );
}

export default Loading;
