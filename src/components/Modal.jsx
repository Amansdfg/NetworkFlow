import React from "react";

const Modal = ({ isOpen, onClose, onSubmit, source, setSource, sink, setSink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Select Source and Sink</h2>
        <label className="block mb-2">
          Source Node:
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="border px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-4">
          Sink Node:
          <input
            type="text"
            value={sink}
            onChange={(e) => setSink(e.target.value)}
            className="border px-2 py-1 w-full mt-1"
          />
        </label>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
