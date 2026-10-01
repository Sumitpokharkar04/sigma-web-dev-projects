import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const MartianMono = Martian_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Events",
  description: "Discover the latest developer events",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", schibstedGrotesk.variable, MartianMono.variable, "font-sans", geist.variable)}
    >
      <body className="relative min-h-screen">
        {/* Background layer */}
        <Navbar/>
        <div className="fixed inset-0 z-0">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#5dfce4"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            className="h-full w-full"
          />
        </div>

        {/* Content layer */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}


// Note: Putting a Background Behind Content
// The idea

// Think of the page as stacked sheets of paper. Each thing goes on its own sheet, and you decide which sheet is in front.

// The recipe
// tsx
// {/* Back sheet: the background */}
// <div className="fixed inset-0 z-0">
//   <LightRays className="h-full w-full" />
// </div>

// {/* Front sheet: the content */}
// <div className="relative z-10">{children}</div>
// What each class does
// Class	Meaning
// fixed	Removes the element from normal flow and glues it to the screen. It takes up no space.
// inset-0	Shorthand for top/right/bottom/left: 0, so it stretches over the whole screen.
// z-0 / z-10	Depth order. A higher number sits in front.
// relative	Keeps the element in flow, and makes z-index work.
// h-full w-full	Fill 100% of the parent's height and width.
// 3 rules to remember
// Normal flow: elements stack top to bottom, and each one takes up space.
// fixed / absolute: pulls an element out of the flow, so it takes no space and can overlap other things.
// z-index only works on positioned elements (relative, absolute, fixed, sticky). Without a position, it's ignored.
// Why my old code failed

// LightRays was relative (in flow) with h-screen, so it took a full screen of space and landed below the text.

// Quick test

// Change fixed to relative on the background div, and the text is pushed down. Change it back and the text jumps to the top.


// Absolute vs fixed: which is better?

// Neither is better in general. They differ in one thing: what happens when the user scrolls.

// 	fixed	absolute
// Glued to	The screen (viewport)	The page
// On scroll	Rays stay in place, always visible	Rays scroll away with the content
// Feels like	A permanent backdrop	A hero section effect at the top
// How to choose
// Use fixed when the effect should be the background of the whole site, visible on every part of the page while scrolling. This is what I'd pick for your Dev Events app if you want the glow to always be there.
// Use absolute when the effect belongs only to the top section (like a landing page hero), and you want it to move away as the user scrolls down, like in the tutorial.
// My suggestion for you

// Since your layout has one full-page background behind everything, fixed with z-0 and the content in relative z-10 is the safer choice. It's more predictable, and it avoids the negative z-index problem I mentioned, where z-[-1] can disappear behind a background color on body.

// But if you like the tutorial's look, where the rays fade out as you scroll down, use absolute. Just make sure the body has no background color, or the rays may vanish.