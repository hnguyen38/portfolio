import Gifs from "./modal/sections";
import InfoSection from "./modal/skeleton";
import styles from "./gifs.module.scss";

import add from "../../images/projects/book/additem.gif";
//import signpage from "../../../images/projects/book/booksign.png";
import del from "../../images/projects/book/delNout.gif";
import order from "../../images/projects/book/order.gif";
import search from "../../images/projects/book/search.gif";
import update from "../../images/projects/book/update.gif";

function BookOverview(props) {
  return (
    <div className={styles.container}>
      <InfoSection
        title="Book Application"
        gifs={
          <div className={styles.gifs}>
            {/* <Gifs src={signpage} alt="signin page" caption="caption" /> */}

            <Gifs src={add} alt="add item" caption="caption" />
            <Gifs src={update} alt="update item" caption="caption" />
            <Gifs src={del} alt="delete item" caption="caption" />
            <Gifs src={search} alt="search feature" caption="caption" />
            <Gifs src={order} alt="order feature" caption="caption" />
          </div>
        }
        exit={props.exit}
      />
    </div>
  );
}

export default BookOverview;
