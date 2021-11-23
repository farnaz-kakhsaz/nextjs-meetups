import { useRouter } from "next/router";
import Image from "next/image";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem({ image, id, title, address }) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/${id}`);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={image} alt={title} width={640} height={432} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
