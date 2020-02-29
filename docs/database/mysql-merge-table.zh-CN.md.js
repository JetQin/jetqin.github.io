webpackJsonp([45],{1288:function(s,a){s.exports={content:["article",["p","Mysql \u63d0\u4f9b\u4e86",["code","MERGE storage engine"],"(\u5373MRG_MyISAM)\u6765\u5408\u5e76",["code","MyISAM"],"\u8868. \u5408\u5e76\u7684\u524d\u63d0\u5fc5\u987b\u4fdd\u8bc1\u6240\u5408\u5e76\u7684\u8868\u7684\u5217\u7684\u7c7b\u578b\uff0c\u540d\u79f0\uff0c\u987a\u5e8f\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u5217\u7684\u7d22\u5f15\u53ca\u987a\u5e8f\u90fd\u662f\u4e00\u81f4\u7684"],["p","\u5728\u5b50\u8868\u4e2d\u5217",["code","a"],"\u662f\u81ea\u589e\u4e3b\u952e\uff0c\u4f46\u662f\u5728\u5408\u5e76\u4e4b\u540e\u7684\u8868",["code","total"],"\u4e2d\uff0c\u5217",["code","a"],"\u53ea\u662f\u5efa\u7acb\u4e86\u7d22\u5f15\uff0c\u5e76\u975e\u662f\u4e3b\u952e\u7d22\u5f15\uff0c\u8fd9\u662f\u56e0\u4e3a\u4e3b\u8868\u4e2d\u4e0d\u80fd\u5f3a\u5236\u521b\u5efa\u552f\u4e00\u7d22\u5f15"],["pre",{lang:null,highlighted:'#\u521b\u5efa\u5b50\u8868<span class="token number">1</span>\nCREATE TABLE t1 <span class="token punctuation">(</span> a INT <span class="token operator">NOT</span> <span class="token keyword">NULL</span> AUTO_INCREMENT PRIMARY KEY<span class="token punctuation">,</span>   message <span class="token function">CHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span> ENGINE<span class="token operator">=</span>MyISAM<span class="token comment" spellcheck="true">;</span>\n\n#\u521b\u5efa\u5b50\u8868<span class="token number">1</span>\nCREATE TABLE t2 <span class="token punctuation">(</span> a INT <span class="token operator">NOT</span> <span class="token keyword">NULL</span> AUTO_INCREMENT PRIMARY KEY<span class="token punctuation">,</span>   message <span class="token function">CHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span> ENGINE<span class="token operator">=</span>MyISAM<span class="token comment" spellcheck="true">;</span>\n\nINSERT INTO t1 <span class="token punctuation">(</span>message<span class="token punctuation">)</span> VALUES <span class="token punctuation">(</span><span class="token string">\'Testing1\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">\'table1\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">\'t1\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\nINSERT INTO t2 <span class="token punctuation">(</span>message<span class="token punctuation">)</span> VALUES <span class="token punctuation">(</span><span class="token string">\'Testing2\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">\'table2\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">\'t2\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n# \u521b\u5efa\u4e3b\u8868\nCREATE TABLE total <span class="token punctuation">(</span>\n    a INT <span class="token operator">NOT</span> <span class="token keyword">NULL</span> AUTO_INCREMENT<span class="token punctuation">,</span>\n    message <span class="token function">CHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">INDEX</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    ENGINE<span class="token operator">=</span>MERGE UNION<span class="token operator">=</span><span class="token punctuation">(</span>t1<span class="token punctuation">,</span>t2<span class="token punctuation">)</span> INSERT_METHOD<span class="token operator">=</span>LAST<span class="token comment" spellcheck="true">;</span>'},["code","#\u521b\u5efa\u5b50\u88681\nCREATE TABLE t1 ( a INT NOT NULL AUTO_INCREMENT PRIMARY KEY,   message CHAR(20)) ENGINE=MyISAM;\n\n#\u521b\u5efa\u5b50\u88681\nCREATE TABLE t2 ( a INT NOT NULL AUTO_INCREMENT PRIMARY KEY,   message CHAR(20)) ENGINE=MyISAM;\n\nINSERT INTO t1 (message) VALUES ('Testing1'),('table1'),('t1');\nINSERT INTO t2 (message) VALUES ('Testing2'),('table2'),('t2');\n\n# \u521b\u5efa\u4e3b\u8868\nCREATE TABLE total (\n    a INT NOT NULL AUTO_INCREMENT,\n    message CHAR(20), INDEX(a))\n    ENGINE=MERGE UNION=(t1,t2) INSERT_METHOD=LAST;"]],["p","\u67e5\u8be2\u7ed3\u679c"],["pre",{lang:null,highlighted:'<span class="token keyword">select</span> <span class="token operator">*</span> from t1 <span class="token comment" spellcheck="true">;</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| a | message  |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| <span class="token number">1</span> | Testing1 |\n| <span class="token number">2</span> | table1   |\n| <span class="token number">3</span> | t1       |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n\n<span class="token keyword">select</span> <span class="token operator">*</span> from t2<span class="token comment" spellcheck="true">;</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| a | message  |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| <span class="token number">1</span> | Testing2 |\n| <span class="token number">2</span> | table2   |\n| <span class="token number">3</span> | t2       |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n\n<span class="token keyword">select</span> <span class="token operator">*</span> from total<span class="token comment" spellcheck="true">;</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| a | message  |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| <span class="token number">1</span> | Testing1 |\n| <span class="token number">2</span> | table1   |\n| <span class="token number">3</span> | t1       |\n| <span class="token number">1</span> | Testing2 |\n| <span class="token number">2</span> | table2   |\n| <span class="token number">3</span> | t2       |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>'},["code","select * from t1 ;\n+---+----------+\n| a | message  |\n+---+----------+\n| 1 | Testing1 |\n| 2 | table1   |\n| 3 | t1       |\n+---+----------+\n\nselect * from t2;\n+---+----------+\n| a | message  |\n+---+----------+\n| 1 | Testing2 |\n| 2 | table2   |\n| 3 | t2       |\n+---+----------+\n\nselect * from total;\n+---+----------+\n| a | message  |\n+---+----------+\n| 1 | Testing1 |\n| 2 | table1   |\n| 3 | t1       |\n| 1 | Testing2 |\n| 2 | table2   |\n| 3 | t2       |\n+---+----------+"]],["h2","\u5220\u9664\u64cd\u4f5c"],["p",["strong","\u4f7f\u7528delete\u8bed\u53e5\u64cd\u4f5c\u4e3b\u8868\u5220\u9664\u65f6\uff0c\u53ef\u80fd\u4f1a\u540c\u65f6\u5f71\u54cd\u591a\u4e2a\u5b50\u8868\uff0c\u6240\u4ee5\u521b\u5efa\u5b50\u8868\u65f6\u4e3b\u952eID\u6700\u597d\u4f7f\u7528\u5168\u5c40\u552f\u4e00"]],["pre",{lang:null,highlighted:'delete from total where a <span class="token operator">=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">2</span> rows affected <span class="token punctuation">(</span><span class="token number">0.03</span> sec<span class="token punctuation">)</span>'},["code","delete from total where a = 1;\nQuery OK, 2 rows affected (0.03 sec)"]],["h2","\u4f18\u7f3a\u70b9\u5bf9\u6bd4"],["ul",["li",["p",["strong","\u4f18\u70b9"]],["ul",["li",["p","\u66f4\u597d\u7684\u67e5\u8be2\u6027\u80fd\uff0c\u4f7f\u7528\u4e3b\u8868\u67e5\u8be2\u6bd4\u67e5\u8be2\u5355\u4e2a\u5927\u6570\u636e\u8868\u6709\u66f4\u9ad8\u7684\u67e5\u8be2\u6027\u80fd"]],["li",["p","Mysql\u8868\u7684\u5927\u5c0f\u4f9d\u8d56\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u7684\u9650\u5236\uff0c\u800cMERGE table\u65e0\u6b64\u9650\u5236"]]]],["li",["p",["strong","\u7f3a\u70b9"]],["ul",["li",["p","\u4e0d\u80fd\u521b\u5efa\u5168\u6587\u672c\u7d22\u5f15, \u552f\u4e00\u6027\u7d22\u5f15"],["pre",{lang:null,highlighted:' create fulltext index ft_index on <span class="token function">total</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n ERROR <span class="token number">1214</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span><span class="token punctuation">:</span> The used table type doesn\'t support FULLTEXT indexes'},["code"," create fulltext index ft_index on total(message);\n ERROR 1214 (HY000): The used table type doesn't support FULLTEXT indexes"]]]]]]],meta:{order:2,title:"MySQL \u5206\u8868",type:"\u5165\u95e8",filename:"docs/database/mysql-merge-table.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5220\u9664\u64cd\u4f5c",title:"\u5220\u9664\u64cd\u4f5c"},"\u5220\u9664\u64cd\u4f5c"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f18\u7f3a\u70b9\u5bf9\u6bd4",title:"\u4f18\u7f3a\u70b9\u5bf9\u6bd4"},"\u4f18\u7f3a\u70b9\u5bf9\u6bd4"]]]}}});