(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[925,617,534],{4872:function(e,t,r){Promise.resolve().then(r.bind(r,6955))},6955:function(e,t,r){"use strict";r.d(t,{CategoryPage:function(){return c}});var n=r(7437),s=r(2869),i=r(6070),a=r(2451),o=r(7648),d=r(5193);function c(e){let{category:t}=e,{wins:r}=(0,d.f)(),c=r.filter(e=>e.category===t);return(0,n.jsxs)("div",{className:"relative w-full min-h-screen max-w-md mx-auto bg-[#000000] overflow-hidden",children:[(0,n.jsxs)("header",{className:"flex items-center justify-between mb-8 p-4 pt-[calc(env(safe-area-inset-top)+3rem)]",children:[(0,n.jsx)(o.default,{href:"/",passHref:!0,children:(0,n.jsx)(s.z,{variant:"ghost",size:"icon",className:"rounded-full",children:(0,n.jsx)(a.Z,{className:"h-6 w-6 text-[#C6C6C6]"})})}),(0,n.jsxs)("h1",{className:"text-2xl font-bold text-[#E0FF4F]",children:[t," Wins"]}),(0,n.jsx)("div",{className:"w-10"})]}),(0,n.jsx)("div",{className:"space-y-4",children:c.map((e,t)=>(0,n.jsx)(i.Zb,{className:t%2==0?"bg-[#E0FF4F] text-black":"bg-[#002FFF] text-white",children:(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold mb-2",children:e.title}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("span",{className:"text-sm opacity-70",children:e.date}),(0,n.jsx)("span",{className:"text-sm opacity-70",children:e.time})]})]})},t))}),0===c.length&&(0,n.jsx)("p",{className:"text-center text-[#C6C6C6] mt-8",children:"No wins in this category yet. Keep pushing!"})]})}},5193:function(e,t,r){"use strict";r.d(t,{WinsProvider:function(){return o},f:function(){return a}});var n=r(7437),s=r(2265);let i=(0,s.createContext)(void 0),a=()=>{let e=(0,s.useContext)(i);if(!e)throw Error("useWins must be used within a WinsProvider");return e},o=e=>{let{children:t}=e,[r,a]=(0,s.useState)([]),o=async()=>{a([{id:"1",title:"Completed AR presentation",category:"Work",time:"09:30 AM",date:"2025-06-15"},{id:"2",title:"30-minute meditation",category:"Personal",time:"07:00 AM",date:"2025-06-15"},{id:"3",title:"Optimized neural network",category:"Work",time:"11:45 AM",date:"2025-06-14"},{id:"4",title:"VR fitness routine",category:"Personal",time:"08:00 AM",date:"2025-06-20"},{id:"5",title:"Launched quantum app",category:"Tech",time:"02:30 PM",date:"2025-06-25"}])};return(0,s.useEffect)(()=>{o()},[]),(0,n.jsx)(i.Provider,{value:{wins:r,addWin:e=>{let t={...e,id:Date.now().toString()};a(e=>[t,...e])},fetchWins:o},children:t})}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(7437),s=r(2265),i=r(7053),a=r(535),o=r(4508);let d=(0,a.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:r,variant:s,size:a,asChild:c=!1,...l}=e,u=c?i.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(d({variant:s,size:a,className:r})),ref:t,...l})});c.displayName="Button"},6070:function(e,t,r){"use strict";r.d(t,{Zb:function(){return a}});var n=r(7437),s=r(2265),i=r(4508);let a=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});a.displayName="Card",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...s})}).displayName="CardHeader",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})}).displayName="CardTitle",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...s})}).displayName="CardDescription",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...s})}).displayName="CardContent",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...s})}).displayName="CardFooter"},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return i}});var n=r(1994),s=r(3335);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},2451:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let n=(0,r(9205).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])}},function(e){e.O(0,[688,971,117,744],function(){return e(e.s=4872)}),_N_E=e.O()}]);