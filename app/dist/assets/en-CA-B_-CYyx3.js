import{c as a,d as r,l as m,m as u}from"./index.C-pJD9LT.entry.js";import"./vue.runtime.esm-bundler-Cgz0mG_r.js";import"./runtime-core.esm-bundler-B9Ihh7Ob.js";import"./index-D7k-th8B.js";import"./pinia.DYOI27yS.entry.js";import"./vue-i18n.CxOLhzc_.entry.js";import"./vue-router.CK3kXWF-.entry.js";const h={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"a second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"a minute",other:"{{count}} minutes"},aboutXHours:{one:"about an hour",other:"about {{count}} hours"},xHours:{one:"an hour",other:"{{count}} hours"},xDays:{one:"a day",other:"{{count}} days"},aboutXWeeks:{one:"about a week",other:"about {{count}} weeks"},xWeeks:{one:"a week",other:"{{count}} weeks"},aboutXMonths:{one:"about a month",other:"about {{count}} months"},xMonths:{one:"a month",other:"{{count}} months"},aboutXYears:{one:"about a year",other:"about {{count}} years"},xYears:{one:"a year",other:"{{count}} years"},overXYears:{one:"over a year",other:"over {{count}} years"},almostXYears:{one:"almost a year",other:"almost {{count}} years"}},l=(s,n,t)=>{let e;const o=h[s];return typeof o=="string"?e=o:n===1?e=o.one:e=o.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+e:e+" ago":e},i={full:"EEEE, MMMM do, yyyy",long:"MMMM do, yyyy",medium:"MMM d, yyyy",short:"yyyy-MM-dd"},c={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},d={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},f={date:a({formats:i,defaultWidth:"full"}),time:a({formats:c,defaultWidth:"full"}),dateTime:a({formats:d,defaultWidth:"full"})},p={code:"en-CA",formatDistance:l,formatLong:f,formatRelative:r,localize:m,match:u,options:{weekStartsOn:0,firstWeekContainsDate:1}};export{p as default,p as enCA};
