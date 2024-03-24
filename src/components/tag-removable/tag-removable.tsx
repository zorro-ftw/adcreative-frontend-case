import { CloseFilled } from "../../assets/icons";

interface TagRemovableProps {
  text: string;
  onRemove: (value: string) => void;
}

export default function TagRemovable({ text, onRemove }: TagRemovableProps) {
  return (
    <div className="flex w-fit gap-3 items-center px-3 py-2 afc-text-p2-medium rounded-md bg-afc-gray-400 text-afc-gray-300">
      {text}
      <button onClick={() => onRemove(text)}>
        <CloseFilled className="w-6 h-6 text-afc-gray-200" />
      </button>
    </div>
  );
}
