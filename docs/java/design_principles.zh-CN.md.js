webpackJsonp([13],{1267:function(n,e){n.exports={content:["article",["h2","\u5355\u4e00\u804c\u8d23\u539f\u5219(Single Responsibility Principle)"],["p","\u5355\u4e00\u804c\u8d23\u539f\u5219\u4e5f\u5c31\u662f\u5355\u4e2a\u65b9\u6cd5\uff0c\u7c7b\u6216\u8005\u63a5\u53e3\u53ea\u6709\u4e00\u4e2a\u804c\u8d23\uff0c\u53ea\u8d1f\u8d23\u4e00\u4ef6\u4e8b\u60c5."],["p","\u4f18\u70b9\uff1a"],["ul",["li",["p","\u7c7b\u7684\u590d\u6742\u6027\u964d\u4f4e\uff0c\u5b9e\u73b0\u4ec0\u4e48\u804c\u8d23\u90fd\u6709\u6e05\u6670\u660e\u786e\u7684\u5b9a\u4e49"]],["li",["p","\u53ef\u8bfb\u6027\u63d0\u9ad8"]],["li",["p","\u53ef\u7ef4\u62a4\u884c\u63d0\u9ad8"]],["li",["p","\u53d8\u66f4\u5f15\u8d77\u7684\u98ce\u9669\u964d\u4f4e\uff0c\u53d8\u66f4\u53ea\u4f1a\u5bf9\u5355\u4e00\u63a5\u53e3\uff0c\u548c\u76f8\u5e94\u7684\u5b9e\u73b0\u7c7b\u6709\u5f71\u54cd"]]],["h2","\u91cc\u6c0f\u66ff\u6362\u539f\u5219"],["p","\u5982\u679c\u5bf9\u6bcf\u4e00\u4e2a\u7c7b\u578b\u4e3a",["code","S"],"\u7684\u5bf9\u8c61",["code","o1"],",\u90fd\u6709\u7c7b\u578b\u4e3a",["code","T"],"\u7684\u5bf9\u8c61",["code","o2"],",\u4f7f\u5f97\u4ee5",["code","T"],"\u5b9a\u4e49\u7684\u6240\u6709\u7a0b\u5e8f",["code","P"],"\u5728\u6240\u6709\u7684\u5bf9\u8c61",["code","o1"],"\u90fd\u4ee3\u6362\u6210",["code","o2"],"\u65f6\uff0c\u7a0b\u5e8f",["code","P"],"\u7684\u884c\u4e3a\u6ca1\u6709\u53d1\u751f\u53d8\u5316\uff0c\u90a3\u4e48\u7c7b\u578b",["code","S"],"\u662f\u7c7b\u578b",["code","T"],"\u7684\u5b50\u7c7b\u578b\u3002 \u5373\u6240\u6709\u5f15\u7528\u7236\u7c7b\u7684\u5730\u65b9\u90fd\u80fd\u4f7f\u7528\u5176\u5b50\u7c7b\u4ee3\u6362\u3002\n\u5177\u6709\u5982\u4e0b\u7279\u6027\uff1a"],["ul",["li",["p","\u5b50\u7c7b\u5fc5\u987b\u5b8c\u5168\u5b9e\u73b0\u7236\u7c7b\u7684\u65b9\u6cd5"]],["li",["p","\u5b50\u7c7b\u53ef\u4ee5\u6709\u81ea\u5df1\u7684\u7279\u6027"]]],["h2","\u4f9d\u8d56\u5012\u7f6e\u539f\u5219(Dependence Inversion Principle)"],["p","\u9ad8\u5c42\u6a21\u5757\u4e0d\u5e94\u8be5\u4f9d\u8d56\u5e95\u5c42\u6a21\u5757\uff0c\u4e24\u8005\u90fd\u5e94\u8be5\u4f9d\u8d56\u5176\u62bd\u8c61\uff0c \u62bd\u8c61\u4e0d\u5e94\u8be5\u4f9d\u8d56\u7ec6\u8282\uff0c\u7ec6\u8282\u5e94\u8be5\u4f9d\u8d56\u62bd\u8c61"],["p","\u53ef\u4ee5\u901a\u8fc7\u4e09\u79cd\u65b9\u6cd5\u6765\u5b9e\u73b0\u4f9d\u8d56"],["ul",["li",["p","\u6784\u9020\u51fd\u6570\u4f20\u9012\u4f9d\u8d56\u961f\u5f62"]],["li",["p","Setter\u65b9\u6cd5\u4f20\u9012\u4f9d\u8d56\u5bf9\u8c61"]],["li",["p","\u63a5\u53e3\u58f0\u660e\u4f9d\u8d56\u5bf9\u8c61"]]],["pre",{lang:null,highlighted:'public interface Rule{\n\n    void <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\n\npublic interface Validator{\n\n    boolean <span class="token function">validate</span><span class="token punctuation">(</span>Rule rule<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n}\n\npublic class Test{\n    public <span class="token keyword">static</span> void <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>{\n        Rule rule <span class="token operator">=</span> new <span class="token function">EmptyRule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        Validator validator <span class="token operator">=</span> new <span class="token function">NameValidator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>rule<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code","public interface Rule{\n\n    void check();\n}\n\npublic interface Validator{\n\n    boolean validate(Rule rule);\n\n}\n\npublic class Test{\n    public static void main(String[] args){\n        Rule rule = new EmptyRule();\n        Validator validator = new NameValidator();\n        validator.validate(rule);\n    }\n}"]],["h2","\u63a5\u53e3\u9694\u79bb\u539f\u5219"],["p","\u5b9e\u73b0\u4e0d\u5e94\u8be5\u4f9d\u8d56\u5b83\u4e0d\u9700\u8981\u7684\u63a5\u53e3\uff0c\u5c3d\u91cf\u7b80\u5316\u63a5\u53e3\uff0c\u4fdd\u8bc1\u63a5\u53e3\u7684\u7b80\u6d01\u6027\u3002"],["p","\u63a5\u53e3\u5177\u6709\u5982\u4e0b\u7279\u70b9"],["ul",["li",["p","\u63a5\u53e3\u5c3d\u91cf\u5c0f\uff0c\u6ee1\u8db3\u5355\u4e00\u804c\u8d23\u539f\u5219"]],["li",["p","\u63a5\u53e3\u9ad8\u5185\u805a\uff0c\u51cf\u5c11\u5bf9\u5176\u4ed6\u63a5\u53e3\u7684\u4f9d\u8d56\u548c\u4ea4\u4e92"]]],["h2","\u8fea\u7c73\u7279\u6cd5\u5219(Least Knowledge Principle)"],["p","\u4e00\u4e2a\u5bf9\u8c61\u5bf9\u5176\u4ed6\u5bf9\u8c61\u6709\u6700\u5c11\u7684\u4e86\u89e3\uff0c\u53ea\u4e0e\u5176\u76f4\u63a5\u7684\u76f8\u5173\u7c7b\u8fdb\u884c\u4ea4\u4e92\uff0c\uff08\u5305\u62ec\u7ec4\u5408\uff0c\u805a\u5408\uff0c\u4f9d\u8d56\u7b49\u5173\u7cfb\uff09"],["p","\b\u5b9e\u73b0\u65f6\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"],["ul",["li",["p","\u53ea\u548c\u76f8\u5173\u670b\u53cb\u7c7b\u4ea4\u4e92"]],["li",["p","\u9650\u5236\u4e0e\u76ee\u6807\u7c7b\u76f8\u5173\u8054\u7684\u670b\u53cb\u7c7b\u7684\u516c\u5f00\u65b9\u6cd5\uff0c\u53ea\u516c\u5f00\u9700\u8981\u4ea4\u4e92\u7684\u65b9\u6cd5"]],["li",["p","\u8c28\u614e\u4f7f\u7528Serializable\u65b9\u6cd5"]]],["h2","\u5f00\u95ed\u539f\u5219"],["p","\u5b9e\u4f53\u7c7b\uff0c\u6a21\u5757\u51fd\u6570\u5e94\u8be5\u5bf9\u6269\u5c55\u5f00\u653e\uff0c\u5bf9\u4fee\u6539\u5173\u95ed\u3002"],["p","\u5f00\u95ed\u539f\u5219\u6709\u5982\u4e0b\u7279\u70b9:"],["ul",["li",["p","\u63d0\u9ad8\u7cfb\u7edf\u53ef\u7ef4\u62a4\u6027"]],["li",["p","\u9762\u5411\u5bf9\u8c61\u7684\u8bbe\u8ba1\u539f\u5219\u8981\u6c42"]]],["p","\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u6765\u6ee1\u8db3\u9700\u6c42\u53d8\u5316\uff1a"],["ul",["li",["p","\u4fee\u6539\u63a5\u53e3"]],["li",["p","\u4fee\u6539\u5b9e\u73b0\u7c7b"]],["li",["p","\u901a\u8fc7\u6269\u5c55\u7c7b\u5b9e\u73b0\u53d8\u5316"]]]],meta:{order:1,title:"\u8bbe\u8ba1\u539f\u5219",type:"\u5165\u95e8",filename:"docs/java/design_principles.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5355\u4e00\u804c\u8d23\u539f\u5219(Single-Responsibility-Principle)",title:"\u5355\u4e00\u804c\u8d23\u539f\u5219(Single Responsibility Principle)"},"\u5355\u4e00\u804c\u8d23\u539f\u5219(Single Responsibility Principle)"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u91cc\u6c0f\u66ff\u6362\u539f\u5219",title:"\u91cc\u6c0f\u66ff\u6362\u539f\u5219"},"\u91cc\u6c0f\u66ff\u6362\u539f\u5219"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f9d\u8d56\u5012\u7f6e\u539f\u5219(Dependence-Inversion-Principle)",title:"\u4f9d\u8d56\u5012\u7f6e\u539f\u5219(Dependence Inversion Principle)"},"\u4f9d\u8d56\u5012\u7f6e\u539f\u5219(Dependence Inversion Principle)"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u63a5\u53e3\u9694\u79bb\u539f\u5219",title:"\u63a5\u53e3\u9694\u79bb\u539f\u5219"},"\u63a5\u53e3\u9694\u79bb\u539f\u5219"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8fea\u7c73\u7279\u6cd5\u5219(Least-Knowledge-Principle)",title:"\u8fea\u7c73\u7279\u6cd5\u5219(Least Knowledge Principle)"},"\u8fea\u7c73\u7279\u6cd5\u5219(Least Knowledge Principle)"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5f00\u95ed\u539f\u5219",title:"\u5f00\u95ed\u539f\u5219"},"\u5f00\u95ed\u539f\u5219"]]]}}});