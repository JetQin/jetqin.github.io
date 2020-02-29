webpackJsonp([47],{1286:function(s,a){s.exports={content:["article",["h2","Debian & Ubuntu \u5b89\u88c5 MySQL"],["ul",["li",["p","\u66f4\u65b0 apt-get \u5305\u7ba1\u7406"],["p",["code","sudo apt-get update"]]],["li",["p","\u5b89\u88c5Mysql\uff0c\u5b89\u88c5\u5b8c\u6210\u540e\u9ed8\u8ba4\u542f\u52a8"],["p",["code","sudo apt-get -y install mysql-server"]]],["li",["p","\u63d0\u9ad8\u5b89\u5168\u6027\uff1a"],["p","\u5982\u679c\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4f60\u672a\u914d\u7f6eroot\u7528\u6237\u5bc6\u7801\uff0c\u53ef\u4ee5\u4f7f\u7528mysql_secure_installation \u6765\u8bbe\u7f6e\u5bc6\u7801"],["p",["code","sudo mysql_secure_installation"]]]],["h2","\u8fde\u63a5MySQL"],["ul",["li",["p","\u4f7f\u7528mysql\u547d\u4ee4\u884c\u8fde\u63a5mysql"],["p",["code","sudo mysql -u root -p"]]],["li",["p","\u67e5\u8be2\u8fdb\u7a0b\u5217\u8868\uff0c\u5305\u62ec\u5f53\u524d\u7684\u8fde\u63a5"],["pre",{lang:null,highlighted:'show processlist<span class="token comment" spellcheck="true">;</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| Id | User | Host      | db    | Command | Time | State    | Info             |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n|  <span class="token number">5</span> | root | localhost | mysql | Query   |    <span class="token number">0</span> | starting | show processlist |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n<span class="token number">1</span> row <span class="token keyword">in</span> set <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>'},["code","show processlist;\n+----+------+-----------+-------+---------+------+----------+------------------+\n| Id | User | Host      | db    | Command | Time | State    | Info             |\n+----+------+-----------+-------+---------+------+----------+------------------+\n|  5 | root | localhost | mysql | Query   |    0 | starting | show processlist |\n+----+------+-----------+-------+---------+------+----------+------------------+\n1 row in set (0.00 sec)"]]],["li",["p","\u67e5\u8be2\u7528\u6237\u5217\u8868"],["pre",{lang:null,highlighted:'<span class="token keyword">select</span> user<span class="token punctuation">,</span> host from user<span class="token comment" spellcheck="true">;</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| user             | host      |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| debian<span class="token operator">-</span>sys<span class="token operator">-</span>maint | localhost |\n| mysql<span class="token punctuation">.</span>session    | localhost |\n| mysql<span class="token punctuation">.</span>sys        | localhost |\n| root             | localhost |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n<span class="token number">4</span> rows <span class="token keyword">in</span> set <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>'},["code","select user, host from user;\n+------------------+-----------+\n| user             | host      |\n+------------------+-----------+\n| debian-sys-maint | localhost |\n| mysql.session    | localhost |\n| mysql.sys        | localhost |\n| root             | localhost |\n+------------------+-----------+\n4 rows in set (0.00 sec)"]]],["li",["p","\u521b\u5efa\u7528\u6237"],["p",["code","create user test@localhost identified by \u2018password\u2019"]]],["li",["p","\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743\u6307\u5b9adatabase\uff0c\u6b64\u65f6\u7528\u6237\u6307\u53ef\u4ee5\u64cd\u4f5c\u6240\u6709\u6570\u636e\u5e93"],["p",["code","grant all on *.* to test@localhost identified by 'password'"]]],["li",["p","\u521b\u5efa\u7528\u6237\u5e76\u6388\u6743\u6307\u5b9a test database, \u6b64\u65f6\u7528\u6237\u6307\u53ef\u4ee5\u64cd\u4f5ctest\u6570\u636e\u5e93"],["p",["code","grant all on test.* to test@localhost identified by 'password'"]]],["li",["p","\u6388\u4e88\u5916\u7f51\u767b\u5f55\u6743\u9650, \u6b64\u65f6test\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5916\u7f51\u8bbf\u95ee\u5230\u5185\u90e8\u6570\u636e\u5e93"],["p",["code","grant all privileges on test.* to test@\u2018%\u2018 identified by 'password'"]]]],["h2","\u914d\u7f6eMySQL"],["p","Ubuntu\u4e0bmysql\u7684\u914d\u7f6e\u76ee\u5f55\u5728 /etc/mysql.   \u6b64\u76ee\u5f55\u4e0b\u6240\u6709\u7684\u6587\u4ef6\u5217\u8868\u5982\u4e0b\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">/</span>etc<span class="token operator">/</span>mysql$  ls <span class="token operator">-</span>al\ntotal <span class="token number">32</span>\ndrwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x   <span class="token number">4</span> root root <span class="token number">4096</span> Dec <span class="token number">10</span> <span class="token number">02</span><span class="token punctuation">:</span><span class="token number">01</span> <span class="token punctuation">.</span>\ndrwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x <span class="token number">102</span> root root <span class="token number">4096</span> Dec <span class="token number">10</span> <span class="token number">02</span><span class="token punctuation">:</span><span class="token number">29</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>\ndrwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x   <span class="token number">2</span> root root <span class="token number">4096</span> Dec <span class="token number">10</span> <span class="token number">02</span><span class="token punctuation">:</span><span class="token number">00</span> conf<span class="token punctuation">.</span>d\n<span class="token operator">-</span>rwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x   <span class="token number">1</span> root root  <span class="token number">120</span> Oct <span class="token number">23</span> <span class="token number">12</span><span class="token punctuation">:</span><span class="token number">09</span> debian<span class="token operator">-</span>start\n<span class="token operator">-</span>rw<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>   <span class="token number">1</span> root root  <span class="token number">317</span> Dec <span class="token number">10</span> <span class="token number">02</span><span class="token punctuation">:</span><span class="token number">01</span> debian<span class="token punctuation">.</span>cnf\nlrwxrwxrwx   <span class="token number">1</span> root root   <span class="token number">24</span> Dec <span class="token number">10</span> <span class="token number">02</span><span class="token punctuation">:</span><span class="token number">00</span> my<span class="token punctuation">.</span>cnf <span class="token operator">-</span><span class="token operator">></span> <span class="token operator">/</span>etc<span class="token operator">/</span>alternatives<span class="token operator">/</span>my<span class="token punctuation">.</span>cnf\n<span class="token operator">-</span>rw<span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>   <span class="token number">1</span> root root  <span class="token number">839</span> Jan <span class="token number">21</span>  <span class="token number">2017</span> my<span class="token punctuation">.</span>cnf<span class="token punctuation">.</span>fallback\n<span class="token operator">-</span>rw<span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>   <span class="token number">1</span> root root  <span class="token number">682</span> Feb  <span class="token number">3</span>  <span class="token number">2017</span> mysql<span class="token punctuation">.</span>cnf\ndrwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x   <span class="token number">2</span> root root <span class="token number">4096</span> Dec <span class="token number">10</span> <span class="token number">02</span><span class="token punctuation">:</span><span class="token number">01</span> mysql<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>d'},["code","/etc/mysql$  ls -al\ntotal 32\ndrwxr-xr-x   4 root root 4096 Dec 10 02:01 .\ndrwxr-xr-x 102 root root 4096 Dec 10 02:29 ..\ndrwxr-xr-x   2 root root 4096 Dec 10 02:00 conf.d\n-rwxr-xr-x   1 root root  120 Oct 23 12:09 debian-start\n-rw-------   1 root root  317 Dec 10 02:01 debian.cnf\nlrwxrwxrwx   1 root root   24 Dec 10 02:00 my.cnf -> /etc/alternatives/my.cnf\n-rw-r--r--   1 root root  839 Jan 21  2017 my.cnf.fallback\n-rw-r--r--   1 root root  682 Feb  3  2017 mysql.cnf\ndrwxr-xr-x   2 root root 4096 Dec 10 02:01 mysql.conf.d"]],["p","mysql \u7684\u914d\u7f6e\u6587\u4ef6\u4e3a ",["code","mysql.conf.d/mysqld.cnf"],", \u6240\u4ee5\u5f53\u4f60\u8981\u4fee\u6539\u914d\u7f6e\u65f6\uff0c\u53ea\u9700\u8981\u66f4\u6539\u6b64\u6587\u4ef6\u5373\u53ef\u3002"],["ul",["li",["p","\u4fee\u6539mysql \u670d\u52a1\u5668\u7f16\u7801"],["pre",{lang:null,highlighted:'<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>\ncharacter<span class="token operator">-</span>set<span class="token operator">-</span>server <span class="token operator">=</span> utf8\ncollation<span class="token operator">-</span>server <span class="token operator">=</span> utf8_unicode_ci'},["code","[mysqld]\ncharacter-set-server = utf8\ncollation-server = utf8_unicode_ci"]]],["li",["p","\u4fee\u6539\u76d1\u670d\u52a1\u5668\u76d1\u542c\u5730\u5740\uff0c\u9ed8\u8ba4\u6570\u636e\u5e93\u53ea\u76d1\u542c\u672c\u5730\u5730\u5740\uff0c\u5916\u7f51\u65e0\u6cd5\u8bbf\u95ee\uff0c\u5c06\u76d1\u542c\u5730\u5740\u4fee\u6539\u4e3a0.0.0.0\u5373\u53ef"],["pre",{lang:null,highlighted:'<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>\nbind<span class="token operator">-</span>address            <span class="token operator">=</span> <span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span>'},["code","[mysqld]\nbind-address            = 127.0.0.1"]]],["li",["p","\u5ffd\u7565\u5927\u5c0f\u5199"],["pre",{lang:null,highlighted:'<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>\nlower_case_table_names <span class="token operator">=</span> <span class="token number">0</span>       #\u5b58\u50a8\u6bd4\u8f83\u5927\u5c0f\u5199\u654f\u611f\nlower_case_table_names <span class="token operator">=</span> <span class="token number">1</span>       #\u5b58\u50a8\u5728\u786c\u76d8\u4e0a\u4f7f\u7528\u5c0f\u5199\uff0c\u6bd4\u8f83\u5ffd\u7565\u5927\u5c0f\u5199\nlower_case_table_names <span class="token operator">=</span> <span class="token number">2</span>       #\u5b58\u50a8\u65f6\u4f7f\u7528\u4f20\u5165\u7684\u503c\uff0c\u6bd4\u8f83\u65f6\u4f7f\u7528\u5c0f\u5199'},["code","[mysqld]\nlower_case_table_names = 0       #\u5b58\u50a8\u6bd4\u8f83\u5927\u5c0f\u5199\u654f\u611f\nlower_case_table_names = 1       #\u5b58\u50a8\u5728\u786c\u76d8\u4e0a\u4f7f\u7528\u5c0f\u5199\uff0c\u6bd4\u8f83\u5ffd\u7565\u5927\u5c0f\u5199\nlower_case_table_names = 2       #\u5b58\u50a8\u65f6\u4f7f\u7528\u4f20\u5165\u7684\u503c\uff0c\u6bd4\u8f83\u65f6\u4f7f\u7528\u5c0f\u5199"]]],["li",["p","\u5bfc\u51fa\u6570\u636e\u5e93"],["p",["code","mysqldump -u username -p *old_dbname* > dbexport.sql"]]],["li",["p","\u5bfc\u5165\u6570\u636e\u5e93"],["p",["code","mysql -u username -p *new_dbname* < dbexport.sql"]]],["li",["p","\u5bfc\u51fa\u6570\u636e\u5e93\u4e2d\u6307\u5b9a\u7684\u8868, \u5982\u5bfc\u51fa\u6570\u636e\u5e93db\u4e2d\u7684\u8868 t1, t2, t3"],["p",["code","mysqldump -u username -p db t1 t2 t3 > mydb_tables.sql"]]]],["h2","\u542f\u52a8\u505c\u6b62"],["p","\u5728\u6267\u884c\u4efb\u4f55\u914d\u7f6e\u53d8\u66f4\u65f6\uff0c\u8bf7\u5148 \u505c\u6b62mysql\uff0c \u914d\u7f6e\u6587\u4ef6\u4fee\u6539\u5b8c\u6210\u540e\u518d\u542f\u52a8mysql"],["pre",{lang:null,highlighted:'sudo systemctl stop mysql<span class="token punctuation">.</span>service      <span class="token operator">/</span><span class="token operator">/</span>\u505c\u6b62\nsudo systemctl start mysql<span class="token punctuation">.</span>service     <span class="token operator">/</span><span class="token operator">/</span>\u542f\u52a8'},["code","sudo systemctl stop mysql.service      //\u505c\u6b62\nsudo systemctl start mysql.service     //\u542f\u52a8"]],["p","\u67e5\u770b\u4fee\u6539\u540e\u7684\u914d\u7f6e\u4fe1\u606f"],["pre",{lang:null,highlighted:'show <span class="token keyword">global</span> variables like <span class="token string">\'<span class="token variable">%character%</span>\'</span><span class="token comment" spellcheck="true">;</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| Variable_name            | Value                      |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| character_set_client     | utf8                       |\n| character_set_connection | utf8                       |\n| character_set_database   | utf8                       |\n| character_set_filesystem | binary                     |\n| character_set_results    | utf8                       |\n| character_set_server     | utf8                       |\n| character_set_system     | utf8                       |\n| character_sets_dir       | <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>mysql<span class="token operator">/</span>charsets<span class="token operator">/</span> |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n\nshow <span class="token keyword">global</span> variables like <span class="token string">\'<span class="token variable">%lower_%</span>\'</span><span class="token comment" spellcheck="true">;</span>\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| Variable_name          | Value |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>\n| lower_case_file_system | OFF   |\n| lower_case_table_names | <span class="token number">1</span>     |\n<span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">+</span>'},["code","show global variables like '%character%';\n+--------------------------+----------------------------+\n| Variable_name            | Value                      |\n+--------------------------+----------------------------+\n| character_set_client     | utf8                       |\n| character_set_connection | utf8                       |\n| character_set_database   | utf8                       |\n| character_set_filesystem | binary                     |\n| character_set_results    | utf8                       |\n| character_set_server     | utf8                       |\n| character_set_system     | utf8                       |\n| character_sets_dir       | /usr/share/mysql/charsets/ |\n+--------------------------+----------------------------+\n\nshow global variables like '%lower_%';\n+------------------------+-------+\n| Variable_name          | Value |\n+------------------------+-------+\n| lower_case_file_system | OFF   |\n| lower_case_table_names | 1     |\n+------------------------+-------+"]],["h2","\u91cd\u7f6eroot\u5bc6\u7801"],["p","\u5982\u679c\u5fd8\u8bb0root\u5bc6\u7801\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u6b65\u9aa4\u6765\u91cd\u7f6eroot\u5bc6\u7801"],["ul",["li",["p","\u505c\u6b62Mysql Server"]],["li",["p",["code","mysqld_safe --skip-grant-tables;"]," \u4f7f\u7528\u5982\u4e0a\u547d\u4ee4\uff0c\u4ee5\u975e\u5b89\u5168\u65b9\u5f0f\u542f\u52a8mysql"]],["li",["p","\u6253\u5f00\u53e6\u4e00\u4e2a\u7ec8\u7aef\uff0c\u5728\u7ec8\u7aef\u4e2d\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5373\u53ef\u91cd\u7f6e\u5bc6\u7801"]]],["pre",{lang:null,highlighted:'update user set authentication_string<span class="token operator">=</span><span class="token function">PASSWORD</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span> where user<span class="token operator">=</span><span class="token string">"root"</span><span class="token comment" spellcheck="true">;</span>\nflush privileges<span class="token comment" spellcheck="true">;</span>'},["code",'update user set authentication_string=PASSWORD("password") where user="root";\nflush privileges;']]],meta:{order:1,title:"MySQL \u5165\u95e8",type:"\u5165\u95e8",filename:"docs/database/database.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Debian-&-Ubuntu-\u5b89\u88c5-MySQL",title:"Debian & Ubuntu \u5b89\u88c5 MySQL"},"Debian & Ubuntu \u5b89\u88c5 MySQL"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8fde\u63a5MySQL",title:"\u8fde\u63a5MySQL"},"\u8fde\u63a5MySQL"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u914d\u7f6eMySQL",title:"\u914d\u7f6eMySQL"},"\u914d\u7f6eMySQL"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u542f\u52a8\u505c\u6b62",title:"\u542f\u52a8\u505c\u6b62"},"\u542f\u52a8\u505c\u6b62"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u91cd\u7f6eroot\u5bc6\u7801",title:"\u91cd\u7f6eroot\u5bc6\u7801"},"\u91cd\u7f6eroot\u5bc6\u7801"]]]}}});