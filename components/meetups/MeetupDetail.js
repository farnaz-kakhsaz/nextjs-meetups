import classes from "./MeetupDetail.module.css";
import Image from "next/image";

export default function MeetupDetail({
  id,
  image,
  title,
  address,
  description,
}) {
  return (
    <section className={classes.detail}>
      <Image src={image} alt={title} width={640} height={432} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
      <p>{id}</p>
    </section>
  );
}
