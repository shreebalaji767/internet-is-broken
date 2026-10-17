(()=>{const $=s=>document.querySelector(s);const incidents=[["🫠","Router has entered its flop era.","We asked it nicely. It responded with a blinking light."],["🧌","The algorithm has become self-aware.","It recommended 14 videos about a topic you watched for 0.3 seconds."],["🧯","We have set the vibes on fire.","The fire department is buffering. Please hold."],["🪩","Your browser is now a nightclub.","Pop-ups are on the guest list. You are not."],["🐌","Internet speed upgraded to snail premium.","You may now download one (1) pixel per fiscal quarter."],["🫡","All tabs have been promoted to management.","Nobody knows what they do, but they have a meeting."],["💡","The status light has entered its minimalist era.","It now blinks only when it feels artistically necessary."],["🧃","Bandwidth converted into juice.","Unfortunately, it is 0% juice and 100% buffering."]];const memes=[["ME: I'LL KEEP MY ROOM TIDY","THE CHAIR: HAS BECOME A CLOTHING ARCHIVE","🧍‍♂️","🪑","The chair has achieved permanent storage status."],["I ASKED FOR A SIMPLE EXPLANATION","NOW THERE IS A WHITEBOARD AND A LASER POINTER","🧐","📊","The briefing has entered its keynote era."],["ADDS ONE THING TO THE CART","CHECKOUT: 9 FEES AND A SMALL QUEST","🫠","🛒","The final price has entered its villain era."],["I SHOULD BE PRODUCTIVE","LET ME REORGANIZE MY PLAYLISTS","🧑‍💻","🎧","Technically, a task was completed."],["MY PASSWORD IS VERY SECURE","FORGOT IT BEFORE THE PAGE FINISHED LOADING","😌","🔐","Security through immediate amnesia."],["ME: I DON'T CARE WHAT PEOPLE THINK","RE-READS A TEXT 19 TIMES","🫣","💬","Confidence loading… 2%."],["I WILL JUST CHECK THE WEATHER","NOW I KNOW THE WIND SPEED IN THREE COUNTRIES","🤡","🌦️","Forecast: oddly specific."],["I FOLLOWED THE RECIPE EXACTLY","THE CAKE HAS A DIFFERENT VISION","🧑‍🍳","🍰","The oven has declined to comment."]];const reports=[["Office printer begins charging rent for every paper jam.","Staff have been negotiating with the machine since Tuesday. It only communicates through error codes."],["Calendar app quietly adds a meeting called 'meeting about meetings'.","The invite includes 14 people, no agenda, and a mysterious optional attendee named Gary."],["Elevator close-door button admits it is mostly decorative.","The button says it appreciates everyone's enthusiasm and asks for privacy."],["Spreadsheet cell changes its font to express disagreement.","The finance team has agreed to hear its concerns after quarter-end."],["Smart fridge sends a performance review to the leftovers.","The half lemon received 'meets expectations'; the mystery container was promoted."],["Houseplant requests a clearer job description.","It says 'being near the window' was never listed as a core responsibility."],["QR code directs diners to a handwritten note saying 'nice try'.","The restaurant calls it a digital detox. The printer calls it a labor dispute."],["Office microwave starts enforcing a strict 60-second lunch policy.","Anyone who presses +30 is now required to attend a tiny disciplinary hearing."]];const popups=[["CONGRATULATIONS!","You have been selected to close this popup. Please close 8 more to claim your prize."],["URGENT SECURITY ALERT","Your computer has 7,001 feelings and one of them is anxiety."],["COOKIE CONSENT","Accept all cookies to continue. Reject all cookies to be asked again in 4 seconds."],["AUTO-SAVE COMPLETE","We saved the draft. We cannot promise it was the correct draft."],["FREE PRIZE INSIDE","You won a free reminder that nothing on the internet is actually free."],["SYSTEM MESSAGE","We detected suspicious levels of being online. Touch a shrub immediately."]];const logs=[["[WARN]","DNS lookup returned a haiku instead of an address."],["[ OK ]","Cable integrity check: surprisingly un-dramatic."],["[404 ]","Requested packet has taken a personal day."],["[??? ]","Checksum resembles a grocery list."],["[FAIL]","Handshake failed. Both sides deny initiating it."],["[ OK ]","Cache cleared. Dust remains."],["[WARN]","Port is open, but refuses to discuss it."],["[INFO]","Latency has requested a more flexible schedule."],["[ERR ]","Protocol negotiation ended in awkward silence."],["[ OK ]","Diagnostic complete. No cables were emotionally harmed."]];let incidentsMade=0,popupCount=0,grass=0,memeIndex=0,reportIndex=0,timer;
const jokeHistoryKey="iib-jokes-shown-v1",jokeSequenceKey="iib-joke-sequence-v1";
let shownJokes=new Set(),jokeSequence=0;
try{shownJokes=new Set(JSON.parse(localStorage.getItem(jokeHistoryKey)||"[]"));jokeSequence=Number(localStorage.getItem(jokeSequenceKey)||"0")}catch{}
function jokeKey(item){return String(Array.isArray(item)?item.filter((part)=>typeof part==="string").join(" "):item).toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}
function hasSeenJoke(item,keyOf){return shownJokes.has(keyOf(item))||shownJokes.has(jokeKey(item))}
function rememberJoke(item,keyOf){shownJokes.add(keyOf(item));shownJokes.add(jokeKey(item));try{localStorage.setItem(jokeHistoryKey,JSON.stringify([...shownJokes]));localStorage.setItem(jokeSequenceKey,String(jokeSequence))}catch{}}
const jokeBits={
 subject:["the office printer","a confused pigeon","the calendar app","a tiny houseplant","the elevator button","a spreadsheet cell","the neighborhood cat","a suspiciously polite toaster","the moon","a lost shopping trolley","the library stapler","a very formal potato"],
 action:["has filed a complaint about","is negotiating with","quietly replaced","scheduled a performance review for","put a tiny hat on","declared independence from","started a support group for","sent a strongly worded memo to","challenged to a dance-off","mistook for a legally binding contract","promoted to middle management","asked for an apology from"],
 object:["the concept of Tuesday","an unfinished sandwich","the building's echo","a suspiciously damp envelope","the last clean spoon","a spreadsheet with feelings","an extremely confident duck","the emergency glitter supply","a chair with ambition","a mysterious button marked MAYBE","the ceremonial stapler","a jar of unrelated screws"],
 twist:["Nobody has the correct form, but everyone has an opinion.","The minutes were recorded on a napkin and immediately classified.","Witnesses describe the atmosphere as professionally confusing.","An independent committee of three moths is reviewing the matter.","The follow-up meeting has been moved to a slightly smaller room.","The official statement was just a drawing of a ladder.","Experts say this changes absolutely nothing, in a new way.","The incident is now available as a very limited spreadsheet.","No one can explain the policy, but it has a logo.","The appeal was accepted by a machine that only prints commas.","A second memo arrived wearing sunglasses.","The whole affair has been assigned a tiny project manager."],
 excuse:["my","the","our","a nearby","this extremely qualified","the temporary","an unexpectedly important","the region's only"],
 excuseThing:["umbrella","left shoe","soup experiment","houseplant","parcel of mystery buttons","family jigsaw","laundry mountain","emergency biscuit","borrowed pencil","very small parade","unlabeled freezer container","ornamental gourd"],
 excuseEvent:["has requested a formal hearing","needs a witness and two paper clips","is being audited by a neighborhood squirrel","has become a time-sensitive art project","must be escorted across the room","is waiting for its extremely specific soundtrack","has been entered into a regional competition","requires immediate consultation with a teaspoon","is the subject of a confusing voicemail","has developed a scheduling conflict"],
 memeA:["I SAID THIS WOULD TAKE TWO MINUTES","THE TASK HAS REQUESTED A PROJECT CHARTER","MY PLAN WAS EXTREMELY SIMPLE","THE INSTRUCTIONS SAID 'JUST ASSEMBLE IT'","I BROUGHT A SNACK FOR THE JOURNEY","THE GROUP PROJECT HAS ENTERED ORBIT","I HAVE A PERFECTLY REASONABLE PLAN","THE BOX SAID 'SOME ASSEMBLY REQUIRED'","I MADE A LIST TO GET ORGANIZED","THE MEETING INVITE SAID 'OPTIONAL'"],
 memeB:["NOW THERE ARE THREE CLIPBOARDS AND A STEERING COMMITTEE","THE SCREW HAS A DIFFERENT OPINION","THE SNACK IS NOW THE ENTIRE PLAN","SOMEONE HAS ELECTED THE WHITEBOARD CHAIR","THE CHAIR IS MADE OF UNREAD EMAILS","THE FINAL STEP IS APPARENTLY A SMALL BRIDGE","THE LIST HAS BECOME THE MAIN TASK","THE INSTRUCTIONS ARE JUST A PHOTO OF A SCREW","WE ARE DISCUSSING THE LIST'S LONG-TERM STRATEGY","EVERYONE JOINED ANYWAY"],
 tech:["cache","router","pixel","checksum","browser extension","charging cable","printer queue","keyboard shortcut","tiny server","loading bar","USB port","backup drive"],
 techAction:["has filed a noise complaint","is on a coffee break","has enrolled in pottery class","was promoted without training","is requesting a smaller hat","has started collecting spoons","is refusing to sign the form","has become a local tour guide","is learning interpretive dance","has misplaced the meeting agenda","is asking for clearer boundaries","has formed a tiny union"],
 techTwist:["The status light now blinks in lowercase.","The documentation is a single drawing of a fish.","It will be back after it finds its other sock.","The patch notes are written entirely in riddles.","Nobody knows who approved the tiny budget.","The new policy is somehow just a hat.","The whole thing has been logged under 'miscellaneous weather'.","The support ticket was returned as a paper airplane.","The audit found one (1) suspicious raisin.","It is technically working, but only on weekends."]
};
function nextJokeIndex(){jokeSequence++;try{localStorage.setItem(jokeSequenceKey,String(jokeSequence))}catch{}return jokeSequence}
function makeGeneratedJoke(kind){
 for(let attempt=0;attempt<200;attempt++){
  const n=nextJokeIndex(),pick=(key,offset=0)=>jokeBits[key][Math.abs((n*7+offset*13+Math.floor(n/(jokeBits[key].length||1))*3))%jokeBits[key].length];
  let item;
  if(kind==="reports")item=[pick("subject",1)+" "+pick("action",2)+" "+pick("object",3)+".",pick("twist",4)+" "+pick("twist",7)+" Archive reference "+n+"; nobody knows the filing system."];
  else if(kind==="excuses")item=pick("excuse",1)+" "+pick("excuseThing",2)+" "+pick("excuseEvent",3)+". Excuse file "+n+" has been opened for absolutely no reason.";
  else if(kind==="memes")item=[pick("memeA",1),pick("memeB",2),"🤹","🗃️","A situation that has clearly hired a consultant. Case file "+n+"."];
  else if(kind==="logs")item=["[INFO]",pick("tech",1)+" "+pick("techAction",2)+". "+pick("techTwist",3)+" Diagnostic ticket "+n+"."];
  else if(kind==="incidents")item=["🪄",pick("tech",1)+" "+pick("techAction",2)+".",pick("techTwist",3)+" Incident record "+n+"."];
  else if(kind==="popups")item=["UNEXPECTED UPDATE",pick("subject",1)+" "+pick("action",2)+" "+pick("object",3)+". "+pick("twist",4)+" Reference number "+n+"."];
  else if(kind==="grass")item=pick("subject",1)+" "+pick("action",2)+" "+pick("object",3)+". Take a breath; the world has not requested a status report. Field note "+n+". ";
  else item=pick("subject",1)+" "+pick("action",2)+" "+pick("object",3)+". "+pick("twist",4)+" Archive note "+n+".";
  if(!hasSeenJoke(item,jokeKey)){rememberJoke(item,jokeKey);return item}
 }
 return null;
}
function pickFresh(items,keyOf=jokeKey,kind="general"){
 const fresh=items.filter(item=>!hasSeenJoke(item,keyOf));
 if(fresh.length){const item=fresh[Math.floor(Math.random()*fresh.length)];rememberJoke(item,keyOf);return item}
 return makeGeneratedJoke(kind);
}
function seedVisibleJokes(){
 const headline=document.querySelector("#report-headline"),summary=document.querySelector("#report-summary");
 if(headline&&summary)rememberJoke([headline.textContent,summary.textContent],jokeKey);
 const excuse=document.querySelector("#excuse-text");if(excuse)rememberJoke(excuse.textContent,jokeKey);
 const top=document.querySelector("#meme-top"),bottom=document.querySelector("#meme-bottom"),caption=document.querySelector("#meme-caption");
 if(top&&bottom&&caption)rememberJoke([top.textContent,bottom.textContent,caption.textContent],jokeKey);
 const grass=document.querySelector("#grass-message");if(grass)rememberJoke(grass.textContent,jokeKey);
}
seedVisibleJokes();function toast(s){const n=$("#toast");n.textContent=s;n.classList.add("show");clearTimeout(timer);timer=setTimeout(()=>n.classList.remove("show"),2600)}function award(s){const n=$("#achievement");try{let a=JSON.parse(localStorage.getItem("iib-achievements")||"[]");if(a.includes(s))return;a.push(s);localStorage.setItem("iib-achievements",JSON.stringify(a))}catch{}$("#achievement-title").textContent=s;n.classList.add("show")}function log(){const row=pickFresh(logs,row=>jokeKey(row[1]),"logs");if(!row)return;const p=document.createElement("p"),time=document.createElement("span"),status=document.createElement("span");time.className="muted";time.textContent="["+new Date().toLocaleTimeString([],{hour12:false})+"] ";status.className=row[0]==="[ OK ]"?"green":row[0]==="[WARN]"?"yellow":"";status.textContent=row[0]+" ";p.append(time,status,document.createTextNode(row[1]));$("#terminal").append(p);while($("#terminal").children.length>6)$("#terminal").firstElementChild.remove()}function chaos(){const x=pickFresh(incidents,x=>jokeKey(x.slice(1)),"incidents");if(!x){toast("ALL UNIQUE INCIDENTS HAVE BEEN SHOWN.");return}incidentsMade++;$("#chaos-emoji").textContent=x[0];$("#chaos-title").textContent=x[1];$("#chaos-description").textContent=x[2];$("#incident-count").textContent=incidentsMade;$("#tabs").textContent=incidentsMade>3?42+incidentsMade*13:"∞";$("#attention").innerHTML=Math.max(1,8-Math.floor(incidentsMade/2))+"<span> sec</span>";let v=Math.max(-10,-3-incidentsMade);$("#vibe").innerHTML=v+"<span>/10</span>";$("#vibe-label").textContent=v<=-8?"please stop pressing it":v<=-5?"actively deteriorating":"concerning, honestly";$("#vibe-bar").style.width=Math.max(5,30-incidentsMade*3)+"%";document.body.classList.remove("chaos-mode","glitch-mode");void document.body.offsetWidth;document.body.classList.add(incidentsMade%3===0?"glitch-mode":"chaos-mode");setTimeout(()=>document.body.classList.remove("chaos-mode","glitch-mode"),500);log();$("#button-caption").textContent=["Great work. The internet is now 4% more haunted.","Have you considered simply staring at a wall?","The fix has been escalated to a different dimension.","We have notified absolutely nobody."][incidentsMade%4];if(incidentsMade===1)award("First Responder (Unqualified)");if(incidentsMade===5)award("Chaos Intern");if(incidentsMade===10)award("Certified Problem");if(incidentsMade%3===0)spawn(1);toast(["FIX SUCCESSFUL*","INTERNET STATUS: MORE INTERNET","PATCH APPLIED TO YOUR VIBES","ERROR: FIXING CAUSED A FIX ERROR"][incidentsMade%4])}function spawn(amount=3){const layer=$("#popup-layer");for(let i=0;i<amount&&layer.children.length<6;i++){const d=pickFresh(popups,d=>jokeKey(d),"popups");if(!d){toast("ALL UNIQUE POPUP MESSAGES HAVE BEEN SHOWN.");break}const w=document.createElement("div");w.className="popup-window";w.style.left=Math.max(8,Math.random()*Math.max(1,innerWidth-310))+"px";w.style.top=Math.max(72,Math.random()*Math.max(1,innerHeight-250))+"px";w.style.zIndex=String(31+popupCount);const bar=document.createElement("div");bar.className="popup-titlebar";const title=document.createElement("span");title.textContent=d[0];const close=document.createElement("button");close.textContent="×";close.setAttribute("aria-label","Close popup");close.onclick=()=>{w.remove();toast("POPUP CLOSED. THREE MORE HAVE BEEN SUMMONED IN SPIRIT.")};bar.append(title,close);const body=document.createElement("div");body.className="popup-content";const warn=document.createElement("span");warn.className="warn";warn.textContent="⚠";const msg=document.createElement("p");msg.textContent=d[1];body.append(warn,msg);const actions=document.createElement("div");actions.className="popup-actions";const ok=document.createElement("button");ok.textContent="OK, SURE";ok.onclick=()=>{w.remove();toast("YOUR CONSENT HAS BEEN FILED IN THE VOID.")};actions.append(ok);w.append(bar,body,actions);layer.append(w);popupCount++}$("#popup-count").textContent=popupCount+" popup"+(popupCount===1?"":"s")+" summoned";if(popupCount>=5)award("Popup Survivor");if(layer.children.length>=6)toast("POPUP LIMIT REACHED. EVEN THE CHAOS HAS LIMITS.")}function syncMeme(){$("#meme-top").textContent=$("#meme-top-input").value;$("#meme-bottom").textContent=$("#meme-bottom-input").value;const theme=$("#meme-theme").value;const themes={"#7357ff":"violet","#ff4fcb":"pink","#c8ff00":"lime","#171717":"black","#f5f3ec":"paper"};$("#meme").dataset.theme=themes[theme]||"violet";$("#meme").style.backgroundColor=theme;$("#meme").style.color=theme==="#171717"||theme==="#7357ff"?"#fff":"#171717"}function newMeme(){const m=pickFresh(memes,m=>jokeKey([m[0],m[1],m[4]]),"memes");if(!m){toast("YOU HAVE SEEN EVERY MEME IN THIS SET.");return}memeIndex=memes.indexOf(m);$("#meme-top-input").value=m[0];$("#meme-bottom-input").value=m[1];$("#meme-face").replaceChildren(document.createTextNode(m[2]));const s=document.createElement("span");s.textContent=m[3];$("#meme-face").append(s);$("#meme-caption").textContent=m[4];syncMeme()}function copyMeme(){const text=$("#meme-top-input").value+"\n"+$("#meme-bottom-input").value;copyText(text).then(ok=>toast(ok?"MEME TEXT COPIED. GO BE ANNOYING.":"CLIPBOARD BLOCKED. YOUR MEME REMAINS FREE."))}function downloadMeme(){const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");if(!ctx){toast("CANVAS UNAVAILABLE. YOUR MEME LIVES ON SCREEN.");return}canvas.width=1080;canvas.height=1080;const bg=$("#meme-theme").value;ctx.fillStyle=bg;ctx.fillRect(0,0,1080,1080);ctx.fillStyle=bg==="#171717"||bg==="#7357ff"?"#ffffff":"#171717";ctx.textAlign="center";ctx.textBaseline="middle";function wrap(text,maxWidth,font){ctx.font=font;const words=text.trim().split(/\s+/),lines=[];let line="";for(const word of words){const test=line?line+" "+word:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test}if(line)lines.push(line);return lines}const top=wrap($("#meme-top-input").value.toUpperCase(),950,"bold 54px Arial");ctx.font="bold 54px Arial";top.forEach((line,i)=>{ctx.lineWidth=5;ctx.strokeStyle=bg==="#171717"?"#7357ff":"#171717";ctx.strokeText(line,540,100+i*65);ctx.fillText(line,540,100+i*65)});ctx.font="170px Arial";ctx.fillText($("#meme-face").childNodes[0]?.textContent||"🫠",470,520);ctx.font="130px Arial";ctx.fillText($("#meme-face span")?.textContent||"💻",650,560);const bottom=wrap($("#meme-bottom-input").value.toUpperCase(),950,"bold 50px Arial");ctx.font="bold 50px Arial";bottom.forEach((line,i)=>{ctx.lineWidth=5;ctx.strokeStyle=bg==="#171717"?"#7357ff":"#171717";ctx.strokeText(line,540,850+i*58);ctx.fillText(line,540,850+i*58)});ctx.font="20px monospace";ctx.textAlign="right";ctx.fillText("THE INTERNET IS BROKEN™",1040,1048);const a=document.createElement("a");a.download="internet-is-broken-meme.png";a.href=canvas.toDataURL("image/png");a.click();award("Meme Department Intern");toast("MEME EXPORTED. YOUR GROUP CHAT IS NOT READY.")}function touch(){const lines=["A tiny fern has accepted your presence without asking for a password.","That butterfly has absolutely no meetings today.","A leaf just completed its entire life cycle without checking email.","The moss has excellent boundaries and a very slow growth plan.","A squirrel has hidden its snacks and kept the secret.","A daisy is doing its best with the sunlight it was given.","The breeze arrived without an appointment. Iconic.","A beetle is carrying on with its tiny, mysterious agenda.","The soil appreciates that nobody asked it to update a spreadsheet."];const line=pickFresh(lines,jokeKey,"grass");if(!line){toast("ALL UNIQUE OUTDOOR MESSAGES HAVE BEEN SHOWN.");return}grass++;$("#grass-score").textContent=grass;$("#peace-score").textContent=Math.min(100,grass*7)+"%";$("#grass-status").textContent=grass>=10?"local legend":grass>=5?"touching grass":grass?"outside-curious":"terminally online";$("#grass-chance").innerHTML=Math.min(99.9,2.4+grass*4.7).toFixed(1)+"<span>%</span>";$("#grass-patch").style.transform="scale("+Math.min(1.7,1+grass*.035)+")";const sprouts=$("#grass-patch").querySelectorAll("span"),plants=["🌱","🌿","🍀","🌾","🌼","🌻","🌳"];sprouts.forEach((e,i)=>{if(grass>i+1)e.textContent=plants[(grass+i)%plants.length]});$("#grass-message").textContent=line;toast(["OUTSIDE.EXE HAS RESPONDED.","+1 GRASS POINT. INCREDIBLE.","YOU'RE DOING GREAT, SWEET SHRUB.","YOUR PHONE MISSES YOU ALREADY."][Math.floor(Math.random()*4)]);if(grass===1)award("Grass Curious");if(grass===5)award("Certified Plant Parent");if(grass===10)award("Touch Grass Legend")}function refreshReport(){const report=pickFresh(reports,report=>jokeKey(report),"reports");if(!report){toast("ALL UNIQUE HEADLINES HAVE BEEN READ.");return}reportIndex=reports.indexOf(report);$("#report-headline").textContent=report[0];$("#report-summary").textContent=report[1];$("#report-date").textContent="TODAY'S COMPLETELY UNVERIFIED REPORT · "+new Date().toLocaleDateString();toast("REPORT REFRESHED. JOURNALISM HAS LEFT THE BUILDING.")}function statusReport(){return ["THE INTERNET IS BROKEN™ — STATUS REPORT","Generated: "+new Date().toLocaleString(),"Verdict: "+$("#vibe-label").textContent+" ("+$("#vibe").textContent.trim()+")","Open tabs: "+$("#tabs").textContent.trim(),"Attention span: "+$("#attention").textContent.trim(),"Chance of touching grass: "+$("#grass-chance").textContent.trim(),"Incidents caused: "+incidentsMade,"Virtual grass touched: "+grass,"Today's fake headline: "+$("#report-headline").textContent,$("#report-summary").textContent,"","NOTE: This is a parody. All metrics and headlines are fictional.","Visit: "+location.href].join("\n")}async function copyText(text){try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);return true}}catch{}try{const field=document.createElement("textarea");field.value=text;field.setAttribute("readonly","");field.style.position="fixed";field.style.opacity="0";document.body.append(field);field.select();const ok=document.execCommand("copy");field.remove();return ok}catch{return false}}async function copyReport(){const ok=await copyText(statusReport());if(ok){award("Certified Chaos Correspondent");toast("STATUS REPORT COPIED. SPREAD THE MISINFORMATION (SATIRICALLY).")}else toast("COPY BLOCKED BY YOUR BROWSER. TRY THE SHARE BUTTON.")}async function shareReport(){const text=statusReport();if(navigator.share){try{await navigator.share({title:"The Internet Is Broken™ — Status Report",text,url:location.href});award("Certified Chaos Correspondent");toast("REPORT SHARED. INTERNET FEELINGS DISTRIBUTED.");return}catch(e){if(e&&e.name==="AbortError")return}}const ok=await copyText(text);if(ok){award("Certified Chaos Correspondent");toast("SHARE ISN’T AVAILABLE HERE, SO THE REPORT WAS COPIED.")}else toast("SHARING IS BLOCKED HERE. TRY A DIFFERENT BROWSER.")}

/* Hero buttons now launch real, interactive mini-missions instead of one-shot effects. */
const heroMission=$("#hero-interaction");
let repairStep=0,repairScore=0,panicLevel=100,panicTimer=null,panicSeconds=12,panicActive=false;
const repairSteps=[
 {title:"STEP 1 / FIND THE PROBLEM",copy:"The internet is making a weird noise. Pick the first diagnostic test.",options:[["PING THE VIBES",1],["ASK THE ROUTER NICELY",0],["BLAME DNS IMMEDIATELY",2]]},
 {title:"STEP 2 / APPLY SCIENCE-ISH",copy:"The results are inconclusive. Choose a highly certified intervention.",options:[["TURN IT OFF & ON",2],["CLEAR THE DIGITAL AURA",1],["SACRIFICE A SPARE TAB",0]]},
 {title:"STEP 3 / FINAL DEPLOYMENT",copy:"One last decision before we pretend this worked.",options:[["DEPLOY THE PATCH",2],["WRITE A STRONGLY WORDED EMAIL",0],["RESTART THE MOON",1]]}
];
function missionClose(){if(panicTimer){clearInterval(panicTimer);panicTimer=null}panicActive=false;heroMission.hidden=true;heroMission.innerHTML=""}
function renderRepairMission(feedback=""){
 heroMission.hidden=false;heroMission.className="hero-interaction repair-mission";
 const step=repairSteps[repairStep];
 heroMission.innerHTML='<div class="hero-mission-head"><div><span class="hero-mission-kicker">INTERNET REPAIR WIZARD · '+(repairStep+1)+'/3</span><h3 class="hero-mission-title">'+step.title+'</h3></div><button type="button" class="hero-mission-close" aria-label="Close repair wizard">×</button></div><p class="hero-mission-copy">'+step.copy+'</p><div class="hero-mission-progress" aria-label="Repair progress"><i style="width:'+((repairStep)/3*100)+'%"></i></div><div class="hero-mission-options">'+step.options.map((o,i)=>'<button type="button" class="button outline" data-repair-choice="'+i+'">'+o[0]+'</button>').join("")+'</div><p class="hero-mission-feedback" aria-live="polite">'+feedback+'</p><div class="hero-mission-stats"><span>FIX QUALITY: '+repairScore+'/6</span><span>REAL INTERNET CONNECTION: NOT TESTED</span></div>';
 heroMission.querySelector(".hero-mission-close").addEventListener("click",missionClose);
 heroMission.querySelectorAll("[data-repair-choice]").forEach(button=>button.addEventListener("click",()=>{
  const choice=step.options[Number(button.dataset.repairChoice)];repairScore+=choice[1];
  if(repairStep<repairSteps.length-1){repairStep++;renderRepairMission("Test accepted: "+choice[0]+". The clipboard is nodding.");}
  else{heroMission.className="hero-interaction repair-mission";heroMission.innerHTML='<div class="hero-mission-head"><div><span class="hero-mission-kicker">DIAGNOSTIC COMPLETE · RESULT UNVERIFIED</span><h3 class="hero-mission-title">'+(repairScore>=5?"THE INTERNET HAS BEEN MOSTLY PACIFIED.":"WE HAVE SUCCESSFULLY CREATED A NEW PROBLEM.")+'</h3></div><button type="button" class="hero-mission-close" aria-label="Close repair results">×</button></div><p class="hero-mission-copy">'+(repairScore>=5?"Your fictional repair score is impressive. Your actual Wi-Fi remains a mystery.":"Your choices have been forwarded to a committee of extremely small IT consultants.")+'</p><div class="hero-mission-stats"><span>FINAL SCORE: '+repairScore+'/6</span><span>INTERNET FIXED: ALLEGEDLY</span></div><div class="hero-mission-options" style="margin-top:14px"><button type="button" class="button dark" id="repair-retry">RUN DIAGNOSTICS AGAIN ↻</button><button type="button" class="button outline" id="repair-close">RETURN TO THE VOID</button></div>';
   heroMission.querySelector("#repair-retry").addEventListener("click",startRepairMission);heroMission.querySelector("#repair-close").addEventListener("click",missionClose);heroMission.querySelector(".hero-mission-close").addEventListener("click",missionClose);award("Unqualified Internet Technician");toast("DIAGNOSTIC COMPLETE. CERTIFICATION PRINTED ON INVISIBLE PAPER.");
  }
 }));
}
function startRepairMission(){if(panicTimer){clearInterval(panicTimer);panicTimer=null}repairStep=0;repairScore=0;renderRepairMission();heroMission.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"});}
function renderPanicMission(){
 heroMission.hidden=false;heroMission.className="hero-interaction panic-mission";
 heroMission.innerHTML='<div class="hero-mission-head"><div><span class="hero-mission-kicker">PANIC ROOM · '+(panicActive?"LIVE SIMULATION":"SIMULATION COMPLETE")+'</span><h3 class="hero-mission-title">'+(panicActive?"QUICK. CALM THE CHAOS.":"YOU SURVIVED THE INTERNET.")+'</h3></div><button type="button" class="hero-mission-close" aria-label="Close panic room">×</button></div><p class="hero-mission-copy">'+(panicActive?"You have "+panicSeconds+" seconds to bring the panic meter down. Click the calm buttons before the timer hits zero.":"The simulated emergency is over. Your browser has been given a tiny blanket.")+'</p><div class="hero-mission-progress" aria-label="Panic level"><i style="width:'+panicLevel+'%;background:var(--pink)"></i></div><div class="hero-mission-stats"><span>PANIC LEVEL: <strong>'+panicLevel+'%</strong></span><span>TIME LEFT: <strong>'+panicSeconds+'s</strong></span></div><div class="hero-mission-options" style="margin-top:14px">'+(panicActive?'<button type="button" class="button outline" data-calm="25">CLOSE 3 TABS (SPIRITUALLY) −25</button><button type="button" class="button outline" data-calm="18">TAKE ONE BREATH −18</button><button type="button" class="button outline" data-calm="12">MUTE THE GROUP CHAT −12</button>':'<button type="button" class="button dark" id="panic-again">PANIC AGAIN ↻</button><button type="button" class="button outline" id="panic-finish-close">CLOSE PANIC ROOM</button>')+'</div><p class="hero-mission-feedback" id="panic-feedback" aria-live="polite">'+(panicActive?"THIS IS A SIMULATION. YOUR REAL CONNECTION IS UNTOUCHED.":"Outcome: "+(panicLevel===0?"UNREASONABLY CALM":"CHAOS TEMPORARILY CONTAINED"))+'</p>';
 heroMission.querySelector(".hero-mission-close").addEventListener("click",missionClose);
 if(panicActive)heroMission.querySelectorAll("[data-calm]").forEach(button=>button.addEventListener("click",()=>{
  panicLevel=Math.max(0,panicLevel-Number(button.dataset.calm));renderPanicMission();
  if(panicLevel===0)finishPanicMission(true);
 }));
 else{heroMission.querySelector("#panic-again").addEventListener("click",startPanicMission);heroMission.querySelector("#panic-finish-close").addEventListener("click",missionClose)}
}
function finishPanicMission(calm){
 if(panicTimer){clearInterval(panicTimer);panicTimer=null}panicActive=false;
 if(calm){panicLevel=0;award("Panic Room Survivor");toast("PANIC METER DELETED. YOU ARE THE IT DEPARTMENT NOW.");}
 else{panicLevel=Math.max(10,panicLevel);toast("TIME'S UP. THE PANIC HAS BEEN REASSIGNED.");}
 renderPanicMission();
}
function startPanicMission(){
 if(panicTimer){clearInterval(panicTimer);panicTimer=null}
 panicLevel=100;panicSeconds=12;panicActive=true;renderPanicMission();spawn(2);
 heroMission.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"});
 panicTimer=setInterval(()=>{if(!panicActive){clearInterval(panicTimer);panicTimer=null;return}panicSeconds--;panicLevel=Math.min(100,panicLevel+3);if(panicSeconds<=0){finishPanicMission(false);return}renderPanicMission()},1000);
}

$("#chaos-button").onclick=startRepairMission;$("#chaos-again").onclick=chaos;$("#panic-button").onclick=startPanicMission;$("#spawn-popups").onclick=()=>spawn(3);$("#new-meme").onclick=newMeme;$("#copy-meme").onclick=copyMeme;$("#download-meme").onclick=downloadMeme;$("#meme-top-input").addEventListener("input",syncMeme);$("#meme-bottom-input").addEventListener("input",syncMeme);$("#meme-theme").addEventListener("change",syncMeme);syncMeme();$("#touch-grass-button").onclick=touch;$("#grass-field").onclick=touch;$("#refresh-report").onclick=refreshReport;$("#copy-report").onclick=copyReport;$("#share-report").onclick=shareReport;const verdictButtons=[...document.querySelectorAll(".doom-reaction")];const verdictStatus=$("#doom-verdict-status");function setDoomVerdict(value,announce=true){verdictButtons.forEach(button=>{const selected=button.dataset.verdict===value;button.classList.toggle("selected",selected);button.setAttribute("aria-pressed",String(selected))});if(verdictStatus)verdictStatus.textContent=value?"YOUR VERDICT IS SAVED ON THIS DEVICE":"VOTE LOCALLY · NO ACCOUNT";try{if(value)localStorage.setItem("iib-doom-verdict",value);else localStorage.removeItem("iib-doom-verdict")}catch{}if(announce&&value)toast("VERDICT FILED. THE EDITORS FEEL JUDGED.")}verdictButtons.forEach(button=>button.addEventListener("click",()=>setDoomVerdict(button.classList.contains("selected")?"":button.dataset.verdict)));try{const savedVerdict=localStorage.getItem("iib-doom-verdict");if(savedVerdict&&verdictButtons.some(button=>button.dataset.verdict===savedVerdict))setDoomVerdict(savedVerdict,false)}catch{}$("#grass-field").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();touch()}});$("#one-more-time").onclick=()=>{chaos();window.scrollTo({top:0,behavior:"smooth"})};$("#achievement-close").onclick=()=>$("#achievement").classList.remove("show");$("#sample-close").onclick=()=>toast("NICE TRY. THAT WAS ONLY A PREVIEW.");$("#sample-ok").onclick=()=>toast("OKAY. YOUR VIBE SESSION IS STILL EXPIRED.");$("#report-date").textContent="TODAY'S COMPLETELY UNVERIFIED REPORT · "+new Date().toLocaleDateString();$("#copyright-year").textContent=new Date().getFullYear();document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("#popup-layer").replaceChildren();$("#achievement").classList.remove("show");toast("ESCAPE ATTEMPT LOGGED. IRL ESCAPE RECOMMENDED.")}if(e.key==="?"&&!["INPUT","TEXTAREA"].includes(document.activeElement?.tagName)){toast("SECRET FOUND: the internet was inside you all along.");award("Found the Secret")}const keys=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];window.__keys=(window.__keys||[]).concat(e.key).slice(-10);if(keys.every((k,i)=>window.__keys[i]===k)){document.body.classList.add("glitch-mode");$("#konami-hint").textContent="YOU KNOW TOO MUCH.";award("Konami Chaos Wizard");spawn(3);toast("KONAMI CODE ACCEPTED. NOTHING HAS IMPROVED.")}});try{const a=JSON.parse(localStorage.getItem("iib-achievements")||"[]");if(a.length)$("#konami-hint").title=a.length+" nonsense achievements collected on this device"}catch{}


