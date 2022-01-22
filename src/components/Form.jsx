import { useState } from 'react';
function Form({ handleinput }) {
  const [btnDisabled, setbtnDisabled] = useState(true);
  return (
    <div className="container">
      <form
        className="input-group mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          document.querySelector('#textInput').value = '';
        }}
      >
        <input
          id="textInput"
          type="text"
          className="form-control shadow-none"
          placeholder="Enter username"
          onKeyUp={(e) => {
            handleinput(e);
            if (e.target.value.length > 0) {
              setbtnDisabled(false);
            } else {
              setbtnDisabled(true);
            }
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-info"
            type="submit"
            disabled={btnDisabled}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
