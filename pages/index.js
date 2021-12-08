import Head from "next/head";
import { getClientFromMongoDB } from "../helper/getClientFromMongoDB";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export async function getStaticProps() {
  const [client, meetupsCollection] = await getClientFromMongoDB();

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
      revalidate: 1,
    },
  };
}
