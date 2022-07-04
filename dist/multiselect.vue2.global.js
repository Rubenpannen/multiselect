var VueformMultiselect=function(e){"use strict";function a(e){return-1!==[null,void 0].indexOf(e)}function l(l,t,u){const{object:n,valueProp:i,mode:r}=e.toRefs(l),o=e.getCurrentInstance().proxy,s=u.iv,c=e=>n.value||a(e)?e:Array.isArray(e)?e.map((e=>e[i.value])):e[i.value],v=e=>a(e)?"single"===r.value?{}:[]:e;return{update:e=>{s.value=v(e);const a=c(e);t.emit("change",a,o),t.emit("input",a),t.emit("update:modelValue",a)}}}function t(a,l){const{value:t,modelValue:u,mode:n,valueProp:i}=e.toRefs(a),r=e.ref("single"!==n.value?[]:{}),o=void 0!==l.expose?u:t,s=e.computed((()=>"single"===n.value?r.value[i.value]:r.value.map((e=>e[i.value])))),c=e.computed((()=>"single"!==n.value?r.value.map((e=>e[i.value])).join(","):r.value[i.value]));return{iv:r,internalValue:r,ev:o,externalValue:o,textValue:c,plainValue:s}}function u(a,l,t){const{regex:u}=e.toRefs(a),n=e.getCurrentInstance().proxy,i=t.isOpen,r=t.open,o=e.ref(null),s=e.ref(null);return e.watch(o,(e=>{!i.value&&e&&r(),l.emit("search-change",e,n)})),{search:o,input:s,clearSearch:()=>{o.value=""},handleSearchInput:e=>{o.value=e.target.value},handleKeypress:e=>{if(u&&u.value){let a=u.value;"string"==typeof a&&(a=new RegExp(a)),e.key.match(a)||e.preventDefault()}},handlePaste:e=>{if(u&&u.value){let a=(e.clipboardData||window.clipboardData).getData("Text"),l=u.value;"string"==typeof l&&(l=new RegExp(l)),a.split("").every((e=>!!e.match(l)))||e.preventDefault()}l.emit("paste",e,n)}}}function n(a,l,t){const{groupSelect:u,mode:n,groups:i,disabledProp:r}=e.toRefs(a),o=e.ref(null),s=e=>{void 0===e||null!==e&&e[r.value]||i.value&&e&&e.group&&("single"===n.value||!u.value)||(o.value=e)};return{pointer:o,setPointer:s,clearPointer:()=>{s(null)}}}function i(e,a=!0){return a?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase().trim()}function r(l,t,u){const{options:n,mode:r,trackBy:o,limit:s,hideSelected:c,createTag:v,createOption:p,label:d,appendNewTag:f,appendNewOption:m,multipleLabel:g,object:h,loading:b,delay:_,resolveOnLoad:y,minChars:O,filterResults:S,clearOnSearch:L,clearOnSelect:w,valueProp:P,canDeselect:x,max:T,strict:q,closeOnSelect:k,groups:E,reverse:I,infinite:R,groupOptions:C,groupHideEmpty:B,groupSelect:D,onCreate:V,disabledProp:A,searchStart:j}=e.toRefs(l),N=e.getCurrentInstance().proxy,M=u.iv,H=u.ev,F=u.search,$=u.clearSearch,G=u.update,K=u.pointer,W=u.clearPointer,U=u.focus,X=u.deactivate,z=u.close,J=e.ref([]),Q=e.ref([]),Y=e.ref(!1),Z=e.ref(null),ee=e.ref(R.value&&-1===s.value?10:s.value),ae=e.computed((()=>v.value||p.value||!1)),le=e.computed((()=>void 0!==f.value?f.value:void 0===m.value||m.value)),te=e.computed((()=>{if(E.value){let e=Q.value||[],a=[];return e.forEach((e=>{Re(e[C.value]).forEach((l=>{a.push(Object.assign({},l,e[A.value]?{[A.value]:!0}:{}))}))})),a}{let e=Re(Q.value||[]);return J.value.length&&(e=e.concat(J.value)),e}})),ue=e.computed((()=>E.value?Ee((Q.value||[]).map((e=>{const a=Re(e[C.value]);return{...e,group:!0,[C.value]:Ie(a,!1).map((a=>Object.assign({},a,e[A.value]?{[A.value]:!0}:{}))),__VISIBLE__:Ie(a).map((a=>Object.assign({},a,e[A.value]?{[A.value]:!0}:{})))}}))):[])),ne=e.computed((()=>{let e=te.value;return I.value&&(e=e.reverse()),ve.value.length&&(e=ve.value.concat(e)),Ie(e)})),ie=e.computed((()=>{let e=ne.value;return ee.value>0&&(e=e.slice(0,ee.value)),e})),re=e.computed((()=>{switch(r.value){case"single":return!a(M.value[P.value]);case"multiple":case"tags":return!a(M.value)&&M.value.length>0}})),oe=e.computed((()=>void 0!==g&&void 0!==g.value?g.value(M.value,N):M.value&&M.value.length>1?`${M.value.length} options selected`:"1 option selected")),se=e.computed((()=>!te.value.length&&!Y.value&&!ve.value.length)),ce=e.computed((()=>te.value.length>0&&0==ie.value.length&&(F.value&&E.value||!E.value))),ve=e.computed((()=>!1!==ae.value&&F.value?-1!==qe(F.value)?[]:[{[P.value]:F.value,[d.value]:F.value,[pe.value]:F.value,__CREATE__:!0}]:[])),pe=e.computed((()=>o.value||d.value)),de=e.computed((()=>{switch(r.value){case"single":return null;case"multiple":case"tags":return[]}})),fe=e.computed((()=>b.value||Y.value)),me=e=>{switch("object"!=typeof e&&(e=Te(e)),r.value){case"single":G(e);break;case"multiple":case"tags":G(M.value.concat(e))}t.emit("select",he(e),e,N)},ge=e=>{switch("object"!=typeof e&&(e=Te(e)),r.value){case"single":_e();break;case"tags":case"multiple":G(Array.isArray(e)?M.value.filter((a=>-1===e.map((e=>e[P.value])).indexOf(a[P.value]))):M.value.filter((a=>a[P.value]!=e[P.value])))}t.emit("deselect",he(e),e,N)},he=e=>h.value?e:e[P.value],be=e=>{ge(e)},_e=()=>{t.emit("clear",N),G(de.value)},ye=e=>{if(void 0!==e.group)return"single"!==r.value&&(xe(e[C.value])&&e[C.value].length);switch(r.value){case"single":return!a(M.value)&&M.value[P.value]==e[P.value];case"tags":case"multiple":return!a(M.value)&&-1!==M.value.map((e=>e[P.value])).indexOf(e[P.value])}},Oe=e=>!0===e[A.value],Se=()=>!(void 0===T||-1===T.value||!re.value&&T.value>0)&&M.value.length>=T.value,Le=e=>{switch(e.__CREATE__&&delete(e={...e}).__CREATE__,r.value){case"single":if(e&&ye(e))return void(x.value&&ge(e));e&&we(e),w.value&&$(),k.value&&(W(),z()),e&&me(e);break;case"multiple":if(e&&ye(e))return void ge(e);if(Se())return;e&&(we(e),me(e)),w.value&&$(),c.value&&W(),k.value&&z();break;case"tags":if(e&&ye(e))return void ge(e);if(Se())return;e&&we(e),w.value&&$(),e&&me(e),c.value&&W(),k.value&&z()}k.value||U()},we=e=>{void 0===Te(e[P.value])&&ae.value&&(t.emit("tag",e[P.value],N),t.emit("option",e[P.value],N),le.value&&ke(e),$())},Pe=e=>void 0===e.find((e=>!ye(e)&&!e[A.value])),xe=e=>void 0===e.find((e=>!ye(e))),Te=e=>te.value[te.value.map((e=>String(e[P.value]))).indexOf(String(e))],qe=(e,a)=>te.value.map((e=>parseInt(e[pe.value])==e[pe.value]?parseInt(e[pe.value]):e[pe.value])).indexOf(parseInt(e)==e?parseInt(e):e),ke=e=>{J.value.push(e)},Ee=e=>B.value?e.filter((e=>F.value?e.__VISIBLE__.length:e[C.value].length)):e.filter((e=>!F.value||e.__VISIBLE__.length)),Ie=(e,a=!0)=>{let l=e;return F.value&&S.value&&(l=l.filter((e=>j.value?i(e[pe.value],q.value).startsWith(i(F.value,q.value)):-1!==i(e[pe.value],q.value).indexOf(i(F.value,q.value))))),c.value&&a&&(l=l.filter((e=>!(e=>-1!==["tags","multiple"].indexOf(r.value)&&c.value&&ye(e))(e)))),l},Re=e=>{let a=e;var l;return l=a,"[object Object]"===Object.prototype.toString.call(l)&&(a=Object.keys(a).map((e=>{let l=a[e];return{[P.value]:e,[pe.value]:l,[d.value]:l}}))),a=a.map((e=>"object"==typeof e?e:{[P.value]:e,[pe.value]:e,[d.value]:e})),a},Ce=()=>{a(H.value)||(M.value=Ve(H.value))},Be=e=>(Y.value=!0,new Promise(((a,l)=>{n.value(F.value,N).then((a=>{Q.value=a||[],"function"==typeof e&&e(a),Y.value=!1})).catch((e=>{console.error(e),Q.value=[],Y.value=!1})).finally((()=>{a()}))}))),De=()=>{if(re.value)if("single"===r.value){let e=Te(M.value[P.value]);if(void 0!==e){let a=e[d.value];M.value[d.value]=a,h.value&&(H.value[d.value]=a)}}else M.value.forEach(((e,a)=>{let l=Te(M.value[a][P.value]);if(void 0!==l){let e=l[d.value];M.value[a][d.value]=e,h.value&&(H.value[a][d.value]=e)}}))},Ve=e=>a(e)?"single"===r.value?{}:[]:h.value?e:"single"===r.value?Te(e)||{}:e.filter((e=>!!Te(e))).map((e=>Te(e))),Ae=()=>{Z.value=e.watch(F,(e=>{e.length<O.value||!e&&0!==O.value||(Y.value=!0,L.value&&(Q.value=[]),setTimeout((()=>{e==F.value&&n.value(F.value,N).then((a=>{e!=F.value&&F.value||(Q.value=a,K.value=ie.value.filter((e=>!0!==e[A.value]))[0]||null,Y.value=!1)})).catch((e=>{console.error(e)}))}),_.value))}),{flush:"sync"})};if("single"!==r.value&&!a(H.value)&&!Array.isArray(H.value))throw new Error(`v-model must be an array when using "${r.value}" mode`);return n&&"function"==typeof n.value?y.value?Be(Ce):1==h.value&&Ce():(Q.value=n.value,Ce()),_.value>-1&&Ae(),e.watch(_,((e,a)=>{Z.value&&Z.value(),e>=0&&Ae()})),e.watch(H,(e=>{if(a(e))M.value=Ve(e);else switch(r.value){case"single":(h.value?e[P.value]!=M.value[P.value]:e!=M.value[P.value])&&(M.value=Ve(e));break;case"multiple":case"tags":(function(e,a){const l=a.slice().sort();return e.length===a.length&&e.slice().sort().every((function(e,a){return e===l[a]}))})(h.value?e.map((e=>e[P.value])):e,M.value.map((e=>e[P.value])))||(M.value=Ve(e))}}),{deep:!0}),e.watch(n,((e,a)=>{"function"==typeof l.options?y.value&&Be():(Q.value=l.options,Object.keys(M.value).length||Ce(),De())})),e.watch(d,De),{pfo:ne,fo:ie,filteredOptions:ie,hasSelected:re,multipleLabelText:oe,eo:te,extendedOptions:te,fg:ue,filteredGroups:ue,noOptions:se,noResults:ce,resolving:Y,busy:fe,offset:ee,select:me,deselect:ge,remove:be,selectAll:()=>{"single"!==r.value&&me(ie.value)},clear:_e,isSelected:ye,isDisabled:Oe,isMax:Se,getOption:Te,handleOptionClick:e=>{if(!Oe(e))return V&&V.value&&!ye(e)&&e.__CREATE__&&(delete(e={...e}).__CREATE__,(e=V.value(e,N))instanceof Promise)?(Y.value=!0,void e.then((e=>{Y.value=!1,Le(e)}))):void Le(e)},handleGroupClick:e=>{if(!Oe(e)&&"single"!==r.value&&D.value){switch(r.value){case"multiple":case"tags":Pe(e[C.value])?ge(e[C.value]):me(e[C.value].filter((e=>-1===M.value.map((e=>e[P.value])).indexOf(e[P.value]))).filter((e=>!e[A.value])).filter(((e,a)=>M.value.length+1+a<=T.value||-1===T.value)))}k.value&&X()}},handleTagRemove:(e,a)=>{0===a.button?be(e):a.preventDefault()},refreshOptions:e=>{Be(e)},resolveOptions:Be,refreshLabels:De}}function o(a,l,t){const{valueProp:u,showOptions:n,searchable:i,groupLabel:r,groups:o,mode:s,groupSelect:c,disabledProp:v}=e.toRefs(a),p=t.fo,d=t.fg,f=t.handleOptionClick,m=t.handleGroupClick,g=t.search,h=t.pointer,b=t.setPointer,_=t.clearPointer,y=t.multiselect,O=t.isOpen,S=e.computed((()=>p.value.filter((e=>!e[v.value])))),L=e.computed((()=>d.value.filter((e=>!e[v.value])))),w=e.computed((()=>"single"!==s.value&&c.value)),P=e.computed((()=>h.value&&h.value.group)),x=e.computed((()=>V(h.value))),T=e.computed((()=>{const e=P.value?h.value:V(h.value),a=L.value.map((e=>e[r.value])).indexOf(e[r.value]);let l=L.value[a-1];return void 0===l&&(l=k.value),l})),q=e.computed((()=>{let e=L.value.map((e=>e.label)).indexOf(P.value?h.value[r.value]:V(h.value)[r.value])+1;return L.value.length<=e&&(e=0),L.value[e]})),k=e.computed((()=>[...L.value].slice(-1)[0])),E=e.computed((()=>h.value.__VISIBLE__.filter((e=>!e[v.value]))[0])),I=e.computed((()=>{const e=x.value.__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[u.value])).indexOf(h.value[u.value])-1]})),R=e.computed((()=>{const e=V(h.value).__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[u.value])).indexOf(h.value[u.value])+1]})),C=e.computed((()=>[...T.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),B=e.computed((()=>[...k.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),D=()=>{b(S.value[0]||null)},V=e=>L.value.find((a=>-1!==a.__VISIBLE__.map((e=>e[u.value])).indexOf(e[u.value]))),A=()=>{let e=y.value.querySelector("[data-pointed]");if(!e)return;let a=e.parentElement.parentElement;o.value&&(a=P.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>a.clientHeight+a.scrollTop&&(a.scrollTop=e.offsetTop+e.offsetHeight-a.clientHeight),e.offsetTop<a.scrollTop&&(a.scrollTop=e.offsetTop)};return e.watch(g,(e=>{i.value&&(e.length&&n.value?D():_())})),e.watch(O,(a=>{if(a){let a=y.value.querySelectorAll("[data-selected]")[0];if(!a)return;let l=a.parentElement.parentElement;e.nextTick((()=>{l.scrollTop>0||(l.scrollTop=a.offsetTop)}))}})),{pointer:h,canPointGroups:w,isPointed:e=>!(!h.value||!(!e.group&&h.value[u.value]==e[u.value]||void 0!==e.group&&h.value[r.value]==e[r.value]))||void 0,setPointerFirst:D,selectPointer:()=>{h.value&&!0!==h.value[v.value]&&(P.value?m(h.value):f(h.value))},forwardPointer:()=>{if(null===h.value)b((o.value&&w.value?L.value[0]:S.value[0])||null);else if(o.value&&w.value){let e=P.value?E.value:R.value;void 0===e&&(e=q.value),b(e||null)}else{let e=S.value.map((e=>e[u.value])).indexOf(h.value[u.value])+1;S.value.length<=e&&(e=0),b(S.value[e]||null)}e.nextTick((()=>{A()}))},backwardPointer:()=>{if(null===h.value){let e=S.value[S.value.length-1];o.value&&w.value&&(e=B.value,void 0===e&&(e=k.value)),b(e||null)}else if(o.value&&w.value){let e=P.value?C.value:I.value;void 0===e&&(e=P.value?T.value:x.value),b(e||null)}else{let e=S.value.map((e=>e[u.value])).indexOf(h.value[u.value])-1;e<0&&(e=S.value.length-1),b(S.value[e]||null)}e.nextTick((()=>{A()}))}}}function s(a,l,t){const{disabled:u}=e.toRefs(a),n=e.getCurrentInstance().proxy,i=e.ref(!1);return{isOpen:i,open:()=>{i.value||u.value||(i.value=!0,l.emit("open",n))},close:()=>{i.value&&(i.value=!1,l.emit("close",n))}}}function c(a,l,t){const{searchable:u,disabled:n}=e.toRefs(a),i=t.input,r=t.open,o=t.close,s=t.clearSearch,c=t.isOpen,v=e.ref(null),p=e.ref(null),d=e.ref(!1),f=e.computed((()=>u.value||n.value?-1:0)),m=()=>{u.value&&i.value.blur(),v.value.blur()},g=()=>{u.value&&!n.value&&i.value.focus()},h=()=>{n.value||(d.value=!0,r())},b=()=>{d.value=!1,setTimeout((()=>{d.value||(o(),s())}),1)};return{multiselect:v,tags:p,tabindex:f,isActive:d,blur:m,focus:g,handleFocus:()=>{g()},activate:h,deactivate:b,handleCaretClick:()=>{b(),m()},handleMousedown:e=>{c.value&&(e.target.isEqualNode(v.value)||e.target.isEqualNode(p.value))?setTimeout((()=>{b()}),0):document.activeElement.isEqualNode(v.value)&&!c.value&&h()}}}function v(a,l,t){const{mode:u,addTagOn:n,openDirection:i,searchable:r,showOptions:o,valueProp:s,groups:c,addOptionOn:v,createTag:p,createOption:d,reverse:f}=e.toRefs(a),m=e.getCurrentInstance().proxy,g=t.iv,h=t.update,b=t.search,_=t.setPointer,y=t.selectPointer,O=t.backwardPointer,S=t.forwardPointer,L=t.isOpen,w=t.open,P=t.blur,x=t.fo,T=e.computed((()=>p.value||d.value||!1)),q=e.computed((()=>void 0!==n.value?n.value:void 0!==v.value?v.value:["enter"])),k=()=>{"tags"===u.value&&!o.value&&T.value&&r.value&&!c.value&&_(x.value[x.value.map((e=>e[s.value])).indexOf(b.value)])};return{handleKeydown:e=>{switch(l.emit("keydown",e,m),e.key){case"Backspace":if("single"===u.value)return;if(r.value&&-1===[null,""].indexOf(b.value))return;if(0===g.value.length)return;h([...g.value].slice(0,-1));break;case"Enter":if(e.preventDefault(),-1===q.value.indexOf("enter")&&T.value)return;k(),y();break;case" ":if(!T.value&&!r.value)return e.preventDefault(),k(),void y();if(!T.value)return!1;if(-1===q.value.indexOf("space")&&T.value)return;e.preventDefault(),k(),y();break;case"Tab":case";":case",":if(-1===q.value.indexOf(e.key.toLowerCase())||!T.value)return;k(),y(),e.preventDefault();break;case"Escape":P();break;case"ArrowUp":if(e.preventDefault(),!o.value)return;L.value||w(),O();break;case"ArrowDown":if(e.preventDefault(),!o.value)return;L.value||w(),S()}},handleKeyup:e=>{l.emit("keyup",e,m)},preparePointer:k}}function p(a,l,t){const{classes:u,disabled:n,openDirection:i,showOptions:r}=e.toRefs(a),o=t.isOpen,s=t.isPointed,c=t.isSelected,v=t.isDisabled,p=t.isActive,d=t.canPointGroups,f=t.resolving,m=t.fo,g=e.computed((()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer",...u.value}))),h=e.computed((()=>!!(o.value&&r.value&&(!f.value||f.value&&m.value.length))));return{classList:e.computed((()=>{const e=g.value;return{container:[e.container].concat(n.value?e.containerDisabled:[]).concat(h.value&&"top"===i.value?e.containerOpenTop:[]).concat(h.value&&"top"!==i.value?e.containerOpen:[]).concat(p.value?e.containerActive:[]),spacer:e.spacer,singleLabel:e.singleLabel,singleLabelText:e.singleLabelText,multipleLabel:e.multipleLabel,search:e.search,tags:e.tags,tag:[e.tag].concat(n.value?e.tagDisabled:[]),tagRemove:e.tagRemove,tagRemoveIcon:e.tagRemoveIcon,tagsSearchWrapper:e.tagsSearchWrapper,tagsSearch:e.tagsSearch,tagsSearchCopy:e.tagsSearchCopy,placeholder:e.placeholder,caret:[e.caret].concat(o.value?e.caretOpen:[]),clear:e.clear,clearIcon:e.clearIcon,spinner:e.spinner,inifinite:e.inifinite,inifiniteSpinner:e.inifiniteSpinner,dropdown:[e.dropdown].concat("top"===i.value?e.dropdownTop:[]).concat(o.value&&r.value&&h.value?[]:e.dropdownHidden),options:[e.options].concat("top"===i.value?e.optionsTop:[]),group:e.group,groupLabel:a=>{let l=[e.groupLabel];return s(a)?l.push(c(a)?e.groupLabelSelectedPointed:e.groupLabelPointed):c(a)&&d.value?l.push(v(a)?e.groupLabelSelectedDisabled:e.groupLabelSelected):v(a)&&l.push(e.groupLabelDisabled),d.value&&l.push(e.groupLabelPointable),l},groupOptions:e.groupOptions,option:(a,l)=>{let t=[e.option];return s(a)?t.push(c(a)?e.optionSelectedPointed:e.optionPointed):c(a)?t.push(v(a)?e.optionSelectedDisabled:e.optionSelected):(v(a)||l&&v(l))&&t.push(e.optionDisabled),t},noOptions:e.noOptions,noResults:e.noResults,fakeInput:e.fakeInput}})),showDropdown:h}}function d(a,l,t){const{limit:u,infinite:n}=e.toRefs(a),i=t.isOpen,r=t.offset,o=t.search,s=t.pfo,c=t.eo,v=e.ref(null),p=e.ref(null),d=e.computed((()=>r.value<s.value.length)),f=a=>{const{isIntersecting:l,target:t}=a[0];if(l){const a=t.offsetParent,l=a.scrollTop;r.value+=-1==u.value?10:u.value,e.nextTick((()=>{a.scrollTop=l}))}},m=()=>{i.value&&r.value<s.value.length?v.value.observe(p.value):!i.value&&v.value&&v.value.disconnect()};return e.watch(i,(()=>{n.value&&m()})),e.watch(o,(()=>{n.value&&(r.value=u.value,m())}),{flush:"post"}),e.watch(c,(()=>{n.value&&m()}),{immediate:!1,flush:"post"}),e.onMounted((()=>{window&&window.IntersectionObserver&&(v.value=new IntersectionObserver(f))})),{hasMore:d,infiniteLoader:p}}function f(a,l,t){const{placeholder:u,id:n,valueProp:i,label:r,mode:o,groupLabel:s}=e.toRefs(a),c=t.pointer,v=t.iv,p=t.isSelected,d=t.hasSelected,f=t.multipleLabelText,m=e.ref(null),g=e.computed((()=>{let e=[];return n&&n.value&&e.push(n.value),e.push("multiselect-options"),e.join("-")})),h=e.computed((()=>{let e=[];if(n&&n.value&&e.push(n.value),e.push("multiselect-option"),c.value&&void 0!==c.value[i.value])return e.push(c.value[i.value]),e.join("-")})),b=e.computed((()=>{let e=[];return m.value&&e.push(m.value),u.value&&!d.value&&e.push(u.value),"single"===o.value&&v.value&&void 0!==v.value[r.value]&&e.push(v.value[r.value]),"multiple"===o.value&&d.value&&e.push(f.value),"tags"===o.value&&d.value&&e.push(...v.value.map((e=>e[r.value]))),e.join(", ")})),_=e.computed((()=>b.value));return e.onMounted((()=>{if(n&&n.value&&document&&document.querySelector){let e=document.querySelector(`[for="${n.value}"]`);m.value=e?e.innerText:null}})),{ariaOwns:g,ariaLabel:b,ariaPlaceholder:_,ariaActiveDescendant:h,ariaOptionId:e=>{let a=[];return n&&n.value&&a.push(n.value),a.push("multiselect-option"),a.push(e[i.value]),a.join("-")},ariaOptionLabel:e=>{let a=[];return p(e)&&a.push("✓"),a.push(e[r.value]),a.join(" ")},ariaGroupLabel:e=>{let a=[];return a.push(e[s.value]),a.join(" ")}}}function m(e,a,l,t,u,n,i,r,o,s){"boolean"!=typeof i&&(o=r,r=i,i=!1);const c="function"==typeof l?l.options:l;let v;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,u&&(c.functional=!0)),t&&(c._scopeId=t),n?(v=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=v):a&&(v=i?function(e){a.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){a.call(this,r(e))}),v)if(c.functional){const e=c.render;c.render=function(a,l){return v.call(l),e(a,l)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,v):[v]}return l}const g={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1}},setup:(e,a)=>function(e,a,l,t={}){return l.forEach((l=>{l&&(t={...t,...l(e,a,t)})})),t}(e,a,[t,n,s,u,l,c,r,d,o,v,p,f])};var h=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{ref:"multiselect",class:e.classList.container,attrs:{tabindex:e.tabindex,id:e.searchable?void 0:e.id,dir:e.rtl?"rtl":void 0,"aria-owns":e.ariaOwns,"aria-expanded":e.isOpen,"aria-label":e.ariaLabel,"aria-placeholder":e.ariaPlaceholder,"aria-activedescendant":e.ariaActiveDescendant,role:"combobox"},on:{focusin:e.activate,focusout:e.deactivate,keydown:e.handleKeydown,keyup:e.handleKeyup,focus:e.handleFocus,mousedown:e.handleMousedown}},["tags"!==e.mode&&e.searchable&&!e.disabled?[l("input",e._b({ref:"input",class:e.classList.search,attrs:{type:e.inputType,modelValue:e.search,autocomplete:e.autocomplete,id:e.searchable?e.id:void 0,"aria-owns":e.ariaOwns,"aria-expanded":e.isOpen,"aria-label":e.ariaLabel,"aria-placeholder":e.ariaPlaceholder,"aria-activedescendant":e.ariaActiveDescendant,role:"combobox"},domProps:{value:e.search},on:{input:e.handleSearchInput,keypress:e.handleKeypress,paste:function(a){return a.stopPropagation(),e.handlePaste.apply(null,arguments)}}},"input",e.attrs,!1))]:e._e(),e._v(" "),"tags"==e.mode?[l("div",{class:e.classList.tags},[e._l(e.iv,(function(a,t,u){return e._t("tag",(function(){return[l("span",{key:u,class:e.classList.tag},[e._v("\r\n            "+e._s(a[e.label])+"\r\n            "),e.disabled?e._e():l("span",{class:e.classList.tagRemove,on:{click:function(l){return e.handleTagRemove(a,l)}}},[l("span",{class:e.classList.tagRemoveIcon})])])]}),{option:a,handleTagRemove:e.handleTagRemove,disabled:e.disabled})})),e._v(" "),l("div",{ref:"tags",class:e.classList.tagsSearchWrapper},[l("span",{class:e.classList.tagsSearchCopy},[e._v(e._s(e.search))]),e._v(" "),e.searchable&&!e.disabled?l("input",e._b({ref:"input",class:e.classList.tagsSearch,attrs:{type:e.inputType,modelValue:e.search,id:e.searchable?e.id:void 0,autocomplete:e.autocomplete,"aria-owns":e.ariaOwns,"aria-expanded":e.isOpen,"aria-label":e.ariaLabel,"aria-placeholder":e.ariaPlaceholder,"aria-activedescendant":e.ariaActiveDescendant,role:"combobox"},domProps:{value:e.search},on:{input:e.handleSearchInput,keypress:e.handleKeypress,paste:function(a){return a.stopPropagation(),e.handlePaste.apply(null,arguments)}}},"input",e.attrs,!1)):e._e()])],2)]:e._e(),e._v(" "),"single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",(function(){return[l("div",{class:e.classList.singleLabel},[l("span",{class:e.classList.singleLabelText,domProps:{innerHTML:e._s(e.iv[e.label])}})])]}),{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",(function(){return[l("div",{class:e.classList.multipleLabel,domProps:{innerHTML:e._s(e.multipleLabelText)}})]}),{values:e.iv})]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",(function(){return[l("div",{class:e.classList.placeholder},[e._v("\r\n          "+e._s(e.placeholder)+"\r\n        ")])]}))],e._v(" "),e.loading||e.resolving?e._t("spinner",(function(){return[l("span",{class:e.classList.spinner})]})):e._e(),e._v(" "),e.hasSelected&&!e.disabled&&e.canClear&&!e.busy?e._t("clear",(function(){return[l("span",{class:e.classList.clear,on:{click:e.clear}},[l("span",{class:e.classList.clearIcon})])]}),{clear:e.clear}):e._e(),e._v(" "),e.caret&&e.showOptions?e._t("caret",(function(){return[l("span",{class:e.classList.caret,on:{click:e.handleCaretClick}})]})):e._e(),e._v(" "),l("div",{class:e.classList.dropdown,attrs:{tabindex:"-1"}},[e._t("beforelist",null,{options:e.fo}),e._v(" "),l("ul",{class:e.classList.options,attrs:{id:e.ariaOwns,role:"listbox"}},[e.groups?e._l(e.fg,(function(a,t,u){return l("li",{key:u,class:e.classList.group},[l("div",{class:e.classList.groupLabel(a),attrs:{"data-pointed":e.isPointed(a),role:"none"},on:{mouseenter:function(l){return e.setPointer(a)},click:function(l){return e.handleGroupClick(a)}}},[e._t("grouplabel",(function(){return[l("span",{domProps:{innerHTML:e._s(a[e.groupLabel])}})]}),{group:a,isSelected:e.isSelected,isPointed:e.isPointed})],2),e._v(" "),l("ul",{class:e.classList.groupOptions,attrs:{"aria-label":e.ariaGroupLabel(a),role:"group"}},e._l(a.__VISIBLE__,(function(t,u,n){return l("li",{key:n,class:e.classList.option(t,a),attrs:{"data-pointed":e.isPointed(t),"data-selected":e.isSelected(t)||void 0,id:e.ariaOptionId(t),"aria-label":e.ariaOptionLabel(t),role:"option"},on:{mouseenter:function(a){return e.setPointer(t)},click:function(a){return e.handleOptionClick(t)}}},[e._t("option",(function(){return[l("span",{domProps:{innerHTML:e._s(t[e.label])}})]}),{option:t,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search})],2)})),0)])})):e._l(e.fo,(function(a,t,u){return l("li",{key:u,class:e.classList.option(a),attrs:{id:e.ariaOptionId(a),"aria-label":e.ariaOptionLabel(a),"data-pointed":e.isPointed(a),"data-selected":e.isSelected(a)||void 0,role:"option"},on:{mouseenter:function(l){return e.setPointer(a)},click:function(l){return e.handleOptionClick(a)}}},[e._t("option",(function(){return[l("span",{domProps:{innerHTML:e._s(a[e.label])}})]}),{option:a,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search})],2)}))],2),e._v(" "),e.noOptions?e._t("nooptions",(function(){return[l("div",{class:e.classList.noOptions,domProps:{innerHTML:e._s(e.noOptionsText)}})]})):e._e(),e._v(" "),e.noResults?e._t("noresults",(function(){return[l("div",{class:e.classList.noResults,domProps:{innerHTML:e._s(e.noResultsText)}})]})):e._e(),e._v(" "),e.infinite&&e.hasMore?l("div",{ref:"infiniteLoader",class:e.classList.inifinite},[e._t("infinite",(function(){return[l("span",{class:e.classList.inifiniteSpinner})]}))],2):e._e(),e._v(" "),e._t("afterlist",null,{options:e.fo})],2),e._v(" "),e.required?l("input",{class:e.classList.fakeInput,attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?l("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(a,t){return l("input",{key:t,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:a}})}))]:e._e(),e._v(" "),l("div",{class:e.classList.spacer})],2)};h._withStripped=!0;return m({render:h,staticRenderFns:[]},undefined,g,undefined,false,undefined,!1,void 0,void 0,void 0)}(Vue);
