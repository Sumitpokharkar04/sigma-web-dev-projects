1. req.params (The Path)

These are called Route Parameters. They are part of the actual URL path. You define them in your code using a colon (:).

    Route Definition: app.get('/user/:name', ...)

    The URL: localhost:3000/user/john

    How you get it: req.params.name will be "john".

When to use it: When you are identifying a specific resource (like a specific user, a specific post, or a specific product).
2. req.query (The Filter)

These are called Query Parameters. They appear at the very end of the URL after a question mark (?). You do not define these in your route; they are just "sent along" by the browser.

    Route Definition: app.get('/search', ...)

    The URL: localhost:3000/search?age=25

    How you get it: req.query.age will be "25".

When to use it: When you are filtering, sorting, or searching (e.g., "Show me all users who are age 25").