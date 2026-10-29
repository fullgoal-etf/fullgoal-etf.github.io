window.ETF_APP={markup:"<header><div class=\"top\"><div class=\"brand\"><i><\/i>ETF数据看板<\/div><div class=\"date\">统计区间 <span id=\"date\"><\/span><\/div><nav class=\"nav\"><a href=\"#overview\">总览<\/a><a href=\"#direction-ranking\">投资方向<\/a><a href=\"#competition\">竞争格局<\/a><a href=\"#categories\">ETF大类<\/a><a href=\"#fuguo-zone\">富国ETF资金榜<\/a><a href=\"#peers\">富国与竞品<\/a><a href=\"#newfunds\">新发基金<\/a><\/nav><\/div><\/header>\n<section class=\"hero\"><div class=\"hero-inner\"><div><h1>ETF近一周变化<\/h1><\/div><div class=\"hero-note\" id=\"heroConclusion\"><\/div><\/div><\/section>\n<main class=\"wrap\">\n<section class=\"panel\" id=\"overview\"><div class=\"panel-head\"><div><h2>总览<\/h2><p>投资方向、ETF 大类和富国单品的区间净申赎<\/p><\/div><\/div><div class=\"pad\"><div class=\"conclusions\" id=\"conclusions\"><\/div><div class=\"chart-card\" style=\"margin-top:20px\"><h3>ETF 大类净流入 / 净流出<\/h3><div id=\"typeBars\"><\/div><\/div><\/div><\/section>\n<section class=\"panel direction-ranking-panel\" id=\"direction-ranking\"><div class=\"panel-head\"><div><h2>投资方向资金排行<\/h2><\/div><div class=\"tabs\" id=\"directionRankTabs\"><button class=\"active\" data-kind=\"in\">净流入方向<\/button><button data-kind=\"out\">净流出方向<\/button><\/div><\/div><div class=\"pad\"><div id=\"directionRankingBoard\"><\/div><\/div><\/section>\n<section class=\"panel\" id=\"fuguo-zone\"><div class=\"panel-head\"><div><h2>富国ETF资金榜<\/h2><p id=\"fuguoRankingRange\"><\/p><\/div><\/div><div class=\"pad fuguo-ranking-grid\" id=\"fuguoRankingGrid\"><\/div><\/section>\n<section class=\"panel\" id=\"competition\"><div class=\"panel-head\"><div><h2>竞争格局<\/h2><p>各基金公司规模、区间净流入与产品数量<\/p><\/div><div class=\"tabs\" id=\"companyTabs\"><button class=\"active\" data-sort=\"scale\">规模排名<\/button><button data-sort=\"flow\">净流入排名<\/button><button data-sort=\"change\">规模变化<\/button><\/div><\/div><div class=\"tablewrap\"><table><thead><tr><th>排名<\/th><th>基金公司<\/th><th>截止规模<\/th><th>区间规模变动<\/th><th>区间净流入<\/th><th>净流入排名<\/th><th>产品数量<\/th><th>净流入 TOP3<\/th><\/tr><\/thead><tbody id=\"companyBody\"><\/tbody><\/table><\/div><\/section>\n<section class=\"panel\" id=\"categories\"><div class=\"panel-head\"><div><h2>ETF 大类<\/h2><p>宽基、行业主题、港股、非港股、策略的具体投资方向<\/p><\/div><div class=\"tabs\" id=\"categoryTabs\"><\/div><\/div><div class=\"pad\"><div class=\"category-summary\" id=\"categorySummary\"><\/div><div class=\"tablewrap\"><table><thead><tr><th>排名<\/th><th>投资方向<\/th><th>市场规模<\/th><th>富国规模<\/th><th>富国排名<\/th><th>市场净流入<\/th><th>富国净流入<\/th><th>净流入 TOP1<\/th><th>富国规模市占率<\/th><th>富国净流入市占率<\/th><\/tr><\/thead><tbody id=\"categoryBody\"><\/tbody><\/table><\/div><\/div><\/section>\n<section class=\"panel\" id=\"peers\"><div class=\"panel-head\"><div><h2>富国 ETF 与竞品<\/h2><p>全市场净流入、净流出金额 TOP5 方向<\/p><\/div><div class=\"tabs\" id=\"peerTabs\"><button class=\"active\" data-kind=\"净流入\">净流入方向<\/button><button data-kind=\"净流出\">净流出方向<\/button><\/div><\/div><div class=\"pad\"><div class=\"focus-grid\" id=\"focusGrid\"><\/div><\/div><\/section>\n<section class=\"panel\" id=\"newfunds\"><div class=\"panel-head\"><div><h2>新发基金<\/h2><p>统计区间内新成立或新上市 ETF<\/p><\/div><\/div><div class=\"tablewrap\"><table><thead><tr><th>基金代码<\/th><th>ETF 简称<\/th><th>发行规模<\/th><th>认购户数<\/th><th>基金管理人<\/th><th>成立日期<\/th><th>上市日期<\/th><th>跟踪指数<\/th><th>指数类型<\/th><th>认购天数<\/th><\/tr><\/thead><tbody id=\"newBody\"><\/tbody><\/table><\/div><\/section><\/main>\n\n\n\n\n\n\n<style id=\"period-template-style\">\n.period-switcher{max-width:1760px;margin:14px auto 0;padding:0 22px 0 182px;display:flex;align-items:center;gap:14px;position:relative;z-index:2}\n.period-switcher-label{flex:none;color:#53657a;font-size:12px;font-weight:700}\n.period-options{display:inline-flex;flex-wrap:wrap;gap:4px;padding:4px;border:1px solid #dce5ed;border-radius:10px;background:#fff;box-shadow:0 4px 14px rgba(15,42,70,.06)}\n.period-options button{border:0;border-radius:7px;background:transparent;color:#52657a;padding:8px 15px;font:700 12px \"Microsoft YaHei\",\"PingFang SC\",sans-serif;cursor:pointer;transition:background .18s,color .18s}\n.period-options button:hover{background:#edf3f8;color:#0a2f56}.period-options button[aria-pressed=\"true\"]{background:#0a2f56;color:#fff;box-shadow:0 2px 7px rgba(10,47,86,.18)}\n.period-template{margin-top:22px}.period-template-intro{padding:20px 24px;border:1px solid #e1e8ee;border-radius:12px;background:#fff}.period-template-intro h2{margin:0 0 6px;color:#172b42;font-size:20px}.period-template-intro p{margin:0;color:#67798b;font-size:12px}\n.period-template-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:16px}.period-template-card{min-height:156px;padding:19px 22px;border:1px solid #e1e8ee;border-radius:12px;background:#fff;box-shadow:0 6px 18px rgba(15,42,70,.04)}.period-template-card h3{margin:0 0 15px;color:#193851;font-size:16px}.period-template-card p{margin:12px 0 0;color:#7b8a99;font-size:12px}.period-template-lines{display:grid;gap:9px}.period-template-lines i{display:block;height:10px;border-radius:4px;background:linear-gradient(90deg,#edf2f6,#f7f9fb)}.period-template-lines i:nth-child(1){width:88%}.period-template-lines i:nth-child(2){width:72%}.period-template-lines i:nth-child(3){width:54%}\nbody>.wrap{margin-top:20px}body.period-is-empty main.wrap>section.panel{display:none!important}body.period-is-empty #periodTemplate{display:block!important}body:not(.period-is-empty) #periodTemplate{display:none!important}body.period-is-empty .dashboard-nav{display:none!important}\n@media(min-width:1200px){body.period-is-empty .period-switcher{max-width:1300px;padding-left:22px}body.period-is-empty main.wrap{max-width:1300px;margin-left:auto;margin-right:auto}}\n@media(max-width:900px){.period-switcher{padding:0 12px;margin-top:12px}}@media(max-width:640px){.period-switcher{align-items:flex-start;flex-direction:column;gap:7px}.period-options{width:100%;display:grid;grid-template-columns:repeat(5,1fr)}.period-options button{padding:8px 2px;font-size:11px}.period-template-grid{grid-template-columns:1fr}.period-template-intro,.period-template-card{padding:17px}}\n<\/style>\n\n\n\n\n<style id=\"newfunds-analysis-style\">\n#newfunds .panel-head{align-items:flex-end}.newfund-view-tabs{display:flex;gap:6px;padding:4px;background:#eef3f7;border-radius:8px}.newfund-view-tabs button{border:0;background:transparent;color:#52677c;padding:7px 14px;border-radius:6px;font:600 12px \"Microsoft YaHei\",sans-serif;cursor:pointer}.newfund-view-tabs button.active{background:#fff;color:#173b63;box-shadow:0 1px 4px rgba(24,57,91,.12)}.newfund-analysis{padding:18px}.newfund-scope{margin:-4px 0 14px;color:#708296;font-size:12px}.newfund-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:16px}.newfund-kpi{padding:15px 16px;border:1px solid #dbe4ec;border-radius:10px;background:#fbfcfd}.newfund-kpi small{display:block;color:#6f8193;font-size:12px;margin-bottom:7px}.newfund-kpi strong{color:#163a60;font-size:23px;line-height:1}.newfund-kpi span{margin-left:4px;color:#718296;font-size:11px}.newfund-rank-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-bottom:16px}.newfund-rank-card,.newfund-growth{border:1px solid #dbe4ec;border-radius:10px;background:#fff;overflow:hidden}.newfund-rank-card h3,.newfund-growth-head h3{margin:0;color:#243f5c;font-size:14px}.newfund-rank-card>h3{padding:14px 15px 10px}.newfund-rank-list{padding:0 15px 13px}.newfund-rank-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;padding:8px 0;border-top:1px solid #edf1f4}.newfund-rank-row:first-child{border-top:0}.newfund-rank-label{min-width:0}.newfund-rank-label b{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#334c65;font-size:12px}.newfund-rank-track{display:block;height:4px;margin-top:5px;border-radius:3px;background:#edf2f6;overflow:hidden}.newfund-rank-track i{display:block;height:100%;border-radius:3px;background:#5f88b3}.newfund-rank-value{text-align:right;color:#4d647a;font-size:11px;white-space:nowrap}.newfund-rank-value strong{display:block;color:#183f68;font-size:13px}.newfund-growth-head{display:flex;align-items:center;justify-content:space-between;padding:14px 15px 10px}.newfund-growth-head p{margin:0;color:#77899a;font-size:11px}.newfund-growth .tablewrap{border:0;border-radius:0}.newfund-growth table th{top:0}.newfund-growth .positive{color:#c44b45;font-weight:700}.newfund-empty{padding:34px 18px;text-align:center;color:#7a8997;background:#fafcfd;border:1px dashed #d6e0e8;border-radius:10px}#newfunds>.footnote{margin:0;padding:0 18px 18px}@media(max-width:900px){.newfund-kpis{grid-template-columns:repeat(2,1fr)}.newfund-rank-grid{grid-template-columns:1fr}}@media(max-width:560px){#newfunds .panel-head{align-items:flex-start}.newfund-view-tabs{margin-top:10px}.newfund-analysis{padding:13px}.newfund-kpis{grid-template-columns:1fr 1fr;gap:8px}.newfund-kpi{padding:12px}.newfund-kpi strong{font-size:19px}}\n<\/style>\n\n<style id=\"newfunds-analysis-v2-style\">\n.newfund-summary-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px}.newfund-summary-card{border:1px solid #dbe4ec;border-radius:10px;background:#fff;overflow:hidden}.newfund-summary-card h3{margin:0;padding:14px 15px 10px;color:#243f5c;font-size:14px}.newfund-summary-card .tablewrap,.newfund-full-table .tablewrap{border:0;border-radius:0}.newfund-full-table{margin-bottom:16px;border:1px solid #dbe4ec;border-radius:10px;background:#fff;overflow:hidden}.newfund-full-table-head{display:flex;align-items:flex-end;justify-content:space-between;padding:14px 15px 10px}.newfund-full-table-head h3{margin:0;color:#243f5c;font-size:14px}.newfund-full-table-head p{margin:3px 0 0;color:#77899a;font-size:11px}.newfund-full-table-head span{color:#607489;font-size:12px}.newfund-scroll{max-height:500px;overflow:auto}.newfund-scroll th{top:0}.newfund-delta-up{color:#c44b45;font-weight:700}.newfund-delta-down{color:#16806b}.newfund-code{color:#7a8a99;font-size:11px}.newfund-product-name{display:block;color:#2e4964;font-weight:700}.newfund-index-products{max-width:340px;color:#64778a;font-size:11px;line-height:1.55}.newfund-view-note{color:#738598;font-size:11px}@media(max-width:900px){.newfund-summary-grid{grid-template-columns:1fr}}\n<\/style>\n\n\n<style id=\"comfortable-readability-v2\">\n/* Reading sizes apply to future data updates through the latest template. */\n:root{--muted:#56697c}\n#conclusions .upgrade-insights button{font-size:15px!important;line-height:1.65!important}\n#conclusions .upgrade-insights li{padding-top:11px!important;padding-bottom:11px!important;line-height:1.65!important}\n#conclusions .upgrade-insight-number{font-size:15px!important;line-height:1.65!important}\n#conclusions .upgrade-insight-number>span{color:#56697c!important;font-size:13px!important}\n#conclusions .upgrade-conclusion-note{font-size:13px!important;line-height:1.75!important;color:#56697c!important}\n#conclusions .upgrade-share-absolute{font-size:16px!important;min-width:68px}\n#conclusions .upgrade-share-metrics .upgrade-insight-number{font-size:14px!important;min-width:86px}\n#conclusions .flow-mainline h4{font-size:14px!important;margin-bottom:7px}\n#conclusions .tag{font-size:13px!important}\n.upgrade-market-brief p,.upgrade-calm{font-size:14px!important;line-height:1.75!important}\n.market-flow-hero>span{font-size:14px!important}\n.period-options button,.tabs button,.market-explorer-filters button,.peer-quick-filters button,.newfund-view-tabs button{font-size:13px!important;min-height:40px}\n.period-switcher-label{font-size:13px!important}\n.reading-table th,.peer-table th,#directionRankingBoard .upgrade-direction-table thead th,#newfunds th{font-size:13px!important;line-height:1.65!important;padding-top:12px!important;padding-bottom:12px!important}\n.reading-table td,.peer-table td,#newfunds td{font-size:14px!important;line-height:1.7!important;padding-top:12px!important;padding-bottom:12px!important}\n#directionRankingBoard .upgrade-direction-table tbody>tr:not(.upgrade-direction-detailrow)>td{font-size:14px!important;line-height:1.65!important;padding-top:13px!important;padding-bottom:13px!important;letter-spacing:0!important}\n#directionRankingBoard .upgrade-direction-table .upgrade-direction-category{font-size:12px!important;line-height:1.6!important;color:#56697c!important}\n#directionRankingBoard .upgrade-direction-table .upgrade-direction-toggle{font-size:13px!important;min-height:36px;padding:5px 7px}\n#directionRankingBoard .upgrade-direction-table .rank-badge{font-size:12px!important}\n#directionRankingBoard .upgrade-direction-table .upgrade-direction-top3 .direction-top3-item span,#directionRankingBoard .upgrade-direction-table .upgrade-direction-top3 .direction-top3-item b{font-size:12px!important;line-height:1.6!important}\n#directionRankingBoard .upgrade-direction-table .upgrade-direction-top3 .direction-top3-item span{color:#425a6f!important}\n.upgrade-direction-details h4,.upgrade-direction-details .fuguo-product-item span,.upgrade-direction-details .fuguo-product-item b{font-size:14px!important;line-height:1.65!important}\n.upgrade-direction-scales small,.upgrade-direction-help{font-size:13px!important;color:#56697c!important}\n.upgrade-direction-scales b{font-size:16px!important}\n.direction-signal-card h4,.direction-signal-card li,.direction-signal-card li b{font-size:13px!important;line-height:1.65!important}\n.peer-table tbody td,.peer-table td.frozen-first,.peer-table td.frozen-second,.peer-catalog td,.peer-catalog .reading-table td,.peer-drawer .peer-table td{font-size:14px!important}\n.peer-table thead th,.peer-table th.frozen-first,.peer-table th.frozen-second{font-size:13px!important}\n.peer-catalog .peer-filter-label,.peer-drawer .peer-position-item small,.focus-position-item small{font-size:12px!important;color:#56697c!important}\n.peer-drawer .peer-detail-head h3{font-size:18px!important;line-height:1.6!important}\n.peer-drawer #closePeerDetail{font-size:14px!important;min-height:40px}\n.market-summary-row .market-summary-name,.market-summary-metric b,.market-summary-share b,.market-summary-rank b{font-size:14px!important;line-height:1.65!important}\n.market-summary-head,.market-summary-share em,.market-summary-rank em,.company-flow-products .company-product-item,.newfund-index-products,.newfund-code,.newfund-view-note,.panel-scope-note{font-size:12px!important;line-height:1.7!important}\n.newfund-product-name,.company-flow-name,.peer-catalog a{font-size:14px!important;line-height:1.65!important}\n@media(max-width:640px){\n #conclusions .upgrade-insights li{gap:10px}\n #conclusions .flow-mainline .upgrade-insights button{flex:0 1 42%;min-width:0}\n #conclusions .flow-mainline .upgrade-insight-number{flex:1;text-align:right;white-space:normal}\n #conclusions .flow-mainline .upgrade-insight-number>span{display:block}\n #conclusions .upgrade-share-metrics{gap:2px}\n .period-switcher .period-options{gap:3px}\n .period-switcher .period-options button{font-size:13px!important;padding-left:4px!important;padding-right:4px!important}\n #directionRankingBoard .upgrade-direction-table .upgrade-direction-top3 .direction-top3-item span,#directionRankingBoard .upgrade-direction-table .upgrade-direction-top3 .direction-top3-item b{font-size:13px!important}\n .direction-signal-card li{gap:6px}\n}\n<\/style>\n<style id=\"compact-conclusion-cards\">\n#overview #conclusions{align-items:start!important;gap:12px!important}\n#overview #conclusions>.conclusion{min-height:0!important;height:auto!important;padding:13px 15px!important;align-self:start}\n#overview #conclusions>.conclusion h3{margin-bottom:8px!important}\n#overview #conclusions .upgrade-insights{gap:0!important}\n#overview #conclusions .upgrade-insights li{padding-top:6px!important;padding-bottom:6px!important}\n#overview #conclusions .flow-mainlines{gap:10px}\n#overview #conclusions .flow-mainline+.flow-mainline{padding-top:8px}\n#overview #conclusions .flow-mainline h4{margin:0 0 4px}\n#overview #conclusions .upgrade-conclusion-note{margin-top:7px!important}\n@media(min-width:1200px){\n #overview #conclusions{grid-template-columns:repeat(3,minmax(0,1fr))!important}\n #overview #conclusions>.upgrade-market-brief{grid-column:1/-1!important}\n #overview #conclusions>.upgrade-followup{grid-column:auto!important}\n #overview #conclusions .upgrade-followup .upgrade-insights li{grid-template-columns:minmax(0,1fr) auto;gap:5px 8px}\n #overview #conclusions .upgrade-followup .upgrade-insight-number{grid-column:1/-1;grid-row:2;text-align:left}\n #overview #conclusions .upgrade-followup .upgrade-peer-action{grid-column:2;grid-row:1}\n #overview #conclusions .upgrade-followup .upgrade-insights button{min-width:0}\n #overview #conclusions .flow-mainline .upgrade-insight-number{white-space:nowrap;text-align:right}\n #overview #conclusions .flow-mainline .upgrade-insight-number>span{display:inline}\n #overview #conclusions .upgrade-share-metrics{gap:8px}\n}\n<\/style>\n\n\n\n<style id=\"table-image-export-style\">\n.table-export-tools{display:flex;justify-content:flex-end;gap:8px;margin:8px 0;color:#56697c;font-size:12px;align-items:center}\n.table-export-tools[hidden]{display:none!important}.table-export-button{border:1px solid #bacdde;background:#fff;color:#1e5386;border-radius:7px;padding:7px 12px;min-height:36px;font:600 13px/1.5 \"Microsoft YaHei\",sans-serif;cursor:pointer}.table-export-button:hover{background:#edf4fb}.table-export-button:disabled{opacity:.65;cursor:wait}.table-export-status{font-size:12px;color:#56697c}.peer-drawer .table-export-tools{padding:0 16px;margin:8px 0}\n.table-export-sheet{background:#fff;color:#172638;padding:18px;font-family:\"Microsoft YaHei\",\"PingFang SC\",sans-serif;box-sizing:content-box}.table-export-sheet h3{margin:0 0 6px;font-size:18px;color:#10334f}.table-export-caption{margin:0 0 14px;font-size:13px;color:#56697c}\n<\/style>\n",render:function(PERIOD_DATA,ACTIVE_PERIOD,D){

// Qualify investment directions shared by A-share and Hong Kong markets.
// Build across all periods so names remain consistent when the period changes.
const domesticDirectionCategories = new Set(['宽基','行业主题','策略']);
const aShareDirectionNames = new Set(), hkDirectionNames = new Set();
for (const period of Object.values(PERIOD_DATA)) {
  for (const [category, rows] of Object.entries(period.categories || {})) {
    for (const row of rows) {
      const name = row[1];
      if (typeof name !== 'string' || !name) continue;
      if (domesticDirectionCategories.has(category)) aShareDirectionNames.add(name);
      if (category === '港股') hkDirectionNames.add(name);
    }
  }
}
const sharedMarketDirectionNames = new Set([...aShareDirectionNames].filter(name => hkDirectionNames.has(name)));
const marketDirectionLabel = (name, category) => {
  if (typeof name !== 'string' || /^(A股|港股)/.test(name)) return name;
  if (sharedMarketDirectionNames.has(name)) {
    if (category === '港股') return '港股' + name;
    if (domesticDirectionCategories.has(category)) return 'A股' + name;
  }
  return name === '科技' && category === '港股' ? '港股科技' : name;
};
for (const period of Object.values(PERIOD_DATA)) {
  // Focus cards lack category fields: resolve using their original direction and flow.
  for (const focus of period.focus || []) {
    const source = [...(period.inflow || []), ...(period.outflow || [])].find(row => row[1] === focus.direction && Math.abs(Number(row[5]) - Number(focus.flow)) < 1e-8 && Math.abs(Number(row[6]) - Number(focus.fg_flow)) < 1e-8);
    if (source) focus.direction = marketDirectionLabel(focus.direction, source[2]);
  }
  for (const key of ['inflow','outflow']) {
    for (const row of period[key] || []) row[1] = marketDirectionLabel(row[1], row[2]);
  }
  for (const row of period.direction_category_rows || []) row[1] = marketDirectionLabel(row[1], row[2]);
  for (const [category, rows] of Object.entries(period.categories || {})) {
    for (const row of rows) row[1] = marketDirectionLabel(row[1], category);
    for (const row of period.category_tables?.[category + 'ETF']?.rows || []) row[1] = marketDirectionLabel(row[1], category);
  }
  for (const key of ['fuguo_direction_products','direction_top_products','direction_metrics','direction_market_breakdown','direction_summary_labels']) {
    const map = period[key]; if (!map) continue;
    for (const original of Object.keys(map)) {
      const separator = original.indexOf('||'); if (separator < 0) continue;
      const category = original.slice(0, separator), name = original.slice(separator + 2);
      const label = marketDirectionLabel(name, category);
      if (label !== name) { map[category + '||' + label] = map[original]; delete map[original]; if(key==='direction_metrics')map[category + '||' + label].name=label; }
    }
  }
}



(()=>{
const esc=v=>String(v??'-').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.ETF_NEWFUND_PERIOD=D;
const finiteNumber=v=>typeof v==='number'&&Number.isFinite(v);
const roundedValue=(v,d=1)=>{const rounded=Number(v.toFixed(d));return Object.is(rounded,-0)?0:rounded};
const fmt=(v,d=1)=>finiteNumber(v)?roundedValue(v,d).toLocaleString('zh-CN',{minimumFractionDigits:d,maximumFractionDigits:d}):(v===null||v===undefined||v===''||typeof v==='number'?'-':esc(v));
const pct=v=>finiteNumber(v)?fmt(v*100,1)+'%':fmt(v);
const signed=v=>finiteNumber(v)?(roundedValue(v,1)>0?'+':'')+fmt(v,1):fmt(v);
const flowProduct=v=>String(v??'-').replace(/[（(]([+-]?\d+(?:\.\d+)?)[）)]\s*$/,(_,n)=>`（${Number(n).toFixed(1)}）`);
const short=v=>String(v??'-').replace(/基金管理股份有限公司|基金管理有限责任公司|基金管理有限公司|基金有限公司|资产管理有限公司|基金管理|股份有限公司|有限责任公司|有限公司|基金$/g,'');
const numeric=rows=>rows.filter(r=>typeof r[5]==='number');
const inflow=[...numeric(D.inflow)].sort((a,b)=>b[5]-a[5]);
const outflow=[...numeric(D.outflow)].sort((a,b)=>a[5]-b[5]);
const companyTop=[...D.companies].sort((a,b)=>(b[6]||0)-(a[6]||0)).slice(0,20);
const dataEndDate=String(D.range).split('至').pop().trim();document.querySelector('#date').textContent=D.range;
document.querySelector('.brand').innerHTML='<i></i>ETF数据看板';
document.querySelector('.hero h1').innerHTML='ETF近一周变化<span class="scope-note">非货非债</span>';
document.querySelector('#overview .panel-head h2').textContent='结论';
document.querySelector('#peers .panel-head h2').textContent='竞品分析';
const nav=document.querySelector('.nav'),categoryNav=nav.querySelector('a[href="#categories"]');if(categoryNav)categoryNav.remove();const navOrder=[['#overview','结论'],['#direction-ranking','投资方向'],['#fuguo-zone','富国ETF资金榜'],['#competition','竞争格局'],['#peers','竞品分析'],['#newfunds','新发基金']];navOrder.forEach(([href,label])=>{const a=nav.querySelector(`a[href="${href}"]`);if(a){a.textContent=label;nav.appendChild(a)}});
const directionPanel=document.querySelector('#direction-ranking'),categoryPanel=document.querySelector('#categories');directionPanel.after(categoryPanel);
directionPanel.querySelector('.panel-head h2').textContent='投资方向';
const mainIn=inflow.slice(0,5),mainOut=outflow.slice(0,5),fg=D.companies.find(x=>String(x[1]).includes('富国'));
const directionNames=rows=>[...new Set(rows.map(x=>String(x[1])))].map(esc).join('、')||'本区间暂无';
const allChanges=Object.values(D.categories).flat().map(row=>{const m=String(row[8]??'').match(/([+-]?\d+(?:\.\d+)?)\s*BP/i);return m?{name:String(row[1]),scale:Number(row[3]),change:Number(m[1])}:null}).filter(Boolean);const goldBlock=D.focus?.find(x=>x.direction==='黄金'),goldOwn=goldBlock?.peer_rows?.find(r=>String(r['基金公司']).includes('富国'));if(Number.isFinite(Number(D.gold_summary?.bp)))allChanges.push({name:'黄金',scale:Number(goldOwn?.['规模']),change:Number(D.gold_summary.bp)});
const changeByName=new Map;allChanges.filter(x=>Number.isFinite(x.scale)&&x.scale>=10).forEach(x=>{const old=changeByName.get(x.name);if(!old||Math.abs(x.change)>Math.abs(old.change))changeByName.set(x.name,x)});const significant=[...changeByName.values()],stronger=significant.filter(x=>x.change>0).sort((a,b)=>b.change-a.change).slice(0,5).map(x=>x.name),weaker=significant.filter(x=>x.change<0).sort((a,b)=>a.change-b.change).slice(0,5).map(x=>x.name);
const competitive=[stronger.length?`富国规模市占率变化提高<b>${stronger.map(esc).join('、')}</b>`:'',weaker.length?`规模份额减少<b>${weaker.map(esc).join('、')}</b>`:''].filter(Boolean).join('，');
document.querySelector('#heroConclusion').innerHTML='';
const shareText=String(D.types[0][6]??'-'),shareMatch=shareText.match(/^([^（]+)(?:（([^）]+)）)?$/),marketTotalScale=D.companies.reduce((sum,row)=>sum+(Number(row[6])||0),0),fuguoTotalScale=Number(fg?.[6])||0;
const typeName=c=>c==='港股'?'跨境-港股':c==='非港股'?'跨境-非港股':c;
const typeRec=c=>D.types.find(r=>r[0]===typeName(c));
const overviewTypeRows=D.types.filter(x=>!['全市场（非货非债）','债券'].includes(x[0])),totalMarketFlow=Number(D.types[0]?.[3])||0,typeFlowText=x=>`${esc(String(x[0]).replace('跨境-',''))}（${signed(Number(x[3])||0)}亿）`,mainTypeIn=[...overviewTypeRows].filter(x=>Number(x[3])>0).sort((a,b)=>Number(b[3])-Number(a[3])).slice(0,3),mainTypeOut=[...overviewTypeRows].filter(x=>Number(x[3])<0).sort((a,b)=>Number(a[3])-Number(b[3])).slice(0,3),marketOverviewText=`${mainTypeIn.length?`净流入主要来自<b>${mainTypeIn.map(typeFlowText).join('、')}</b>`:'本期暂无明显净流入大类'}；${mainTypeOut.length?`净流出主要集中在<b>${mainTypeOut.map(typeFlowText).join('、')}</b>`:'各大类均未出现明显净流出'}。`;
document.querySelector('#conclusions').innerHTML=`<article class="conclusion market-overview"><h3><span class="tag market">ETF市场概况</span></h3><div class="market-flow-hero"><span>全市场近一周${totalMarketFlow>=0?'净流入':'净流出'}</span><strong class="${totalMarketFlow>=0?'up':'down'}">${signed(totalMarketFlow)}亿</strong></div><p>${marketOverviewText}</p></article><article class="conclusion"><h3><span class="tag up">市场资金主线</span></h3><p>主要流向 <b>${directionNames(mainIn)}</b></p><p>主要流出 <b>${directionNames(mainOut)}</b></p></article><article class="conclusion"><h3><span class="tag down">富国规模市占率变化</span></h3><p>${stronger.length?`提高 <b>${stronger.map(esc).join('、')}</b>`:'暂无显著提高方向'}</p><p>${weaker.length?`下降 <b>${weaker.map(esc).join('、')}</b>`:'暂无显著下降方向'}</p></article>`;
const flowContribution=(own,market)=>Math.abs(Number(market)||0)<.1?'分母较小':pct(Number(own)/Number(market));
const ratio=v=>typeof v==='number'?pct(v):esc(v??'-');
const cleanFuguoProduct=v=>{const text=String(v??'-');return text==='-'?text:text.replace(/富国$/,'')};
const directionProductList=(category,direction,fallback)=>{const items=D.fuguo_direction_products?.[`${category}||${direction}`]||[];if(!items.length)return `<span>${esc(fallback??'-')}</span>`;return `<div class="fuguo-product-list">${items.slice(0,3).map(x=>`<div class="fuguo-product-item"><span>${esc(x[0])} ${fmt(x[1],1)}</span></div>`).join('')}</div>`};
const companyShortNames=[...new Set(D.companies.map(x=>short(x[1])).filter(x=>x&&x!=='-'))].sort((a,b)=>b.length-a.length),productManagerName=name=>{const text=String(name??'-');return companyShortNames.find(company=>text.endsWith(company))||text};
const directionLeaderList=(category,direction,fallback,kind)=>{const items=D.direction_top_products?.[`${category}||${direction}`]||[];if(!items.length)return `<span>${esc(fallback??'-')}</span>`;return `<div class="direction-top3-list">${items.slice(0,3).map(x=>`<div class="direction-top3-item"><span title="${esc(x[0])}">${esc(x[0])}</span><b>${signed(x[1])}</b></div>`).join('')}</div>`};
const directionBoard=(title,rows,kind)=>{if(!rows.length)return `<div class="empty">本区间暂无${kind}方向</div>`;const displayLimit=directionExpanded?10:5,top=rows.slice(0,displayLimit),marketScaleMax=Math.max(...top.map(x=>Math.abs(Number(x[3])||0)),1),fgScaleMax=Math.max(...top.map(x=>Math.abs(Number(x[4])||0)),1),marketFlowMax=Math.max(...top.map(x=>Math.abs(Number(x[5])||0)),1),fgFlowMax=Math.max(...top.map(x=>Math.abs(Number(x[6])||0)),1),canExpand=rows.length>5;return `<section class="direction-board"><div class="direction-board-head"><h3>${title}</h3><div class="direction-board-meta"><span>金额单位：亿</span>${canExpand?`<button type="button" class="direction-expand" data-direction-expand>${directionExpanded?'收起至前5':'展开至前10'}</button>`:''}</div></div><div class="tablewrap"><table class="direction-detail-table"><colgroup><col style="width:5%"><col style="width:11%"><col style="width:9%"><col style="width:8%"><col style="width:9%"><col style="width:8%"><col style="width:9%"><col style="width:11%"><col style="width:15%"><col style="width:15%"></colgroup><thead><tr><th>排名</th><th>投资方向</th><th title="该投资方向全市场ETF最新规模">全市场<br>规模</th><th title="富国在该投资方向的ETF最新规模">富国<br>规模</th><th title="近一周全市场ETF净申购金额">全市场<br>净流入</th><th title="近一周富国ETF净申购金额">富国<br>净流入</th><th title="富国规模占该方向全市场规模的比例">富国规模<br>市占率</th><th title="富国净流量÷市场净流量；净额相抵时可超过100%，绝对分母小于0.1亿元时不显示比值">富国<br>净流量贡献比</th><th>${kind} TOP3</th><th>富国相关ETF</th></tr></thead><tbody>${top.map((x,i)=>{const marketScale=Number(x[3])||0,fgScale=Number(x[4])||0,marketFlow=Number(x[5])||0,fgFlow=Number(x[6])||0,hasFuguo=String(x[9]??'-').trim()!=='-',categoryNote=currentDirectionCategory==='全部'?`<small>${esc(x[2]??'-')}</small>`:'';return `<tr data-direction-name="${esc(x[1])}"><td><span class="rank-badge ${i<3?'top':''}">${i+1}</span></td><td class="direction-name">${esc(x[1])}${categoryNote}</td><td class="data-cell" style="--w:${Math.abs(marketScale)/marketScaleMax*100}%">${fmt(marketScale,1)}</td><td class="data-cell" style="--w:${Math.abs(fgScale)/fgScaleMax*100}%">${hasFuguo?fmt(fgScale,1):'-'}</td><td class="data-cell ${marketFlow<0?'neg down':marketFlow>0?'up':''}" style="--w:${Math.abs(marketFlow)/marketFlowMax*100}%">${signed(x[5])}</td><td class="data-cell ${fgFlow<0?'neg down':fgFlow>0?'up':''}" style="--w:${Math.abs(fgFlow)/fgFlowMax*100}%">${hasFuguo?signed(x[6]):'-'}</td><td>${hasFuguo?ratio(x[10]):'-'}</td><td>${hasFuguo?flowContribution(x[6],x[5]):'-'}</td><td class="leader-cell">${directionLeaderList(x[2],x[1],x[7],kind)}</td><td class="fuguo-product-cell">${directionProductList(x[2],x[1],x[9])}</td></tr>`}).join('')}</tbody></table></div></section>`};
const directionRankTabs=document.querySelector('#directionRankTabs'),directionRankingBoard=document.querySelector('#directionRankingBoard'),directionFilter=document.createElement('div'),directionSignals=document.createElement('div'),directionCategoryMap={'全部':null,'宽基':'宽基','行业主题':'行业主题','港股':'港股','非港股':'非港股','策略':'策略','商品':'商品'};let currentDirectionKind='in',currentDirectionCategory='全部',directionExpanded=false;directionFilter.className='market-explorer-filters';directionSignals.className='direction-signal-grid';directionFilter.innerHTML=Object.keys(directionCategoryMap).map((name,i)=>`<button type="button" class="${i?'':'active'}" data-direction-category="${name}">${name}</button>`).join('');directionRankingBoard.before(directionFilter,directionSignals);const categoryFilteredRows=(rows,category)=>{const target=directionCategoryMap[category];if(!target)return rows;const source=D.direction_category_rows||[...inflow,...outflow];return source.filter(x=>String(x[2])===target&&(rows===inflow?x[5]>0:rows===outflow?x[5]<0:x[5]!==0))},signalCard=(title,rows,value,format=signed)=>`<article class="direction-signal-card"><h4>${title}</h4><ol>${rows.slice(0,3).map(x=>`<li><span>${esc(x[1])}</span><b>${format(value(x))}</b></li>`).join('')||'<li><span>暂无数据</span></li>'}</ol></article>`,renderDirectionSignals=()=>{const inRows=[...categoryFilteredRows(inflow,currentDirectionCategory)].sort((a,b)=>(Number(b[5])||0)-(Number(a[5])||0)),outRows=[...categoryFilteredRows(outflow,currentDirectionCategory)].sort((a,b)=>(Number(a[5])||0)-(Number(b[5])||0)),fgAll=[...categoryFilteredRows([...inflow,...outflow],currentDirectionCategory)].filter(x=>String(x[9]??'-')!=='-'),fgInRows=[...fgAll].filter(x=>(Number(x[6])||0)>0).sort((a,b)=>(Number(b[6])||0)-(Number(a[6])||0)),fgOutRows=[...fgAll].filter(x=>(Number(x[6])||0)<0).sort((a,b)=>(Number(a[6])||0)-(Number(b[6])||0));directionSignals.innerHTML=signalCard('市场净流入',inRows,x=>x[5])+signalCard('市场净流出',outRows,x=>x[5])+signalCard('富国净流入',fgInRows,x=>x[6])+signalCard('富国净流出',fgOutRows,x=>x[6])};const renderDirectionRanking=kind=>{currentDirectionKind=kind;const isIn=kind==='in',rows=[...categoryFilteredRows(isIn?inflow:outflow,currentDirectionCategory)].sort((a,b)=>isIn?(Number(b[5])||0)-(Number(a[5])||0):(Number(a[5])||0)-(Number(b[5])||0));directionRankingBoard.innerHTML=directionBoard(`${currentDirectionCategory==='全部'?'':currentDirectionCategory+' · '}${isIn?'净流入方向':'净流出方向'}`,rows,isIn?'净流入':'净流出');renderDirectionSignals();directionRankTabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.kind===kind))};renderDirectionRanking('in');directionRankTabs.onclick=e=>{if(e.target.dataset.kind){directionExpanded=false;renderDirectionRanking(e.target.dataset.kind)}};directionRankingBoard.onclick=e=>{if(!e.target.closest('[data-direction-expand]'))return;directionExpanded=!directionExpanded;renderDirectionRanking(currentDirectionKind)};
const shareParts=value=>{const text=String(value??'-'),m=text.match(/^([^（]+)(?:（([+-]?\d+(?:\.\d+)?)\s*BP）)?$/i);return {share:m?.[1]??text,bp:m?.[2]===undefined?null:Number(m[2])}};
directionSignals.onclick=e=>{const item=e.target.closest('li');if(!item||!item.querySelector('b'))return;const name=item.querySelector('span')?.textContent?.trim(),card=[...directionSignals.children].indexOf(item.closest('.direction-signal-card')),targetKind=card===1||card===3?'out':'in';renderDirectionRanking(targetKind);requestAnimationFrame(()=>{const target=[...directionRankingBoard.querySelectorAll('[data-direction-name]')].find(row=>row.dataset.directionName===name);if(target){target.classList.add('signal-target');target.scrollIntoView({behavior:'smooth',block:'center'})}})};
const typeRows=D.types.filter(x=>!['全市场（非货非债）','债券'].includes(x[0])),typeValues=typeRows.flatMap(x=>[Number(x[3])||0,Number(x[4])||0]),typePosMax=Math.max(...typeValues.filter(v=>v>0),0),typeNegMax=Math.max(...typeValues.filter(v=>v<0).map(v=>Math.abs(v)),0),typeFlowSpan=Math.max(typePosMax+typeNegMax,1),typeZeroPct=typeNegMax/typeFlowSpan*100,typeBars=document.querySelector('#typeBars');typeBars.innerHTML='<div class="type-dual-legend"><span><i class="market"></i>全市场</span><span><i class="fuguo"></i>富国</span><span>单位：亿</span></div>'+typeRows.map(x=>{const market=Number(x[3])||0,fgFlow=Number(x[4])||0,axis=`--zero:${typeZeroPct}%`;return `<div class="type-dual-row"><div class="type-dual-name">${esc(x[0].replace('跨境-',''))}</div><div class="type-dual-bars"><div class="type-dual-line"><div class="type-dual-track" style="${axis}"><div class="type-dual-fill ${market<0?'neg':''}" style="width:${Math.abs(market)/typeFlowSpan*100}%"></div></div><div class="type-dual-value ${market>=0?'up':'down'}">${signed(market)}</div></div><div class="type-dual-line"><div class="type-dual-track" style="${axis}"><div class="type-dual-fill fuguo ${fgFlow<0?'neg':''}" style="width:${Math.abs(fgFlow)/typeFlowSpan*100}%"></div></div><div class="type-dual-value ${fgFlow>=0?'up':'down'}">${signed(fgFlow)}</div></div></div></div>`}).join('');
const typeCard=typeBars.closest('.chart-card');typeCard.classList.add('overview-type-card');typeCard.querySelector('h3').textContent='ETF资金流向';
const companyTabs=document.querySelector('#companyTabs');companyTabs.innerHTML='<button class="active" data-company-view="scale">规模总览</button><button data-company-view="in">净流入排行</button><button data-company-view="out">净流出排行</button>';
const companyBody=document.querySelector('#companyBody'),companyTable=companyBody.closest('table'),companyTableWrap=companyBody.closest('.tablewrap'),companyChartWrap=document.createElement('div');companyTable.querySelector('th').textContent='规模排名';companyTable.classList.add('company-scale-table');companyTableWrap.classList.add('company-scale-wrap');companyTable.insertAdjacentHTML('afterbegin','<colgroup><col style="width:5%"><col style="width:8%"><col style="width:10%"><col style="width:9%"><col style="width:9%"><col style="width:9%"><col style="width:8%"><col style="width:42%"></colgroup>');companyChartWrap.className='company-chart-wrap hidden';companyTableWrap.after(companyChartWrap);const companyActions=document.createElement('div');companyActions.className='company-table-actions';companyTableWrap.after(companyActions);let companyExpanded=false;
const productList=(company,kind)=>D.company_flow_products?.[short(company)]?.[kind]||[];
const cleanProductName=(name,company)=>{const text=String(name??''),suffix=short(company);return suffix&&text.endsWith(suffix)?text.slice(0,-suffix.length):text};
const productText=(company,kind,limit=3,wrapped=true)=>{const items=productList(company,kind).slice(0,limit),text=items.map(x=>`${esc(cleanProductName(x[0],company))} ${signed(x[1])}亿`).join('；');return items.length?(wrapped?`（${text}）`:text):(wrapped?'（暂无对应ETF）':'暂无对应ETF')};
const productItems=(company,kind)=>{const items=productList(company,kind).slice(0,3);return items.length?items.map(x=>`<div class="company-product-item"><span>${esc(cleanProductName(x[0],company))}</span><b>${signed(x[1])}亿</b></div>`).join(''):'<div class="company-product-item"><span>暂无对应ETF</span></div>'};
const renderCompanies=()=>{const rows=companyExpanded?companyTop:companyTop.slice(0,15),maxScale=Math.max(...companyTop.map(x=>Math.abs(x[6]||0)),1),maxChange=Math.max(...companyTop.map(x=>Math.abs(x[8]||0)),1),maxFlow=Math.max(...companyTop.map(x=>Math.abs(x[9]||0)),1);companyBody.innerHTML=rows.map((x,i)=>`<tr class="${String(x[1]).includes('富国')?'own-row':''}"><td class="rank">${i+1}</td><td class="name">${esc(short(x[1]))}</td><td class="data-cell" style="--w:${Math.abs(x[6]||0)/maxScale*100}%">${fmt(x[6])}</td><td class="data-cell ${(x[8]||0)<0?'neg down':'up'}" style="--w:${Math.abs(x[8]||0)/maxChange*100}%">${signed(x[8])}</td><td class="data-cell ${(x[9]||0)<0?'neg down':'up'}" style="--w:${Math.abs(x[9]||0)/maxFlow*100}%">${signed(x[9])}</td><td>${Math.abs(Number(x[9])||0)<1e-9?'-':esc(x[12]??'-')}</td><td>${esc(x[11]??'-')}</td><td class="name"><div class="company-top3">${productList(x[1],'in').slice(0,3).map(item=>`<span title="${esc(cleanProductName(item[0],x[1]))} ${signed(item[1])}亿">${esc(cleanProductName(item[0],x[1]))} ${signed(item[1])}亿</span>`).join('')||'<span>暂无对应ETF</span>'}</div></td></tr>`).join('');companyActions.innerHTML=`<button type="button">${companyExpanded?'收起后5家':'展开其余5家'}</button>`};renderCompanies();companyActions.onclick=()=>{companyExpanded=!companyExpanded;renderCompanies()};
const renderCompanyFlow=kind=>{const isIn=kind==='in',eligible=[...companyTop].filter(x=>isIn?(Number(x[9])||0)>0:(Number(x[9])||0)<0),rows=eligible.sort((a,b)=>isIn?(Number(b[9])||0)-(Number(a[9])||0):(Number(a[9])||0)-(Number(b[9])||0)).slice(0,10),max=Math.max(...rows.map(x=>Math.abs(Number(x[9])||0)),1);companyChartWrap.innerHTML=rows.length?`<div class="company-flow-chart">${rows.map((x,i)=>{const v=Number(x[9])||0;return `<div class="company-flow-row"><div class="company-flow-rank">${i+1}</div><div class="company-flow-name">${esc(short(x[1]))}</div><div class="company-flow-track"><div class="company-flow-fill ${isIn?'':'out'}" style="width:${Math.abs(v)/max*100}%"></div></div><div class="company-flow-value ${v>=0?'up':'down'}">${signed(v)}亿</div><div class="company-flow-products">${productItems(x[1],isIn?'in':'out')}</div></div>`}).join('')}</div>`:'<div class="empty">暂无对应基金公司</div>'};
const setCompanyView=view=>{const scale=view==='scale';companyTableWrap.classList.toggle('hidden',!scale);companyActions.classList.toggle('hidden',!scale);companyChartWrap.classList.toggle('hidden',scale);if(!scale)renderCompanyFlow(view);companyTabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.companyView===view))};companyTabs.onclick=e=>{if(e.target.dataset.companyView)setCompanyView(e.target.dataset.companyView)};
const catTabs=document.querySelector('#categoryTabs'),catSummary=document.querySelector('#categorySummary'),categoryBody=document.querySelector('#categoryBody'),categoryTable=categoryBody.closest('table'),categoryTableWrap=categoryTable.closest('.tablewrap');catSummary.after(typeCard);
const sourceTables=D.category_tables||{},categoryOverviewDefs=[['宽基ETF','宽基'],['行业主题ETF','行业主题'],['港股ETF','港股'],['非港股ETF','非港股'],['策略ETF','策略'],['商品ETF','商品']].filter(x=>sourceTables[x[0]]),categoryDefs=[['宽基ETF','宽基'],['行业主题ETF','行业主题'],['港股ETF','港股'],['策略ETF','策略']].filter(x=>sourceTables[x[0]]),catNames=['总览',...categoryDefs.map(x=>x[0])];catTabs.innerHTML=catNames.map((x,i)=>`<button class="${i?'':'active'}" data-cat="${esc(x)}">${esc(x)}</button>`).join('');
const categoryScale=(sheet,label)=>{const t=sourceTables[sheet],hs=t.headers||[],isCommodity=sheet==='商品ETF',marketIndex=isCommodity?hs.findIndex(h=>String(h).trim()==='规模'):hs.findIndex(h=>String(h).includes('市场规模')||String(h).includes('指数规模')),fgIndex=isCommodity?marketIndex:hs.findIndex(h=>String(h).includes('富国规模')),companyIndex=hs.findIndex(h=>String(h).includes('基金公司')),market=t.rows.reduce((sum,r)=>sum+(Number(r[marketIndex])||0),0),fg=isCommodity?t.rows.filter(r=>String(r[companyIndex]).includes('富国')).reduce((sum,r)=>sum+(Number(r[fgIndex])||0),0):t.rows.reduce((sum,r)=>sum+(Number(r[fgIndex])||0),0),rank=typeRec(label)?.[5]??'-';return {market,fg,rank}};
const rankParts=value=>{const text=String(value??'-'),m=text.match(/^(\d+)(?:（([^）]+)）)?$/);return {rank:m?.[1]??text,change:m?.[2]??'-'}};
const renderCategoryOverview=()=>{catSummary.innerHTML=categoryOverviewDefs.map(([sheet,label])=>{const s=categoryScale(sheet,label),rec=typeRec(label)||[],share=shareParts(rec[6]),rank=rankParts(s.rank),bpClass=Number(share.bp)>=0?'up':'down',rankClass=String(rank.change).startsWith('+')?'up':String(rank.change).startsWith('-')&&rank.change!=='-'?'down':'';return `<article class="category-overview-card"><div class="category-overview-head"><h3>${esc(label)}ETF</h3></div><div class="category-scale-grid"><div><small>全市场规模</small><strong>${fmt(s.market)}亿</strong></div><div><small>富国规模</small><strong class="fg">${fmt(s.fg)}亿</strong></div></div><div class="category-overview-foot"><div class="category-foot-item"><small>富国市占率</small><b>${esc(share.share)}${Number.isFinite(share.bp)?`<em class="${bpClass}">${share.bp>=0?'+':''}${fmt(share.bp,1)}BP</em>`:''}</b></div><div class="category-foot-item"><small>富国规模排名</small><b>第${esc(rank.rank)}名 <em class="${rankClass}">（${esc(rank.change)}）</em></b></div></div></article>`}).join('')};
const sourceCell=(h,v)=>{if(h==='市占率变化（BP）'){if(!finiteNumber(v))return '—';const rounded=roundedValue(v,1);return '<span class="'+(rounded>0?'up':rounded<0?'down':'')+'">'+signed(v,1)+' BP</span>'}if(v===null||v===undefined||v==='')return '-';if(typeof v==='number'){if(!finiteNumber(v))return '-';if(String(h).includes('增长率'))return signed(v*100)+'%';if(String(h).includes('市占率'))return pct(v);if(String(h).includes('净流入')||String(h).includes('规模变动'))return signed(v);if(String(h).includes('规模'))return fmt(v,1);return Number.isInteger(v)?fmt(v,0):fmt(v,2)}if(h==='基金公司'||h==='基金管理人')return esc(short(v));if(h==='基金上市日期')return esc(String(v).slice(0,10));return esc(v)};
const peerPanel=document.querySelector('#peers'),peerCatalog=document.createElement('section'),peerDetail=document.createElement('section'),peerFocusPad=document.querySelector('#focusGrid').closest('.pad');peerCatalog.className='peer-catalog hidden';peerDetail.className='peer-detail hidden';peerDetail.id='peer-detail';peerCatalog.innerHTML=`<div class="peer-catalog-head"><div><h3>富国ETF竞品库</h3><span>点击产品查看竞品</span></div><div class="peer-catalog-tools"><div class="peer-quick-filters" id="peerSortFilters"><button class="active" data-peer-sort="scale">规模排序</button><button data-peer-sort="inflow">净流入排序</button></div><div class="peer-quick-filters" id="peerCategoryFilters"><button class="active" data-peer-category-filter="all">全部</button>${['宽基','行业主题','港股','非港股','策略','商品'].map(name=>`<button data-peer-category-filter="${name}">${name}</button>`).join('')}</div><input class="peer-search" id="peerCatalogSearch" type="search" placeholder="搜索富国ETF，如：科创50" autocomplete="off" aria-label="搜索富国ETF"></div></div><div class="peer-catalog-scroll"><table><thead><tr><th>富国ETF</th><th>ETF大类</th><th>最新规模（亿）</th><th>近一周净流入（亿）</th><th>规模排名</th><th>查看竞品</th></tr></thead><tbody>${(D.peer_catalog||[]).map(item=>`<tr data-peer-name="${esc(`${item.name} ${item.sheet} ${item.category}`.toLowerCase())}" data-peer-category="${esc(item.category||'其他')}" data-peer-scale="${Number(item.scale)||0}" data-peer-inflow="${Number(item.inflow_week)||0}"><td class="name">${esc(item.name)}</td><td>${esc(item.category||'其他')}</td><td>${fmt(item.scale,1)}</td><td class="${Number(item.inflow_week)>=0?'up':'down'}">${signed(item.inflow_week)}</td><td class="rank">${esc(item.rank)}</td><td><a href="#peer-detail" data-peer-sheet="${encodeURIComponent(item.sheet)}">查看竞品</a></td></tr>`).join('')}<tr class="peer-search-empty hidden" id="peerSearchEmpty"><td colspan="6">未找到匹配的富国ETF</td></tr></tbody></table></div>`;peerPanel.querySelector('.panel-head').insertAdjacentElement('afterend',peerCatalog);peerCatalog.insertAdjacentElement('afterend',peerDetail);
const showPeerDetail=async sheetName=>{try{await window.ETF_LOAD_PEERS(ACTIVE_PERIOD,D)}catch(e){alert('竞品数据加载失败，请稍后重试');return}if(window.ETF_CURRENT_PERIOD!==ACTIVE_PERIOD)return;const detail=(D.peer_catalog_details||{})[sheetName];if(!detail)return;const hs=(detail.headers||[]).filter(h=>h!=='基金代码'),rows=detail.rows||[],scaleMax=Math.max(...rows.map(r=>Math.abs(Number(r['规模'])||0)),1),flowMax=Math.max(...rows.map(r=>Math.abs(Number(r['近1周净流入'])||0)),1),ownIndex=rows.findIndex(r=>String(r['基金公司']).includes('富国')),ownRow=ownIndex>=0?rows[ownIndex]:null,flowOrder=[...rows].sort((a,b)=>(Number(b['近1周净流入'])||0)-(Number(a['近1周净流入'])||0)),flowRank=ownRow?1+flowOrder.filter(r=>(Number(r['近1周净流入'])||0)>(Number(ownRow['近1周净流入'])||0)+1e-9).length:null,shareValue=ownRow?.['市占率'];peerDetail.innerHTML=`<div class="peer-detail-head"><h3 id="peerDrawerTitle">${esc(detail.name)}竞品分析</h3><button type="button" id="closePeerDetail" autofocus>关闭</button></div>${ownRow?`<div class="peer-position"><div class="peer-position-item primary"><small>富国规模排名</small><b>第${ownIndex+1}名</b></div><div class="peer-position-item"><small>近一周净流入排名</small><b>${rows.every(r=>Math.abs(Number(r['近1周净流入'])||0)<1e-9)?'—':'第'+flowRank+'名'}</b></div>${shareValue!==undefined&&shareValue!==null&&shareValue!==''?`<div class="peer-position-item"><small>规模市占率</small><b>${sourceCell('市占率',shareValue)}</b></div>`:''}</div>`:''}<div class="peer-table-wrap"><table class="peer-table"><thead><tr><th class="peer-rank-col">排名</th>${hs.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r,i)=>`<tr class="${String(r['基金公司']).includes('富国')?'own-row':''}"><td class="rank peer-rank-col">${i+1}</td>${hs.map(h=>{const v=r[h],isBar=h==='规模'||h==='近1周净流入',max=h==='规模'?scaleMax:flowMax,bar=isBar?` class="data-cell ${(Number(v)||0)<0?'neg':''}" style="--w:${Math.abs(Number(v)||0)/max*100}%"`:'';return `<td${bar}>${sourceCell(h,v)}</td>`}).join('')}</tr>`).join('')}</tbody></table></div>`;peerDetail.classList.remove('hidden');peerDetail.querySelector('#closePeerDetail').onclick=closePeerDrawer;openPeerDrawer()};peerCatalog.onclick=e=>{const link=e.target.closest('[data-peer-sheet]');if(!link)return;e.preventDefault();showPeerDetail(decodeURIComponent(link.dataset.peerSheet))};
const focusPeerOwnRow=()=>requestAnimationFrame(()=>{const row=peerDetail.querySelector('.own-row'),wrap=peerDetail.querySelector('.peer-table-wrap');if(!row||!wrap)return;row.classList.add('peer-own-target');wrap.scrollTop=Math.max(0,wrap.scrollTop+row.getBoundingClientRect().top-wrap.getBoundingClientRect().top-wrap.clientHeight/2+row.clientHeight/2)});new MutationObserver(focusPeerOwnRow).observe(peerDetail,{childList:true,subtree:true});
window.ETF_OPEN_PEER_DETAIL=showPeerDetail;
const peerSearch=peerCatalog.querySelector('#peerCatalogSearch'),peerSearchEmpty=peerCatalog.querySelector('#peerSearchEmpty'),peerSearchRows=[...peerCatalog.querySelectorAll('tr[data-peer-name]')],peerTableBody=peerSearchEmpty.parentElement,peerSortFilters=peerCatalog.querySelector('#peerSortFilters'),peerCategoryFilters=peerCatalog.querySelector('#peerCategoryFilters');let peerSortMode='scale',peerCategoryMode='all';const applyPeerCatalogView=()=>{const terms=peerSearch.value.trim().toLowerCase().split(/\s+/).filter(Boolean),sortKey=peerSortMode==='inflow'?'peerInflow':'peerScale',sorted=[...peerSearchRows].sort((a,b)=>Number(b.dataset[sortKey])-Number(a.dataset[sortKey]));sorted.forEach(row=>peerTableBody.insertBefore(row,peerSearchEmpty));let matches=0,firstMatch=null;sorted.forEach(row=>{const hit=terms.every(term=>row.dataset.peerName.includes(term))&&(peerCategoryMode==='all'||row.dataset.peerCategory===peerCategoryMode);row.classList.toggle('hidden',!hit);if(hit){matches++;if(!firstMatch)firstMatch=row}});peerSearchEmpty.classList.toggle('hidden',matches>0);if(peerSearch.value.trim()&&firstMatch)firstMatch.scrollIntoView({block:'nearest'})};peerSearch.addEventListener('input',applyPeerCatalogView);peerSortFilters.onclick=e=>{const mode=e.target.dataset.peerSort;if(!mode)return;peerSortMode=mode;peerSortFilters.querySelectorAll('button').forEach(button=>button.classList.toggle('active',button===e.target));applyPeerCatalogView()};peerCategoryFilters.onclick=e=>{const mode=e.target.dataset.peerCategoryFilter;if(!mode)return;peerCategoryMode=mode;peerCategoryFilters.querySelectorAll('button').forEach(button=>button.classList.toggle('active',button===e.target));applyPeerCatalogView()};applyPeerCatalogView();
const renderCategory=name=>{const isOverview=name==='总览';catSummary.classList.toggle('hidden',!isOverview);typeCard.classList.toggle('hidden',!isOverview);categoryTableWrap.classList.toggle('hidden',isOverview);if(isOverview){renderCategoryOverview();return}const t=sourceTables[name],flowIndex=t.headers.findIndex(h=>String(h).includes('净流入')&&!String(h).includes('市占率')&&!String(h).includes('富国')),all=[...t.rows].filter(r=>Number.isFinite(Number(r[flowIndex]))),display=t.headers.map((h,i)=>({h,i})).filter(x=>!(name==='宽基ETF'&&String(x.h).trim()==='指数代码')),flowCols=display.filter(x=>String(x.h).includes('净流入')&&!String(x.h).includes('市占率')).map(x=>x.i);if(name==='商品ETF'){const rows=[...all].sort((a,b)=>(Number(b[flowIndex])||0)-(Number(a[flowIndex])||0)),companyIndex=t.headers.findIndex(h=>String(h).includes('基金公司')),max={};flowCols.forEach(i=>max[i]=Math.max(...rows.map(r=>Math.abs(Number(r[i])||0)),1));categoryTable.innerHTML='<thead><tr>'+display.map(x=>`<th>${esc(x.h)}</th>`).join('')+'</tr></thead><tbody>'+rows.map((r,ri)=>`<tr class="${String(r[companyIndex]).includes('富国')?'own-row':''}">${display.map(x=>{const val=r[x.i],num=Number(val)||0,bar=flowCols.includes(x.i)?` class="data-cell ${num<0?'neg down':num>0?'up':''}" style="--w:${Math.abs(num)/max[x.i]*100}%"`:'';return `<td${bar}>${x.i===0?ri+1:sourceCell(x.h,val)}</td>`}).join('')}</tr>`).join('')+'</tbody>';return}const limit=['宽基ETF','行业主题ETF'].includes(name)?5:3,positive=all.filter(r=>Number(r[flowIndex])>0).sort((a,b)=>Number(b[flowIndex])-Number(a[flowIndex])),negative=all.filter(r=>Number(r[flowIndex])<0).sort((a,b)=>Number(a[flowIndex])-Number(b[flowIndex])),rows=[...positive.slice(0,limit).map((row,i)=>({row,kind:'in',rank:i+1})),...negative.slice(0,limit).map((row,i)=>({row,kind:'out',rank:i+1}))],inCount=rows.filter(x=>x.kind==='in').length,outCount=rows.filter(x=>x.kind==='out').length,max={};flowCols.forEach(i=>max[i]=Math.max(...rows.map(entry=>Math.abs(Number(entry.row[i])||0)),1));const head=`<thead><tr><th rowspan="2">资金方向</th><th rowspan="2">排名</th><th rowspan="2">${esc(display[1].h)}</th><th colspan="2">规模</th><th rowspan="2">${esc(display[4].h)}</th><th colspan="2">净流入</th>${display.slice(7).map(x=>`<th rowspan="2">${esc(x.h)}</th>`).join('')}</tr><tr><th>全市场</th><th>富国</th><th>全市场</th><th>富国</th></tr></thead>`;categoryTable.innerHTML=head+'<tbody>'+rows.map((entry,rowIndex)=>{const r=entry.row,groupCell=rowIndex===0&&inCount?`<td rowspan="${inCount}" class="flow-group-cell in">净流入</td>`:rowIndex===inCount&&outCount?`<td rowspan="${outCount}" class="flow-group-cell out">净流出</td>`:'';return `<tr class="${entry.kind==='in'?'category-in-row':'category-out-row'}">${groupCell}${display.map(x=>{const val=r[x.i],num=Number(val)||0,bar=flowCols.includes(x.i)?` class="data-cell ${num<0?'neg down':num>0?'up':''}" style="--w:${Math.abs(num)/max[x.i]*100}%"`:'';return `<td${bar}>${x.i===0?entry.rank:sourceCell(x.h,val)}</td>`}).join('')}</tr>`}).join('')+'</tbody>'};renderCategory('总览');catTabs.onclick=e=>{const name=e.target.dataset.cat;if(!name)return;catTabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===e.target));renderCategory(name)};
const flattenCategoryHeader=name=>{if(!categoryDefs.some(x=>x[0]===name))return;const t=sourceTables[name],display=t.headers.map((h,i)=>({h,i})).filter(x=>!(name==='宽基ETF'&&String(x.h).trim()==='指数代码')),headerLabel=h=>name==='宽基ETF'&&String(h).includes('申赎TOP3')?'净流入TOP3':h;categoryTable.querySelector('thead').innerHTML=`<tr><th>资金方向</th><th>排名</th><th>${esc(display[1].h)}</th><th>全市场规模</th><th>富国规模</th><th>${esc(display[4].h)}</th><th>全市场净流入</th><th>富国净流入</th>${display.slice(7).map(x=>`<th>${esc(headerLabel(x.h))}</th>`).join('')}</tr>`};catTabs.addEventListener('click',e=>{if(e.target.dataset.cat)flattenCategoryHeader(e.target.dataset.cat)});
const renderCommodityByScale=()=>{const t=sourceTables['商品ETF'],scaleIndex=t.headers.findIndex(h=>String(h).trim()==='规模'),companyIndex=t.headers.findIndex(h=>String(h).includes('基金公司')),display=t.headers.map((h,i)=>({h,i})).filter(x=>!String(x.h).includes('近1周份额增长率')).reduce((cols,x)=>{cols.push(x);if(String(x.h).trim()==='市占率')cols.push({h:'市占率变化BP',i:null,blank:true});return cols},[]),flowCols=display.filter(x=>String(x.h).includes('净流入')).map(x=>x.i),rows=[...t.rows].sort((a,b)=>(Number(b[scaleIndex])||0)-(Number(a[scaleIndex])||0)),max={};flowCols.forEach(i=>max[i]=Math.max(...rows.map(r=>Math.abs(Number(r[i])||0)),1));categoryTable.innerHTML='<thead><tr>'+display.map(x=>`<th>${esc(x.h)}</th>`).join('')+'</tr></thead><tbody>'+rows.map((r,ri)=>`<tr class="${String(r[companyIndex]).includes('富国')?'own-row':''}">${display.map(x=>{if(x.blank)return '<td></td>';const val=r[x.i],num=Number(val)||0,bar=flowCols.includes(x.i)?` class="data-cell ${num<0?'neg down':num>0?'up':''}" style="--w:${Math.abs(num)/max[x.i]*100}%"`:'';return `<td${bar}>${x.i===0?ri+1:sourceCell(x.h,val)}</td>`}).join('')}</tr>`).join('')+'</tbody>'};
catTabs.addEventListener('click',e=>{if(e.target.dataset.cat==='商品ETF')renderCommodityByScale()});
const marketScaleView=document.createElement('div'),marketTotalRow={label:'全市场',market:marketTotalScale,fg:fuguoTotalScale,share:shareParts(D.types[0]?.[6]),rank:rankParts(D.types[0]?.[5]),isTotal:true},marketOverviewRows=[marketTotalRow,...categoryOverviewDefs.map(([sheet,label])=>{const s=categoryScale(sheet,label),rec=typeRec(label)||[],share=shareParts(rec[6]),rank=rankParts(s.rank);return {label,...s,share,rank,isTotal:false}})],marketScaleMax=Math.max(...marketOverviewRows.map(x=>x.market),1),fgScaleMax=Math.max(...marketOverviewRows.map(x=>x.fg),1);marketScaleView.className='market-scale-view';marketScaleView.innerHTML=`<div class="market-summary"><div class="market-summary-head"><span>ETF大类</span><span>全市场规模</span><span>富国规模</span><span>富国市占率</span><span>富国排名</span></div>${marketOverviewRows.map(x=>{const bp=Number(x.share.bp),bpClass=bp>=0?'up':'down',rankChange=String(x.rank.change),rankClass=rankChange.startsWith('+')?'up':rankChange.startsWith('-')&&rankChange!=='-'?'down':'';return `<div class="market-summary-row${x.isTotal?' total':''}"><div class="market-summary-name">${esc(x.label)}</div><div class="market-summary-metric"><span class="market-summary-track"><i style="width:${Math.max(2,x.market/marketScaleMax*100)}%"></i></span><b>${fmt(x.market)}亿</b></div><div class="market-summary-metric"><span class="market-summary-track fg"><i style="width:${Math.max(2,x.fg/fgScaleMax*100)}%"></i></span><b>${fmt(x.fg)}亿</b></div><div class="market-summary-share"><b>${esc(x.share.share)}</b>${Number.isFinite(bp)?`<em class="${bpClass}">${bp>=0?'+':''}${fmt(bp,1)}BP</em>`:''}</div><div class="market-summary-rank"><b>第${esc(x.rank.rank)}名</b><em class="${rankClass}">${rankChange==='-'?'持平':esc(rankChange)}</em></div></div>`}).join('')}</div>`;
const marketOverviewPanel=document.createElement('section'),marketOverviewPad=document.createElement('div');marketOverviewPanel.className='panel market-overview-panel';marketOverviewPanel.id='market-overview';marketOverviewPanel.innerHTML='<div class="panel-head"><div><h2>ETF市场概览</h2></div><div class="tabs" id="marketOverviewTabs"><button class="active" data-market-view="scale">规模与市占率</button><button data-market-view="flow">资金流向</button></div></div>';marketOverviewPad.className='pad';marketOverviewPanel.append(marketOverviewPad);document.querySelector('#overview').after(marketOverviewPanel);marketOverviewPad.append(marketScaleView,typeCard);categoryPanel.remove();let currentMarketOverviewView='scale';const renderMarketOverviewView=()=>{marketScaleView.classList.toggle('hidden',currentMarketOverviewView!=='scale');typeCard.classList.toggle('hidden',currentMarketOverviewView!=='flow')};marketOverviewPanel.querySelector('#marketOverviewTabs').onclick=e=>{const view=e.target.dataset.marketView;if(!view)return;currentMarketOverviewView=view;marketOverviewPanel.querySelectorAll('[data-market-view]').forEach(b=>b.classList.toggle('active',b===e.target));renderMarketOverviewView()};directionFilter.onclick=e=>{const category=e.target.dataset.directionCategory;if(!category)return;currentDirectionCategory=category;directionExpanded=false;directionFilter.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===e.target));renderDirectionRanking(currentDirectionKind);renderMarketOverviewView()};renderCategory('总览');renderMarketOverviewView();
const peerTabs=document.querySelector('#peerTabs'),focusGrid=document.querySelector('#focusGrid'),peerDirectionTabs=document.createElement('div');peerTabs.innerHTML='<button class="active" data-peer-view="focus">重点方向</button><button data-peer-view="directory">富国ETF竞品库</button>';peerDirectionTabs.className='tabs peer-direction-tabs';peerDirectionTabs.innerHTML='<button class="active" data-kind="净流入">净流入方向</button><button data-kind="净流出">净流出方向</button>';peerFocusPad.insertBefore(peerDirectionTabs,focusGrid);
const focusSelection={'净流入':0,'净流出':0};let currentFocusKind='净流入';const renderFocus=(kind='净流入',selected=focusSelection[kind]||0)=>{const blocks=D.focus.filter(x=>x.kind===kind);if(!blocks.length){focusGrid.innerHTML='<div class="empty">本区间暂无对应资金方向，可切换“富国ETF竞品库”查看全部竞品。</div>';return}const index=Math.min(Math.max(Number(selected)||0,0),blocks.length-1),b=blocks[index],hs=b.peer_headers||[],rows=b.peer_rows||[],scaleMax=Math.max(...rows.map(r=>Math.abs(Number(r['规模'])||0)),1),flowMax=Math.max(...rows.map(r=>Math.abs(Number(r['近1周净流入'])||0)),1),ownRow=rows.find(r=>String(r['基金公司']).includes('富国')),scaleOrder=[...rows].sort((a,b)=>(Number(b['规模'])||0)-(Number(a['规模'])||0)),flowOrder=[...rows].sort((a,b)=>(Number(b['近1周净流入'])||0)-(Number(a['近1周净流入'])||0)),ownScaleRank=ownRow?scaleOrder.indexOf(ownRow)+1:null,ownFlowRank=ownRow?1+flowOrder.filter(r=>(Number(r['近1周净流入'])||0)>(Number(ownRow['近1周净流入'])||0)+1e-9).length:null,scaleGap=ownRow?Math.max(0,(Number(scaleOrder[0]?.['规模'])||0)-(Number(ownRow['规模'])||0)):null;focusSelection[kind]=index;focusGrid.innerHTML=`<div class="focus-mini-tabs">${blocks.slice(0,5).map((item,i)=>`<button type="button" class="${i===index?'active':''}" data-focus-index="${i}">${esc(item.direction)}</button>`).join('')}</div><article class="focus-card"><div class="focus-head"><h3>${esc(b.direction)}</h3><span class="tag ${b.status==='提升'?'up':b.status==='落后'?'down':'keep'}">${esc(({提升:'资金承接较强',落后:'资金承接较弱',保持:'资金承接接近'})[b.status]||b.status)}</span></div><div class="focus-meta">市场${kind} ${signed(b.flow)}亿 · 富国 ${signed(b.fg_flow)}亿</div>${ownRow?`<div class="focus-position-grid"><div class="focus-position-item primary"><small>富国规模排名</small><b>第${ownScaleRank}名</b></div><div class="focus-position-item"><small>富国净流入排名</small><b>${rows.every(r=>Math.abs(Number(r['近1周净流入'])||0)<1e-9)?'—':'第'+ownFlowRank+'名'}</b></div><div class="focus-position-item"><small>距规模第一</small><b>${fmt(scaleGap,1)}亿</b></div><div class="focus-position-item"><small>富国规模市占率</small><b>${sourceCell('市占率',ownRow['市占率'])}</b></div></div>`:''}<div class="peer-table-wrap"><table class="peer-table"><thead><tr>${hs.map(h=>`<th>${esc(h==='基金代码'?'排名':h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r,ri)=>`<tr class="${String(r['基金公司']).includes('富国')?'own-row':''}">${hs.map(h=>{const v=h==='基金代码'?ri+1:r[h],isBar=h==='规模'||h==='近1周净流入',max=h==='规模'?scaleMax:flowMax,bar=isBar?` class="data-cell ${(Number(v)||0)<0?'neg':''}" style="--w:${Math.abs(Number(v)||0)/max*100}%"`:h==='基金代码'?' class="rank"':'';return `<td${bar}>${h==='基金代码'?v:sourceCell(h,v)}</td>`}).join('')}</tr>`).join('')}</tbody></table></div>${b.peer_total_count>b.peer_display_count?`<p class="peer-note">${esc(b.direction)}共${b.peer_total_count}只ETF，展示至包含富国产品的规模分组（${b.peer_display_count}只）。</p>`:''}</article>`};renderFocus();focusGrid.onclick=e=>{const button=e.target.closest('[data-focus-index]');if(button)renderFocus(currentFocusKind,Number(button.dataset.focusIndex))};peerDirectionTabs.onclick=e=>{if(!e.target.dataset.kind)return;currentFocusKind=e.target.dataset.kind;peerDirectionTabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===e.target));renderFocus(currentFocusKind)};
peerTabs.onclick=e=>{const view=e.target.dataset.peerView;if(!view)return;peerTabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===e.target));const isDirectory=view==='directory';peerFocusPad.classList.toggle('hidden',isDirectory);peerCatalog.classList.toggle('hidden',!isDirectory);if(!isDirectory)peerDetail.classList.add('hidden')};
const metricTips={'市占率':'该ETF规模占对应竞品范围总规模的比例','近1周净流入':'最近一周ETF净申购金额','近1周份额增长率':'最近一周基金份额增长比例','规模':'最新ETF规模'};const normalizeFocusUi=()=>{const tag=focusGrid.querySelector('.focus-head .tag');if(tag){tag.title='资金承接表现：对比富国净流量贡献比与规模市占率。';if(tag.textContent.trim()==='保持'){tag.classList.remove('down');tag.classList.add('keep')}}focusGrid.querySelectorAll('th').forEach(th=>{const key=Object.keys(metricTips).find(k=>th.textContent.includes(k));if(key)th.title=metricTips[key]})};new MutationObserver(normalizeFocusUi).observe(focusGrid,{childList:true,subtree:true});normalizeFocusUi();
const newBody=document.querySelector('#newBody'),newTable=newBody.closest('table'),newScaleMax=Math.max(...D.newfunds.map(x=>Math.abs(Number(x[10])||0)),1),dashboardEndDate=new Date(String(D.range).split('至').pop().trim()),newFundStatus=x=>{const established=x[5]?new Date(String(x[5]).slice(0,10)):null,listed=x[6]?new Date(String(x[6]).slice(0,10)):null;if(!established||established>dashboardEndDate)return ['正在发行','issuing'];if(listed&&listed>dashboardEndDate)return ['即将上市','upcoming'];return ['已成立','established']},newFundDate=v=>v?esc(String(v).slice(0,10)):'-';newTable.querySelector('thead tr').insertAdjacentHTML('beforeend','<th>状态</th>');newTable.querySelector('thead tr').children[2].textContent='最新规模（亿元）';newBody.innerHTML=D.newfunds.length?D.newfunds.map(x=>{const status=newFundStatus(x);return `<tr>${x.slice(0,10).map((v,i)=>{const attrs=i===2?` class="data-cell" style="--w:${Math.abs(Number(x[10])||0)/newScaleMax*100}%"`:i===1?' class="name"':'';return `<td${attrs}>${i===2?fmt(x[10]):i===4?esc(short(v)):i===5||i===6?newFundDate(v):esc(v??'-')}</td>`}).join('')}<td><span class="new-status ${status[1]}">${status[0]}</span></td></tr>`}).join(''):'<tr><td colspan="11" class="empty">统计区间内暂无新发ETF</td></tr>';
const backToTop=document.createElement('button');backToTop.type='button';backToTop.className='back-to-top';backToTop.setAttribute('aria-label','回到顶部');backToTop.title='回到顶部';backToTop.textContent='↑';document.body.appendChild(backToTop);const toggleBackToTop=()=>backToTop.classList.toggle('show',window.scrollY>520);window.addEventListener('scroll',toggleBackToTop,{passive:true});toggleBackToTop();backToTop.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
const marketOverviewTitle=marketOverviewPanel.querySelector('.panel-head h2');marketOverviewTitle.insertAdjacentHTML('afterend','<p class="panel-scope-note">口径：非货非债ETF；规模为最新规模，资金流向为近一周净流入。</p>');
document.querySelectorAll('.market-summary-rank').forEach(item=>{const rankNode=item.querySelector('b'),changeNode=item.querySelector('em'),rankMatch=rankNode?.textContent.match(/第(\d+)名/),changeMatch=changeNode?.textContent.match(/([+-]?\d+)/);if(!rankMatch||!changeNode)return;const change=changeMatch?Number(changeMatch[1]):0;if(change>0){changeNode.textContent=`↑${change}`;changeNode.className='up'}else if(change<0){changeNode.textContent=`↓${Math.abs(change)}`;changeNode.className='down'}else{changeNode.textContent='持平';changeNode.className=''}});
const normalizeCrossBorderLabels=root=>{const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode()){if(node.parentElement?.closest('script,style'))continue;const text=node.nodeValue,trim=text.trim();if(trim==='港股')node.nodeValue=text.replace('港股','跨境-港股');else if(trim==='非港股')node.nodeValue=text.replace('非港股','跨境-非港股');else if(trim==='港股ETF')node.nodeValue=text.replace('港股ETF','跨境-港股ETF');else if(trim==='非港股ETF')node.nodeValue=text.replace('非港股ETF','跨境-非港股ETF');else if(/^港股 · /.test(trim))node.nodeValue=text.replace('港股 · ','跨境-港股 · ');else if(/^非港股 · /.test(trim))node.nodeValue=text.replace('非港股 · ','跨境-非港股 · ');else if(text.includes('港股（')||text.includes('非港股（'))node.nodeValue=text.replaceAll('跨境-','').replaceAll('非港股（','\uE000').replaceAll('港股（','跨境-港股（').replaceAll('\uE000','跨境-非港股（')}};normalizeCrossBorderLabels(document.body);new MutationObserver(records=>{const roots=new Set();for(const r of records)for(const n of r.addedNodes)if(n.nodeType===1&&!n.closest('script,style'))roots.add(n);for(const n of roots)if(![...roots].some(other=>other!==n&&other.contains(n)))normalizeCrossBorderLabels(n)}).observe(document.body,{childList:true,subtree:true});
const normalizeSignalEmpty=()=>directionSignals.querySelectorAll('li').forEach(item=>{if(!item.querySelector('b')&&item.textContent.trim()==='暂无数据'){item.querySelector('span').textContent='无';item.style.listStyle='none'}});normalizeSignalEmpty();new MutationObserver(normalizeSignalEmpty).observe(directionSignals,{childList:true,subtree:true});

// Reading refinements: keep data and the new-fund rendering unchanged.
const peerDrawer=document.createElement('dialog');
peerDrawer.className='peer-drawer';
peerDrawer.setAttribute('aria-labelledby','peerDrawerTitle');
document.body.append(peerDrawer);
peerDrawer.append(peerDetail);
let drawerOpener=null,peerReturnContext=null;
function openPeerDrawer(){
 drawerOpener=document.activeElement;
 peerDetail.classList.remove('hidden');
 if(window.__ETF_PEER_RETURN_CONTEXT){peerDrawer._returnContext=window.__ETF_PEER_RETURN_CONTEXT;window.__ETF_PEER_RETURN_CONTEXT=null}
 document.documentElement.classList.add('peer-drawer-open');
 if(!peerDrawer.open)peerDrawer.showModal();
 decorateTables();
 requestAnimationFrame(()=>{updateFrozenOffsets();focusPeerOwnRow()});
}
function closePeerDrawer(){if(peerDrawer.open)peerDrawer.close()}
peerDrawer.addEventListener('close',()=>{
 peerDetail.classList.add('hidden');
 document.documentElement.classList.remove('peer-drawer-open');
 const context=peerReturnContext||peerDrawer._returnContext;peerReturnContext=null;peerDrawer._returnContext=null;
 if(context){
  const target=document.querySelector('[data-peer-view="'+context.peerView+'"]');
  if(target){
   document.querySelectorAll('#peerTabs [data-peer-view]').forEach(button=>button.classList.toggle('active',button===target));
   const isDirectory=context.peerView==='directory';
   peerFocusPad.classList.toggle('hidden',isDirectory);peerCatalog.classList.toggle('hidden',!isDirectory);
  }
  if(context.opener?.isConnected)context.opener.focus({preventScroll:true});
  window.scrollTo({top:context.scrollY,left:0,behavior:'instant'});
 }else if(drawerOpener?.isConnected)drawerOpener.focus({preventScroll:true});
});
peerDrawer.addEventListener('click',e=>{
 if(e.target!==peerDrawer)return;
 const r=peerDrawer.getBoundingClientRect();
 if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePeerDrawer();
});
const readingTableSelector='.direction-detail-table,.company-scale-table,.peer-catalog table,.peer-table,#newfunds table';
const observedTables=new Set();
const tableSizeObserver=typeof ResizeObserver==='function'?new ResizeObserver(()=>scheduleReadingUpdate()):null;
const readingMeasureCanvas=document.createElement('canvas'),readingMeasureContext=readingMeasureCanvas.getContext('2d');
function fitDirectionProducts(table){
 if(!table.classList.contains('direction-detail-table')||!readingMeasureContext)return;
 const wrap=table.closest('.tablewrap'),available=wrap?.clientWidth;
 if(!available)return;
 const slotWidths=[0,0,0];
 table.querySelectorAll('.direction-top3-list').forEach(list=>{
  [...list.children].forEach((item,i)=>{
   const name=item.querySelector('span');
   if(!name)return;
   readingMeasureContext.font=getComputedStyle(name).font;
   slotWidths[i]=Math.max(slotWidths[i],Math.ceil(readingMeasureContext.measureText(name.textContent).width)+14);
  });
 });
 const productWidth=Math.max(270,slotWidths.reduce((sum,width)=>sum+width,0)+24);
 const minimums=[38,92,72,68,76,76,86,90,productWidth,154];
 const totalMinimum=minimums.reduce((sum,width)=>sum+width,0);
 const extra=Math.max(0,available-totalMinimum);
 const weights=[.02,.08,.04,.04,.04,.04,.05,.05,.5,.14];
 [...table.querySelectorAll('col')].forEach((col,i)=>col.style.setProperty('width',(minimums[i]+extra*weights[i])+'px','important'));
 const minimumWidth=Math.ceil(totalMinimum)+'px';
 if(table.style.minWidth!==minimumWidth)table.style.minWidth=minimumWidth;
 table.style.setProperty('--leader-columns',slotWidths.map(width=>'minmax('+Math.max(width,40)+'px,1fr)').join(' '));
}
function updateFrozenOffsets(){
 document.querySelectorAll(readingTableSelector).forEach(table=>{
  const width=table.tHead?.rows[0]?.cells[0]?.getBoundingClientRect().width;
  if(width>0)table.style.setProperty('--frozen-offset',width+'px');
 });
}
function decorateTables(){
 const activeTables=[...document.querySelectorAll(readingTableSelector)];
 observedTables.forEach(table=>{if(!table.isConnected){tableSizeObserver?.unobserve(table);observedTables.delete(table)}});
 activeTables.forEach(table=>{
  table.classList.add('reading-table');
  if(!observedTables.has(table)){tableSizeObserver?.observe(table);observedTables.add(table)}
  fitDirectionProducts(table);
  const headers=[...(table.tHead?.rows[0]?.cells||[])];
  const numericColumns=headers.map((th,i)=>{
   const label=th.textContent.replace(/\s+/g,'');
   const numeric=/规模|净流入|净流出|市占率|份额增长率|规模变动/.test(label)&&!/排名|TOP|日期|公司/.test(label);
   th.classList.toggle('numeric',numeric);
   return numeric?i:-1;
  }).filter(i=>i>=0);
  const isDirection=table.classList.contains('direction-detail-table');
  const freezeTwo=table.classList.contains('direction-detail-table')||table.classList.contains('company-scale-table')||table.classList.contains('peer-table');
  const mobilePrimary=innerWidth<=760&&freezeTwo?1:-1;
  [...table.rows].forEach(row=>{
   [...row.cells].forEach((cell,i)=>{
    if(row.parentElement.tagName!=='THEAD')cell.classList.toggle('numeric',numericColumns.includes(i));
    cell.classList.toggle('frozen-first',mobilePrimary>=0?i===mobilePrimary:freezeTwo&&i===0);
    cell.classList.toggle('frozen-second',mobilePrimary<0&&freezeTwo&&i===1);
    cell.classList.toggle('group-start',isDirection&&[2,4,6,8].includes(i));
   });
  });
  let visibleIndex=0;
  [...(table.tBodies[0]?.rows||[])].forEach(row=>{
   if(row.classList.contains('hidden'))return;
   row.classList.toggle('row-alt',visibleIndex++%2===1);
  });
  const wrap=table.closest('.tablewrap,.peer-table-wrap,.peer-catalog-scroll');
  if(wrap){
   wrap.tabIndex=0;wrap.setAttribute('role','region');
   const title=table.closest('.peer-detail,.direction-board,.panel')?.querySelector('h3,h2')?.textContent||'ETF数据';
   wrap.setAttribute('aria-label',title+'表格');
  }
 });
 updateFrozenOffsets();
}
const controlSelector='.tabs button,.market-explorer-filters button,.focus-mini-tabs button,.peer-quick-filters button';
function updateControlState(){
 document.querySelectorAll(controlSelector).forEach(button=>{
  button.type='button';button.setAttribute('aria-pressed',String(button.classList.contains('active')));
 });
}
let readingUpdatePending=false;
function scheduleReadingUpdate(){
 if(readingUpdatePending)return;
 readingUpdatePending=true;
 requestAnimationFrame(()=>{readingUpdatePending=false;decorateTables();updateControlState();updateNavigation()});
}
const readingObserver=new MutationObserver(scheduleReadingUpdate);
[directionRankingBoard,companyBody,focusGrid,peerCatalog,peerDetail].forEach(root=>readingObserver.observe(root,{childList:true,subtree:true}));
['click','input'].forEach(event=>document.addEventListener(event,scheduleReadingUpdate));
window.addEventListener('resize',scheduleReadingUpdate,{passive:true});

const navContainer=document.createElement('aside');
navContainer.className='dashboard-nav';
nav.setAttribute('aria-label','看板板块导航');
const marketNav=document.createElement('a');
marketNav.href='#market-overview';marketNav.textContent='ETF市场概览';
nav.querySelector('a[href="#overview"]').after(marketNav);
navContainer.append(nav);
document.querySelector('header').after(navContainer);
const navigationItems=[...nav.querySelectorAll('a')].map(link=>({link,section:document.querySelector(link.getAttribute('href'))})).filter(item=>item.section);
let navigationPending=false;
function updateNavigation(){
 const header=document.querySelector('header'),headerHeight=header.getBoundingClientRect().height;
 document.documentElement.style.setProperty('--header-height',headerHeight+'px');
 const threshold=headerHeight+(window.innerWidth<1200?navContainer.getBoundingClientRect().height:0)+24;
 let active=navigationItems[0];
 navigationItems.forEach(item=>{if(item.section.getBoundingClientRect().top<=threshold)active=item});
 if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-3)active=navigationItems[navigationItems.length-1];
 navigationItems.forEach(item=>{
  item.link.classList.toggle('active',item===active);
  if(item===active)item.link.setAttribute('aria-current','location');else item.link.removeAttribute('aria-current');
 });
}
window.addEventListener('scroll',()=>{
 if(navigationPending)return;
 navigationPending=true;requestAnimationFrame(()=>{navigationPending=false;updateNavigation()});
},{passive:true});
window.addEventListener('hashchange',updateNavigation);
decorateTables();updateControlState();updateNavigation();

})();




(()=>{
  const sections=['overview','market-overview','direction-ranking','fuguo-zone','competition','peers','newfunds'];
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function spark(values){return `<span class="vu-spark" aria-hidden="true">${values.map(v=>`<b style="height:${v}px"></b>`).join('')}</span>`}
  function wrapTables(){
    document.querySelectorAll('.tablewrap').forEach(wrap=>{
      if(wrap.parentElement?.classList.contains('vu-table-shell'))return;
      const shell=document.createElement('div');shell.className='vu-table-shell';wrap.parentNode.insertBefore(shell,wrap);shell.appendChild(wrap);
      const hint=document.createElement('div');hint.className='vu-scroll-hint';hint.textContent='左右滑动查看更多列';shell.appendChild(hint);
      const update=()=>{const overflow=wrap.scrollWidth>wrap.clientWidth+2;shell.classList.toggle('vu-overflow',overflow);shell.classList.toggle('vu-at-end',!overflow||wrap.scrollLeft+wrap.clientWidth>=wrap.scrollWidth-4)};
      wrap.addEventListener('scroll',update,{passive:true});new ResizeObserver(update).observe(wrap);requestAnimationFrame(update);
    });
  }
  function updateNav(){
    const chromeOffset=(document.querySelector('header')?.offsetHeight||0)+(innerWidth<=900?(document.querySelector('.dashboard-nav')?.offsetHeight||0):18)+38;
    // Activate the section as its heading enters the main reading zone. This
    // is intentionally lower than the sticky chrome because wide tables make
    // native anchor positioning settle below the top navigation on phones.
    const offset=Math.max(chromeOffset,innerHeight*.62);
    let current=sections[0];
    for(const id of sections){const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=offset)current=id}
    if(innerHeight+scrollY>=document.documentElement.scrollHeight-8)current=sections.at(-1);
    document.querySelectorAll('.nav a').forEach(a=>{const active=a.getAttribute('href')==='#'+current;if(a.classList.contains('active')!==active)a.classList.toggle('active',active);if(active){if(a.getAttribute('aria-current')!=='location')a.setAttribute('aria-current','location')}else if(a.hasAttribute('aria-current'))a.removeAttribute('aria-current')});
  }
  let scheduled=false;function scheduleNav(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;updateNav();setTimeout(updateNav,90)})}
  function decorateDirectionTables(){
    const headers=[['排名','优先级'],['投资方向','赛道分类'],['全市场','规模'],['富国','规模'],['全市场','近一周净流入'],['富国','近一周净流入'],['富国规模','市占率'],['富国净流入','市占率'],['净流入 TOP3','市场领先产品'],['富国相关ETF','产品与规模']];
    document.querySelectorAll('#direction-ranking .direction-detail-table').forEach(table=>{
      table.classList.add('vu-direction-table');
      [...(table.tHead?.rows?.[0]?.cells||[])].forEach((th,i)=>{if(th.dataset.vuHead)return;const h=headers[i];if(!h)return;th.dataset.vuHead='1';th.innerHTML=`<span class="vu-head-main">${h[0]}</span><small class="vu-head-sub">${h[1]}</small>`});
      table.querySelectorAll('.fuguo-product-item span').forEach(span=>{if(span.dataset.vuSplit)return;const match=span.textContent.trim().match(/^(.*?)(\s+[+-]?\d[\d,.]*)$/);if(!match)return;span.dataset.vuSplit='1';span.textContent=match[1].trim();const b=document.createElement('b');b.textContent=match[2].trim();span.after(b)});
      table.querySelectorAll('tbody td').forEach(td=>{if(td.textContent.trim()==='相反')td.classList.add('vu-opposite')});
    });
  }
  function enhanceLabels(){
    document.querySelectorAll('.company-scale-table tbody tr').forEach(tr=>{if(tr.children[1]?.textContent.trim()==='富国')tr.classList.add('focus')});
  }
  function init(){
    wrapTables();enhanceLabels();updateNav();
    addEventListener('scroll',scheduleNav,{passive:true,capture:true});addEventListener('resize',scheduleNav,{passive:true});
    const nav=document.querySelector('.nav');
    if(nav)new MutationObserver(()=>requestAnimationFrame(updateNav)).observe(nav,{subtree:true,attributes:true,attributeFilter:['class']});
  }
  window.ETF_AFTER_RENDER.push(init);
})();




(()=>{
  const periods=[['day','当日'],['week','近一周'],['month','近一个月'],['quarter','近三个月'],['ytd','今年以来']];
  const hero=document.querySelector('.hero');
  const switcher=document.createElement('div');switcher.className='period-switcher';switcher.setAttribute('role','group');switcher.setAttribute('aria-label','选择统计时间区间');
  switcher.innerHTML='<span class="period-switcher-label">时间区间</span><div class="period-options">'+periods.map(([key,label])=>`<button type="button" data-period="${key}" aria-pressed="${key===ACTIVE_PERIOD}">${label}</button>`).join('')+'</div>';
  hero.after(switcher);
  const updatePeriodStickyTop=()=>{
    const header=document.querySelector('header'),nav=document.querySelector('.dashboard-nav');
    const navHeight=nav&&getComputedStyle(nav).position==='sticky'?nav.getBoundingClientRect().height:0;
    document.documentElement.style.setProperty('--period-sticky-top',((header?.getBoundingClientRect().height||0)+navHeight)+'px');
  };
  const periodResize=new ResizeObserver(updatePeriodStickyTop);
  for(const element of [document.querySelector('header'),document.querySelector('.dashboard-nav')])if(element)periodResize.observe(element);
  window.addEventListener('resize',updatePeriodStickyTop);
  updatePeriodStickyTop();

  if(ACTIVE_PERIOD==='day'){
    const meta=window.ETF_DATA_META.periods.day;
    document.querySelector('#date').textContent='数据日期 '+meta.rangeEnd;
    const caption=document.createElement('span');caption.className='period-day-note';
    caption.textContent='';
    switcher.append(caption);
  }

  switcher.addEventListener('click',event=>{const button=event.target.closest('button[data-period]');if(!button||button.dataset.period===ACTIVE_PERIOD)return;const url=new URL(location.href);url.searchParams.set('period',button.dataset.period);url.hash='';window.ETF_SAVE_PERIOD_POSITION?.(button.dataset.period);window.ETF_SWITCH_PERIOD(button.dataset.period);});
  document.title=`ETF数据看板 · ${D.periodLabel} · ${D.range.split('至').pop().trim()}`;
  document.querySelector('.hero h1').innerHTML=`ETF${D.periodLabel}变化<span class="scope-note">非货非债</span>`;
  const replacements=[['近1周份额增长率',D.periodLabel+'份额增长率'],['近1周净流入',D.periodLabel+'净流入'],['最近一周',D.periodLabel],['近一周',D.periodLabel],['本周','本区间']];
  const replace=s=>replacements.reduce((v,[a,b])=>v.split(a).join(b),s);
  function normalize(root){
    if(root.nodeType===3){if(!root.parentElement?.closest('script,style,.period-switcher')){const s=replace(root.nodeValue);if(s!==root.nodeValue)root.nodeValue=s;}return;}
    if(root.nodeType!==1||root.closest('script,style,.period-switcher'))return;
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode())normalize(node);
    for(const el of [root,...root.querySelectorAll('[title],[aria-label]')])for(const attr of ['title','aria-label'])if(el.hasAttribute(attr)){const v=el.getAttribute(attr),s=replace(v);if(s!==v)el.setAttribute(attr,s);}
  }
  normalize(document.body);
  new MutationObserver(records=>records.forEach(r=>{if(r.type==='childList')r.addedNodes.forEach(normalize);else if(r.type==='characterData')normalize(r.target);})).observe(document.body,{subtree:true,childList:true,characterData:true});
  const marketFlow=D.types[0][3];if(marketFlow===0){document.querySelector('.market-flow-hero span').textContent=`全市场${D.periodLabel}净流入`;document.querySelector('.market-flow-hero strong').className='';}
  if(!D.inflow.length&&!D.outflow.length){document.querySelector('#conclusions .market-overview p').textContent='本区间底稿记录的各大类净流入均为0。';}
  if(!D.focus.length)document.querySelector('#peerTabs [data-peer-view="directory"]')?.click();
})();




(()=>{
  const table=document.querySelector('#newfunds table');
  if(!table)return;
  const remove=[...table.querySelectorAll('thead th')].map((cell,index)=>({label:cell.textContent.trim(),index})).filter(x=>['认购户数','认购天数','状态'].includes(x.label)).map(x=>x.index).sort((a,b)=>b-a);
  for(const row of table.rows){
    if(row.cells.length===1&&row.cells[0].colSpan>1){row.cells[0].colSpan-=remove.length;continue;}
    for(const index of remove)row.cells[index]?.remove();
  }
})();





(()=>{
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pct=v=>Number.isFinite(v)?(v*100).toFixed(2)+'%':'—';
  const bp=v=>Number.isFinite(v)?(Math.abs(v)<.05?'0.0':(v>0?'+':'')+v.toFixed(1))+' BP':'—';
  const pair=window.ETF_PRIMARY_PAIRS[ACTIVE_PERIOD],historyData=window.ETF_CORRECTED_HISTORY;
  const panel=document.querySelector('#market-overview'),tabs=panel.querySelector('#marketOverviewTabs');
  const tab=document.createElement('button');tab.type='button';tab.dataset.marketView='share';tab.textContent='市占率变化';tabs.append(tab);
  const host=document.createElement('section');host.id='marketShareChanges';host.className='share-trends hidden';host.setAttribute('aria-label','富国规模市占率变化');panel.querySelector('.pad').append(host);
  const names=pair.groups.map(group=>group.name);
  function selectedHistory(){
    const indices=historyData.dates.map((date,i)=>({date,i})).filter(item=>item.date>pair.start&&item.date<pair.end);
    return pair.groups.map(group=>({name:group.name,points:[{date:pair.start,value:group.shareStart},...indices.map(({date,i})=>({date,value:historyData.series[group.name]?.[i]??null})),{date:pair.end,value:group.shareEnd}]}));
  }
  function chartSvg(series,width=560){
    const points=series.points.filter(p=>Number.isFinite(p.value));if(!points.length)return '<div class="empty">本区间暂无可用数据</div>';
    const W=Math.max(260,Math.round(width)),H=185,L=55,R=20,T=20,B=34,pw=W-L-R,ph=H-T-B;
    const values=points.map(p=>p.value*100),lo=Math.min(...values),hi=Math.max(...values),span=Math.max(hi-lo,.04),minimum=Math.max(0,lo-span*.18),maximum=hi+span*.18,range=maximum-minimum;
    const first=Date.parse(series.points[0].date+'T00:00:00Z'),last=Date.parse(series.points.at(-1).date+'T00:00:00Z');
    const x=p=>L+(last===first?pw/2:(Date.parse(p.date+'T00:00:00Z')-first)/(last-first)*pw),y=p=>T+(maximum-p.value*100)/range*ph;
    const grid=[0,.5,1].map(t=>{const yy=T+ph*t;return `<line x1="${L}" y1="${yy}" x2="${W-R}" y2="${yy}" class="share-grid-line"/><text x="${L-8}" y="${yy+4}" text-anchor="end" class="share-axis-label">${(maximum-range*t).toFixed(range<.2?2:1)}%</text>`}).join('');
    const segments=[];let segment=[];for(const p of series.points){if(Number.isFinite(p.value))segment.push(p);else if(segment.length){segments.push(segment);segment=[]}}if(segment.length)segments.push(segment);
    const paths=segments.map(seg=>`<path d="${seg.map((p,i)=>`${i?'L':'M'}${x(p)},${y(p)}`).join(' ')}" class="share-line"/>`).join('');
    const selected=points.length>3?[points[0],points[Math.floor((points.length-1)/2)],points.at(-1)]:points;
    const dateLabels=selected.map((p,i)=>`<text x="${x(p)}" y="${H-8}" text-anchor="${i===0?'start':i===selected.length-1?'end':'middle'}" class="share-axis-label">${esc(p.date.slice(5))}</text>`).join('');
    const circles=points.map(p=>`<circle cx="${x(p)}" cy="${y(p)}" r="3" class="share-point"/><circle cx="${x(p)}" cy="${y(p)}" r="11" class="share-hit" tabindex="0" role="img" aria-label="${esc(p.date+' · 市占率 '+(p.value*100).toFixed(4)+'%')}" data-share-tip="${esc(p.date+' · 市占率 '+(p.value*100).toFixed(4)+'%')}"><title>${esc(p.date)} · ${(p.value*100).toFixed(4)}%</title></circle>`).join('');
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(series.name)}${esc(D.periodLabel)}市占率走势">${grid}${paths}${dateLabels}${circles}</svg>`;
  }
  function render(){
    const series=selectedHistory();
    window.ETF_SHARE_TREND={source:ACTIVE_PERIOD,sourceLabel:D.periodLabel+' · 区间市占率',selectedDates:series[0]?.points.map(p=>p.date)||[],series,chartSvg};
    host.innerHTML=`<div class="share-trends-heading"><div><h3>富国规模市占率变化 · ${esc(D.periodLabel)}</h3><p>${esc(pair.start)} 至 ${esc(pair.end)} · 区间首尾采用底稿，区间内为周度记录</p></div><span class="share-trends-unit">市占率 % · 变化 BP</span></div><div class="share-trends-grid">${series.map((s,i)=>{
      const ps=s.points.filter(p=>Number.isFinite(p.value)),group=pair.groups[i],first={value:group.shareStart},last={value:group.shareEnd},change=group.changeBp;
      return `<article class="share-trend-card ${i===0?'share-trend-total':''}" data-share-series="${i}"><div class="share-trend-card-head"><h4>${esc(s.name)}</h4><div class="share-trend-stats"><strong>${pct(last?.value)}</strong><span class="share-trend-delta ${change>.05?'up':change<-.05?'down':'flat'}">${bp(change)}</span></div></div><div class="share-trend-plot">${chartSvg(s)}</div><div class="share-trend-tooltip" role="status" hidden></div><div class="share-trend-card-foot"><span>${esc(D.periodLabel)}变化 · ${ps.length}个记录</span><span>${pct(first?.value)} → ${pct(last?.value)}</span></div></article>`;
    }).join('')}</div>`;
    host.querySelectorAll('.share-trend-card').forEach(card=>{const tip=card.querySelector('.share-trend-tooltip');const show=e=>{const hit=e.target.closest('[data-share-tip]');if(hit){tip.textContent=hit.dataset.shareTip;tip.hidden=false}};card.addEventListener('pointerover',show);card.addEventListener('focusin',show);card.addEventListener('pointerdown',show);card.addEventListener('pointerleave',()=>tip.hidden=true);card.addEventListener('focusout',()=>tip.hidden=true)});
  }
  function resizeCharts(){host.querySelectorAll('.share-trend-card').forEach(card=>{const plot=card.querySelector('.share-trend-plot'),series=window.ETF_SHARE_TREND.series[Number(card.dataset.shareSeries)];if(plot.clientWidth>0)plot.innerHTML=chartSvg(series,plot.clientWidth)})}
  let resizePending=false;function scheduleResize(){if(resizePending)return;resizePending=true;requestAnimationFrame(()=>{resizePending=false;resizeCharts()})}
  tabs.addEventListener('click',event=>{const button=event.target.closest('[data-market-view]');if(!button)return;host.classList.toggle('hidden',button.dataset.marketView!=='share');if(button.dataset.marketView==='share')scheduleResize();const url=new URL(location.href);if(button.dataset.marketView==='share')url.searchParams.set('view','share');else url.searchParams.delete('view');url.searchParams.delete('shareSource');history.replaceState(null,'',url.href)});
  addEventListener('resize',scheduleResize,{passive:true});render();if(new URLSearchParams(location.search).get('view')==='share')tab.click();
})();




