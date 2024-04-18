import "../App.css"
export const DisplayCARD = ({ name }) => {
  return (
    <div className="result flex flex-col h-auto md:h-96 w-full md:w-72 overflow-hidden shadow-lg  rounded-xl p-4 m-4  bg-green-300">
      <h2 className="text-m font-bold p-1 font-extrabold">BOOTH : {name?.Booth}</h2>
      <h2 className="text-m font-bold p-1">PAGE NO : {name?.PN}</h2>
      <h2 className="text-m font-bold p-1">SN : {name?.SN}</h2>
      <h2 className="text-m font-bold p-1 font-extrabold">Voter ID : {name?.VoterID}</h2>
      <h2 className="text-m font-bold p-1 font-extrabold">NAME : {name?.Name}</h2>
      <h2 className="text-m font-bold p-1">Father/Husband: {name?.Father_Husband}</h2>
      <h2 className="text-m font-bold p-1">Vote Place : {name?.Place}</h2>
      {/* <h2 className="text-m font-bold">AGE : {name?.Age}</h2> */}
      {/* <h2 className="text-m font-bold">SEX : {name?.sex}</h2> */}
      <br />
    </div>
  );
};


