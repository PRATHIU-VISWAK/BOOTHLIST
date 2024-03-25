import Axios from "axios";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";

export const FetchNAME = () => {
  const { INPUT, setINPUT } = useContext(AppContext);
  const { data, isloading, refetch } = useQuery({
    queryKey: ["NAME"],
    queryFn: async () => {
      try {
        const response = await Axios.post(
          `http://localhost:3000/booths/NAME?name=${INPUT}`
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        //console.error("Error:", error);
        throw error;
      }
    },
  });
  if (isloading) return <h2> Loading </h2>;
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Voter ID"
        onChange={(event) => {
          setINPUT(event.target.value);
        }}
      />
      <button onClick={refetch}>GET data</button>
      <h2>BOOTH{data?.Booth}</h2>
      <h2>NAME :{data?.Name}</h2>
      <h2>AGE :{data?.Age}</h2>
      <h2>Voter ID :{data?.VoterID}</h2>
      <h2>Father/Husband : {data?.Father_Husband}</h2>
      <h2>SEX : {data?.sex}</h2>
  
    </div>
  );
};
