import React from "react";

export default function AvatarPreview({ url }) {
  return (
    <div className="text-center mb-4">
      {url ? (
        <img
          src={url}
          alt="Avatar preview"
          className="w-20 h-20 rounded-full mx-auto border-2 border-forest shadow-sm"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-stone mx-auto flex items-center justify-center text-sm text-white">
          No Image
        </div>
      )}
    </div>
  );
}