(()=>{
  const issueScale=window.ETF_ISSUE_SCALE;
  window.NEW_FUND_ISSUE_SCALE=issueScale;
  const table=document.querySelector('#newfunds table');
  if(!table)return;
  const header=table.tHead?.rows[0];
  if(!header||[...header.cells].some(cell=>cell.textContent.trim()==='发行规模（亿元）'))return;
  const th=document.createElement('th');
  th.textContent='发行规模（亿元）';
  header.cells[2].after(th);
  for(const row of table.tBodies[0]?.rows||[]){
    if(row.cells.length===1&&row.cells[0].colSpan>1){row.cells[0].colSpan+=1;continue;}
    const code=row.cells[0]?.textContent.trim();
    const value=issueScale[code];
    const td=document.createElement('td');
    td.className='issue-scale';
    td.textContent=Number.isFinite(value)?value.toFixed(2):'-';
    row.cells[2]?.after(td);
  }
})();




(()=>{
  const D=window.ETF_NEWFUND_PERIOD,esc=v=>String(v??'-').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const panel=document.querySelector('#newfunds'),oldWrap=panel?.querySelector(':scope>.tablewrap');if(!panel||!oldWrap)return;
  const issueScale=window.NEW_FUND_ISSUE_SCALE||{},head=panel.querySelector('.panel-head'),tabs=document.createElement('div');tabs.className='newfund-view-tabs';tabs.setAttribute('role','group');tabs.setAttribute('aria-label','新发基金展示视角');tabs.innerHTML='<button type="button" class="active" data-newfund-view="market">全市场</button><button type="button" data-newfund-view="fuguo">富国</button>';head.append(tabs);
  const host=document.createElement('div');host.className='newfund-analysis';oldWrap.replaceWith(host);
  const money=v=>Number.isFinite(v)?v.toFixed(2):'-',managerName=v=>String(v||'-').replace(/基金管理股份有限公司|基金管理有限责任公司|基金管理有限公司/g,'基金').replace(/证券资产管理有限公司|资产管理有限公司/g,'资管').replace(/上海东方资管/,'东方资管').replace(/上海国泰海通资管/,'国泰海通资管').replace(/(.)基金$/,'$1');
  const records=(D.newfunds||[]).map(x=>{const issue=Number(issueScale[x[0]]),latest=Number(x[10]);return {code:x[0],name:x[1],manager:managerName(x[4]),managerRaw:String(x[4]||''),index:x[7]||'未分类',type:x[8]||'未分类',issue:Number.isFinite(issue)?issue:0,latest:Number.isFinite(latest)?latest:0}});
  const sum=(rows,key)=>rows.reduce((total,row)=>total+row[key],0),aggregate=(rows,key)=>{const map=new Map();rows.forEach(row=>{const label=row[key]||'未分类',item=map.get(label)||{label,count:0,issue:0};item.count+=1;item.issue+=row.issue;map.set(label,item)});return [...map.values()].sort((a,b)=>b.count-a.count||b.issue-a.issue)};
  const rankCard=(title,items)=>{const max=Math.max(...items.map(x=>x.count),1);return '<section class="newfund-rank-card"><h3>'+esc(title)+'</h3><div class="newfund-rank-list">'+(items.length?items.slice(0,5).map(x=>'<div class="newfund-rank-row"><div class="newfund-rank-label"><b title="'+esc(x.label)+'">'+esc(x.label)+'</b><span class="newfund-rank-track"><i style="width:'+Math.max(5,x.count/max*100)+'%"></i></span></div><div class="newfund-rank-value"><strong>'+x.count+'只</strong>'+money(x.issue)+'亿</div></div>').join(''):'<div class="newfund-empty">本区间暂无数据</div>')+'</div></section>'};
  const render=(view='market')=>{const rows=view==='fuguo'?records.filter(row=>row.managerRaw.includes('富国')):records,issueTotal=sum(rows,'issue'),latestTotal=sum(rows,'latest'),grown=rows.filter(row=>row.latest>row.issue+1e-8).map(row=>({...row,delta:row.latest-row.issue,growth:row.issue>0?(row.latest/row.issue-1)*100:null})).sort((a,b)=>b.delta-a.delta),types=aggregate(rows,'type'),indices=aggregate(rows,'index'),managers=aggregate(rows,'manager'),leadingType=types[0]?.label||'-';
    host.innerHTML='<p class="newfund-scope">'+esc(D.range)+' · '+(view==='fuguo'?'富国基金':'全市场')+'新成立ETF</p><div class="newfund-kpis"><div class="newfund-kpi"><small>发行数量</small><strong>'+rows.length+'</strong><span>只</span></div><div class="newfund-kpi"><small>发行规模合计</small><strong>'+money(issueTotal)+'</strong><span>亿元</span></div><div class="newfund-kpi"><small>最新规模合计</small><strong>'+money(latestTotal)+'</strong><span>亿元</span></div><div class="newfund-kpi"><small>规模超过发行时</small><strong>'+grown.length+'</strong><span>只 · 主要类型 '+esc(leadingType)+'</span></div></div>'+
      (rows.length?'<div class="newfund-rank-grid">'+rankCard('主要指数类型',types)+rankCard('主要跟踪指数',indices)+rankCard(view==='fuguo'?'富国发行产品':'发行较多的基金公司',managers)+'</div><section class="newfund-growth"><div class="newfund-growth-head"><div><h3>规模增长较好的产品</h3><p>按“最新规模－发行规模”排序，仅展示正增长产品</p></div><span>'+grown.length+'只</span></div>'+(grown.length?'<div class="tablewrap"><table><thead><tr><th>ETF简称</th><th>基金公司</th><th>跟踪指数</th><th>发行规模</th><th>最新规模</th><th>规模增加</th><th>增幅</th></tr></thead><tbody>'+grown.slice(0,10).map(row=>'<tr><td class="name">'+esc(row.name)+'</td><td>'+esc(row.manager)+'</td><td>'+esc(row.index)+'</td><td>'+money(row.issue)+'</td><td>'+money(row.latest)+'</td><td class="positive">+'+money(row.delta)+'</td><td class="positive">'+(Number.isFinite(row.growth)?'+'+row.growth.toFixed(1)+'%':'-')+'</td></tr>').join('')+'</tbody></table></div>':'<div class="newfund-empty">本区间暂无最新规模超过发行规模的产品</div>')+'</section>':'<div class="newfund-empty">本区间暂无新发ETF。可切换其他时间区间查看。</div>')};
  tabs.addEventListener('click',event=>{const button=event.target.closest('[data-newfund-view]');if(!button)return;tabs.querySelectorAll('button').forEach(item=>item.classList.toggle('active',item===button));render(button.dataset.newfundView)});render();
})();




