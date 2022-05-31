import React, { useState, useEffect, useContext } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/outline";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";
import "isomorphic-fetch";

const giphyFetch = new GiphyFetch("n0TS7lwItTxQHWCdtnpYnXJdsbJC614o");
const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 100 });

const GIFModal = ({ onModalClick }) => {
  const [gifs, setGifs] = useState(null);
  useEffect(() => {
    fetchGifs(0).then((response) => {
      setGifs(response.data);
    });
  });

  const [input, setInput] = useState("");
  const searchGIF = async (e) => {
    setInput(e.target.value);
    const { data: searchGifs } = await giphyFetch.search(e.target.value, {
      sort: "relevant",
      lang: "es",
      limit: 10,
      type: "stickers",
    });
    console.log(searchGifs);
    setGifs(null);
    setGifs(searchGifs);
  };

  return (
    <div className="  z-50 fixed inset-0 flex items-center justify-center w-full h-screen bg-gray-500 bg-opacity-30">
      <div className="bg-black rounded-xl p-2">
        <div className="flex items-center justify-between">
          <XIcon
            className="text-white w-6 h-6 m-2 hoverAnimation"
            onClick={onModalClick}
          />
          <input
            type="text"
            value={input}
            onChange={searchGIF}
            placeholder="Search for GIFs"
            className="flex-grow w-full bg-transparent outline-none placeholder:items-center placeholder:justify-center placeholder:text-gray-500 placeholder:text-lg placeholder:text-center border border-[#31a4f1] rounded-3xl h-10 mx-4 my-2 px-4"
          />
        </div>
        <div className=" max-h-[500px] overflow-auto">
          {gifs && (
            <Grid
              initialGifs={gifs}
              width={600}
              columns={3}
              fetchGifs={fetchGifs}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GIFModal;
