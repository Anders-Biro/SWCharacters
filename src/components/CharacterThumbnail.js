import React, { useState } from "react";
import styles from "./CharacterThumbnail.module.css";

const CharacterThumbnail = (props) => {
    const [hovering, setHovering] = useState(false);

    const mouseOver = () => setHovering(true);
    const mouseOut = () => setHovering(false);

    const path = props.url.split('/');
    const imgPath = `img/characters/${path[5]}.jpg`;

    return (
        <div className={`${styles.boxshadow} ${styles.thumbnail}`} onMouseOver={mouseOver} onMouseOut={mouseOut} >
            <figure className={styles.char_figure}>
                <img
                    className={styles.char_img}
                    src={imgPath}
                    alt={props.name}
                />
                {hovering ?
                    (<div className={styles.thumbnail_hover}>
                        <figcaption className={styles.char_figcaption}>
                            <h2 className={styles.char_name}>
                                {props.name}
                            </h2>
                            <h3 className={styles.char_gender}>Gender: {props.gender}</h3>
                            <span className={styles.char_birth}>
                                Birth Year: {props.birth_year}
                            </span>
                        </figcaption>
                    </div>
                    ) : (
                        <div />
                    )
                }
            </figure>
        </div>

    )
};

export default CharacterThumbnail;