(()=>{
  const D=window.ETF_NEWFUND_PERIOD,panel=document.querySelector('#newfunds'),host=panel?.querySelector('.newfund-analysis'),oldTabs=panel?.querySelector('.newfund-view-tabs');if(!D||!panel||!host||!oldTabs)return;
  const tabs=oldTabs.cloneNode(true);oldTabs.replaceWith(tabs);
  const issueScale=window.NEW_FUND_ISSUE_SCALE||{},esc=v=>String(v??'-').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),money=v=>Number.isFinite(v)?v.toFixed(2):'-',managerName=v=>String(v||'-').replace(/^(.*?)基金管理[（(]中国[)）]有限公司$/,'$1基金').replace(/基金管理股份有限公司|基金管理有限责任公司|基金管理有限公司/g,'基金').replace(/证券资产管理有限公司|资产管理有限公司/g,'资管').replace(/中银国际证券股份有限公司/,'中银国际证券').replace(/上海东方资管/,'东方资管').replace(/上海国泰海通资管/,'国泰海通资管').replace(/(.)基金$/,'$1');
  const records=(D.newfunds||[]).map(x=>{const issue=Number(issueScale[x[0]]),latest=Number(x[10]),safeIssue=Number.isFinite(issue)?issue:0,safeLatest=Number.isFinite(latest)?latest:0;return {code:x[0],name:x[1],manager:managerName(x[4]),managerRaw:String(x[4]||''),established:String(x[5]||'').slice(0,10),listed:String(x[6]||'').slice(0,10),index:x[7]||'未分类',type:x[8]||'未分类',issue:safeIssue,latest:safeLatest,delta:safeLatest-safeIssue,growth:safeIssue>0?(safeLatest/safeIssue-1)*100:null}});
  const sum=(rows,key)=>rows.reduce((total,row)=>total+row[key],0);
  const group=(rows,key)=>{const map=new Map();for(const row of rows){const label=row[key]||'未分类',item=map.get(label)||{label,count:0,issue:0,latest:0,grown:0,names:[],products:[]};item.count++;item.issue+=row.issue;item.latest+=row.latest;if(row.delta>1e-8)item.grown++;item.names.push(row.manager);item.products.push(row);map.set(label,item)}return [...map.values()].sort((a,b)=>b.count-a.count||b.issue-a.issue)};
  const kpis=rows=>{const grown=rows.filter(row=>row.delta>1e-8).length;return '<div class="newfund-kpis"><div class="newfund-kpi"><small>发行数量</small><strong>'+rows.length+'</strong><span>只</span></div><div class="newfund-kpi"><small>发行规模合计</small><strong>'+money(sum(rows,'issue'))+'</strong><span>亿元</span></div><div class="newfund-kpi"><small>最新规模合计</small><strong>'+money(sum(rows,'latest'))+'</strong><span>亿元</span></div><div class="newfund-kpi"><small>规模超过发行时</small><strong>'+grown+'</strong><span>只</span></div></div>'};
  const compactSummary=(title,items)=>'<section class="newfund-summary-card"><h3>'+esc(title)+'</h3><div class="tablewrap"><table><thead><tr><th>分类</th><th>数量</th><th>发行规模</th><th>最新规模</th></tr></thead><tbody>'+items.slice(0,10).map(x=>'<tr><td class="name">'+esc(x.label)+'</td><td>'+x.count+'只</td><td>'+money(x.issue)+'</td><td>'+money(x.latest)+'</td></tr>').join('')+'</tbody></table></div></section>';
  const scaleUp=rows=>{const grown=rows.filter(row=>row.delta>1e-8).sort((a,b)=>b.delta-a.delta);return '<section class="newfund-growth"><div class="newfund-growth-head"><div><h3>规模做大的产品</h3><p>最新规模高于发行规模，按规模增加额排序</p></div><span>'+grown.length+'只</span></div>'+(grown.length?'<div class="tablewrap"><table><thead><tr><th>ETF简称</th><th>基金公司</th><th>跟踪指数</th><th>发行规模</th><th>最新规模</th><th>规模增加</th><th>增幅</th></tr></thead><tbody>'+grown.map(row=>'<tr><td class="name">'+esc(row.name)+'</td><td>'+esc(row.manager)+'</td><td>'+esc(row.index)+'</td><td>'+money(row.issue)+'</td><td>'+money(row.latest)+'</td><td class="newfund-delta-up">+'+money(row.delta)+'</td><td class="newfund-delta-up">+'+row.growth.toFixed(1)+'%</td></tr>').join('')+'</tbody></table></div>':'<div class="newfund-empty">本区间暂无最新规模高于发行规模的产品</div>')+'</section>'};
  const marketView=()=>{const indices=group(records,'index'),types=group(records,'type'),managers=group(records,'manager');host.innerHTML='<p class="newfund-scope">'+esc(D.range)+' · 全市场新发ETF</p>'+kpis(records)+(records.length?'<div class="newfund-summary-grid">'+compactSummary('主要指数类型',types)+compactSummary('发行较多的基金公司',managers)+'</div><section class="newfund-full-table"><div class="newfund-full-table-head"><div><h3>按跟踪指数汇总</h3><p>按发行数量排序，取前 10 个指数，同一指数下的新发产品合并统计</p></div><span>'+indices.length+'个指数 · 展示前 '+Math.min(10,indices.length)+'</span></div><div class="tablewrap newfund-scroll"><table><thead><tr><th>跟踪指数</th><th>发行数量</th><th>发行规模</th><th>最新规模</th><th>规模做大</th><th>发行基金</th></tr></thead><tbody>'+indices.slice(0,10).map(x=>'<tr><td class="name">'+esc(x.label)+'</td><td>'+x.count+'只</td><td>'+money(x.issue)+'</td><td>'+money(x.latest)+'</td><td class="'+(x.grown?'newfund-delta-up':'')+'">'+x.grown+'只</td><td class="newfund-index-products">'+x.products.map(row=>'<span'+(row.delta>1e-8?' class="newfund-grown-issuer"':'')+' data-fund-code="'+esc(row.code)+'" title="'+esc(row.name)+'">'+esc(row.manager)+'</span>').join('、')+'</td></tr>').join('')+'</tbody></table></div></section>'+scaleUp(records):'<div class="newfund-empty">本区间暂无新发ETF。可切换其他时间区间查看。</div>')};
  const fuguoView=()=>{const rows=records.filter(row=>row.managerRaw.includes('富国')).sort((a,b)=>b.established.localeCompare(a.established));host.innerHTML='<p class="newfund-scope">'+esc(D.range)+' · 富国新发ETF</p>'+kpis(rows)+(rows.length?'<section class="newfund-full-table"><div class="newfund-full-table-head"><div><h3>富国新发产品</h3><p>列出当前统计区间内全部富国新发ETF</p></div><span>'+rows.length+'只</span></div><div class="tablewrap"><table><thead><tr><th>ETF简称</th><th>基金代码</th><th>指数类型</th><th>跟踪指数</th><th>成立日期</th><th>发行规模</th><th>最新规模</th><th>规模变化</th></tr></thead><tbody>'+rows.map(row=>'<tr><td><span class="newfund-product-name">'+esc(row.name)+'</span></td><td class="newfund-code">'+esc(row.code)+'</td><td>'+esc(row.type)+'</td><td>'+esc(row.index)+'</td><td>'+esc(row.established||'-')+'</td><td>'+money(row.issue)+'</td><td>'+money(row.latest)+'</td><td class="'+(row.delta>0?'newfund-delta-up':row.delta<0?'newfund-delta-down':'')+'">'+(row.delta>0?'+':'')+money(row.delta)+'</td></tr>').join('')+'</tbody></table></div></section>'+scaleUp(rows):'<div class="newfund-empty">本区间暂无富国新发ETF。可切换其他时间区间查看。</div>')};
  const render=view=>{tabs.querySelectorAll('button').forEach(button=>button.classList.toggle('active',button.dataset.newfundView===view));if(view==='fuguo')fuguoView();else marketView()};
  tabs.addEventListener('click',event=>{const button=event.target.closest('[data-newfund-view]');if(button)render(button.dataset.newfundView)});render('market');
})();



