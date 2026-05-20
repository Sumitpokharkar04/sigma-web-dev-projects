Css error:-card.jsx <div className='parent'>
      <div className="card">
        <div className="top">
            <span>Available for work</span>
            <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" />
            <h1>Sara</h1>
            <h3>Product Manager</h3>
        </div>

app.jsx:-
 return (
    <>
     <Card/>
      <Card/>
    </>
  )

  Before i was getting the card one below another in a vertical line and i was not knowing the error after doing some research i understood that the reason was this line <div className='parent'>
      <div className="card"> when i used to call the cards two parent used to get form so technically parent CSS 
.parent {
  margin: 0px;
  padding: auto;
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
} 

was getting applied to two different parents and thats why we were not getting any result because the return call used to create two different cards but with two different parents and not on two cards with same parent.

Two solve this problem we do this :-   return (
    <div className='parent'>
     <Card/>
      <Card/>
    </div>
  ) we bind these two cards in same parent in App.jsx


Now regarding as we see we have used h1 on different occasions first in card and then we have used it in the header but the h1 style in our index.css
h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}

gets applied on both this is because while rendering in app.jsx react imports the css and applies it globally to avoid these we can still take some precautions like two separate css files for separate features or components but the problem is react will always import css  while rendering and then the css of similar looking tags will colide with each other to avoid these we use modular css means in components folder we create a new folder for every component like button folder for buttons and where it will contain button.jsx and button.css and same for header components.

Notes: Why do we use styles.header in CSS Modules?
1. Normal CSS creates global class names

When you write normal CSS:

.header {
  background-color: aqua;
}

And use it like this:

<div className="header">

The class name header is available globally in the whole project.

That means any component can accidentally use or affect .header.

2. Problem with normal CSS

Suppose you have two files:

/* Header.css */
.header {
  background-color: aqua;
}
/* Footer.css */
.header {
  background-color: red;
}

Both are using the same class name .header.

So CSS may clash.

Your header may accidentally become red because another file also used .header.

This is called a class name conflict.

3. CSS Modules solve this problem

CSS Modules make class names local to that component.

Example:

/* Header.module.css */
.header {
  background-color: aqua;
}

When Vite/React builds the app, it changes .header into a unique name like:

.Header_header__a7x9k {
  background-color: aqua;
}

So now it will not conflict with another .header in another file.

4. Why do we write this?
import styles from './Header.module.css'

Here, styles becomes an object.

That object contains your CSS class names.

Example:

styles = {
  header: "Header_header__a7x9k"
}

So when you write:

<div className={styles.header}>

React uses the actual generated class name:

<div class="Header_header__a7x9k">
5. Why not use this?
<div className="header">

Because in CSS Modules, .header is no longer used as a simple global class.

It has been converted into a unique class name.

So this:

<div className="header">

looks for a normal class called header.

But your module created something like:

.Header_header__a7x9k

That is why the CSS does not apply.

6. Simple comparison

Normal CSS:

import './Header.css'

<div className="header">

CSS Module:

import styles from './Header.module.css'

<div className={styles.header}>
7. Easy memory trick

Normal CSS:

className="header"

means:

Use class name directly.

CSS Module:

className={styles.header}

means:

Ask the CSS module for the real generated class name.
8. Final rule

Use this for normal CSS:

import './Button.css'
<div className="btn">

Use this for CSS Modules:

import styles from './Button.module.css'
<div className={styles.btn}>

CSS Modules are used mainly to avoid class name conflicts when your project becomes bigger.


