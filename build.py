import re,json,os,subprocess,shutil
from PIL import Image,ImageDraw,ImageFont
DOMAIN='akd.ir'   # <-- دامنهٔ واقعی را اینجا بگذارید
src=open('AKD-atrium-final.html',encoding='utf-8').read()
out='site'; shutil.rmtree(out,ignore_errors=True); os.makedirs(out+'/assets'); os.makedirs(out+'/vendor/three')
# ---------- photo (new photo, logo cropped out)
im=Image.open('/mnt/user-data/uploads/1000056967.jpg').convert('RGB').crop((80,0,588,381)).resize((1200,900),Image.LANCZOS)
im.save(out+'/assets/about-photo.jpg','JPEG',quality=86,optimize=True)
# ---------- parts
css=re.search(r'<style>(.*?)</style>',src,re.S).group(1)
js=re.search(r'<script type="module">(.*?)</script>',src,re.S).group(1)
a=src.index('</script>',src.index('type="importmap"'))+9
classic=src[a:src.index('<script type="module">')]
body=src[src.index('<body>')+6:src.index('<script type="importmap">')]
def sub(t,a,b):
    assert a in t,a[:60]; return t.replace(a,b)
# ---------- JS patches
js=re.sub(r"const PHOTO='data:image/jpeg;base64,[^']*';","const PHOTO='/assets/about-photo.jpg';",js)
js=sub(js,"let cur='home',goHook=()=>{};","""const fromLoc=()=>{const p=location.pathname.replace(/^\\/|\\/$/g,'').split('/')[0];return S[p]?p:(S[location.hash.slice(1)]?location.hash.slice(1):'home')};
const plain=h=>h.replace(/<[^>]*>/g,'');
let cur='home',goHook=()=>{};""")
js=sub(js,"function go(k){if(!S[k])k='home';cur=k;render(k);goHook(k);if(location.hash!=='#'+k)history.replaceState(null,'','#'+k)}",
"function go(k,push=1){if(!S[k])k='home';cur=k;render(k);goHook(k);const u=k==='home'?'/':'/'+k+'/';if(push&&location.pathname!==u)history.pushState({k},'',u);document.title=(k==='home'?'':plain(S[k].t)+' | ')+'AKD | دپارتمان علیرضا خورسندی'}")
js=sub(js,"addEventListener('hashchange',()=>go(location.hash.slice(1)));\nrender('home');","addEventListener('popstate',()=>go(fromLoc(),0));addEventListener('hashchange',()=>go(location.hash.slice(1),0));\ndocument.querySelector('.brand').onclick=e=>{e.preventDefault();go('home')};\nrender(fromLoc());")
js=sub(js,"go(location.hash.slice(1)||'home');hideLoader();","go(fromLoc(),0);hideLoader();")
js=sub(js,"forEach(b=>b.classList.toggle('on',b.dataset.k===k))","forEach(b=>{b.classList.toggle('on',b.dataset.k===k);b.dataset.k===k?b.setAttribute('aria-current','page'):b.removeAttribute('aria-current')})")
js=sub(js,"goHook=k=>{","""R.domElement.setAttribute('role','img');R.domElement.setAttribute('aria-label','نمای سه‌بعدی تعاملی از دپارتمان علیرضا خورسندی');
addEventListener('keydown',e=>{if(e.target.closest&&e.target.closest('input,textarea'))return;const c=(v,l,h)=>Math.max(l,Math.min(h,v));let ch=1;
if(e.key==='ArrowLeft')ry=c(ry-.08,-.6,.6);else if(e.key==='ArrowRight')ry=c(ry+.08,-.6,.6);else if(e.key==='ArrowUp')rx=c(rx-.05,-.4,.4);else if(e.key==='ArrowDown')rx=c(rx+.05,-.4,.4);else if(e.key==='+'||e.key==='=')tz=c(tz*.92,.7,1.4);else if(e.key==='-')tz=c(tz*1.08,.7,1.4);else ch=0;
if(ch){e.preventDefault();applyView()}});
goHook=k=>{""")
# ---------- CSS patches (+ readability, a11y, fallback bg)
css+="""
#scene{background:radial-gradient(ellipse at 30% 20%,#16283c,#070b11 70%)}
.panel{width:min(460px,44vw)}.panel h1{font-size:clamp(20px,2.2vw,28px)}.panel p{font-size:14px;line-height:1.85}
.card span{font-size:12px}.row{font-size:13px}.btn{font-size:13px}
.skip{position:fixed;top:-60px;right:12px;z-index:50;background:var(--gold);color:#1a1206;padding:8px 14px;font-weight:800}.skip:focus{top:10px}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@media(max-width:760px){.panel{width:auto}.panel p{font-size:13px;line-height:1.75}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
"""
css=css.replace('--muted:#9aabba','--muted:#aab9c7')
open(out+'/assets/style.css','w',encoding='utf-8').write("@font-face{font-family:VazirLocal;src:local('Vazirmatn'),url('/assets/fonts/Vazirmatn.woff2') format('woff2');font-display:swap}\n"+css.replace('font-family:Vazirmatn,','font-family:VazirLocal,Vazirmatn,'))
# ---------- dead-code cleanup
for pat,rep_ in [(r"const chin=",""),(r"const earInset=",""),(r"const socket=",""),(r"const strip=",""),(r"\s*const all=\[\];",""),(r"all\.forEach\(\(p,i\)=>\{[^}]*\}\);",""),(r"\s*beam\.material=metal;",""),(r"const beam=box\(","box(")]:
    js,n=re.subn(pat,rep_,js); assert n==1,(pat,n)
