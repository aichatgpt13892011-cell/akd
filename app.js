
console.log('%c© 2026 Alireza Khorsandi — AKD-3D v1.0','color:#e9c477;font-size:14px;font-weight:bold');

/* ===== Content ===== */
const S={
home:{n:'خانه',t:'ایده‌ها را به <span class="gold">تجربه</span> تبدیل می‌کنیم.',b:'به فضای دیجیتال دپارتمان علیرضا خورسندی خوش آمدید؛ مجموعه‌ای از پروژه‌های مستقل در زمینه هوش مصنوعی، مهندسی پرامپت، پژوهش و تولید محتوای دیجیتال.',x:'<div class="grid"><div class="card"><b>هوش مصنوعی</b><span>ایده‌های هوشمند و کاربردی</span></div><div class="card"><b>رسانه دیجیتال</b><span>آثار تصویری و تجربه‌های خلاقانه</span></div></div>',a:'<a class="btn p" href="#projects">کاوش پروژه‌ها</a>'},
projects:{n:'پروژه‌ها',t:'پروژه‌های <span class="gold">منتخب</span>',b:'گزیده‌ای از آثار مستقل در حوزه هوش مصنوعی، تولید دانش و رسانه دیجیتال.',x:'<div class="grid"><div class="card"><b>Golden Prompt Engine</b><span>تحلیل نیاز و طراحی پرامپت هدفمند</span></div><div class="card"><b>مقالات سفارشی</b><span>پژوهش و تولید محتوای تخصصی</span></div><div class="card"><b>تجربه‌های رسانه‌ای</b><span>طراحی آثار گرافیکی و تصویری</span></div><div class="card"><b>ابزارهای هوشمند</b><span>راهکارهای دیجیتال کاربردی</span></div></div>',a:'<a class="btn p" href="#hoosha">مشاهده پروژه شاخص: هوشا</a>'},
hoosha:{n:'هوشا',t:'هوشا، <span class="gold">دستیار هوشمند</span> مسجد صدرالعلماء',b:'هوشا یکی از پروژه‌های شاخص و مستقل علیرضا خورسندی است؛ دستیار هوشمندی با محوریت خدمات و اطلاع‌رسانی مسجد، برای دسترسی ساده‌تر به اطلاعات، برنامه‌ها و محتوای مرتبط.',x:'<span class="tag">دستیار هوشمند</span><span class="tag">خدمات مسجد</span><span class="tag">اطلاع‌رسانی</span>',a:'<a class="btn p" href="https://hoosha-vercel-deploy.vercel.app" target="_blank" rel="noopener noreferrer">ورود به هوشا ↗</a>'},
books:{n:'کتابخانه',t:'کتابخانه و <span class="gold">آثار مکتوب</span>',b:'معرفی کتاب‌ها، نوشته‌ها و آثار آموزشی و تخصصی در زمینه هوش مصنوعی و فناوری.',x:'<div class="card"><b>مهندسی پرامپت طلایی</b><span>کتاب و مجموعه محتوای تخصصی در حوزه مهندسی پرامپت</span></div>'},
about:{n:'درباره',t:'درباره <span class="gold">دپارتمان علیرضا خورسندی</span>',b:'AKD بستری برای ارائه پروژه‌ها و تجربه‌های مستقل در زمینه هوش مصنوعی، مهندسی پرامپت، توسعه ابزارهای هوشمند، رسانه دیجیتال، پژوهش و آموزش است. تمرکز بر ایده‌های کاربردی، کیفیت خروجی و ارائه روشن دستاوردهاست.'},
contact:{n:'ارتباط',t:'ارتباط با <span class="gold">ما</span>',b:'برای ارتباط، همکاری و طرح پیشنهادهای کاری از راه‌های زیر استفاده کنید.',x:'<div class="row"><span>تلفن اول</span><a href="tel:09053964674">09053964674</a></div><div class="row"><span>تلفن دوم</span><a href="tel:09131689043">09131689043</a></div><div class="row"><span>ایمیل</span><a href="mailto:khorsandialireza72@gmail.com">khorsandialireza72@gmail.com</a></div>'}
};
const keys=Object.keys(S),panel=document.getElementById('panel'),nav=document.getElementById('nav');
nav.innerHTML=keys.map((k,i)=>`<button data-k="${k}"><span>${S[k].n} · </span>${i+1}</button>`).join('');
function render(k){const s=S[k];panel.innerHTML=`<h1>${s.t}</h1><p>${s.b}</p>${s.x||''}<div class="act">${s.a||''}</div>`;nav.querySelectorAll('button').forEach(b=>{b.classList.toggle('on',b.dataset.k===k);b.dataset.k===k?b.setAttribute('aria-current','page'):b.removeAttribute('aria-current')})}
const fromLoc=()=>{const p=location.pathname.replace(/^\/|\/$/g,'').split('/')[0];return S[p]?p:(S[location.hash.slice(1)]?location.hash.slice(1):'home')};
const plain=h=>h.replace(/<[^>]*>/g,'');
let cur='home',goHook=()=>{};
function go(k,push=1){if(!S[k])k='home';cur=k;render(k);goHook(k);const u=k==='home'?'/':'/'+k+'/';if(push&&location.pathname!==u)history.pushState({k},'',u);document.title=(k==='home'?'':plain(S[k].t)+' | ')+'AKD | دپارتمان علیرضا خورسندی'}
nav.onclick=e=>{const b=e.target.closest('button');if(b)go(b.dataset.k)};
document.getElementById('homeBtn').onclick=()=>go('home');
addEventListener('popstate',()=>go(fromLoc(),0));addEventListener('hashchange',()=>go(location.hash.slice(1),0));
document.querySelector('.brand').onclick=e=>{e.preventDefault();go('home')};
render(fromLoc());
const hideLoader=()=>setTimeout(()=>document.getElementById('loader').classList.add('off'),700);

