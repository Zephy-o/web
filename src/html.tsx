import * as React from "react"
import * as PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script src="https://kit.fontawesome.com/07e5b6c21a.js"></script>
        <script type="text/javascript" src="https://blog.miki.ai/public/ghost-sdk.min.js"></script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Miki",
            "url": "http://www.miki.ai",
            "logo": "https://cdn.miki.ai/branding/logo-dark@1024.png",
            "foundingDate": "2015",
            "founders": [
            {
            "@type": "Person",
            "name": "Mike Veldsink"
            }],
            "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "hello@miki.ai",
            "url": "https://miki.ai/about"
            },
            "sameAs": [ 
              "https://twitter.com/miki_discord"
            ]}
          }`}} />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
