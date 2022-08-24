import {
  faCloudBolt,
  faCloudSunRain,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Content.module.css";

// const styles = require("./Content.module.css");

export default class Content extends React.Component {
  render() {
    return (
      <div className={styles.Content}>
        <div>
          <div className={styles.container}>
            <FontAwesomeIcon icon={faSun} className={styles.textIcon} />
            <p className={styles.plainText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              magni error, sapiente est dolore debitis voluptas mollitia,
              eligendi laboriosam libero fugiat. Aspernatur corporis cum, in
              commodi fugiat reprehenderit recusandae vitae facilis nobis
              consectetur quas iusto tempora iste delectus accusantium, nisi,
              quibusdam doloremque rem tempore doloribus quaerat dolorem.
              Molestias, reiciendis rem atque quod natus modi rerum minima
              facilis nobis aliquid culpa, vitae laboriosam nisi ratione fugiat
              neque amet? Accusamus odit, in officia quae repellendus
              voluptatibus esse illum placeat. Dignissimos magni maxime nulla
              ducimus cupiditate nam dicta, sint dolorem, dolor illum beatae,
              aliquam ea totam ut impedit commodi. Maxime iusto illum sed?
            </p>
          </div>
          <div className={styles.decoratedTextDiv}>
            <p className={styles.decoratedText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur vitae quia ipsa reprehenderit repudiandae recusandae.
              Quod, reprehenderit illo eligendi et perferendis cumque delectus
              nostrum sed unde itaque minima odit iste ipsam hic totam neque.
              Dolore enim architecto alias dolor blanditiis sunt porro, debitis
              eveniet commodi modi eum, quas cupiditate nobis?
            </p>
            <FontAwesomeIcon
              icon={faCloudBolt}
              className={styles.decoratedTextIcon}
            />
          </div>
          <div className={styles.container}>
            <FontAwesomeIcon
              icon={faCloudSunRain}
              className={styles.textIcon}
            />
            <p className={styles.plainText}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus culpa et debitis nihil adipisci, dolore deserunt illum
              obcaecati maiores magni odio incidunt nam porro ipsum! Sit
              quibusdam ullam exercitationem velit fuga explicabo fugiat
              voluptas doloremque iure nesciunt numquam, in possimus architecto
              ipsum non dolore dolorum ab, excepturi reiciendis quos libero amet
              sunt? Quidem voluptate ipsam, perspiciatis libero, quae numquam ea
              asperiores ab quam atque laborum tempora consequatur officiis
              cupiditate iusto itaque fuga aliquid dolores corporis aperiam
              temporibus ipsa laboriosam in? Quia ratione, ducimus nobis,
              distinctio odio dignissimos ad, assumenda aperiam maiores harum
              iusto possimus mollitia praesentium soluta consequuntur doloribus
              quod.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
