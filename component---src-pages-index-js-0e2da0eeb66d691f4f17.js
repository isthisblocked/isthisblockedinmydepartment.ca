(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,t,a){"use strict";a.r(t);a(77),a(51);var n=a(7),r=a.n(n),o=a(0),s=a.n(o),i=a(160),l=a.n(i),c=a(150),d=a(158),u=a.n(d),p=a(149),m=a.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:u()(m.a.homepageRow,m.a.clearfix)},s.a.createElement("div",{className:m.a.departmentName},s.a.createElement(c.Link,{to:this.props.url},this.props.organizationName)),s.a.createElement("div",{className:m.a.departmentScore},"Score:"," ",s.a.createElement("span",{className:m.a.departmentScoreNumber},this.props.score," ")),s.a.createElement("div",{className:m.a.departmentDateUpdated},"Updated:"," ",s.a.createElement("span",{className:m.a.departmentDateUpdatedValue},this.props.dateUpdated)))},t}(s.a.Component),f=(a(50),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement(s.a.Fragment,null,this.props.sortedHomepageRows.map(function(e,t){return s.a.createElement(h,{key:e.id,url:"/organization/"+e.organization+"/",organizationName:e.name_en,score:e.score,dateUpdated:e.date_updated})}))},t}(s.a.Component)),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return this.props.label===this.props.activeLabel?s.a.createElement("li",{className:u()(m.a.listInlineItem,m.a.activeSortLink)},s.a.createElement("a",{href:"#",onClick:this.props.handleSortLink,"data-label":this.props.label},this.props.description)):s.a.createElement("li",{className:m.a.listInlineItem},s.a.createElement("a",{href:"#",onClick:this.props.handleSortLink,"data-label":this.props.label},this.props.description))},t}(s.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return s.a.createElement("ul",{className:u()(m.a.listInline,m.a.sortLinks)},[{label:"highest",description:"Highest to lowest"},{label:"lowest",description:"Lowest to highest"},{label:"name",description:"Sort by name"},{label:"date_updated",description:"Sort by date updated"}].map(function(t,a){return s.a.createElement(g,{handleSortLink:e.props.handleSortLink,label:t.label,key:t.label,activeLabel:e.props.sortLinksActiveLabel,description:t.description})}))},t}(s.a.Component),b=a(161),w=a(155);a.d(t,"IndexPageQuery",function(){return E});var y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={descriptionVisible:!1,sortBy:"score",sortDirection:"desc",sortLinksActiveLabel:"highest",homepageRows:{},sortedHomepageRows:[],showPrelaunchPlaceholder:!0},t.sortRowArray=function(e,t,a){var n;return n=l.a.sortBy(l.a.values(e),[function(e){return e[t]}]),"desc"===a&&l.a.reverse(n),n},t.sortRows=function(e,a){var n=t.sortRowArray(t.state.homepageRows,e,a);t.setState({sortedHomepageRows:n,sortBy:e,sortDirection:a},function(){t.updateLocalStorage()})},t.updateLocalStorage=function(){localStorage.setItem("localState",JSON.stringify({sortLinksActiveLabel:t.state.sortLinksActiveLabel,descriptionVisible:t.state.descriptionVisible}))},t.sortRowsByTargetLabel=function(e){"highest"===e?t.sortRows("score","desc"):"lowest"===e?t.sortRows("score","asc"):"name"===e?t.sortRows("name","asc"):"date_updated"===e&&t.sortRows("date_updated","desc")},t.handleSortLink=function(e){e.preventDefault();var a=e.currentTarget.dataset.label;t.setState({sortLinksActiveLabel:a}),t.sortRowsByTargetLabel(a)},t.toggleDescription=function(e){var a;e.preventDefault(),a=!t.state.descriptionVisible,t.setState({descriptionVisible:a},function(){t.updateLocalStorage()})},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e,t,a=this,n={},r={},o=localStorage.getItem("localState");o&&(r=JSON.parse(o)),e=l.a.get(r,"sortLinksActiveLabel",this.state.sortLinksActiveLabel),t=l.a.get(r,"descriptionVisible",this.state.descriptionVisible),l.a.each(this.props.data.allOrganizationStatusRandomCsv.edges,function(e){!1===l.a.isUndefined(e.node.score)&&(e.node.score=l.a.toInteger(e.node.score)),n[e.node.organization]=e.node}),l.a.each(this.props.data.allOrganizationsCsv.edges,function(e){l.a.isObject(n[e.node.acronym_en])&&(n[e.node.acronym_en].name_en=e.node.name_en)}),this.setState({homepageRows:n,sortLinksActiveLabel:e,descriptionVisible:t},function(){a.sortRowsByTargetLabel(e)})},a.render=function(){return s.a.createElement(w.a,null,s.a.createElement(b.a,{descriptionVisible:this.state.descriptionVisible,toggleDescription:this.toggleDescription}),this.state.showPrelaunchPlaceholder&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Launching soon"),s.a.createElement("p",null,"Stay tuned for updates in the next few weeks…")),!1===this.state.showPrelaunchPlaceholder&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:m.a.comparisonTitle},"Departmental comparison"),s.a.createElement(v,{sortBy:this.state.sortBy,sortDirection:this.state.sortDirection,sortLinksActiveLabel:this.state.sortLinksActiveLabel,handleSortLink:this.handleSortLink}),s.a.createElement(f,{sortedHomepageRows:this.state.sortedHomepageRows})))},t}(s.a.Component),E=(t.default=y,"1767387887")},149:function(e,t,a){e.exports={container:"sass-module--container--RqDAe",textLimit:"sass-module--textLimit--r3YNO",headerContainer:"sass-module--headerContainer--A6Lx0",headerTitle:"sass-module--headerTitle--2Xi7P",footerContainer:"sass-module--footerContainer--1ehxn",introText:"sass-module--introText--JHpU2",homepageRow:"sass-module--homepageRow--1bW1t",serviceDepartmentRow:"sass-module--serviceDepartmentRow--1JRYM",departmentServiceRow:"sass-module--departmentServiceRow--2zk1o",departmentName:"sass-module--departmentName--1HjYc",departmentScore:"sass-module--departmentScore--1XvxX",departmentDateUpdated:"sass-module--departmentDateUpdated--2441g",departmentScoreNumber:"sass-module--departmentScoreNumber--1315-",serviceName:"sass-module--serviceName--SRg2T",serviceStatus:"sass-module--serviceStatus--1lh0l",serviceStatusIndicator:"sass-module--serviceStatusIndicator--1fvmv",unknown:"sass-module--unknown--K4jGG",blocked:"sass-module--blocked--1dYgI",restricted:"sass-module--restricted--1Akio",open:"sass-module--open--1Vhug",clearfix:"sass-module--clearfix--3s-RA",listInline:"sass-module--listInline--3tYpw",listUnstyled:"sass-module--listUnstyled--Cl2FG",listInlineItem:"sass-module--listInlineItem--kXzaW",listStandard:"sass-module--listStandard--22U1v",comparisonTitle:"sass-module--comparisonTitle--25jZy",sortLinks:"sass-module--sortLinks--1EZLz",activeSortLink:"sass-module--activeSortLink--2UrOD"}},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(148),l=a.n(i);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(25);a.d(t,"waitForRouteChange",function(){return c.c});var d=a(151),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var p=a(35);a.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Is this blocked in my department.ca"}}}}},153:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),i=a(49),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){"use strict";var n=a(152),r=a(0),o=a.n(r),s=a(4),i=a.n(s),l=a(156),c=a.n(l),d=a(150),u=a(149),p=a.n(u),m=function(e){var t=e.siteTitle;return o.a.createElement("div",{className:p.a.headerContainer},o.a.createElement("div",{className:p.a.container},o.a.createElement("div",{className:p.a.headerTitle},o.a.createElement(d.Link,{to:"/"},t))))},h=function(){return o.a.createElement("div",{className:p.a.footerContainer},o.a.createElement("div",{className:p.a.container},o.a.createElement("ul",{className:p.a.listInline},o.a.createElement("li",{className:p.a.listInlineItem},o.a.createElement(d.Link,{to:"/suggest"},"Suggest an update")),o.a.createElement("li",{className:p.a.listInlineItem},o.a.createElement(d.Link,{to:"/scoring"},"Scoring")),o.a.createElement("li",{className:p.a.listInlineItem},o.a.createElement(d.Link,{to:"/about"},"About this project")),o.a.createElement("li",{className:p.a.listInlineItem},o.a.createElement("a",{href:"https://github.com/isthisblocked/isthisblockedinmydepartment.ca",target:"_blank",rel:"noopener noreferrer"},"View on GitHub")))))},f=(a(157),function(e){var t=e.children,a=e.pageTitle;return o.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:a?a+" - "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:"An unofficial dashboard of online services blocked by federal government departments in Canada"},{name:"keywords",content:"Canada, public service, Government of Canada, digital government, information technology, public sector"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:p.a.container},t),o.a.createElement(h,null))},data:n})});f.propTypes={children:i.a.node.isRequired};t.a=f},161:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),s=a.n(o),i=a(149),l=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:l.a.introText},s.a.createElement("p",null,"Public servants need modern tools in order to work effectively in the 21st century. In many Canadian federal departments, access to many online tools is blocked by corporate firewalls or bandwidth restrictions."),this.props.descriptionVisible&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"The 2014"," ",s.a.createElement("a",{href:"https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27122#cha5",target:"_blank",rel:"noopener noreferrer"},"Policy on Acceptable Network and Device Use")," ","(PANDU) states that public servants should have “open access to the Internet including Government of Canada and external Web 2.0 tools and services”, to support enhanced communication and collaboration, and to improve productivity and program and service delivery."),s.a.createElement("p",null,"In June 2018, the federal Treasury Board"," ",s.a.createElement("a",{href:"http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32588#cha5",target:"_blank",rel:"noopener noreferrer"},"released an IT Policy Implementation Notice")," ","re-iterating the importance of providing access to these tools, saying that “open access to modern tools is essential to transforming how public servants work and serve Canadians”. It instructs departments to reconfigure their web filtering rules to be open by default to the Internet, aside from limited exceptions (websites that support criminal behaviour or other activities that violate government policies or operations)."),s.a.createElement("p",null,"This website provides an overview of which online tools are available in what departments, and which are blocked. In many cases, these tools are only available on request, which can be time-consuming and difficult to obtain."," "),s.a.createElement("p",null,"Over time, we hope that departments who are currently blocking access to these tools update their policies and firewall restrictions, to make access to these open by default. Doing so is a key part of empowering their public servants to be effective, collaborative, and connected in the modern digital world."),s.a.createElement("p",null,"This site is an"," ",s.a.createElement("a",{href:"http://ottawacivictech.ca/",target:"_blank",rel:"noopener noreferrer"},"Ottawa Civic Tech")," ","volunteer project. It is not affiliated with the Government of Canada.")),!0!==this.props.hideToggle&&s.a.createElement("p",null,s.a.createElement("a",{href:"#",onClick:this.props.toggleDescription},this.props.descriptionVisible?"Read less":"Read more")))},t}(s.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-0e2da0eeb66d691f4f17.js.map