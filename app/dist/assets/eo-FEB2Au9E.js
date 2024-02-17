import{c as m,b as o,i as s,j as n}from"./index.C-pJD9LT.entry.js";import"./vue.runtime.esm-bundler-Cgz0mG_r.js";import"./runtime-core.esm-bundler-B9Ihh7Ob.js";import"./index-D7k-th8B.js";import"./pinia.DYOI27yS.entry.js";import"./vue-i18n.CxOLhzc_.entry.js";import"./vue-router.CK3kXWF-.entry.js";const d={lessThanXSeconds:{one:"malpli ol sekundo",other:"malpli ol {{count}} sekundoj"},xSeconds:{one:"1 sekundo",other:"{{count}} sekundoj"},halfAMinute:"duonminuto",lessThanXMinutes:{one:"malpli ol minuto",other:"malpli ol {{count}} minutoj"},xMinutes:{one:"1 minuto",other:"{{count}} minutoj"},aboutXHours:{one:"proksimume 1 horo",other:"proksimume {{count}} horoj"},xHours:{one:"1 horo",other:"{{count}} horoj"},xDays:{one:"1 tago",other:"{{count}} tagoj"},aboutXMonths:{one:"proksimume 1 monato",other:"proksimume {{count}} monatoj"},xWeeks:{one:"1 semajno",other:"{{count}} semajnoj"},aboutXWeeks:{one:"proksimume 1 semajno",other:"proksimume {{count}} semajnoj"},xMonths:{one:"1 monato",other:"{{count}} monatoj"},aboutXYears:{one:"proksimume 1 jaro",other:"proksimume {{count}} jaroj"},xYears:{one:"1 jaro",other:"{{count}} jaroj"},overXYears:{one:"pli ol 1 jaro",other:"pli ol {{count}} jaroj"},almostXYears:{one:"preskaŭ 1 jaro",other:"preskaŭ {{count}} jaroj"}},u=(a,r,e)=>{let t;const i=d[a];return typeof i=="string"?t=i:r===1?t=i.one:t=i.other.replace("{{count}}",String(r)),e!=null&&e.addSuffix?e!=null&&e.comparison&&e.comparison>0?"post "+t:"antaŭ "+t:t},l={full:"EEEE, do 'de' MMMM y",long:"y-MMMM-dd",medium:"y-MMM-dd",short:"yyyy-MM-dd"},c={full:"Ho 'horo kaj' m:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={any:"{{date}} {{time}}"},p={date:m({formats:l,defaultWidth:"full"}),time:m({formats:c,defaultWidth:"full"}),dateTime:m({formats:h,defaultWidth:"any"})},j={lastWeek:"'pasinta' eeee 'je' p",yesterday:"'hieraŭ je' p",today:"'hodiaŭ je' p",tomorrow:"'morgaŭ je' p",nextWeek:"eeee 'je' p",other:"P"},b=(a,r,e,t)=>j[a],f={narrow:["aK","pK"],abbreviated:["a.K.E.","p.K.E."],wide:["antaŭ Komuna Erao","Komuna Erao"]},k={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1-a kvaronjaro","2-a kvaronjaro","3-a kvaronjaro","4-a kvaronjaro"]},v={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],wide:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"]},g={narrow:["D","L","M","M","Ĵ","V","S"],short:["di","lu","ma","me","ĵa","ve","sa"],abbreviated:["dim","lun","mar","mer","ĵaŭ","ven","sab"],wide:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"]},P={narrow:{am:"a",pm:"p",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},abbreviated:{am:"a.t.m.",pm:"p.t.m.",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},wide:{am:"antaŭtagmeze",pm:"posttagmeze",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"}},w=a=>Number(a)+"-a",y={ordinalNumber:w,era:o({values:f,defaultWidth:"wide"}),quarter:o({values:k,defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:o({values:v,defaultWidth:"wide"}),day:o({values:g,defaultWidth:"wide"}),dayPeriod:o({values:P,defaultWidth:"wide"})},M=/^(\d+)(-?a)?/i,z=/\d+/i,W={narrow:/^([ap]k)/i,abbreviated:/^([ap]\.?\s?k\.?\s?e\.?)/i,wide:/^((antaǔ |post )?komuna erao)/i},x={any:[/^a/i,/^[kp]/i]},D={narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](-?a)? kvaronjaro/i},E={any:[/1/i,/2/i,/3/i,/4/i]},K={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,wide:/^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i},F={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^a(u|ŭ)/i,/^s/i,/^o/i,/^n/i,/^d/i]},H={narrow:/^[dlmĵjvs]/i,short:/^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,wide:/^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i},N={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^(j|ĵ)/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^(j|ĵ)/i,/^v/i,/^s/i]},X={narrow:/^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,abbreviated:/^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,wide:/^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i},L={any:{am:/^a/i,pm:/^p/i,midnight:/^noktom/i,noon:/^t/i,morning:/^m/i,afternoon:/^posttagmeze/i,evening:/^v/i,night:/^n/i}},S={ordinalNumber:s({matchPattern:M,parsePattern:z,valueCallback:function(a){return parseInt(a,10)}}),era:n({matchPatterns:W,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:n({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:n({matchPatterns:K,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),day:n({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:L,defaultParseWidth:"any"})},J={code:"eo",formatDistance:u,formatLong:p,formatRelative:b,localize:y,match:S,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{J as default,J as eo};