"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[99882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||f[d]||r;return n?i.createElement(g,a(a({ref:t},c),{},{components:n})):i.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const r={id:"configurable-zio-application",title:"Tutorial: How to Make a ZIO Application Configurable?",sidebar_label:"Making a ZIO application configurable"},a=void 0,p={unversionedId:"guides/tutorials/configurable-zio-application",id:"guides/tutorials/configurable-zio-application",title:"Tutorial: How to Make a ZIO Application Configurable?",description:"Introduction",source:"@site/docs/guides/tutorials/make-a-zio-application-configurable.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/configurable-zio-application",permalink:"/guides/tutorials/configurable-zio-application",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/make-a-zio-application-configurable.md",tags:[],version:"current",frontMatter:{id:"configurable-zio-application",title:"Tutorial: How to Make a ZIO Application Configurable?",sidebar_label:"Making a ZIO application configurable"},sidebar:"guides-sidebar",previous:{title:"GraphQL Web Service",permalink:"/guides/quickstarts/graphql-webservice"},next:{title:"Encoding and Decoding JSON Data",permalink:"/guides/tutorials/encode-and-decode-json-data"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Problem",id:"problem",level:2},{value:"Step 1: Define the Configuration Data Types (ADTs)",id:"step-1-define-the-configuration-data-types-adts",level:2},{value:"Step 2: Define the Configuration Descriptor",id:"step-2-define-the-configuration-descriptor",level:2},{value:"Step 3: Accessing Configuration Data using <code>ZIO.config</code>",id:"step-3-accessing-configuration-data-using-zioconfig",level:2},{value:"Step 3: Reading Configuration Data From HOCON Files",id:"step-3-reading-configuration-data-from-hocon-files",level:2},{value:"Adding ZIO Config Dependencies",id:"adding-zio-config-dependencies",level:3},{value:"Defining the HOCON Configuration File",id:"defining-the-hocon-configuration-file",level:3},{value:"Changing the Default ConfigProvider to HOCON Provider",id:"changing-the-default-configprovider-to-hocon-provider",level:3},{value:"Step 4: Running The Application",id:"step-4-running-the-application",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"One of the most common requirements for writing an application is to be able to configure it, especially when we are writing cloud-native applications."),(0,o.kt)("p",null,"In this tutorial, we will start with a simple ZIO application and then try to make it configurable using the ZIO Config library."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("a",{parentName:"p",href:"/guides/quickstarts/restful-webservice"},"ZIO Quickstart: Restful Web Service")," as our ground project. So make sure you have downloaded and tested it before you start this tutorial."),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"We have a web service that does not allow us to configure the host and port of the service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:khajavi/zio-quickstart-restful-webservice.git\ncd zio-quickstart-restful-webservice\nsbt run\n")),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Server started on http://localhost:8080\n")),(0,o.kt)("p",null,"We want to be able to configure the host and port of the service so that before running the application, we specify the host and port of the service."),(0,o.kt)("p",null,"In this article, we will see how we can make our application configurable using ZIO Config."),(0,o.kt)("h2",{id:"step-1-define-the-configuration-data-types-adts"},"Step 1: Define the Configuration Data Types (ADTs)"),(0,o.kt)("p",null,"In this example our configuration data type is a case class that contains two fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"case class HttpServerConfig(host: String, port: Int, nThreads: Int)\n")),(0,o.kt)("h2",{id:"step-2-define-the-configuration-descriptor"},"Step 2: Define the Configuration Descriptor"),(0,o.kt)("p",null,"Next, we need to define the configuration descriptor that describes the configuration data type. The best practice is to define the configuration descriptor in the companion object of the configuration data type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.config._\nimport zio.Config\nimport zio.config.magnolia.deriveConfig\n\nobject HttpServerConfig {\n  val config: Config[HttpServerConfig] =\n    deriveConfig[HttpServerConfig].nested("HttpServerConfig")\n}\n')),(0,o.kt)("h2",{id:"step-3-accessing-configuration-data-using-zioconfig"},"Step 3: Accessing Configuration Data using ",(0,o.kt)("inlineCode",{parentName:"h2"},"ZIO.config")),(0,o.kt)("p",null,"By utilizing the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.config[HttpServerConfig]")," function, we can obtain access to the configuration information that has been read by the current ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigProvider"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nZIO.config[HttpServerConfig](HttpServerConfig.config).flatMap { config =>\n  ??? // Do something with the configuration\n}\n")),(0,o.kt)("p",null,"The above code is a ZIO effect that will access the ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpServerConfig")," configuration data and then by using flatMap, we can do something with it, for example, we can print it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nval workflow: ZIO[Any, Exception, Unit] =\n  ZIO.config[HttpServerConfig](HttpServerConfig.config).flatMap { config =>\n    Console.printLine(\n      "Application started with following configuration:\\n" +\n        s"\\thost: ${config.host}\\n" +\n        s"\\tport: ${config.port}"\n    )\n  }\n')),(0,o.kt)("p",null,"Let's run the above workflow and see the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\ncase class HttpServerConfig(host: String, port: Int)\n\nobject MainApp extends ZIOAppDefault {\n\n  val workflow: ZIO[Any, IOException, Unit] =\n    ZIO.service[HttpServerConfig](HttpServerConfig.config).flatMap { config =>\n      Console.printLine(\n        "Application started with following configuration:\\n" +\n          s"\\thost: ${config.host}\\n" +\n          s"\\tport: ${config.port}"\n      )\n    }\n\n  def run = workflow\n}\n// error: not enough arguments for method service: (implicit evidence$8: zio.Tag[MdocApp0.this.HttpServerConfig], trace: zio.Trace): zio.URIO[MdocApp0.this.HttpServerConfig,MdocApp0.this.HttpServerConfig].\n// Unspecified value parameter trace.\n//     ZIO.service[HttpServerConfig](HttpServerConfig.config).flatMap { config =>\n//     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n')),(0,o.kt)("p",null,"When try to run the above code, we will see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},'timestamp=2023-04-01T14:00:13.902065Z level=ERROR thread=#zio-fiber-0 message="" cause="Exception in thread "zio-fiber-4" zio.Config$Error$And: ((((Missing data at HttpServerConfig.host: Expected HTTPSERVERCONFIG_HOST to be set in the environment) or (Missing data at HttpServerConfig.host: Expected HttpServerConfig.host to be set in properties)) and ((Missing data at HttpServerConfig.nThreads: Expected HTTPSERVERCONFIG_NTHREADS to be set in the environment) or (Missing data at HttpServerConfig.nThreads: Expected HttpServerConfig.nThreads to be set in properties))) and ((Missing data at HttpServerConfig.port: Expected HTTPSERVERCONFIG_PORT to be set in the environment) or (Missing data at HttpServerConfig.port: Expected HttpServerConfig.port to be set in properties)))\n        at dev.zio.quickstart.MainApp.run(MainApp.scala:35)"\n')),(0,o.kt)("p",null,"The above error is because we have not provided any configuration to the application. By default, ZIO will try to read configuration data from the application properties or environment variables."),(0,o.kt)("p",null,"So let's try to provide them as environment variables and see what happens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'HTTPSERVERCONFIG_HOST=localhost HTTPSERVERCONFIG_PORT=8080 HTTPSERVERCONFIG_NTHREADS=0 sbt "runMain dev.zio.quickstart.MainApp"\n')),(0,o.kt)("p",null,"Now we can see this output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Application started with following configuration:\n    host: localhost\n    port: 8080\n")),(0,o.kt)("p",null,"Great! We have ZIO application that can access the configuration data. It works! Now, let's apply the same approach to our RESTful Web Service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\nimport zio.config.magnolia.deriveConfig\n\nobject GreetingApp {\n  def apply() = Http.empty\n}\n\nobject DownloadApp {\n  def apply() = Http.empty\n}\n\nobject CounterApp {\n  def apply() = Http.empty\n}\n\nobject UserApp {\n  def apply() = Http.empty\n}\n\ntrait UserRepo\n\nobject InmemoryUserRepo {\n  val layer = ZLayer.succeed(new UserRepo{})\n}\n\ncase class HttpServerConfig(host: String, port: Int, nThreads: Int)\n\nobject HttpServerConfig {\n  val config: Config[HttpServerConfig] =\n    deriveConfig[HttpServerConfig].nested("HttpServerConfig")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.http._\n\nimport java.net.InetSocketAddress\n\nobject MainApp extends ZIOAppDefault {\n  val serverConfig: ZLayer[Any, Config.Error, ServerConfig] =\n    ZLayer\n      .fromZIO(\n        ZIO.config[HttpServerConfig](HttpServerConfig.config).map { c =>\n          ServerConfig(\n            address = new InetSocketAddress(c.port),\n            nThreads = c.nThreads\n          )\n        }\n      )\n\n  val myApp: Http[UserRepo with Ref[Int], Nothing, Request, Response] =\n    GreetingApp() ++ DownloadApp() ++ CounterApp() ++ UserApp()\n\n  def run =\n    Server\n      .serve(myApp)\n      .provide(\n        // Http server layer with its configuration\n        serverConfig,\n        Server.live,\n\n        // A layer responsible for storing the state of the `counterApp`\n        ZLayer.fromZIO(Ref.make(0)),\n\n        // To use the persistence layer, provide the `PersistentUserRepo.layer` layer instead\n        InmemoryUserRepo.layer,\n      )\n}\n")),(0,o.kt)("p",null,"Until now, we made our RESTful web service configurable to be able to use its config from the ZIO environment with a simple configuration layer."),(0,o.kt)("p",null,"Now let's move on to the next step: reading configuration data from HOCON files by utilizing custom ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigProvider"),"s."),(0,o.kt)("h2",{id:"step-3-reading-configuration-data-from-hocon-files"},"Step 3: Reading Configuration Data From HOCON Files"),(0,o.kt)("p",null,"ZIO Config library provides various ways read configuration data from different sources, e.g.:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HOCON files"),(0,o.kt)("li",{parentName:"ul"},"JSON files"),(0,o.kt)("li",{parentName:"ul"},"YAML files"),(0,o.kt)("li",{parentName:"ul"},"XML files")),(0,o.kt)("p",null,"In this tutorial, we will use the HOCON files. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config"},"HOCON")," is config format which is superset of JSON developed by Lightbend."),(0,o.kt)("h3",{id:"adding-zio-config-dependencies"},"Adding ZIO Config Dependencies"),(0,o.kt)("p",null,"We should add the following dependencies to our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sb")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config"          % "4.0.0-RC14"\nlibraryDependencies += "dev.zio" %% "zio-config-typesafe" % "4.0.0-RC14"\nlibraryDependencies += "dev.zio" %% "zio-config-magnolia" % "4.0.0-RC14"\n')),(0,o.kt)("h3",{id:"defining-the-hocon-configuration-file"},"Defining the HOCON Configuration File"),(0,o.kt)("p",null,"We can define our configuration inside ",(0,o.kt)("inlineCode",{parentName:"p"},"application.conf")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'# application.conf\n\nHttpServerConfig {\n  # The port to listen on.\n  port = 8080\n  port = ${?PORT}\n\n  # The hostname to listen on.\n  host = "localhost"\n  host = ${?HOST}\n\n  nThreads = 0\n  nThreads = ${?N_THREADS}\n}\n')),(0,o.kt)("p",null,"HOCON supports substitutions, so in the above configuration, we can use the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"?PORT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"?HOST")," to substitute the values. We also provide a default value for the port and host."),(0,o.kt)("h3",{id:"changing-the-default-configprovider-to-hocon-provider"},"Changing the Default ConfigProvider to HOCON Provider"),(0,o.kt)("p",null,"To be able to read the configuration data from the HOCON files, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"TypesafeConfigProvider")," to read the configuration data from the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.conf")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.config.typesafe.TypesafeConfigProvider\n\nRuntime.setConfigProvider(\n  TypesafeConfigProvider.fromResourcePath()\n)\n")),(0,o.kt)("p",null,"Then we should change the default ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigProvider")," to the new one by using ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime.setConfigProvider")," layer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.config.typesafe.TypesafeConfigProvider\nimport zio.http._\n\nimport java.net.InetSocketAddress\n\nobject MainApp extends ZIOAppDefault {\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] =\n    Runtime.setConfigProvider(\n      TypesafeConfigProvider\n        .fromResourcePath()\n    )\n\n  val myApp: Http[UserRepo with Ref[Int], Nothing, Request, Response] =\n    GreetingApp() ++ DownloadApp() ++ CounterApp() ++ UserApp()\n\n  val serverConfig: ZLayer[Any, Config.Error, ServerConfig] =\n    ZLayer\n      .fromZIO(\n        ZIO.config[HttpServerConfig](HttpServerConfig.config).map { c =>\n          ServerConfig(\n            address = new InetSocketAddress(c.port),\n            nThreads = c.nThreads\n          )\n        }\n      )\n\n  def run =\n    (Server\n      .install(myApp)\n      .flatMap(port =>\n        Console.printLine(s"Started server on port: $port")\n      ) *> ZIO.never)\n      .provide(\n        serverConfig,\n        Server.live,\n\n        // A layer responsible for storing the state of the `counterApp`\n        ZLayer.fromZIO(Ref.make(0)),\n\n        // To use the persistence layer, provide the `PersistentUserRepo.layer` layer instead\n        InmemoryUserRepo.layer\n      )\n}\n')),(0,o.kt)("h2",{id:"step-4-running-the-application"},"Step 4: Running The Application"),(0,o.kt)("p",null,"Now, if we run the application, it will start the server using the configuration defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.conf")," file with its default values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ sbt run\nServer started on port: 8080\n")),(0,o.kt)("p",null,"We can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PORT")," environment variables to override the default values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"$ HOST=localhost PORT=8081 sbt run\nServer started on port: 8081\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This tutorial covered how to use ZIO Config to read configuration data from HOCON files and configure our application. We haven't covered all the features of the ZIO Config library. To learn more about this library please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-config/"},"ZIO Config documentation"),"."),(0,o.kt)("p",null,"The complete working example of this tutorial is available on the ",(0,o.kt)("inlineCode",{parentName:"p"},"configurable-app")," branch of our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-quickstart-restful-webservice/tree/configurable-app"},"ZIO Quickstart: Building RESTful Web Service")," quickstart on GitHub."))}f.isMDXComponent=!0}}]);