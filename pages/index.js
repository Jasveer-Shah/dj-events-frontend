import Head from 'next/head'
import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';
import { API_URL } from '../config/index'
import Link from 'next/link'

export default function Home({events}) {
  console.log(events)        // client side cosole
  return (
    <Layout>
    <h1>Upcoming Events</h1>
        {events.length === 0 && <h3>No events to show</h3>}

        {events && events.map(evt => (
          <EventItem key={evt.id} evt={evt}/>
        )) 
        }

        {events.length > 0 && (
          <Link href="/events">
             <a className='btn-secondary'>View all events</a>
          </Link>
        )}
    </Layout>
)
}


export async function getStaticProps(){
const res = await fetch(`${API_URL}/api/events`);
const events = await res.json();
  console.log(events)  // it consoles on server side
return {
  props: {events:events.slice(0, 3)},        // client side rendering
  revalidate: 1,
}
}
