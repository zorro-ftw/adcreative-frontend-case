import { useQuery } from "@apollo/client";
import TagRemovable from "./components/tag-removable/tag-removable";
import { GET_CHARACTERS } from "./graphql/queries";
import { GetCharactersQueryType } from "./graphql/types";
import MultiSelect from "./components/multiselect/multiselect";
import { useState } from "react";

function App() {
  const { data } = useQuery<GetCharactersQueryType>(GET_CHARACTERS, {
    variables: {
      name: "Ric",
    },
  });

  const characters = data?.characters.results;

  const [query, setQuery] = useState("");

  console.log(query);

  return (
    <div className="">
      <TagRemovable text="Test Text" onRemove={(value) => console.log(value)} />
      <MultiSelect setQuery={setQuery} options={characters ?? []} />
    </div>
  );
}

export default App;
