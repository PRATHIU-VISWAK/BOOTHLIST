import Axios from "axios";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { FHnameCARD } from "../components/FHnameCARD";

export const FetchFHNAME = () => {
  const { INPUT, setINPUT } = useContext(AppContext);
  const { data, isloading, refetch } = useQuery({
    queryKey: ["FHNAME"],
    queryFn: async () => {
      try {
        const response = await Axios.post(
          `http://localhost:3000/booths/FH_NAME?name=${INPUT}`
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
      <div>
      {isloading ? <h1>Loading </h1> : 
        <>
        {
           data?.map((name, index) => (
            <FHnameCARD name={name} key={index}/>
           ))
        }

        </>
        }
      </div>
    </div>
  );
};
