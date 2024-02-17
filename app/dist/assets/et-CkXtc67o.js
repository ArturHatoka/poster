import{c as s,b as i,i as d,j as o}from"./index.C-pJD9LT.entry.js";import"./vue.runtime.esm-bundler-Cgz0mG_r.js";import"./runtime-core.esm-bundler-B9Ihh7Ob.js";import"./index-D7k-th8B.js";import"./pinia.DYOI27yS.entry.js";import"./vue-i18n.CxOLhzc_.entry.js";import"./vue-router.CK3kXWF-.entry.js";const u={lessThanXSeconds:{standalone:{one:"vähem kui üks sekund",other:"vähem kui {{count}} sekundit"},withPreposition:{one:"vähem kui ühe sekundi",other:"vähem kui {{count}} sekundi"}},xSeconds:{standalone:{one:"üks sekund",other:"{{count}} sekundit"},withPreposition:{one:"ühe sekundi",other:"{{count}} sekundi"}},halfAMinute:{standalone:"pool minutit",withPreposition:"poole minuti"},lessThanXMinutes:{standalone:{one:"vähem kui üks minut",other:"vähem kui {{count}} minutit"},withPreposition:{one:"vähem kui ühe minuti",other:"vähem kui {{count}} minuti"}},xMinutes:{standalone:{one:"üks minut",other:"{{count}} minutit"},withPreposition:{one:"ühe minuti",other:"{{count}} minuti"}},aboutXHours:{standalone:{one:"umbes üks tund",other:"umbes {{count}} tundi"},withPreposition:{one:"umbes ühe tunni",other:"umbes {{count}} tunni"}},xHours:{standalone:{one:"üks tund",other:"{{count}} tundi"},withPreposition:{one:"ühe tunni",other:"{{count}} tunni"}},xDays:{standalone:{one:"üks päev",other:"{{count}} päeva"},withPreposition:{one:"ühe päeva",other:"{{count}} päeva"}},aboutXWeeks:{standalone:{one:"umbes üks nädal",other:"umbes {{count}} nädalat"},withPreposition:{one:"umbes ühe nädala",other:"umbes {{count}} nädala"}},xWeeks:{standalone:{one:"üks nädal",other:"{{count}} nädalat"},withPreposition:{one:"ühe nädala",other:"{{count}} nädala"}},aboutXMonths:{standalone:{one:"umbes üks kuu",other:"umbes {{count}} kuud"},withPreposition:{one:"umbes ühe kuu",other:"umbes {{count}} kuu"}},xMonths:{standalone:{one:"üks kuu",other:"{{count}} kuud"},withPreposition:{one:"ühe kuu",other:"{{count}} kuu"}},aboutXYears:{standalone:{one:"umbes üks aasta",other:"umbes {{count}} aastat"},withPreposition:{one:"umbes ühe aasta",other:"umbes {{count}} aasta"}},xYears:{standalone:{one:"üks aasta",other:"{{count}} aastat"},withPreposition:{one:"ühe aasta",other:"{{count}} aasta"}},overXYears:{standalone:{one:"rohkem kui üks aasta",other:"rohkem kui {{count}} aastat"},withPreposition:{one:"rohkem kui ühe aasta",other:"rohkem kui {{count}} aasta"}},almostXYears:{standalone:{one:"peaaegu üks aasta",other:"peaaegu {{count}} aastat"},withPreposition:{one:"peaaegu ühe aasta",other:"peaaegu {{count}} aasta"}}},h=(e,r,t)=>{const n=t!=null&&t.addSuffix?u[e].withPreposition:u[e].standalone;let a;return typeof n=="string"?a=n:r===1?a=n.one:a=n.other.replace("{{count}}",String(r)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?a+" pärast":a+" eest":a},k={full:"EEEE, d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},p={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},c={full:"{{date}} 'kell' {{time}}",long:"{{date}} 'kell' {{time}}",medium:"{{date}}. {{time}}",short:"{{date}}. {{time}}"},v={date:s({formats:k,defaultWidth:"full"}),time:s({formats:p,defaultWidth:"full"}),dateTime:s({formats:c,defaultWidth:"full"})},b={lastWeek:"'eelmine' eeee 'kell' p",yesterday:"'eile kell' p",today:"'täna kell' p",tomorrow:"'homme kell' p",nextWeek:"'järgmine' eeee 'kell' p",other:"P"},f=(e,r,t,n)=>b[e],P={narrow:["e.m.a","m.a.j"],abbreviated:["e.m.a","m.a.j"],wide:["enne meie ajaarvamist","meie ajaarvamise järgi"]},g={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},m={narrow:["J","V","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jaan","veebr","märts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets"],wide:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"]},l={narrow:["P","E","T","K","N","R","L"],short:["P","E","T","K","N","R","L"],abbreviated:["pühap.","esmasp.","teisip.","kolmap.","neljap.","reede.","laup."],wide:["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"]},w={narrow:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},abbreviated:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"},wide:{am:"AM",pm:"PM",midnight:"kesköö",noon:"keskpäev",morning:"hommik",afternoon:"pärastlõuna",evening:"õhtu",night:"öö"}},M={narrow:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},abbreviated:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"},wide:{am:"AM",pm:"PM",midnight:"keskööl",noon:"keskpäeval",morning:"hommikul",afternoon:"pärastlõunal",evening:"õhtul",night:"öösel"}},j=(e,r)=>Number(e)+".",y={ordinalNumber:j,era:i({values:P,defaultWidth:"wide"}),quarter:i({values:g,defaultWidth:"wide",argumentCallback:e=>e-1}),month:i({values:m,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"}),day:i({values:l,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"}),dayPeriod:i({values:w,defaultWidth:"wide",formattingValues:M,defaultFormattingWidth:"wide"})},W=/^\d+\./i,K=/\d+/i,D={narrow:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,abbreviated:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,wide:/^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i},x={any:[/^e/i,/^(m|p)/i]},F={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](\.)? kvartal/i},H={any:[/1/i,/2/i,/3/i,/4/i]},V={narrow:/^[jvmasond]/i,abbreviated:/^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i,wide:/^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i},A={narrow:[/^j/i,/^v/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^v/i,/^mär/i,/^ap/i,/^mai/i,/^juun/i,/^juul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},z={narrow:/^[petknrl]/i,short:/^[petknrl]/i,abbreviated:/^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,wide:/^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i},E={any:[/^p/i,/^e/i,/^t/i,/^k/i,/^n/i,/^r/i,/^l/i]},L={any:/^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i},N={any:{am:/^a/i,pm:/^p/i,midnight:/^keskö/i,noon:/^keskp/i,morning:/hommik/i,afternoon:/pärastlõuna/i,evening:/õhtu/i,night:/öö/i}},X={ordinalNumber:d({matchPattern:W,parsePattern:K,valueCallback:e=>parseInt(e,10)}),era:o({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:o({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any",valueCallback:e=>e+1}),month:o({matchPatterns:V,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),day:o({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:N,defaultParseWidth:"any"})},q={code:"et",formatDistance:h,formatLong:v,formatRelative:f,localize:y,match:X,options:{weekStartsOn:1,firstWeekContainsDate:4}};export{q as default,q as et};