if("__TAURI__"in window){var __TAURI_PLUGIN_UPDATER__=function(e){"use strict";function t(e,t,s,n){if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t.get(e)}function s(e,t,s,n,r){if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,s),s}var n,r,i,a;"function"==typeof SuppressedError&&SuppressedError;class o{constructor(){this.__TAURI_CHANNEL_MARKER__=!0,n.set(this,(()=>{})),r.set(this,0),i.set(this,{}),this.id=function(e,t=!1){return window.__TAURI_INTERNALS__.transformCallback(e,t)}((({message:e,id:a})=>{if(a===t(this,r)){s(this,r,a+1),t(this,n).call(this,e);const o=Object.keys(t(this,i));if(o.length>0){let e=a+1;for(const s of o.sort()){if(parseInt(s)!==e)break;{const r=t(this,i)[s];delete t(this,i)[s],t(this,n).call(this,r),e+=1}}}}else t(this,i)[a.toString()]=e}))}set onmessage(e){s(this,n,e)}get onmessage(){return t(this,n)}toJSON(){return`__CHANNEL__:${this.id}`}}async function c(e,t={},s){return window.__TAURI_INTERNALS__.invoke(e,t,s)}n=new WeakMap,r=new WeakMap,i=new WeakMap;class d{get rid(){return t(this,a)}constructor(e){a.set(this,void 0),s(this,a,e)}async close(){return c("plugin:resources|close",{rid:this.rid})}}a=new WeakMap;class _ extends d{constructor(e){super(e.rid),this.available=e.available,this.currentVersion=e.currentVersion,this.version=e.version,this.date=e.date,this.body=e.body}async downloadAndInstall(e){const t=new o;null!=e&&(t.onmessage=e),await c("plugin:updater|download_and_install",{onEvent:t,rid:this.rid})}}return e.Update=_,e.check=async function(e){return null!=e?.headers&&(e.headers=Array.from(new Headers(e.headers).entries())),await c("plugin:updater|check",{...e}).then((e=>e.available?new _(e):null))},e}({});Object.defineProperty(window.__TAURI__,"updater",{value:__TAURI_PLUGIN_UPDATER__})}