// Free, browser-only interactive extras: no APIs, accounts, or paid services.
const quizQuestions=[
 {q:"You open your phone to check one thing. What happens next?",a:[["I do the thing and leave.",0],["I check a few notifications.",1],["It is somehow tomorrow.",2]]},
 {q:"A CAPTCHA asks you to select every square containing a bicycle. You…",a:[["Click the obvious ones.",0],["Debate whether the handlebar counts.",1],["Begin negotiating with the pixels.",2]]},
 {q:"An app wants your contacts, microphone and location to show a clock. You…",a:[["Find a different clock.",0],["Check which permissions are optional.",1],["Assume the clock has a side hustle.",2]]}
];
let quizIndex=0,quizScore=0,quizSelected=false,focusRemaining=25,focusInterval=null,excuseIndex=-1;
const excuses=[
 "A pigeon has mistaken my calendar for a legally binding treaty.",
 "I promised my laundry I'd stop leaving it in the character-development pile.",
 "My house key has entered a witness-protection program.",
 "I must supervise a very important soup-related experiment.",
 "A distant relative sent me a puzzle with no instructions or mercy.",
 "I have been appointed interim chair of the neighborhood's imaginary committee.",
 "My left sock has gone missing and the right one refuses to comment.",
 "I need to water a plant that is emotionally dependent on my schedule."
];
function renderQuiz(){
 const question=quizQuestions[quizIndex];
 $("#quiz-progress").textContent="QUESTION "+(quizIndex+1)+" / "+quizQuestions.length;
 $("#quiz-question").textContent=question.q;
 $("#quiz-options").replaceChildren();
 question.a.forEach(([label,score])=>{
  const button=document.createElement("button");
  button.type="button";button.className="button outline quiz-option";button.textContent=label;
  button.addEventListener("click",()=>{
   if(quizSelected)return;
   quizSelected=true;quizScore+=score;
   $("#quiz-options").querySelectorAll("button").forEach(b=>{b.disabled=true;b.classList.toggle("selected",b===button)});
   $("#quiz-result").textContent="Answer locked. Your highly scientific score is now "+quizScore+".";
   $("#quiz-next").disabled=false;
  });
  $("#quiz-options").append(button);
 });
 $("#quiz-result").textContent="Pick the answer that feels painfully accurate.";
 $("#quiz-next").hidden=false;$("#quiz-next").disabled=true;$("#quiz-next").textContent=quizIndex===quizQuestions.length-1?"REVEAL MY VIBE ↗":"NEXT QUESTION ↗";
 $("#quiz-restart").hidden=true;
}
function finishQuiz(){
 const results=quizScore<=1?["CASUAL INTERNET ENJOYER","You appear to have boundaries. Suspicious, but healthy."]:quizScore<=3?["TAB JUGGLER","You are online a normal amount. Probably."]:["CERTIFIED TERMINALLY ONLINE","Your browser would like to remind you that outside has textures."];
 $("#quiz-progress").textContent="DIAGNOSIS COMPLETE";
 $("#quiz-question").textContent=results[0];
 $("#quiz-options").replaceChildren();
 $("#quiz-result").textContent=results[1]+" Final score: "+quizScore+"/6.";
 $("#quiz-next").hidden=true;$("#quiz-restart").hidden=false;
 try{const best=Number(localStorage.getItem("iib-quiz-best")||0);if(quizScore>best)localStorage.setItem("iib-quiz-best",String(quizScore));}catch{}
 award(quizScore>=5?"Certified Terminally Online":quizScore<=1?"Healthy Tab Boundaries":"Tab Juggler");
}
function nextQuiz(){
 if(!quizSelected)return;
 if(quizIndex===quizQuestions.length-1){finishQuiz();return}
 quizIndex++;quizSelected=false;renderQuiz();
}
function restartQuiz(){quizIndex=0;quizScore=0;quizSelected=false;renderQuiz()}
function newExcuse(){const excuse=pickFresh(excuses,jokeKey,"excuses");if(!excuse){toast("ALL UNIQUE EXCUSES HAVE BEEN GENERATED.");return}excuseIndex=excuses.indexOf(excuse);$("#excuse-text").textContent=excuse;}
function updateFocusClock(){
 const mins=String(Math.floor(focusRemaining/60)).padStart(2,"0"),secs=String(focusRemaining%60).padStart(2,"0");
 $("#focus-clock").textContent=mins+":"+secs;
 $("#focus-clock").setAttribute("aria-label",mins+" minutes "+secs+" seconds remaining");
}
function startFocus(){
 if(focusInterval){clearInterval(focusInterval);focusInterval=null;$("#focus-start").textContent="RESUME SPRINT ▶";$("#focus-status").textContent="PAUSED. TAKE YOUR TIME.";return}
 if(focusRemaining<=0)focusRemaining=25;
 $("#focus-start").textContent="PAUSE SPRINT Ⅱ";$("#focus-status").textContent="ONE THING AT A TIME. YOU'VE GOT THIS.";
 focusInterval=setInterval(()=>{
  focusRemaining--;updateFocusClock();
  if(focusRemaining<=0){
   clearInterval(focusInterval);focusInterval=null;
   $("#focus-start").textContent="START AGAIN ▶";$("#focus-status").textContent="SPRINT COMPLETE. YOU DID A THING.";
   toast("25 SECONDS OF FOCUS. EXTREMELY ICONIC.");award("Focus Goblin");
  }
 },1000);
}
function resetFocus(){
 if(focusInterval){clearInterval(focusInterval);focusInterval=null}
 focusRemaining=25;updateFocusClock();$("#focus-start").textContent="START SPRINT ▶";$("#focus-status").textContent="READY WHEN YOU ARE.";
}
$("#quiz-next").addEventListener("click",nextQuiz);
$("#quiz-restart").addEventListener("click",restartQuiz);
$("#new-excuse").addEventListener("click",newExcuse);
$("#copy-excuse").addEventListener("click",async()=>{const ok=await copyText($("#excuse-text").textContent);toast(ok?"EXCUSE COPIED. DEPLOY RESPONSIBLY.":"CLIPBOARD BLOCKED. YOUR EXCUSE IS STILL VALID.");});
$("#focus-start").addEventListener("click",startFocus);
$("#focus-reset").addEventListener("click",resetFocus);
renderQuiz();updateFocusClock();


