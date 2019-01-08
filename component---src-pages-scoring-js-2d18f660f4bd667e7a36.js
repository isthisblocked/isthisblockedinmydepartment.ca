(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"ScoringPageQuery",function(){return d});var n=a(7),r=a.n(n),s=a(0),i=a.n(s),l=a(152),o=a(151),c=a.n(o),u=a(156),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(u.a,{pageTitle:"Scoring"},i.a.createElement("div",{className:c.a.textLimit},i.a.createElement("h1",null,"Scoring"),i.a.createElement("p",null,"The scores listed on this website for each department are designed to highlight departments that have opened up access to online services. Increased access to these tools helps public servants become more effective, collaborative, and connected in the modern digital world."),i.a.createElement("p",null,"Scores are calculated as follows:"),i.a.createElement("ul",{className:c.a.listStandard},i.a.createElement("li",null,i.a.createElement("b",null,"3 points")," for each service that is open by default"),i.a.createElement("li",null,i.a.createElement("b",null,"1 point")," for each service that is restricted to certain staff or only available on request"),i.a.createElement("li",null,i.a.createElement("b",null,"0 points")," for services whose status is unknown"),i.a.createElement("li",null,i.a.createElement("b",null,"-2 points")," for each service that is blocked and not available on request")),i.a.createElement("p",null,"There are currently ",this.props.data.allServicesCsv.totalCount," ","online services in the dataset, for a maximum score of"," ",i.a.createElement("b",null,3*this.props.data.allServicesCsv.totalCount)," (all services open by default). The percentages listed on the homepage indicate how close each department is to the maximum score."),i.a.createElement("p",null,"If a service is listed with an incorrect status for your department, please ",i.a.createElement(l.Link,{to:"/suggest"},"suggest an update"),". Suggestions are anonymous and help to improve the quality of the underlying dataset over time.")))},t}(i.a.Component);t.default=m;var d="2549085123"},151:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",headerTitle:"sass-module--headerTitle--2Xi7P",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v",spaceAbove:"sass-module--spaceAbove--3-bzF",spaceBelow:"sass-module--spaceBelow--Ss43w",comparisonTitle:"sass-module--comparisonTitle--25jZy",sortLinks:"sass-module--sortLinks--1EZLz",activeSortLink:"sass-module--activeSortLink--2UrOD"}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(150),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(153),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(51),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";var n=a(154),r=a(0),s=a.n(r),i=a(4),l=a.n(i),o=a(157),c=a.n(o),u=a(152),m=a(151),d=a.n(m),p=function(e){var t=e.siteTitle;return s.a.createElement("div",{className:d.a.headerContainer},s.a.createElement("div",{className:d.a.container},s.a.createElement("div",{className:d.a.headerTitle},s.a.createElement(u.Link,{to:"/"},t))))},h=function(){return s.a.createElement("div",{className:d.a.footerContainer},s.a.createElement("div",{className:d.a.container},s.a.createElement("ul",{className:d.a.listInline},s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/"},"Home")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/organization"},"Departments")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/service"},"Services"))),s.a.createElement("ul",{className:d.a.listInline},s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/suggest"},"Suggest an update")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/scoring"},"Scoring")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/about"},"About this project")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement("a",{href:"https://github.com/isthisblocked/isthisblockedinmydepartment.ca",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")))))},f=(a(158),function(e){var t=e.children,a=e.pageTitle;return s.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of which online services are available or blocked by federal government departments in Canada."},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:d.a.container},t),s.a.createElement(h,null))},data:n})});f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-scoring-js-2d18f660f4bd667e7a36.js.map