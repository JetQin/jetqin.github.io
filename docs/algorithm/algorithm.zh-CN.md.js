webpackJsonp([45],{1301:function(n,s){n.exports={content:["article",["h2","\u95ee\u9898\u63cf\u8ff0"],["p","\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u8f93\u5165\u662f\u4e00\u4e2a\u65e0\u7b26\u53f7\u6574\u6570\uff0c\u8fd4\u56de\u5176\u4e8c\u8fdb\u5236\u8868\u8fbe\u5f0f\u4e2d\u6570\u5b57\u4f4d\u6570\u4e3a \u20181\u2019 \u7684\u4e2a\u6570\uff08\u4e5f\u88ab\u79f0\u4e3a",["a",{title:null,href:"https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E9%87%8D%E9%87%8F"},"\u6c49\u660e\u91cd\u91cf"],"\uff09\u3002"],["p",["strong","\u793a\u4f8b :"]],["pre",{lang:null,highlighted:'\u8f93\u5165<span class="token punctuation">:</span> <span class="token number">11</span>\n\u8f93\u51fa<span class="token punctuation">:</span> <span class="token number">3</span>\n\u89e3\u91ca<span class="token punctuation">:</span> \u6574\u6570 <span class="token number">11</span> \u7684\u4e8c\u8fdb\u5236\u8868\u793a\u4e3a <span class="token number">00000000000000000000000000001011</span>'},["code","\u8f93\u5165: 11\n\u8f93\u51fa: 3\n\u89e3\u91ca: \u6574\u6570 11 \u7684\u4e8c\u8fdb\u5236\u8868\u793a\u4e3a 00000000000000000000000000001011"]],["h2","\u89e3\u51b3\u65b9\u6cd51"],["p","\u6bcf\u4e00\u4f4d\u548c",["code","0x01"],"\u4f5c\u4e0e\u8fd0\u7b97\uff0c"],["pre",{lang:null,highlighted:'<span class="token number">00001011</span> <span class="token operator">&amp;</span> <span class="token number">00000001</span>  <span class="token operator">=</span> <span class="token number">1</span>\n<span class="token number">00000101</span> <span class="token operator">&amp;</span> <span class="token number">00000001</span>  <span class="token operator">=</span> <span class="token number">1</span>\n<span class="token number">00000010</span> <span class="token operator">&amp;</span> <span class="token number">00000001</span>  <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token number">00000001</span> <span class="token operator">&amp;</span> <span class="token number">00000001</span>  <span class="token operator">=</span> <span class="token number">1</span>\n\u518d\u5411\u53f3\u79fb\u52a8<span class="token number">1</span>\u4f4dn <span class="token operator">=</span> <span class="token number">0</span>\uff0c \u8df3\u51fa\u5faa\u73af'},["code","00001011 & 00000001  = 1\n00000101 & 00000001  = 1\n00000010 & 00000001  = 0\n00000001 & 00000001  = 1\n\u518d\u5411\u53f3\u79fb\u52a81\u4f4dn = 0\uff0c \u8df3\u51fa\u5faa\u73af"]],["pre",{lang:null,highlighted:'public class Solution {\n     public int <span class="token function">hammingWeight</span><span class="token punctuation">(</span>int n<span class="token punctuation">)</span> {\n         int count <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n         <span class="token function">while</span><span class="token punctuation">(</span>n !<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>{\n            <span class="token function">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>\n            {\n                count <span class="token operator">=</span> count <span class="token operator">+</span><span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n            }\n            n <span class="token operator">=</span> n <span class="token operator">></span><span class="token operator">></span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n         }\n         return count<span class="token comment" spellcheck="true">;</span>\n     }\n}'},["code","public class Solution {\n     public int hammingWeight(int n) {\n         int count = 0;\n         while(n != 0){\n            if((n & 1) == 1)\n            {\n                count = count +1;\n            }\n            n = n >> 1;\n         }\n         return count;\n     }\n}"]],["h2","\u89e3\u51b3\u65b9\u6cd52"],["p","\u628a\u4e00\u4e2a\u6574\u6570n\u51cf\u53bb1\uff0c\u518d\u548c\u539f\u6765\u7684\u6574\u6570\u4e0e\u8fd0\u7b97\uff0c\u4f1a\u628a\u8be5\u6574\u6570\u7684\u6700\u53f3\u8fb9\u76841\u53d8\u62100\uff0c\u90a3\u4e48\uff0c\u4e00\u4e2a\u6574\u6570\u7684\u4e8c\u8fdb\u5236\u4e2d\u6709\u591a\u5c11\u4e2a1"],["pre",{lang:null,highlighted:'<span class="token number">1</span> <span class="token operator">=</span><span class="token operator">></span>  <span class="token number">0001</span> <span class="token operator">-</span> <span class="token number">0001</span> <span class="token operator">=</span> <span class="token number">0</span>    <span class="token number">1</span> <span class="token operator">&amp;</span> <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">0</span>        \n<span class="token number">2</span> <span class="token operator">=</span><span class="token operator">></span>  <span class="token number">0010</span> <span class="token operator">-</span> <span class="token number">0001</span> <span class="token operator">=</span> <span class="token number">1</span>    <span class="token number">1</span> <span class="token operator">&amp;</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token number">3</span> <span class="token operator">=</span><span class="token operator">></span>  <span class="token number">0011</span> <span class="token operator">-</span> <span class="token number">0001</span> <span class="token operator">=</span> <span class="token number">2</span>    <span class="token number">2</span> <span class="token operator">&amp;</span> <span class="token number">3</span> <span class="token operator">=</span> <span class="token number">2</span>\n<span class="token number">4</span> <span class="token operator">=</span><span class="token operator">></span>  <span class="token number">0100</span> <span class="token operator">-</span> <span class="token number">0001</span> <span class="token operator">=</span> <span class="token number">3</span>    <span class="token number">3</span> <span class="token operator">&amp;</span> <span class="token number">4</span> <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token number">8</span> <span class="token operator">=</span><span class="token operator">></span>  <span class="token number">1000</span> <span class="token operator">-</span> <span class="token number">0001</span> <span class="token operator">=</span> <span class="token number">7</span>    <span class="token number">7</span> <span class="token operator">&amp;</span> <span class="token number">8</span> <span class="token operator">=</span> <span class="token number">0</span>'},["code","1 =>  0001 - 0001 = 0    1 & 0 = 0        \n2 =>  0010 - 0001 = 1    1 & 2 = 0\n3 =>  0011 - 0001 = 2    2 & 3 = 2\n4 =>  0100 - 0001 = 3    3 & 4 = 0\n...\n8 =>  1000 - 0001 = 7    7 & 8 = 0"]],["pre",{lang:null,highlighted:'public class Solution {\n    public int <span class="token function">hammingWeight</span><span class="token punctuation">(</span>int n<span class="token punctuation">)</span> {\n         int count <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n         <span class="token function">while</span><span class="token punctuation">(</span>n !<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>{\n                count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n                n <span class="token operator">=</span> n <span class="token operator">&amp;</span> n <span class="token operator">-</span><span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n         }\n         return count<span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code","public class Solution {\n    public int hammingWeight(int n) {\n         int count = 0;\n         while(n != 0){\n                count = count + 1;\n                n = n & n -1;\n         }\n         return count;\n    }\n}"]],["p",["a",{title:null,href:"https://leetcode-cn.com/submissions/detail/10306578/"},"Leet code \u5730\u5740"]," \u6267\u884c600\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u82b1\u8d39\u7684\u65f6\u95f4\u4e3a3ms"]],meta:{order:1,title:"\u4f4d1\u7684\u4e2a\u6570",type:"\u5165\u95e8",filename:"docs/algorithm/algorithm.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u95ee\u9898\u63cf\u8ff0",title:"\u95ee\u9898\u63cf\u8ff0"},"\u95ee\u9898\u63cf\u8ff0"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u89e3\u51b3\u65b9\u6cd51",title:"\u89e3\u51b3\u65b9\u6cd51"},"\u89e3\u51b3\u65b9\u6cd51"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u89e3\u51b3\u65b9\u6cd52",title:"\u89e3\u51b3\u65b9\u6cd52"},"\u89e3\u51b3\u65b9\u6cd52"]]]}}});