/* Joke Lab: local template engine, unique case IDs, and browser-only favourites. */
const jokeLabStorageKey="iib-joke-vault-v1";
let jokeLabVisitCount=0,currentLabJoke="";
function labPick(key,n,offset=0){const list=jokeBits[key]||[];return list.length?list[Math.abs(n*7+offset*13+Math.floor(n/list.length)*3)%list.length]:"the internet";}
function generateLabJoke(){
 const category=$("#joke-category").value,n=nextJokeIndex();jokeLabVisitCount++;
 let joke="";
 if(category==="tech")joke=labPick("tech",n,1)+" "+labPick("techAction",n,2)+". "+labPick("techTwist",n,3);
 else if(category==="office")joke=labPick("subject",n,1)+" "+labPick("action",n,2)+" "+labPick("object",n,3)+". "+labPick("twist",n,4);
 else if(category==="excuse")joke=labPick("excuse",n,1)+" "+labPick("excuseThing",n,2)+" "+labPick("excuseEvent",n,3)+".";
 else if(category==="meme")joke=labPick("memeA",n,1)+"\n"+labPick("memeB",n,2)+"\n"+labPick("twist",n,3);
 else joke=labPick("subject",n,2)+" "+labPick("action",n,5)+" "+labPick("object",n,8)+". "+labPick("twist",n,11);
 currentLabJoke=joke+"\n\n— JOKE LAB CASE #"+String(n).padStart(6,"0");
 rememberJoke(currentLabJoke,jokeKey);
 $("#joke-output").textContent=currentLabJoke;
 $("#joke-case").textContent="CASE FILE #"+String(n).padStart(6,"0");
 $("#joke-count").textContent=jokeLabVisitCount+" JOKE"+(jokeLabVisitCount===1?"":"S")+" MADE THIS VISIT";
 $("#joke-feedback").textContent="Fresh output generated locally. No network request made.";
 $("#joke-save").textContent="SAVE TO MY VAULT ♡";
}
function readJokeVault(){try{const value=JSON.parse(localStorage.getItem(jokeLabStorageKey)||"[]");return Array.isArray(value)?value.filter(x=>typeof x==="string"):[]}catch{return []}}
function renderJokeVault(){
 const list=$("#joke-vault-list"),saved=readJokeVault();$("#vault-count").textContent=saved.length+" SAVED";list.replaceChildren();
 if(!saved.length){const empty=document.createElement("p");empty.className="vault-empty";empty.textContent="Nothing saved yet. Be the first curator of nonsense.";list.append(empty);return}
 saved.slice().reverse().forEach((joke,reverseIndex)=>{
  const originalIndex=saved.length-1-reverseIndex,card=document.createElement("article"),p=document.createElement("p"),remove=document.createElement("button");
  card.className="vault-item";p.textContent=joke;remove.type="button";remove.textContent="×";remove.setAttribute("aria-label","Remove saved joke");
  remove.addEventListener("click",()=>{const latest=readJokeVault();latest.splice(originalIndex,1);try{localStorage.setItem(jokeLabStorageKey,JSON.stringify(latest))}catch{}renderJokeVault()});
  card.append(p,remove);list.append(card);
 });
}
$("#joke-generate").addEventListener("click",generateLabJoke);
$("#joke-copy").addEventListener("click",async()=>{const ok=await copyText(currentLabJoke);$("#joke-feedback").textContent=ok?"Copied. Release this nonsense into the wild.":"Clipboard blocked by browser. You can still select and copy the text."});
$("#joke-save").addEventListener("click",()=>{
 if(!currentLabJoke)return;
 const saved=readJokeVault();if(saved.includes(currentLabJoke)){toast("THIS ONE IS ALREADY IN YOUR VAULT.");return}
 saved.push(currentLabJoke);try{localStorage.setItem(jokeLabStorageKey,JSON.stringify(saved));renderJokeVault();$("#joke-save").textContent="SAVED TO VAULT ✓";$("#joke-feedback").textContent="Saved on this device only."}catch{$("#joke-feedback").textContent="Storage is unavailable. Your joke is still on screen."}
});
$("#joke-clear-vault").addEventListener("click",()=>{
 if(!readJokeVault().length){toast("THE VAULT IS ALREADY EMPTY.");return}
 try{localStorage.removeItem(jokeLabStorageKey)}catch{}
 renderJokeVault();toast("SAVED JOKES CLEARED FROM THIS DEVICE.");
});
renderJokeVault();generateLabJoke();


