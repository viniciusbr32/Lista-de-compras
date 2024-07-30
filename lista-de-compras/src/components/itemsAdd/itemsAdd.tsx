import { ChangeEvent } from 'react';

interface addItemsTypes {
  onInputChange: (valueInput: string) => void;
  onButtonClick: () => void;
  value: string;
}

export function AddItems({ onInputChange, onButtonClick, value }: addItemsTypes) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valueInput = event.target.value;
    onInputChange(valueInput);
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-4 pt-11">
        <input
          onChange={handleChange}
          className="w-full border-solid border-[2px] border-[#D1D5DB] hover:border-[#B9C2D0] focus:border-[#CA3884] rounded-xl outline-none pl-[18px] font-Inter py-3"
          type="text"
          placeholder="adicionar novo item"
          value={value}
        />
        <button
          onClick={onButtonClick}
          className="px-6 py-3 text-nowrap font-Inter bg-[#CA3884] rounded-xl flex justify-center text-white font-semibold"
        >
          Adicionar Item
        </button>
      </div>
    </div>
  );
}