(()=>{
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const period=window.ETF_DATA_META.periods[ACTIVE_PERIOD],pair=window.ETF_PRIMARY_PAIRS[ACTIVE_PERIOD];
  const money=v=>Number(v).toLocaleString('zh-CN',{minimumFractionDigits:1,maximumFractionDigits:1});
  const signed=v=>(v>0?'+':'')+money(v),pct=v=>(v*100).toFixed(2)+'%',bp=v=>(Math.abs(v)<.05?'0.0':(v>0?'+':'')+v.toFixed(1))+' BP';
  const tone=v=>v>.0000001?'up':v<-.0000001?'down':'';
  const groupName=name=>name==='全市场'?'全市场（非货非债）':name==='港股'?'跨境-港股':name==='非港股'?'跨境-非港股':name;
  const total=pair.groups[0],fg=D.companies.find(row=>String(row[1]).includes('富国'));
  const allZero=(D.companies||[]).every(row=>Math.abs(Number(row[9])||0)<1e-9);
  window.ETF_DASHBOARD_UPGRADE={period:ACTIVE_PERIOD,pair,metadata:period,marketShareValue:total.shareEnd,groupShareValues:Object.fromEntries(pair.groups.map(g=>[g.name,g.shareEnd])),goToDirection};
  const kpis=document.createElement('section');kpis.className='upgrade-kpis';kpis.setAttribute('aria-label','市场与富国核心指标');
  kpis.innerHTML=`<article class="upgrade-kpi"><small>全市场规模 · 非货非债</small><strong>${money(total.marketEnd)}亿</strong><em>区间规模变化 ${signed(total.marketEnd-total.marketStart)}亿</em></article><article class="upgrade-kpi"><small>富国ETF规模</small><strong>${money(total.fuguoEnd)}亿</strong><em>全市场规模第${fg?.[0]||9}名</em></article><article class="upgrade-kpi"><small>富国规模市占率</small><strong>${pct(total.shareEnd)}</strong><em class="${tone(total.changeBp)}">较期初 ${bp(total.changeBp)}</em></article><article class="upgrade-kpi"><small>富国${esc(D.periodLabel)}净流入</small><strong class="${tone(D.types[0][4])}">${signed(D.types[0][4])}亿</strong><em>${allZero?'区间内资金变化为0':'区间净流入第'+(1+D.companies.filter(row=>Number(row[9])>Number(fg[9])+1e-9).length)+'名'}</em></article>`;
  document.querySelector('.wrap').prepend(kpis);
  document.querySelectorAll('.market-summary-row').forEach(row=>{
    const name=groupName(row.querySelector('.market-summary-name').textContent.trim()),g=pair.groups.find(item=>item.name===name);if(!g)return;
    row.querySelector('.market-summary-share b').textContent=pct(g.shareEnd);
    const change=row.querySelector('.market-summary-share em');if(change){change.textContent=bp(g.changeBp);change.className=tone(g.changeBp)}
  });
  const scope=document.createElement('p');scope.className='upgrade-scope-caption';scope.textContent='规模前20家公司 · 净流入 / 净流出排行展示前10家';document.querySelector('#competition .panel-head').after(scope);
  const inflow=[...(D.inflow||[])].sort((a,b)=>b[5]-a[5]),outflow=[...(D.outflow||[])].sort((a,b)=>a[5]-b[5]);
  const changes=[];for(const row of Object.values(D.direction_metrics||{})){if(row.allMarket&&row.fuguoEnd>=10&&Number.isFinite(row.changeBp))changes.push({name:row.name,category:row.category,value:row.changeBp,share:row.share})}
  const gold=D.focus?.find(b=>b.direction==='黄金'),goldOwn=gold?.peer_rows.find(row=>String(row['基金公司']).includes('富国'));
  if(Number(goldOwn?.['规模'])>=10&&Number.isFinite(Number(D.gold_summary?.bp)))changes.push({name:'黄金',category:'商品',value:Number(D.gold_summary.bp),share:D.gold_summary.share});
  const uniqueChanges=[...new Map(changes.map(row=>[row.category+'||'+row.name,row])).values()];
  const up=uniqueChanges.filter(row=>row.value>0).sort((a,b)=>b.value-a.value).slice(0,3),down=uniqueChanges.filter(row=>row.value<0).sort((a,b)=>a.value-b.value).slice(0,3);
  const directionButton=(name,category,kind,label,action='direction')=>`<button type="button" ${action==='peers'?'class="upgrade-peer-action" aria-label="查看'+esc(name)+'竞品" ':''}data-insight-action="${action}" data-insight-direction="${esc(name)}" data-insight-category="${esc(category)}" data-insight-kind="${kind}">${esc(!label||label===name?(D.direction_summary_labels?.[category+'||'+name]||name):label)}</button>`;
  const hasFuguo=row=>String(row[9]??'-').trim()!=='-';
  const marketBreakdown=(name,category,mode='flow')=>{
    const parts=D.direction_market_breakdown?.[category+'||'+name]||[];
    if(parts.length<2)return '';
    const flowText=(label,value)=>label+(value<0?'净流出':'净流入')+Math.abs(value).toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2})+'亿';
    return '<div class="conclusion-market-breakdown">'+parts.map(part=>'<div><b>'+esc(part.label)+'</b>：'+(mode==='share'?(part.hasFuguo?'市占率 '+pct(part.share)+'，较期初 '+bp(part.changeBp):'富国 —'):flowText('市场',part.marketFlow)+'，'+(part.hasFuguo?flowText('富国',part.fuguoFlow):'富国 —'))+'</div>').join('')+'</div>';
  };
  const listFlow=(rows,kind)=>rows.slice(0,3).map(row=>`<li>${directionButton(row[1],row[2],kind)}<span class="upgrade-insight-number ${tone(row[5])}">${signed(row[5])}亿 <span style="color:#708096">· 富国 ${hasFuguo(row)?signed(row[6])+'亿':'—'}</span></span>${marketBreakdown(row[1],row[2])}</li>`).join('');
  const listChange=rows=>rows.map(row=>`<li>${directionButton(row.name,row.category,'in',row.name)}<span class="upgrade-share-metrics"><b class="upgrade-share-absolute">${pct(row.share)}</b><span class="upgrade-insight-number ${tone(row.value)}">${bp(row.value)}</span></span>${marketBreakdown(row.name,row.category,'share')}</li>`).join('');
  const missingCapture=inflow.filter(row=>String(row[9]??'-')!=='-'&&Number(row[6])<0).slice(0,3);
  const continuedOut=outflow.filter(row=>String(row[9]??'-')!=='-'&&Number(row[6])<0).sort((a,b)=>a[6]-b[6]).slice(0,3);
  const followups=missingCapture.length?missingCapture.map(row=>({row,note:`市场净流入 ${signed(row[5])}亿，富国净流出 ${money(Math.abs(row[6]))}亿`})):continuedOut.map(row=>({row,note:`市场净流出 ${money(Math.abs(row[5]))}亿，富国净流出 ${money(Math.abs(row[6]))}亿`}));
  const conclusion=document.querySelector('#conclusions');
  conclusion.innerHTML=`<article class="conclusion upgrade-market-brief"><h3><span class="tag market">ETF市场概况</span></h3><div class="market-flow-hero"><span>全市场${esc(D.periodLabel)}${D.types[0][3]<0?'净流出':'净流入'}</span><strong class="${tone(D.types[0][3])}">${signed(D.types[0][3])}亿</strong></div><p>${allZero?'本区间底稿记录的净流入为0。可切换其他时间区间查看资金方向。':`富国${D.types[0][4]<0?'净流出':'净流入'} <b>${signed(D.types[0][4])}亿</b>；规模市占率 <b>${pct(total.shareEnd)}</b>，较期初 <b>${bp(total.changeBp)}</b>。`}</p></article><article class="conclusion"><h3><span class="tag up">市场资金主线</span></h3>${allZero?'<div class="upgrade-calm">区间资金变化为0，暂无有效方向排行。</div>':`<div class="flow-mainlines"><section class="flow-mainline flow-mainline-in"><h4>流入主线</h4><ul class="upgrade-insights">${listFlow(inflow.filter(row=>Number(row[5])>0),'in')||'<li class="upgrade-calm">本区间暂无净流入方向</li>'}</ul></section><section class="flow-mainline flow-mainline-out"><h4>流出主线</h4><ul class="upgrade-insights">${listFlow(outflow.filter(row=>Number(row[5])<0),'out')||'<li class="upgrade-calm">本区间暂无净流出方向</li>'}</ul></section></div>`}</article><article class="conclusion"><h3><span class="tag market">富国规模市占率及变化</span></h3>${up.length||down.length?`<ul class="upgrade-insights">${listChange(up)}${listChange(down)}</ul>`:'<div class="upgrade-calm">本区间暂无明显规模份额变化。</div>'}</article><article class="conclusion upgrade-followup"><h3><span class="tag market">值得关注</span></h3>${followups.length?`<ul class="upgrade-insights">${followups.map(({row,note})=>`<li>${directionButton(row[1],row[2],row[5]<0?'out':'in')}<span class="upgrade-insight-number">${esc(note)}</span>${directionButton(row[1],row[2],row[5]<0?'out':'in','查看竞品 →','peers')}${marketBreakdown(row[1],row[2])}</li>`).join('')}</ul>`:'<div class="upgrade-calm">本区间暂无有效资金信号。可切换时间区间，或进入富国ETF竞品库查看规模与产品分布。</div>'}</article>`;
  conclusion.addEventListener('click',event=>{const button=event.target.closest('[data-insight-direction]');if(button)goToDirection(button.dataset.insightDirection,button.dataset.insightCategory,button.dataset.insightKind,button.dataset.insightAction==='peers')});
  function periodURL(key){const url=new URL(location.href);url.searchParams.set('period',key);url.searchParams.delete('view');url.searchParams.delete('shareSource');url.hash='';return url.href}
  function toast(message){document.querySelector('.upgrade-toast')?.remove();const el=document.createElement('div');el.className='upgrade-toast';el.setAttribute('role','status');el.textContent=message;document.body.append(el);setTimeout(()=>el.remove(),3500)}
  function openCatalog(name,category){
    window.__ETF_PEER_RETURN_CONTEXT={scrollY:window.scrollY,opener:document.activeElement,peerView:document.querySelector('#peerTabs .active')?.dataset.peerView||'focus'};
    const products=D.fuguo_direction_products?.[category+'||'+name]||[],product=products[0]?.[0];
    const normalize=value=>String(value||'').replace(/\s+/g,'').replace(/富国$/,'');
    const item=(D.peer_catalog||[]).find(item=>normalize(item.name)===normalize(product))||(D.peer_catalog||[]).find(item=>products.some(p=>normalize(item.name)===normalize(p[0])))||(D.peer_catalog||[]).find(item=>item.category===category&&String(item.name).includes(name));
    if(item){window.ETF_OPEN_PEER_DETAIL(item.sheet);return}
    document.querySelector('[data-peer-view="directory"]')?.click();document.querySelector('[data-peer-category-filter="all"]')?.click();
    const search=document.querySelector('#peerCatalogSearch');search.value=item?.name||name;search.dispatchEvent(new Event('input',{bubbles:true}));
    if(item){const link=[...document.querySelectorAll('[data-peer-sheet]')].find(link=>decodeURIComponent(link.dataset.peerSheet)===item.sheet);if(link){link.click();return}}
    document.querySelector('#peers').scrollIntoView({behavior:'smooth',block:'start'});toast('已筛选“'+name+'”相关产品，请选择产品查看竞品。');
  }
  function goToDirection(name,category,kind='in',preferPeers=false){
    if(preferPeers){openCatalog(name,category);return}
    const merged=!['宽基','行业主题','港股','非港股','策略','商品'].includes(category);const rows=(kind==='out'?outflow:inflow).filter(row=>merged||row[2]===category),index=rows.findIndex(row=>row[1]===name);
    if(index<0||index>=10){openCatalog(name,category);return}
    document.querySelector('#directionRankTabs [data-kind="'+kind+'"]')?.click();document.querySelector('[data-direction-category="'+(merged?'全部':category)+'"]')?.click();if(index>=5)document.querySelector('[data-direction-expand]')?.click();
    setTimeout(()=>{const target=[...document.querySelectorAll('.upgrade-direction-table [data-direction-name]')].find(row=>row.dataset.directionName===name)||[...document.querySelectorAll('#directionRankingBoard [data-direction-name]')].find(row=>row.dataset.directionName===name);if(target){target.classList.add('signal-target');target.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>target.classList.remove('signal-target'),1800)}else document.querySelector('#direction-ranking').scrollIntoView({behavior:'smooth',block:'start'})},90);
  }
})();



