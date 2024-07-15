"use client";
interface CustomButtonProps {
  name: string;
  handleFunction: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  name,
  handleFunction,
}) => {
  return (
    <button
      className="bg-black text-white px-12 py-4 rounded-lg"
      onClick={() => handleFunction()}
    >
      {name}
    </button>
  );
};

export default CustomButton;
