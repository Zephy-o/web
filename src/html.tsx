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
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
        {
          "@context" : "http://schema.org",
          "@type" : "SoftwareApplication",
          "name" : "MIKI",
          "image" : "https://cdn.miki.ai/branding/logo-dark@1024.png",
          "url" : "https://miki.ai/",
          "author" : {
            "@type" : "Person",
            "name" : "Mike Veldsink"
          },
          "applicationCategory" : "EntertainmentApplication",
          "downloadUrl" : "https://miki.ai/invite.html?mikiai",
          "review" : [ {
            "@type" : "Review",
            "author" : {
              "@type" : "Person",
              "name" : "Kibii TV"
            },
            "reviewBody" : "Our server was losing its foundation until Miki came aboard, the community was united with all of its unique features and brought new friendships all-around!"
          }, {
            "@type" : "Review",
            "author" : {
              "@type" : "Person",
              "name" : "Kongregation on Discord"
            },
            "reviewBody" : "Miki helps keep the flow of conversations going with her wide variety of fun commands in our server. She&#39;s great for small and large servers alike, providing both entertainment and utility!"
          }, {
            "@type" : "Review",
            "author" : {
              "@type" : "Person",
              "name" : "ESO SQUAD"
            },
            "reviewBody" : "With so many customizations and commands, Miki is one of the ultimate utility and fun bots we&#39;ve seen. And trust me, we&#39;ve gone through plenty!"
          } ]
        }
        </script>`}} />
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
