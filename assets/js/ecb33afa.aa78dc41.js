"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[60301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"index",title:"ZPure"},r=void 0,l={unversionedId:"zio-prelude/zpure/index",id:"zio-prelude/zpure/index",title:"ZPure",description:"A ZPure[W, S1, S2, R, E, A] is a description of a computation that requires an environment R and an initial state S1 and either fails with an error of type E or succeeds with an updated state of type S2 and a value of type A, in either case also producing a log of type W.",source:"@site/docs/zio-prelude/zpure/index.md",sourceDirName:"zio-prelude/zpure",slug:"/zio-prelude/zpure/",permalink:"/zio-prelude/zpure/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/zpure/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"ZPure"},sidebar:"ecosystem-sidebar",previous:{title:"New Types",permalink:"/zio-prelude/newtypes/"},next:{title:"Resources",permalink:"/zio-prelude/resources"}},p={},s=[{value:"Basic Operations",id:"basic-operations",level:2},{value:"Working With Errors",id:"working-with-errors",level:2},{value:"Working With Context",id:"working-with-context",level:2},{value:"Working With State",id:"working-with-state",level:2},{value:"Working With Logging",id:"working-with-logging",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure[W, S1, S2, R, E, A]")," is a description of a computation that requires an environment ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," and an initial state ",(0,i.kt)("inlineCode",{parentName:"p"},"S1")," and either fails with an error of type ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," or succeeds with an updated state of type ",(0,i.kt)("inlineCode",{parentName:"p"},"S2")," and a value of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", in either case also producing a log of type ",(0,i.kt)("inlineCode",{parentName:"p"},"W"),"."),(0,i.kt)("p",null,"Conceptually, we can think of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," as just a function, though ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," is not actually implemented this way for reasons of efficiency and stack safety."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Chunk\n\ncase class ZPure[+W, -S1, +S2, -R, +E, +A](run: (R, S1) => (Chunk[W], Either[E, (S2, A)]))\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure"),' data type models four "capabilities" that a computation can have in addition to just producing a value of type ',(0,i.kt)("inlineCode",{parentName:"p"},"A"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Errors")," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZPure")," computation can fail with an error of type ",(0,i.kt)("inlineCode",{parentName:"li"},"E")," similar to an ",(0,i.kt)("inlineCode",{parentName:"li"},"Either"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Context")," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZPure")," computation can require some environment of type ",(0,i.kt)("inlineCode",{parentName:"li"},"R")," similar to a ",(0,i.kt)("inlineCode",{parentName:"li"},"Reader")," data type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"State")," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZPure")," computation can update a state ",(0,i.kt)("inlineCode",{parentName:"li"},"S1")," to a new state ",(0,i.kt)("inlineCode",{parentName:"li"},"S2")," similar to a ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," data type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Logging")," - A ",(0,i.kt)("inlineCode",{parentName:"li"},"ZPure")," computation can maintain a log of type ",(0,i.kt)("inlineCode",{parentName:"li"},"W")," similar to a ",(0,i.kt)("inlineCode",{parentName:"li"},"Writer")," data type.")),(0,i.kt)("p",null,"Previously, each of these capabilities required a separate data type, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," for modeling errors."),(0,i.kt)("p",null,"This was fine when we just needed one of these capabilities but it broke down when we wanted to describe computations that used more than one capability. How were we supposed to describe, for example, a computation that updated state and could also fail?"),(0,i.kt)("p",null,"The answer was to use other data types called ",(0,i.kt)("em",{parentName:"p"},"monad transformers"),' which "stacked" these capabilities on top of existing data types. So to get state and errors we would stack an ',(0,i.kt)("inlineCode",{parentName:"p"},"EitherT")," monad transformer on top of a ",(0,i.kt)("inlineCode",{parentName:"p"},"StateT")," monad transformer."),(0,i.kt)("p",null,"This approach has a number of problems."),(0,i.kt)("p",null,"First, it has terrible performance. Each of these monad transformers is its own data type so evaluating a single step in a monad transformer stack requires digging into multiple layers of data structures just to access a single value, doing something with it, and then rebuilding all the layers of that nested data structure all over again."),(0,i.kt)("p",null,'Second, monad transformers have very poor ergonomics. They are generally invariant so they have bad type inference and working with these nested structures creates many opportunities for errors, such as constructing the "stack" in the wrong order, that reduce developer productivity and make it harder to onboard new developers.'),(0,i.kt)("p",null,'Third, monad transformer stacks are actually not powerful enough to model what they are trying to describe. Each part of the "stack" only knows about itself and not the other parts of the stack so it is impossible to implement operators that require multiple capabilities.'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ZPure"),' addresses this problem by including all of these capabilities in one data type using the same technique of "effect rotation" pioneered in ZIO. This results in dramatically higher performance, improved ergonomics, and a much more powerful API.'),(0,i.kt)("h2",{id:"basic-operations"},"Basic Operations"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," data type exposes a very similar API to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, excluding operators that deal directly with IO or concurrency. So if you know how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," you should be very comfortable working with ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," as well."),(0,i.kt)("p",null,"Just like ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," is a description of a computation so the computation will not actually be executed until we run it."),(0,i.kt)("p",null,"If we are not embedding side effecting code in ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," this laziness will not be observable in the result of a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," computation but it can be important to keep in mind for performance. For example, if we are doing some expensive but not side effecting computation in the context of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," and using the result multiple times we want to only run the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," computation once instead of multiple times."),(0,i.kt)("p",null,"The operators that execute a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," computation are all variants of ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," to emphasize that when we call them we are actually running the computation described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," value."),(0,i.kt)("p",null,"Also like ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," is stack safe, so we can write recursive programs in terms of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," without worrying about stack overflow errors."),(0,i.kt)("p",null,"The main difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," is that we do not want to embed arbitrary side effecting code in ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," supports a specific set of capabilities but if we have arbitrary effects we are better off using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),", which has the power to manage these effects and also more clearly signals our intent."),(0,i.kt)("p",null,"We can create a computation that succeeds with an existing value using the ",(0,i.kt)("inlineCode",{parentName:"p"},"succeed")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.fx.ZPure\n\nval one: ZPure[Nothing, Unit, Unit, Any, Nothing, Int] =\n  ZPure.succeed(1)\n// one: ZPure[Nothing, Unit, Unit, Any, Nothing, Int] = Succeed(value = 1)\n")),(0,i.kt)("p",null,"Note that the log type ",(0,i.kt)("inlineCode",{parentName:"p"},"W")," here is nothing, indicating that we are not logging anything right now. The ",(0,i.kt)("inlineCode",{parentName:"p"},"S1"),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"S2")," types are ",(0,i.kt)("inlineCode",{parentName:"p"},"Unit")," because we are not using ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," in this computation."),(0,i.kt)("p",null,"The environment type is ",(0,i.kt)("inlineCode",{parentName:"p"},"Any"),", indicating that this computation does not require any environment to be run. And the error type is ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," because this computation cannot fail."),(0,i.kt)("p",null,"If we find ourselves using the same type parameters over and over it can be helpful to define a type alias to avoid repeating ourselves. There are also several useful type aliases for ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," defined directly in ZIO Prelude."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"type State[S, +A] = zio.prelude.fx.ZPure[Nothing, S, S, Any, Nothing, A]\ntype Reader[-R, +A] = zio.prelude.fx.ZPure[Nothing, Unit, Unit, R, Nothing, A]\ntype Writer[+W, +A] = zio.prelude.fx.ZPure[W, Unit, Unit, Any, Nothing, A]\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," type alias specializes the environment type to ",(0,i.kt)("inlineCode",{parentName:"p"},"Any")," and the error and log types to ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," and just has a single state type 'A'. It is analogous to a function ",(0,i.kt)("inlineCode",{parentName:"p"},"S => (S, A)"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Reader")," type alias has an environment type but specializes the log and error types to ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," and the state types to ",(0,i.kt)("inlineCode",{parentName:"p"},"Unit"),". It is analogous to a function ",(0,i.kt)("inlineCode",{parentName:"p"},"R => A"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Writer")," type alias has a log type but specializes the environment type to ",(0,i.kt)("inlineCode",{parentName:"p"},"Any"),", the error type to ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing"),", and the state types to ",(0,i.kt)("inlineCode",{parentName:"p"},"Unit"),". It is analogous to a function ",(0,i.kt)("inlineCode",{parentName:"p"},"() => (W, A)"),"."),(0,i.kt)("p",null,"There are also versions of each of these type aliases that support failure, ",(0,i.kt)("inlineCode",{parentName:"p"},"EState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EReader"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"EWriter"),". Using these type aliases can simplify your type signatures and lead to better type inference in some cases. So if you are really only working with one or two of the capabilities of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," it is definitely worth using these type aliases."),(0,i.kt)("p",null,"However, for now we will continue to use the full ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," type signature."),(0,i.kt)("p",null,"We can transform the successful value of a computation using the ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val two: ZPure[Nothing, Unit, Unit, Any, Nothing, Int] =\n  one.map(_ + 1)\n// two: ZPure[Nothing, Unit, Unit, Any, Nothing, Int] = FlatMap(\n//   value = Succeed(value = 1),\n//   continue = zio.prelude.fx.ZPure$$Lambda$18019/0x00000008028a0f70@2b24fe90\n// )\n")),(0,i.kt)("p",null,"We can combine the values of two computations with the ",(0,i.kt)("inlineCode",{parentName:"p"},"zipWith")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val three: ZPure[Nothing, Unit, Unit, Any, Nothing, Int] =\n  one.zipWith(two)(_ + _)\n// three: ZPure[Nothing, Unit, Unit, Any, Nothing, Int] = FlatMap(\n//   value = Succeed(value = 1),\n//   continue = zio.prelude.fx.ZPure$$Lambda$18027/0x00000008029e8000@7e528a0c\n// )\n")),(0,i.kt)("p",null,"We can also chain computations using the ",(0,i.kt)("inlineCode",{parentName:"p"},"flatMap")," operator and Scala's for comprehension syntax."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val six: ZPure[Nothing, Unit, Unit, Any, Nothing, Int] =\n  for {\n    x <- one\n    y <- two\n    z <- three\n  } yield x + y + z\n// six: ZPure[Nothing, Unit, Unit, Any, Nothing, Int] = FlatMap(\n//   value = Succeed(value = 1),\n//   continue = <function1>\n// )\n")),(0,i.kt)("p",null,"The easiest way to run a computation is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," method. It requires us to have already provided any required environment and initial state and handled our errors and just produces the final value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val value: Int =\n  three.run\n// value: Int = 3\n")),(0,i.kt)("h2",{id:"working-with-errors"},"Working With Errors"),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," also has an error type the operators for working with errors are quite similar to the ones on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,i.kt)("p",null,"We can create a computation that fails with an error using the ",(0,i.kt)("inlineCode",{parentName:"p"},"fail")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'val fail: ZPure[Nothing, Unit, Unit, Any, String, Nothing] =\n  ZPure.fail("fail")\n// fail: ZPure[Nothing, Unit, Unit, Any, String, Nothing] = Fail(\n//   error = Single(value = "fail")\n// )\n')),(0,i.kt)("p",null,"Notice how now the error type is ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", indicating that this computation can fail with a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," error. In this case the success type is ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing")," since we actually know that this computation can never succeed."),(0,i.kt)("p",null,"If we are working with code that can throw exceptions we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"attempt")," operator of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," to safely import that code into our computation, catching any non-fatal exceptions and translating them into failure values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def parseIntThrowable(s: String): ZPure[Nothing, Unit, Unit, Any, Throwable, Int] =\n  ZPure.attempt(s.toInt)\n")),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mapError")," operator to transform the error type of a computation, for example to map it to a common error type we are using in other parts of our computation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def parseInt(s: String): ZPure[Nothing, Unit, Unit, Any, String, Int] =\n  parseIntThrowable(s).mapError(_.getMessage)\n")),(0,i.kt)("p",null,"We can recover from errors by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"catchAll")," operator, which allows us to recover from the failure using a new computation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def parseIntOrDefault(s: String): ZPure[Nothing, Unit, Unit, Any, Nothing, Int] =\n  parseInt(s).catchAll(_ => ZPure.succeed(0))\n")),(0,i.kt)("p",null,"Now the error type is ",(0,i.kt)("inlineCode",{parentName:"p"},"Nothing"),", indicating that we have handled all our errors."),(0,i.kt)("p",null,"There are many other error handling operators defined on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"catchSome")," operator allows us to only recover from certain errors."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fold")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"foldM")," operators allow us to handle both the failure and success cases at the same time. And the ",(0,i.kt)("inlineCode",{parentName:"p"},"orElse")," operator allows us to specify a fallback computation that will be run if the original computation fails."),(0,i.kt)("p",null,"One other concept from ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," that carries over to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," is the ability to accumulate multiple errors."),(0,i.kt)("p",null,"Normally when we use operators like ",(0,i.kt)("inlineCode",{parentName:"p"},"zip")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"flatMap")," if an error occurs we will not go on to evaluate further parts of the computation until we get to an error handler that can potentially recover from it. This is typically what we want because if we have already failed there is no point in doing more work."),(0,i.kt)("p",null,"However, ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," also allows us to accumulate errors when we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"zipWithPar"),' operator . This operator does not do actual parallelism, but is "parallel" in the sense that it will run both computations even if the first one fails and return any failures that occurred.'),(0,i.kt)("p",null,"You can use this to obtain behavior similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," data type in ZIO Prelude. All of the errors will be captured in a ",(0,i.kt)("inlineCode",{parentName:"p"},"Cause")," data structure similar to the one from ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,i.kt)("p",null,"For example, we could model validating some data using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'case class Person(name: String, age: Int)\n\ndef validateName(name: String): ZPure[Nothing, Unit, Unit, Any, String, String] =\n  if (name.isEmpty) ZPure.fail("name was empty")\n  else ZPure.succeed(name)\n\ndef validateAge(age: Int): ZPure[Nothing, Unit, Unit, Any, String, Int] =\n  if (age < 0) ZPure.fail(s"Age $age was less than zero")\n  else ZPure.succeed(age)\n\ndef validatePerson(name: String, age: Int): ZPure[Nothing, Unit, Unit, Any, String, Person] =\n  validateName(name).zipWithPar(validateAge(age))(Person)\n')),(0,i.kt)("p",null,"To expose the full cause of failure we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"sandbox")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude.fx.Cause\n\ndef validatePersonCause(name: String, age: Int): ZPure[Nothing, Unit, Unit, Any, Cause[String], Person] =\n  validatePerson(name, age).sandbox\n")),(0,i.kt)("p",null,"We can now see all the failures that occurred and handle them using our normal error handling operators. If we want to submerge the full cause again and just see the error type we can undo this with the ",(0,i.kt)("inlineCode",{parentName:"p"},"unsandbox")," operator."),(0,i.kt)("p",null,"Once again, a variety of other operators for dealing with the full cause of failure are available on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," analogous to the ones on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," but we will not cover them all here. With ",(0,i.kt)("inlineCode",{parentName:"p"},"sandbox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unsandbox")," you should be able to handle any problems involving working with the full cause of failure and you can always look up more specialized operators later."),(0,i.kt)("p",null,"Of course, if all we want to do is validate data the ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," type is more specialized than this and is what we should use. But it is very nice to be able to accumulate errors when you need to when we are already working in the context of a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," computation."),(0,i.kt)("h2",{id:"working-with-context"},"Working With Context"),(0,i.kt)("p",null,"The environment type ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," is also analogous to the environment type of ZIO."),(0,i.kt)("p",null,"The main difference is that we tend to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," to describe a particular computation in our application rather than as the basis for our entire application architecture. As a result, services tend to be less commonly used in the environment and often the environment just consists of some data."),(0,i.kt)("p",null,"We also do not use layers to construct the environment. Layers are inherently effectual and we do not want to perform arbitrary effects as part of a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," computation."),(0,i.kt)("p",null,"As an example of how we might use the environment type in a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," computation, we can imagine that our computation describes some logic for working with customer accounts. To perform its logic our computation needs access to various values such as the interest rate to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class AccountEnvironment(interestRate: Double)\n")),(0,i.kt)("p",null,"We can work with the environment using the same operators we use for ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),", with the caveat described above that we use the more generic environment operators instead of the ones specialized for the module pattern."),(0,i.kt)("p",null,"We access a service in the environment using the ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," operator, so if we wanted to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountEnvironment")," service we could do it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val accountEnvironment: ZPure[Nothing, Unit, Unit, AccountEnvironment, Nothing, AccountEnvironment] =\n  ZPure.service\n// accountEnvironment: ZPure[Nothing, Unit, Unit, AccountEnvironment, Nothing, AccountEnvironment] = Environment(\n//   access = zio.prelude.fx.ZPure$ServiceWithPurePartiallyApplied$$$Lambda$18240/0x00000008029c5000@488730b7\n// )\n")),(0,i.kt)("p",null,"This computation does not use logging or state and cannot fail, but it now depends on an ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountEnvironment")," and just returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountEnvironment"),". Since this computation now succeeds with an ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountEnvironment")," we can use all of our normal operators for transforming success values like ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"flatMap")," to work with it."),(0,i.kt)("p",null,"If we just want to do one thing with the environment like get the interest rate we can do this slightly more concisely with the ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceWith")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val interestRate: ZPure[Nothing, Unit, Unit, AccountEnvironment, Nothing, Double] =\n  ZPure.serviceWith(_.interestRate)\n// interestRate: ZPure[Nothing, Unit, Unit, AccountEnvironment, Nothing, Double] = Environment(\n//   access = zio.prelude.fx.ZPure$ServiceWithPurePartiallyApplied$$$Lambda$18240/0x00000008029c5000@3ea56b6a\n// )\n")),(0,i.kt)("p",null,"There is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceWithPure")," variant for when we want to perform another computation based on the value from the environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def computeSimpleInterest(balance: Double, days: Int, interestRate: Double): ZPure[Nothing, Unit, Unit, Any, Nothing, Double] =\n  ZPure.succeed(balance * days / 365 * interestRate)\n\ndef accruedInterest(balance: Double, days: Int): ZPure[Nothing, Unit, Unit, AccountEnvironment, Nothing, Double] =\n  ZPure.serviceWithPure(r => computeSimpleInterest(balance, days, r.interestRate))\n")),(0,i.kt)("p",null,"To run a computation we need to provide it with its required environment, which we can do with the ",(0,i.kt)("inlineCode",{parentName:"p"},"provide")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.ZEnvironment\n\nval interestComputation: ZPure[Nothing, Unit, Unit, Any, Nothing, Double] =\n  accruedInterest(100000, 30).provideEnvironment(ZEnvironment(AccountEnvironment(0.05)))\n// interestComputation: ZPure[Nothing, Unit, Unit, Any, Nothing, Double] = Provide(\n//   r = ZEnvironment(MdocSession::MdocApp0::AccountEnvironment -> AccountEnvironment(0.05)),\n//   continue = Environment(\n//     access = zio.prelude.fx.ZPure$ServiceWithPurePartiallyApplied$$$Lambda$18240/0x00000008029c5000@246a5ff8\n//   )\n// )\n")),(0,i.kt)("p",null,"Once we have provided our application with our required environment we are ready ro run it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val interestDue: Double =\n  interestComputation.run\n// interestDue: Double = 410.958904109589\n")),(0,i.kt)("h2",{id:"working-with-state"},"Working With State"),(0,i.kt)("p",null,"The state type described by ",(0,i.kt)("inlineCode",{parentName:"p"},"S1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"S2")," is the first capability provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," that is not directly analogous to ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," we manage state using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ref")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FiberRef")," data types so we do not need these additional type parameters. In contrast, in ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," we want to avoid arbitrary side effects so we instead model state as a function that takes the old state and returns the new state using the ",(0,i.kt)("inlineCode",{parentName:"p"},"S1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"S2")," type parameters."),(0,i.kt)("p",null,"In practice in most cases ",(0,i.kt)("inlineCode",{parentName:"p"},"S1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"S2")," will be the same and we will be describing a computation that takes some state and just returns an updated value of the same state type. However, in some cases it can be useful to model the initial and updated state separately, for example to describe a transition from a ",(0,i.kt)("inlineCode",{parentName:"p"},"Closed")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Open")," state in a type safe way."),(0,i.kt)("p",null,"To motivate our example here let's define an ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountState")," type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class AccountState(balance: Int, open: Boolean)\n")),(0,i.kt)("p",null,"We will also define a domain specific error type which we will use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait AccountError\n\ncase object InsufficientFunds extends AccountError\n")),(0,i.kt)("p",null,"The most basic operators for working with state are ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"set"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," operator retrieves the initial state and the ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," operator sets the updated state to the specified value."),(0,i.kt)("p",null,"Let's use these operators to describe a computation that withdraws funds from the account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def withdraw(amount: Int): ZPure[Nothing, AccountState, AccountState, Any, AccountError, Unit] =\n  for {\n    state <- ZPure.get[AccountState]\n    _     <- if (amount > state.balance) ZPure.fail(InsufficientFunds)\n             else ZPure.set(AccountState(state.balance - amount, state.open))\n  } yield ()\n")),(0,i.kt)("p",null,"This example combines a couple of the features we have talked about so far."),(0,i.kt)("p",null,"First, we are using a for comprehension to chain together multiple computations"),(0,i.kt)("p",null,"Second, we are using both the error type and the state type here. If the customer has insufficient funds we fail immediately, otherwise we update the state."),(0,i.kt)("p",null,"One important thing to note here is that since ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," computations are never concurrent we don't need to worry about conflicting modifications to the state."),(0,i.kt)("p",null,"For example, in the context of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," code analogous to the above would not be safe because the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," would not be performed atomically so we would need to do the entire transaction in a single ",(0,i.kt)("inlineCode",{parentName:"p"},"modify")," operation, returning a value indicating whether there were sufficient funds. In ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," we don't have to do any of that so our code can be simpler."),(0,i.kt)("p",null,"There are also ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"modify")," operators on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure"),". So for example we could factor out the logic of updating the account balance in the ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw")," method like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def decrementBalance(amount: Int): ZPure[Nothing, AccountState, AccountState, Any, Nothing, Unit] =\n  ZPure.update(state => AccountState(state.balance - amount, state.open))\n")),(0,i.kt)("p",null,"If we are working with state then to actually run our computation we need to provide it with an initial state. The easiest way to do this is with the ",(0,i.kt)("inlineCode",{parentName:"p"},"provideState")," operator, analogous to how we provide the environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val withdrawalComputation: ZPure[Nothing, Any, AccountState, Any, AccountError, Unit] =\n  withdraw(10).provideState(AccountState(100, true))\n// withdrawalComputation: ZPure[Nothing, Any, AccountState, Any, AccountError, Unit] = FlatMap(\n//   value = Modify(\n//     run0 = zio.prelude.fx.ZPure$$$Lambda$18252/0x00000008021453c8@a02c1f4\n//   ),\n//   continue = zio.prelude.fx.ZPure$$Lambda$18250/0x00000008028c9950@1f1fd46a\n// )\n")),(0,i.kt)("p",null,"We will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"runEither")," operator, which is a variant of ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," that allows the computation to fail and just converts the failure to the left side of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Either"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"runEither")," operators just return the final value, so let's use the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," operator to get the final state before we run our computation since we only care about the final state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"moc",moc:!0},"val updatedAccountState: Either[AccountError, AccountState] =\n  (withdrawalComputation *> ZPure.get).runEither\n")),(0,i.kt)("h2",{id:"working-with-logging"},"Working With Logging"),(0,i.kt)("p",null,"The final capability provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," is logging."),(0,i.kt)("p",null,"We can add to the log with the ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," operator on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," companion object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def withdrawLog(amount: Int): ZPure[String, AccountState, AccountState, Any, AccountError, Unit] =\n  ZPure.log("Attempting to withdraw") *> withdraw(amount) <* ZPure.log(s"Withdrew $amount")\n')),(0,i.kt)("p",null,"We can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," operator on the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," trait to log something immediately after a computation has successfully completed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def withdrawLog(amount: Int): ZPure[String, AccountState, AccountState, Any, AccountError, Unit] =\n  withdraw(amount).log(s"Withdrew $amount")\n')),(0,i.kt)("p",null,"The log is maintained until our computation is done."),(0,i.kt)("p",null,"This time we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"runAll")," operator to run our computation. ",(0,i.kt)("inlineCode",{parentName:"p"},"runAll")," is the most general way of running a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," computation and returns the log as well as either the failure or the success."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.Chunk\n\nval withdrawalComputationLog: ZPure[String, AccountState, AccountState, Any, AccountError, Unit] =\n  withdrawLog(10)\n// withdrawalComputationLog: ZPure[String, AccountState, AccountState, Any, AccountError, Unit] = FlatMap(\n//   value = FlatMap(\n//     value = Modify(\n//       run0 = zio.prelude.fx.ZPure$$$Lambda$18251/0x0000000802145000@1e74b709\n//     ),\n//     continue = <function1>\n//   ),\n//   continue = zio.prelude.fx.ZPure$$Lambda$18253/0x0000000802145798@6817bea0\n// )\n\nval log: Chunk[String] =\n  withdrawalComputationLog.runAll(AccountState(100, true))._1\n// log: Chunk[String] = IndexedSeq("Withdrew 10")\n')))}d.isMDXComponent=!0}}]);