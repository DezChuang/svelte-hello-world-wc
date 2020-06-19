var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}let f;function d(t){f=t}const h=[],p=[],m=[],$=[],g=Promise.resolve();let y=!1;function b(t){m.push(t)}let x=!1;const _=new Set;function w(){if(!x){x=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];d(e),E(e.$$)}for(h.length=0;p.length;)p.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];_.has(e)||(_.add(e),e())}m.length=0}while(h.length);for(;$.length;)$.pop()();y=!1,x=!1,_.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const v=new Set;function C(t,e){-1===t.$$.dirty[0]&&(h.push(t),y||(y=!0,g.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function k(c,a,s,i,l,h,p=[-1]){const m=f;d(c);const $=a.props||{},g=c.$$={fragment:null,ctx:null,props:h,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:p};let y=!1;if(g.ctx=s?s(c,$,(t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),y&&C(c,t)),e}):[],g.update(),y=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();a.intro&&((x=c.$$.fragment)&&x.i&&(v.delete(x),x.i(_))),function(t,n,c){const{fragment:a,on_mount:s,on_destroy:u,after_update:i}=t.$$;a&&a.m(n,c),b(()=>{const n=s.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(b)}(c,a.target,a.anchor),w()}var x,_;d(m)}let H;function M(e){let n,o,r,c,f,d;return{c(){n=i("h1"),o=l("Hello "),r=l(e[0]),c=l("!"),f=l(" "),d=i("slot"),this.c=t},m(t,e){s(t,n,e),a(n,o),a(n,r),a(n,c),s(t,f,e),s(t,d,e)},p(t,[e]){1&e&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(r,t[0])},i:t,o:t,d(t){t&&u(n),t&&u(f),t&&u(d)}}}function N(t,e,n){let{name:o="world"}=e;return t.$set=t=>{"name"in t&&n(0,o=t.name)},[o]}"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class S extends H{constructor(t){super(),k(this,{target:this.shadowRoot},N,M,c,{name:0}),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),w()))}static get observedAttributes(){return["name"]}get name(){return this.$$.ctx[0]}set name(t){this.$set({name:t}),w()}}return customElements.define("svelte-hello-world",S),S}();
//# sourceMappingURL=bundle.js.map
