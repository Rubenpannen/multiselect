import{toRefs as e,ref as l,computed as t,watch as n,nextTick as a,openBlock as u,createBlock as r,withKeys as o,withModifiers as i,createVNode as c,createCommentVNode as s,renderSlot as d,toDisplayString as v,Fragment as p,renderList as f,createTextVNode as h,Transition as m,withCtx as g,withDirectives as b,vShow as y}from"vue";function S(e){return-1!==[null,void 0,!1].indexOf(e)}function w(e){return String(e).toLowerCase().trim()}var O={};function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function x(a,u,r){var o=e(a),i=o.options,c=o.mode,s=o.trackBy,d=o.limit,v=o.hideSelected,p=o.createTag,f=o.label,h=o.appendNewTag,m=o.multipleLabel,g=o.object,b=o.loading,y=o.delay,x=o.resolveOnLoad,P=o.minChars,V=o.filterResults,T=o.clearOnSearch,B=o.clearOnSelect,I=o.valueProp,D=o.canDeselect,A=o.max,j=r.internalValue,M=r.externalValue,C=r.currentValue,E=r.search,N=r.blurSearch,$=r.clearSearch,H=r.update,L=r.blurInput,R=r.pointer,K=l([]),F=l([]),J=l(!1),_=t((function(){var e,l=F.value||[];return e=l,"[object Object]"===Object.prototype.toString.call(e)&&(l=Object.keys(l).map((function(e){var t,n=l[e];return q(t={},I.value,e),q(t,s.value,n),q(t,f.value,n),t}))),l=l.map((function(e,l){var t;return"object"===k(e)?e:(q(t={},I.value,l),q(t,s.value,e),q(t,f.value,e),t)})),K.value.length&&(l=l.concat(K.value)),l})),W=t((function(){var e=_.value;return X.value.length&&(e=X.value.concat(e)),E.value&&V.value&&(e=e.filter((function(e){return-1!==w(e[s.value]).indexOf(w(E.value))}))),v.value&&(e=e.filter((function(e){return!se(e)}))),d.value>0&&(e=e.slice(0,d.value)),e})),U=t((function(){switch(c.value){case"single":return!S(j.value[I.value]);case"multiple":case"tags":return!S(j.value)&&j.value.length>0}})),z=t((function(){return void 0!==m&&void 0!==m.value?m.value(j.value):j.value&&j.value.length>1?"".concat(j.value.length," options selected"):"1 option selected"})),G=t((function(){return!_.value.length&&!J.value})),Q=t((function(){return _.value.length>0&&0==W.value.length})),X=t((function(){var e;return!1!==p.value&&E.value?-1!==ce(E.value)?[]:[(e={},q(e,I.value,E.value),q(e,f.value,E.value),q(e,s.value,E.value),e)]:[]})),Y=t((function(){switch(c.value){case"single":return null;case"multiple":case"tags":return[]}})),Z=t((function(){return b.value||J.value})),ee=function(e){switch("object"!==k(e)&&(e=ie(e)),c.value){case"single":H(e);break;case"multiple":case"tags":H(j.value.concat(e))}u.emit("select",te(e))},le=function(e){switch("object"!==k(e)&&(e=ie(e)),c.value){case"single":ae();break;case"tags":case"multiple":H(j.value.filter((function(l){return l[I.value]!=e[I.value]})))}u.emit("deselect",te(e))},te=function(e){return g.value?e:e[I.value]},ne=function(e){le(e)},ae=function(){H(Y.value)},ue=function(e){switch(c.value){case"single":return!S(j.value)&&j.value[I.value]==e[I.value];case"tags":case"multiple":return!S(j.value)&&-1!==j.value.map((function(e){return e[I.value]})).indexOf(e[I.value])}},re=function(e){return!0===e.disabled},oe=function(){return!(void 0===A||-1===A.value||!U.value&&A.value>0)&&j.value.length>=A.value},ie=function(e){return _.value[_.value.map((function(e){return String(e[I.value])})).indexOf(String(e))]},ce=function(e){return _.value.map((function(e){return w(e[s.value])})).indexOf(w(e))},se=function(e){return"tags"===c.value&&v.value&&ue(e)},de=function(e){K.value.push(e)},ve=function(){S(M.value)||(j.value=fe(M.value))},pe=function(e){J.value=!0,i.value(E.value).then((function(l){F.value=l,"function"==typeof e&&e(l),J.value=!1}))},fe=function(e){return S(e)?"single"===c.value?{}:[]:g.value?e:"single"===c.value?ie(e)||{}:e.filter((function(e){return!!ie(e)})).map((function(e){return ie(e)}))};if("single"!==c.value&&!S(M.value)&&!Array.isArray(M.value))throw new Error('v-model must be an array when using "'.concat(c.value,'" mode'));return i&&"function"==typeof i.value?x.value?pe(ve):1==g.value&&ve():(F.value=i.value,ve()),y.value>-1&&n(E,(function(e){e.length<P.value||(J.value=!0,T.value&&(F.value=[]),setTimeout((function(){e==E.value&&i.value(E.value).then((function(l){e==E.value&&(F.value=l,R.value=W.value.filter((function(e){return!0!==e.disabled}))[0]||null,J.value=!1)}))}),y.value))}),{flush:"sync"}),n(M,(function(e){var l,t,n;if(S(e))j.value=fe(e);else switch(c.value){case"single":(g.value?e[I.value]!=j.value[I.value]:e!=j.value[I.value])&&(j.value=fe(e));break;case"multiple":case"tags":l=g.value?e.map((function(e){return e[I.value]})):e,t=j.value.map((function(e){return e[I.value]})),n=t.slice().sort(),l.length===t.length&&l.slice().sort().every((function(e,l){return e===n[l]}))||(j.value=fe(e))}}),{deep:!0}),"function"!=typeof a.options&&(n((function(){return a.options}),(function(e,l){F.value=a.options})),n(_,(function(e,l){if(Object.keys(j.value).length||ve(),e.length&&C.value&&C.value.length){var t;if("single"===c.value){if(t=e[e.map((function(e){return e[I.value]})).indexOf(C.value)],JSON.stringify(t)===JSON.stringify(j.value))return}else if(t=[],C.value.forEach((function(l){t.push(e[e.map((function(e){return e[I.value]})).indexOf(l)])})),function(e,l){var t=e.length===l.length;if(!t)return t;try{e.every((function(e,t){if(JSON.stringify(e)!==JSON.stringify(l[t]))throw O}))}catch(e){if(e!==O)throw e;t=!1}return t}(t,j.value))return;g.value?H(t):j.value=t}}),{flush:"sync",deep:!0,immediate:!1})),{filteredOptions:W,hasSelected:U,multipleLabelText:z,extendedOptions:_,noOptions:G,noResults:Q,resolving:J,busy:Z,select:ee,deselect:le,remove:ne,clear:ae,isSelected:ue,isDisabled:re,isMax:oe,getOption:ie,handleOptionClick:function(e){if(!re(e))switch(c.value){case"single":if(ue(e))return void(D.value&&le(e));ee(e),N(),L();break;case"multiple":if(ue(e))return void le(e);if(oe())return;ee(e),B.value&&$();break;case"tags":if(ue(e))return void le(e);if(oe())return;void 0===ie(e[I.value])&&p.value&&(u.emit("tag",e[I.value]),h.value&&de(e),$()),B.value&&$(),ee(e)}},handleTagRemove:function(e,l){0===l.button?ne(e):l.preventDefault()},refreshOptions:function(e){pe(e)},resolveOptions:pe}}function P(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,l){if(!e)return;if("string"==typeof e)return V(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,l)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,n=new Array(l);t<l;t++)n[t]=e[t];return n}var T={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1}},setup(u,r){const o=function(n,a){var u=e(n),r=u.value,o=u.modelValue,i=u.mode,c=u.valueProp,s=l("single"!==i.value?[]:{}),d=void 0!==a.expose?o:r,v=t((function(){return Object.keys(s.value).length?"single"!==i.value?s.value.map((function(e){return e[c.value]})):s.value[c.value]:s.value})),p=t((function(){return"single"!==i.value?s.value.map((function(e){return e[c.value]})).join(","):s.value[c.value]}));return{internalValue:s,externalValue:d,currentValue:v,textValue:p}}(u,r),i=function(n,a,u){var r=e(n),o=r.searchable,i=(r.id,l(null)),c=t((function(){return o.value?-1:0}));return{multiselect:i,tabindex:c,focusInput:function(){i.value.querySelector(".multiselect-input").focus()},blurInput:function(){i.value.querySelector(".multiselect-input").blur()}}}(u),c={pointer:l(null)},s=function(l,t,n){var a=e(l),u=a.object,r=a.valueProp,o=a.mode,i=n.internalValue,c=function(e){return u.value||S(e)?e:Array.isArray(e)?e.map((function(e){return e[r.value]})):e[r.value]},s=function(e){return S(e)?"single"===o.value?{}:[]:e};return{update:function(e){i.value=s(e);var l=c(e);t.emit("change",l),t.emit("input",l),t.emit("update:modelValue",l)}}}(u,r,{internalValue:o.internalValue}),d=function(a,u,r){var o=e(a),i=o.searchable,c=o.mode,s=r.internalValue,d=l(null),v=l(null),p=t((function(){return d.value?"".concat(d.value.length,"ch"):"tags"===c.value&&-1===[null,void 0].indexOf(s.value)&&s.value.length?"1ch":"100%"}));return n(d,(function(e){u.emit("search-change",e)})),{search:d,input:v,tagsSearchWidth:p,clearSearch:function(){d.value=""},focusSearch:function(){v.value.focus()},blurSearch:function(){i.value&&v.value.blur()}}}(u,r,{internalValue:o.internalValue}),v=function(n,a,u){var r=e(n),o=r.maxHeight,i=r.disabled,c=r.searchable,s=u.multiselect,d=u.blurInput,v=u.blurSearch,p=u.focusInput,f=u.focusSearch,h=l(!1),m=t((function(){return"".concat(o.value,"px")}));return{isOpen:h,contentMaxHeight:m,openDropdown:function(){i.value||(h.value=!0,a.emit("open"))},closeDropdown:function(){h.value=!1,a.emit("close")},open:function(){c&&c.value?f():p()},close:function(){c&&c.value?v():d()},handleInputMousedown:function(e){h.value&&!c.value&&(s.value.querySelector(".multiselect-input").dispatchEvent(new Event("blur")),s.value.querySelector(".multiselect-input").blur(),e.preventDefault())}}}(u,r,{multiselect:i.multiselect,blurInput:i.blurInput,blurSearch:d.blurSearch,focusInput:i.focusInput,focusSearch:d.focusSearch}),p=x(u,r,{externalValue:o.externalValue,internalValue:o.internalValue,currentValue:o.currentValue,search:d.search,blurSearch:d.blurSearch,clearSearch:d.clearSearch,update:s.update,blurInput:i.blurInput,pointer:c.pointer}),f=function(l,u,r){var o=e(l),i=o.id,c=o.valueProp,s=r.filteredOptions,d=r.handleOptionClick,v=r.search,p=r.pointer,f=t((function(){return s.value.filter((function(e){return!0!==e.disabled}))})),h=function(e){p.value=e},m=function(){p.value=f.value[0]||null},g=function(){p.value=null},b=function(){var e=document.getElementById(i.value).querySelector(".is-pointed");if(e){var l=e.parentElement;e.offsetTop+e.offsetHeight>l.clientHeight+l.scrollTop&&(l.scrollTop=e.offsetTop+e.offsetHeight-l.clientHeight),e.offsetTop<l.scrollTop&&(l.scrollTop=e.offsetTop)}};return n(v,(function(e){m()})),{pointer:p,isPointed:function(e){return!!p.value&&p.value[c.value]==e[c.value]},setPointer:h,setPointerFirst:m,clearPointer:g,selectPointer:function(){p.value&&!0!==p.value.disabled?(d(p.value),g()):g()},forwardPointer:function(){if(null===p.value)h(f.value[0]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])+1;f.value.length<=e&&(e=0),h(f.value[e]||null)}a((function(){b()}))},backwardPointer:function(){if(null===p.value)h(f.value[f.value.length-1]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])-1;e<0&&(e=f.value.length-1),h(f.value[e]||null)}a((function(){b()}))}}}(u,0,{filteredOptions:p.filteredOptions,handleOptionClick:p.handleOptionClick,search:d.search,pointer:c.pointer}),h=function(l,t,n){var u=e(l),r=u.mode,o=u.addTagOn,i=u.createTag,c=n.internalValue,s=n.update,d=n.closeDropdown,v=n.clearPointer,p=n.search,f=n.selectPointer;return{handleBackspace:function(e){"single"!==r.value&&s(P(c.value).slice(0,-1))},handleEsc:function(e){d(),v(),e.target.blur()},handleSearchBackspace:function(e){""!==p.value&&e.stopPropagation()},handleSearchInput:function(e){p.value=e.target.value},handleAddTag:function(e){13!==e.keyCode||-1===o.value.indexOf("enter")&&i.value?32===e.keyCode&&-1!==o.value.indexOf("space")&&i.value&&(p.value=p.value.trim(),a((function(){f()}))):f()}}}(u,0,{internalValue:o.internalValue,update:s.update,closeDropdown:v.closeDropdown,clearPointer:f.clearPointer,search:d.search,selectPointer:f.selectPointer});return{...o,...v,...i,...c,...s,...d,...p,...f,...h}}};const B={class:"multiselect-single-label"},I={class:"multiselect-multiple-label"},D={key:2,class:"multiselect-search"},A={key:3,class:"multiselect-tags"},j={class:"multiselect-tag"},M={class:"multiselect-placeholder"},C=c("span",{class:"multiselect-caret"},null,-1),E=c("span",{class:"multiselect-spinner"},null,-1),N={class:"multiselect-no-options"},$={class:"multiselect-no-results"};T.render=function(e,l,t,n,a,S){return u(),r("div",{class:["multiselect",[`is-${t.mode}`,{"is-open":e.isOpen,"is-searchable":t.searchable,"is-disabled":t.disabled,"no-caret":!t.caret}]],id:t.id,onKeydown:l[29]||(l[29]=o(i((()=>{}),["prevent"]),["enter"])),ref:"multiselect"},[c("div",{class:"multiselect-input",tabindex:e.tabindex,onMousedown:l[20]||(l[20]=(...l)=>e.handleInputMousedown&&e.handleInputMousedown(...l)),onFocus:l[21]||(l[21]=(...l)=>e.openDropdown&&e.openDropdown(...l)),onBlur:l[22]||(l[22]=(...l)=>e.closeDropdown&&e.closeDropdown(...l)),onKeyup:[l[23]||(l[23]=o(((...l)=>e.handleEsc&&e.handleEsc(...l)),["esc"])),l[24]||(l[24]=o(((...l)=>e.selectPointer&&e.selectPointer(...l)),["enter"]))],onKeydown:[l[25]||(l[25]=o(i(((...l)=>e.handleBackspace&&e.handleBackspace(...l)),["prevent"]),["delete"])),l[26]||(l[26]=o(i(((...l)=>e.backwardPointer&&e.backwardPointer(...l)),["prevent"]),["up"])),l[27]||(l[27]=o(i(((...l)=>e.forwardPointer&&e.forwardPointer(...l)),["prevent"]),["down"]))]},[s(" Single label "),"single"==t.mode&&e.hasSelected&&!e.search&&e.internalValue?d(e.$slots,"singlelabel",{key:0,value:e.internalValue},(()=>[c("div",B,v(e.internalValue[t.label]),1)])):s("v-if",!0),s(" Multiple label "),"multiple"==t.mode&&e.hasSelected&&!e.search?d(e.$slots,"multiplelabel",{key:1,values:e.internalValue},(()=>[c("div",I,v(e.multipleLabelText),1)])):s("v-if",!0),s(" Search "),"tags"!==t.mode&&t.searchable&&!t.disabled?(u(),r("div",D,[c("input",{modelValue:e.search,value:e.search,onFocus:l[1]||(l[1]=i(((...l)=>e.openDropdown&&e.openDropdown(...l)),["stop"])),onBlur:l[2]||(l[2]=i(((...l)=>e.closeDropdown&&e.closeDropdown(...l)),["stop"])),onKeyup:[l[3]||(l[3]=o(i(((...l)=>e.handleEsc&&e.handleEsc(...l)),["stop"]),["esc"])),l[4]||(l[4]=o(i(((...l)=>e.selectPointer&&e.selectPointer(...l)),["stop"]),["enter"]))],onKeydown:[l[5]||(l[5]=o(((...l)=>e.handleSearchBackspace&&e.handleSearchBackspace(...l)),["delete"])),l[6]||(l[6]=o(i(((...l)=>e.backwardPointer&&e.backwardPointer(...l)),["stop"]),["up"])),l[7]||(l[7]=o(i(((...l)=>e.forwardPointer&&e.forwardPointer(...l)),["stop"]),["down"]))],onInput:l[8]||(l[8]=(...l)=>e.handleSearchInput&&e.handleSearchInput(...l)),ref:"input"},null,40,["modelValue","value"])])):s("v-if",!0),s(" Tags (with search) "),"tags"==t.mode?(u(),r("div",A,[(u(!0),r(p,null,f(e.internalValue,((n,a,o)=>(u(),r("span",{key:o},[d(e.$slots,"tag",{option:n,handleTagRemove:e.handleTagRemove,disabled:t.disabled},(()=>[c("div",j,[h(v(n[t.label])+" ",1),t.disabled?s("v-if",!0):(u(),r("i",{key:0,onClick:l[9]||(l[9]=i((()=>{}),["prevent"])),onMousedown:i((l=>e.handleTagRemove(n,l)),["prevent","stop"])},null,40,["onMousedown"]))])]))])))),128)),t.searchable&&!t.disabled?(u(),r("div",{key:0,class:"multiselect-search",style:{width:e.tagsSearchWidth}},[c("input",{modelValue:e.search,value:e.search,onFocus:l[10]||(l[10]=i(((...l)=>e.openDropdown&&e.openDropdown(...l)),["stop"])),onBlur:l[11]||(l[11]=i(((...l)=>e.closeDropdown&&e.closeDropdown(...l)),["stop"])),onKeyup:[l[12]||(l[12]=o(i(((...l)=>e.handleEsc&&e.handleEsc(...l)),["stop"]),["esc"])),l[13]||(l[13]=o(i(((...l)=>e.handleAddTag&&e.handleAddTag(...l)),["stop"]),["enter"])),l[14]||(l[14]=o(i(((...l)=>e.handleAddTag&&e.handleAddTag(...l)),["stop"]),["space"]))],onKeydown:[l[15]||(l[15]=o(((...l)=>e.handleSearchBackspace&&e.handleSearchBackspace(...l)),["delete"])),l[16]||(l[16]=o(i(((...l)=>e.backwardPointer&&e.backwardPointer(...l)),["stop"]),["up"])),l[17]||(l[17]=o(i(((...l)=>e.forwardPointer&&e.forwardPointer(...l)),["stop"]),["down"]))],onInput:l[18]||(l[18]=(...l)=>e.handleSearchInput&&e.handleSearchInput(...l)),style:{width:e.tagsSearchWidth},ref:"input"},null,44,["modelValue","value"])],4)):s("v-if",!0)])):s("v-if",!0),s(" Placeholder "),!t.placeholder||e.hasSelected||e.search?s("v-if",!0):d(e.$slots,"placeholder",{key:4},(()=>[c("div",M,v(t.placeholder),1)])),t.caret&&!e.busy?d(e.$slots,"caret",{key:5},(()=>[C])):s("v-if",!0),c(m,{name:"multiselect-loading"},{default:g((()=>[e.busy?d(e.$slots,"spinner",{key:0},(()=>[E])):s("v-if",!0)])),_:1}),e.hasSelected&&!t.disabled?d(e.$slots,"clear",{key:6,clear:e.clear},(()=>[c("a",{class:"multiselect-clear",onClick:l[19]||(l[19]=i(((...l)=>e.clear&&e.clear(...l)),["prevent"]))})])):s("v-if",!0)],40,["tabindex"]),s(" Options "),e.resolving&&t.clearOnSearch?s("v-if",!0):(u(),r(m,{key:0,name:"multiselect",onAfterLeave:e.clearSearch},{default:g((()=>[b(c("div",{class:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[d(e.$slots,"beforelist"),(u(!0),r(p,null,f(e.filteredOptions,((n,a,o)=>(u(),r("span",{tabindex:-1,class:["multiselect-option",{"is-pointed":e.isPointed(n),"is-selected":e.isSelected(n),"is-disabled":e.isDisabled(n)}],key:o,onMousedown:l[28]||(l[28]=i((()=>{}),["prevent"])),onMouseenter:l=>e.setPointer(n),onClick:i((l=>e.handleOptionClick(n)),["stop","prevent"])},[d(e.$slots,"option",{option:n,search:e.search},(()=>[c("span",null,v(n[t.label]),1)]))],42,["onMouseenter","onClick"])))),128)),b(c("span",null,[d(e.$slots,"nooptions",{},(()=>[c("div",N,v(t.noOptionsText),1)]))],512),[[y,e.noOptions]]),b(c("span",null,[d(e.$slots,"noresults",{},(()=>[c("div",$,v(t.noResultsText),1)]))],512),[[y,e.noResults]]),d(e.$slots,"afterlist")],4),[[y,e.isOpen&&t.showOptions]])])),_:3},8,["onAfterLeave"])),s(" Hacky input element to show HTML5 required warning "),t.required?(u(),r("input",{key:1,class:"multiselect-fake-input",tabindex:"-1",value:e.textValue,required:""},null,8,["value"])):s("v-if",!0)],42,["id"])},T.__file="src/Multiselect.vue";export default T;
