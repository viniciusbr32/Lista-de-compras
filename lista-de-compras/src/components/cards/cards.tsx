interface CardsProps {
  text: string;
  handleClickDelete: (id: string) => void;
  idTodelete: string;
}

export function Cards({ text, handleClickDelete, idTodelete }: CardsProps) {
  return (
    <div className="pt-10 space-y-5">
      <div className="flex items-center justify-between px-4 py-4 bg-white h-13 rounded-xl">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />

          <p className="font-medium font-Inter">{text}</p>
        </div>
        <button onClick={() => handleClickDelete(idTodelete)}>
          <img src="../src/assets/delete-02-stroke-rounded.svg" />
        </button>
      </div>
    </div>
  );
}
