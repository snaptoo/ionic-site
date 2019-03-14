/*! Built with http://stenciljs.com */
IonicSiteComponents.loadBundle("yb8qccly",["exports"],function(e){var t=window.IonicSiteComponents.h,i=function(){function e(){this.placeholder="Email address",this.buttonText="Subscribe",this.darkMode=!1,this.isLoading=!1,this.hasSubmitted=!1,this.email=null}return e.prototype.handleEmailChange=function(e){this.email=e.target.value},e.prototype.handleSubmit=function(e){var t=this;e.preventDefault(),this.isLoading=!0;var i=new XMLHttpRequest;i.open("POST","/api/v1/newsletter"),i.setRequestHeader("Content-Type","application/json;charset=UTF-8"),i.onreadystatechange=function(){if(console.log(i),4===i.readyState&&200===i.status){t.isLoading=!1;var e=JSON.parse(i.responseText);t.hasSubmitted=e.ok}},i.send(JSON.stringify({email:this.email}))},e.prototype.render=function(){var e=this;return t("form",{onSubmit:function(t){return e.handleSubmit(t)},class:this.darkMode?"dark":null},t("input",{name:"email",type:"email",value:this.email,onInput:function(){return e.handleEmailChange(event)},disabled:this.isLoading,placeholder:this.placeholder,required:!0}),t("ionic-button",{color:this.darkMode?"white":"default",type:"submit",disabled:this.isLoading||this.hasSubmitted},this.hasSubmitted?"Added!":this.buttonText))},Object.defineProperty(e,"is",{get:function(){return"ionic-newsletter-signup"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{buttonText:{type:String,attr:"button-text"},darkMode:{type:Boolean,attr:"dark-mode"},email:{state:!0},hasSubmitted:{state:!0},isLoading:{state:!0},placeholder:{type:String,attr:"placeholder"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ionic-newsletter-signup form{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;border-collapse:separate;width:100%;height:40px}\@media (max-width:991px){ionic-newsletter-signup form{max-width:calc(100% - 340px)}}\@media (max-width:767px){ionic-newsletter-signup form{float:none;max-width:100%;margin-top:15px}}ionic-newsletter-signup form.dark input{color:#fff;-webkit-box-shadow:none;box-shadow:none}ionic-newsletter-signup form.dark input:hover{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.15);box-shadow:0 1px 3px rgba(0,0,0,.15)}ionic-newsletter-signup form.dark input:focus{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.1);box-shadow:0 1px 3px rgba(0,0,0,.1)}ionic-newsletter-signup form.dark input::-webkit-input-placeholder{color:#bbceef}ionic-newsletter-signup form.dark input:-ms-input-placeholder{color:#bbceef}ionic-newsletter-signup form.dark input::-ms-input-placeholder{color:#bbceef}ionic-newsletter-signup form.dark input::placeholder{color:#bbceef}ionic-newsletter-signup input{border:none;background:rgba(255,255,255,.2);border-radius:4px 0 0 4px;font-size:13px;color:#24282e;-webkit-box-shadow:none;box-shadow:none;font-weight:500;height:100%;outline:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:1px 16px 0;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.1);box-shadow:0 1px 3px rgba(0,0,0,.1);-webkit-transition:.2s background,.2s box-shadow;transition:.2s background,.2s box-shadow}ionic-newsletter-signup input:hover{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.15);box-shadow:0 1px 3px rgba(0,0,0,.15)}ionic-newsletter-signup input:focus{-webkit-box-shadow:none;box-shadow:none;background:rgba(255,255,255,.25);-webkit-box-shadow:inset 0 0 2px rgba(0,0,0,.1);box-shadow:inset 0 0 2px rgba(0,0,0,.1)}ionic-newsletter-signup input::-webkit-input-placeholder{padding-left:0;color:#a1a9b6}ionic-newsletter-signup input:-ms-input-placeholder{padding-left:0;color:#a1a9b6}ionic-newsletter-signup input::-ms-input-placeholder{padding-left:0;color:#a1a9b6}ionic-newsletter-signup input::placeholder{padding-left:0;color:#a1a9b6}ionic-newsletter-signup ionic-button{height:100%}ionic-newsletter-signup ionic-button button{border-top-left-radius:0;border-bottom-left-radius:0;font-weight:500;font-size:14px;height:100%;padding:11px 13px 10px}"},enumerable:!0,configurable:!0}),e}();e.IonicNewsletterSignup=i,Object.defineProperty(e,"__esModule",{value:!0})});