// middleware receives a context object

// runs both on the server and on the client

// must be attached to a page (pages component only)

export default function (context) {
  console.log('[Middleware] Running!')
}
