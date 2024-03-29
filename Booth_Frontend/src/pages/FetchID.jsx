import Axios from "axios";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import "../App.css";
import { DisplayCARD } from "../components/DisplayCARD";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const FetchID = () => {
  const { INPUT, setINPUT } = useContext(AppContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["ID"],
    queryFn: async () => {
      try {
        const response = await Axios.post(
          `${import.meta.env.VITE_API_URL}/booths/ID?id=${INPUT}`
        );
        //console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
  });

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter Voter ID"
        className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
        onChange={(event) => {
          setINPUT(event.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
        onClick={refetch}
      >
        GET Data
      </button>
      {/* <div className="resultbg mt-4 bg-gray-900 text-white p-4 rounded-lg mb-4">
        {isLoading ? (
          <h2 className="result mt-4 text-white p-4 rounded-lg mb-4" >Loading...</h2>
        ) : (
          <>
        <div>
          <DisplayCARD name={data}/>
        </div>
        </>
        )}
      </div> */}

      <div className="resultbg mt-4 bg-gray-900 text-white p-4 rounded-lg mb-4">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
          <DisplayCARD name={data}/>
        </div>
        )}
      </div>
    </div>
  );
};