/* Isolated direction-table presentation. Source data and cell indexes are preserved. */
(()=>{
  'use strict';
  const doc=document, data=()=>window.ETF_NEWFUND_PERIOD||((typeof D!=='undefined')?D:null);
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const number=value=>typeof value==='number'&&Number.isFinite(value)?value:null;
  const money=(value,decimals=1)=>number(value)===null?'—':value.toLocaleString('zh-CN',{minimumFractionDigits:decimals,maximumFractionDigits:decimals});
  const signed=value=>number(value)===null?'—':(value>0?'+':'')+money(value);
  const percent=value=>number(value)===null?'—':money(value*100,2)+'%';
  const bp=value=>number(value)===null?'—':(value>0?'+':'')+money(value,1)+' BP';
  const texts=element=>String(element?.textContent||'').replace(/\s+/g,' ').trim();
  const labelCategory=value=>String(value||'').replace(/^跨境-/,'');
  let rowSequence=0,refreshPending=false;
  function getDirectionChangeBP(row){
    const current=data();if(!current||!row)return null;
    const metric=current.direction_metrics?.[row[2]+'||'+row[1]];
    if(metric&&Number.isFinite(metric.changeBp))return metric.changeBp;
    const categoryRows=current.categories?.[row[2]]||[];
    const match=categoryRows.find(entry=>String(entry[1])===String(row[1]));
    const change=String(match?.[8]??'').match(/[（(]([+-]?\d+(?:\.\d+)?)\s*BP[）)]/i);
    if(change)return Number(change[1]);
    if(String(row[2])==='商品'&&String(row[1])==='黄金'&&current.gold_summary?.bp!==null&&current.gold_summary?.bp!==undefined&&Number.isFinite(Number(current.gold_summary.bp)))return Number(current.gold_summary.bp);
    return null;
  }
  function getFlowContribution(row){
    const market=number(row?.[5]),own=number(row?.[6]);
    if(market===null||own===null)return {value:null,status:'缺少资金数据'};
    if(Math.abs(market)<.1)return {value:null,status:'市场净额较小'};
    const ratio=own/market;return {value:ratio,status:ratio<0?'反向':'同向'};
  }
  function directionSourceRows(){
    const current=data();if(!current)return [];
    const kind=doc.querySelector('#directionRankTabs button.active')?.dataset.kind||'in';
    const category=doc.querySelector('[data-direction-category].active')?.dataset.directionCategory||'全部';
    const source=category==='全部'?(kind==='out'?current.outflow:current.inflow):(current.direction_category_rows||[]);
    return [...(source||[])].filter(row=>(category==='全部'||String(row[2])===category)&&(kind==='out'?row[5]<0:row[5]>0)).sort((a,b)=>kind==='out'?Number(a[5])-Number(b[5]):Number(b[5])-Number(a[5]));
  }
  function resolveDirectionSource(sourceRow,index){
    const rows=directionSourceRows(),name=sourceRow.dataset.directionName;
    const category=labelCategory(sourceRow.cells[1]?.querySelector('small')?.textContent);
    return rows.find(row=>String(row[1])===name&&(!category||String(row[2])===category))||rows[index]||null;
  }
  function compactDirections(){
    doc.querySelectorAll('#directionRankingBoard .direction-detail-table').forEach(source=>{
      if(source.dataset.upgradeCompact)return;
      source.dataset.upgradeCompact='1';source.classList.add('upgrade-direction-source');source.setAttribute('aria-hidden','true');
      const board=source.closest('.direction-board'),table=doc.createElement('table');table.className='upgrade-direction-table';
      table.setAttribute('aria-label','投资方向核心指标');
      const kind=doc.querySelector('#directionRankTabs button.active')?.dataset.kind==='out'?'净流出':'净流入';
      table.innerHTML='<thead><tr><th>排名</th><th>投资方向</th><th>市场净流入<br>亿元</th><th>富国净流入<br>亿元</th><th>富国规模<br>市占率</th><th title="富国净流量占市场净流量的比例；可为负或超过100%。">富国净流量<br>贡献比</th><th>市占率变化<br>BP</th><th class="upgrade-direction-top3">'+kind+' TOP3<br>亿元</th><th>查看明细</th></tr></thead><tbody></tbody>';
      const tbody=table.tBodies[0];
      [...source.tBodies[0]?.rows||[]].forEach((original,index)=>{
        const raw=resolveDirectionSource(original,index);if(!raw)return;
        const own=String(raw[9]??'-').trim()!=='-',change=own?getDirectionChangeBP(raw):null,contribution=getFlowContribution(raw),id='upgrade-direction-detail-'+(++rowSequence);
        const row=doc.createElement('tr');row.classList.toggle('upgrade-direction-alt',index%2===1);row.dataset.directionName=String(raw[1]);row.dataset.upgradeDirectionCategory=String(raw[2]);
        row.innerHTML='<td><span class="rank-badge '+(index<3?'top':'')+'">'+(index+1)+'</span></td><td class="upgrade-direction-name">'+esc(raw[1])+(doc.querySelector('[data-direction-category].active')?.dataset.directionCategory==='全部'?'<span class="upgrade-direction-category">'+esc(String(raw[2]).replace(/^港股$/,'跨境-港股').replace(/^非港股$/,'跨境-非港股'))+'</span>':'')+'</td><td class="'+(raw[5]>0?'up':raw[5]<0?'down':'')+'">'+signed(raw[5])+'</td><td class="'+(raw[6]>0?'up':raw[6]<0?'down':'')+'">'+(own?signed(raw[6]):'—')+'</td><td>'+(own?percent(raw[10]):'—')+'</td><td class="upgrade-flow-contribution" title="'+esc(contribution.value===null?contribution.status:'富国净流量 / 市场净流量')+'">'+(own?(contribution.value===null?'—':percent(contribution.value)+(contribution.value<0?'<small>反向</small>':'')):'—')+'</td><td class="'+(change>0?'up':change<0?'down':'')+'">'+bp(change)+'</td><td class="upgrade-direction-top3">'+original.cells[8].innerHTML+'</td><td><button class="upgrade-direction-toggle" type="button" aria-expanded="false" aria-controls="'+id+'">明细</button></td>';
        const detail=doc.createElement('tr');detail.id=id;detail.className='upgrade-direction-detailrow hidden';
        detail.innerHTML='<td colspan="9"><div class="upgrade-direction-details"><section class="upgrade-direction-detailgroup"><h4>规模</h4><div class="upgrade-direction-scales"><div><small>全市场规模（亿元）</small><b>'+money(raw[3])+'</b></div><div><small>富国规模（亿元）</small><b>'+(own?money(raw[4]):'—')+'</b></div></div></section><section class="upgrade-direction-detailgroup"><h4>富国相关ETF · 规模（亿元）</h4>'+original.cells[9].innerHTML+'</section></div></td>';
        row.querySelector('button').addEventListener('click',()=>{const open=detail.classList.contains('hidden');detail.classList.toggle('hidden',!open);const button=row.querySelector('button');button.setAttribute('aria-expanded',String(open));button.textContent=open?'收起':'明细'});
        tbody.append(row,detail);
      });
      source.before(table);
      if(board&&!board.querySelector('.upgrade-direction-help')){const help=doc.createElement('p');help.className='upgrade-direction-help';help.textContent='点击“明细”查看规模和产品。';board.querySelector('.direction-board-head')?.after(help)}
    });
  }
  function refresh(){compactDirections()}
  function scheduleRefresh(){if(refreshPending)return;refreshPending=true;requestAnimationFrame(()=>{refreshPending=false;refresh()})}
  window.ETF_TABLE_TOOLS={refresh,getDirectionChangeBP,getFlowContribution};
  refresh();
  const board=doc.querySelector('#directionRankingBoard');
  if(board)new MutationObserver(scheduleRefresh).observe(board,{childList:true,subtree:true});
  const signals=doc.querySelector('.direction-signal-grid');
  if(signals)signals.addEventListener('click',event=>{
    const signal=event.target.closest('.direction-signal-card li');
    if(!signal||!signal.querySelector('b'))return;
    const name=texts(signal.querySelector('span'));
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      const row=[...doc.querySelectorAll('.upgrade-direction-table tr[data-direction-name]')].find(element=>element.dataset.directionName===name);
      if(row){row.classList.add('signal-target');row.scrollIntoView({behavior:'smooth',block:'center'})}
    }));
  });
})();


