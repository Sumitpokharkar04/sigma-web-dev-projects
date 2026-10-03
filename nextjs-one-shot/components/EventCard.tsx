'use client'

import Image from "next/image"
import Link from "next/link"
import posthog from "posthog-js"

const isPostHogConfigured = Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
    process.env.NEXT_PUBLIC_POSTHOG_HOST
)

interface props {
    title : string;
    image : string;
    slug:string;
    location:string;
    date:string;
    time:string;
}
const EventCard = ({title,image}:props)=>{
    return (
        <Link
            href="/events"
            id="event-card"
            onClick={() => {
              if (isPostHogConfigured) {
                posthog.capture("event_card_selected", { event_title: title })
                posthog.logger.info("featured event selected", {
                  surface: "featured_events",
                })
              }
            }}
        >
            <Image src={image} alt ={title}  width={410}
        height={300} className="poster" />

        <p className="title">{title}</p>
        </Link>
    )    
}

export default EventCard