/* ===== 3D atrium ===== */
let THREE;try{THREE=await import('three')}catch(e){panel.insertAdjacentHTML('afterbegin','<p style="color:#ffb3b3">بارگذاری Three.js ناموفق بود. اتصال اینترنت را بررسی کنید.</p>');hideLoader()}
if(THREE){
const scene=new THREE.Scene();
scene.background=new THREE.Color(0x070b11);
scene.fog=new THREE.FogExp2(0x070b11,.008);
const cam=new THREE.PerspectiveCamera(55,innerWidth/innerHeight,.1,300);
const R=new THREE.WebGLRenderer({antialias:true,alpha:false});
R.setPixelRatio(Math.min(devicePixelRatio,innerWidth<=760?1.25:1.6));R.setSize(innerWidth,innerHeight);
R.toneMapping=THREE.ACESFilmicToneMapping;R.toneMappingExposure=1.18;
document.getElementById('scene').appendChild(R.domElement);
const M=(c,m=.15,r=.48,e=0,ei=1)=>new THREE.MeshStandardMaterial({color:c,metalness:m,roughness:r,emissive:e,emissiveIntensity:ei});
const dark=M(0x171d26,.82,.3),wall=M(0x252d38,.72,.34),led=new THREE.MeshBasicMaterial({color:0xf3f5f8}),glass=new THREE.MeshPhysicalMaterial({color:0x78b9d8,transparent:true,opacity:.17,roughness:.12,metalness:.12,transmission:.2,side:THREE.DoubleSide});
const box=(w,h,d,m,x,y,z,ry=0,rz=0)=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.rotation.set(0,ry,rz);scene.add(o);return o};
scene.add(new THREE.HemisphereLight(0x9db6d0,0x080b10,.62));
const sky=new THREE.DirectionalLight(0xe8f1ff,2.15);sky.position.set(-7,25,7);scene.add(sky);
const fillLight=new THREE.DirectionalLight(0x8ebbe0,.82);fillLight.position.set(12,15,-28);scene.add(fillLight);
const cl=new THREE.PointLight(0x36a9ef,44,65,1.5);cl.position.set(-1,12,-12);scene.add(cl);
const gl=new THREE.PointLight(0xe9bd72,24,52,1.5);gl.position.set(12,9,-30);scene.add(gl);
/* Monumental dark-metal atrium: inspired by the supplied architectural reference */
const floorMat=M(0x10151d,.9,.16),stone=M(0x252d38,.82,.28),stone2=M(0x171e28,.85,.25),metal=M(0x657181,.9,.24),trim=M(0x8b9aaa,.78,.24);
const fl=new THREE.Mesh(new THREE.PlaneGeometry(78,96),floorMat);fl.rotation.x=-Math.PI/2;fl.position.set(0,.015,-17);scene.add(fl);
/* polished floor grid and long white floor inlays */
const tileLine=M(0x293746,.75,.24),floorLED=new THREE.MeshBasicMaterial({color:0xdde8f1});
for(let x=-30;x<=30;x+=6)box(.018,.008,90,tileLine,x,.025,-17);
for(let z=24;z>=-58;z-=6)box(76,.008,.018,tileLine,0,.025,z);
for(const x of [-22,22])box(.055,.025,54,floorLED,x,.04,-18);
/* deep side walls and repeating gallery bays */
for(const side of [-1,1]){
 box(1.2,24,76,stone,side*28,12,-16);
 for(const y of [5,10,15,20]){
  box(5,.18,72,stone2,side*25.4,y,-16);
  box(.07,.07,72,trim,side*22.9,y+.13,-16);
  box(.10,1.2,72,glass,side*22.9,y+1,-16);
 }
 for(let z=18;z>-52;z-=12){
  box(.5,20,.7,metal,side*25,11,z);
  box(5,.12,.08,floorLED,side*25,20.9,z);
 }
}
/* huge repeated leaning steel columns, forming the signature A-frame perspective */
for(const z of [13,-3,-19,-35,-51]){
 const h=25,spread=15.5;
 for(const side of [-1,1]){
  const x0=side*spread,x1=side*(spread-5.4);
  box(2.05,h,2.05,metal,(x0+x1)/2,h/2,z,0,Math.atan2(x1-x0,h));
  box(2.18,.16,2.18,trim,x0,.18,z);
  box(2.18,.16,2.18,trim,x1,h-.18,z);
  box(.07,h*.91,.07,floorLED,(x0+x1)/2,h/2,z+1.04,0,Math.atan2(x1-x0,h));
 }
 /* cross-beam and dark ceiling truss */
 box(33,1.15,1.25,stone,0,24.6,z);
 box(31,.055,.08,floorLED,0,24.02,z+.66);
}
/* upper longitudinal girders and bright linear architectural lighting */
for(const x of [-18,-9,0,9,18]){
 box(.72,.7,74,stone,x,26.2,-17);
 box(.055,.045,70,floorLED,x+(x<0?.48:-.48),25.78,-17);
}
for(const z of [20,8,-4,-16,-28,-40,-52]){
 box(44,.45,.6,stone,0,27,z);
}
/* luminous glass skylight in the roof */
const roofGlass=new THREE.MeshPhysicalMaterial({color:0xdceaf5,transparent:true,opacity:.42,roughness:.1,metalness:.05,side:THREE.DoubleSide,emissive:0x172536,emissiveIntensity:.3});
box(26,.28,67,roofGlass,0,27.15,-17);
for(let x=-13;x<=13;x+=4.3)box(.14,.2,68,metal,x,27.35,-17);
for(let z=14;z>=-49;z-=8)box(27,.13,.14,metal,0,27.36,z);
/* floating cyan technical displays are added below by the panel system */
function holo(w,h,gold,seed,label='AKD'){
 const c=document.createElement('canvas');c.width=1024;c.height=512;const g=c.getContext('2d');
 g.clearRect(0,0,1024,512);
 const cyan=gold?'#e7c27b':'#77d8ff',pale='rgba(119,216,255,.72)';
 g.fillStyle='rgba(7,22,38,.28)';g.fillRect(0,0,1024,512);
 g.strokeStyle=pale;g.lineWidth=3;g.strokeRect(8,8,1008,496);
 g.strokeStyle='rgba(119,216,255,.22)';g.lineWidth=1;
 for(let x=48;x<1024;x+=48){g.beginPath();g.moveTo(x,24);g.lineTo(x,488);g.stroke()}
 for(let y=32;y<512;y+=40){g.beginPath();g.moveTo(24,y);g.lineTo(1000,y);g.stroke()}
 g.fillStyle=cyan;g.font='700 48px Vazirmatn,Tahoma,sans-serif';g.textAlign='right';g.fillText(label,972,78);
 g.fillStyle='rgba(202,237,255,.8)';g.font='400 20px Arial,sans-serif';g.fillText('AKD  /  INTELLIGENCE SYSTEMS',972,111);
 g.strokeStyle=cyan;g.lineWidth=2;g.beginPath();g.moveTo(38,132);g.lineTo(986,132);g.stroke();
 /* technical waveform and data graph */
 g.strokeStyle='rgba(104,205,255,.95)';g.lineWidth=4;g.beginPath();
 for(let x=48;x<550;x+=5){const y=300+Math.sin(x*.027+seed)*48+Math.sin(x*.083+seed*.4)*17;x===48?g.moveTo(x,y):g.lineTo(x,y)}g.stroke();
 g.fillStyle='rgba(115,211,255,.65)';
 for(let i=0;i<18;i++){const bh=35+((Math.sin(i*2.2+seed)+1)*65);g.fillRect(610+i*18,430-bh,10,bh)}
 /* concentric HUD */
 const cx=790,cy=285;g.strokeStyle=gold?'rgba(235,195,112,.9)':'rgba(119,216,255,.88)';
 for(const r of [52,72,94]){g.beginPath();g.arc(cx,cy,r,0,Math.PI*2);g.stroke()}
 g.lineWidth=8;g.beginPath();g.arc(cx,cy,72,.2+seed*.1,4.3+seed*.1);g.stroke();
 g.fillStyle=cyan;g.beginPath();g.arc(cx,cy,13,0,Math.PI*2);g.fill();
 g.fillStyle='rgba(209,235,250,.85)';g.font='18px Arial';g.textAlign='left';
 g.fillText('SYS 0'+(seed%9+1),44,474);g.fillText('ANALYSIS  /  LIVE DATA',610,474);
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;
}
const P={home:[0,11,-9,11,5.5],projects:[-8,9.2,-8,8,4.5],hoosha:[8,10,-6.5,8,4.5,1],books:[5,15.6,-12,7,4],about:[-2.2,6,-5.5,7,4.2],contact:[3,5.6,-4.5,7,4.2]};
const extra=[[-15,8,-15,5,2.8],[15,13,-18,5,2.8],[0,19,-28,8,3.6],[-8,4,-1,4,2.2],[8,4,-1,4,2.2]];
const panels={};let n=1;
function mk(k,[x,y,z,w,h,gd]){
 const label=k?({home:'AKD  /  WELCOME',projects:'SELECTED PROJECTS',hoosha:'HOOSHA  /  AI ASSISTANT',books:'DIGITAL LIBRARY',about:'ABOUT THE DEPARTMENT',contact:'CONTACT'})[k]:'AKD  /  DEPARTMENT';
 const frame=new THREE.Mesh(new THREE.BoxGeometry(w+.28,h+.28,.22),metal);frame.position.set(x,y,z);frame.lookAt(x*.35,y-1,z+22);scene.add(frame);
 const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:holo(w,h,gd,n++,label),side:THREE.DoubleSide,toneMapped:false}));m.position.set(x,y,z+.13);m.lookAt(x*.35,y-1,z+22);scene.add(m);if(k)panels[k]=m;return m;
}
for(const k in P)mk(k,P[k]);extra.forEach(p=>mk(null,p));
const sk=new THREE.Mesh(new THREE.PlaneGeometry(10,14),new THREE.MeshBasicMaterial({color:0xf5fbfc}));sk.rotation.x=Math.PI/2;sk.position.set(0,26.2,-15);scene.add(sk);
/* camera rig */
const base={home:[[0,8,29],[0,10,-11]]};for(const k in P){if(k!=='home'){const[x,y,z]=P[k];base[k]=[[x*.6,y-2.5,z+15],[x,y,z]]}}
const pos=new THREE.Vector3(...base.home[0]),look=new THREE.Vector3(...base.home[1]),tp=pos.clone(),tl=look.clone();let ry=0,rx=0,zoom=1,tz=1;
base.books=[[600,10,8],[600,12,-8]];base.hoosha=[[-592,4.2,6],[-600,2.5,.2]];
/* ===== Worlds: digital library + Hoosha workstation ===== */
const rnd=(s=>()=>(s=s*16807%2147483647)/2147483647)(4242),V=(x,y,z)=>new THREE.Vector3(x,y,z),bas=c=>new THREE.MeshBasicMaterial({color:c});
const bx=(g,w,h,d,m,x,y,z)=>{const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);g.add(o);return o};
const cvs=(w,h,f)=>{const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d');f(g,w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;if(document.fonts)document.fonts.ready.then(()=>{f(g,w,h);t.needsUpdate=true});return t};
const scr=(g,w,h,tex,x,y,z,ry=0)=>{const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:tex,transparent:true,opacity:.95,side:THREE.DoubleSide,depthWrite:false}));m.position.set(x,y,z);m.rotation.y=ry;g.add(m);return m};
const FN='Vazirmatn,Tahoma,sans-serif',FOG={a:.0035,lib:.0028,hoo:.0025,abt:.0025},BG={a:0xdce7eb,lib:0xe8edf0,hoo:0xe8eff1,abt:0xeaf0ef};
/* --- very large digital library --- */
const lib=new THREE.Group();lib.position.set(600,0,0);lib.visible=false;scene.add(lib);
const lcy=bas(0x6fd6ff),lgd=bas(0xe9c477),lbk=bas(0x05080f),LL=190,Z0=12,ROWS=14,PER=Math.floor(LL/.75);
const bm=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial(),ROWS*PER*2);
{const pal=[0x0f2a47,0x16406b,0x1d5a8c,0x0b1d33,0x3a2f18,0x6b5420,0x2a6f9a,0x123a5a],hot=[0x6fd6ff,0xe9c477,0xcfe6ff],o=new THREE.Object3D(),c=new THREE.Color();let i=0;
for(const sd of[-1,1])for(let r=0;r<ROWS;r++)for(let j=0;j<PER;j++){const h=2.3+rnd()*1.3;o.position.set(sd*19.6,1.2+r*4.2+h/2,Z0-j*.75);o.scale.set(3+rnd()*.5,h,.5);o.updateMatrix();bm.setMatrixAt(i,o.matrix);c.setHex(rnd()<.07?hot[(rnd()*3)|0]:pal[(rnd()*8)|0]);bm.setColorAt(i++,c)}}
lib.add(bm);
for(const sd of[-1,1]){bx(lib,1,64,LL+10,lbk,sd*22,31,Z0-LL/2);for(let r=0;r<=ROWS;r++){const y=1+r*4.2;bx(lib,4,.3,LL,dark,sd*19.4,y,Z0-LL/2);bx(lib,.1,.1,LL,r%2?lcy:lgd,sd*17.4,y+.1,Z0-LL/2)}}
for(let z=Z0-4;z>-LL;z-=16){for(const sd of[-1,1])bx(lib,1.4,62,1.4,dark,sd*16.5,31,z);bx(lib,34,1,1.4,dark,0,61.5,z);bx(lib,34,.12,.12,lcy,0,60.9,z)}
bx(lib,60,1,LL+20,lbk,0,63,Z0-LL/2);bx(lib,.5,.12,LL,lgd,0,62.4,Z0-LL/2);for(const x of[-9,9])bx(lib,.3,.12,LL,lcy,x,62.4,Z0-LL/2);
{const ft=cvs(256,256,(g,w,h)=>{g.fillStyle='#03060c';g.fillRect(0,0,w,h);g.strokeStyle='rgba(111,214,255,.35)';g.lineWidth=2;g.strokeRect(0,0,w,h);g.strokeStyle='rgba(233,196,119,.18)';g.beginPath();g.moveTo(w/2,0);g.lineTo(w/2,h);g.moveTo(0,h/2);g.lineTo(w,h/2);g.stroke()});ft.wrapS=ft.wrapT=THREE.RepeatWrapping;ft.repeat.set(10,50);
const f2=new THREE.Mesh(new THREE.PlaneGeometry(40,LL+20),new THREE.MeshBasicMaterial({map:ft}));f2.rotation.x=-Math.PI/2;f2.position.set(0,0,Z0-LL/2);lib.add(f2);bx(lib,.5,.04,LL,lgd,0,.05,Z0-LL/2)}
for(const[z,y]of[[-30,18],[-62,34],[-94,50],[-126,26]]){bx(lib,34,.5,3.2,dark,0,y,z);for(const dz of[-1.6,1.6])bx(lib,34,.1,.1,lcy,0,y+.3,z+dz);bx(lib,34,1.4,.06,glass,0,y+1,z+1.6)}
for(const sd of[-1,1])for(let k=0;k<8;k++){const z=-6-k*18;bx(lib,3,1,1.6,dark,sd*11,.5,z);bx(lib,2.4,1.3,.08,bas(0x2a89b8),sd*11,1.9,z-.4).rotation.x=-.3}
const core=new THREE.Group();core.position.set(0,30,-150);lib.add(core);core.add(new THREE.Mesh(new THREE.SphereGeometry(3.2,32,24),lgd));
const ico=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(12,1)),new THREE.LineBasicMaterial({color:0x6fd6ff}));core.add(ico);
const rings=[14,19].map((r,i)=>{const m=new THREE.Mesh(new THREE.TorusGeometry(r,.12,8,96),i?lcy:lgd);core.add(m);return m});
bx(lib,2,64,2,new THREE.MeshBasicMaterial({color:0xe9c477,transparent:true,opacity:.18,depthWrite:false}),0,31,-150);
scr(lib,30,7.5,cvs(1024,256,(g,w,h)=>{g.clearRect(0,0,w,h);g.textAlign='center';g.fillStyle='#e9c477';g.font='800 118px '+FN;g.fillText('کتابخانه دیجیتال',w/2,138);g.fillStyle='#6fd6ff';g.font='600 40px '+FN;g.fillText('AKD DIGITAL LIBRARY',w/2,214)}),0,42,-80);
/* Floating display panels are replaced by a walk-through exhibition of framed works. */
const lp=[];
const galleryArt=[
 {file:'01-mowkeb-logo.jpg',ratio:1,label:'نشان موکب تجارت آذر'},
 {file:'02-sunset-scene.png',ratio:1536/864,label:'اثر تصویری غروب'},
 {file:'03-memorial-poster.png',ratio:1,label:'پوستر مهمان شهید گمنام'},
 {file:'04-mowkeb-qr-poster.jpg',ratio:1087/1536,label:'پوستر گروه موکب دانشجویی'},
 {file:'05-red-banner.jpg',ratio:1536/863,label:'طرح یادبود'},
 {file:'06-prompt-engine-book.png',ratio:1229/1536,label:'کتاب مهندسی پرامپت طلایی'},
 {file:'07-university-project.jpg',ratio:1022/1536,label:'پوستر پروژه دانشگاهی'}
];
const galleryTextureLoader=new THREE.TextureLoader();
const galleryWallMat=M(0x202b38,.48,.58),galleryTrim=M(0xb58d4e,.72,.3),galleryInset=M(0x080d15,.35,.42);
const galleryWallZ=[-18,-48,-78,-108];
const galleryWallX=[-1.4,1.4,-1.4,1.4];
function addGalleryPainting(wall,art,side){
 const maxW=6.2,maxH=7.1;
 let w,h;
 if(art.ratio>=1){w=maxW;h=w/art.ratio;if(h>maxH){h=maxH;w=h*art.ratio}}
 else{h=maxH;w=h*art.ratio;if(w>maxW){w=maxW;h=w/art.ratio}}
 const faceZ=side*.39, x=0, y=8.2;
 const frame=new THREE.Mesh(new THREE.BoxGeometry(w+.48,h+.48,.24),galleryTrim);
 frame.position.set(x,y,faceZ);wall.add(frame);
 const mat=new THREE.Mesh(new THREE.BoxGeometry(w+.18,h+.18,.10),galleryInset);
 mat.position.set(x,y,faceZ+side*.14);wall.add(mat);
 const tex=galleryTextureLoader.load('/assets/gallery/'+art.file,t=>{
   t.colorSpace=THREE.SRGBColorSpace;
   t.anisotropy=Math.min(8,R.capabilities.getMaxAnisotropy());
 });
 const picture=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide,toneMapped:false}));
 picture.position.set(x,y,faceZ+side*.205);
 picture.rotation.y=side===1?0:Math.PI;
 wall.add(picture);
 const glow=new THREE.PointLight(0xe9c477,.45,9,2);
 glow.position.set(x,y+h*.62,faceZ+side*1.1);wall.add(glow);
}
const artAssignments=[
 [[galleryArt[0],1],[galleryArt[1],-1]],
 [[galleryArt[2],1],[galleryArt[3],-1]],
 [[galleryArt[4],1],[galleryArt[5],-1]],
 [[galleryArt[6],1]]
];
galleryWallZ.forEach((z,i)=>{
 const wall=new THREE.Group();wall.position.set(galleryWallX[i],0,z);lib.add(wall);
 bx(wall,13.8,12.8,.58,galleryWallMat,0,7.2,0);
 bx(wall,13.9,.12,.72,galleryTrim,0,13.62,0);
 bx(wall,13.9,.12,.72,galleryTrim,0,.78,0);
 for(const side of [-1,1]){
   bx(wall,.12,12.65,.72,galleryTrim,side*6.86,7.2,0);
 }
 artAssignments[i].forEach(([art,side])=>addGalleryPainting(wall,art,side));
});