open(out+'/assets/app.js','w',encoding='utf-8').write(js)
# ---------- S content via node
i=js.index('const S={');j=js.index('\n};',i)+3
open('/tmp/s.js','w',encoding='utf-8').write(js[i:j]+"\nconsole.log(JSON.stringify(S))")
S=json.loads(subprocess.check_output(['node','/tmp/s.js']).decode())
print(list(S))
# ---------- icons
def fnt(sz):
    for f in ['/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf']:
        if os.path.exists(f): return ImageFont.truetype(f,sz)
def icon(sz):
    I=Image.new('RGB',(sz,sz),'#03060c');d=ImageDraw.Draw(I);f=fnt(int(sz*.42));d.text((sz/2,sz/2),'AK',font=f,fill='#e9c477',anchor='mm');return I
for n,sz in [('favicon-32.png',32),('icon-192.png',192),('icon-512.png',512),('apple-touch-icon.png',180)]: icon(sz).save(f'{out}/{n}')
og=Image.new('RGB',(1200,630),'#070b11');d=ImageDraw.Draw(og)
d.text((600,270),'AKD',font=fnt(180),fill='#e9c477',anchor='mm');d.text((600,420),'ALIREZA KHORSANDI DEPARTMENT',font=fnt(40),fill='#e5edf5',anchor='mm');d.rectangle((420,470,780,474),fill='#d9b56f')
og.save(out+'/og-image.png')
json.dump({"name":"AKD | دپارتمان علیرضا خورسندی","short_name":"AKD","start_url":"/","display":"standalone","background_color":"#070b11","theme_color":"#070b11","lang":"fa","dir":"rtl","icons":[{"src":"/icon-192.png","sizes":"192x192","type":"image/png"},{"src":"/icon-512.png","sizes":"512x512","type":"image/png"}]},open(out+'/manifest.webmanifest','w',encoding='utf-8'),ensure_ascii=False)
# ---------- pages
loader="""<script>(function(){var b='/vendor/three/',x=new XMLHttpRequest();try{x.open('HEAD',b+'build/three.module.js',false);x.send();if(x.status!==200)throw 0}catch(e){b='https://cdn.jsdelivr.net/npm/three@0.160.0/'}
var s=document.createElement('script');s.type='importmap';s.textContent=JSON.stringify({imports:{three:b+'build/three.module.js','three/addons/':b+'examples/jsm/'}});document.head.appendChild(s)})();</script>"""
body=sub(body,'<a class="brand" href="#home">','<a class="skip" href="#panel">رفتن به محتوا</a><a class="brand" href="/">')
body=sub(body,'<aside class="panel" id="panel" aria-live="polite"></aside>','<aside class="panel" id="panel" aria-label="محتوای بخش"></aside>')
body=sub(body,'<div id="scene"></div>','<div id="scene" aria-hidden="true"></div>')
def page(k,title,desc,path,noindex=False):
    url=f'https://{DOMAIN}{path}'
    pn=f"<h1>{S[k]['t']}</h1><p>{S[k]['b']}</p>{S[k].get('x','')}<div class=\"act\">{S[k].get('a','')}</div>"
    ld={"@context":"https://schema.org","@graph":[{"@type":"Person","name":"علیرضا خورسندی","alternateName":"Alireza Khorsandi","url":f"https://{DOMAIN}/"},{"@type":"WebSite","name":"AKD","url":f"https://{DOMAIN}/","inLanguage":"fa"}]}
    head=f"""<!doctype html>
<html lang="fa" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#070b11">
<title>{title}</title><meta name="description" content="{desc}">{'<meta name="robots" content="noindex">' if noindex else ''}
<link rel="canonical" href="{url}"><meta name="author" content="Alireza Khorsandi"><meta name="copyright" content="© 2026 Alireza Khorsandi">
<meta property="og:type" content="website"><meta property="og:locale" content="fa_IR"><meta property="og:title" content="{title}"><meta property="og:description" content="{desc}"><meta property="og:url" content="{url}"><meta property="og:image" content="https://{DOMAIN}/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/manifest.webmanifest">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;800&display=swap"><link rel="stylesheet" href="/assets/style.css">
<script type="application/ld+json">{json.dumps(ld,ensure_ascii=False)}</script></head><body>"""
    b=body.replace('<aside class="panel" id="panel" aria-label="محتوای بخش"></aside>',f'<aside class="panel" id="panel" aria-label="محتوای بخش">{pn}</aside>')
    links=''.join(f'<a href="{"/" if q=="home" else "/"+q+"/"}">{re.sub("<[^>]*>","",S[q]["t"])}</a>' for q in S)
    return head+b+f'<nav class="sr" aria-label="نقشهٔ سایت">{links}</nav><noscript><p style="position:fixed;bottom:60px;right:16px;color:#e5edf5">برای دیدن نمای سه‌بعدی، JavaScript را فعال کنید.</p></noscript>{loader}{classic}<script type="module" src="/assets/app.js"></script></body></html>'
