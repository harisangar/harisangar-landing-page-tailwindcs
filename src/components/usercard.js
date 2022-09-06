import React from "react";

function Usercard({ user }) {
  return (
    <div className="clearfix">
      <div className="border-2 rounded-md h-60 w-60 text-center bg-orange-200 shadow-xl">
        <h1>{user.name.first}</h1>
        <div className="pl-14">
          <img className="rounded-full " src={user.picture.large} alt="img" />
        </div>

        <h1>{user.location.city}</h1>
      </div>
    </div>
  );
}

export default Usercard;
