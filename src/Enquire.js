import { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Enquire() {
  const [postBody, setPostBody] = useState({});
  const [redirect, setRedirect] = useState(false);

  function postForm() {
    console.log("inside post");
    fetch("http://localhost:6800/users", {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: { "Content-Type": "application/json" },
    });
    setRedirect(true);
  }

  return (
    <div>
      <form onSubmit={postForm}>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setPostBody({ name: e.target.value })}
        ></input>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setPostBody({ ...postBody, email: e.target.value })}
        ></input>
        <button>Submit</button>
      </form>
      {redirect === true ? <Redirect to="/" /> : ""}
    </div>
  );
}
