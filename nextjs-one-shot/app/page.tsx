import Explorebtn from "@/components/Explorebtn";
import EventCard from "@/components/EventCard"
import { title } from "process";
import React from "react";  

const events = [
  {image : '/images/event1.png', title:'Event1',slug:'event-1',location:'location-1'
    ,date:'date-1',time:'time1'
  },
  {image: '/images/event2.png' , title:'Event2',slug:'event-1',location:'location-1'
    ,date:'date-1',time:'time1'}
]

const page = () =>{
  return (
    <section>
      <h1 className="text-center m-10">Hub for every developer <br /> Event you cant miss</h1>
      <p className="text-center m-10">Discover the latest developer events, conferences, and meetups happening around the world. Stay updated and never miss an opportunity to connect with fellow developers.</p>
      <Explorebtn />  

      <div className = "mt-20 space-y-7">
        <h3>Featured stories</h3>
        <ul className="events">
          {events.map((event)=>(
            <li key={event.title}><EventCard {...event}/></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default page;