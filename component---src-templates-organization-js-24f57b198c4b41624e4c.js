(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,t,a){"use strict";a.r(t);a(160),a(74),a(52),a(164),a(73);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),o=a(156),l=a(152),c=a(161),u=a.n(c),m=a(151),d=a.n(m),p=a(159),v=a.n(p),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.serviceDetails,t=e.name,a=e.description;return i.a.createElement("div",{className:v()(d.a.departmentServiceRow,d.a.clearfix)},i.a.createElement("div",{className:d.a.serviceName},i.a.createElement(l.Link,{to:this.props.url,title:a},t)),i.a.createElement("div",{className:d.a.serviceStatusIndicator},i.a.createElement("span",{className:d.a[this.props.status]}," ")),i.a.createElement("div",{className:d.a.serviceStatus},this.props.status))},t}(i.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:"departmentalServiceCollection"},i.a.createElement("h2",null,this.props.description),this.props.services.map(function(t,a){return i.a.createElement("div",{key:t},u.a.get(e.props.getServiceDetails(t),"category")===e.props.filter&&i.a.createElement(f,{url:"/service/"+t+"/",serviceDetails:e.props.getServiceDetails(t),status:e.props.getServiceStatus(t)}))}))},t}(i.a.Component);a.d(t,"organizationQuery",function(){return y});var g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).getServiceDetails=function(e,a){var n=u.a.map(t.props.data.allServicesCsv.edges,"node");return u.a.isUndefined(a)?u.a.find(n,{short_name:e}):u.a.get(u.a.find(n,{short_name:e}),a)},t.getServiceStatus=function(e){return t.props.data.organizationStatusCsv[e]},t}return r()(t,e),t.prototype.render=function(){var e=this,t=Object.keys(this.props.data.organizationStatusCsv),a=this.props.data.organizationsCsv;return delete t[0],delete t[1],i.a.createElement(o.a,{pageTitle:a.name_en},i.a.createElement("div",null,i.a.createElement("h1",null,a.name_en),i.a.createElement("ul",{className:d.a.listInline},i.a.createElement("li",{className:d.a.listInlineItem},i.a.createElement("a",{href:a.url_en,target:"_blank",rel:"noopener noreferrer"},"Visit website")),i.a.createElement("li",{className:d.a.listInlineItem},"Score:"," ",i.a.createElement("span",{className:d.a.departmentScoreNumber},this.props.data.organizationStatusCsv.score)),i.a.createElement("li",{className:d.a.listInlineItem},"Last updated: ",this.props.data.organizationStatusCsv.date_updated)),i.a.createElement("p",{className:d.a.textLimit},i.a.createElement("b",null,"Improve this data!")," Are you an employee at"," ",a.name_en,"? If the information below is incorrect or out of date, you can"," ",i.a.createElement(l.Link,{to:"/suggest"},"anonymously suggest improvements"),"."),this.props.data.allServiceCategoriesCsv.edges.map(function(a,n){return i.a.createElement(h,{key:a.node.id,services:t,filter:a.node.name,description:a.node.description,getServiceDetails:e.getServiceDetails,getServiceStatus:e.getServiceStatus})})))},t}(i.a.Component),y=(t.default=g,"618089113")},151:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",headerTitle:"sass-module--headerTitle--2Xi7P",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v",spaceAbove:"sass-module--spaceAbove--3-bzF",spaceBelow:"sass-module--spaceBelow--Ss43w",comparisonTitle:"sass-module--comparisonTitle--25jZy",sortLinks:"sass-module--sortLinks--1EZLz",activeSortLink:"sass-module--activeSortLink--2UrOD"}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return v}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(150),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(153),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(51),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";var n=a(154),r=a(0),s=a.n(r),i=a(4),o=a.n(i),l=a(157),c=a.n(l),u=a(152),m=a(151),d=a.n(m),p=function(e){var t=e.siteTitle;return s.a.createElement("div",{className:d.a.headerContainer},s.a.createElement("div",{className:d.a.container},s.a.createElement("div",{className:d.a.headerTitle},s.a.createElement(u.Link,{to:"/"},t))))},v=function(){return s.a.createElement("div",{className:d.a.footerContainer},s.a.createElement("div",{className:d.a.container},s.a.createElement("ul",{className:d.a.listInline},s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/"},"Home")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/organization"},"Departments")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/service"},"Services"))),s.a.createElement("ul",{className:d.a.listInline},s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/suggest"},"Suggest an update")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/scoring"},"Scoring")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement(u.Link,{to:"/about"},"About this project")),s.a.createElement("li",{className:d.a.listInlineItem},s.a.createElement("a",{href:"https://github.com/isthisblocked/isthisblockedinmydepartment.ca",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")))))},f=(a(158),function(e){var t=e.children,a=e.pageTitle;return s.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of which online services are available or blocked by federal government departments in Canada."},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:d.a.container},t),s.a.createElement(v,null))},data:n})});f.propTypes={children:o.a.node.isRequired};t.a=f},159:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===s)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},160:function(e,t,a){var n=a(24).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},164:function(e,t,a){var n=a(26),r=a(34);a(165)("keys",function(){return function(e){return r(n(e))}})},165:function(e,t,a){var n=a(11),r=a(17),s=a(25);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],i={};i[e]=t(a),n(n.S+n.F*s(function(){a(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-templates-organization-js-24f57b198c4b41624e4c.js.map