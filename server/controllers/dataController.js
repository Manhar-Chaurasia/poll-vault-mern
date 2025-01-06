// Fetch data from IGDB
const getData = async (req, res) => {
  try {
    // Make the POST request using fetch
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": "x3o55j3pdjr8cthnr53qep2fhqps7u", // Replace with your actual Client ID
        Authorization: "Bearer iif5l5dm6xxt2ea0rlxd9i38cp44so", // Replace with your actual access token. new access tokeniif5l5dm6xxt2ea0rlxd9i38cp44so, old-wq5se1raesl7gfwdm5t00gn3489nnc
        "Content-Type": "application/json", // Important for POST requests
      },
      body: "fields *;",
    });

    // Check if the response is OK (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response
    // console.log("IGDB data of games: ", data); // Log the data
    res.send(data); // Send the data back as JSON
  } catch (error) {
    console.error("Error fetching data:", error); // Log the error
    res.status(500).json({ message: "Error fetching data" }); // Send error response
  }
};

module.exports = { getData };
