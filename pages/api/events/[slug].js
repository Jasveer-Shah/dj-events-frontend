const {events} = require('./data.json')

export default (req, res) => {
  const evt = events.filter(ev => ev.slug === req.query.slug)

  if(req.method === 'GET'){
  res.status(200).json(evt)
  }else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message:`Method:${req.method} is not allowed`})
  }
}



// import Layout from '@/components/Layout'
// import { API_URL } from '@/config/index';
// import styles from '@/styles/Event.module.css'
// import Link from 'next/link';
// import Image from 'next/image';
// import {FaPencilAlt, FaTimes} from 'react-icons/fa'

// export default function EventPage({evt}){
// const deleteEvent = (e) => {
//      console.log("delete")
// }

//   return (<Layout>
//                <div className={styles.event}>
//                     <div className={styles.controls}>
//                         <Link href={`/events/edit/${evt.id}`}>
//                               <a>
//                                   <FaPencilAlt/>Edit Event
//                               </a>
//                         </Link>
//                         <a href='#' 
//                            className={styles.delete} 
//                            onClick={deleteEvent}>
//                                <FaTimes/>Delete Event
//                         </a>
//                     </div>

//                     <span>
//                         {evt.date} at {evt.time}
//                     </span>
//                     <h1>{evt.name}</h1>
//                     {evt.image && (
//                         <div className={styles.image}>
//                         <Image src={evt.image} width={960} height={600} alt="event-image"/>
//                         </div>
//                     )}
//                     <h3>Performers:</h3>
//                     <p>{evt.performers}</p>
//                     <h3>Description:</h3>
//                     <p>{evt.description}</p>
//                     <h3>Venue: {evt.value}</h3>
//                     <p>{evt.address}</p>

//                     <Link href='/events'>
//                         <a className={styles.back}>Go Back</a>
//                     </Link>
                    

//                </div>
//           </Layout>
//   )
// }

// export async function getServerSideProps({query: {slug}}){
//    console.log(slug);
//    const res = await fetch(`${API_URL}/api/events/${slug}`);
//    const events = await res.json()

//   return {
//     props:{
//         evt: events[0],
//     }
//   }
// }


// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`)
//   const events = await res.json()

//   const paths = events.map((evt) => ({
//     params: { slug: evt.slug },
//   }))

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`)
//   const events = await res.json()

//   return {
//     props: {
//       evt: events[0],
//     },
//     revalidate: 1,
//   }
// }

// const {events} = require('./data.json');

// export default (req, res) =>{
//     const evt = events.filter(ev  => ev.slug === req.query.slug)

//     if(req.method === 'GET'){
//         res.status(200).json(evt)
//         }else {
//           res.setHeader('Allow', ['GET'])
//           res.status(405).json({message:`Method:${req.method} is not allowed`})
//         }
// }