/* Daily Chaos Quest: persistent, browser-only progression tied to existing tools. */
const questStorageKey="iib-chaos-quest-v1";
const questDefinitions=[
 {id:"repair",actionId:"chaos-button",icon:"🛠️",title:"Consult the unqualified technician",description:"Run the 3-step internet repair protocol.",xp:25},
 {id:"panic",actionId:"panic-button",icon:"🚨",title:"Enter the panic room",description:"Survive a completely fictional emergency.",xp:25},
 {id:"grass",actionId:"touch-grass-button",icon:"🌱",title:"Grow one pixel of peace",description:"Touch the virtual grass. It misses you.",xp:25},
 {id:"joke",actionId:"joke-generate",icon:"🧪",title:"Manufacture fresh nonsense",description:"Generate a brand-new Joke Lab case file.",xp:25},
 {id:"popup",actionId:"spawn-popups",icon:"🪟",title:"Invite chaos to your desktop",description:"Summon the least helpful windows alive.",xp:25}
];
function questDateKey(date=new Date()){return date.getFullYear()+"-"+String(date.getMonth()+1).padStart(2,"0")+"-"+String(date.getDate()).padStart(2,"0")}
function questDayNumber(key){const [y,m,d]=key.split("-").map(Number);return Math.floor(Date.UTC(y,m-1,d)/86400000)}
function questDailyTasks(day){
 let seed=day.split("-").reduce((sum,n)=>sum*31+Number(n),7);
 return questDefinitions.map(item=>({item,sort:((seed=(seed*9301+49297)%233280)+item.id.length*97)%233280})).sort((a,b)=>a.sort-b.sort).slice(0,3).map(entry=>entry.item);
}
function readQuestData(){
 try{const saved=JSON.parse(localStorage.getItem(questStorageKey)||"null");if(saved&&typeof saved==="object")return {date:typeof saved.date==="string"?saved.date:"",tasks:Array.isArray(saved.tasks)?saved.tasks:[],completed:Array.isArray(saved.completed)?saved.completed:[],xp:Math.max(0,Number(saved.xp)||0),streak:Math.max(0,Number(saved.streak)||0),lastCompletedDate:typeof saved.lastCompletedDate==="string"?saved.lastCompletedDate:""};}catch{}
 return {date:"",tasks:[],completed:[],xp:0,streak:0,lastCompletedDate:""};
}
let questData=readQuestData();
function saveQuestData(){try{localStorage.setItem(questStorageKey,JSON.stringify(questData))}catch{}}
function syncQuestDay(){
 const today=questDateKey();
 if(questData.date!==today){questData.date=today;questData.tasks=questDailyTasks(today).map(task=>task.id);questData.completed=[];saveQuestData()}
 const validIds=new Set(questDefinitions.map(task=>task.id));
 questData.tasks=questData.tasks.filter(id=>validIds.has(id));
 if(questData.tasks.length!==3)questData.tasks=questDailyTasks(today).map(task=>task.id);
 questData.completed=questData.completed.filter(id=>questData.tasks.includes(id));
 saveQuestData();
}
function questLevel(xp){
 const levels=[["INTERN",0],["TAB APPRENTICE",100],["BUFFERING BOSS",250],["VIBE ENGINEER",500],["CHAOS LEGEND",900],["THE INTERNET ITSELF",1500]];
 let current=levels[0],next=null;
 for(let i=0;i<levels.length;i++){if(xp>=levels[i][1])current=levels[i];else{next=levels[i];break}}
 return {name:current[0],number:levels.indexOf(current)+1,next};
}
function renderQuest(){
 const list=$("#quest-list");if(!list)return;
 const tasks=questData.tasks.map(id=>questDefinitions.find(task=>task.id===id)).filter(Boolean);
 list.replaceChildren();
 tasks.forEach(task=>{
  const done=questData.completed.includes(task.id),card=document.createElement("article"),icon=document.createElement("span"),copy=document.createElement("div"),title=document.createElement("h3"),desc=document.createElement("p"),meta=document.createElement("span"),button=document.createElement("button");
  card.className="quest-item"+(done?" is-complete":"");icon.className="quest-item-icon";icon.textContent=done?"✓":task.icon;
  copy.className="quest-item-copy";title.textContent=task.title;desc.textContent=task.description;meta.className="quest-reward mono";meta.textContent=done?"QUEST CLEARED":"+"+task.xp+" XP";
  copy.append(title,desc,meta);button.type="button";button.className="button "+(done?"dark":"outline")+" small quest-launch";button.textContent=done?"COMPLETE ✓":"START QUEST ↗";button.disabled=done;button.dataset.questAction=task.actionId;
  card.append(icon,copy,button);list.append(card);
 });
 const done=questData.completed.length,total=tasks.length,pct=Math.round(done/total*100),level=questLevel(questData.xp);
 $("#quest-xp").textContent=String(questData.xp).padStart(3,"0");
 $("#quest-level").textContent="LEVEL "+level.number+" · "+level.name;
 $("#quest-streak").innerHTML=questData.streak+' <small>day'+(questData.streak===1?"":"s")+"</small>";
 $("#quest-progress-label").textContent=done+" / "+total+" QUESTS COMPLETE";
 $("#quest-progress-percent").textContent=pct+"%";$("#quest-progress-bar").style.width=pct+"%";
 $("#quest-status").textContent=done===total?"DAILY CHAOS COMPLETE. +50 BONUS XP. YOU HAVE PEAKED (TODAY).":done===0?"Three tiny quests. Zero real-world consequences. Probably.":(total-done)+" quest"+(total-done===1?"":"s")+" left. Keep the nonsense rolling.";
}
function completeQuest(taskId){
 if(!questData.tasks.includes(taskId)||questData.completed.includes(taskId))return;
 const task=questDefinitions.find(item=>item.id===taskId);if(!task)return;
 questData.completed.push(taskId);questData.xp+=task.xp;
 const wasComplete=questData.completed.length===questData.tasks.length;
 if(wasComplete&&questData.lastCompletedDate!==questData.date){
  const gap=questData.lastCompletedDate?questDayNumber(questData.date)-questDayNumber(questData.lastCompletedDate):0;
  questData.streak=gap===1?questData.streak+1:1;questData.xp+=50;questData.lastCompletedDate=questData.date;
 }
 saveQuestData();renderQuest();
 if(wasComplete){toast("DAILY QUEST COMPLETE. +50 BONUS XP.");award("Chaos Quest Champion")}
 else toast("QUEST CLEARED. +"+task.xp+" CHAOS XP.");
}
syncQuestDay();renderQuest();
document.addEventListener("click",event=>{
 const launch=event.target.closest("[data-quest-action]");
 if(launch){const target=$("#"+launch.dataset.questAction);if(target&&!launch.disabled)target.click();return}
 const source=event.target.closest("button[id]");
 if(!source)return;
 const task=questDefinitions.find(item=>item.actionId===source.id&&questData.tasks.includes(item.id));
 if(task)completeQuest(task.id);
});

