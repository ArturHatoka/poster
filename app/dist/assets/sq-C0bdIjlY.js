import{c as s,b as n,i as m,j as i}from"./index.C-pJD9LT.entry.js";import"./vue.runtime.esm-bundler-Cgz0mG_r.js";import"./runtime-core.esm-bundler-B9Ihh7Ob.js";import"./index-D7k-th8B.js";import"./pinia.DYOI27yS.entry.js";import"./vue-i18n.CxOLhzc_.entry.js";import"./vue-router.CK3kXWF-.entry.js";const d={lessThanXSeconds:{one:"më pak se një sekondë",other:"më pak se {{count}} sekonda"},xSeconds:{one:"1 sekondë",other:"{{count}} sekonda"},halfAMinute:"gjysëm minuti",lessThanXMinutes:{one:"më pak se një minute",other:"më pak se {{count}} minuta"},xMinutes:{one:"1 minutë",other:"{{count}} minuta"},aboutXHours:{one:"rreth 1 orë",other:"rreth {{count}} orë"},xHours:{one:"1 orë",other:"{{count}} orë"},xDays:{one:"1 ditë",other:"{{count}} ditë"},aboutXWeeks:{one:"rreth 1 javë",other:"rreth {{count}} javë"},xWeeks:{one:"1 javë",other:"{{count}} javë"},aboutXMonths:{one:"rreth 1 muaj",other:"rreth {{count}} muaj"},xMonths:{one:"1 muaj",other:"{{count}} muaj"},aboutXYears:{one:"rreth 1 vit",other:"rreth {{count}} vite"},xYears:{one:"1 vit",other:"{{count}} vite"},overXYears:{one:"mbi 1 vit",other:"mbi {{count}} vite"},almostXYears:{one:"pothuajse 1 vit",other:"pothuajse {{count}} vite"}},h=(e,a,t)=>{let r;const o=d[e];return typeof o=="string"?r=o:a===1?r=o.one:r=o.other.replace("{{count}}",String(a)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"në "+r:r+" më parë":r},u={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},l={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},c={full:"{{date}} 'në' {{time}}",long:"{{date}} 'në' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},b={date:s({formats:u,defaultWidth:"full"}),time:s({formats:l,defaultWidth:"full"}),dateTime:s({formats:c,defaultWidth:"full"})},f={lastWeek:"'të' eeee 'e shkuar në' p",yesterday:"'dje në' p",today:"'sot në' p",tomorrow:"'nesër në' p",nextWeek:"eeee 'at' p",other:"P"},p=(e,a,t,r)=>f[e],j={narrow:["P","M"],abbreviated:["PK","MK"],wide:["Para Krishtit","Mbas Krishtit"]},g={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["4-mujori I","4-mujori II","4-mujori III","4-mujori IV"]},P={narrow:["J","S","M","P","M","Q","K","G","S","T","N","D"],abbreviated:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],wide:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"]},M={narrow:["D","H","M","M","E","P","S"],short:["Di","Hë","Ma","Më","En","Pr","Sh"],abbreviated:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],wide:["Dielë","Hënë","Martë","Mërkurë","Enjte","Premte","Shtunë"]},v={narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"mëngjes",afternoon:"dite",evening:"mbrëmje",night:"natë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"}},k={narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"}},y=(e,a)=>{const t=Number(e);return(a==null?void 0:a.unit)==="hour"?String(t):t===1?t+"-rë":t===4?t+"t":t+"-të"},w={ordinalNumber:y,era:n({values:j,defaultWidth:"wide"}),quarter:n({values:g,defaultWidth:"wide",argumentCallback:e=>e-1}),month:n({values:P,defaultWidth:"wide"}),day:n({values:M,defaultWidth:"wide"}),dayPeriod:n({values:v,defaultWidth:"wide",formattingValues:k,defaultFormattingWidth:"wide"})},W=/^(\d+)(-rë|-të|t|)?/i,D=/\d+/i,S={narrow:/^(p|m)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(para krishtit|mbas krishtit)/i},q={any:[/^b/i,/^(p|m)/i]},x={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]-mujori (i{1,3}|iv)/i},E={any:[/1/i,/2/i,/3/i,/4/i]},F={narrow:/^[jsmpqkftnd]/i,abbreviated:/^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,wide:/^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i},Q={narrow:[/^j/i,/^s/i,/^m/i,/^p/i,/^m/i,/^q/i,/^k/i,/^g/i,/^s/i,/^t/i,/^n/i,/^d/i],any:[/^ja/i,/^shk/i,/^mar/i,/^pri/i,/^maj/i,/^qer/i,/^kor/i,/^gu/i,/^sht/i,/^tet/i,/^n/i,/^d/i]},V={narrow:/^[dhmeps]/i,short:/^(di|hë|ma|më|en|pr|sh)/i,abbreviated:/^(die|hën|mar|mër|enj|pre|sht)/i,wide:/^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i},z={narrow:[/^d/i,/^h/i,/^m/i,/^m/i,/^e/i,/^p/i,/^s/i],any:[/^d/i,/^h/i,/^ma/i,/^më/i,/^e/i,/^p/i,/^s/i]},I={narrow:/^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,any:/^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i},N={any:{am:/^p/i,pm:/^m/i,midnight:/^me/i,noon:/^dr/i,morning:/mëngjes/i,afternoon:/mbasdite/i,evening:/mbrëmje/i,night:/natë/i}},X={ordinalNumber:m({matchPattern:W,parsePattern:D,valueCallback:e=>parseInt(e,10)}),era:i({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),quarter:i({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any",valueCallback:e=>e+1}),month:i({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),day:i({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:I,defaultMatchWidth:"any",parsePatterns:N,defaultParseWidth:"any"})},J={code:"sq",formatDistance:h,formatLong:b,formatRelative:p,localize:w,match:X,options:{weekStartsOn:1,firstWeekContainsDate:1}};export{J as default,J as sq};
