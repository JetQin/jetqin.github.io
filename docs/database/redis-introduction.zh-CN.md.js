webpackJsonp([32],{1293:function(n,s){n.exports={content:["article",["h2","\u4f7f\u7528\u573a\u666f"],["ul",["li",["p","Redis \u901a\u5e38\u7528\u4f5cweb\u5e94\u7528\u7684\u5185\u5b58\u7f13\u5b58\uff0c\u548cDjango\uff0cRuby-on-Rails\uff0cNode.js\u4ee5\u53caFlask\u6846\u67b6\u7ed3\u5408"]],["li",["p","Redis\u5728\u5b58\u50a8\u65b0\u7684\u6570\u636e\u7684\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u6e05\u9664\u9648\u65e7\u7684\u6570\u636e\u3002"]],["li",["p","Redis\u4f7f\u7528Less Recently Used(LRU)\u7b56\u7565,\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u5065\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4"]],["li",["p","Redis \u5b58\u50a8\u6307\u6807\u6570\u636e\u7528\u4e8e\u91cf\u5316\u7f51\u7ad9\u7684\u4f7f\u7528\u60c5\u51b5\u548c\u7528\u6237\u884c\u4e3a\u6570\u636e"]],["li",["p","Redis\u53ef\u7528\u4f5c\u4e0d\u540c\u7cfb\u7edf\u4e4b\u95f4\u7684\u901a\u8baf\u5c42\uff0c\u901a\u8fc7\u8ba2\u9605\u63a8\u9001\u6d88\u606f\u6a21\u578b"]]],["h2","\u6570\u636e\u6a21\u578b"],["ul",["li",["p",["strong","\u5b57\u7b26\u4e32"],"\n\u7b80\u5355\u52a8\u6001\u5b57\u7b26\u4e32,",["code","Redis"],"\u5e95\u5c42\u4f7f\u7528\u7684\u4e00\u79cd\u7b80\u5355\u52a8\u6001\u5b57\u7b26\u4e32\u7684\u62bd\u8c61\u7c7b\u578b\u3002"]]],["pre",{lang:null,highlighted:'struct sdshdr {\n    <span class="token keyword">in</span> length<span class="token punctuation">:</span>  # \u8bb0\u5f55buf\u4e2d\u5df2\u4f7f\u7528\u5b57\u8282\u7684\u6570\u91cf\n    int free<span class="token comment" spellcheck="true">;   # \u8bb0\u5f55bug\u6570\u7ec4\u4e2d\u672a\u4f7f\u7528\u7684\u5b57\u8282\u7684\u6570\u91cf</span>\n    char buf<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">; # \u5b57\u8282\u6570\u7ec4\u4fdd\u5b58\u5b57\u7b26\u4e32</span>\n}'},["code","struct sdshdr {\n    in length:  # \u8bb0\u5f55buf\u4e2d\u5df2\u4f7f\u7528\u5b57\u8282\u7684\u6570\u91cf\n    int free;   # \u8bb0\u5f55bug\u6570\u7ec4\u4e2d\u672a\u4f7f\u7528\u7684\u5b57\u8282\u7684\u6570\u91cf\n    char buf[]; # \u5b57\u8282\u6570\u7ec4\u4fdd\u5b58\u5b57\u7b26\u4e32\n}"]],["p","\u4f18\u70b9\uff1a"],["ul",["li",["p","\u53ef\u4ee5O(1)\u83b7\u53d6\u5b58\u50a8\u7684\u952e\u503c\u7684\u957f\u5ea6"]],["li",["p","\u675c\u7edd\u7f13\u51b2\u533a\u6ea2\u51fa"]],["li",["p","\u51cf\u5c11\u4fee\u6539\u5b57\u7b26\u4e32\u5e26\u6765\u7684\u5185\u5b58\u91cd\u5206\u914d\u6b21\u6570\u3010\u3010\u3010\u3010\u3010\u3010\u3010"]],["li",["p",["strong","\u5217\u8868"],"\n\u5217\u8868\u7684\u5e95\u5c42\u5b9e\u73b0\u5c31\u662f\u4e00\u4e2a\u94fe\u8868\uff0c\u94fe\u8868\u7684\u6bcf\u4e2a\u8282\u70b9\u4fdd\u5b58\u4e00\u4e2a\u952e\u503c\u3002"]]],["pre",{lang:null,highlighted:'typedef struct listNode {\n    struct listNode <span class="token operator">*</span>prev<span class="token comment" spellcheck="true">;  #\u524d\u7f6e\u8282\u70b9</span>\n    struct listNode <span class="token operator">*</span><span class="token keyword">next</span><span class="token comment" spellcheck="true">;  #\u540e\u7f6e\u8282\u70b9</span>\n    void <span class="token operator">*</span>value<span class="token comment" spellcheck="true">;            #\u8282\u70b9\u7684\u503c</span>\n} listNode\n\ntypedef struct list {\n    listNode <span class="token operator">*</span>head<span class="token comment" spellcheck="true">;         #\u5934\u8282\u70b9</span>\n    listNode <span class="token operator">*</span>tail<span class="token comment" spellcheck="true">;         #\u5c3e\u8282\u70b9</span>\n    unsigned long len<span class="token comment" spellcheck="true">;      #\u8282\u70b9\u6570\u91cf</span>\n    void <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>dup<span class="token punctuation">)</span><span class="token punctuation">(</span>void <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;    #\u8282\u70b9\u590d\u5236\u51fd\u6570</span>\n    void <span class="token punctuation">(</span><span class="token operator">*</span>free<span class="token punctuation">)</span><span class="token punctuation">(</span>void <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;    #\u8282\u70b9\u91ca\u653e\u51fd\u6570</span>\n    int <span class="token punctuation">(</span><span class="token operator">*</span>match<span class="token punctuation">)</span><span class="token punctuation">(</span>void <span class="token operator">*</span>ptr<span class="token punctuation">,</span> void <span class="token operator">*</span>key<span class="token punctuation">)</span>  #\u8282\u70b9\u503c\u5bf9\u6bd4\u51fd\u6570\n}'},["code","typedef struct listNode {\n    struct listNode *prev;  #\u524d\u7f6e\u8282\u70b9\n    struct listNode *next;  #\u540e\u7f6e\u8282\u70b9\n    void *value;            #\u8282\u70b9\u7684\u503c\n} listNode\n\ntypedef struct list {\n    listNode *head;         #\u5934\u8282\u70b9\n    listNode *tail;         #\u5c3e\u8282\u70b9\n    unsigned long len;      #\u8282\u70b9\u6570\u91cf\n    void *(*dup)(void *ptr);    #\u8282\u70b9\u590d\u5236\u51fd\u6570\n    void (*free)(void *ptr);    #\u8282\u70b9\u91ca\u653e\u51fd\u6570\n    int (*match)(void *ptr, void *key)  #\u8282\u70b9\u503c\u5bf9\u6bd4\u51fd\u6570\n}"]],["p","\u793a\u4f8b\uff1a"],["pre",{lang:null,highlighted:'<span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">6379</span><span class="token operator">></span> RPUSH integers <span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span>\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">7</span>\n<span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">6379</span><span class="token operator">></span> LLEN integers\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">7</span>\n<span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">6379</span><span class="token operator">></span> LRANGE integers <span class="token number">0</span> <span class="token number">10</span>\n<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"0"</span>\n<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"1"</span>\n<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">"2"</span>\n<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">"3"</span>\n<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">"4"</span>\n<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">"5"</span>\n<span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">"6"</span>'},["code",'127.0.0.1:6379> RPUSH integers 0 1 2 3 4 5 6\n(integer) 7\n127.0.0.1:6379> LLEN integers\n(integer) 7\n127.0.0.1:6379> LRANGE integers 0 10\n1) "0"\n2) "1"\n3) "2"\n4) "3"\n5) "4"\n6) "5"\n7) "6"']],["ul",["li",["p",["strong","\u5b57\u5178"],"\nRedis\u7684\u5b57\u5178\u4f7f\u7528\u54c8\u5e0c\u8868\u4f5c\u4e3a\u5e95\u5c42\u5b9e\u73b0\uff0c\u4e00\u4e2a\u54c8\u5e0c\u8868\u91cc\u53ef\u4ee5\u6709\u591a\u4e2a\u54c8\u5e0c\u8868\u8282\u70b9\uff0c\u6bcf\u4e2a\u54c8\u5e0c\u8868\u8282\u70b9\u5c31\u4fdd\u5b58\u4e86\u5b57\u5178\u4e2d\u7684\n\u4e00\u4e2a\u952e\u503c\u5bf9\u3002"]]],["pre",{lang:null,highlighted:'typedef struct dictht {\n    dictEntry <span class="token operator">*</span><span class="token operator">*</span>table<span class="token comment" spellcheck="true">;      #\u54c8\u5e0c\u8868\u6570\u7ec4</span>\n    unsigned long size<span class="token comment" spellcheck="true">;     #\u54c8\u5e0c\u8868\u5927\u5c0f</span>\n    unsigned long sizemask<span class="token comment" spellcheck="true">; #\u54c8\u5e0c\u8868\u5927\u5c0f\u63a9\u7801</span>\n    unsigned long used<span class="token comment" spellcheck="true">;     #\u8be5\u54c8\u5e0c\u8868\u5df2\u6709\u8282\u70b9\u7684\u6570\u91cf</span>\n}dictht\n\ntypedef struct dictEntry {\n    void <span class="token operator">*</span>key<span class="token comment" spellcheck="true">;</span>\n    union {\n        void <span class="token operator">*</span>val<span class="token comment" spellcheck="true">;</span>\n        uint64_tu64<span class="token comment" spellcheck="true">;</span>\n        int64_ts64<span class="token comment" spellcheck="true">;</span>\n    } v<span class="token comment" spellcheck="true">;</span>\n    struct dictEntry <span class="token keyword">next</span><span class="token comment" spellcheck="true">;</span>\n}dictEntry\n\ntypedef struct dict {\n    dictType <span class="token operator">*</span> type<span class="token comment" spellcheck="true">;    # \u7c7b\u578b\u7279\u5b9a\u51fd\u6570</span>\n    void <span class="token operator">*</span>privatedata<span class="token comment" spellcheck="true">;  # \u79c1\u6709\u6570\u636e</span>\n    dictht ht<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;       # \u54c8\u5e0c\u8868</span>\n    int rehashidx<span class="token comment" spellcheck="true">;      #rehash \u7d22\u5f15</span>\n}'},["code","typedef struct dictht {\n    dictEntry **table;      #\u54c8\u5e0c\u8868\u6570\u7ec4\n    unsigned long size;     #\u54c8\u5e0c\u8868\u5927\u5c0f\n    unsigned long sizemask; #\u54c8\u5e0c\u8868\u5927\u5c0f\u63a9\u7801\n    unsigned long used;     #\u8be5\u54c8\u5e0c\u8868\u5df2\u6709\u8282\u70b9\u7684\u6570\u91cf\n}dictht\n\ntypedef struct dictEntry {\n    void *key;\n    union {\n        void *val;\n        uint64_tu64;\n        int64_ts64;\n    } v;\n    struct dictEntry next;\n}dictEntry\n\ntypedef struct dict {\n    dictType * type;    # \u7c7b\u578b\u7279\u5b9a\u51fd\u6570\n    void *privatedata;  # \u79c1\u6709\u6570\u636e\n    dictht ht[2];       # \u54c8\u5e0c\u8868\n    int rehashidx;      #rehash \u7d22\u5f15\n}"]],["p",["img",{title:null,src:"./assets/dictionary.png",alt:"dictionary"}]],["p","\u5f53\u6709\u4e00\u4e2a\u65b0\u7684\u952e\u503c\u5bf9\u6dfb\u52a0\u5230\u5b57\u5178\u4e2d\u65f6\uff0c\u5b57\u5178\u4f1a\u5bf9\u952e\u8fdb\u884c\u54c8\u5e0c\uff0c\u5f97\u5230\u54c8\u5e0c\u503c\u540e\u5728\u548c\u63a9\u7801\u8fdb\u884c\u4e0e\u8fd0\u7b97\u5f97\u5230\u6700\u7ec8\u7684\u54c8\u5e0c\u503c\n\u5f53\u6709\u4e24\u4e2a\u4ee5\u4e0a\u7684\u952e\u88ab\u5206\u914d\u5230\u540c\u4e00\u4e2a\u54c8\u5e0c\u8868\u6570\u7ec4\u7684\u540c\u4e00\u4e2a\u7d22\u5f15\u4e0a\u65f6\uff0c\u6b64\u65f6\u4f1a\u4ea7\u751f\u952e\u51b2\u7a81\u3002\u4e00\u822c\u89e3\u51b3\u51b2\u7a81\u6709\u4e24\u79cd\u65b9\u6cd5\uff0c\n\u4e00\u79cd\u662fRehash\uff0c\u4e00\u79cd\u662f\u94fe\u5730\u5740\u6cd5\u3002"],["ul",["li",["p","\u94fe\u5730\u5740\u6cd5: \u6bcf\u4e2a\u54c8\u5e0c\u8868\u90fd\u6709\u4e00\u4e2anext\u6307\u9488\uff0c\u591a\u4e2a\u54c8\u5e0c\u8868\u8282\u70b9\u53ef\u4ee5\u7528next\u6307\u9488\u6784\u6210\u4e00\u4e2a\u5355\u5411\u94fe\u8868\uff0c\u88ab\u5206\u914d\u5230\u540c\u4e00\u4e2a\n         \u7d22\u5f15\u4e0a\u7684\u591a\u4e2a\u8282\u70b9\u53ef\u4ee5\u7528\u8fd9\u4e2a\u5355\u5411\u94fe\u8868\u8fde\u63a5\u8d77\u6765"]],["li",["p","Rehash\uff1a \u968f\u7740\u54c8\u5e0c\u8868\u4e2d\u952e\u503c\u5bf9\u589e\u591a\u548c\u51cf\u5c11\uff0c\u4e3a\u4e86\u4f7f\u8d1f\u8f7d\u56e0\u5b50\u7ef4\u6301\u5728\u4e00\u4e2a\u5408\u7406\u7684\u8303\u56f4\uff0c\u9700\u8981\u5bf9\u54c8\u5e0c\u8868\u8fdb\u884cRehash"],["pre",{lang:null,highlighted:'    <span class="token operator">-</span> \u6269\u5c55\uff0c\u7533\u8bf7ht<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\u7684\u5927\u5c0f\u4e3a\u5927\u4e8eht<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>used<span class="token operator">*</span><span class="token number">2</span>\u7684\u7b2c\u4e00\u4e2a<span class="token number">2</span>\u7684\u6b21\u65b9\u7684\u6570\uff0c\u6536\u7f29\uff0cht<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\u4e3aht<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>used\u7684\u7b2c\u4e00\u4e2a<span class="token number">2</span>\u7684N\u6b21\u65b9\u7684\u6570\u3002\n    <span class="token operator">-</span> \u6267\u884crehash\u5c06ht<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\u4e2d\u7684\u6570\u503c\u6620\u5c04\u5230ht<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\u4e0a\n    <span class="token operator">-</span> \u5c06ht<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\u8bbe\u7f6e\u4e3aht<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>ht<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\u65b0\u5efa\u4e00\u4e2a\u7a7a\u767d\u54c8\u5e0c\u8868'},["code","    - \u6269\u5c55\uff0c\u7533\u8bf7ht[1]\u7684\u5927\u5c0f\u4e3a\u5927\u4e8eht[0].used*2\u7684\u7b2c\u4e00\u4e2a2\u7684\u6b21\u65b9\u7684\u6570\uff0c\u6536\u7f29\uff0cht[1]\u4e3aht[0].used\u7684\u7b2c\u4e00\u4e2a2\u7684N\u6b21\u65b9\u7684\u6570\u3002\n    - \u6267\u884crehash\u5c06ht[0]\u4e2d\u7684\u6570\u503c\u6620\u5c04\u5230ht[1]\u4e0a\n    - \u5c06ht[1]\u8bbe\u7f6e\u4e3aht[0],ht[1]\u65b0\u5efa\u4e00\u4e2a\u7a7a\u767d\u54c8\u5e0c\u8868"]]],["li",["p",["strong","\u8df3\u8dc3\u8868"],"\n\u8df3\u8dc3\u8868\u662f\u4e00\u79cd\u6709\u5e8f\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u901a\u8fc7\u5728\u6bcf\u4e2a\u8282\u70b9\u4e2d\u7ef4\u6301\u591a\u4e2a\u6307\u5411\u5176\u4ed6\u8282\u70b9\u7684\u6307\u9488\uff0c\u4ece\u800c\u8fbe\u5230\u5feb\u901f\u8bbf\u95ee\u8282\u70b9\u7684\u76ee.Redis\u4f7f\u7528\u8df3\u8dc3\u8868\u6765\u5b9e\u73b0\u6709\u5e8f\u96c6\u5408\u952e\uff0c\u548c\u96c6\u7fa4\u8282\u70b9\u4e2d\u7684\u5185\u90e8\u6570\u636e\u7ed3\u6784.\nredis\u4f7f\u7528\u7684\u662fzskiplist\u7ed3\u6784"]]],["p","zskiplist\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027:\nheader: \u6307\u5411\u8df3\u8dc3\u8868\u7684\u8868\u5934\u8282\u70b9\ntail: \u6307\u5411\u8df3\u8dc3\u8868\u7684\u8868\u5c3e\u8282\u70b9\nlevel: \u8bb0\u5f55\u76ee\u524d\u8df3\u8dc3\u8868\u5185\uff0c\u5c42\u6570\u6700\u5927\u7684\u90a3\u4e2a\u8282\u70b9\u7684\u5c42\u6570\nlength\uff1a \u8bb0\u5f55\u8df3\u8dc3\u8868\u7684\u957f\u5ea6\u5373\u8df3\u8dc3\u8868\u76ee\u524d\u5305\u542b\u7684\u8282\u70b9\u7684\u6570\u91cf"],["pre",{lang:null,highlighted:'typedef struct zskiplistNode {\n  \n  struct zskiplistLevel {\n    struct zskiplistNode <span class="token operator">*</span>forward<span class="token comment" spellcheck="true">;</span>\n    unsigned int span<span class="token comment" spellcheck="true">;</span>\n  } level<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\n  struct zskiplistNode <span class="token operator">*</span>backward<span class="token comment" spellcheck="true">;</span>\n  double score<span class="token comment" spellcheck="true">;</span>\n  robj <span class="token operator">*</span>obj\n\n} zskiplistNode\n\ntypedef struct zskiplist{\n    structz skiplistNode <span class="token operator">*</span>header<span class="token punctuation">,</span> <span class="token operator">*</span>tail<span class="token comment" spellcheck="true">;</span>\n\n    unsigned long length<span class="token comment" spellcheck="true">;</span>\n\n    int level<span class="token comment" spellcheck="true">;</span>\n\n} zskiplist<span class="token comment" spellcheck="true">;</span>'},["code","typedef struct zskiplistNode {\n  \n  struct zskiplistLevel {\n    struct zskiplistNode *forward;\n    unsigned int span;\n  } level[];\n\n  struct zskiplistNode *backward;\n  double score;\n  robj *obj\n\n} zskiplistNode\n\ntypedef struct zskiplist{\n    structz skiplistNode *header, *tail;\n\n    unsigned long length;\n\n    int level;\n\n} zskiplist;"]],["h2","\u5e38\u7528\u547d\u4ee4"],["p","\u5728\u8bbe\u8ba1Redis\u5b58\u50a8\u7ed3\u6784\u7684\u65f6\u5019\uff0c\u4e3b\u8981\u8981\u8003\u8651\u952e\u548c\u6570\u636e\u7ed3\u6784\u4e24\u65b9\u9762\n\u5982\u679c\u4f7f\u7528",["code","SET"],"\u6216\u8005",["code","GETSET"],"\u547d\u4ee4\u53bb\u66f4\u65b0\u952e\u503c, \u952e\u503c\u7684\u8fc7\u671f\u65f6\u95f4\u4f1a\u88ab\u6e05\u9664"],["pre",{lang:null,highlighted:'<span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">6379</span><span class="token operator">></span> EXPIRE tea<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>box1<span class="token operator">/</span>bag<span class="token operator">/</span><span class="token number">8</span> <span class="token number">300</span>\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>\n<span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">6379</span><span class="token operator">></span> TTL tea<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>box1<span class="token operator">/</span>bag<span class="token operator">/</span><span class="token number">8</span>\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">260</span>\n<span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">6379</span><span class="token operator">></span> SET tea<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>box1<span class="token operator">/</span>bag<span class="token operator">/</span><span class="token number">8</span> brew\nOK\n<span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">6379</span><span class="token operator">></span> TTL tea<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>box1<span class="token operator">/</span>bag<span class="token operator">/</span><span class="token number">8</span>\n<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token number">1</span>'},["code","127.0.0.1:6379> EXPIRE tea/1/box1/bag/8 300\n(integer) 1\n127.0.0.1:6379> TTL tea/1/box1/bag/8\n(integer) 260\n127.0.0.1:6379> SET tea/1/box1/bag/8 brew\nOK\n127.0.0.1:6379> TTL tea/1/box1/bag/8\n(integer) -1"]]],meta:{order:3,title:"Redis \u7f13\u5b58",type:"\u5165\u95e8",filename:"docs/database/redis-introduction.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528\u573a\u666f",title:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6570\u636e\u6a21\u578b",title:"\u6570\u636e\u6a21\u578b"},"\u6570\u636e\u6a21\u578b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5e38\u7528\u547d\u4ee4",title:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"]]]}}});