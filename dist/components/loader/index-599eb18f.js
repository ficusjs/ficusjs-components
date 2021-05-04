import{p as s,g as t,i as r,n as e,s as p}from"./set-attributes-b12391de.js";const i={create(i){!function({createComponent:i,renderer:o,html:a,nothing:n}){i("fc-form-input",{renderer:o,props:s,computed:{internalId(){return this.props.id?this.props.id:t("input")},className(){return this.props.switch?"fc-form-switch":this.props.type===r.RANGE?"fc-form-range":this.props.type===r.SUBMIT?"fc-form-submit":"fc-form-control"},containerClassName(){return this.props.inline||this.props.type===r.SUBMIT?"fc-form-group fc-form-group--inline":this.props.type===r.RADIO||this.props.type===r.CHECKBOX?"fc-form-group fc-form-group--rc":"fc-form-group"},inputClassName(){return this.props.type===r.RADIO||this.props.type===r.CHECKBOX?"fc-input-inline-wrapper":"fc-input-wrapper"},labelClassName(){return"fc-form-label"+(this.props.inline?"":" fc-form-label--block")},isValidType(){return-1!==Object.values(r).indexOf(this.props.type)},for(){return e.indexOf(this.props.type)>-1||!this.props.label?"":this.internalId}},created(){if(!this.isValidType)throw new Error(`${this.props.type} is not a valid input type`);this.classList.add("fc-form-input")},mounted(){p(this.querySelector("input"),s,this.props)},updated(){p(this.querySelector("input"),s,this.props)},render(){return this.isValidType?a`<div class="fc-form-group"><div class="${this.inputClassName}"><label class="${this.labelClassName}" for="${this.for}">${this.props.label}</label> <input name="${this.props.name}" id="${this.internalId}" type="${this.props.type}" class="${this.className}"> ${this.slots.default}</div><div aria-live="polite" class="fc-form-invalid-feedback"><span></span></div><div class="fc-form-help-text">${this.props.helpText}</div></div>`:n}})}(i)}};export{i as module};
