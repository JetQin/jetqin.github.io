webpackJsonp([39],{1289:function(s,a){s.exports={content:["article",["p","\u67e5\u8be2\u8bed\u53e5\u7684\u6027\u80fd\u67e5\u8be2\uff0c\u53ef\u4ee5\u901a\u8fc7show profile\u547d\u4ee4\u6765\u67e5\u8be2\u6bcf\u6761sql\u8bed\u53e5\u7684\u67e5\u8be2\u60c5\u51b5\u3002"],["pre",{lang:null,highlighted:'mysql<span class="token operator">></span> set profiling <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment" spellcheck="true">;                      # \u8bbe\u7f6e profile \u6807\u5fd7</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">0</span> rows affected<span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.02</span> sec<span class="token punctuation">)</span>\n\nmysql<span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> from user<span class="token comment" spellcheck="true">;                      # \u6267\u884c\u67e5\u8be2</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n| USER_ID | ACTIVATED | ACTIVATIONKEY | EMAIL | PASSWORD | RESETPASSWORDKEY | USER_NAME |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n|       <span class="token number">1</span> |           | <span class="token keyword">NULL</span>          | <span class="token keyword">NULL</span>  | 8822cc56036deff486c1961fc54043769033b8098428c2f2a1bfcdd7ab3b985750961d826717fc3c | <span class="token keyword">NULL</span>             | user      |\n|       <span class="token number">2</span> |           | <span class="token keyword">NULL</span>          | <span class="token keyword">NULL</span>  | 5f26aadbc54610edbd1d79591db49f758ff2b600d43d8cd3f823e23ae3fd3537c9a8ae56f95e352e | <span class="token keyword">NULL</span>             | admin     |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n<span class="token number">2</span> rows <span class="token keyword">in</span> set <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>\n\nmysql<span class="token operator">></span> show profiles<span class="token comment" spellcheck="true">;                          # \u901a\u8fc7show profile\u663e\u793a\u67e5\u8be2\u65f6\u95f4</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| Query_ID | Duration   | Query              |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n|        <span class="token number">1</span> | <span class="token number">0.01113000</span> | <span class="token keyword">select</span> <span class="token operator">*</span> from user |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n<span class="token number">1</span> row <span class="token keyword">in</span> set<span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\n\nmysql<span class="token operator">></span> show profile <span class="token keyword">for</span> query <span class="token number">1</span><span class="token comment" spellcheck="true">;               # \u901a\u8fc7show profile for query\u663e\u793a\u8be6\u7ec6\u67e5\u8be2\u65f6\u95f4</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| Status               | Duration |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| starting             | <span class="token number">0.009332</span> |\n| checking permissions | <span class="token number">0.000042</span> |\n| Opening tables       | <span class="token number">0.001169</span> |\n| init                 | <span class="token number">0.000042</span> |\n| System lock          | <span class="token number">0.000372</span> |\n| optimizing           | <span class="token number">0.000011</span> |\n| statistics           | <span class="token number">0.000014</span> |\n| preparing            | <span class="token number">0.000011</span> |\n| executing            | <span class="token number">0.000002</span> |\n| Sending data         | <span class="token number">0.000057</span> |\n| end                  | <span class="token number">0.000005</span> |\n| query end            | <span class="token number">0.000007</span> |\n| closing tables       | <span class="token number">0.000023</span> |\n| freeing items        | <span class="token number">0.000028</span> |\n| cleaning up          | <span class="token number">0.000015</span> |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n<span class="token number">15</span> rows <span class="token keyword">in</span> set<span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>\n\nmysql<span class="token operator">></span>'},["code","mysql> set profiling = 1 ;                      # \u8bbe\u7f6e profile \u6807\u5fd7\nQuery OK, 0 rows affected, 1 warning (0.02 sec)\n\nmysql> select * from user;                      # \u6267\u884c\u67e5\u8be2\n+---------+-----------+---------------+-------\n| USER_ID | ACTIVATED | ACTIVATIONKEY | EMAIL | PASSWORD | RESETPASSWORDKEY | USER_NAME |\n+----------------------------------------------------------------------------------+------------------\n|       1 |           | NULL          | NULL  | 8822cc56036deff486c1961fc54043769033b8098428c2f2a1bfcdd7ab3b985750961d826717fc3c | NULL             | user      |\n|       2 |           | NULL          | NULL  | 5f26aadbc54610edbd1d79591db49f758ff2b600d43d8cd3f823e23ae3fd3537c9a8ae56f95e352e | NULL             | admin     |\n+----------------------------------------------------------------------------------+------------------\n2 rows in set (0.01 sec)\n\nmysql> show profiles;                          # \u901a\u8fc7show profile\u663e\u793a\u67e5\u8be2\u65f6\u95f4\n+----------+------------+--------------------+\n| Query_ID | Duration   | Query              |\n+----------+------------+--------------------+\n|        1 | 0.01113000 | select * from user |\n+----------+------------+--------------------+\n1 row in set, 1 warning (0.00 sec)\n\nmysql> show profile for query 1;               # \u901a\u8fc7show profile for query\u663e\u793a\u8be6\u7ec6\u67e5\u8be2\u65f6\u95f4\n+----------------------+----------+\n| Status               | Duration |\n+----------------------+----------+\n| starting             | 0.009332 |\n| checking permissions | 0.000042 |\n| Opening tables       | 0.001169 |\n| init                 | 0.000042 |\n| System lock          | 0.000372 |\n| optimizing           | 0.000011 |\n| statistics           | 0.000014 |\n| preparing            | 0.000011 |\n| executing            | 0.000002 |\n| Sending data         | 0.000057 |\n| end                  | 0.000005 |\n| query end            | 0.000007 |\n| closing tables       | 0.000023 |\n| freeing items        | 0.000028 |\n| cleaning up          | 0.000015 |\n+----------------------+----------+\n15 rows in set, 1 warning (0.01 sec)\n\nmysql>"]],["p","\u901a\u8fc7show processlist \u6765\u67e5\u8be2"],["pre",{lang:null,highlighted:'mysql <span class="token operator">-</span>e <span class="token string">\'show processlist\\G\'</span> <span class="token operator">-</span>u username <span class="token operator">-</span>p | grep State<span class="token punctuation">:</span> | sort |uniq <span class="token operator">-</span>c| sort <span class="token operator">-</span>rn\nEnter password<span class="token punctuation">:</span>\n   <span class="token number">1</span>   State<span class="token punctuation">:</span> starting\n   <span class="token number">1</span>   State<span class="token punctuation">:</span>'},["code","mysql -e 'show processlist\\G' -u username -p | grep State: | sort |uniq -c| sort -rn\nEnter password:\n   1   State: starting\n   1   State:"]]],meta:{order:3,title:"MySQL \u6027\u80fd\u4f18\u5316",type:"\u5165\u95e8",filename:"docs/database/mysql-performance.zh-CN.md"},toc:["ul"]}}});