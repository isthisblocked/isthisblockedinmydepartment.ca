(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(147),i=a(148),l=a.n(i),o=a(153);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:l.a.textLimit},r.a.createElement("h1",null,"Suggest an update"),r.a.createElement("p",null,"Data on this website is crowdsourced from public servants across the federal government. Suggested updates are always welcome, and help to keep the website up to date as departments make firewall and technical changes."),r.a.createElement("p",null,"Suggestions can be submitted anonymously using the following Google Forms. If Google Forms is unavailable on your computer, then you can open these links using your smartphone."),r.a.createElement("ul",{className:l.a.listStandard},r.a.createElement("li",null,r.a.createElement("b",null,"Department-wide updates"),r.a.createElement("br",null),"To suggest changes for more than one service within a specific department"),r.a.createElement("li",null,r.a.createElement("b",null,"Specific service updates"),r.a.createElement("br",null),"To quickly suggest changes for an individual service within a department"),r.a.createElement("li",null,r.a.createElement("b",null,"Add a new service"),r.a.createElement("br",null),"To suggest a new online service (collaboration tools, messaging platforms, etc.) to add to the dataset"),r.a.createElement("li",null,r.a.createElement("b",null,"Add a new department"),r.a.createElement("br",null),"To suggest a federal department or agency to add to the dataset")),r.a.createElement("p",null,"Thanks for your contributions to isthisblockedinmydepartment.ca! "),r.a.createElement("p",null,r.a.createElement(s.Link,{to:"/"},"Back to the homepage"))))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(146),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var u=a(149),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),g=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v"}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},151:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(49),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){"use strict";var n=a(150),r=a(0),s=a.n(r),i=a(4),l=a.n(i),o=a(154),c=a.n(o),u=a(147),d=a(148),m=a.n(d),p=function(e){var t=e.siteTitle;return s.a.createElement("div",{className:m.a.headerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(u.Link,{to:"/"},t))))},g=function(){return s.a.createElement("div",{className:m.a.footerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("ul",{className:m.a.listInline},s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/suggest"},"Suggest an update")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/scoring"},"Scoring")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/"},"About this project")))))},f=(a(155),function(e){var t=e.children,a=e.pageTitle;return s.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of online services blocked by federal government departments in Canada"},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:m.a.container},t),s.a.createElement(g,null))},data:n})});f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-suggest-js-2107ced89f9e11da58e3.js.map