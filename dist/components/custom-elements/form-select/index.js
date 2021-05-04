const e={autocomplete:{type:String},autofocus:{type:Boolean},disabled:{type:Boolean},helpText:{type:String},id:{type:String},label:{type:String},name:{type:String,required:!0},readonly:{type:Boolean},required:{type:Boolean},size:{type:Number,default:20},tabindex:{type:Number},title:{type:String}},t={...e,inline:{type:Boolean},multiple:{type:Boolean,default:!1},options:{type:Array}};class r{constructor(e,t,r=!1){this.label=e,this.options=t,this.disabled=r}}class i{constructor(e,t,r=!1,i=!1){this.label=e,this.value=t,this.selected=r,this.disabled=i}}const o=Object.freeze({CHECKBOX:"checkbox",COLOR:"color",DATE:"date",DATE_TIME:"datetime-local",EMAIL:"email",FILE:"file",HIDDEN:"hidden",MONTH:"month",NUMBER:"number",PASSWORD:"password",RADIO:"radio",RANGE:"range",SEARCH:"search",SUBMIT:"submit",TEL:"tel",TEXT:"text",TIME:"time",URL:"url",WEEK:"week"}),n=[o.DATE,o.MONTH,o.WEEK,o.TIME,o.DATE_TIME,o.NUMBER,o.RANGE],s=[o.PASSWORD,o.SEARCH,o.TEL,o.TEXT,o.URL];o.HIDDEN,o.SUBMIT;const l={...e,accept:{type:String},capture:{type:String},checked:{type:Boolean,default:!1},dirname:{type:String},inline:{type:Boolean},inputmode:{type:String},list:{type:String},max:{type:Number,default:Number.MAX_VALUE},maxlength:{type:Number,default:0},min:{type:Number,default:Number.MIN_VALUE},minlength:{type:Number,default:0},multiple:{type:Boolean,default:!1},pattern:{type:String},placeholder:{type:String},step:{type:Number,default:1},switch:{type:Boolean},type:{type:String,default:"text"},value:{type:String}},a={accept:[o.FILE],capture:[o.FILE],dirname:[o.SEARCH,o.TEXT],max:n,maxlength:s,min:n,minlength:s,multiple:[o.EMAIL,o.FILE],pattern:[o.PASSWORD,o.TEL,o.TEXT],placeholder:s,size:[o.EMAIL,o.PASSWORD,o.TEL,o.TEXT],step:n,tabindex:Object.values(o)},p={max:Number.MAX_VALUE,maxlength:l.maxlength.default,min:Number.MIN_VALUE,minlength:l.minlength.default,multiple:l.multiple.default,size:l.size.default,step:1,tabindex:0},u=["id","label","helpText"];function toKebabCase(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function setBooleanAttribute(e,t,r,i){const o=function(e){return e||void 0}(i),n=toKebabCase(t);e.hasAttribute(n)&&!o?e.removeAttribute(n):o&&e.setAttribute(n,"")}function setNumericAttribute(e,t,r,i,o){let n=i;"select"===e.tagName.toLowerCase()||"textarea"===e.tagName.toLowerCase()?n=function(e,t){return 0!==e&&e!==t?e:void 0}(i,p[t]):"input"===e.tagName.toLowerCase()&&a[t]&&(n=function(e,t,r,i){return-1!==t.indexOf(e.type)&&0!==r&&r!==i?r:void 0}(o,a[t],i,p[t]));const s=toKebabCase(t);e.hasAttribute(s)&&null==n?e.removeAttribute(s):null!=n&&e.setAttribute(s,n)}function setAttribute(e,t,r,i,o){if(function(e){return-1!==u.indexOf(e)}(t))return;let n=r;a[t]&&(n=function(e,t,r,i){return-1!==t.indexOf(e.type)&&r!==i?r:void 0}(i,a[t],r));const s=toKebabCase(t);e.hasAttribute(s)&&null==n?e.removeAttribute(s):null!=n&&e.setAttribute(s,n)}function setAttributes(e,t,r){for(const i in r)switch(t[i].type){case Boolean:setBooleanAttribute(e,i,t[i],r[i]);break;case Number:setNumericAttribute(e,i,t[i],r[i],r);break;default:setAttribute(e,i,r[i],r)}}function createSelect({createComponent:e,renderer:o,html:n,nothing:s=""}){const createOption=e=>{const t=document.createElement("option");return t.setAttribute("value",e.value),t.textContent=e.label,e.selected&&t.setAttribute("selected",""),e.disabled&&t.setAttribute("disabled",""),t};e("fc-form-select",{renderer:o,props:t,computed:{internalId(){return this.props.id?this.props.id:`${(e="select")?e+"-":""}${Date.now().toString(36)+Math.random().toString(36).substr(2)}`;var e},labelClassName(){return"fc-form-label"+(this.props.inline?"":" fc-form-label--block")},for(){return this.props.label?this.internalId:""},selectOptions(){return this.props.options?Array.isArray(this.props.options)?this.props.options.map((e=>e instanceof r?n`<optgroup label="${e.label}" disabled="${e.disabled?e.disabled:void 0}">${e.options.map((e=>createOption(e)))}</optgroup>`:e instanceof i?createOption(e):(console.error("Unknown option - must be an instance of OptGroup or Option"),s))):(console.error("Options must be an array of OptGroup or Option instances"),[]):this.slots.default?this.slots.default.filter((e=>e.nodeType===Node.ELEMENT_NODE&&"option"===e.tagName.toLowerCase())).map((e=>new i(e.text,e.value,e.selected,e.disabled))).map((e=>createOption(e))):[]}},mounted(){setAttributes(this.querySelector("select"),t,this.props),this.classList.add("fc-form")},updated(){setAttributes(this.querySelector("select"),t,this.props)},render(){return n`<div class="${this.props.inline?"fc-form-group fc-form-group--inline":"fc-form-group"}"><div class="${this.props.multiple?"fc-form-select fc-form-select--multiple":"fc-form-select"}"><label class="${this.labelClassName}" for="${this.for}">${this.props.label}</label> <select id="${this.internalId}" name="${this.props.name}">${this.selectOptions}</select></div><div aria-live="polite" class="fc-form-invalid-feedback"><span></span></div><div class="fc-form-help-text">${this.props.helpText}</div></div>`}})}const c={create(e){createSelect(e)}};export{r as OptGroup,i as Option,c as module};
