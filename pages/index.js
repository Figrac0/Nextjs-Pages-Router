import { MongoClient } from "mongodb";
import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//     {
//         id: "m1",
//         title: " Test",
//         image: "https://funjapan.ru/sites/default/files/picture1/news/8713-samyy-luchshiy-gorod-v-mire-6677.jpg",
//         addres: "Some address 5, 12345 Test City",
//         description: "This is  TEST",
//     },
//     {
//         id: "m2",
//         title: " Test2",
//         image: "https://funjapan.ru/sites/default/files/picture1/news/8713-samyy-luchshiy-gorod-v-mire-6677.jpg",
//         addres: "Some address 53232332, 12345 Test City",
//         description: "This is  TEST2",
//     },
//     {
//         id: "m1",
//         title: " Test3",
//         image: "https://funjapan.ru/sites/default/files/picture1/news/8713-samyy-luchshiy-gorod-v-mire-6677.jpg",
//         addres: "Some address 11232545, 12345 Test City",
//         description: "This is  TEST3",
//     },
// ];

function HomePage(props) {
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
//     const req = context.req;
//     const res = context.res;
//     //some fetch
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export async function getStaticProps() {
    const client = await MongoClient.connect(
        "mongodb+srv://serg:2729950Asdasd@figraco.yiqtech.mongodb.net/?appName=meetups"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1,
    };
}

export default HomePage;
