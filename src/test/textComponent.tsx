const TextComponent = () => {
  return (
    <div id="container" className="relative h-[1500px] overflow-auto border p-4 top-28 ">
      <div id="fixed-element" className="fixed bg-red-500 text-white p-4">
        I'm fixed within the container!
      </div>
      <div className="content">
        <p>Some content here...</p>
        <p>More content here...</p>
        <p>More content here...</p>
        <p>More content here...</p>
        <p>More content here...</p>
        <p>More content here...</p>
      </div>
    </div>
  );
};

export default TextComponent;
