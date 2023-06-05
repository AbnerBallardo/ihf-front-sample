const HomePage = () => {
  function handleClick() {
    alert("Clicked");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button
        className="p-4 bg-blue-400 text-white rounded-xl"
        onClick={handleClick}
      >
        Do something
      </button>
    </div>
  );
};

export default HomePage;
