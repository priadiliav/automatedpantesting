import React from "react";

interface SubmitButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full py-2 px-4 rounded-md text-black font-medium ${
                disabled
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            }`}
        >
            Submit
        </button>
    );
};

export default SubmitButton;
