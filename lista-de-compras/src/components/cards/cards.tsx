import { useState } from 'react';

interface CardsProps {
  text: string;
  handleClickDelete: (id: string) => void;
  idTodelete: string;
}

export function Cards({ text, handleClickDelete, idTodelete }: CardsProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="pt-10 space-y-5">
      <div className="flex items-center justify-between px-4 py-4 bg-white h-13 rounded-xl">
        <div className={`flex items-center gap-2 ${isChecked && 'line-through text-gray-400'} `}>
          <input id="checkbox" onChange={handleCheckboxChange} checked={isChecked} type="checkbox" />
          <p className="font-medium font-Inter">{text}</p>
        </div>
        <button onClick={() => handleClickDelete(idTodelete)}>
          <img src="../src/assets/delete-02-stroke-rounded.svg" />
        </button>
      </div>
    </div>
  );
}
