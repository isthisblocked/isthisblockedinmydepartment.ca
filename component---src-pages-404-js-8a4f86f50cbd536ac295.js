(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(154);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(147),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var u=a(150),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",headerTitle:"sass-module--headerTitle--2Xi7P",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v"}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},152:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(49),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";var n=a(151),r=a(0),s=a.n(r),i=a(4),o=a.n(i),l=a(155),c=a.n(l),u=a(148),d=a(149),m=a.n(d),p=function(e){var t=e.siteTitle;return s.a.createElement("div",{className:m.a.headerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("div",{className:m.a.headerTitle},s.a.createElement(u.Link,{to:"/"},t))))},f=function(){return s.a.createElement("div",{className:m.a.footerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("ul",{className:m.a.listInline},s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/suggest"},"Suggest an update")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/scoring"},"Scoring")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/about"},"About this project")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement("a",{href:"https://github.com/isthisblocked/isthisblockedinmydepartment.ca",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")))))},h=(a(156),function(e){var t=e.children,a=e.pageTitle;return s.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of online services blocked by federal government departments in Canada"},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:m.a.container},t),s.a.createElement(f,null))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-404-js-8a4f86f50cbd536ac295.js.map