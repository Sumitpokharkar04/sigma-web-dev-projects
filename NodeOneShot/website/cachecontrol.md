Cache-Control Notes

Cache-Control is an HTTP response header that controls how browsers,
proxies, and CDNs store and reuse a response.

Example:

res.writeHead(200, {
    "content-type": "text/css",
    "Cache-Control": "public, max-age=3600"
})

200:
The request was successful.

content-type:
Tells the browser that the response contains CSS.

public:
Allows browsers, proxies, and CDNs to cache the response.

max-age=3600:
The cached response is fresh for 3600 seconds, which is 1 hour.

Common directives:

public, max-age=3600
    Anyone can cache the response for 1 hour.

private
    Only the user's browser may cache the response.
    Useful for personal or logged-in data.

no-store
    Do not store the response anywhere.
    Useful for passwords, payment data, and sensitive information.

no-cache
    The response may be stored, but the browser must check with
    the server before reusing it.

no-cache does not mean "do not store."
no-store means "do not store."

With no-cache, the browser may send a small validation request.
If the content has not changed, the server returns:

304 Not Modified

This avoids downloading the complete response again.

must-revalidate
    After the cached response expires, the cache must contact
    the server before using it.

immutable
    The response will not change while cached.
    Useful for files with versioned names, such as app.abc123.js.

s-maxage=3600
    Sets the cache duration for shared caches such as CDNs.

If Cache-Control is not specified:
    The browser uses default caching rules. The response may or may
    not be cached depending on other headers and browser behavior.

Use public caching for static files:

"Cache-Control": "public, max-age=3600"

Use no-store for sensitive data:

"Cache-Control": "no-store"

Use no-cache when the browser may store the response but must
always verify whether it is still current.