(()=>{
 const key='etf-period-reading-position:'+location.pathname;

 const topEdge=()=>{
   const bar=document.querySelector('.period-switcher');
   const header=document.querySelector('header'),nav=document.querySelector('.dashboard-nav');
   const navHeight=nav&&getComputedStyle(nav).position==='sticky'?nav.getBoundingClientRect().height:0;
   return (header?.getBoundingClientRect().height||0)+navHeight+(bar?.getBoundingClientRect().height||0);
 };
 window.ETF_SAVE_PERIOD_POSITION=period=>{
   const edge=topEdge()+12,sections=[...document.querySelectorAll('main section.panel[id]')];
   const section=sections.filter(el=>el.getBoundingClientRect().top<=edge+30).at(-1)||sections[0];
   try{sessionStorage.setItem(key,JSON.stringify({period,id:section?.id,offset:section?Math.max(0,edge-section.getBoundingClientRect().top):0,scrollY}));}catch{}
 };
 let saved;try{saved=JSON.parse(sessionStorage.getItem(key)||'null');sessionStorage.removeItem(key);}catch{}
 if(!saved||saved.period!==ACTIVE_PERIOD)return;
 const restore=()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{
   const section=document.getElementById(saved.id),edge=topEdge()+12;
   const offset=section?Math.min(saved.offset,Math.max(0,section.offsetHeight-150)):0;
   window.scrollTo({top:section?scrollY+section.getBoundingClientRect().top+offset-edge:saved.scrollY,behavior:'instant'});
 }));
 setTimeout(restore,120);
})();


