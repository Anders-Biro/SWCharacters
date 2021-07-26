import React from "react";
import CharacterThumbnail from './CharacterThumbnail';
import styles from "./CharacterList.module.css";

const CharacterList = ({ characters }) => {
  return (
    <div className={styles.peoples}>
      {characters
        .map((char, index) => (
          <CharacterThumbnail key={index} {...char} />
        ))}
    </div>
  )
};
export default CharacterList;