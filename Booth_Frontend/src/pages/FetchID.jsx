import Axios from "axios";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import "../App.css"
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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={refetch}
      >
        GET Data
      </button>
      <div className="resultbg mt-4 bg-gray-900 text-white p-4 rounded-lg mb-4">
        {isLoading ? (
          <h2 className="result mt-4 text-white p-4 rounded-lg mb-4" >Loading...</h2>
        ) : (
          <>
        <div className="result mt-4 text-white p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold">BOOTH: {data?.Booth}</h2>
        <h2 className="text-xl font-semibold">SN : {data?.SN}</h2>
        <h2 className="text-xl font-semibold">PAGE NO : {data?.PN}</h2>
        <h2 className="text-xl font-semibold">NAME: {data?.Name}</h2>
        <h2 className="text-xl font-semibold">AGE: {data?.Age}</h2>
        <h2 className="text-xl font-semibold">Voter ID: {data?.VoterID}</h2>
        <h2 className="text-xl font-semibold">Father/Husband: {data?.Father_Husband}</h2>
        <h2 className="text-xl font-semibold">SEX: {data?.sex}</h2>
        </div>
        </>
        )}
      </div>
    </div>
  );
};
