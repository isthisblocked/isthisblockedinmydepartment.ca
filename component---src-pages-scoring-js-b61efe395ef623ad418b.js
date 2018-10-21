(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(147),i=a(148),l=a.n(i),o=a(153);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:l.a.textLimit},r.a.createElement("h1",null,"Scoring"),r.a.createElement("p",null,"The scores listed on this website for each department are designed to highlight departments that have opened up access to online services. Increased access to these tools helps public servants become more effective, collaborative, and connected in the modern digital world."),r.a.createElement("p",null,"Scores are calculated as follows:"),r.a.createElement("ul",{className:l.a.listStandard},r.a.createElement("li",null,r.a.createElement("b",null,"3 points")," for each service that is open by default"),r.a.createElement("li",null,r.a.createElement("b",null,"1 point")," for each service that is restricted to certain staff or only available on request"),r.a.createElement("li",null,r.a.createElement("b",null,"0 points")," for services whose status is unknown"),r.a.createElement("li",null,r.a.createElement("b",null,"-2 points")," for each service that is blocked and not available on request")),r.a.createElement("p",null,"If a service is listed with an incorrect status for your department, please ",r.a.createElement(s.Link,{to:"/suggest"},"suggest an update"),". Suggestions are anonymous and help to improve the quality of the underlying dataset over time."),r.a.createElement("p",null,r.a.createElement(s.Link,{to:"/"},"Back to the homepage"))))}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(146),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var u=a(149),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v"}},149:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},151:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(49),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){"use strict";var n=a(150),r=a(0),s=a.n(r),i=a(4),l=a.n(i),o=a(154),c=a.n(o),u=a(147),d=a(148),m=a.n(d),p=function(e){var t=e.siteTitle;return s.a.createElement("div",{className:m.a.headerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(u.Link,{to:"/"},t))))},f=function(){return s.a.createElement("div",{className:m.a.footerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("ul",{className:m.a.listInline},s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/suggest"},"Suggest an update")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/scoring"},"Scoring")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/"},"About this project")))))},h=(a(155),function(e){var t=e.children,a=e.pageTitle;return s.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of online services blocked by federal government departments in Canada"},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:m.a.container},t),s.a.createElement(f,null))},data:n})});h.propTypes={children:l.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-scoring-js-b61efe395ef623ad418b.js.map