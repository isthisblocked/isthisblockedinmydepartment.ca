(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);a(158),a(76),a(50);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),o=a(154),l=a(149),c=a(159),d=a.n(c),u=a(148),m=a.n(u),p=a(157),f=a.n(p),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:f()(m.a.serviceDepartmentRow,m.a.clearfix)},i.a.createElement("div",{className:m.a.departmentName},i.a.createElement(l.Link,{to:this.props.url},this.props.organization_name)),i.a.createElement("div",{className:m.a.serviceStatusIndicator},i.a.createElement("span",{className:m.a[this.props.status]}," ")),i.a.createElement("div",{className:m.a.serviceStatus},this.props.status),i.a.createElement("div",{className:m.a.departmentDateUpdated},"Updated: ",this.props.dateUpdated))},t}(i.a.Component);a.d(t,"servicesQuery",function(){return g});var h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).getOrganizationDetails=function(e,a){var n=d.a.map(t.props.data.allOrganizationsCsv.edges,"node");return d.a.isUndefined(a)?d.a.find(n,{acronym_en:e}):d.a.get(d.a.find(n,{acronym_en:e}),a)},t}return r()(t,e),t.prototype.render=function(){var e=this;return console.log("service!"),console.log(this.props.data),i.a.createElement(o.a,{pageTitle:this.props.data.servicesCsv.name},i.a.createElement("div",null,i.a.createElement("h1",null,this.props.data.servicesCsv.name),i.a.createElement("p",{className:m.a.textLimit},this.props.data.servicesCsv.description," ",i.a.createElement("a",{href:this.props.data.servicesCsv.url,target:"_blank",rel:"noopener noreferrer"},"Visit website")),i.a.createElement("h2",null,"Department status"),this.props.data.allOrganizationStatusRandomCsv.edges.map(function(t,a){return i.a.createElement(v,{key:t.node.id,url:"/organization/"+t.node.organization+"/",organization_name:e.getOrganizationDetails(t.node.organization,"name_en"),status:t.node[e.props.data.servicesCsv.short_name],dateUpdated:t.node.date_updated})})))},t}(i.a.Component),g=(t.default=h,"3621103743")},148:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",headerTitle:"sass-module--headerTitle--2Xi7P",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v",comparisonTitle:"sass-module--comparisonTitle--25jZy",sortLinks:"sass-module--sortLinks--1EZLz",activeSortLink:"sass-module--activeSortLink--2UrOD"}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return v}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(147),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var d=a(150),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},152:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(49),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";var n=a(151),r=a(0),s=a.n(r),i=a(4),o=a.n(i),l=a(155),c=a.n(l),d=a(149),u=a(148),m=a.n(u),p=function(e){var t=e.siteTitle;return s.a.createElement("div",{className:m.a.headerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("div",{className:m.a.headerTitle},s.a.createElement(d.Link,{to:"/"},t))))},f=function(){return s.a.createElement("div",{className:m.a.footerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("ul",{className:m.a.listInline},s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(d.Link,{to:"/suggest"},"Suggest an update")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(d.Link,{to:"/scoring"},"Scoring")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(d.Link,{to:"/about"},"About this project")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement("a",{href:"https://github.com/isthisblocked/isthisblockedinmydepartment.ca",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")))))},v=(a(156),function(e){var t=e.children,a=e.pageTitle;return s.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of online services blocked by federal government departments in Canada"},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:m.a.container},t),s.a.createElement(f,null))},data:n})});v.propTypes={children:o.a.node.isRequired};t.a=v},158:function(e,t,a){var n=a(26).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-service-js-4ac55161aa37d43812ce.js.map