const PN=2200,pp=new Float32Array(PN*3),pc=new Float32Array(PN*3);for(let i=0;i<PN;i++){pp.set([(rnd()-.5)*36,rnd()*60,12-rnd()*180],i*3);pc.set(rnd()<.3?[.91,.77,.47]:[.44,.84,1],i*3)}
const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pp,3));pg.setAttribute('color',new THREE.BufferAttribute(pc,3));
const parts=new THREE.Points(pg,new THREE.PointsMaterial({size:.22,vertexColors:true,transparent:true,opacity:.8,depthWrite:false,blending:THREE.AdditiveBlending}));lib.add(parts);
/* --- Hoosha: chrome humanoid robot working at a computer (bright scene) --- */
let envT=null;try{const{RoomEnvironment}=await import('three/addons/environments/RoomEnvironment.js');envT=new THREE.PMREMGenerator(R).fromScene(new RoomEnvironment(),.04).texture}catch(e){}
const CM=(c,m,r,i=1)=>new THREE.MeshStandardMaterial({color:c,metalness:m,roughness:r,envMap:envT,envMapIntensity:i});
const lit=(g,x,y,z)=>{const h=new THREE.HemisphereLight(0xffffff,0xc5d0dc,1.5),d=new THREE.DirectionalLight(0xffffff,2.2);d.position.set(x,y,z);d.target.position.set(0,2,0);g.add(h,d,d.target)};
const hoo=new THREE.Group();hoo.position.set(-600,0,0);hoo.visible=false;scene.add(hoo);lit(hoo,5,9,7);
const wm=CM(0xe4e8ee,1,.16,1.3),dk=CM(0x1b1e24,.7,.35,.8),gm=CM(0x9aa3ae,1,.3),vs=CM(0x030405,.3,.04,1.6),wht=CM(0xf4f6f9,.15,.35,.8),cyb=bas(0x9fe6ff),GD=bas(0xd2a24c),BL=bas(0x35a7e0),cyl=new THREE.CylinderGeometry(1,1,1,14);
const wl=new THREE.Group();hoo.add(wl);
/* Hoosha AI lab: a bright, functional research room, not a display pedestal */
const labFloor=new THREE.Mesh(new THREE.PlaneGeometry(52,42),CM(0xe1e8e8,.08,.32));labFloor.rotation.x=-Math.PI/2;labFloor.position.set(0,-.03,-5);hoo.add(labFloor);
const labWall=CM(0xf4f6f3,.03,.78),labFrame=CM(0x9aa9aa,.62,.3),labGlass=new THREE.MeshPhysicalMaterial({color:0xb9d6dc,transparent:true,opacity:.2,roughness:.1,metalness:.08});
bx(hoo,38,16,.5,labWall,0,8,-10);bx(hoo,.5,16,28,labWall,-18,8,-1);bx(hoo,.5,16,28,labWall,18,8,-1);
/* full-height windows and vertical mullions */
for(const x of [-12,-6,0,6,12]){bx(hoo,.08,10,.12,labFrame,x,8,-9.68);bx(hoo,5.8,9.5,.04,labGlass,x+2.9,8,-9.7)}
bx(hoo,36,.12,.16,labFrame,0,13,-9.55);bx(hoo,36,.12,.16,labFrame,0,3,-9.55);
/* wall-mounted department sign */
scr(hoo,11,3.6,cvs(1024,340,(g,w,h)=>{g.fillStyle='#f5f7f4';g.fillRect(0,0,w,h);g.fillStyle='#273e49';g.font='700 104px '+FN;g.textAlign='center';g.fillText('هوشا',w/2,150);g.fillStyle='#9b784c';g.font='500 36px '+FN;g.fillText('HOOSHA  /  INTELLIGENT SYSTEMS LAB',w/2,220);g.fillStyle='#73858a';g.font='400 25px '+FN;g.fillText('RESEARCH  •  DESIGN  •  DIGITAL SERVICES',w/2,275)}),0,7.5,-9.35);
/* workstation displays and clean equipment bays */
for(const x of [-7.5,7.5]){bx(hoo,4.6,3.1,.16,labFrame,x,4.7,-7.8);scr(hoo,4.3,2.8,holo(4.3,2.8,x>0,2000+(x+8)*10,'AKD  /  SYSTEM STATUS'),x,4.7,-7.68);bx(hoo,4.8,.16,.5,labFrame,x,3.05,-7.35)}
/* central workstation */
[[-6.8,6.2,-5.9,.22],[6.8,6.2,-5.9,-.22]].forEach(([x,y,z,r],i)=>scr(hoo,3.2,1.8,holo(3.2,1.8,i,1900+i*53,'LAB  /  MONITOR'),x,y,z,r));
bx(hoo,7.2,.18,2.6,wht,0,1.55,.05);bx(hoo,7.2,.05,.05,GD,0,1.66,1.36);for(const x of[-3.4,3.4])bx(hoo,.2,1.5,2.4,wht,x,.75,.05);
bx(hoo,1.8,.07,.55,dk,0,1.64,.55);bx(hoo,3.4,2,.1,dk,0,2.75,-1.07);bx(hoo,.25,.3,.25,dk,0,1.75,-1.05);
const mc2=document.createElement('canvas');mc2.width=640;mc2.height=360;const mg=mc2.getContext('2d'),mtex=new THREE.CanvasTexture(mc2);mtex.colorSpace=THREE.SRGBColorSpace;
scr(hoo,3.2,1.8,mtex,0,2.75,-1);scr(hoo,2.4,1.5,holo(2.4,1.5,0,2100),-2.9,2.6,-.6,.5);scr(hoo,2.4,1.5,holo(2.4,1.5,1,2111),2.9,2.6,-.6,-.5);
function drawMon(t){mg.fillStyle='#031225';mg.fillRect(0,0,640,360);mg.fillStyle='#0b3a63';mg.fillRect(0,0,640,34);mg.fillStyle='#e9c477';mg.font='700 20px '+FN;mg.textAlign='left';mg.fillText('HOOSHA  ▸  working...',14,24);
const k=Math.floor(t*40/26),off=(t*40)%26;for(let i=0;i<13;i++){const a=i+k,y=50+i*26-off;if(y<42)continue;mg.fillStyle=a%4?'rgba(111,214,255,.75)':'rgba(233,196,119,.85)';mg.fillRect(24+(a%3)*22,y,80+(a*97)%330,9)}
if(Math.floor(t*2)%2){mg.fillStyle='#fff';mg.fillRect(30,334,12,18)}mtex.needsUpdate=true}
drawMon(0);let lastMon=0;
const rb=new THREE.Group();hoo.add(rb);
const sph=(r,m,x,y,z,sx=1,sy=1,sz=1,g=rb)=>{const o=new THREE.Mesh(new THREE.SphereGeometry(r,24,16),m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);g.add(o);return o};
const seg=(m,r,a,b)=>{const v=b.clone().sub(a),l=v.length();m.position.copy(a).addScaledVector(v,.5);m.scale.set(r,l,r);m.quaternion.setFromUnitVectors(V(0,1,0),v.normalize())};
const link=(m,r,a,b)=>{const o=new THREE.Mesh(cyl,m);rb.add(o);seg(o,r,a,b);return o};
bx(rb,1.3,.14,1.3,dk,0,1.1,1.45);bx(rb,1.3,1.5,.14,dk,0,2,2.1);bx(rb,.2,.8,.2,wm,0,.65,1.45);
for(let i=0;i<5;i++){const a=i*Math.PI*2/5;bx(rb,.1,.08,.9,dk,Math.sin(a)*.45,.22,1.45+Math.cos(a)*.45).rotation.y=a}
scr(rb,1,1,cvs(256,256,(g,w,h)=>{g.clearRect(0,0,w,h);g.fillStyle='#060d18';g.beginPath();g.arc(128,128,120,0,7);g.fill();g.strokeStyle='#e9c477';g.lineWidth=10;g.beginPath();g.arc(128,128,112,0,7);g.stroke();g.fillStyle='#e9c477';g.textAlign='center';g.font='800 120px '+FN;g.fillText('ه',128,165)}),0,2.1,2.19);
for(const sx of[-.3,.3]){link(wm,.16,V(sx,1.35,1.5),V(sx,1.22,.5));link(dk,.13,V(sx,1.22,.5),V(sx,.25,.45));sph(.17,gm,sx,1.22,.5);bx(rb,.3,.14,.6,dk,sx,.12,.25)}
const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.52,.5,8,24),wm);torso.position.set(0,2.1,1.35);torso.rotation.x=-.12;rb.add(torso);
sph(.5,dk,0,1.4,1.4,1.1,.6,.9);const wr=new THREE.Mesh(new THREE.TorusGeometry(.5,.05,8,32),dk);wr.rotation.x=Math.PI/2;wr.position.set(0,1.62,1.38);rb.add(wr);
bx(rb,.02,1.1,.02,dk,0,2.15,1.88);bx(rb,.16,.16,.012,wht,0,2.6,1.89);link(gm,.15,V(0,2.8,1.35),V(0,3.1,1.3));
for(const s of[-1,1]){sph(.2,dk,s*.66,2.55,1.35);const pd=new THREE.Mesh(new THREE.SphereGeometry(.3,24,14,0,Math.PI*2,0,Math.PI*.55),wm);pd.scale.set(1.1,.95,1.15);pd.position.set(s*.7,2.68,1.35);pd.rotation.z=-s*.5;rb.add(pd)}
const arms=[-1,1].map(()=>{const a={up:new THREE.Mesh(cyl,gm),lo:new THREE.Mesh(cyl,wm),el:sph(.15,dk,0,0,0),hd:sph(.13,dk,0,0,0)};rb.add(a.up,a.lo);return a});
const hd=new THREE.Group();hd.position.set(0,3.42,1.3);rb.add(hd);
/* sculpted humanoid robot face: cheek planes, brow ridge, nose bridge, jaw and mouth grille */
const faceMat=CM(0xcbd2d6,.72,.28,1.25),faceDark=CM(0x303b43,.58,.32,.9),eyeGlass=CM(0x17242b,.28,.08,1.6),iris=bas(0x6da9bd);
sph(.49,faceMat,0,0,0,.91,1.16,.88,hd);
const jaw=sph(.37,faceMat,0,-.43,-.035,1,.48,.86,hd);
for(const side of [-1,1]){
 const cheek=sph(.2,faceMat,side*.29,-.12,-.33,1,.65,.48,hd);
 sph(.145,faceDark,side*.19,.16,-.405,1,.72,.25,hd);
 sph(.09,eyeGlass,side*.19,.16,-.47,1,.78,.32,hd);
 sph(.043,iris,side*.19,.16,-.51,1,1,.4,hd);
 const brow=bx(hd,.31,.075,.12,faceMat,side*.19,.34,-.39);brow.rotation.z=side*.12;
 const ear=sph(.12,gm,side*.46,-.02,0,.55,1.1,.8,hd);
 sph(.055,faceDark,side*.49,-.02,-.015,.55,1,.8,hd);
}
const bridge=new THREE.Mesh(new THREE.CapsuleGeometry(.075,.22,5,10),faceMat);bridge.position.set(0,-.02,-.46);bridge.rotation.x=-.18;hd.add(bridge);
sph(.105,faceMat,0,-.17,-.48,1.25,.75,.8,hd);
const mouth=bx(hd,.28,.075,.045,faceDark,0,-.32,-.43);
sph(.2,faceMat,0,-.52,-.17,1,.42,.55,hd);
const crown=new THREE.Mesh(new THREE.SphereGeometry(.5,32,18,0,Math.PI*2,0,Math.PI*.42),gm);crown.scale.set(.98,1.15,.92);crown.position.y=.12;hd.add(crown);
for(const side of [-1,1]){const e=new THREE.Mesh(cyl,gm);e.scale.set(.14,.12,.14);e.rotation.z=Math.PI/2;e.position.set(side*.49,0,0);hd.add(e)}
const S=V(0,0,0),H=V(0,0,0),Pv=V(0,0,0),E=V(0,0,0),dv=V(0,0,0),pr=V(0,0,0);
function ik(a,sx,t,ph){S.set(sx*.66,2.6,1.35);H.set(sx*.42,1.76+Math.max(0,Math.sin(t*9+ph))*.07,.5+Math.sin(t*3+ph)*.05);dv.copy(H).sub(S);const d=Math.min(dv.length(),1.58);dv.normalize();
Pv.set(sx*.8,-1,.3);pr.copy(Pv).addScaledVector(dv,-Pv.dot(dv)).normalize();E.copy(S).addScaledVector(dv,d/2).addScaledVector(pr,Math.sqrt(.64-d*d/4));H.copy(S).addScaledVector(dv,d);
seg(a.up,.1,S,E);seg(a.lo,.09,E,H);a.el.position.copy(E);a.hd.position.copy(H)}
/* --- About: bright office, team photo + holographic tool --- */
const PHOTO='/assets/about-photo.jpg';
const abt=new THREE.Group();abt.position.set(0,0,-700);abt.visible=false;scene.add(abt);lit(abt,4,10,10);base.about=[[0,4.6,-690],[0,4.9,-704]];
const af=new THREE.Mesh(new THREE.PlaneGeometry(90,70),CM(0xffffff,.05,.28,.6));af.rotation.x=-Math.PI/2;af.position.set(0,0,-10);abt.add(af);
const pcv=document.createElement('canvas');pcv.width=800;pcv.height=600;const px=pcv.getContext('2d'),ptex=new THREE.CanvasTexture(pcv);ptex.colorSpace=THREE.SRGBColorSpace;
const pim=new Image();pim.onload=()=>{px.drawImage(pim,0,0,800,600);px.globalCompositeOperation='destination-in';px.save();px.translate(400,270);px.scale(1,.78);let q=px.createRadialGradient(0,0,0,0,0,360);q.addColorStop(0,'#000');q.addColorStop(.75,'#000');q.addColorStop(1,'rgba(0,0,0,0)');px.fillStyle=q;px.fillRect(-420,-420,840,840);px.restore();q=px.createLinearGradient(0,380,0,515);q.addColorStop(0,'#000');q.addColorStop(1,'rgba(0,0,0,0)');px.fillStyle=q;px.fillRect(0,0,800,600);ptex.needsUpdate=true};pim.src=PHOTO;
const pm=new THREE.Mesh(new THREE.PlaneGeometry(13,9.75),new THREE.MeshBasicMaterial({map:ptex,transparent:true,toneMapped:false,fog:false,depthWrite:false}));pm.position.set(0,5.45,-4.4);pm.scale.set(1.08,1.08,1);abt.add(pm);
function bub(x,y){const c=document.createElement('canvas');c.width=256;c.height=128;const g=c.getContext('2d'),t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;const m=new THREE.Mesh(new THREE.PlaneGeometry(1.9,.95),new THREE.MeshBasicMaterial({map:t,transparent:true,toneMapped:false,fog:false}));m.position.set(x,y,.05);pm.add(m);
return tm=>on=>{g.clearRect(0,0,256,128);g.fillStyle='rgba(255,255,255,.96)';g.strokeStyle='#1b86c8';g.lineWidth=5;g.beginPath();(g.roundRect||g.rect).call(g,8,8,240,86,30);g.fill();g.stroke();g.beginPath();g.moveTo(60,92);g.lineTo(44,124);g.lineTo(90,92);g.fill();for(let i=0;i<3;i++){g.fillStyle=on?'#1b86c8':'#9fb3c6';g.beginPath();g.arc(88+i*40,51-(on?Math.max(0,Math.sin(tm*8-i))*12:0),9,0,7);g.fill()}t.needsUpdate=true}}
const bW=bub(-4.9,3.9),bM=bub(4.3,4.1);
bx(abt,15,.14,4,wht,0,2.3,-1.6);bx(abt,15,.04,.04,BL,0,2.3,.4);for(const x of[-7,7])bx(abt,.3,2.3,3.4,wht,x,1.15,-1.6);
/* Boardroom scene: conference table, executive chairs and three suited participants */
const skin=CM(0xb98261,.02,.78),skin2=CM(0xd09a76,.02,.82),suit=CM(0x263746,.22,.48),shirt=CM(0xf1f2ed,.02,.6),tie=CM(0x8d3e36,.18,.38),hair=CM(0x292a2a,.08,.85),eye=CM(0x20282c,.05,.2);
bx(abt,10,.22,3.1,CM(0x806b53,.25,.32),0,1.15,2.4);for(const x of[-3.6,3.6])bx(abt,.18,1.1,.18,metal,x,.55,2.4);
function seatedPerson(x,z,turn,variant=0){
 const g=new THREE.Group();g.position.set(x,0,z);g.rotation.y=turn;abt.add(g);const face=variant%2?skin2:skin;
 const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.52,.68,6,12),suit);torso.position.set(0,1.55,0);torso.scale.set(1.15,1,.68);g.add(torso);
 const collar=bx(g,.46,.36,.12,shirt,0,2.02,-.18);collar.rotation.x=-.22;
 const tieNode=new THREE.Mesh(new THREE.ConeGeometry(.13,.62,4),tie);tieNode.position.set(0,1.72,-.28);tieNode.rotation.x=-Math.PI/2;g.add(tieNode);
 const neck=new THREE.Mesh(new THREE.CylinderGeometry(.16,.19,.28,16),face);neck.position.set(0,2.05,0);g.add(neck);
 const head=new THREE.Mesh(new THREE.SphereGeometry(.38,32,24),face);head.scale.set(.82,1.16,.88);head.position.set(0,2.48,-.02);g.add(head);
 const hairCap=new THREE.Mesh(new THREE.SphereGeometry(.385,32,18,0,Math.PI*2,0,Math.PI*.56),hair);hairCap.scale.set(.88,1.12,.92);hairCap.position.set(0,2.57,-.035);g.add(hairCap);
 for(const ex of[-.14,.14]){const eyeBall=new THREE.Mesh(new THREE.SphereGeometry(.045,12,10),eye);eyeBall.position.set(ex,2.52,-.335);g.add(eyeBall);}
 const nose=new THREE.Mesh(new THREE.ConeGeometry(.075,.18,8),face);nose.position.set(0,2.39,-.37);nose.rotation.x=-Math.PI/2;g.add(nose);
 const mouth=new THREE.Mesh(new THREE.BoxGeometry(.16,.025,.025),faceDark);mouth.position.set(0,2.29,-.35);g.add(mouth);
 for(const ex of[-.31,.31]){const ear=new THREE.Mesh(new THREE.SphereGeometry(.075,12,10),face);ear.scale.set(.45,.8,.6);ear.position.set(ex,2.45,-.01);g.add(ear)}
 const armMat=suit;for(const side of[-1,1]){const arm=new THREE.Mesh(new THREE.CapsuleGeometry(.14,.6,4,8),armMat);arm.position.set(side*.55,1.55,-.12);arm.rotation.z=side*.35;g.add(arm);const hand=new THREE.Mesh(new THREE.SphereGeometry(.13,12,10),face);hand.position.set(side*.62,1.22,-.42);g.add(hand)}
 const chair=bx(g,1.25,1.8,.22,CM(0x445760,.25,.45),0,1.05,.68);chair.rotation.x=-.05;bx(g,1.1,.18,.9,CM(0x445760,.25,.45),0,.52,.35);
}
seatedPerson(-3.25,4.05,.28,0);seatedPerson(0,5.3,Math.PI,1);seatedPerson(3.25,4.05,-.28,2);

