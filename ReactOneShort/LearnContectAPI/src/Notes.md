React Context API Notes
1. Why Context API is used

In React, data is usually passed from parent to child using props.

Example:

<App>
  <Navbar Theme={Theme} />
</App>

Then inside Navbar:

props.Theme

This is normal props.

But problem comes when deeply nested components need the same data.

Example:

App
 ↓
Navbar
 ↓
Navbar2
 ↓
Button

If Button needs theme data, you would have to pass props like this:

<Navbar Theme={Theme} />
<Navbar2 Theme={props.Theme} />
<Button Theme={props.Theme} />

This is called prop drilling.

Context API solves this problem.

Context allows you to create global-like data that can be accessed by any component inside a Provider.

2. Basic idea of Context API

Context API has 3 main parts:

1. createContext()
2. Provider
3. useContext()
Part 1: createContext()

This creates the context.

export const ThemeDataContext = createContext()

Think of this as creating a data channel.

Part 2: Provider

Provider gives data to components.

<ThemeDataContext.Provider value={'sumit'}>
  <App />
</ThemeDataContext.Provider>

The value is the data you want to share.

Here:

value={'sumit'}

means all components inside this Provider can access "sumit".

Part 3: useContext()

A child component can receive the value using useContext().

const data = useContext(ThemeDataContext)

Now:

data

will contain:

sumit
3. Important rule

A component can use context only if it is inside that Provider.

This works:

        <ThemeDataContext.Provider value={'sumit'}>
        <Navbar />
        </ThemeDataContext.Provider>

Because Navbar is inside the Provider.

This does not work:

        <ThemeDataContext.Provider value={'sumit'}>
        </ThemeDataContext.Provider>

        <Navbar />

Because Navbar is outside the Provider.

4. Correct Context API syntax using separate file

This is the common professional method.

Context/ThemeContext.jsx
    import React, { createContext } from 'react'

        export const ThemeDataContext = createContext()

        const ThemeContext = (props) => {
        return (
            <ThemeDataContext.Provider value={'sumit'}>
            {props.children}
            </ThemeDataContext.Provider>
        )
        }

        export default ThemeContext

Important points:

        export const ThemeDataContext = createContext()

        This must be outside the component.

        Wrong:

        const ThemeContext = () => {
        export const ThemeDataContext = createContext()
        }

Because export cannot be written inside a function.

5. What is props.children?

Whenever you write something inside a component’s opening and closing tags, React sends it as props.children.

Example:

        <ThemeContext>
        <App />
        </ThemeContext>

Here:

<App />

becomes:

props.children

inside ThemeContext.

So this:

        const ThemeContext = (props) => {
        return (
            <ThemeDataContext.Provider value={'sumit'}>
            {props.children}
            </ThemeDataContext.Provider>
        )
        }

means:

Give value "sumit" to all children inside this Provider.

In your case, props.children is:

<App />

So internally it becomes something like:

        <ThemeDataContext.Provider value={'sumit'}>
        <App />
        </ThemeDataContext.Provider>

6. Why blank screen happened earlier

You wrote:

    {props.chidren}

But correct spelling is:

    {props.children}

React gives the child component in props.children, not props.chidren.

So your code became:

        <ThemeDataContext.Provider value={'sumit'}>
        undefined
        </ThemeDataContext.Provider>

That means <App /> was not rendered.

That is why the screen became blank.

7. Flow of Context API in your project
        main.jsx
        createRoot(document.getElementById('root')).render(
        <ThemeContext>
            <App />
        </ThemeContext>
        )

        Flow:

        main.jsx starts React
        ↓
        ThemeContext wraps App
        ↓
        ThemeContext.Provider gives value "sumit"
        ↓
        props.children renders App
        ↓
        App renders Navbar
        ↓
        Navbar uses useContext()
        ↓
        Navbar receives "sumit"