// Progressive Web App install + offline shell
let installPromptEvent=null;
const installButton=$("#install-app");
function updateInstallButton(){if(!installButton)return;installButton.hidden=false;installButton.setAttribute("aria-label",installPromptEvent?"Install The Internet Is Broken as an app":"Install or learn how to add The Internet Is Broken to your home screen")}
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();installPromptEvent=event;updateInstallButton();installButton.innerHTML='<span aria-hidden="true">↓</span> INSTALL APP';});
window.addEventListener("appinstalled",()=>{installPromptEvent=null;installButton.innerHTML='<span aria-hidden="true">✓</span> APP INSTALLED';installButton.disabled=true;toast("APP INSTALLED. THE CHAOS IS NOW PORTABLE.");});
installButton?.addEventListener("click",async()=>{if(installPromptEvent){installPromptEvent.prompt();const choice=await installPromptEvent.userChoice;installPromptEvent=null;if(choice.outcome==="accepted"){installButton.innerHTML='<span aria-hidden="true">✓</span> INSTALLING…';toast("INSTALL ACCEPTED. WELCOME TO THE HOME SCREEN.")}else toast("INSTALL DECLINED. THE INTERNET RESPECTS YOUR CHOICE.");return}const standalone=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===true;if(standalone){toast("YOU'RE ALREADY IN THE APP. VERY OFFICIAL.");return}toast(/iphone|ipad|ipod/i.test(navigator.userAgent)?"ON IPHONE: TAP SHARE, THEN ‘ADD TO HOME SCREEN’.":"INSTALL MAY NOT BE AVAILABLE YET. Open this site over HTTPS in a supported browser, then use its menu → Install app or Add to Home screen.");});
updateInstallButton();
if("serviceWorker" in navigator && (location.protocol==="https:"||location.hostname==="localhost")){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}


