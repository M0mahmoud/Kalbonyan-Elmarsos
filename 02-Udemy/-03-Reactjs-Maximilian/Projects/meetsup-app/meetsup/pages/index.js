import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

// https://nypost.com/wp-content/uploads/sites/2/2022/03/giza-pyramids-1.jpg?quality=75&strip=all
// https://unitedguidestravel.com/wp-content/uploads/2020/06/karnak-Temple.jpg
// https://static.wixstatic.com/media/5eff48_a3527bc7fcae4d5cad57b4a4823b1c92~mv2.jpeg/v1/fill/w_730,h_411,al_c,q_90/5eff48_a3527bc7fcae4d5cad57b4a4823b1c92~mv2.jpeg

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// Only Works In Component Files Inside Of The Page Folder.
//Reseved Name.
export async function getStaticProps() {
  //Any Code Here Will Never End Up And Execute On Client Side
  // This Code Is Executed During The Build Process.

  //--Fetch Data
  // "mongodb+srv://mahmoud05:3Gs5ptMitrpaBtt@cluster0.zqbwogi.mongodb.net/meetups?retryWrites=true&w=majority"
  const client = await MongoClient.connect(
    "mongodb+srv://mahmoud05:3Gs5ptMitrpaBtt@cluster0.3oztyhp.mongodb.net/test?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("test");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  //Must Return Object
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
      //DUMY_MEETUPS Will Prepare And Will Loaded In getStaticProps And Send As Props For Page Component
    },
    // SSG
    // Take Number And This Number Of Seconds Will Wait Until It Regenerates This Page For An Incoming Request
    revalidate: 1,
  };
}

// export async function getServerSideProps(context) {
//   //Any Code Here Will Not Run During Building Process But instead Always On The Server After Deloyment.
//   const  req = context.req;
//   const  res = context.res;
//   //--Fetch Data

//   return {
//     props: {
//       meetups: DUMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
