import{c as s,b as r,i as o,j as d}from"./index.C-pJD9LT.entry.js";import"./vue.runtime.esm-bundler-Cgz0mG_r.js";import"./runtime-core.esm-bundler-B9Ihh7Ob.js";import"./index-D7k-th8B.js";import"./pinia.DYOI27yS.entry.js";import"./vue-i18n.CxOLhzc_.entry.js";import"./vue-router.CK3kXWF-.entry.js";const m={lessThanXSeconds:{one:"menys d'un segon",eleven:"menys d'onze segons",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",eleven:"menys d'onze minuts",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXWeeks:{one:"aproximadament una setmana",other:"aproximadament {{count}} setmanes"},xWeeks:{one:"1 setmana",other:"{{count}} setmanes"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"més d'un any",eleven:"més d'onze anys",other:"més de {{count}} anys"},almostXYears:{one:"gairebé un any",other:"gairebé {{count}} anys"}},l=(a,i,e)=>{let t;const n=m[a];return typeof n=="string"?t=n:i===1?t=n.one:i===11&&n.eleven?t=n.eleven:t=n.other.replace("{{count}}",String(i)),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"en "+t:"fa "+t:t},u={full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},c={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},h={full:"{{date}} 'a les' {{time}}",long:"{{date}} 'a les' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},g={date:s({formats:u,defaultWidth:"full"}),time:s({formats:c,defaultWidth:"full"}),dateTime:s({formats:h,defaultWidth:"full"})},b={lastWeek:"'el' eeee 'passat a la' LT",yesterday:"'ahir a la' p",today:"'avui a la' p",tomorrow:"'demà a la' p",nextWeek:"eeee 'a la' p",other:"P"},p={lastWeek:"'el' eeee 'passat a les' p",yesterday:"'ahir a les' p",today:"'avui a les' p",tomorrow:"'demà a les' p",nextWeek:"eeee 'a les' p",other:"P"},f=(a,i,e,t)=>i.getHours()!==1?p[a]:b[a],v={narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","després de Crist"]},y={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]},w={narrow:["GN","FB","MÇ","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},P={narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},M={narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"}},j={narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}},W=(a,i)=>{const e=Number(a),t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"r";case 2:return e+"n";case 3:return e+"r";case 4:return e+"t"}return e+"è"},C={ordinalNumber:W,era:r({values:v,defaultWidth:"wide"}),quarter:r({values:y,defaultWidth:"wide",argumentCallback:a=>a-1}),month:r({values:w,defaultWidth:"wide"}),day:r({values:P,defaultWidth:"wide"}),dayPeriod:r({values:M,defaultWidth:"wide",formattingValues:j,defaultFormattingWidth:"wide"})},x=/^(\d+)(è|r|n|r|t)?/i,D=/\d+/i,N={narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[eé]s de Crist)/i},T={narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[eé]s de Crist)/i]},F={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](è|r|n|r|t)? trimestre/i},k={any:[/1/i,/2/i,/3/i,/4/i]},z={narrow:/^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},H={narrow:[/^GN/i,/^FB/i,/^MÇ/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^març/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^març/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]},L={narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i},S={narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]},V={narrow:/^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i},G={any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/matí/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}},A={ordinalNumber:o({matchPattern:x,parsePattern:D,valueCallback:a=>parseInt(a,10)}),era:d({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"wide"}),quarter:d({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any",valueCallback:a=>a+1}),month:d({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"wide"}),day:d({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"wide"}),dayPeriod:d({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:G,defaultParseWidth:"any"})},q={code:"ca",formatDistance:l,formatLong:g,formatRelative:f,localize:C,match:A,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{q as ca,q as default};