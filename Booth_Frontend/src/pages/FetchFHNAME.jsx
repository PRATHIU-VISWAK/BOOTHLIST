import Axios from "axios";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { DisplayCARD } from "../components/DisplayCARD";
import "../App.css"
import { Button } from "@/components/ui/button"

export const FetchFHNAME = () => {
  const { INPUT, setINPUT } = useContext(AppContext);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["FHNAME"],
    queryFn: async () => {
      try {
        const response = await Axios.post(
          `${import.meta.env.VITE_API_URL}/booths/FH_NAME?name=${INPUT}`
        );
        
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
        className="border border-gray-300 rounded-lg px-20 py-2 mr-2"
        onChange={(event) => {
          setINPUT(event.target.value);
        }}
      />
      <Button
        onClick={refetch}
      >
        GET Data
      </Button>
      <div className="resultbg mt-4 bg-gray-900 text-white p-4 rounded-lg mb-4">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {data?.map((name, index) => (
              <DisplayCARD name={name} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
