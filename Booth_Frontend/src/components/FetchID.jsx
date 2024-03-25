import Axios from "axios";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";

export const FetchID = () => {
  const { ID } = useContext(AppContext);
  const { data, isloading, refetch } = useQuery({
    queryKey: ["booth"],
    queryFn: async () => {
      try {
        const response = await Axios.post(
          `http://localhost:3000/booths/ID?id=${ID}`
        );
        return response.data;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },
  });
  if (isloading) return <h2> Loading </h2>;
  return (
    <div>
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
