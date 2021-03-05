import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Header from "../components/header";
import MovieCard from "../components/movie-card";
import { getCharacters } from "../utils";
import styles from "./page.module.css";

const Page = () => {
  const [list, setList] = useState([]);

  const characters = async () => {
    const result = await getCharacters();
    setList(result.data.results);
  };

  useEffect(() => {
    characters();
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Marvel</title>
        <meta property="og:title" content="Marvel" />
      </Helmet>
      <Header></Header>
      <div className={styles.container1}>
        {list.map((item) => (
          <MovieCard
            key={`char-${item.id}`}
            movetitle={item.name}
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
