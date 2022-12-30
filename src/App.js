import { useEffect, useState } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";


function App() {

  const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

  const imgPath = 'https://image.tmdb.org/t/p/w1280/';

  const searchApi = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';


  const [data, setData] = useState(null);


  const getApi = async (apidata) => {
    const response = await fetch(apidata)
    const data = await response.json()
    setData(data.results)
  }

  useEffect(() => {
    getApi(apiUrl);
  }, [])

  return (
    <div>
      <Header searchApi={searchApi} apiUrl={apiUrl} getApi={getApi} />
      <Body data={data} imgPath={imgPath} />
    </div>
  );
}

export default App;
