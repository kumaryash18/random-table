import { useEffect, useState } from "react";
import Tow from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";

import axios from "axios";

const Forms = () => {
  const [value, setValue] = useState(null);
  const [table, setTable] = useState([]);
  var url = `http://192.168.0.103:8000/api/${value}`;
  var response;

  const getTable = async () => {
    response = await axios.post(url);
    setTable(response.data);
  };

  const showTable = (e) => {
    e.preventDefault();
    getTable();
  };

  useEffect(() => {
    setTable([]);
  }, [value]);

  return (
    <>
      <div className="main grid grid-cols-2 space-x-16 items-center h-[572px] w-full overflow-auto">
        <form
          className="flex flex-col items-center m-4 p-4"
          onSubmit={showTable}
        >
          <input
            required
            className="p-2 w-64 h-10 text-xl focus:outline focus:outline-2 focus:outline-green-500 border-2 border-amber-900"
            type="number"
            placeholder="Enter a number (2-9)"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <input
            className="m-6 bg-orange-300 px-4 py-2 rounded-full text-amber-900 border-2 border-amber-900 text-lg font-bold shadow-md hover:cursor-pointer hover:bg-orange-400 hover:shadow-lg"
            type="submit"
            value="Submit"
          />
        </form>
        <div className="flex flex-col space-y-3">
          {table &&
            value == 2 &&
            table.slice(1).map((prod, index) => {
              return <Tow value={table[0]} index={index} prod={prod} />;
            })}
          {table &&
            value == 3 &&
            table.slice(1).map((prod, index) => {
              return <Three value={table[0]} index={index} prod={prod} />;
            })}
          {table &&
            value == 4 &&
            table.slice(1).map((prod, index) => {
              return <Four value={table[0]} index={index} prod={prod} />;
            })}
          {table &&
            value == 5 &&
            table.slice(1).map((prod, index) => {
              return <Five value={table[0]} index={index} prod={prod} />;
            })}
          {table &&
            value == 6 &&
            table.slice(1).map((prod, index) => {
              return <Six value={table[0]} index={index} prod={prod} />;
            })}
          {table &&
            value == 7 &&
            table.slice(1).map((prod, index) => {
              return <Seven value={table[0]} index={index} prod={prod} />;
            })}
          {table &&
            value == 8 &&
            table.slice(1).map((prod, index) => {
              return <Eight value={table[0]} index={index} prod={prod} />;
            })}
          {table &&
            value == 9 &&
            table.slice(1).map((prod, index) => {
              return <Nine value={table[0]} index={index} prod={prod} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Forms;