(()=>{
 const data=D.fuguo_rankings;if(!data)return;
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const number=v=>Number(v).toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2});
 document.querySelector('#fuguoRankingRange').textContent=D.periodLabel+' · '+D.range+' · 非货非债ETF';
 document.querySelector('#fuguoRankingGrid').innerHTML=[['inflow','净流入TOP10','in'],['outflow','净流出TOP10','out']].map(([key,title,kind])=>{
 const rows=data[key]||[];
 return '<article class="fuguo-ranking-card '+kind+'"><h3>'+title+'</h3><div class="tablewrap"><table><thead><tr><th>排名</th><th>ETF简称</th><th>'+ (kind==='in'?'净流入':'净流出')+'（亿）</th><th>最新规模（亿）</th><th title="最新规模占对应竞品组总规模的比例">市占率</th><th title="最新规模在对应竞品组中的排名 / 产品总数">规模排名</th></tr></thead><tbody>'+ (rows.length?rows.map((r,i)=>{
 const share=Number.isFinite(r.share)?(r.share*100).toFixed(2)+'%':'—';
 const rank=Number.isInteger(r.scaleRank)&&Number.isInteger(r.peerCount)?r.scaleRank+'/'+r.peerCount:'—';
 return '<tr><td><span class="fg-rank '+(i<3?'top':'')+'">'+(i+1)+'</span></td><td>'+esc(r.name)+'</td><td class="fg-flow '+(r.flow>0?'up':'down')+'">'+(r.flow>0?'+':'−')+number(Math.abs(r.flow))+'</td><td>'+number(r.scale)+'</td><td class="fg-share">'+esc(share)+'</td><td class="fg-scale-rank">'+esc(rank)+'</td></tr>'}).join(''):'<tr><td colspan="6" class="empty">本区间暂无'+(kind==='in'?'净流入':'净流出')+'产品</td></tr>')+'</tbody></table></div></article>';
 }).join('');
})();


