import{c as m,b as r,i as d,j as i}from"./index.C-pJD9LT.entry.js";import"./vue.runtime.esm-bundler-Cgz0mG_r.js";import"./runtime-core.esm-bundler-B9Ihh7Ob.js";import"./index-D7k-th8B.js";import"./pinia.DYOI27yS.entry.js";import"./vue-i18n.CxOLhzc_.entry.js";import"./vue-router.CK3kXWF-.entry.js";const s={lessThanXSeconds:{one:"mindre än en sekund",other:"mindre än {{count}} sekunder"},xSeconds:{one:"en sekund",other:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{one:"mindre än en minut",other:"mindre än {{count}} minuter"},xMinutes:{one:"en minut",other:"{{count}} minuter"},aboutXHours:{one:"ungefär en timme",other:"ungefär {{count}} timmar"},xHours:{one:"en timme",other:"{{count}} timmar"},xDays:{one:"en dag",other:"{{count}} dagar"},aboutXWeeks:{one:"ungefär en vecka",other:"ungefär {{count}} veckor"},xWeeks:{one:"en vecka",other:"{{count}} veckor"},aboutXMonths:{one:"ungefär en månad",other:"ungefär {{count}} månader"},xMonths:{one:"en månad",other:"{{count}} månader"},aboutXYears:{one:"ungefär ett år",other:"ungefär {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"över ett år",other:"över {{count}} år"},almostXYears:{one:"nästan ett år",other:"nästan {{count}} år"}},l=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"],u=(e,n,a)=>{let t;const o=s[e];return typeof o=="string"?t=o:n===1?t=o.one:t=o.other.replace("{{count}}",n<13?l[n]:String(n)),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"om "+t:t+" sedan":t},f={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},c={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},g={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},h={date:m({formats:f,defaultWidth:"full"}),time:m({formats:c,defaultWidth:"full"}),dateTime:m({formats:g,defaultWidth:"full"})},v={lastWeek:"'i' EEEE's kl.' p",yesterday:"'igår kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},p=(e,n,a,t)=>v[e],b={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},k={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},P={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},w={narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tors","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},y={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},M={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}},j=(e,n)=>{const a=Number(e),t=a%100;if(t>20||t<10)switch(t%10){case 1:case 2:return a+":a"}return a+":e"},W={ordinalNumber:j,era:r({values:b,defaultWidth:"wide"}),quarter:r({values:k,defaultWidth:"wide",argumentCallback:e=>e-1}),month:r({values:P,defaultWidth:"wide"}),day:r({values:w,defaultWidth:"wide"}),dayPeriod:r({values:y,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},E=/^(\d+)(:a|:e)?/i,D=/\d+/i,K={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},x={any:[/^f/i,/^[ev]/i]},F={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},H={any:[/1/i,/2/i,/3/i,/4/i]},z={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},V={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},X={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},L={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},S={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},N={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Q={ordinalNumber:d({matchPattern:E,parsePattern:D,valueCallback:e=>parseInt(e,10)}),era:i({matchPatterns:K,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:i({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:e=>e+1}),month:i({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),day:i({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:S,defaultMatchWidth:"any",parsePatterns:N,defaultParseWidth:"any"})},J={code:"sv",formatDistance:u,formatLong:h,formatRelative:p,localize:W,match:Q,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{J as default,J as sv};