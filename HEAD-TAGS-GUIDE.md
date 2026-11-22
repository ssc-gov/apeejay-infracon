# Head tags guide (index.html)

Sab optional tags `<head>` ke andar, `</head>` se just pehle paste karo. Index.html mein ek commented block (`OPTIONAL TAGS`) already hai.
Har change ke baad: `git add -A`, `git commit -m "Add tags"`, `git push`.

## 1. Google Search Console
- Abhi HTML file method use ho raha hai: `google13cc9917c11315df.html` (root par). Isme head tag ki zaroorat nahi.
- Domain property ke liye DNS TXT record Vercel ke DNS Records mein add hota hai, head tag nahi.
- Agar meta tag chahiye: Search Console > Settings > Ownership verification > HTML tag. Wo `<meta name="google-site-verification" content="...">` deta hai.

## 2. Bing Webmaster Tools (Bing, Yahoo, DuckDuckGo ke liye)
- https://www.bing.com/webmasters > Add site (ya Search Console se import).
- Verification: HTML Meta Tag chuno. Wo `<meta name="msvalidate.01" content="...">` deta hai.

## 3. Google Analytics 4 (visitors dekhne ke liye)
1. https://analytics.google.com > Admin > Data streams > Add stream > Web.
2. Measurement ID copy karo (jaise `G-ABCD123456`).
3. `ga-init.js.template` ko `ga-init.js` rename karo aur `G-XXXXXXXXXX` ki jagah apni ID daalo.
4. index.html ka commented GA block uncomment karo aur wahan bhi ID badlo.
5. `vercel.json` mein Content-Security-Policy ko aise badlo (warna analytics block hoga):
   - `script-src` mein add: `https://www.googletagmanager.com`
   - `connect-src` mein add: `https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com`
   - `img-src` mein add: `https://www.google-analytics.com https://*.googletagmanager.com`

## 4. Facebook / Meta domain verification
- business.facebook.com > Brand Safety > Domains > Add > Meta-tag verification.
- Wo `<meta name="facebook-domain-verification" content="...">` deta hai.

## 5. Baaki
- Google Business Profile: head tag nahi chahiye, business.google.com par verify hota hai.
- Social profile links schema mein `sameAs` mein hain (index.html ke JSON-LD mein). Naya profile ho to wahan URL add karo.
- Address milne par JSON-LD mein `"address"` add karna (Search ke liye accha hai).
- Font: abhi Google Fonts se load hota hai. Self-host karna ho to Manrope variable `.woff2` download karke `/fonts/` mein rakho aur batao, main CSS bana dunga.
