"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[42006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={id:"index",title:"Introduction"},r=void 0,s={unversionedId:"functionalabstractions/concretetypes/index",id:"functionalabstractions/concretetypes/index",title:"Introduction",description:"ZIO Prelude features a set of fundamental functional abstractions for working with concrete data types.",source:"@site/node_modules/@zio.dev/zio-prelude/functionalabstractions/concretetypes/index.md",sourceDirName:"functionalabstractions/concretetypes",slug:"/functionalabstractions/concretetypes/",permalink:"/zio-prelude/functionalabstractions/concretetypes/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/zio-prelude/functionalabstractions/"},next:{title:"Associative",permalink:"/zio-prelude/functionalabstractions/concretetypes/associative"}},l={},c=[{value:"Properties Of Concrete Types",id:"properties-of-concrete-types",level:2},{value:"Equal",id:"equal",level:3},{value:"Ord",id:"ord",level:3},{value:"Hash",id:"hash",level:3},{value:"Debug",id:"debug",level:3},{value:"Combining Concrete Types",id:"combining-concrete-types",level:2},{value:"Associative",id:"associative",level:3},{value:"Commutative",id:"commutative",level:3},{value:"Identity",id:"identity",level:3},{value:"Inverse",id:"inverse",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO Prelude features a set of fundamental functional abstractions for working with concrete data types."),(0,i.kt)("p",null,"These abstractions fall into two categories."),(0,i.kt)("h2",{id:"properties-of-concrete-types"},"Properties Of Concrete Types"),(0,i.kt)("p",null,"The first set of abstractions describe different properties that values of a data type may have. For example, we may be able to compare them for equality, hash them, or order them."),(0,i.kt)("p",null,"All of these properties can be thought of as functions ",(0,i.kt)("inlineCode",{parentName:"p"},"A => ???")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"(A, A) => ???"),". They give us a way of taking one or more values of a data type and converting them into some other data type, whether that is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean")," indicating whether two values are equal or an ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," that is the result of hashing a single value."),(0,i.kt)("p",null,"These properties are often already described in the Scala standard library in some way, but the abstractions in ZIO Prelude give us the tools to define them in ways that are more type safe, extensible, and compositional."),(0,i.kt)("p",null,"For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Equal")," type class prevents us from doing equality checks on unrelated types or types that do not have a meaningful definition of equality, which can be a source of bugs when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," operator from the Scala standard library. We can also define these properties for data types that we do not control, for example providing a custom way of hashing a data type implemented by someone else."),(0,i.kt)("h3",{id:"equal"},"Equal"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Equal")," abstraction describes a type that can be compared for equality. Its fundamental representation is as a function ",(0,i.kt)("inlineCode",{parentName:"p"},"(A, A) => Boolean"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Equal")," abstraction allows us to define what it means for two instances of a type to be equal, avoiding pitfalls in Scala such as reference equality for arrays. It also lets us avoid bugs caused by accidentally comparing two unrelated types or checking equality for types such as functions that do not have well defined notions of equality."),(0,i.kt)("h3",{id:"ord"},"Ord"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Ord")," abstraction builds on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Equal")," abstraction and describes a type that has a total ordering. Its fundamental representation is as a function ",(0,i.kt)("inlineCode",{parentName:"p"},"(A, A) => Ordering"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"Ordering")," can either be ",(0,i.kt)("inlineCode",{parentName:"p"},"LessThan"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EqualTo")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"GreaterThan"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Ord")," abstraction serves much the same purpose as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ordering")," type class from the Scala standard library, but it has improved type inference due to its use of variance. It also integrates with the other functional abstractions in ZIO Prelude, so for example defining an ordering for a type also defines a way of comparing instances of that type for equality that is by definition consistent with the ordering."),(0,i.kt)("h3",{id:"hash"},"Hash"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Hash")," abstraction builds on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Equal")," abstraction in a different way, describing a type that can be hashed. Its fundamental representation is as a function ",(0,i.kt)("inlineCode",{parentName:"p"},"A => Int"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Hash")," abstraction allows us to define our own way of hashing data types instead of being forced to use the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"hashCode")," for existing data types. It also ensures that the definition of the hash is consistent with the definition of equality, another common source of bugs."),(0,i.kt)("h3",{id:"debug"},"Debug"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Debug")," abstraction describes a type that can be rendered for debugging purposes. Its fundamental representation is as a function ",(0,i.kt)("inlineCode",{parentName:"p"},"A => Repr"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," is a structured representation of the value that supports rendering in various formats."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Debug")," abstraction allows us to define how a data type should be rendered, for example rendering an ",(0,i.kt)("inlineCode",{parentName:"p"},"Array")," to display its values rather than just its memory location. The more structured representation also allows rendering in different formats, for example including fully qualified names in the rendering of the data type so the rendering is itself valid Scala code."),(0,i.kt)("h2",{id:"combining-concrete-types"},"Combining Concrete Types"),(0,i.kt)("p",null,"The second set of abstractions describe different ways of combining two values of a given type. These can all be thought of as functions ",(0,i.kt)("inlineCode",{parentName:"p"},"(A, A) => A"),"."),(0,i.kt)("p",null,"Combining is quite fundamental because it is how we build more complex structures from simpler ones."),(0,i.kt)("p",null,"Generally unary operators are not very interesting because they don't add additional structure, they just modify existing structure."),(0,i.kt)("p",null,"In contrast, given the ability to combine two values of a given type we can create a new value of that type with richer structure. And if we can do that once we can do it again and again after that, creating values with arbitrarily complex structure."),(0,i.kt)("p",null,"The abstractions in ZIO Prelude for describing combining values are each based on fundamental algebraic properties that the combining operation can have."),(0,i.kt)("h3",{id:"associative"},"Associative"),(0,i.kt)("p",null,"The most basic such abstraction is ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative"),", which describes a combining operation that is associative."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"(a <> b) <> c === a <> (b <> c)\n")),(0,i.kt)("p",null,"This essentially means that if we are combining three values then the order of operations doesn't matter. We can combine ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," and then combine the result with ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," or we can combine ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," and then combine ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," with the result."),(0,i.kt)("p",null,"This is quite an important property for being able to build more complex structures from simpler ones. Otherwise the result of sequentially building more complex structures from simpler ones is not well defined because it depends on the order of operations and there are an exponentially increasing number of ways we could order these operations as we combine more and more values."),(0,i.kt)("p",null,"There are also an extremely large number of data types that can be combined using associative operations."),(0,i.kt)("p",null,"For example integers can be combined associatively using addition and multiplication, among other operations. String concatenation is also associative, as is concatenation of lists of any concrete type."),(0,i.kt)("p",null,"For these reasons the ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," abstraction forms the root of the set of abstractions for describing ways to combine concrete types in ZIO Prelude."),(0,i.kt)("h3",{id:"commutative"},"Commutative"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Commutative")," abstraction builds on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," abstraction by describing a combining operation that is not only associative but also commutative."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"a <> b === b <> a\n")),(0,i.kt)("p",null,"This means that not only does the order of operations not matter, but the order in which we combine the values also does not matter."),(0,i.kt)("p",null,"Commutativity is a powerful property that gives us additional ability to reason about our code. For instance, if the values we are combining are in an arbitrary order, say because they are being produced asynchronously by multiple concurrent processes, then commutativity guarantees that we will get the same result no matter what order we combine them in."),(0,i.kt)("p",null,"Commutativity is a stronger property than associativity but that also means there are fewer ways of combining values that are commutative than there are ways of combining that are associative. For example, integer addition and multiplication are commutative but string concatenation is not."),(0,i.kt)("h3",{id:"identity"},"Identity"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity")," abstraction builds on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Associative")," abstraction in a different way. It describes a combining operation that is not only associative but also has an identity element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"a <> identity === a\nidentity <> a === a\n")),(0,i.kt)("p",null,'This identity element is a "neutral value" that can be combined with any other value an unlimited number of times with the combining function and does not change the other value.'),(0,i.kt)("p",null,"For example ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," is an identity element with respect to addition, ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," is an identity element with respect to multiplication, the empty string is an identity element with respect to string concatenation, and the empty list is an identity element with respect to list concatenation."),(0,i.kt)("p",null,'An identity element gives us a "starting point" for combining values that we know will never change the value. It also tells us when we can safely eliminate a value from the combining operation because we know the value will never change the result.'),(0,i.kt)("h3",{id:"inverse"},"Inverse"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Inverse")," abstraction further builds on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity")," abstraction with the concept of an inverse to the combining operation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"inverse(a, a) === identity\n")),(0,i.kt)("p",null,"Whereas the combining operation adds structure the inverse operation takes it away, so that combining any value with itself using the inverse operation removes all structure and just returns the identity element."),(0,i.kt)("p",null,"Defining the inverse as a binary operator rather than a unary operator like this allows us to define an inverse operation even for types that do not have inverse values. "),(0,i.kt)("p",null,"For example subtraction would be an inverse operation with addition being the combining operation and zero being the identity element. And we can define it on the natural numbers as well as the integers."))}u.isMDXComponent=!0}}]);