import TagRemovable from "./components/tag-removable/tag-removable";

function App() {
  return (
    <div className=" text-red-300">
      <TagRemovable text="Test Text" onRemove={(value) => console.log(value)} />
    </div>
  );
}

export default App;