const globe=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(.8,1)),new THREE.LineBasicMaterial({color:0x1b86c8}));globe.position.set(0,3.8,-1.4);abt.add(globe);
const aring=new THREE.Mesh(new THREE.TorusGeometry(1.3,.02,6,64),GD);aring.rotation.x=Math.PI/2;aring.position.set(0,3.3,-1.4);abt.add(aring);
const abars=[...Array(8)].map((_,i)=>{const a=i/8*Math.PI*2;return bx(abt,.14,1,.14,i%2?BL:GD,Math.cos(a)*1.5,2.4,-1.4+Math.sin(a)*1.5)});
[[-6.9,3.6,-.8,.45],[6.9,3.6,-.8,-.45]].forEach(([x,y,z,r],i)=>scr(abt,3.4,2.1,holo(3.4,2.1,i,2400+i*61),x,y,z,r));
let lastB=0;
function abtTick(t){const sp=Math.floor(t/3.2)%2;pm.rotation.y=Math.sin(t*.35)*.035;pm.position.y=5.2+Math.sin(t*.6)*.04;pm.scale.setScalar(1+Math.sin(t*.8)*.004);globe.rotation.y=t*.4;globe.rotation.x=t*.15;aring.rotation.z=t*.5;
abars.forEach((b,i)=>{const hh=.3+.5*(1+Math.sin(t*1.5+i));b.scale.y=hh;b.position.y=2.37+hh/2});if(t-lastB>.12){lastB=t;bW(t)(sp===0);bM(t)(sp===1)}}
/* animation dispatcher: keeps each 3D world alive without a missing tick reference */
function tick(t){
  if(wd==='lib'){
    core.rotation.y=t*.16;core.rotation.x=Math.sin(t*.12)*.08;
    rings[0].rotation.x=t*.22;rings[0].rotation.y=t*.13;
    rings[1].rotation.y=-t*.17;rings[1].rotation.z=t*.11;
    lp.forEach((p,i)=>{p.position.y=p.userData.y+Math.sin(t*.7+i*.8)*.12});
    const a=parts.geometry.attributes.position;
    if(Math.floor(t*8)%2===0){for(let i=0;i<PN;i++){const j=i*3+1;pp[j]+=(rnd()-.5)*.008}a.needsUpdate=true}
  }else if(wd==='hoo'){
    drawMon(t);lastMon=t;
    arms.forEach((a,i)=>ik(a,i?1:-1,t,i*1.7));
    hd.rotation.y=Math.sin(t*.42)*.09;
    hd.rotation.x=Math.sin(t*.7)*.025;
    rb.position.y=Math.sin(t*1.1)*.025;
  }else if(wd==='abt'){
    abtTick(t);
  }
}

