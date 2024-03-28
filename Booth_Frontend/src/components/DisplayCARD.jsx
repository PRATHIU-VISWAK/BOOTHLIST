import "../App.css"
export const DisplayCARD = ({ name }) => {
  return (
    <div className="result mt-4 text-white p-4 rounded-lg mb-4">
      <h2 className="text-m font-bold">BOOTH : {name?.Booth}</h2>
      <h2 className="text-m font-bold">PAGE NO : {name?.PN}</h2>
      <h2 className="text-m font-bold">SN : {name?.SN}</h2>
      <h2 className="text-m font-bold">Voter ID : {name?.VoterID}</h2>
      <h2 className="text-m font-bold">NAME : {name?.Name}</h2>
      <h2 className="text-m font-bold">Father/Husband: {name?.Father_Husband}</h2>
      <h2 className="text-m font-bold">AGE : {name?.Age}</h2>
      {/* <h2 className="text-m font-bold">SEX : {name?.sex}</h2> */}
      <br />
      <br />
    </div>
  );
};


