import { PropsWithChildren } from "react";

interface ListItemProps {
  imageSource: string;
  imageAlt: string;
  description?: string;
  selected: boolean;
}

export default function ListItem({
  imageSource,
  imageAlt,
  description,
  selected,
  children,
}: PropsWithChildren<ListItemProps>) {
  return (
    <li className="flex items-center gap-3 bg-afc-white-200 pl-4 py-4">
      <input type="checkbox" defaultChecked={selected} />
      <img className="w-10 h-10 rounded-md" src={imageSource} alt={imageAlt} />
      <div className="">
        {children}
        {!!description && (
          <p className="afc-text-p4-regular text-afc-gray-500">{description}</p>
        )}
      </div>
    </li>
  );
}