/* world switching: fade -> swap -> fade in */
let wd='a',tok=0;const worldOf=k=>k==='books'?'lib':k==='hoosha'?'hoo':k==='about'?'abt':'a';
const applyView=()=>{if(wd==='a')return cam.clearViewOffset();const W=innerWidth,Hh=innerHeight,m=W<=760;cam.setViewOffset(W,Hh,m?0:-W*.16,m?Hh*.2:0,W,Hh)};
addEventListener('resize',applyView);
R.domElement.setAttribute('role','img');R.domElement.setAttribute('aria-label','نمای سه‌بعدی تعاملی از دپارتمان علیرضا خورسندی');
addEventListener('keydown',e=>{if(e.target.closest&&e.target.closest('input,textarea'))return;const c=(v,l,h)=>Math.max(l,Math.min(h,v));let ch=1;
if(e.key==='ArrowLeft')ry=c(ry-.08,-.6,.6);else if(e.key==='ArrowRight')ry=c(ry+.08,-.6,.6);else if(e.key==='ArrowUp')rx=c(rx-.05,-.4,.4);else if(e.key==='ArrowDown')rx=c(rx+.05,-.4,.4);else if(e.key==='+'||e.key==='=')tz=c(tz*.92,.7,1.4);else if(e.key==='-')tz=c(tz*1.08,.7,1.4);else ch=0;
if(ch){e.preventDefault();applyView()}});
goHook=k=>{tp.set(...base[k][0]);tl.set(...base[k][1]);ry=0;rx=0;tz=1;const w=worldOf(k),c=R.domElement,my=++tok;
if(w===wd){c.style.opacity=1;return}c.style.transition='opacity .35s';c.style.opacity=0;
setTimeout(()=>{if(my!==tok)return;wd=w;pos.copy(tp);look.copy(tl);lib.visible=w==='lib';hoo.visible=w==='hoo';abt.visible=w==='abt';scene.fog.density=FOG[w];scene.background.set(BG[w]);scene.fog.color.set(BG[w]);R.toneMappingExposure=w==='hoo'||w==='abt'?1.45:1.3;applyView();c.style.opacity=1},360)};

