
export const FHnameCARD = ({name}) => {
  
  return (
    <div >
      <br />
      <h2>BOOTH{name?.Booth}</h2>
      <h2>NAME :{name?.Name}</h2>
      <h2>AGE :{name?.Age}</h2>
      <h2>Voter ID :{name?.VoterID}</h2>
      {/* <h2>Father/Husband : {props?.Father_Husband}</h2> */}
      <h2>SEX : {name?.sex}</h2>
      <br />
    </div>
  );
};
