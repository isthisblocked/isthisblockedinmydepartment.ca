(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"OrganizationPageQuery",function(){return u});a(50);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),o=a(151),l=a(150),c=a.n(l),d=a(156),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(d.a,{pageTitle:"Departments and Agencies"},i.a.createElement("div",{className:c.a.textLimit},i.a.createElement("h1",null,"Departments and Agencies"),i.a.createElement("p",null,"Select a department or agency below for details on which online services are available or blocked from within that organization."),i.a.createElement("ul",{className:c.a.listStandard},this.props.data.allOrganizationsCsv.edges.map(function(e,t){return i.a.createElement("li",{key:e.node.id},i.a.createElement(o.Link,{to:"/organization/"+e.node.acronym_en+"/"},e.node.name_en))})),i.a.createElement("p",{className:c.a.spaceAbove},"If your department or agency isn’t currently included in the list above, you can"," ",i.a.createElement(o.Link,{to:"/suggest"},"suggest adding it to the dataset"),".")))},t}(i.a.Component);t.default=m;var u="3100842562"},150:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",headerTitle:"sass-module--headerTitle--2Xi7P",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v",spaceAbove:"sass-module--spaceAbove--3-bzF",spaceBelow:"sass-module--spaceBelow--Ss43w",comparisonTitle:"sass-module--comparisonTitle--25jZy",sortLinks:"sass-module--sortLinks--1EZLz",activeSortLink:"sass-module--activeSortLink--2UrOD"}},151:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(149),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var d=a(152),m=a.n(d);a.d(t,"PageRenderer",function(){return m.a});var u=a(35);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},154:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(49),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";var n=a(153),r=a(0),s=a.n(r),i=a(4),o=a.n(i),l=a(157),c=a.n(l),d=a(151),m=a(150),u=a.n(m),p=function(e){var t=e.siteTitle;return s.a.createElement("div",{className:u.a.headerContainer},s.a.createElement("div",{className:u.a.container},s.a.createElement("div",{className:u.a.headerTitle},s.a.createElement(d.Link,{to:"/"},t))))},f=function(){return s.a.createElement("div",{className:u.a.footerContainer},s.a.createElement("div",{className:u.a.container},s.a.createElement("ul",{className:u.a.listInline},s.a.createElement("li",{className:u.a.listInlineItem},s.a.createElement(d.Link,{to:"/"},"Home")),s.a.createElement("li",{className:u.a.listInlineItem},s.a.createElement(d.Link,{to:"/organization"},"Departments")),s.a.createElement("li",{className:u.a.listInlineItem},s.a.createElement(d.Link,{to:"/service"},"Services"))),s.a.createElement("ul",{className:u.a.listInline},s.a.createElement("li",{className:u.a.listInlineItem},s.a.createElement(d.Link,{to:"/suggest"},"Suggest an update")),s.a.createElement("li",{className:u.a.listInlineItem},s.a.createElement(d.Link,{to:"/scoring"},"Scoring")),s.a.createElement("li",{className:u.a.listInlineItem},s.a.createElement(d.Link,{to:"/about"},"About this project")),s.a.createElement("li",{className:u.a.listInlineItem},s.a.createElement("a",{href:"https://github.com/isthisblocked/isthisblockedinmydepartment.ca",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")))))},g=(a(158),function(e){var t=e.children,a=e.pageTitle;return s.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of which online services are available or blocked by federal government departments in Canada."},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:u.a.container},t),s.a.createElement(f,null))},data:n})});g.propTypes={children:o.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-organization-js-c4263bc1f422d2f3b4f9.js.map