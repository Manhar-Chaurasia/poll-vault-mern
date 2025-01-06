import VotePoll from './VotePoll';

const Demo = () => {
  const demoPollDetails = {
    title: "How easy is it to embed a Poll Vault?",
    createdAt: "2024-11-01T16:31:24.124+00:00",
    options: ["Easy", "Medium", "Quite difficult", "Very difficult"],
  }
  console.log("demoPollDetails: ", demoPollDetails);


  return (
    <>
      <VotePoll demoPollDetails={demoPollDetails} />
    </>
  )
}

export default Demo