8. Full working flow

        main.jsx
        import { createRoot } from 'react-dom/client'
        import './index.css'
        import App from './App.jsx'
        import ThemeContext from './Context/ThemeContext.jsx'

        createRoot(document.getElementById('root')).render(
        <ThemeContext>
            <App />
        </ThemeContext>
        )


        ThemeContext.jsx
        import React, { createContext } from 'react'

        export const ThemeDataContext = createContext()

        const ThemeContext = (props) => {
        return (
            <ThemeDataContext.Provider value={'sumit'}>
            {props.children}
            </ThemeDataContext.Provider>
        )
        }

    export default ThemeContext
        App.jsx
        import React, { useState } from 'react'
        import Navbar from './components/Navbar'

        const App = () => {
        const [Theme, setTheme] = useState('Light')

        return (
            <div>
            <Navbar Theme={Theme} />
            </div>
        )
        }

        export default App


        Navbar.jsx
        import React, { useContext } from 'react'
        import Navbar2 from './Navbar2'
        import { ThemeDataContext } from '../Context/ThemeContext'

        const Navbar = (props) => {
        const data = useContext(ThemeDataContext)

        return (
            <div className='nav'>
            <h1>{data}</h1>
            <Navbar2 Theme={props.Theme} />
            </div>
        )
        }

        export default Navbar


        Navbar2.jsx
        import React from 'react'

        const Navbar2 = (props) => {
        return (
            <div className='nav2'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Products</h4>
            <h4>{props.Theme}</h4>
            </div>
        )
        }

export default Navbar2
9. Context vs Props
Props

Props are passed directly from parent to child.

<Navbar Theme={Theme} />

Then inside Navbar:

props.Theme

Flow:

App → Navbar → Navbar2

If Navbar2 needs it, you must manually pass it again.

Context

Context does not need manual passing at every level.

    <ThemeDataContext.Provider value={'sumit'}>
    <App />
    </ThemeDataContext.Provider>

Any component inside can access it:

const data = useContext(ThemeDataContext)

Flow:

Provider gives data
 ↓
Any child component can access it directly
10. Can we create context directly inside App.jsx?

Yes, you can.

This is your alternate method.

In this method, you do not need a separate ThemeContext.jsx file.

    main.jsx
    import { createRoot } from 'react-dom/client'
    import './index.css'
    import App from './App.jsx'

    createRoot(document.getElementById('root')).render(
    <App />
    )


    App.jsx
    import React, { createContext, useState } from 'react'
    import Navbar from './components/Navbar'

    export const ThemeDataContext = createContext()

    const App = () => {
    const [Theme, setTheme] = useState('Light')

    return (
        <ThemeDataContext.Provider value={'sumit'}>
        <div>
            <Navbar Theme={Theme} />
        </div>
        </ThemeDataContext.Provider>
    )
    }

    export default App


    Navbar.jsx
    import React, { useContext } from 'react'
    import Navbar2 from './Navbar2'
    import { ThemeDataContext } from '../App'

    const Navbar = (props) => {
    const data = useContext(ThemeDataContext)

    return (
        <div className='nav'>
        <h1>{data}</h1>
        <Navbar2 Theme={props.Theme} />
        </div>
    )
    }

    export default Navbar

This will also work.

11. Difference between both methods
Method 1: Separate context file
Context/ThemeContext.jsx
main.jsx wraps App with ThemeContext

This is cleaner for bigger projects.

Advantages:

Context logic is separate
App.jsx stays clean
Any component can import context from one proper place
Good for large projects

Example import:

import { ThemeDataContext } from '../Context/ThemeContext'
Method 2: Context inside App.jsx
App.jsx creates context and Provider
main.jsx only renders App

This is okay for learning or small projects.

Advantage:

Less files
Easier to understand at first

Disadvantage:

Other components must import context from App.jsx

Example:

import { ThemeDataContext } from '../App'

This can become messy in bigger projects because components become dependent on App.jsx.

12. Most important rule to remember

Context API only works when the component using context is inside the Provider.

Correct:

    <ThemeDataContext.Provider value={'sumit'}>
    <Navbar />
    </ThemeDataContext.Provider>

Then inside Navbar:

const data = useContext(ThemeDataContext)

Wrong:

    <ThemeDataContext.Provider value={'sumit'}>
    </ThemeDataContext.Provider>

    <Navbar />

Here Navbar is outside the Provider, so it cannot access the value.

13. Simple mental model

Think of Provider like Wi-Fi.

Provider = Wi-Fi router
value = Internet signal/data
components inside Provider = devices connected to Wi-Fi
useContext = device receiving Wi-Fi

If the component is inside the Provider, it gets the data.

If it is outside the Provider, it does not get the data.

14. Final summary
createContext() creates the context.
Provider gives the value.
useContext() receives the value.
props.children renders whatever is placed inside a wrapper component.
Provider must wrap the components that need the context.
You can keep Provider in main.jsx or App.jsx.
Separate context file is cleaner for bigger projects.
Context inside App.jsx is okay for small projects and learning.