// Cursed Decision Engine: five rounds of escalating administrative nonsense.
const cursedScenarios=[
 {q:"Your router has requested a performance review. You are the manager now.",c:"Choose carefully. The consequences are legally fictional.",o:[["Promote it to middle management",8,"It schedules 14 meetings and buffers through every single one."],["Ask it to explain its feelings",18,"The router says “it's not you” and disconnects from the family plan."],["Replace it with a suspicious potato",34,"The potato achieves 2 bars of Wi-Fi and immediately demands equity."]]},
 {q:"A CAPTCHA asks you to identify every image containing emotional damage.",c:"The squares are getting personal.",o:[["Select all squares containing Mondays",12,"Correct. The CAPTCHA sighs and lets you through."],["Click the tiny traffic cone for moral support",25,"The cone is now your emergency contact."],["Challenge the CAPTCHA to a duel",38,"You lose to a bicycle. It was not even in the images."]]},
 {q:"The cloud has fallen out of the sky and landed in your kitchen.",c:"It is dripping on the router and asking for rent.",o:[["Offer it a tiny umbrella",10,"The cloud leaves a five-star review of your hospitality."],["Put it in rice",28,"The rice becomes weather. The kitchen is now a climate."],["Ask it to hold your browser tabs",40,"It rains 87 open tabs. One is playing music. Nobody knows which."]]},
 {q:"A raccoon has become your new IT administrator.",c:"It has already eaten the password policy.",o:[["Give it a laminated checklist",14,"It eats the checklist, but remembers the vibes."],["Let it deploy directly to production",42,"Production is now a dumpster with excellent uptime."],["Ask it to reset your password",24,"Your new password is three acorns and a mysterious scream."]]},
 {q:"The internet offers you one wish, but terms and conditions apply.",c:"Page 4,091 contains a drawing of a horse.",o:[["Unlimited snacks, but every chip is a USB",18,"Crunchy, incompatible, and somehow still your fault."],["All tabs close, except one haunted tab",30,"It whispers “you forgot something” until the heat death of the universe."],["Make the internet normal again",50,"REQUEST DENIED: NORMALITY IS A PREMIUM FEATURE."]]}
];
let cursedRound=0,cursedScore=0,raccoons=0;
const cursedQuestion=$("#cursed-question"),cursedContext=$("#cursed-context"),cursedOptions=$("#cursed-options"),cursedFeedback=$("#cursed-feedback"),cursedRestart=$("#cursed-restart");
function renderCursedGame(){
 const finished=cursedRound>=cursedScenarios.length;
 $("#cursed-round").textContent=finished?"AUDIT COMPLETE":("ROUND "+(cursedRound+1)+" / "+cursedScenarios.length);
 $("#cursed-score").textContent=Math.min(100,cursedScore)+"%";
 $("#cursed-meter-fill").style.width=Math.min(100,cursedScore)+"%";
 if(finished){
  const ending=cursedScore<75?["PROBATIONARY CHAOS INTERN","You caused only a medium-sized incident. The potato has been promoted over you."]:cursedScore<125?["CERTIFIED PROBLEM GOBLIN","Reality has filed a complaint. You have been given a novelty mug and no responsibilities."]:["SUPREME MINISTER OF NONSENSE","The internet has resigned. A raccoon is now in charge of your pension."];
  cursedQuestion.textContent=ending[0];cursedContext.textContent=ending[1];cursedOptions.innerHTML="";cursedFeedback.textContent="FINAL CHAOS LIABILITY: "+Math.min(100,cursedScore)+"%. YOUR REPORT HAS BEEN MAILED TO THE MOON.";cursedRestart.hidden=false;award("Licensed Reality Menace");return;
 }
 const scenario=cursedScenarios[cursedRound];cursedQuestion.textContent=scenario.q;cursedContext.textContent=scenario.c;
 cursedOptions.innerHTML=scenario.o.map((option,index)=>'<button type="button" class="button outline cursed-option" data-choice="'+index+'">'+option[0]+'</button>').join("");
 cursedFeedback.textContent="YOUR DECISIONS WILL BE JUDGED BY A VERY SMALL OWL.";cursedRestart.hidden=true;
}
cursedOptions?.addEventListener("click",event=>{
 const button=event.target.closest("[data-choice]");if(!button||cursedRound>=cursedScenarios.length)return;
 const option=cursedScenarios[cursedRound].o[Number(button.dataset.choice)];if(!option)return;
 cursedScore+=option[1];cursedRound++;cursedFeedback.textContent="OFFICIAL FINDING: "+option[2];
 renderCursedGame();if(cursedRound<cursedScenarios.length)cursedFeedback.textContent="OFFICIAL FINDING: "+option[2];
});
cursedRestart?.addEventListener("click",()=>{cursedRound=0;cursedScore=0;renderCursedGame();});
renderCursedGame();
$("#summon-raccoon")?.addEventListener("click",()=>{
 if(raccoons>=12){toast("THE RACCOON UNION HAS FROZEN HIRING.");return}
 raccoons++;const critter=document.createElement("span");critter.className="raccoon";critter.textContent=["🦝","🦝","🦝","🥷🦝"][Math.floor(Math.random()*4)];critter.title="Unqualified. Enthusiastic.";$("#raccoon-cage").appendChild(critter);
 $("#raccoon-count").textContent="RACCOONS ON PAYROLL: "+raccoons;
 if(raccoons===5)toast("FIVE RACCOONS. THAT IS A DEPARTMENT NOW.");
 if(raccoons===12)toast("HIRING FREEZE. THE RACCOONS HAVE FORMED A UNION.");
});
$("#reality-toggle")?.addEventListener("click",event=>{
 const bent=document.body.classList.toggle("reality-bent");event.currentTarget.setAttribute("aria-pressed",String(bent));
 event.currentTarget.textContent=bent?"RESTORE BORING REALITY ↶":"BEND REALITY ↝";
 $("#reality-status").textContent=bent?"REALITY BENT. YOUR TAXES ARE NOW PAID IN VIBES.":"Reality is currently held together by one paperclip.";
 toast(bent?"REALITY PATCH APPLIED. SIDE EFFECTS ARE A FEATURE.":"REALITY RESTORED. BOOOO, RESPONSIBILITY.");
});


