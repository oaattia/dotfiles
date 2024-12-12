"use strict";var L=Object.create;var c=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var O=(t,r)=>{for(var e in r)c(t,e,{get:r[e],enumerable:!0})},p=(t,r,e,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of k(r))!$.call(t,n)&&n!==e&&c(t,n,{get:()=>r[n],enumerable:!(o=_(r,n))||o.enumerable});return t};var g=(t,r,e)=>(e=t!=null?L(A(t)):{},p(r||!t||!t.__esModule?c(e,"default",{value:t,enumerable:!0}):e,t)),V=t=>p(c({},"__esModule",{value:!0}),t);var D={};O(D,{default:()=>T});module.exports=V(D);var a=require("@raycast/api");var f=g(require("path")),s=g(require("fs"));var d=require("@raycast/api");function l(){return(0,d.getPreferenceValues)().storagePath}var y=require("@raycast/api");function h(){return(0,y.getPreferenceValues)().binaryPath}var x=require("os"),v=require("@raycast/api"),S=require("child_process");var P=require("@raycast/api");function w(){return(0,P.getPreferenceValues)().githubToken}var u=class extends Error{};async function m(){let{error:t}=await B("sync",[]);return t?{error:t}:{}}async function B(t,r){if(t!=="sync"&&!await K()){let{error:i}=await m();if(i)return{error:i}}let{data:e}=await N(h());if(!e)return{error:new u("Could not find laraveltips binary")};let{data:o,error:n}=await C(e,t,r);return n?{error:n}:{data:o?JSON.parse(o):[]}}async function C(t,r,e){let o=l(),n=["-o","json","-q"];o&&n.push("--path",E(o)),n.push(r,...e);let{status:i,stdout:b,stderr:R}=(0,S.spawnSync)(t,n,{env:F()});return i!==0?{error:new u(R.toString())}:{data:b.toString()}}function F(){let t=w();if(t)return{LARAVEL_TIPS_ACCESS_TOKEN:t}}async function K(){let t=E(l()),r=[".db3",".laraveltips.db3"];for(let e of r)try{return await s.default.promises.access(f.default.join(t,e),s.default.constants.F_OK),!0}catch{}return!1}function E(t){(!t||t.trim()=="")&&(t="~/.laravel");let r=t.replace(/^~($|\/|\\)/,`${(0,x.homedir)()}$1`);r=r.replace(/\$(\w+)/g,(o,n)=>process.env[n]||"");let e=f.default.resolve(r);return console.log("storagePath",e),e}async function N(t){return(!t||t.trim()=="")&&(t=`${v.environment.assetsPath}/laraveltips`),await j(t),{data:f.default.resolve(t)}}async function j(t){try{await s.default.promises.access(t,s.default.constants.X_OK)}catch{await s.default.promises.chmod(t,509)}}async function T(){await(0,a.showToast)({style:a.Toast.Style.Animated,title:"Syncing",message:"Starting to sync all tips from LaravelDaily Repo"});let{error:t}=await m();if(t){await(0,a.showToast)({style:a.Toast.Style.Failure,title:"Error",message:t.message});return}await(0,a.showToast)({style:a.Toast.Style.Success,title:"Synced",message:"All tips have been synced"})}