const cv=R.domElement,ptr=new Map();let pd=0;
cv.onpointerdown=e=>{cv.setPointerCapture(e.pointerId);ptr.set(e.pointerId,[e.clientX,e.clientY])};
cv.onpointerup=cv.onpointercancel=e=>{ptr.delete(e.pointerId);pd=0};
cv.onpointermove=e=>{if(!ptr.has(e.pointerId))return;const[lx,ly]=ptr.get(e.pointerId);ptr.set(e.pointerId,[e.clientX,e.clientY]);
if(ptr.size===1){ry=Math.max(-.6,Math.min(.6,ry-(e.clientX-lx)*.003));rx=Math.max(-.2,Math.min(.25,rx+(e.clientY-ly)*.002))}
else if(ptr.size===2){const[a,b]=[...ptr.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]);if(pd)tz=Math.max(.55,Math.min(1.35,tz*pd/d));pd=d}};
cv.addEventListener('wheel',e=>{tz=Math.max(.55,Math.min(1.35,tz*(1+Math.sign(e.deltaY)*.05)))},{passive:true});
const still=matchMedia('(prefers-reduced-motion:reduce)').matches,clock=new THREE.Clock(),off=new THREE.Vector3();
let rafId=0;
function loop(){rafId=requestAnimationFrame(loop);if(document.hidden)return;const t=clock.getElapsedTime();pos.lerp(tp,.04);look.lerp(tl,.05);zoom+=(tz-zoom)*.08;
off.copy(pos).sub(look).multiplyScalar(zoom);off.applyAxisAngle(new THREE.Vector3(0,1,0),ry);off.y+=rx*8;cam.position.copy(look).add(off);if(!still){cam.position.x+=Math.sin(t*.15)*.25;cam.position.y+=Math.sin(t*.2)*.12}cam.lookAt(look);
const a=panels[cur];if(a){a.material.opacity=1;a.scale.setScalar(1+.025*Math.sin(t*2.2))}
tick(t);R.render(scene,cam)}
loop();
addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(rafId)}else{clock.start();loop()}});
addEventListener('resize',()=>{R.setPixelRatio(Math.min(devicePixelRatio,innerWidth<=760?1.25:1.6));cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();R.setSize(innerWidth,innerHeight)});
R.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();window.__akd3dFailed=true;const note=document.createElement('p');note.textContent='ارتباط گرافیکی مرورگر موقتاً قطع شد. صفحه را دوباره بارگذاری کنید.';note.style.cssText='padding:10px;color:#f2d28f';panel.prepend(note)});
window.__akd3dReady=true;go(fromLoc(),0);hideLoader();
}
