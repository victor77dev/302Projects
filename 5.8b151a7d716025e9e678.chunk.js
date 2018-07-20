webpackJsonp([5],{"./app/components/SearchResult/index.js":function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=a("./node_modules/react/index.js"),c=a.n(u),p=(a("./node_modules/prop-types/index.js"),a("./node_modules/@material-ui/core/styles/index.js")),m=a("./node_modules/classnames/index.js"),f=a.n(m),b=a("./node_modules/@material-ui/core/Card/index.js"),h=a.n(b),y=a("./node_modules/@material-ui/core/CardHeader/index.js"),v=a.n(y),_=a("./node_modules/@material-ui/core/CardActions/index.js"),g=a.n(_),j=a("./node_modules/@material-ui/core/CardContent/index.js"),x=a.n(j),C=a("./node_modules/@material-ui/core/Collapse/index.js"),E=a.n(C),P=a("./node_modules/@material-ui/core/Button/index.js"),w=a.n(P),k=a("./node_modules/@material-ui/core/IconButton/index.js"),O=a.n(k),S=a("./node_modules/@material-ui/icons/ExpandMore.js"),R=a.n(S),N=a("./node_modules/@material-ui/icons/MoreVert.js"),M=a.n(N),D=a("./node_modules/@material-ui/core/Typography/index.js"),T=a.n(D),A=a("./node_modules/@material-ui/core/colors/blue.js"),H=a.n(A),W=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),z=this,B=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,n,o){var r=t&&t.defaultProps,i=arguments.length-3;if(a||0===i||(a={}),a&&r)for(var l in r)void 0===a[l]&&(a[l]=r[l]);else a||(a=r||{});if(1===i)a.children=o;else if(i>1){for(var s=Array(i),d=0;d<i;d++)s[d]=arguments[d+3];a.children=s}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:a,_owner:null}}}(),q=Object(p.createMuiTheme)({palette:{primary:H.a}}),L={card:{minWidth:275,margin:q.spacing.unit},actions:{display:"flex"},button:{margin:q.spacing.unit},expand:{transform:"rotate(0deg)",transition:q.transitions.create("transform",{duration:q.transitions.duration.shortest}),marginLeft:"auto"},expandOpen:{transform:"rotate(180deg)"}},I=function(e){var t=e.paperData;if(0!==t.arxiv.length){var a=B(T.a,{variant:"body1"},void 0,"Information from arXiv."),n=t.arxiv[0].link,o=n?B(T.a,{variant:"body1"},void 0,"Link: ",B("a",{href:n,target:"_blank"},void 0,n)):"",r=t.arxiv[0].pdf,i=r?B(T.a,{variant:"body1"},void 0,"Pdf: ",B("a",{href:r,target:"_blank"},void 0,r)):"";return B(x.a,{},void 0,a,o,i)}return 0!==t.ref.length?B(x.a,{},void 0,B(T.a,{variant:"body1"},void 0,"Information from reference.")):null},V=function(e){var t=function(e){console.log("Check ReLinks Click"),console.log(e)},a=function(e){console.log("Add ReLinks Click"),console.log(e)},n=e.paperData,o=e.classes,r=n._id,i=[];return i.push({id:"Check_"+r,text:"Check ReLinks",func:t.bind(z,r)}),0===n.arxiv.length&&0!==n.ref.length&&i.push({id:"Add_"+r,text:"Add in ReLinks",func:a.bind(z,r)}),B(p.MuiThemeProvider,{theme:q},void 0,B(g.a,{className:o.actions,disableActionSpacing:!0},void 0,i.map(function(e){var t=e.text,a=e.func,n=e.id;return e.func?B(w.a,{size:"small",color:"primary",className:o.button,variant:"contained",onClick:a},n,t):B(w.a,{size:"small",color:"primary",className:o.button,variant:"contained"},n,t)})))},$=B(T.a,{paragraph:!0,variant:"title"},void 0,"Summary"),F=B(R.a,{}),X=B(T.a,{variant:"caption",gutterBottom:!0,align:"right"},void 0,"from arXiv.org"),J=function(e){function t(){var e,a,n,i;o(this,t);for(var l=arguments.length,s=Array(l),d=0;d<l;d++)s[d]=arguments[d];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.state={expanded:!1},n.handleExpandClick=function(){n.setState({expanded:!n.state.expanded})},i=a,r(n,i)}return i(t,e),W(t,[{key:"render",value:function(){var e=this.props,t=e.paperData,a=e.classes;if(0===t.arxiv.length||!t.arxiv[0].summary)return null;var o=t.arxiv[0].summary;return B("div",{},void 0,B(g.a,{},void 0,$,B(O.a,{className:f()(a.expand,n({},a.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show Summary"},void 0,F)),B(E.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},void 0,B(x.a,{},void 0,B(T.a,{},void 0,o),X)))}}]),t}(c.a.PureComponent),U=B(O.a,{},void 0,B(M.a,{})),G=function(e){function t(){var e,a,n,i;o(this,t);for(var l=arguments.length,s=Array(l),d=0;d<l;d++)s[d]=arguments[d];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.getAuthors=function(e){return 0!==e.arxiv.length?e.arxiv[0].author.reduce(function(e,t){return""===e?t:e+", "+t},""):0!==e.ref.length?e.ref[0].authors.reduce(function(e,t){return""===e?t:e+", "+t},""):"No Authors data in ReLinks."},i=a,r(n,i)}return i(t,e),W(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.paperData,n=a.title,o=this.getAuthors(a);return console.log(a),B(h.a,{className:t.card},void 0,B(v.a,{title:n,subheader:o,action:U}),B(I,{paperData:a}),B(J,{paperData:a,classes:t}),B(V,{paperData:a,classes:t}))}}]),t}(c.a.PureComponent),K=Object(p.withStyles)(L)(G),Q=a("./node_modules/react-intl/lib/index.es.js"),Y=Object(Q.d)({header:{id:"app.components.SearchResult.header",defaultMessage:"Search Result:"}}),Z=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,n,o){var r=t&&t.defaultProps,i=arguments.length-3;if(a||0===i||(a={}),a&&r)for(var l in r)void 0===a[l]&&(a[l]=r[l]);else a||(a=r||{});if(1===i)a.children=o;else if(i>1){for(var s=Array(i),d=0;d<i;d++)s[d]=arguments[d+3];a.children=s}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:a,_owner:null}}}(),ee=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),te=Z("h3",{},void 0,"Cannot find related paper in ReLinks"),ae=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),ee(t,[{key:"render",value:function(){var e=this.props.searchResult,t=void 0;return t=e&&0!==e.length?e.map(function(e){return Z(K,{paperData:e},e._id)}):te,Z("div",{},void 0,Z("h1",{},void 0,c.a.createElement(Q.a,Y.header)),t)}}]),t}(c.a.PureComponent);t.default=ae},"./node_modules/@material-ui/core/Button/Button.js":function(e,t,a){"use strict";function n(e){var t,a=e.children,n=e.classes,o=e.className,s=e.color,c=e.disabled,p=e.disableFocusRipple,b=e.fullWidth,h=e.focusVisibleClassName,y=e.mini,v=e.size,_=e.variant,g=(0,l.default)(e,["children","classes","className","color","disabled","disableFocusRipple","fullWidth","focusVisibleClassName","mini","size","variant"]),j="fab"===_||"extendedFab"===_,x="contained"===_||"raised"===_,C="text"===_||"flat"===_||"outlined"===_,E=(0,u.default)(n.root,(t={},(0,i.default)(t,n.fab,j),(0,i.default)(t,n.mini,j&&y),(0,i.default)(t,n.extendedFab,"extendedFab"===_),(0,i.default)(t,n.text,C),(0,i.default)(t,n.textPrimary,C&&"primary"===s),(0,i.default)(t,n.textSecondary,C&&"secondary"===s),(0,i.default)(t,n.flat,"text"===_||"flat"===_),(0,i.default)(t,n.flatPrimary,("text"===_||"flat"===_)&&"primary"===s),(0,i.default)(t,n.flatSecondary,("text"===_||"flat"===_)&&"secondary"===s),(0,i.default)(t,n.contained,x||j),(0,i.default)(t,n.containedPrimary,(x||j)&&"primary"===s),(0,i.default)(t,n.containedSecondary,(x||j)&&"secondary"===s),(0,i.default)(t,n.raised,x||j),(0,i.default)(t,n.raisedPrimary,(x||j)&&"primary"===s),(0,i.default)(t,n.raisedSecondary,(x||j)&&"secondary"===s),(0,i.default)(t,n.outlined,"outlined"===_),(0,i.default)(t,n["size".concat((0,f.capitalize)(v))],"medium"!==v),(0,i.default)(t,n.disabled,c),(0,i.default)(t,n.fullWidth,b),(0,i.default)(t,n.colorInherit,"inherit"===s),t),o);return d.default.createElement(m.default,(0,r.default)({className:E,disabled:c,focusRipple:!p,focusVisibleClassName:(0,u.default)(n.focusVisible,h)},g),d.default.createElement("span",{className:n.label},a))}var o=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(a("./node_modules/@babel/runtime/helpers/builtin/extends.js")),i=o(a("./node_modules/@babel/runtime/helpers/builtin/defineProperty.js")),l=o(a("./node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js")),s=o(a("./node_modules/@babel/runtime/helpers/builtin/objectSpread.js")),d=o(a("./node_modules/react/index.js")),u=(o(a("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),o(a("./node_modules/classnames/index.js"))),c=o(a("./node_modules/@material-ui/core/styles/withStyles.js")),p=a("./node_modules/@material-ui/core/styles/colorManipulator.js"),m=o(a("./node_modules/@material-ui/core/ButtonBase/index.js")),f=a("./node_modules/@material-ui/core/utils/helpers.js"),b=function(e){return{root:(0,s.default)({},e.typography.button,{lineHeight:"1.4em",boxSizing:"border-box",minWidth:64,minHeight:36,padding:"8px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,p.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,p.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,p.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},extendedFab:{borderRadius:24,padding:"0 16px",width:"auto",minWidth:48,height:48},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},mini:{width:40,height:40},sizeSmall:{padding:"7px 8px",minWidth:64,minHeight:32,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",minWidth:112,minHeight:40,fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};t.styles=b,n.propTypes={},n.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var h=(0,c.default)(b,{name:"MuiButton"})(n);t.default=h},"./node_modules/@material-ui/core/Button/index.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a("./node_modules/@material-ui/core/Button/Button.js"))},"./node_modules/@material-ui/core/Card/Card.js":function(e,t,a){"use strict";function n(e){var t=e.classes,a=e.className,n=e.raised,o=(0,i.default)(e,["classes","className","raised"]);return l.default.createElement(d.default,(0,r.default)({className:(0,s.default)(t.root,a),elevation:n?8:1},o))}var o=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(a("./node_modules/@babel/runtime/helpers/builtin/extends.js")),i=o(a("./node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js")),l=o(a("./node_modules/react/index.js")),s=(o(a("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),o(a("./node_modules/classnames/index.js"))),d=o(a("./node_modules/@material-ui/core/Paper/index.js")),u=o(a("./node_modules/@material-ui/core/styles/withStyles.js")),c={root:{overflow:"hidden"}};t.styles=c,n.propTypes={},n.defaultProps={raised:!1};var p=(0,u.default)(c,{name:"MuiCard"})(n);t.default=p},"./node_modules/@material-ui/core/Card/index.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a("./node_modules/@material-ui/core/Card/Card.js"))},"./node_modules/@material-ui/core/CardActions/CardActions.js":function(e,t,a){"use strict";function n(e){var t=e.disableActionSpacing,a=e.children,n=e.classes,o=e.className,l=(0,i.default)(e,["disableActionSpacing","children","classes","className"]);return s.default.createElement("div",(0,r.default)({className:(0,d.default)(n.root,o)},l),t?a:(0,c.cloneChildrenWithClassName)(a,n.action))}var o=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(a("./node_modules/@babel/runtime/helpers/builtin/extends.js")),i=o(a("./node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js")),l=o(a("./node_modules/@babel/runtime/helpers/builtin/defineProperty.js")),s=o(a("./node_modules/react/index.js")),d=(o(a("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),o(a("./node_modules/classnames/index.js"))),u=o(a("./node_modules/@material-ui/core/styles/withStyles.js")),c=a("./node_modules/@material-ui/core/utils/reactHelpers.js");a("./node_modules/@material-ui/core/Button/index.js");var p=function(e){return{root:(0,l.default)({display:"flex",alignItems:"center",boxSizing:"border-box",padding:"8px 4px"},e.breakpoints.up("sm"),{padding:"8px 12px"}),action:{margin:"0 4px"}}};t.styles=p,n.propTypes={},n.defaultProps={disableActionSpacing:!1};var m=(0,u.default)(p,{name:"MuiCardActions"})(n);t.default=m},"./node_modules/@material-ui/core/CardActions/index.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a("./node_modules/@material-ui/core/CardActions/CardActions.js"))},"./node_modules/@material-ui/core/CardContent/CardContent.js":function(e,t,a){"use strict";function n(e){var t=e.classes,a=e.className,n=e.component,o=(0,i.default)(e,["classes","className","component"]);return l.default.createElement(n,(0,r.default)({className:(0,s.default)(t.root,a)},o))}var o=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(a("./node_modules/@babel/runtime/helpers/builtin/extends.js")),i=o(a("./node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js")),l=o(a("./node_modules/react/index.js")),s=(o(a("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),o(a("./node_modules/classnames/index.js"))),d=o(a("./node_modules/@material-ui/core/styles/withStyles.js")),u=function(e){return{root:e.mixins.gutters({paddingTop:16,paddingBottom:16,"&:last-child":{paddingBottom:24}})}};t.styles=u,n.propTypes={},n.defaultProps={component:"div"};var c=(0,d.default)(u,{name:"MuiCardContent"})(n);t.default=c},"./node_modules/@material-ui/core/CardContent/index.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a("./node_modules/@material-ui/core/CardContent/CardContent.js"))},"./node_modules/@material-ui/core/CardHeader/CardHeader.js":function(e,t,a){"use strict";function n(e){var t=e.action,a=e.avatar,n=e.classes,o=e.className,d=e.component,c=e.subheader,p=e.title,m=(0,i.default)(e,["action","avatar","classes","className","component","subheader","title"]);return l.default.createElement(d,(0,r.default)({className:(0,s.default)(n.root,o)},m),a&&l.default.createElement("div",{className:n.avatar},a),l.default.createElement("div",{className:n.content},l.default.createElement(u.default,{variant:a?"body2":"headline",component:"span",className:n.title},p),c&&l.default.createElement(u.default,{variant:a?"body2":"body1",component:"span",color:"textSecondary",className:n.subheader},c)),t&&l.default.createElement("div",{className:n.action},t))}var o=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(a("./node_modules/@babel/runtime/helpers/builtin/extends.js")),i=o(a("./node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js")),l=o(a("./node_modules/react/index.js")),s=(o(a("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),o(a("./node_modules/classnames/index.js"))),d=o(a("./node_modules/@material-ui/core/styles/withStyles.js")),u=o(a("./node_modules/@material-ui/core/Typography/index.js")),c=function(e){return{root:e.mixins.gutters({display:"flex",alignItems:"center",paddingTop:16,paddingBottom:16}),avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-16},content:{flex:"1 1 auto"},title:{},subheader:{}}};t.styles=c,n.propTypes={},n.defaultProps={component:"div"};var p=(0,d.default)(c,{name:"MuiCardHeader"})(n);t.default=p},"./node_modules/@material-ui/core/CardHeader/index.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a("./node_modules/@material-ui/core/CardHeader/CardHeader.js"))},"./node_modules/@material-ui/core/Collapse/Collapse.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a("./node_modules/@babel/runtime/helpers/builtin/extends.js")),r=n(a("./node_modules/@babel/runtime/helpers/builtin/objectSpread.js")),i=n(a("./node_modules/@babel/runtime/helpers/builtin/defineProperty.js")),l=n(a("./node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js")),s=n(a("./node_modules/@babel/runtime/helpers/builtin/classCallCheck.js")),d=n(a("./node_modules/@babel/runtime/helpers/builtin/createClass.js")),u=n(a("./node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js")),c=n(a("./node_modules/@babel/runtime/helpers/builtin/inherits.js")),p=n(a("./node_modules/react/index.js")),m=n(a("./node_modules/classnames/index.js")),f=(n(a("./node_modules/@material-ui/core/node_modules/prop-types/index.js")),n(a("./node_modules/react-transition-group/Transition.js"))),b=n(a("./node_modules/@material-ui/core/styles/withStyles.js")),h=a("./node_modules/@material-ui/core/styles/transitions.js"),y=a("./node_modules/@material-ui/core/transitions/utils.js"),v=function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}};t.styles=v;var _=function(e){function t(){var e,a,n;(0,s.default)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(0,u.default)(n,(a=n=(0,u.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),n.wrapper=null,n.autoTransitionDuration=null,n.timer=null,n.handleEnter=function(e){e.style.height=n.props.collapsedHeight,n.props.onEnter&&n.props.onEnter(e)},n.handleEntering=function(e){var t=n.props,a=t.timeout,o=t.theme,r=n.wrapper?n.wrapper.clientHeight:0,i=(0,y.getTransitionProps)(n.props,{mode:"enter"}),l=i.duration;if("auto"===a){var s=o.transitions.getAutoHeightDuration(r);e.style.transitionDuration="".concat(s,"ms"),n.autoTransitionDuration=s}else e.style.transitionDuration="string"==typeof l?l:"".concat(l,"ms");e.style.height="".concat(r,"px"),n.props.onEntering&&n.props.onEntering(e)},n.handleEntered=function(e){e.style.height="auto",n.props.onEntered&&n.props.onEntered(e)},n.handleExit=function(e){var t=n.wrapper?n.wrapper.clientHeight:0;e.style.height="".concat(t,"px"),n.props.onExit&&n.props.onExit(e)},n.handleExiting=function(e){var t=n.props,a=t.timeout,o=t.theme,r=n.wrapper?n.wrapper.clientHeight:0,i=(0,y.getTransitionProps)(n.props,{mode:"exit"}),l=i.duration;if("auto"===a){var s=o.transitions.getAutoHeightDuration(r);e.style.transitionDuration="".concat(s,"ms"),n.autoTransitionDuration=s}else e.style.transitionDuration="string"==typeof l?l:"".concat(l,"ms");e.style.height=n.props.collapsedHeight,n.props.onExiting&&n.props.onExiting(e)},n.addEndListener=function(e,t){"auto"===n.props.timeout&&(n.timer=setTimeout(t,n.autoTransitionDuration||0))},a))}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.classes,s=t.className,d=t.collapsedHeight,u=t.component,c=(t.onEnter,t.onEntered,t.onEntering,t.onExit,t.onExiting,t.style),b=(t.theme,t.timeout),h=(0,l.default)(t,["children","classes","className","collapsedHeight","component","onEnter","onEntered","onEntering","onExit","onExiting","style","theme","timeout"]);return p.default.createElement(f.default,(0,o.default)({onEnter:this.handleEnter,onEntered:this.handleEntered,onEntering:this.handleEntering,onExit:this.handleExit,onExiting:this.handleExiting,addEndListener:this.addEndListener,timeout:"auto"===b?null:b},h),function(t,l){return p.default.createElement(u,(0,o.default)({className:(0,m.default)(n.container,(0,i.default)({},n.entered,"entered"===t),s),style:(0,r.default)({},c,{minHeight:d})},l),p.default.createElement("div",{className:n.wrapper,ref:function(t){e.wrapper=t}},p.default.createElement("div",{className:n.wrapperInner},a)))})}}]),t}(p.default.Component);_.propTypes={},_.defaultProps={collapsedHeight:"0px",component:"div",timeout:h.duration.standard},_.muiSupportAuto=!0;var g=(0,b.default)(v,{withTheme:!0,name:"MuiCollapse"})(_);t.default=g},"./node_modules/@material-ui/core/Collapse/index.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a("./node_modules/@material-ui/core/Collapse/Collapse.js"))},"./node_modules/@material-ui/core/colors/blue.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},o=n;t.default=o},"./node_modules/@material-ui/icons/ExpandMore.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("./node_modules/react/index.js")),r=n(a("./node_modules/@material-ui/icons/utils/createSvgIcon.js")),i=(0,r.default)(o.default.createElement("g",null,o.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})),"ExpandMore");t.default=i},"./node_modules/@material-ui/icons/MoreVert.js":function(e,t,a){"use strict";var n=a("./node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("./node_modules/react/index.js")),r=n(a("./node_modules/@material-ui/icons/utils/createSvgIcon.js")),i=(0,r.default)(o.default.createElement("g",null,o.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),"MoreVert");t.default=i}});