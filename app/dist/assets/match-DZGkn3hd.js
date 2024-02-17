import{b as r,i as m,j as s}from"./index.C-pJD9LT.entry.js";const d={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}},D=(a,i,n)=>{let e;const t=d[a];return typeof t=="string"?e=t:i===1?e=t.one:e=t.other.replace("{{count}}",String(i)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"dans "+e:"il y a "+e:e},u={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},c={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},l={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},h={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},v={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}},f=(a,i)=>{const n=Number(a),e=i==null?void 0:i.unit;if(n===0)return"0";const t=["year","week","hour","minute","second"];let o;return n===1?o=e&&t.includes(e)?"ère":"er":o="ème",n+o},b=["MMM","MMMM"],N={preprocessor:(a,i)=>a.getDate()===1||!i.some(e=>e.isToken&&b.includes(e.value))?i:i.map(e=>e.isToken&&e.value==="do"?{isToken:!0,value:"d"}:e),ordinalNumber:f,era:r({values:u,defaultWidth:"wide"}),quarter:r({values:c,defaultWidth:"wide",argumentCallback:a=>a-1}),month:r({values:l,defaultWidth:"wide"}),day:r({values:h,defaultWidth:"wide"}),dayPeriod:r({values:v,defaultWidth:"wide"})},P=/^(\d+)(ième|ère|ème|er|e)?/i,p=/\d+/i,M={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},j={any:[/^av/i,/^ap/i]},w={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},y={any:[/1/i,/2/i,/3/i,/4/i]},g={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},J={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},C={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},W={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},T={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},k={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},S={ordinalNumber:m({matchPattern:P,parsePattern:p,valueCallback:a=>parseInt(a)}),era:s({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:j,defaultParseWidth:"any"}),quarter:s({matchPatterns:w,defaultMatchWidth:"wide",parsePatterns:y,defaultParseWidth:"any",valueCallback:a=>a+1}),month:s({matchPatterns:g,defaultMatchWidth:"wide",parsePatterns:J,defaultParseWidth:"any"}),day:s({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:W,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:T,defaultMatchWidth:"any",parsePatterns:k,defaultParseWidth:"any"})};export{D as f,N as l,S as m};
