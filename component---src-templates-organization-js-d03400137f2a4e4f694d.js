(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);a(157),a(78),a(51),a(163),a(76),a(50);var n=a(7),r=a.n(n),s=a(0),i=a.n(s),o=a(154),c=a(148),l=a(158),u=a.n(l),d=a(149),m=a.n(d),p=(a(77),a(159)),v=a.n(p),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.serviceDetails,t=e.name,a=e.description;return i.a.createElement("div",{className:v()(m.a.departmentServiceRow,m.a.clearfix)},i.a.createElement("div",{className:m.a.serviceName},i.a.createElement(c.Link,{to:this.props.url,title:a},t)),i.a.createElement("div",{className:m.a.serviceStatusIndicator},i.a.createElement("span",{className:m.a[this.props.status]}," ")),i.a.createElement("div",{className:m.a.serviceStatus},this.props.status))},t}(i.a.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:"departmentalServiceCollection"},i.a.createElement("h2",null,this.props.description),this.props.services.map(function(t,a){return i.a.createElement("div",{key:t},e.props.getServiceDetails(t).category==e.props.filter&&i.a.createElement(f,{url:"/service/"+t+"/",serviceDetails:e.props.getServiceDetails(t),status:e.props.getServiceStatus(t)}))}))},t}(i.a.Component);a.d(t,"organizationQuery",function(){return S});var g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).getServiceDetails=function(e,a){var n=u.a.map(t.props.data.allServicesCsv.edges,"node");return u.a.isUndefined(a)?u.a.find(n,{short_name:e}):u.a.get(u.a.find(n,{short_name:e}),a)},t.getServiceStatus=function(e){return t.props.data.organizationStatusRandomCsv[e]},t}return r()(t,e),t.prototype.render=function(){var e=this,t=Object.keys(this.props.data.organizationStatusRandomCsv),a=this.props.data.organizationsCsv;return delete t[0],delete t[1],console.log("department!"),console.log(t),console.log("services!"),console.log(this.props.data.allServicesCsv),i.a.createElement(o.a,{pageTitle:a.name_en},i.a.createElement("div",null,i.a.createElement("h1",null,a.name_en),i.a.createElement("ul",{className:m.a.listInline},i.a.createElement("li",{className:m.a.listInlineItem},i.a.createElement("a",{href:a.url_en,target:"_blank",rel:"noopener noreferrer"},"Visit website")),i.a.createElement("li",{className:m.a.listInlineItem},"Score:"," ",i.a.createElement("span",{className:m.a.departmentScoreNumber},this.props.data.organizationStatusRandomCsv.score)),i.a.createElement("li",{className:m.a.listInlineItem},"Last updated:"," ",this.props.data.organizationStatusRandomCsv.date_updated)),this.props.data.allServiceCategoriesCsv.edges.map(function(a,n){return i.a.createElement(h,{key:a.node.id,services:t,filter:a.node.name,description:a.node.description,getServiceDetails:e.getServiceDetails,getServiceStatus:e.getServiceStatus})})))},t}(i.a.Component),S=(t.default=g,"1496936903")},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return v});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(147),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(25);a.d(t,"waitForRouteChange",function(){return l.c});var u=a(150),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),v=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}v.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v"}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},152:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(49),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,a){"use strict";var n=a(151),r=a(0),s=a.n(r),i=a(4),o=a.n(i),c=a(155),l=a.n(c),u=a(148),d=a(149),m=a.n(d),p=function(e){var t=e.siteTitle;return s.a.createElement("div",{className:m.a.headerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(u.Link,{to:"/"},t))))},v=function(){return s.a.createElement("div",{className:m.a.footerContainer},s.a.createElement("div",{className:m.a.container},s.a.createElement("ul",{className:m.a.listInline},s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/suggest"},"Suggest an update")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/scoring"},"Scoring")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement(u.Link,{to:"/about"},"About this project")),s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement("a",{href:"https://github.com/isthisblocked/isthisblockedinmydepartment.ca",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")))))},f=(a(156),function(e){var t=e.children,a=e.pageTitle;return s.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of online services blocked by federal government departments in Canada"},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:m.a.container},t),s.a.createElement(v,null))},data:n})});f.propTypes={children:o.a.node.isRequired};t.a=f},157:function(e,t,a){var n=a(26).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},163:function(e,t,a){var n=a(27),r=a(38);a(164)("keys",function(){return function(e){return r(n(e))}})},164:function(e,t,a){var n=a(6),r=a(18),s=a(17);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],i={};i[e]=t(a),n(n.S+n.F*s(function(){a(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-templates-organization-js-d03400137f2a4e4f694d.js.map