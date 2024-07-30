import { useState } from 'react';
import { Cards } from './components/cards/cards';
import { Header } from './components/header/header';
import { AddItems } from './components/itemsAdd/itemsAdd';
import { v4 as uuidv4 } from 'uuid';

interface Item {
  name: string;
  id: string;
}

export function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [values, setValues] = useState<Item[]>([]);

  const handleValueInputChange = (valueInput: string) => {
    setInputValue(valueInput);
  };

  const handleSubmit = (): void => {
    if (inputValue === '') {
      return;
    }
    const newValue: Item = {
      name: inputValue,
      id: uuidv4(),
    };

    setValues((prevState) => [...prevState, newValue]);
    setInputValue('');
  };

  const handleClickDelete = (idTodelete: string) => {
    const deletedFiltre = values.filter((user) => user.id !== idTodelete);
    setValues(deletedFiltre);
  };

  return (
    <div className="bg-[#F4F5FB] h-screen">
      <div className="w-full max-w-[700px] m-auto">
        <Header />
        <h1 className="inline-block h-auto pt-24 text-2xl font-bold font-Inter">Compras da semana</h1>
        <AddItems onInputChange={handleValueInputChange} onButtonClick={handleSubmit} value={inputValue} />
        {values.map((value) => (
          <div key={value.id}>
            <Cards text={value.name} handleClickDelete={handleClickDelete} idTodelete={value.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