(()=>{
const controls=new WeakMap();let scheduled=false;
const nameFor=table=>{
 const local=table.closest('.fuguo-ranking-card,.peer-detail,.newfund-full-table,.newfund-summary-card,.direction-board,.chart-card,.market-category-detail,.peer-catalog');
 return local?.querySelector('h3,h4')?.textContent?.trim()||table.closest('section.panel')?.querySelector('h2')?.textContent?.trim()||'ETF数据表';
};
async function exportTable(table,button,status){
 const scroll={x:scrollX,y:scrollY};let host;
 button.disabled=true;button.textContent='正在导出…';status.textContent='';
 try{
  await document.fonts.ready;
  const title=nameFor(table),width=Math.ceil(Math.max(table.scrollWidth,table.getBoundingClientRect().width));
  host=document.createElement('div');host.className='table-export-sheet';host.style.cssText='position:absolute;left:-100000px;top:0;width:'+width+'px;z-index:-1';
  const heading=document.createElement('h3');heading.textContent=title;
  const caption=document.createElement('p');caption.className='table-export-caption';caption.textContent='ETF数据看板 · '+D.periodLabel+' · '+D.range;
  const clone=table.cloneNode(true),original=[table,...table.querySelectorAll('*')],copies=[clone,...clone.querySelectorAll('*')];
  const properties=['display','font-family','font-size','font-weight','font-style','line-height','color','background-color','background-image','text-align','vertical-align','white-space','word-break','overflow-wrap','padding-top','padding-bottom','padding-left','padding-right','border-top','border-right','border-bottom','border-left','border-collapse','border-spacing','border-radius','box-sizing','width','min-width','max-width','height','grid-template-columns','grid-template-rows','grid-column','grid-row','gap','align-items','justify-content','flex-direction','flex-wrap','flex','margin-top','margin-bottom','margin-left','margin-right'];
  copies.forEach((node,i)=>{const style=getComputedStyle(original[i]);for(const property of properties)node.style.setProperty(property,style.getPropertyValue(property),'important');node.removeAttribute('id');node.style.setProperty('position','static','important');node.style.setProperty('transform','none','important');node.style.setProperty('animation','none','important');if(style.textOverflow==='ellipsis'){node.style.setProperty('white-space','normal','important');node.style.setProperty('overflow','visible','important');node.style.setProperty('text-overflow','clip','important');}});
  clone.style.setProperty('width',width+'px','important');clone.style.setProperty('max-height','none','important');clone.style.setProperty('overflow','visible','important');clone.style.setProperty('table-layout','fixed','important');
  host.append(heading,caption,clone);document.body.append(host);
  await new Promise(requestAnimationFrame);
  const bounds=host.getBoundingClientRect(),scale=Math.min(2,16000/Math.max(bounds.width,bounds.height),Math.sqrt(40000000/(bounds.width*bounds.height)));
  const canvas=await html2canvas(host,{backgroundColor:'#fff',scale,logging:false,windowWidth:Math.max(innerWidth,width+36),windowHeight:innerHeight,scrollX:0,scrollY:0});
  const blob=await new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('图片生成失败')),'image/png'));
  const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=(title+'_'+D.periodLabel+'_'+window.ETF_DATA_META.nominalRecordDate).replace(/[\\/:*?"<>|]/g,'_')+'.png';link.click();setTimeout(()=>URL.revokeObjectURL(url),60000);status.textContent='图片已导出';
 }catch(error){status.textContent='导出失败，请重试';console.error('Table export failed',error)}
 finally{host?.remove();button.disabled=false;button.textContent='导出图片';if(Math.abs(scrollY-scroll.y)>1||Math.abs(scrollX-scroll.x)>1)scrollTo({left:scroll.x,top:scroll.y,behavior:'instant'});}
}
function sync(){scheduled=false;
 document.querySelectorAll('.table-export-tools').forEach(toolbar=>{if(!toolbar._table?.isConnected)toolbar.remove();});
 for(const table of document.querySelectorAll('table,.market-summary')){
  if(table.closest('.table-export-sheet')||(table.tagName==='TABLE'&&!table.tHead))continue;
  const visible=table.getClientRects().length>0&&table.getBoundingClientRect().width>0;let toolbar=controls.get(table);
  if(!toolbar&&visible){const wrapper=table.matches('.market-summary')?table:table.closest('.tablewrap,.peer-table-wrap,.source-table-wrap');if(!wrapper)continue;toolbar=document.createElement('div');toolbar.className='table-export-tools';toolbar._table=table;toolbar.dataset.html2canvasIgnore='true';const button=document.createElement('button');button.type='button';button.className='table-export-button';button.textContent='导出图片';button.setAttribute('aria-label','导出'+nameFor(table)+'表格图片');const status=document.createElement('span');status.className='table-export-status';status.setAttribute('role','status');button.onclick=()=>exportTable(table,button,status);toolbar.append(status,button);wrapper.before(toolbar);controls.set(table,toolbar);}
  if(toolbar)toolbar.hidden=!visible;
 }
}
new MutationObserver(records=>{if(records.every(r=>r.target.nodeType===1&&r.target.closest('.nav,.dashboard-nav,.period-switcher')))return;if(!scheduled){scheduled=true;requestAnimationFrame(sync)}}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
window.addEventListener('resize',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(sync)}});sync();
})();

}};