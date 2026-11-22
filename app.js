(function(){
var P=[["Nagarjuna Construction Co. Ltd.","/images/project1.webp","Workers on bamboo scaffolding building reinforced concrete columns"],["THDC Thermal Power Project, Khurja","/images/project2.webp","Concrete pump and AIPL transit mixer pouring a slab"],["THDC Thermal Power","/images/project3.webp","Steel structure and formwork at a thermal power site"],["AIPL RMC Plant-1","/images/project4.webp","Blue ready-mix concrete batching plant with two silos"],["RMC Plant Khurja, UP","/images/project5.webp","Team performing a ceremony beneath the batching plant"],["AIPL Store","/images/project6.webp","Blue site office container branded Apeejay Infracon"]];
var $=function(s){return document.querySelector(s)},hd=$("#hd"),bg=$("#bg"),rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function sc(){hd.classList.toggle("solid",scrollY>40);if(!rm&&scrollY<innerHeight*1.2)bg.style.transform="translateY("+(scrollY*.12)+"px)"}addEventListener("scroll",sc,{passive:true});sc();
var b=$("#burger");function tog(o){hd.classList.toggle("open",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Close menu":"Open menu")}
b.onclick=function(){tog(!hd.classList.contains("open"))};document.querySelectorAll("#menu a").forEach(function(a){a.onclick=function(){tog(false)}});
var io=new IntersectionObserver(function(es){es.forEach(function(e,i){if(e.isIntersecting){var t=e.target;setTimeout(function(){t.classList.add("in")},rm?0:(Array.prototype.indexOf.call(t.parentNode.children,t)%3)*110);io.unobserve(t)}})},{rootMargin:"0px 0px -60px"});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
var T=$("#tiles"),cur=0,last=null,lb=$("#lb");
P.forEach(function(p,i){var t=document.createElement("button");t.className="tile rv";t.type="button";t.setAttribute("aria-label","View "+p[0]+" larger");t.innerHTML='<img loading="lazy" alt=""><span></span>';t.querySelector("img").src=p[1];t.querySelector("img").width=1100;t.querySelector("img").height=825;t.querySelector("img").decoding="async";t.querySelector("img").alt=p[2];t.querySelector("span").innerHTML='<small>View project</small>';t.querySelector("span").appendChild(document.createTextNode(p[0]));t.onclick=function(){last=t;show(i);lb.classList.add("on");document.body.style.overflow="hidden";$("#lb .x").focus()};T.appendChild(t);io.observe(t)});
function show(i){cur=(i+P.length)%P.length;$("#lbi").src=P[cur][1];$("#lbi").alt=P[cur][2];$("#lbc").textContent=P[cur][0]}
function cl(){lb.classList.remove("on");document.body.style.overflow="";last&&last.focus()}
$("#lb .x").onclick=cl;$("#lb .p").onclick=function(){show(cur-1)};$("#lb .n").onclick=function(){show(cur+1)};lb.onclick=function(e){if(e.target===lb)cl()};
addEventListener("keydown",function(e){if(!lb.classList.contains("on")){if(e.key==="Escape")tog(false);return}if(e.key==="Escape")cl();if(e.key==="ArrowRight")show(cur+1);if(e.key==="ArrowLeft")show(cur-1)});

var SV=[["Preconstruction Planning","/images/planning.webp","Careful preparation before a project reaches the site.",["Review of drawings and scope","Sequencing and scheduling","Coordination ahead of construction"]],["Architectural Modelling","/images/modelling.webp","Scale models and visual studies that make a design easy to understand.",["Models of buildings and layouts","Clearer design discussions","Support for planning decisions"]],["Construction Management","/images/construction.webp","Day-to-day coordination of work on site.",["Site coordination","Supply of ready-mix concrete from our plants","Progress oversight through to completion"]]];
var FN=function(p){return'<div><label for="'+p+'name">Name</label><input id="'+p+'name" name="name" autocomplete="name"><p class="err" data-for="name" role="alert"></p></div><div><label for="'+p+'email">Email</label><input id="'+p+'email" name="email" type="email" autocomplete="email"><p class="err" data-for="email" role="alert"></p></div><div><label for="'+p+'phone">Phone (optional)</label><input id="'+p+'phone" name="phone" type="tel" autocomplete="tel"><p class="err" data-for="phone" role="alert"></p></div><div><label for="'+p+'service">Service</label><select id="'+p+'service" name="service"><option>Preconstruction Planning</option><option>Architectural Modelling</option><option>Construction Management</option><option>Ready-Mix Concrete</option><option>Other</option></select></div><div class="full"><label for="'+p+'message">Message</label><textarea id="'+p+'message" name="message" rows="4"></textarea><p class="err" data-for="message" role="alert"></p></div><div class="hp" aria-hidden="true"><input name="website" tabindex="-1" autocomplete="off"></div><div class="full"><button class="btn" type="submit" style="background:var(--navy)">Send by email</button> <button class="btn" type="button" data-wa>Send on WhatsApp</button><p class="fs" aria-live="polite" style="font-weight:700;margin-top:12px"></p></div>'};
function wire(f,p){f.innerHTML=FN(p);var E=f.elements;
function val(){var v={name:E.name.value.trim(),email:E.email.value.trim(),phone:E.phone.value.trim(),message:E.message.value.trim(),service:E.service.value},e={};
if(v.name.length<2)e.name="Please enter your name";if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email))e.email="Enter a valid email address";
if(v.phone&&!/^[0-9+()\-\s]{7,20}$/.test(v.phone))e.phone="Enter a valid phone number";if(v.message.length<10)e.message="Please tell us a little more (10+ characters)";
f.querySelectorAll(".err").forEach(function(x){x.textContent=e[x.dataset.for]||""});return Object.keys(e).length||E.website.value?null:v}
function body(v){return"Name: "+v.name+"\nEmail: "+v.email+"\nPhone: "+(v.phone||"-")+"\nService: "+v.service+"\n\n"+v.message}
var fs=f.querySelector(".fs");
var sendWA=function(){var v=val();if(!v)return;window.open("https://wa.me/919873410773?text="+encodeURIComponent("New enquiry from website\n"+body(v)),"_blank","noopener");fs.textContent="Opening WhatsApp with your enquiry.";f.reset()};
if(true){var sb=f.querySelector("[type=submit]");sb.remove();var wb=f.querySelector("[data-wa]");wb.type="submit";wb.className="btn";wb.style.background="var(--navy)";wb.textContent="Send on WhatsApp";f.onsubmit=function(ev){ev.preventDefault();sendWA()};return}
f.onsubmit=function(ev){ev.preventDefault();var v=val();if(!v)return;location.href="mailto:apeejayinfra@gmail.com?subject="+encodeURIComponent("Website enquiry: "+v.service)+"&body="+encodeURIComponent(body(v));fs.textContent="Opening your email app with the enquiry ready to send."};
f.querySelector("[data-wa]").onclick=function(){var v=val();if(!v)return;window.open("https://wa.me/919873410773?text="+encodeURIComponent(body(v)),"_blank","noopener");fs.textContent="Opening WhatsApp with your enquiry."}}
wire($("#f"),"");wire($("#qf"),"q-");
var openM=null,lastF=null;
function mo(m){lastF=document.activeElement;m.classList.add("on");openM=m;document.body.style.overflow="hidden";var c=m.querySelector(".cls");c&&c.focus()}
function mc(){if(!openM)return;openM.classList.remove("on");openM=null;document.body.style.overflow="";lastF&&lastF.focus&&lastF.focus()}
document.querySelectorAll(".modal").forEach(function(m){m.onclick=function(e){if(e.target===m||e.target.classList.contains("cls"))mc()}});
document.addEventListener("click",function(e){var b=e.target.closest("[data-eq]");if(b){if(lb.classList.contains("on"))cl();if(openM)mc();mo($("#eq"))}});
document.querySelectorAll("[data-s]").forEach(function(b){b.onclick=function(){var s=SV[b.dataset.s];$("#smi").src=s[1];$("#smi").alt=s[0];$("#smt").textContent=s[0];$("#smp").textContent=s[2];$("#sml").innerHTML=s[3].map(function(x){return"<li>"+x+"</li>"}).join("");$("#smb").onclick=function(){mc();$("#qf").elements.service.value=s[0];mo($("#eq"))};mo($("#sm"))}});
addEventListener("keydown",function(e){if(e.key==="Escape")mc()});
var up=$("#up");up.onclick=function(){scrollTo({top:0,behavior:rm?"auto":"smooth"})};
var pg=$("#pg"),st=$("#steps"),fl=$("#fill"),sp=st.querySelectorAll(".step"),bi=$("#bandimg");
function sc2(){var h=document.documentElement.scrollHeight-innerHeight;pg.style.transform="scaleX("+(h>0?scrollY/h:0)+")";up.classList.toggle("on",scrollY>700);
var r=st.getBoundingClientRect(),k=Math.min(1,Math.max(0,(innerHeight*.8-r.top)/(r.height+innerHeight*.2)));var m=matchMedia("(max-width:800px)").matches;fl.style[m?"height":"width"]=(k*100)+"%";sp.forEach(function(s,i){s.classList.toggle("on",k>(i/3)+.02)});
if(!rm){var b=bi.parentNode.getBoundingClientRect();bi.style.transform="translateY("+(b.top*-.12)+"px)"}}
addEventListener("scroll",sc2,{passive:true});addEventListener("resize",sc2);sc2();
var L=document.querySelectorAll("nav a.l"),so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)L.forEach(function(a){a.classList.toggle("act",a.getAttribute("href")==="#"+e.target.id)})})},{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main section[id]").forEach(function(s){so.observe(s)});

document.querySelectorAll("#services .grid3,#tiles,.leaders,#steps").forEach(function(c){
var it=Array.prototype.slice.call(c.children).filter(function(x){return!x.classList.contains("fill")}),d=document.createElement("div");d.className="dots";
it.forEach(function(x,i){var b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Go to item "+(i+1));b.onclick=function(){x.scrollIntoView({inline:"start",block:"nearest",behavior:rm?"auto":"smooth"})};d.appendChild(b)});
c.parentNode.insertBefore(d,c.nextSibling);var bs=d.children;
function up(){var best=0,m=1e9,mid=c.scrollLeft+c.clientWidth/2;it.forEach(function(x,i){var dist=Math.abs(x.offsetLeft-c.offsetLeft+x.offsetWidth/2-mid);if(dist<m){m=dist;best=i}});
if(c.scrollLeft+c.clientWidth>=c.scrollWidth-4)best=it.length-1;if(c.scrollLeft<4)best=0;
for(var i=0;i<bs.length;i++)bs[i].classList.toggle("on",i===best)}
c.addEventListener("scroll",up,{passive:true});addEventListener("resize",up);up()});
})();
