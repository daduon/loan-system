class i{countFileSize(o){const e=["B","kB","MB","GB","TB"],t=Math.floor(Math.log(o)/Math.log(1024));return`${(o/Math.pow(1024,t)).toFixed(2)} ${e[t]}`}}export{i as F};
