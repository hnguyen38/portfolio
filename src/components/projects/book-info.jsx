import Gifs from "./modal/sections";
import InfoSection from "./modal/skeleton";
import styles from "./gifs.module.scss";

import add from "../../images/projects/book/additem.gif";
import signpage from "../../images/projects/book/booksign.png";
import del from "../../images/projects/book/delNout.gif";
import order from "../../images/projects/book/order.gif";
import search from "../../images/projects/book/search.gif";
import update from "../../images/projects/book/update.gif";

import { useRef } from "react";
import ScrollButton from "./scroll/scroll";

function BookOverview(props) {
  const gifRef = useRef(0);

  function scrollHandler(scrollOffSet) {
    gifRef.current.scrollLeft += scrollOffSet;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.btn}>
        <ScrollButton
          leftScroll={() => scrollHandler(-700)}
          rightScroll={() => scrollHandler(700)}
        />
      </div>
      <div className={styles.container}>
        <InfoSection
          title="Book Application"
          gifs={
            <div className={styles.gifs} ref={gifRef}>
              <Gifs
                src={signpage}
                alt="sign in page"
                caption="Sign in and Sign up page"
              />
              <Gifs src={add} alt="add item" caption="Add an item to list" />
              <Gifs
                src={update}
                alt="update item"
                caption="Update any item in list"
              />
              <Gifs
                src={del}
                alt="delete item"
                caption="Delete any item in list and sign out demo"
              />
              <Gifs
                src={search}
                alt="search feature"
                caption="Search any item by location or name"
              />
              <Gifs
                src={order}
                alt="order feature"
                caption="Sort through list by clicking heading"
              />
            </div>
          }
          exit={props.exit}
        />
      </div>
    </div>
  );
}

export default BookOverview;
