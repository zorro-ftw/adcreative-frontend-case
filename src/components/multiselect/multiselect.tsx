import { Combobox } from "@headlessui/react";
import { useState } from "react";
import ListItem from "../list-item/list-item";
import { Character } from "../../graphql/types";
import { highlightSubstring } from "../../utils/substring-highlighter";

export interface MultiSelectProps {
  options: Character[];
  placeholder?: string;
  setQuery: (value: string) => void;
}

export default function MultiSelect({
  options,
  placeholder,
  setQuery,
}: MultiSelectProps) {
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  return (
    <Combobox
      value={selectedCharacters}
      by="id"
      onChange={(value) => setSelectedCharacters(value)}
      multiple={true}
    >
      <Combobox.Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Combobox.Options>
        {options.map((option) => (
          <Combobox.Option key={option.id} value={option}>
            {({ selected }) => (
              <ListItem
                selected={selected}
                imageSource={option.image}
                imageAlt={option.name}
                description={`${option.episode.length} ${
                  option.episode.length > 1 ? "episodes" : "episode"
                }`}
              >
                {highlightSubstring(option.name, "Ric")}
              </ListItem>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}
