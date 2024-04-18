import Axios from "axios";
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { DisplayCARD } from "../components/DisplayCARD";
import "../App.css";
import { Button } from "@/components/ui/button";

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
        placeholder="Relative NAME"
        className="border border-gray-300 rounded-xl px-4 py-2 mr-2"
        onChange={(event) => {
          setINPUT(event.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-xl"
        onClick={refetch}
      >
        SEARCH
      </button>
      <div className="resultbg mt-4 bg-gray-900 text-white p-4 rounded-lg mb-4">
        {isLoading ? (
          <div className="pt-80">
          <progress className="progress  w-90"></progress>
        </div>
        ) : (
          <div className=" ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-4">
              {data?.map((name, index) => (
                <DisplayCARD name={name} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