urls=[]
for k in S:
    t=re.sub('<[^>]*>','',S[k]['t']);d=re.sub('<[^>]*>','',S[k]['b'])[:155]
    title='AKD | دپارتمان علیرضا خورسندی' if k=='home' else f'{t} | AKD | دپارتمان علیرضا خورسندی'
    p='/' if k=='home' else f'/{k}/'
    if k!='home': os.makedirs(f'{out}/{k}',exist_ok=True)
    open(f'{out}'+('/index.html' if k=='home' else f'/{k}/index.html'),'w',encoding='utf-8').write(page(k,title,d,p));urls.append(p)
open(out+'/404.html','w',encoding='utf-8').write(page('home','صفحه پیدا نشد | AKD','صفحهٔ درخواستی پیدا نشد؛ به صفحهٔ اصلی بروید.','/404.html',True))
open(out+'/sitemap.xml','w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join(f'<url><loc>https://{DOMAIN}{u}</loc></url>' for u in urls)+'</urlset>')
open(out+'/robots.txt','w').write(f'User-agent: *\nAllow: /\nSitemap: https://{DOMAIN}/sitemap.xml\n')
open(out+'/.htaccess','w').write(f"""RewriteEngine On
RewriteCond %{{HTTPS}} off
RewriteRule ^ https://{DOMAIN}%{{REQUEST_URI}} [L,R=301]
RewriteCond %{{HTTP_HOST}} ^www\\. [NC]
RewriteRule ^ https://{DOMAIN}%{{REQUEST_URI}} [L,R=301]
ErrorDocument 404 /404.html
AddType application/manifest+json .webmanifest
AddType text/javascript .js .mjs
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/css text/javascript application/json image/svg+xml
</IfModule>
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType text/css "access plus 1 month"
ExpiresByType text/javascript "access plus 1 month"
</IfModule>
<IfModule mod_headers.c>
Header set X-Content-Type-Options "nosniff"
Header set Referrer-Policy "strict-origin-when-cross-origin"
Header set X-Frame-Options "SAMEORIGIN"
Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self' https://cdn.jsdelivr.net"
</IfModule>
""")
open(out+'/README-DEPLOY.txt','w',encoding='utf-8').write(f"""راهنمای استقرار AKD
1) دامنه: در build.py مقدار DOMAIN (فعلاً {DOMAIN}) را به دامنهٔ واقعی تغییر دهید و دوباره اجرا کنید؛ یا در فایل‌های html/sitemap/robots متن {DOMAIN} را جایگزین کنید.
2) خودمیزبانی Three.js (توصیه‌شده): npm pack three@0.160.0 ، سپس از پوشهٔ package فقط build/three.module.js (و three.core.js اگر وجود داشت) و examples/jsm/environments/RoomEnvironment.js را با همین ساختار داخل vendor/three/ بگذارید. تا آن زمان سایت خودکار از CDN استفاده می‌کند.
3) فونت: فایل Vazirmatn.woff2 را در assets/fonts/ بگذارید.
4) کل پوشه را روی میزبان (ریشهٔ دامنه) آپلود کنید. برای تست محلی: python3 -m http.server داخل همین پوشه.
5) پس از فعال شدن SSL، در Google Search Console دامنه را تأیید و sitemap.xml را ثبت کنید.
""")
print('done')
