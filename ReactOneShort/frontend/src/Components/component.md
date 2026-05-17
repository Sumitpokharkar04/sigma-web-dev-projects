React follows a component based architecture meaning instead of writting plain code for each and ecerything in a single file we make separate jsx files for separate features like take for example a notification button:

We will make a notification.jsx file for a notification icon then write a function which will have code for that button and then we will export this function.

Now suppose we want this notification button in our navbar then we will import notification.jsx inside navbar.jsx and then we will call the function.

This is how we use component and function based architecture of react.

This architecture supports the virtual dom tech and avoids refreshing of entire dom tree as only individual components are updated.