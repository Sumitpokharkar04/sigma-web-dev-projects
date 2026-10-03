'use client'

import posthog from "posthog-js"

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
  process.env.NEXT_PUBLIC_POSTHOG_HOST
)

const Explorebtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto" 
    onClick = {() => {
      if (isPostHogConfigured) {
        posthog.capture("events_explored")
        posthog.logger.info("events exploration requested", {
          surface: "landing_page",
        })
      }
      console.log("Navigating to events");

      }}>
      <a href="#events">
        Explore events
      </a>
      <img src="/icons/arrow-down.svg" alt="arrow" />
    </button>
  );
};

export default Explorebtn;

// In JSX, the handler must be wrapped in curly braces: onClick={() => { ... }}, not onClick = () => { ... }.
//why will i get a error if i write div under button because The error happens because a React component can only return one root element.