# linked-data-proxy

# Instruction

1. 執行 start_app.bat
2. http://localhost:3000/zh.wikipedia.org/查詢
3. http://localhost/linked-data-proxy/usage-example.html

# TODO
- 查詢多個頁面時，集中多模組的ua
- 短名字設定
- 查詢多個頁面時，加分減分的做法？
- 查詢一個會擋人的頁面

# npm
npm install universal-analytics --save
npm install follow-redirects --save
npm install node-uuid --save
npm install cookies --save

# REFERENCE

- http://expressjs.com/zh-tw/guide/routing.html
- http://docs.sequelizejs.com/en/v3/docs/models-usage/
- universal-analytics: https://github.com/peaksandpies/universal-analytics
- GA: https://analytics.google.com/analytics/web/#report/defaultid/a46464710w135478152p139632692/
- GA即時: https://analytics.google.com/analytics/web/#realtime/rt-content/a46464710w135478152p139632692/