import React from "react";
import AvatarPreview from "./AvatarPreview";

const AvatarEditor = ({ avatarUrl, setAvatarUrl, onSave, loading, message }) => {
  return (
    <div className="bg-white border border-stone rounded-xl p-4 shadow-md mt-4">
      <h3 className="font-semibold text-moss mb-2">Update Avatar</h3>
      <AvatarPreview url={avatarUrl} />
      <input
        type="url"
        value={avatarUrl}
        onChange={(e) => setAvatarUrl(e.target.value)}
        placeholder="https://example.com/image.jpg"
        className="input-base mb-2"
      />
      <button
        onClick={onSave}
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? "Updating..." : "Save Avatar"}
      </button>
      {message && <p className="text-sm mt-2 text-moss">{message}</p>}
    </div>
  );
};

export default AvatarEditor;