import React, { useState } from "react";

const ProfileScreen = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };
  const { name, lastName, email } = data;

  const deleteUser = () => {
    console.log("user delete");
  };
  const updateUser = () => {
    console.log("user update");
  };

  return (
    <div className="container">
      <h1 className="pt-5">My Profile</h1>

      <form>
        <div className="form-group mt-4 row">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-4  row">
          <label>Last name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-4  row">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            onClick={deleteUser}
            type="button"
            className="mr-2 btn btn-danger"
            value="Delete"
          />
          <input
            onClick={updateUser}
            type="button"
            className="mr-2 btn btn-info"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileScreen;
