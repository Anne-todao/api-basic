import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {data ? <img src={data} alt="Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}

export default App;