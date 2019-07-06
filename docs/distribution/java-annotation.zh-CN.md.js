webpackJsonp([26],{1299:function(n,a){n.exports={content:["article",["h2","\u4ec0\u4e48\u662f\u6ce8\u89e3"],["p","\u6ce8\u89e3\u662f\u4e00\u79cd\u5143\u6570\u636e\uff0c\u53ef\u4ee5\u63d0\u4f9b\u4e0d\u5c5e\u4e8e\u6210\u8bed\u672c\u7701\u7684\u7a0b\u5e8f\u6570\u636e\uff0c\u6ce8\u89e3\u5bf9\u4ed6\u4eec\u6ce8\u91ca\u7684\u4ee3\u7801\u6ca1\u6709\u76f4\u63a5\u5f71\u54cd\u3002"],["h2","\u6ce8\u89e3\u7684\u5999\u7528"],["ul",["li",["p","\u4e3a\u7f16\u8bd1\u5668\u63d0\u4f9b\u4fe1\u606f:  \u7f16\u8bd1\u5668\u53ef\u4ee5\u4f7f\u7528",["code","Annotations"]," \u6765\u68c0\u6d4b\u7f16\u8bd1\u9519\u8bef\u548c\u544a\u8b66\uff0c\u5982",["code","@SuppressWarnings, @Deprecated"]]],["li",["p","\u7f16\u8bd1\u65f6\u5904\u7406: \u865a\u62df\u673a\u53ef\u4ee5\u901a\u8fc7",["code","annotation"],"\u4fe1\u606f,\u4f8b\u5982\u901a\u8fc7AbstractProcessor\u751f\u6210\u76f8\u5e94\u7684Class, XML\u6587\u4ef6,"]],["li",["p","\u8fd0\u884c\u65f6\u5904\u7406: \u8fd0\u884c\u65f6\u901a\u8fc7\u53cd\u5c04\u53ef\u4ee5\u4ece\u6ce8\u89e3\u4e2d\u83b7\u53d6\u989d\u5916\u7684\u53c2\u6570\u914d\u7f6e\u4fe1\u606f"]]],["h2","\u5b9a\u4e49\u6ce8\u89e3"],["ul",["li",["p","\u6ce8\u89e3\u4ee5",["code","@"],"\u5f00\u5934\uff0c\u544a\u8bc9\u7f16\u8bd1\u5668\u540e\u9762\u7684\u5b57\u7b26\u4e32\u4e3a\u6ce8\u89e3\uff0c\u5982",["code","@Entity"],",Entity\u5c31\u662f\u4e00\u4e2a\u6ce8\u89e3\uff0c"]],["li",["p","\u6ce8\u89e3\u53ef\u4ee5\u5305\u542b\u5143\u7d20\uff0c\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\uff0c\u5219\u5143\u7d20\u540d\u53ef\u4ee5\u7701\u7565\uff0c"]]],["pre",{lang:null,highlighted:'@<span class="token function">Author</span><span class="token punctuation">(</span>\n   name <span class="token operator">=</span> <span class="token string">"Jet Qin"</span><span class="token punctuation">,</span>\n   date <span class="token operator">=</span> <span class="token string">"3/27/2003"</span>\n<span class="token punctuation">)</span>'},["code",'@Author(\n   name = "Jet Qin",\n   date = "3/27/2003"\n)']],["ul",["li",["p","\u6ce8\u89e3\u5982\u679c\u4e0d\u5305\u542b\u53c2\u6570\uff0c\u5219\u53ef\u4ee5\u7701\u7565\u62ec\u53f7"]]],["pre",{lang:null,highlighted:'@<span class="token function">Author</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"Jet Qin"</span><span class="token punctuation">)</span>\n<span class="token variable">@EBook</span>\nclass MyClass { <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> }'},["code",'@Author(name = "Jet Qin")\n@EBook\nclass MyClass { ... }']],["ul",["li",["p","\u6ce8\u89e3\u53ef\u4ee5\u4f7f\u7528\u5728\u7c7b\uff0c\u5c5e\u6027\uff0c\u65b9\u6cd5\u4ee5\u53ca\u5176\u4ed6\u7a0b\u5e8f\u5143\u7d20\u4e4b\u524d"]]],["pre",{lang:null,highlighted:'@<span class="token function">Table</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"Entity"</span><span class="token punctuation">)</span>           <span class="token operator">/</span><span class="token operator">/</span> \u7c7b\nclass Entity{\n\n    @<span class="token function">Column</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"ID"</span><span class="token punctuation">)</span>\n    private String ID<span class="token comment" spellcheck="true">;          //\u5c5e\u6027</span>\n\n    <span class="token variable">@Getter</span>\n    private String <span class="token function">getID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{     <span class="token operator">/</span><span class="token operator">/</span>\u65b9\u6cd5\n        return this<span class="token punctuation">.</span>ID<span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'@Table(name="Entity")           // \u7c7b\nclass Entity{\n\n    @Column(name="ID")\n    private String ID;          //\u5c5e\u6027\n\n    @Getter\n    private String getID(){     //\u65b9\u6cd5\n        return this.ID;\n    }\n}']],["h2","\u5143\u6ce8\u89e3"],["p",["code","java.lang.annotation"],"\u4e2d\u5b9a\u4e49\u4e86\u4e00\u4e9b\u6ce8\u89e3\uff0c\u53ef\u4ee5\u88ab\u7528\u5728\u5176\u4ed6\u6ce8\u89e3\u4e4b\u4e0a\uff0c\u79f0\u4e3a\u5143\u6ce8\u89e3"],["p","@Retention: \u6307\u660e\u6ce8\u89e3\u5982\u4f55\u5b58\u50a8"],["ul",["li",["p","RetentionPolicy.SOURCE \u2013 \u6ce8\u89e3\u4e4b\u4fdd\u7559\u5728\u6e90\u6587\u4ef6\u4e2d\uff0c\u4f1a\u88ab\u7f16\u8bd1\u5668\u5ffd\u7565"]],["li",["p","RetentionPolicy.CLASS \u2013 \u6ce8\u89e3\u53ef\u4ee5\u88ab\u7f16\u8bd1\u5668\u5728\u7f16\u8bd1\u65f6\u8bbf\u95ee\uff0cJVM\u4f1a\u5ffd\u7565."]],["li",["p","RetentionPolicy.RUNTIME \u2013 JVM\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u8bbf\u95ee."]]],["p","@Documented: \u901a\u8fc7javadoc\u53ef\u4ee5\u751f\u6210\u5bf9\u5e94\u7684java\u6587\u6863\n@Target: \u9650\u5236\u6ce8\u89e3\u5e94\u7528\u5728\u4f55\u79cd\u7c7b\u578b\u6570\u636e\u4e0a"],["ul",["li",["p","ElementType.ANNOTATION_TYPE: \u5e94\u7528\u5728\u6ce8\u89e3\u7c7b\u578b\u4e0a."]],["li",["p","ElementType.CONSTRUCTOR: \u5e94\u7528\u5728\u6784\u9020\u51fd\u6570\u4e0a."]],["li",["p","ElementType.FIELD: \u5e94\u7528\u5728\u7d2f\u7684\u5c5e\u6027\u548c\u5143\u7d20\u4e0a"]],["li",["p","ElementType.LOCAL_VARIABLE: \u5e94\u7528\u5728\u672c\u5730\u53d8\u91cf\u4e0a."]],["li",["p","ElementType.METHOD: \u5e94\u7528\u5728\u65b9\u6cd5\u4e0a ."]],["li",["p","ElementType.PACKAGE: \u5e94\u7528\u5728\u5305\u4e0a."]],["li",["p","ElementType.PARAMETER: \u5e94\u7528\u5728\u53c2\u6570."]],["li",["p","ElementType.TYPE: \u5e94\u7528\u5728\u7c7b\u578b\u4e0a."]]],["p","@Inherited:\n",["code","@Inherited"],"\u6307\u660e\u6b64\u6ce8\u89e3\u662f\u4ece\u7236\u7c7b\u7ee7\u627f\u7684, \u53ea\u80fd\u7528\u4e8e\u7c7b\u7684\u58f0\u660e\u4e0a."],["p","@Repeatable:\n",["code","@Repeatable"],"\u662f\u5728Java8 \u4e2d\u5f15\u8fdb\u7684,\u4f7f\u7528",["code","@Repeatable"],"\u6ce8\u89e3, \u6307\u660e\u6b64\u6ce8\u89e3\u53ef\u4ee5\u88ab\u591a\u6b21\u5e94\u7528\u5728\u5176\u4ed6\u5c5e\u6027\u4e0a\u3002"]],meta:{order:10,title:"Java \u6ce8\u89e3",type:"\u5165\u95e8",filename:"docs/distribution/java-annotation.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4ec0\u4e48\u662f\u6ce8\u89e3",title:"\u4ec0\u4e48\u662f\u6ce8\u89e3"},"\u4ec0\u4e48\u662f\u6ce8\u89e3"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6ce8\u89e3\u7684\u5999\u7528",title:"\u6ce8\u89e3\u7684\u5999\u7528"},"\u6ce8\u89e3\u7684\u5999\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b9a\u4e49\u6ce8\u89e3",title:"\u5b9a\u4e49\u6ce8\u89e3"},"\u5b9a\u4e49\u6ce8\u89e3"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5143\u6ce8\u89e3",title:"\u5143\u6ce8\u89e3"},"\u5143\u6ce8\u89e3"]]]}}});