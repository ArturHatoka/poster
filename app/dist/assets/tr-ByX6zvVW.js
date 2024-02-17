import{c as o,b as n,i as m,j as i}from"./index.C-pJD9LT.entry.js";import"./vue.runtime.esm-bundler-Cgz0mG_r.js";import"./runtime-core.esm-bundler-B9Ihh7Ob.js";import"./index-D7k-th8B.js";import"./pinia.DYOI27yS.entry.js";import"./vue-i18n.CxOLhzc_.entry.js";import"./vue-router.CK3kXWF-.entry.js";const d={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yarım dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yaklaşık 1 saat",other:"yaklaşık {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"yaklaşık 1 hafta",other:"yaklaşık {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"yaklaşık 1 ay",other:"yaklaşık {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yaklaşık 1 yıl",other:"yaklaşık {{count}} yıl"},xYears:{one:"1 yıl",other:"{{count}} yıl"},overXYears:{one:"1 yıldan fazla",other:"{{count}} yıldan fazla"},almostXYears:{one:"neredeyse 1 yıl",other:"neredeyse {{count}} yıl"}},l=(a,r,e)=>{let t;const s=d[a];return typeof s=="string"?t=s:r===1?t=s.one:t=s.other.replace("{{count}}",r.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?t+" sonra":t+" önce":t},c={full:"d MMMM y EEEE",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.yyyy"},u={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={full:"{{date}} 'saat' {{time}}",long:"{{date}} 'saat' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},y={date:o({formats:c,defaultWidth:"full"}),time:o({formats:u,defaultWidth:"full"}),dateTime:o({formats:h,defaultWidth:"full"})},k={lastWeek:"'geçen hafta' eeee 'saat' p",yesterday:"'dün saat' p",today:"'bugün saat' p",tomorrow:"'yarın saat' p",nextWeek:"eeee 'saat' p",other:"P"},f=(a,r,e,t)=>k[a],g={narrow:["MÖ","MS"],abbreviated:["MÖ","MS"],wide:["Milattan Önce","Milattan Sonra"]},b={narrow:["1","2","3","4"],abbreviated:["1Ç","2Ç","3Ç","4Ç"],wide:["İlk çeyrek","İkinci Çeyrek","Üçüncü çeyrek","Son çeyrek"]},p={narrow:["O","Ş","M","N","M","H","T","A","E","E","K","A"],abbreviated:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],wide:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},P={narrow:["P","P","S","Ç","P","C","C"],short:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],abbreviated:["Paz","Pzt","Sal","Çar","Per","Cum","Cts"],wide:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},M={narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"},wide:{am:"Ö.Ö.",pm:"Ö.S.",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"}},w={narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"},wide:{am:"ö.ö.",pm:"ö.s.",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"}},z=(a,r)=>Number(a)+".",v={ordinalNumber:z,era:n({values:g,defaultWidth:"wide"}),quarter:n({values:b,defaultWidth:"wide",argumentCallback:a=>Number(a)-1}),month:n({values:p,defaultWidth:"wide"}),day:n({values:P,defaultWidth:"wide"}),dayPeriod:n({values:M,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})},W=/^(\d+)(\.)?/i,S=/\d+/i,H={narrow:/^(mö|ms)/i,abbreviated:/^(mö|ms)/i,wide:/^(milattan önce|milattan sonra)/i},C={any:[/(^mö|^milattan önce)/i,/(^ms|^milattan sonra)/i]},E={narrow:/^[1234]/i,abbreviated:/^[1234]ç/i,wide:/^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i},D={any:[/1/i,/2/i,/3/i,/4/i],abbreviated:[/1ç/i,/2ç/i,/3ç/i,/4ç/i],wide:[/^(i|İ)lk çeyrek/i,/(i|İ)kinci çeyrek/i,/üçüncü çeyrek/i,/son çeyrek/i]},x={narrow:/^[oşmnhtaek]/i,abbreviated:/^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,wide:/^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i},F={narrow:[/^o/i,/^ş/i,/^m/i,/^n/i,/^m/i,/^h/i,/^t/i,/^a/i,/^e/i,/^e/i,/^k/i,/^a/i],any:[/^o/i,/^ş/i,/^mar/i,/^n/i,/^may/i,/^h/i,/^t/i,/^ağ/i,/^ey/i,/^ek/i,/^k/i,/^ar/i]},N={narrow:/^[psçc]/i,short:/^(pz|pt|sa|ça|pe|cu|ct)/i,abbreviated:/^(paz|pzt|sal|çar|per|cum|cts)/i,wide:/^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i},V={narrow:[/^p/i,/^p/i,/^s/i,/^ç/i,/^p/i,/^c/i,/^c/i],any:[/^pz/i,/^pt/i,/^sa/i,/^ça/i,/^pe/i,/^cu/i,/^ct/i],wide:[/^pazar(?!tesi)/i,/^pazartesi/i,/^salı/i,/^çarşamba/i,/^perşembe/i,/^cuma(?!rtesi)/i,/^cumartesi/i]},X={narrow:/^(öö|ös|gy|ö|sa|ös|ak|ge)/i,any:/^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i},A={any:{am:/^ö\.?ö\.?/i,pm:/^ö\.?s\.?/i,midnight:/^(gy|gece yarısı)/i,noon:/^öğ/i,morning:/^sa/i,afternoon:/^öğleden sonra/i,evening:/^ak/i,night:/^ge/i}},T={ordinalNumber:m({matchPattern:W,parsePattern:S,valueCallback:function(a){return parseInt(a,10)}}),era:i({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),quarter:i({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:D,defaultParseWidth:"any",valueCallback:a=>a+1}),month:i({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),day:i({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:V,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:X,defaultMatchWidth:"any",parsePatterns:A,defaultParseWidth:"any"})},Q={code:"tr",formatDistance:l,formatLong:y,formatRelative:f,localize:v,match:T,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{Q as default,Q as tr};
