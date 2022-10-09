import Forms from "./Components/Forms";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row h-screen">
        <div className="w-80 bg-green-500">
          <div>
            <div
              className="w-auto h-screen bg-no-repeat mx-2"
              style={{ backgroundImage: "url('./down-a.jpeg')" }}
            ></div>
          </div>
        </div>

        <div className="flex-auto w-16 bg-white">
          <div className="py-2 border shadow-lg">
            <img src="./mt-1.jpeg" alt="" />
          </div>

          <Forms />

          <div className="flex flex-auto">
            <img src="./mt-2.jpeg" alt="" />
          </div>
        </div>

        <div className="w-80 bg-green-500">
          <div>
            <div
              className="w-auto h-screen bg-no-repeat mx-2"
              style={{ backgroundImage: "url('./down-b.jpeg')" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
