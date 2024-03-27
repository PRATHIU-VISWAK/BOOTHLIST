import Axios from "axios";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { FHnameCARD } from "../components/FHnameCARD";

export const FetchFHNAME = () => {
  const { INPUT, setINPUT } = useContext(AppContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["FHNAME"],
    queryFn: async () => {
      try {
        const response = await Axios.post(
          `https://deploy-booth-api.vercel.app/booths/FH_NAME?name=${INPUT}`
        );
        // console.log(response.data);
        return response.data;
      } catch (error) {
        // console.error("Error:", error);
        throw error;
      }
    },
  });

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="father or husband NAME"
        className="border border-gray-300 rounded px-4 py-2 mr-2"
        onChange={(event) => {
          setINPUT(event.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={refetch}
      >
        GET Data
      </button>
      <div className="mt-4 bg-gray-900 text-white p-4 rounded-lg mb-4">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {data?.map((name, index) => (
              <FHnameCARD name={name} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
