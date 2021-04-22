import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../components/user/userSlice';

export default function Logout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/';
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="card m-auto p-3" style={{ width: '340px' }}>
          <h4 className="m-4 font-weight-normal">
            Are you sure you want to sign out?
          </h4>
          <div class="text-center">
            <button
              className="btn btn-primary btn-lg btn-block border"
              onClick={() => handleLogout()}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
