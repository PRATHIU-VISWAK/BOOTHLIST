export const FHnameCARD = ({ name }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg mb-4 text-left">
      <h2 className="text-xl font-semibold">BOOTH : {name?.Booth}</h2>
      <h2 className="text-xl font-semibold">NAME : {name?.Name}</h2>
      <h2 className="text-xl font-semibold">AGE : {name?.Age}</h2>
      <h2 className="text-xl font-semibold">Voter ID : {name?.VoterID}</h2>
      {/* <h2 className="text-xl font-semibold">Father/Husband: {props?.Father_Husband}</h2> */}
      <h2 className="text-xl font-semibold">SEX : {name?.sex}</h2>
    </div>
  );
};