// Router boss fight. The "crash" is only a dismissible visual simulation.
const bossMax=100;let bossHp=bossMax,bossWon=false;
const bossTaunts=["“Have you tried turning your expectations off and on again?”","“I am not slow. I am building suspense.”","“Your password is incorrect because I said so.”","“I have 2.4 GHz and 0.0 emotional intelligence.”","“The cloud is just someone else's raccoon.”"];
const bossLogs=["CRITICAL HIT: router felt that in its ethernet port.","VIBE PACKET DELIVERED. NO REFUNDS.","THE ROUTER HAS REQUESTED TO SPEAK TO YOUR MANAGER.","A SINGLE PIXEL HAS BEEN DEFEATED. CELEBRATIONS ARE PREMATURE.","NETWORK GOBLIN DETECTED. PLEASE OFFER IT A CRACKER."];
function paintBoss(){
 $("#boss-hp").style.width=Math.max(0,bossHp)+"%";$("#boss-hp-label").textContent=Math.max(0,bossHp)+" / 100";
 $("#boss-attack").disabled=bossWon;$("#boss-heal").disabled=bossWon;
 $("#boss-reset").hidden=!bossWon;
 if(bossWon){$("#boss-name").textContent="ROUTER DEFEATED (TEMPORARILY)";$("#boss-taunt").textContent="The router has been unplugged emotionally. It will return after a firmware update.";$("#boss-log").textContent="ACHIEVEMENT UNLOCKED: YOU HAVE DEFEATED THE INTERNET'S LANDLORD.";award("Router Whisperer");}
}
$("#boss-attack")?.addEventListener("click",()=>{
 if(bossWon)return;bossHp=Math.max(0,bossHp-(12+Math.floor(Math.random()*20)));
 $("#boss-taunt").textContent=bossTaunts[Math.floor(Math.random()*bossTaunts.length)];
 $("#boss-log").textContent=bossLogs[Math.floor(Math.random()*bossLogs.length)];
 $("#boss-art").classList.remove("is-hit");void $("#boss-art").offsetWidth;$("#boss-art").classList.add("is-hit");
 paintBoss();if(!bossWon)toast("VIBE DEPLOYED. DAMAGE IS MOSTLY EMOTIONAL.");
});
$("#boss-heal")?.addEventListener("click",()=>{
 if(bossWon)return;bossHp=Math.min(100,bossHp+20);$("#boss-taunt").textContent="“HAHA. FREE CUSTOMER SUPPORT.”";$("#boss-log").textContent="YOU HEALED THE BOSS. HUMANITY HAS QUESTIONS.";paintBoss();
});
$("#boss-reset")?.addEventListener("click",()=>{bossHp=100;bossWon=false;$("#boss-name").textContent="THE ROUTER OF DOOM";$("#boss-taunt").textContent=bossTaunts[0];$("#boss-log").textContent="BATTLE RULES: CLICK THE VIBES. REALITY WILL REMAIN MOSTLY INTACT.";paintBoss();});
const bsod=$("#fake-bsod-overlay");
$("#fake-bsod")?.addEventListener("click",()=>{bsod.hidden=false;$("#bsod-recover").focus();});
$("#bsod-recover")?.addEventListener("click",()=>{bsod.hidden=true;toast("REALITY RESTORED. NO COMPUTERS WERE EMOTIONALLY BLUE-SCREENED.");award("Survived the Fake Crash");});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&bsod&&!bsod.hidden){bsod.hidden=true;toast("ESCAPE SUCCESSFUL. WINDOWS-ISH HAS STOPPED BEING DRAMATIC.");}});
let logoClicks=0,logoReset;
document.querySelector(".brand-logo")?.addEventListener("click",event=>{
 logoClicks++;window.clearTimeout(logoReset);logoReset=window.setTimeout(()=>logoClicks=0,1800);
 if(logoClicks>=5){logoClicks=0;event.preventDefault();$("#router-boss").scrollIntoView({behavior:"smooth"});toast("SECRET ROUTER BOSS UNLOCKED. IT KNOWS WHAT YOU DID.");award("Router Summoner");}
});

})();