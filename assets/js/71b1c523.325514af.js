"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[92384],{11119:e=>{e.exports=JSON.parse('{"pluginId":"zio-http","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"v1.x","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/zio-http/v1.x/getting-started","docId":"v1.x/getting-started"},{"type":"category","label":"DSL","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Server","href":"/zio-http/v1.x/dsl/server","docId":"v1.x/dsl/server"},{"type":"link","label":"Http","href":"/zio-http/v1.x/dsl/http","docId":"v1.x/dsl/http"},{"type":"link","label":"Request","href":"/zio-http/v1.x/dsl/request","docId":"v1.x/dsl/request"},{"type":"link","label":"Response","href":"/zio-http/v1.x/dsl/response","docId":"v1.x/dsl/response"},{"type":"link","label":"Body","href":"/zio-http/v1.x/dsl/body","docId":"v1.x/dsl/body"},{"type":"link","label":"Headers","href":"/zio-http/v1.x/dsl/headers","docId":"v1.x/dsl/headers"},{"type":"link","label":"Cookie","href":"/zio-http/v1.x/dsl/cookies","docId":"v1.x/dsl/cookies"},{"type":"link","label":"Middleware","href":"/zio-http/v1.x/dsl/middleware","docId":"v1.x/dsl/middleware"},{"type":"category","label":"Socket","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"WebSocketFrame","href":"/zio-http/v1.x/dsl/socket/websocketframe","docId":"v1.x/dsl/socket/websocketframe"}],"href":"/zio-http/v1.x/dsl/socket/"}]},{"type":"link","label":"Client","href":"/zio-http/v1.x/client/","docId":"v1.x/client/index"},{"type":"link","label":"Testing","href":"/zio-http/v1.x/testing/","docId":"v1.x/testing/index"},{"type":"link","label":"Integrations","href":"/zio-http/v1.x/integrations/","docId":"v1.x/integrations/index"},{"type":"category","label":"Examples","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Basic Examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"HTTP Client","href":"/zio-http/v1.x/examples/zio-http-basic-examples/http_client","docId":"v1.x/examples/zio-http-basic-examples/http_client"},{"type":"link","label":"HTTP Server","href":"/zio-http/v1.x/examples/zio-http-basic-examples/http_server","docId":"v1.x/examples/zio-http-basic-examples/http_server"},{"type":"link","label":"HTTPS Client","href":"/zio-http/v1.x/examples/zio-http-basic-examples/https_client","docId":"v1.x/examples/zio-http-basic-examples/https_client"},{"type":"link","label":"HTTPS Server","href":"/zio-http/v1.x/examples/zio-http-basic-examples/https_server","docId":"v1.x/examples/zio-http-basic-examples/https_server"},{"type":"link","label":"Websocket Server","href":"/zio-http/v1.x/examples/zio-http-basic-examples/web-socket","docId":"v1.x/examples/zio-http-basic-examples/web-socket"}]},{"type":"category","label":"Advanced Examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Advanced Server","href":"/zio-http/v1.x/examples/advanced-examples/advanced_server","docId":"v1.x/examples/advanced-examples/advanced_server"},{"type":"link","label":"Authentication","href":"/zio-http/v1.x/examples/advanced-examples/authentication","docId":"v1.x/examples/advanced-examples/authentication"},{"type":"link","label":"Concrete Entity","href":"/zio-http/v1.x/examples/advanced-examples/concrete-entity","docId":"v1.x/examples/advanced-examples/concrete-entity"},{"type":"link","label":"Basic Authentication","href":"/zio-http/v1.x/examples/advanced-examples/middleware_basic_auth","docId":"v1.x/examples/advanced-examples/middleware_basic_auth"},{"type":"link","label":"CORS Handling","href":"/zio-http/v1.x/examples/advanced-examples/middleware_cors","docId":"v1.x/examples/advanced-examples/middleware_cors"},{"type":"link","label":"CSRF","href":"/zio-http/v1.x/examples/advanced-examples/middleware_csrf","docId":"v1.x/examples/advanced-examples/middleware_csrf"},{"type":"link","label":"Streaming File","href":"/zio-http/v1.x/examples/advanced-examples/stream-file","docId":"v1.x/examples/advanced-examples/stream-file"},{"type":"link","label":"Streaming Response","href":"/zio-http/v1.x/examples/advanced-examples/stream-response","docId":"v1.x/examples/advanced-examples/stream-response"},{"type":"link","label":"Advanced Web Socket Server","href":"/zio-http/v1.x/examples/advanced-examples/web-socket-advanced","docId":"v1.x/examples/advanced-examples/web-socket-advanced"}]}]}],"href":"/zio-http/v1.x/"},{"type":"link","label":"index","href":"/zio-http/","docId":"index"}]},"docs":{"index":{"id":"index","title":"index","description":"Table of Contents","sidebar":"tutorialSidebar"},"v1.x/client/index":{"id":"v1.x/client/index","title":"Work in progress","description":"","sidebar":"tutorialSidebar"},"v1.x/dsl/body":{"id":"v1.x/dsl/body","title":"Body","description":"Body is a domain to model content for Request, Response and ClientRequest. ZIO HTTP uses Netty at it\'s core and Netty handles content as ByteBuf. Body helps you decode and encode this content into simpler, easier to use data types while creating a Request or Response.","sidebar":"tutorialSidebar"},"v1.x/dsl/cookies":{"id":"v1.x/dsl/cookies","title":"Cookie","description":"ZIO HTTP has special support for Cookie headers using the Cookie Domain to add and invalidate cookies. Adding a cookie will generate the correct Set-Cookie headers","sidebar":"tutorialSidebar"},"v1.x/dsl/headers":{"id":"v1.x/dsl/headers","title":"Headers","description":"ZIO HTTP provides support for all HTTP headers (as defined in RFC2616 ) along with  custom headers.","sidebar":"tutorialSidebar"},"v1.x/dsl/http":{"id":"v1.x/dsl/http","title":"Http","description":"Http is a functional domain that models HTTP applications. It\u2019s polymorphic on input and output type.","sidebar":"tutorialSidebar"},"v1.x/dsl/middleware":{"id":"v1.x/dsl/middleware","title":"Middleware","description":"What is a \\"Middleware\\"?","sidebar":"tutorialSidebar"},"v1.x/dsl/request":{"id":"v1.x/dsl/request","title":"Request","description":"ZIO HTTP Request is designed in the simplest way possible to decode HTTP Request into a ZIO HTTP request.","sidebar":"tutorialSidebar"},"v1.x/dsl/response":{"id":"v1.x/dsl/response","title":"Response","description":"ZIO HTTP Response is designed to encode HTTP Response.","sidebar":"tutorialSidebar"},"v1.x/dsl/server":{"id":"v1.x/dsl/server","title":"Server","description":"This section describes, ZIO HTTP Server and different configurations you can provide while creating the Server","sidebar":"tutorialSidebar"},"v1.x/dsl/socket/socket":{"id":"v1.x/dsl/socket/socket","title":"Socket","description":"Websocket support can be added to your Http application using the same Http domain, something like this \u2014","sidebar":"tutorialSidebar"},"v1.x/dsl/socket/websocketframe":{"id":"v1.x/dsl/socket/websocketframe","title":"WebSocketFrame","description":"In the WebSocket protocol, communication happens using frames. ZIO","sidebar":"tutorialSidebar"},"v1.x/examples/advanced-examples/advanced_server":{"id":"v1.x/examples/advanced-examples/advanced_server","title":"Advanced Server","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/advanced-examples/authentication":{"id":"v1.x/examples/advanced-examples/authentication","title":"Authentication","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/advanced-examples/concrete-entity":{"id":"v1.x/examples/advanced-examples/concrete-entity","title":"Concrete Entity","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/advanced-examples/middleware_basic_auth":{"id":"v1.x/examples/advanced-examples/middleware_basic_auth","title":"Basic Authentication","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/advanced-examples/middleware_cors":{"id":"v1.x/examples/advanced-examples/middleware_cors","title":"CORS Handling","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/advanced-examples/middleware_csrf":{"id":"v1.x/examples/advanced-examples/middleware_csrf","title":"CSRF","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/advanced-examples/stream-file":{"id":"v1.x/examples/advanced-examples/stream-file","title":"Streaming File","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/advanced-examples/stream-response":{"id":"v1.x/examples/advanced-examples/stream-response","title":"Streaming Response","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/advanced-examples/web-socket-advanced":{"id":"v1.x/examples/advanced-examples/web-socket-advanced","title":"Advanced Web Socket Server","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/zio-http-basic-examples/http_client":{"id":"v1.x/examples/zio-http-basic-examples/http_client","title":"HTTP Client","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/zio-http-basic-examples/http_server":{"id":"v1.x/examples/zio-http-basic-examples/http_server","title":"HTTP Server","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/zio-http-basic-examples/https_client":{"id":"v1.x/examples/zio-http-basic-examples/https_client","title":"HTTPS Client","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/zio-http-basic-examples/https_server":{"id":"v1.x/examples/zio-http-basic-examples/https_server","title":"HTTPS Server","description":"","sidebar":"tutorialSidebar"},"v1.x/examples/zio-http-basic-examples/web-socket":{"id":"v1.x/examples/zio-http-basic-examples/web-socket","title":"Websocket Server","description":"","sidebar":"tutorialSidebar"},"v1.x/getting-started":{"id":"v1.x/getting-started","title":"Getting Started","description":"ZIO HTTP is a powerful library that is used to build highly performant HTTP-based services and clients using functional scala and ZIO and uses Netty as its core.","sidebar":"tutorialSidebar"},"v1.x/index":{"id":"v1.x/index","title":"Setup","description":"In this guide, you\'ll learn how to get started with a new zio-http project.","sidebar":"tutorialSidebar"},"v1.x/integrations/index":{"id":"v1.x/integrations/index","title":"Work in progress","description":"","sidebar":"tutorialSidebar"},"v1.x/testing/index":{"id":"v1.x/testing/index","title":"Work in progress","description":"","sidebar":"tutorialSidebar"}}}')}}]);