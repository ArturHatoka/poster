import{c as s,b as n,i as m,j as i}from"./index.C-pJD9LT.entry.js";import"./vue.runtime.esm-bundler-Cgz0mG_r.js";import"./runtime-core.esm-bundler-B9Ihh7Ob.js";import"./index-D7k-th8B.js";import"./pinia.DYOI27yS.entry.js";import"./vue-i18n.CxOLhzc_.entry.js";import"./vue-router.CK3kXWF-.entry.js";const d={lessThanXSeconds:{one:"mwens pase yon segond",other:"mwens pase {{count}} segond"},xSeconds:{one:"1 segond",other:"{{count}} segond"},halfAMinute:"30 segond",lessThanXMinutes:{one:"mwens pase yon minit",other:"mwens pase {{count}} minit"},xMinutes:{one:"1 minit",other:"{{count}} minit"},aboutXHours:{one:"anviwon inè",other:"anviwon {{count}} è"},xHours:{one:"1 lè",other:"{{count}} lè"},xDays:{one:"1 jou",other:"{{count}} jou"},aboutXWeeks:{one:"anviwon 1 semèn",other:"anviwon {{count}} semèn"},xWeeks:{one:"1 semèn",other:"{{count}} semèn"},aboutXMonths:{one:"anviwon 1 mwa",other:"anviwon {{count}} mwa"},xMonths:{one:"1 mwa",other:"{{count}} mwa"},aboutXYears:{one:"anviwon 1 an",other:"anviwon {{count}} an"},xYears:{one:"1 an",other:"{{count}} an"},overXYears:{one:"plis pase 1 an",other:"plis pase {{count}} an"},almostXYears:{one:"prèske 1 an",other:"prèske {{count}} an"}},l=(a,r,e)=>{let t;const o=d[a];return typeof o=="string"?t=o:r===1?t=o.one:t=o.other.replace("{{count}}",String(r)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"nan "+t:"sa fè "+t:t},u={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},c={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={full:"{{date}} 'nan lè' {{time}}",long:"{{date}} 'nan lè' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},p={date:s({formats:u,defaultWidth:"full"}),time:s({formats:c,defaultWidth:"full"}),dateTime:s({formats:h,defaultWidth:"full"})},v={lastWeek:"eeee 'pase nan lè' p",yesterday:"'yè nan lè' p",today:"'jodi a' p",tomorrow:"'demen nan lè' p'",nextWeek:"eeee 'pwochen nan lè' p",other:"P"},f=(a,r,e,t)=>v[a],w={narrow:["av. J.-K","ap. J.-K"],abbreviated:["av. J.-K","ap. J.-K"],wide:["anvan Jezi Kris","apre Jezi Kris"]},y={narrow:["T1","T2","T3","T4"],abbreviated:["1ye trim.","2yèm trim.","3yèm trim.","4yèm trim."],wide:["1ye trimès","2yèm trimès","3yèm trimès","4yèm trimès"]},b={narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["janv.","fevr.","mas","avr.","me","jen","jiyè","out","sept.","okt.","nov.","des."],wide:["janvye","fevrye","mas","avril","me","jen","jiyè","out","septanm","oktòb","novanm","desanm"]},P={narrow:["D","L","M","M","J","V","S"],short:["di","le","ma","mè","je","va","sa"],abbreviated:["dim.","len.","mad.","mèk.","jed.","van.","sam."],wide:["dimanch","lendi","madi","mèkredi","jedi","vandredi","samdi"]},M={narrow:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"swa",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"maten",afternoon:"aprèmidi",evening:"swa",night:"maten"},wide:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"nan maten",afternoon:"nan aprèmidi",evening:"nan aswè",night:"nan maten"}},j=(a,r)=>{const e=Number(a);return e===0?String(e):e+(e===1?"ye":"yèm")},g={ordinalNumber:j,era:n({values:w,defaultWidth:"wide"}),quarter:n({values:y,defaultWidth:"wide",argumentCallback:a=>a-1}),month:n({values:b,defaultWidth:"wide"}),day:n({values:P,defaultWidth:"wide"}),dayPeriod:n({values:M,defaultWidth:"wide"})},W=/^(\d+)(ye|yèm)?/i,k=/\d+/i,J={narrow:/^(av\.J\.K|ap\.J\.K|ap\.J\.-K)/i,abbreviated:/^(av\.J\.-K|av\.J-K|apr\.J\.-K|apr\.J-K|ap\.J-K)/i,wide:/^(avan Jezi Kris|apre Jezi Kris)/i},K={any:[/^av/i,/^ap/i]},x={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](ye|yèm)? trimès/i},z={any:[/1/i,/2/i,/3/i,/4/i]},D={narrow:/^[jfmasond]/i,abbreviated:/^(janv|fevr|mas|avr|me|jen|jiyè|out|sept|okt|nov|des)\.?/i,wide:/^(janvye|fevrye|mas|avril|me|jen|jiyè|out|septanm|oktòb|novanm|desanm)/i},H={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^o/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^av/i,/^me/i,/^je/i,/^ji/i,/^ou/i,/^s/i,/^ok/i,/^n/i,/^d/i]},F={narrow:/^[lmjvsd]/i,short:/^(di|le|ma|me|je|va|sa)/i,abbreviated:/^(dim|len|mad|mèk|jed|van|sam)\.?/i,wide:/^(dimanch|lendi|madi|mèkredi|jedi|vandredi|samdi)/i},S={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^le/i,/^ma/i,/^mè/i,/^je/i,/^va/i,/^sa/i]},T={narrow:/^(a|p|minwit|midi|mat\.?|ap\.?m\.?|swa)/i,any:/^([ap]\.?\s?m\.?|nan maten|nan aprèmidi|nan aswè)/i},X={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/sw/i,night:/nwit/i}},L={ordinalNumber:m({matchPattern:W,parsePattern:k,valueCallback:a=>parseInt(a,10)}),era:i({matchPatterns:J,defaultMatchWidth:"wide",parsePatterns:K,defaultParseWidth:"any"}),quarter:i({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any",valueCallback:a=>a+1}),month:i({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),day:i({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:T,defaultMatchWidth:"any",parsePatterns:X,defaultParseWidth:"any"})},_={code:"ht",formatDistance:l,formatLong:p,formatRelative:f,localize:g,match:L,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{_ as default,_ as ht};
