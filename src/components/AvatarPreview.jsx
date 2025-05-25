import React from 'react';

export default function AvatarPreview({ url }) {
  return (
    <div className="text-center mb-4">
      {url ? (
        <img src={url} alt="Avatar preview" className="w-20 h-20 rounded-full mx-auto" />
      ) : (
        <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto" />
      )}
    </div>
  );
}
