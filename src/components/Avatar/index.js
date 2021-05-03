import React from 'react';
import AvatarDefault from '../../assets/avatardefault.png';
export default function Avatar({ size = 36, imageUrl }) {
  return (
    <object
      data={AvatarDefault}
      style={{ width: size, height: size }}
      className="rounded-circle ml-2"
      type="image/png"
      alt="avatar"
    >
      <img src={imageUrl} alt="avatar" />
    </object>
  );
}
