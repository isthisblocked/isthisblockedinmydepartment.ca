(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,a){"use strict";a.r(t);a(77),a(51);var n=a(7),r=a.n(n),o=a(0),s=a.n(o),i=a(159),l=a.n(i),c=a(149),d=a(157),p=a.n(d),u=a(148),m=a.n(u),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:p()(m.a.homepageRow,m.a.clearfix)},s.a.createElement("div",{className:m.a.departmentName},s.a.createElement(c.Link,{to:this.props.url},this.props.organizationName)),s.a.createElement("div",{className:m.a.departmentScore},"Score:"," ",s.a.createElement("span",{className:m.a.departmentScoreNumber},this.props.score," ")),s.a.createElement("div",{className:m.a.departmentDateUpdated},"Updated:"," ",s.a.createElement("span",{className:m.a.departmentDateUpdatedValue},this.props.dateUpdated)))},t}(s.a.Component),f=(a(50),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement(s.a.Fragment,null,this.props.sortedHomepageRows.map(function(e,t){return s.a.createElement(h,{key:e.id,url:"/organization/"+e.organization+"/",organizationName:e.name_en,score:e.score,dateUpdated:e.date_updated})}))},t}(s.a.Component)),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return console.log("herrrre"),console.log(this.props.label),console.log(this.props.activeLabel),this.props.label===this.props.activeLabel?s.a.createElement("li",{className:p()(m.a.listInlineItem,m.a.activeSortLink)},s.a.createElement("a",{href:"#",onClick:this.props.handleSortLink,"data-label":this.props.label},this.props.description)):s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement("a",{href:"#",onClick:this.props.handleSortLink,"data-label":this.props.label},this.props.description))},t}(s.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement("ul",{className:p()(m.a.listInline,m.a.sortLinks)},[{label:"highest",description:"Highest to lowest"},{label:"lowest",description:"Lowest to highest"},{label:"name",description:"Sort by name"},{label:"date_updated",description:"Sort by date updated"}].map(function(t,a){return s.a.createElement(g,{handleSortLink:e.props.handleSortLink,label:t.label,key:t.label,activeLabel:e.props.sortLinksActiveLabel,description:t.description})}))},t}(s.a.Component),b=a(160),w=a(154);a.d(t,"IndexPageQuery",function(){return E});var y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={descriptionVisible:!1,sortBy:"score",sortDirection:"desc",sortLinksActiveLabel:"highest",homepageRows:{},sortedHomepageRows:[]},t.homepageRows={},t.sortRowArray=function(e,t,a){var n;return n=l.a.sortBy(l.a.values(e),[function(e){return e[t]}]),"desc"===a&&l.a.reverse(n),n},t.sortRows=function(e,a){var n=t.sortRowArray(t.state.homepageRows,e,a);t.setState({sortedHomepageRows:n,sortBy:e,sortDirection:a})},t.handleSortLink=function(e){e.preventDefault();var a=e.currentTarget.dataset.label;t.setState({sortLinksActiveLabel:a}),"highest"===a?t.sortRows("score","desc"):"lowest"===a?t.sortRows("score","asc"):"name"===a?t.sortRows("name","asc"):"date_updated"===a&&t.sortRows("date_updated","desc"),console.log("clicked!!"),console.log(a)},t.toggleDescription=function(e){e.preventDefault(),t.state.descriptionVisible?t.setState({descriptionVisible:!1}):t.setState({descriptionVisible:!0})},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e,t={};l.a.each(this.props.data.allOrganizationStatusRandomCsv.edges,function(e){!1===l.a.isUndefined(e.node.score)&&(e.node.score=l.a.toInteger(e.node.score)),t[e.node.organization]=e.node}),l.a.each(this.props.data.allOrganizationsCsv.edges,function(e){l.a.isObject(t[e.node.acronym_en])&&(t[e.node.acronym_en].name_en=e.node.name_en)}),e=this.sortRowArray(t,this.state.sortBy,this.state.sortDirection),this.setState({homepageRows:t,sortedHomepageRows:e})},a.render=function(){return s.a.createElement(w.a,null,s.a.createElement(b.a,{descriptionVisible:this.state.descriptionVisible,toggleDescription:this.toggleDescription}),s.a.createElement("h1",{class:m.a.comparisonTitle},"Departmental comparison"),s.a.createElement(v,{sortBy:this.state.sortBy,sortDirection:this.state.sortDirection,sortLinksActiveLabel:this.state.sortLinksActiveLabel,handleSortLink:this.handleSortLink}),s.a.createElement(f,{sortedHomepageRows:this.state.sortedHomepageRows}))},t}(s.a.Component),E=(t.default=y,"1767387887")},148:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",headerTitle:"sass-module--headerTitle--2Xi7P",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v",comparisonTitle:"sass-module--comparisonTitle--25jZy",sortLinks:"sass-module--sortLinks--1EZLz",activeSortLink:"sass-module--activeSortLink--2UrOD"}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(147),l=a.n(i);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var d=a(150),p=a.n(d);a.d(t,"PageRenderer",function(){return p.a});var u=a(35);a.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},152:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(49),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";var n=a(151),r=a(0),o=a.n(r),s=a(4),i=a.n(s),l=a(155),c=a.n(l),d=a(149),p=a(148),u=a.n(p),m=function(e){var t=e.siteTitle;return o.a.createElement("div",{className:u.a.headerContainer},o.a.createElement("div",{className:u.a.container},o.a.createElement("div",{className:u.a.headerTitle},o.a.createElement(d.Link,{to:"/"},t))))},h=function(){return o.a.createElement("div",{className:u.a.footerContainer},o.a.createElement("div",{className:u.a.container},o.a.createElement("ul",{className:u.a.listInline},o.a.createElement("li",{className:u.a.listInlineItem},o.a.createElement(d.Link,{to:"/suggest"},"Suggest an update")),o.a.createElement("li",{className:u.a.listInlineItem},o.a.createElement(d.Link,{to:"/scoring"},"Scoring")),o.a.createElement("li",{className:u.a.listInlineItem},o.a.createElement(d.Link,{to:"/about"},"About this project")),o.a.createElement("li",{className:u.a.listInlineItem},o.a.createElement("a",{href:"https://github.com/isthisblocked/isthisblockedinmydepartment.ca",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")))))},f=(a(156),function(e){var t=e.children,a=e.pageTitle;return o.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of online services blocked by federal government departments in Canada"},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:u.a.container},t),o.a.createElement(h,null))},data:n})});f.propTypes={children:i.a.node.isRequired};t.a=f},160:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),s=a.n(o),i=a(148),l=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:l.a.introText},s.a.createElement("p",null,"Public servants need modern tools in order to work effectively in the 21st century. In many Canadian federal departments, access to many online tools is blocked by corporate firewalls or bandwidth restrictions."),this.props.descriptionVisible&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"The 2014"," ",s.a.createElement("a",{href:"https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27122#cha5",target:"_blank",rel:"noopener noreferrer"},"Policy on Acceptable Network and Device Use")," ","(PANDU) states that public servants should have “open access to the Internet including Government of Canada and external Web 2.0 tools and services”, to support enhanced communication and collaboration, and to improve productivity and program and service delivery."),s.a.createElement("p",null,"In June 2018, the federal Treasury Board"," ",s.a.createElement("a",{href:"http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32588#cha5",target:"_blank",rel:"noopener noreferrer"},"released an IT Policy Implementation Notice")," ","re-iterating the importance of providing access to these tools, saying that “open access to modern tools is essential to transforming how public servants work and serve Canadians”. It instructs departments to reconfigure their web filtering rules to be open by default to the Internet, aside from limited exceptions (websites that support criminal behaviour or other activities that violate government policies or operations)."),s.a.createElement("p",null,"This website provides an overview of which online tools are available in what departments, and which are blocked. In many cases, these tools are only available on request, which can be time-consuming and difficult to obtain."," "),s.a.createElement("p",null,"Over time, we hope that departments who are currently blocking access to these tools update their policies and firewall restrictions, to make access to these open by default. Doing so is a key part of empowering their public servants to be effective, collaborative, and connected in the modern digital world."),s.a.createElement("p",null,"This site is an"," ",s.a.createElement("a",{href:"http://ottawacivictech.ca/",target:"_blank",rel:"noopener noreferrer"},"Ottawa Civic Tech")," ","volunteer project. It is not affiliated with the Government of Canada.")),!0!==this.props.hideToggle&&s.a.createElement("p",null,s.a.createElement("a",{href:"#",onClick:this.props.toggleDescription},this.props.descriptionVisible?"Read less":"Read more")))},t}(s.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-cd06b529021433699619.js.map