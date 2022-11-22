"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[71977],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>f});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return a?t.createElement(m,o(o({ref:n},p),{},{components:a})):t.createElement(m,o({ref:n},p))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50193:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=a(87462),r=(a(67294),a(3905));const l={id:"folding",title:"Folding",sidebar_label:"3. Folding"},o=void 0,i={unversionedId:"reference/error-management/recovering/folding",id:"reference/error-management/recovering/folding",title:"Folding",description:"Scala's Option and Either data types have fold, which let us handle both failure and success at the same time. In a similar fashion, ZIO effects also have several methods that allow us to handle both failure and success.",source:"@site/docs/reference/error-management/recovering/folding.md",sourceDirName:"reference/error-management/recovering",slug:"/reference/error-management/recovering/folding",permalink:"/reference/error-management/recovering/folding",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/recovering/folding.md",tags:[],version:"current",frontMatter:{id:"folding",title:"Folding",sidebar_label:"3. Folding"},sidebar:"reference-sidebar",previous:{title:"2. Fallback",permalink:"/reference/error-management/recovering/fallback"},next:{title:"4. Retrying",permalink:"/reference/error-management/recovering/retrying"}},c={},s=[{value:"<code>ZIO#fold</code>/<code>ZIO#foldZIO</code>",id:"ziofoldziofoldzio",level:2},{value:"<code>ZIO#foldCause</code>/<code>ZIO#foldCauseZIO</code>",id:"ziofoldcauseziofoldcausezio",level:2},{value:"<code>ZIO#foldTraceZIO</code>",id:"ziofoldtracezio",level:2}],p={toc:s};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Scala's ",(0,r.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Either")," data types have ",(0,r.kt)("inlineCode",{parentName:"p"},"fold"),", which let us handle both failure and success at the same time. In a similar fashion, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effects also have several methods that allow us to handle both failure and success."),(0,r.kt)("h2",{id:"ziofoldziofoldzio"},(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO#fold"),"/",(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO#foldZIO")),(0,r.kt)("p",null,"The first fold method, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#fold"),", lets us non-effectfully handle both failure and success, by supplying a non-effectful handler for each case. The second fold method, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#foldZIO"),", lets us effectfully handle both failure and success, by supplying an effectful (but still pure) handler for each case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def fold[B](\n    failure: E => B,\n    success: A => B\n  ): ZIO[R, Nothing, B]\n\n  def foldZIO[R1 <: R, E2, B](\n    failure: E => ZIO[R1, E2, B],\n    success: A => ZIO[R1, E2, B]\n  ): ZIO[R1, E2, B]\n}\n")),(0,r.kt)("p",null,"Let's try an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nlazy val DefaultData: Array[Byte] = Array(0, 0)\n\nval primaryOrDefaultData: UIO[Array[Byte]] =\n  readFile("primary.data").fold(_ => DefaultData, data => data)\n')),(0,r.kt)("p",null,"We can ignore any failure and success values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval result: ZIO[Any, Nothing, Unit] =\n  ZIO\n    .fail("Uh oh!")         // ZIO[Any, String, Int]\n    .as(5)                  // ZIO[Any, String, Int]\n    .fold(_ => (), _ => ()) // ZIO[Any, Nothing, Unit]\n')),(0,r.kt)("p",null,"It is equivalent to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#ignore")," operator instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval result: ZIO[Any, Nothing, Unit] = ZIO.fail("Uh oh!").as(5).ignore\n')),(0,r.kt)("p",null,"Now let's try the effectful version of the fold operation. In this example, in case of failure on reading from the primary file, we will fallback to another effectful operation which will read data from the secondary file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val primaryOrSecondaryData: IO[IOException, Array[Byte]] =\n  readFile("primary.data").foldZIO(\n    failure = _    => readFile("secondary.data"),\n    success = data => ZIO.succeed(data)\n  )\n')),(0,r.kt)("p",null,"Nearly all error handling methods are defined in terms of ",(0,r.kt)("inlineCode",{parentName:"p"},"foldZIO"),", because it is both powerful and fast."),(0,r.kt)("p",null,"In the following example, ",(0,r.kt)("inlineCode",{parentName:"p"},"foldZIO")," is used to handle both failure and success of the ",(0,r.kt)("inlineCode",{parentName:"p"},"readUrls")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val urls: UIO[Content] =\n  readUrls("urls.json").foldZIO(\n    error   => ZIO.succeed(NoContent(error)),\n    success => fetchContent(success)\n  )\n')),(0,r.kt)("p",null,"It's important to note that both ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#fold")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#foldZIO")," operators cannot catch fiber interruptions. So the following application will crash due to ",(0,r.kt)("inlineCode",{parentName:"p"},"InterruptedException"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run = (ZIO.interrupt *> ZIO.fail("Uh oh!")).fold(_ => (), _ => ())\n}\n')),(0,r.kt)("p",null,"And here is the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-02-24T13:41:01.696273024Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.InterruptedException: Interrupted by thread "zio-fiber-"\n   at <empty>.MainApp.run(MainApp.scala:4)"\n')),(0,r.kt)("h2",{id:"ziofoldcauseziofoldcausezio"},(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO#foldCause"),"/",(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO#foldCauseZIO")),(0,r.kt)("p",null,"This cause version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fold")," operator is useful to access the full cause of the underlying fiber. So in case of failure, based on the exact cause, we can determine what to do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def foldCause[B](\n    failure: Cause[E] => B,\n    success: A => B\n  ): ZIO[R, Nothing, B]\n\n  def foldCauseZIO[R1 <: R, E2, B](\n    failure: Cause[E] => ZIO[R1, E2, B],\n    success: A => ZIO[R1, E2, B]\n  ): ZIO[R1, E2, B]\n}\n")),(0,r.kt)("p",null,"Among the fold operators, these are the most powerful combinators. They can recover from any error, even fiber interruptions."),(0,r.kt)("p",null,"In the following example, we are printing the proper message according to what cause occurred due to failure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval exceptionalEffect: ZIO[Any, Throwable, Unit] = ???\n\nval myApp: ZIO[Any, IOException, Unit] =\n  exceptionalEffect.foldCauseZIO(\n    failure = {\n      case Cause.Fail(value, _)        => Console.printLine(s"failure: $value")\n      case Cause.Die(value, _)         => Console.printLine(s"cause: $value")\n      case Cause.Interrupt(failure, _) => Console.printLine(s"${failure.threadName} interrupted!")\n      case _                           => Console.printLine("failed due to other causes")\n    },\n    success = succeed => Console.printLine(s"succeeded with $succeed value")\n  )\n')),(0,r.kt)("p",null,"When catching errors using this operator, if our cases were not exhaustive, we may receive a defect of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"scala.MatchError")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  val exceptionalEffect: ZIO[Any, Throwable, Unit] = ZIO.interrupt\n\n  val myApp: ZIO[Any, IOException, Unit] =\n    exceptionalEffect.foldCauseZIO(\n      failure = {\n        case Cause.Fail(value, _) => ZIO.debug(s"failure: $value")\n        case Cause.Die(value, _) => ZIO.debug(s"cause: ${value.toString}")\n        // case Cause.Interrupt(failure, _) => ZIO.debug(s"${failure.threadName} interrupted!")\n      },\n      success = succeed => ZIO.debug(s"succeeded with $succeed value")\n    )\n\n  def run = myApp\n}\n')),(0,r.kt)("p",null,"The output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-02-24T11:05:40.241436257Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" scala.MatchError: Interrupt(Runtime(2,1645700739),Trace(Runtime(2,1645700739),Chunk(<empty>.MainApp.exceptionalEffect(MainApp.scala:6),<empty>.MainApp.myApp(MainApp.scala:9)))) (of class zio.Cause$Interrupt)\n    at MainApp$.$anonfun$myApp$1(MainApp.scala:10)\n    at zio.ZIO$TracedCont$$anon$33.apply(ZIO.scala:6167)\n    at zio.ZIO$TracedCont$$anon$33.apply(ZIO.scala:6165)\n    at zio.internal.FiberContext.runUntil(FiberContext.scala:885)\n    at zio.internal.FiberContext.run(FiberContext.scala:115)\n    at zio.internal.ZScheduler$$anon$1.run(ZScheduler.scala:151)\n    at zio.internal.FiberContext.runUntil(FiberContext.scala:538)"\n')),(0,r.kt)("h2",{id:"ziofoldtracezio"},(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO#foldTraceZIO")),(0,r.kt)("p",null,"This version of fold, provide us the facility to access the trace info of the failure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def foldTraceZIO[R1 <: R, E2, B](\n    failure: ((E, Trace)) => ZIO[R1, E2, B],\n    success: A => ZIO[R1, E2, B]\n  )(implicit ev: CanFail[E]): ZIO[R1, E2, B]\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval result: ZIO[Any, Nothing, Int] =\n  validate(5).foldTraceZIO(\n    failure = {\n      case (_: NegativeAgeException, trace) =>\n        ZIO.succeed(0).debug(\n          "The entered age is negative\\n" +\n            s"trace info: ${trace.stackTrace.mkString("\\n")}"\n        )\n      case (_: IllegalAgeException, trace) =>\n        ZIO.succeed(0).debug(\n          "The entered age in not legal\\n" +\n            s"trace info: ${trace.stackTrace.mkString("\\n")}"\n        )\n    },\n    success = s => ZIO.succeed(s)\n  )\n')),(0,r.kt)("p",null,"Note that similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#fold")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#foldZIO")," this operator cannot recover from fiber interruptions."))}u.isMDXComponent=!0}}]);