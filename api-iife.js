if("__TAURI__"in window){var __TAURI_PLUGIN_UPDATER__=function(e){"use strict";function t(e,t,r,s){if("a"===r&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?s:"a"===r?s.call(e):s?s.value:t.get(e)}function r(e,t,r,s,n){if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,r),r}var s,n,i,a;"function"==typeof SuppressedError&&SuppressedError;class o{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,s.set(this,(()=>{})),n.set(this,0),i.set(this,{}),this.id=function(e,t=!1){return window.__TAURI_INTERNALS__.transformCallback(e,t)}((({message:e,id:a})=>{if(a===t(this,n,"f")){r(this,n,a+1),t(this,s,"f").call(this,e);const o=Object.keys(t(this,i,"f"));if(o.length>0){let e=a+1;for(const r of o.sort()){if(parseInt(r)!==e)break;{const n=t(this,i,"f")[r];delete t(this,i,"f")[r],t(this,s,"f").call(this,n),e+=1}}}}else t(this,i,"f")[a.toString()]=e}))}set onmessage(e){r(this,s,e)}get onmessage(){return t(this,s,"f")}toJSON(){return`__CHANNEL__:${this.id}`}}async function c(e,t={},r){return window.__TAURI_INTERNALS__.invoke(e,t,r)}s=new WeakMap,n=new WeakMap,i=new WeakMap;class d{get rid(){return t(this,a,"f")}constructor(e){a.set(this,void 0),r(this,a,e)}async close(){return c("plugin:resources|close",{rid:this.rid})}}a=new WeakMap;class l extends d{constructor(e){super(e.rid),this.available=e.available,this.currentVersion=e.currentVersion,this.version=e.version,this.date=e.date,this.body=e.body}async downloadAndInstall(e){const t=new o;null!=e&&(t.onmessage=e),await c("plugin:updater|download_and_install",{onEvent:t,rid:this.rid})}}return e.Update=l,e.check=async function(e){return null!=e?.headers&&(e.headers=Array.from(new Headers(e.headers).entries())),await c("plugin:updater|check",{...e}).then((e=>e.available?new l(e):null))},e}({});Object.defineProperty(window.__TAURI__,"updater",{value:__TAURI_PLUGIN_UPDATER__})}
