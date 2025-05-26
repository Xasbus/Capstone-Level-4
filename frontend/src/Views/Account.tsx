import React, { useEffect } from "react";

export function Account() {
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate);
  useEffect(compontentDidUnmount, []);
  return (
    <>
      <main>
        <div className="card">
          <h5 className="card-header">Read Function</h5>
          <div className="card-body">
            <p className="card-text">
              <input />
            </p>
            <p className="card-text">
              <input />
            </p>

            <button onClick={} className="btn btn-primary">
              Read
            </button>
          </div>
        </div>
        <hr />
      </main>
      <footer>Website is created by David Billiot</footer>
    </>
  );

  function componentDidMount() {
    document.title = "Playstation - About Page";
    console.log("Title mounted");
  }

  function componentDidUpdate() {
    console.log("Nothing to update.");
  }
  function compontentDidUnmount() {
    console.log("Nothing to unmount.");
  }
}

// async function handleClick() {
//   const response = await axios.get("http://localhost:8000/quote");
//   const quote = response.data.quote;
//   const author = response.data.author;
//   setQuote(quote);
//   setAuthor(author);
// }

// const form = event.target;
// const updateEmail = form[0].value;
// const updatePassword = form[1].value;
// const updateName = form[2].value;
// const updatePhone = form[3].value;
