webpackJsonp([33],{1295:function($,e){$.exports={content:["article",["h2","e \u7684\u7531\u6765"],["p"," \u5047\u8bbe\u4f60\u548c\u94f6\u884c\u501f\u6b3e 1 \u5143\uff0c\u5e74\u5229\u606f\u662f 1\uff0c \u5219\u5230\u5e74\u672b\u4f60\u8981\u4ed8\u7ed9\u94f6\u884c\u672c\u606f\u5408\u8ba1"],["p","$$ 1 ",["em"," ( 1 + \\frac{100}{100}) "]," 1 = 2 $$"],["p","\u5982\u679c\u6309\u6708\u606f\u6536\u53d6\u7684\u8bdd\uff0c\u90a3\u4e48\u6bcf\u4e2a\u6708\u652f\u4ed8\u7684\u5229\u606f\u662f 1/12\uff0c\u90a3\u5230\u5e74\u672b\u9700\u8981\u652f\u4ed8\u7684\u672c\u606f\u5408\u8ba1\u662f"],["p","$$(1 * (1 + \\frac{1}{12}))^{12}=2.613035290224676$$"],["p","\u5982\u679c\u662f\u6309\u65e5\u606f\u6536\u53d6\u7684\u8bdd\uff0c\u90a3\u4e48\u6bcf\u5929\u652f\u4ed8\u7684\u5229\u606f\u662f1/365\uff0c\u90a3\u5230\u5e74\u672b\u9700\u8981\u652f\u4ed8\u7684\u672c\u606f\u5408\u8ba1\u662f"],["p","$$(1 * (1 + \\frac{1}{365}))^{365}=2.7145674820219727$$"],["p","\u5982\u679c\u662f\u6309\u5c0f\u65f6\u6536\u53d6\u7684\u8bdd\uff0c\u90a3\u4e48\u6bcf\u5c0f\u65f6\u9700\u8981\u652f\u4ed8\u7684\u5229\u606f\u662f 1/ 8760\uff0c\u90a3\u4e48\u5230\u5e74\u672b\u9700\u8981\u652f\u4ed8\u7684\u672c\u606f\u5408\u8ba1\u662f"],["p","$$(1 * (1 + \\frac{1}{8760}))^{8760}=2.7181266916179077$$"],["p","\u6211\u4eec\u53ef\u4ee5\u628a\u4e0a\u8ff0\u7684\u7ed3\u679c\u5f52\u7eb3\u4e3a\u5982\u4e0b\u516c\u5f0f\uff1a"],["p","$$e = \\lim_{x \\to \\infty} f(1 + \\frac{1}{x})^x = 2.7182818284590 $$"],["h2","\u8fdb\u4e00\u6b65\u603b\u7ed3"],["p","\u5047\u8bbe\u672c\u91d1\u662fP\uff0c\u5229\u606f\u662f R\uff0c\u501f\u6b3e\u5e74\u9650N\uff0c\u5219\u5230\u671f\u4e4b\u540e\u672c\u91d1\u5408\u8ba1\u9700\u8981\u8fd8\u6b3e"],["p","$$f = P (1 + \\frac{R}{N})^N$$"],["p","\u505a\u4e00\u4e0b\u4ee3\u6362,  \u4f7f\u7528\u5982\u4e0b\u7b49\u5f0f\u4ee3\u6362\uff0c"],["p","$${\\frac{1}{x}} = {\\frac{R}{N}}$$\n\u90a3\u4e48\uff1a"],["p","$$N = R * x$$"],["p","\u539f\u7b49\u5f0f\u7ecf\u8fc7\u53d8\u5f62\u4e4b\u540e\u53ef\u53d8\u4e3a\uff1a"],["p","$$f = \\lim_{x \\to \\infty} P ",["em"," (1 + \\frac{1}{x})^{R "]," x}$$"],["p","\u5f53x\u8d8b\u4e8e\b\u65e0\u7a77\u5927\u65f6\uff0c"],["p","$$f = P * e^R$$"],["p","\u5047\u8bbe\u4f60\u5411\u94f6\u884c\u501f\u6b3e1000\uff0c \u501f\u6b3e\u5229\u7387\u4e3a10%\uff0c \u501f\u6b3e\u5e74\u9650\u4e3a1\u5e74\uff0c\u90a3\u5230\u671f\u4e4b\u540e\u6240\u8981\u5f52\u8fd8\u7684\u672c\u91d1\u4e3a"],["p","$$1000 * (e^{0.1}) = 1105.1709180756477$$"],["p","2 \u5e74"],["p","$$1000 ",["em"," (e^{0.1}) "]," e^{0.1}= 1221.40275816017$$"],["p","3\u5e74"],["p","$$1000 ",["em"," (e^{0.1}) "]," e^{0.1} * e= 1221.40275816017$$"],["p","\u5047\u8bbe\u94f6\u884c\u7684\u5229\u606f\u662f10%\uff0c\u5229\u7528\u590d\u5229\u5982\u4f55\u624d\u80fd\u4f7f\u672c\u91d1\u5229\u606f\u5408\u8ba1\u6536\u5165\u7ffb\u500d\uff0c\u5373"],["p","$$e^{0.1 * T} =  2$$"],["p","\u4e24\u8fb9\u540c\u65f610\u6b21\u65b9, \u90a3\u4e48"],["p","$$e^T =  1024$$"],["p","\u90a3\u4e48 T, \u590d\u5229\u7684\u9b45\u529b\uff0c\b\u5c31\u5728\u8fd9\u91cc\uff0c\u64cd\u4f5c7\u6b21\u672c\u91d1\u7ffb\u500d"],["p","$$T = \\ln {2 ^ {10}} = 6.931471805599453$$"]],meta:{order:1,title:"\u81ea\u7136\u5e38\u6570e",type:"\u5165\u95e8",filename:"docs/algorithm/e-algorithm.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#e-\u7684\u7531\u6765",title:"e \u7684\u7531\u6765"},"e \u7684\u7531\u6765"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8fdb\u4e00\u6b65\u603b\u7ed3",title:"\u8fdb\u4e00\u6b65\u603b\u7ed3"},"\u8fdb\u4e00\u6b65\u603b\u7ed3"]]]}}});