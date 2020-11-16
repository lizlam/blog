import React from "react"
import PropTypes from "prop-types"

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
<script
  dangerouslySetInnerHTML={{
    __html: `
		(function(f, a, t, h, o, m){
        		a[h]=a[h]||function(){
            		    (a[h].q=a[h].q||[]).push(arguments)
        		};
       		  o=f.createElement('script'),
   		       m=f.getElementsByTagName('script')[0];
      		  o.async=1; o.src=t; o.id='fathom-script';
     		   m.parentNode.insertBefore(o,m)
		})(document, window, '//go.mazarbul.net:9000/tracker.js', 'fathom');
		fathom('set', 'siteId', 'IEXRO');
		fathom('trackPageview');
        `,
  }}
/>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
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
