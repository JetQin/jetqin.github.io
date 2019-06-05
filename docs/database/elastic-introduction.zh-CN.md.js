webpackJsonp([35],{1286:function(n,s){n.exports={content:["article",["h2","\u5b89\u88c5Elastic Search"],["p","\u5b89\u88c5\u6210\u529f\u4e4b\u540e\u9a8c\u8bc1"],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>X GET http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span><span class="token operator">?</span>pretty\n{\n  <span class="token string">"name"</span> <span class="token punctuation">:</span> <span class="token string">"ZKKlE0t"</span><span class="token punctuation">,</span>\n  <span class="token string">"cluster_name"</span> <span class="token punctuation">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span>\n  <span class="token string">"cluster_uuid"</span> <span class="token punctuation">:</span> <span class="token string">"sI09KISmQNaGMgbuN7S4gQ"</span><span class="token punctuation">,</span>\n  <span class="token string">"version"</span> <span class="token punctuation">:</span> {\n    <span class="token string">"number"</span> <span class="token punctuation">:</span> <span class="token string">"6.6.1"</span><span class="token punctuation">,</span>\n    <span class="token string">"build_flavor"</span> <span class="token punctuation">:</span> <span class="token string">"default"</span><span class="token punctuation">,</span>\n    <span class="token string">"build_type"</span> <span class="token punctuation">:</span> <span class="token string">"tar"</span><span class="token punctuation">,</span>\n    <span class="token string">"build_hash"</span> <span class="token punctuation">:</span> <span class="token string">"1fd8f69"</span><span class="token punctuation">,</span>\n    <span class="token string">"build_date"</span> <span class="token punctuation">:</span> <span class="token string">"2019-02-13T17:10:04.160291Z"</span><span class="token punctuation">,</span>\n    <span class="token string">"build_snapshot"</span> <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token string">"lucene_version"</span> <span class="token punctuation">:</span> <span class="token string">"7.6.0"</span><span class="token punctuation">,</span>\n    <span class="token string">"minimum_wire_compatibility_version"</span> <span class="token punctuation">:</span> <span class="token string">"5.6.0"</span><span class="token punctuation">,</span>\n    <span class="token string">"minimum_index_compatibility_version"</span> <span class="token punctuation">:</span> <span class="token string">"5.0.0"</span>\n  }<span class="token punctuation">,</span>\n  <span class="token string">"tagline"</span> <span class="token punctuation">:</span> <span class="token string">"You Know, for Search"</span>\n}'},["code",'curl -X GET http://localhost:9200/?pretty\n{\n  "name" : "ZKKlE0t",\n  "cluster_name" : "es",\n  "cluster_uuid" : "sI09KISmQNaGMgbuN7S4gQ",\n  "version" : {\n    "number" : "6.6.1",\n    "build_flavor" : "default",\n    "build_type" : "tar",\n    "build_hash" : "1fd8f69",\n    "build_date" : "2019-02-13T17:10:04.160291Z",\n    "build_snapshot" : false,\n    "lucene_version" : "7.6.0",\n    "minimum_wire_compatibility_version" : "5.6.0",\n    "minimum_index_compatibility_version" : "5.0.0"\n  },\n  "tagline" : "You Know, for Search"\n}']],["h2","\u5206\u7247"],["p","\u5206\u7247\u662fElasticsearch\u5728\u96c6\u7fa4\u4e2d\u5206\u53d1\u6570\u636e\u7684\u5173\u952e\uff0c\u5206\u7247\u662f\u6570\u636e\u7684\u5bb9\u5668\uff0c\u6587\u6863\u90fd\u5b58\u50a8\u5728\u95ee\u7247\u4e2d\uff0c\u7136\u540e\u5206\u7247\u88ab\u5206\u914d\u5230\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u4e0a\uff0c\n\u5f53\u4f60\u7684\u96c6\u7fa4\u6269\u5bb9\u6216\u7f29\u5c0f\uff0cES\u4f1a\u81ea\u52a8\u5728\u8282\u70b9\u4e4b\u95f4\u8fc1\u79fb\u5206\u7247, \u4f7f\u96c6\u7fa4\u4fdd\u6301\u5e73\u8861"],["p","\u5206\u7247\u53ef\u4ee5\u662f\u4e3b\u5206\u7247(primary shard)\u6216\u8005\u662f\u590d\u5236\u5206\u7247\u3002\u7d22\u5f15\u4e2d\u6bcf\u4e2a\u6587\u6863\u5c5e\u4e8e\u4e00\u4e2a\u5355\u72ec\u7684\u4e3b\u5206\u7247\uff0c\u590d\u5236\u5206\u7247\u662f\u4e3b\u5206\u7247\u7684\u4e00\u4e2a\u5355\u72ec\u7684\u526f\u672c,\n\u4f5c\u4e3a\u5197\u4f59\u6570\u636e\uff0c\u9632\u6b62\u786c\u4ef6\u6545\u969c\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u3002"],["p","\u5f53\u7d22\u5f15\u521b\u5efa\u5b8c\u6210\u65f6, \u4e3b\u5206\u7247\u7684\u6570\u91cf\u5c31\u56fa\u5b9a\u4e86\uff0c\u4f46\u662f\u590d\u5236\u5206\u7247\u7684\u6570\u91cf\u53ef\u4ee5\u968f\u65f6\u8c03\u6574\u3002"],["p","\u521b\u5efa\u7d22\u5f15:"],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>X PUT http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blogs <span class="token operator">-</span>H <span class="token string">"Content-Type: application/json"</span> <span class="token operator">-</span>d <span class="token string">\'{ "settings": { "number_of_shards": 3, "number_of_replicas": 1 } }\'</span>\n\n<span class="token operator">></span> Response\n{<span class="token string">"acknowledged"</span><span class="token punctuation">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token string">"shards_acknowledged"</span><span class="token punctuation">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token string">"index"</span><span class="token punctuation">:</span><span class="token string">"blogs"</span>}'},["code",'curl -X PUT http://localhost:9200/blogs -H "Content-Type: application/json" -d \'{ "settings": { "number_of_shards": 3, "number_of_replicas": 1 } }\'\n\n> Response\n{"acknowledged":true,"shards_acknowledged":false,"index":"blogs"}']],["h2","\u542f\u52a8\u591a\u4e2a",["code","node"],"\u5b9e\u4f8b"],["pre",{lang:null,highlighted:'elasticsearch <span class="token operator">-</span>Epath<span class="token punctuation">.</span>data<span class="token operator">=</span><span class="token variable">$ELASTIC_HOME</span><span class="token operator">/</span>data<span class="token operator">/</span>es1 <span class="token operator">-</span>Epath<span class="token punctuation">.</span>logs<span class="token operator">=</span><span class="token variable">$ELASTIC_HOME</span><span class="token operator">/</span>logs<span class="token operator">/</span>es1\nelasticsearch <span class="token operator">-</span>Epath<span class="token punctuation">.</span>data<span class="token operator">=</span><span class="token variable">$ELASTIC_HOME</span><span class="token operator">/</span>data<span class="token operator">/</span>es2 <span class="token operator">-</span>Epath<span class="token punctuation">.</span>logs<span class="token operator">=</span><span class="token variable">$ELASTIC_HOME</span><span class="token operator">/</span>logs<span class="token operator">/</span>es2\nelasticsearch <span class="token operator">-</span>Epath<span class="token punctuation">.</span>data<span class="token operator">=</span><span class="token variable">$ELASTIC_HOME</span><span class="token operator">/</span>data<span class="token operator">/</span>es3 <span class="token operator">-</span>Epath<span class="token punctuation">.</span>logs<span class="token operator">=</span><span class="token variable">$ELASTIC_HOME</span><span class="token operator">/</span>logs<span class="token operator">/</span>es3'},["code","elasticsearch -Epath.data=$ELASTIC_HOME/data/es1 -Epath.logs=$ELASTIC_HOME/logs/es1\nelasticsearch -Epath.data=$ELASTIC_HOME/data/es2 -Epath.logs=$ELASTIC_HOME/logs/es2\nelasticsearch -Epath.data=$ELASTIC_HOME/data/es3 -Epath.logs=$ELASTIC_HOME/logs/es3"]],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>X GET http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>_cluster<span class="token operator">/</span>health<span class="token operator">/</span><span class="token operator">?</span>pretty\n{\n  <span class="token string">"cluster_name"</span> <span class="token punctuation">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span>\n  <span class="token string">"status"</span> <span class="token punctuation">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span>\n  <span class="token string">"timed_out"</span> <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token string">"number_of_nodes"</span> <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token string">"number_of_data_nodes"</span> <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token string">"active_primary_shards"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"active_shards"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"relocating_shards"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"initializing_shards"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"unassigned_shards"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"delayed_unassigned_shards"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"number_of_pending_tasks"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"number_of_in_flight_fetch"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"task_max_waiting_in_queue_millis"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"active_shards_percent_as_number"</span> <span class="token punctuation">:</span> <span class="token number">100.0</span>\n}'},["code",'curl -X GET http://localhost:9200/_cluster/health/?pretty\n{\n  "cluster_name" : "es",\n  "status" : "green",\n  "timed_out" : false,\n  "number_of_nodes" : 2,\n  "number_of_data_nodes" : 2,\n  "active_primary_shards" : 0,\n  "active_shards" : 0,\n  "relocating_shards" : 0,\n  "initializing_shards" : 0,\n  "unassigned_shards" : 0,\n  "delayed_unassigned_shards" : 0,\n  "number_of_pending_tasks" : 0,\n  "number_of_in_flight_fetch" : 0,\n  "task_max_waiting_in_queue_millis" : 0,\n  "active_shards_percent_as_number" : 100.0\n}']],["p",["strong","\u5176\u4e2dstatus\u4e3agreen"]],["table",["thead",["tr",["th","\u989c\u8272"],["th","\u610f\u4e49"]]],["tbody",["tr",["td","green"],["td","\u6240\u6709\u5206\u7247\u548c\u590d\u5236\u5206\u7247\u90fd\u53ef\u7528"]],["tr",["td","yellow"],["td","\u6240\u6709\u4e3b\u8981\u5206\u7247\u53ef\u7528\uff0c\u4f46\u590d\u5236\u5206\u7247\u4e0d\u662f\u90fd\u53ef\u7528"]],["tr",["td","red"],["td","\u4e0d\u662f\u6240\u6709\u4e3b\u8981\u5206\u7247\u53ef\u7528"]]]],["h2","\u6570\u636e\u7ed3\u6784"],["p","\u4e00\u4e2a\u6587\u6863\u9664\u4e86\u4fe1\u606f\u6570\u636e\u4e4b\u5916\u8fd8\u5fc5\u987b\u5305\u62ec\u5143\u6570\u636e\uff0cElasticsearch\u4e2d\u5fc5\u987b\u6709\u5982\u4e0b\u5143\u6570\u636e\u8282\u70b9:"],["table",["thead",["tr",["th","\u8282\u70b9"],["th","\u610f\u4e49"]]],["tbody",["tr",["td","_index"],["td","\u6587\u6863\u5b58\u50a8\u7684\u5730\u65b9"]],["tr",["td","_type"],["td","\u6587\u6863\u4ee3\u8868\u5bf9\u8c61\u7684\u7c7b"]],["tr",["td","_id"],["td","\u6587\u6863\u7684\u552f\u4e00\u6807\u8bc6"]]]],["ul",["li",["p",["code","_index"]," \u7d22\u5f15\u7c7b\u4f3c\u4e0e\u5173\u7cfb\u6570\u636e\u5e93\u91cc\u7684\u6570\u636e\u5e93, \u5b83\u662f\u5b58\u50a8\u548c\u7d22\u5f15\u5173\u8054\u6570\u636e\u7684\u5730\u65b9"]],["li",["p",["code","_type"],"  \u5728\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\uff0c\u6211\u4eec\u5c06\u76f8\u540c\u7c7b\u7684\u5bf9\u8c61\u5b58\u50a8\u5728\u4e00\u4e2a\u8868\u91cc\uff0c\u56e0\u4e3a\u4ed6\u4eec\u6709\u76f8\u540c\u7684\u7ed3\u6784\uff0c\u5728Elasticsearch\u4e2d,\u6211\u4eec\u4f7f\u7528\u76f8\u540c\u7c7b\u578b(type)\u7684\u6587\u6863\u8868\u793a\u76f8\u540c\u7684\u4e8b\u7269\uff0c\u4ed6\u4eec\u7684\u6570\u636e\u7ed3\u6784\u662f\u76f8\u540c\u7684"]],["li",["p",["code","_id"],"  \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4e0e",["code","_index"],"\u548c",["code","_type"],"\u7ec4\u5408\u65f6\uff0c\u5c31\u53ef\u4ee5\u5728Elasticsearch\u4e2d\u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u6587\u6863\uff0c\u5f53\u521b\u5efa\u6587\u6863\u65f6\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49",["code","_id"],"\uff0c\u4e5f\u53ef\u7531\u7cfb\u7edf\u5e2e\u4f60\u751f\u6210"]]],["p",["strong","\u548c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u505a\u4e00\u4e2a\u7c7b\u6bd4"],"\nRelational DB \u21d2 Databases \u21d2 Tables \u21d2 Rows \u21d2 Columns \nElasticsearch \u21d2 Indices \u21d2 Types \u21d2 Documents \u21d2 Fields"],["h2","\u57fa\u672c\u64cd\u4f5c"],["p","\u5047\u8bbe\u6211\u4eec\u7684\u7d22\u5f15\u4e3a",["code","blog"],"\uff0c\u7c7b\u578b\u4e3a",["code","post"],"\uff0c"],["ul",["li",["p","\u521b\u5efa\u7d22\u5f15"]]],["p","\u4f7f\u7528",["code","PUT"],"\u65b9\u6cd5\u65f6, \u6211\u4eec\u53ef\u4ee5\u6307\u5b9aID\uff0c\u5982\u679c\u5e0c\u671b\u7cfb\u7edf\u81ea\u52a8\u751f\u6210, \u53ef\u4ee5\u4f7f\u7528POST"],["pre",{lang:null,highlighted:'<span class="token operator">*</span><span class="token operator">*</span>\u624b\u52a8\u8d4b\u503cID<span class="token operator">*</span><span class="token operator">*</span>\ncurl <span class="token operator">-</span>X PUT <span class="token operator">-</span>H <span class="token string">"Content-Type: application/json"</span> \\\n     <span class="token operator">-</span>d <span class="token string">\'{ "title": "First blog", "text": "Elastic search", "date": "2018/01/01" }\'</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post\n\n{\n  <span class="token string">"_index"</span> <span class="token punctuation">:</span> <span class="token string">"blog"</span><span class="token punctuation">,</span>\n  <span class="token string">"_type"</span> <span class="token punctuation">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>\n  <span class="token string">"_id"</span> <span class="token punctuation">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>\n  <span class="token string">"_version"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"_seq_no"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"_primary_term"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"found"</span> <span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token string">"_source"</span> <span class="token punctuation">:</span> {\n    <span class="token string">"title"</span> <span class="token punctuation">:</span> <span class="token string">"First blog"</span><span class="token punctuation">,</span>\n    <span class="token string">"text"</span> <span class="token punctuation">:</span> <span class="token string">"Elastic search"</span><span class="token punctuation">,</span>\n    <span class="token string">"date"</span> <span class="token punctuation">:</span> <span class="token string">"2018/01/01"</span>\n  }\n}\n\n\n<span class="token operator">*</span><span class="token operator">*</span>\u81ea\u52a8\u751f\u6210<span class="token operator">*</span><span class="token operator">*</span>\n\ncurl <span class="token operator">-</span>X POST <span class="token operator">-</span>H <span class="token string">"Content-Type: application/json"</span> \\\n<span class="token operator">-</span>d <span class="token string">\'{ "title": "First blog", "text": "Elastic search", "date": "2018/01/01" }\'</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post\n\n{\n  <span class="token string">"_index"</span> <span class="token punctuation">:</span> <span class="token string">"blog"</span><span class="token punctuation">,</span>\n  <span class="token string">"_type"</span> <span class="token punctuation">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>\n  <span class="token string">"_id"</span> <span class="token punctuation">:</span> <span class="token string">"dKg7KWkBMu7m9eCgyDUF"</span><span class="token punctuation">,</span>\n  <span class="token string">"_version"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"_seq_no"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"_primary_term"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"found"</span> <span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token string">"_source"</span> <span class="token punctuation">:</span> {\n    <span class="token string">"title"</span> <span class="token punctuation">:</span> <span class="token string">"First blog"</span><span class="token punctuation">,</span>\n    <span class="token string">"text"</span> <span class="token punctuation">:</span> <span class="token string">"Elastic search"</span><span class="token punctuation">,</span>\n    <span class="token string">"date"</span> <span class="token punctuation">:</span> <span class="token string">"2018/01/01"</span>\n  }\n}'},["code",'**\u624b\u52a8\u8d4b\u503cID**\ncurl -X PUT -H "Content-Type: application/json" \\\n     -d \'{ "title": "First blog", "text": "Elastic search", "date": "2018/01/01" }\' http://localhost:9200/blog/post\n\n{\n  "_index" : "blog",\n  "_type" : "post",\n  "_id" : "123",\n  "_version" : 1,\n  "_seq_no" : 0,\n  "_primary_term" : 1,\n  "found" : true,\n  "_source" : {\n    "title" : "First blog",\n    "text" : "Elastic search",\n    "date" : "2018/01/01"\n  }\n}\n\n\n**\u81ea\u52a8\u751f\u6210**\n\ncurl -X POST -H "Content-Type: application/json" \\\n-d \'{ "title": "First blog", "text": "Elastic search", "date": "2018/01/01" }\' http://localhost:9200/blog/post\n\n{\n  "_index" : "blog",\n  "_type" : "post",\n  "_id" : "dKg7KWkBMu7m9eCgyDUF",\n  "_version" : 1,\n  "_seq_no" : 0,\n  "_primary_term" : 1,\n  "found" : true,\n  "_source" : {\n    "title" : "First blog",\n    "text" : "Elastic search",\n    "date" : "2018/01/01"\n  }\n}']],["ul",["li",["p","\u68c0\u7d22\u6587\u6863"]]],["p","\u8bf7\u6c42\u65f6\u8ffd\u52a0",["code","pretty"],"\u8fd4\u56de\u7ed3\u679c\u4f1a\u5bf9",["code","json"],"\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u5982\u679c\u54cd\u5e94\u5185\u5bb9\u4e2d",["code","found"],"\u4e3a",["code","true"],"\u8868\u793a\u6587\u6863\u5b58\u5728,\u5982\u679c\u6587\u6863\u4e0d\u5b58\u5728\u540c\u6837\u4f1a\u8fd4\u56de\u7ed3\u679c,",["code","found"],"\u4e3a",["code","false"]],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>X GET http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">123</span><span class="token operator">?</span>pretty\n{\n  <span class="token string">"_index"</span> <span class="token punctuation">:</span> <span class="token string">"blog"</span><span class="token punctuation">,</span>\n  <span class="token string">"_type"</span> <span class="token punctuation">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>\n  <span class="token string">"_id"</span> <span class="token punctuation">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>\n  <span class="token string">"_version"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"_seq_no"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"_primary_term"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"found"</span> <span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token string">"_source"</span> <span class="token punctuation">:</span> {\n    <span class="token string">"title"</span> <span class="token punctuation">:</span> <span class="token string">"First blog"</span><span class="token punctuation">,</span>\n    <span class="token string">"text"</span> <span class="token punctuation">:</span> <span class="token string">"Elastic search"</span><span class="token punctuation">,</span>\n    <span class="token string">"date"</span> <span class="token punctuation">:</span> <span class="token string">"2018/01/01"</span>\n  }\n}\n\ncurl <span class="token operator">-</span>X GET http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">1234</span><span class="token operator">?</span>pretty\n{\n  <span class="token string">"_index"</span> <span class="token punctuation">:</span> <span class="token string">"blog"</span><span class="token punctuation">,</span>\n  <span class="token string">"_type"</span> <span class="token punctuation">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>\n  <span class="token string">"_id"</span> <span class="token punctuation">:</span> <span class="token string">"1234"</span><span class="token punctuation">,</span>\n  <span class="token string">"found"</span> <span class="token punctuation">:</span> <span class="token boolean">false</span>\n}'},["code",'curl -X GET http://localhost:9200/blog/post/123?pretty\n{\n  "_index" : "blog",\n  "_type" : "post",\n  "_id" : "123",\n  "_version" : 1,\n  "_seq_no" : 0,\n  "_primary_term" : 1,\n  "found" : true,\n  "_source" : {\n    "title" : "First blog",\n    "text" : "Elastic search",\n    "date" : "2018/01/01"\n  }\n}\n\ncurl -X GET http://localhost:9200/blog/post/1234?pretty\n{\n  "_index" : "blog",\n  "_type" : "post",\n  "_id" : "1234",\n  "found" : false\n}']],["ul",["li",["p","\u68c0\u7d22\u6587\u6863\u4e2d\u7684\u90e8\u5206\u5b57\u6bb5"]]],["p",["code","GET"]," \u8bf7\u6c42\u4f1a\u8fd4\u56de\u6587\u6863\u7684\u5168\u90e8\u5185\u5bb9, \u5b58\u50a8\u5728_source,\u5982\u679c\u4f60\u53ea\u60f3\u663e\u793a\u90e8\u5206\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528",["code","_source"],"\u5b57\u6bb5\u8fc7\u6ee4"],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>X GET http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">123</span><span class="token operator">?</span>pretty<span class="token operator">&amp;</span>_source<span class="token operator">=</span>title<span class="token punctuation">,</span>text\n\n{\n  <span class="token string">"_index"</span> <span class="token punctuation">:</span> <span class="token string">"blog"</span><span class="token punctuation">,</span>\n  <span class="token string">"_type"</span> <span class="token punctuation">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>\n  <span class="token string">"_id"</span> <span class="token punctuation">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>\n  <span class="token string">"_version"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"_seq_no"</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token string">"_primary_term"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"found"</span> <span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token string">"_source"</span> <span class="token punctuation">:</span> {\n    <span class="token string">"text"</span> <span class="token punctuation">:</span> <span class="token string">"Elastic search"</span><span class="token punctuation">,</span>\n    <span class="token string">"title"</span> <span class="token punctuation">:</span> <span class="token string">"First blog"</span>\n  }\n}'},["code",'curl -X GET http://localhost:9200/blog/post/123?pretty&_source=title,text\n\n{\n  "_index" : "blog",\n  "_type" : "post",\n  "_id" : "123",\n  "_version" : 1,\n  "_seq_no" : 0,\n  "_primary_term" : 1,\n  "found" : true,\n  "_source" : {\n    "text" : "Elastic search",\n    "title" : "First blog"\n  }\n}']],["ul",["li",["p","\u68c0\u67e5\u6587\u6863\u662f\u5426\u5b58\u5728"]]],["p","\u5b58\u5728\u8fd4\u56de",["code","200"],",\u4e0d\u5b58\u5728\u8fd4\u56de",["code","404"]],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>I http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">123</span>\nHTTP<span class="token operator">/</span><span class="token number">1.1</span> <span class="token number">200</span> OK\ncontent<span class="token operator">-</span>type<span class="token punctuation">:</span> application<span class="token operator">/</span>json<span class="token comment" spellcheck="true">; charset=UTF-8</span>\ncontent<span class="token operator">-</span>length<span class="token punctuation">:</span> <span class="token number">184</span>'},["code","curl -I http://localhost:9200/blog/post/123\nHTTP/1.1 200 OK\ncontent-type: application/json; charset=UTF-8\ncontent-length: 184"]],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>I  http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">1234</span>\nHTTP<span class="token operator">/</span><span class="token number">1.1</span> <span class="token number">404</span> <span class="token operator">Not</span> Found\ncontent<span class="token operator">-</span>type<span class="token punctuation">:</span> application<span class="token operator">/</span>json<span class="token comment" spellcheck="true">; charset=UTF-8</span>\ncontent<span class="token operator">-</span>length<span class="token punctuation">:</span> <span class="token number">59</span>'},["code","curl -I  http://localhost:9200/blog/post/1234\nHTTP/1.1 404 Not Found\ncontent-type: application/json; charset=UTF-8\ncontent-length: 59"]],["ul",["li",["p","\u66f4\u65b0\u6587\u6863"]]],["p","\u66f4\u65b0\u6587\u6863\u65f6\uff0c\u539f\u6709\u6587\u6863\u4f1a\u88ab\u6807\u8bb0\u4e3a\u5220\u9664\uff0c\u4e0d\u53ef\u8bbf\u95ee\uff0c\u65b0\u6587\u6863\u7248\u672c\u53f7\u4f1a+1"],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>X PUT <span class="token operator">-</span>H <span class="token string">"Content-Type: application/json"</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">123</span> <span class="token operator">-</span>d <span class="token string">\'{ "title": "Update blog" }\'</span>\n\n{\n  <span class="token string">"_index"</span> <span class="token punctuation">:</span> <span class="token string">"blog"</span><span class="token punctuation">,</span>\n  <span class="token string">"_type"</span> <span class="token punctuation">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>\n  <span class="token string">"_id"</span> <span class="token punctuation">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>\n  <span class="token string">"_version"</span> <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token string">"_seq_no"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"_primary_term"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"found"</span> <span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token string">"_source"</span> <span class="token punctuation">:</span> {\n    <span class="token string">"title"</span> <span class="token punctuation">:</span> <span class="token string">"Update blog"</span>\n  }\n}'},["code",'curl -X PUT -H "Content-Type: application/json" http://localhost:9200/blog/post/123 -d \'{ "title": "Update blog" }\'\n\n{\n  "_index" : "blog",\n  "_type" : "post",\n  "_id" : "123",\n  "_version" : 2,\n  "_seq_no" : 1,\n  "_primary_term" : 1,\n  "found" : true,\n  "_source" : {\n    "title" : "Update blog"\n  }\n}']],["p","\u5c40\u90e8\u66f4\u65b0"],["p","\u4f7f\u7528update API\u66f4\u65b0\u6587\u6863\u65f6\uff0c\u4f1a\u63a5\u53d7\u4e00\u4e2a\u5c40\u90e8\u6587\u6863\u53c2\u6570doc\uff0c\u5b83\u4f1a\u5408\u5e76\u5230\u73b0\u6709\u6587\u6863\u4e2d\uff0c\u5bf9\u8c61\u5408\u5e76\u5728\u4e00\u8d77\uff0c\u5df2\u7ecf\u5b58\u5728\u7684\u5b57\u6bb5\u88ab\u8986\u76d6, \u65b0\u5b57\u6bb5\n\u5219\u8ffd\u52a0\u5230\u539f\u6587\u6863"],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>X POST <span class="token operator">-</span>H <span class="token string">"Content-Type: application/json"</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">123</span><span class="token operator">/</span>_update <span class="token operator">-</span>d <span class="token string">\'{ "doc": { "title": "Update partial blog", "views": 0 }}\'</span>\n\n{\n  <span class="token string">"_index"</span> <span class="token punctuation">:</span> <span class="token string">"blog"</span><span class="token punctuation">,</span>\n  <span class="token string">"_type"</span> <span class="token punctuation">:</span> <span class="token string">"post"</span><span class="token punctuation">,</span>\n  <span class="token string">"_id"</span> <span class="token punctuation">:</span> <span class="token string">"123"</span><span class="token punctuation">,</span>\n  <span class="token string">"_version"</span> <span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n  <span class="token string">"_seq_no"</span> <span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token string">"_primary_term"</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"found"</span> <span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token string">"_source"</span> <span class="token punctuation">:</span> {\n    <span class="token string">"title"</span> <span class="token punctuation">:</span> <span class="token string">"Update partial blog"</span><span class="token punctuation">,</span>\n    <span class="token string">"views"</span> <span class="token punctuation">:</span> <span class="token number">0</span>\n  }\n}'},["code",'curl -X POST -H "Content-Type: application/json" http://localhost:9200/blog/post/123/_update -d \'{ "doc": { "title": "Update partial blog", "views": 0 }}\'\n\n{\n  "_index" : "blog",\n  "_type" : "post",\n  "_id" : "123",\n  "_version" : 3,\n  "_seq_no" : 2,\n  "_primary_term" : 1,\n  "found" : true,\n  "_source" : {\n    "title" : "Update partial blog",\n    "views" : 0\n  }\n}']],["h2","\u6587\u6863\u51b2\u7a81"],["p","\u7531\u4e8eElasticsearch\u662f\u5206\u5e03\u5f0f\u7ed3\u6784\u7684\uff0c\u6bcf\u4e2a\u6587\u6863\u53ef\u80fd\u5b58\u50a8\u5728\u4e0d\u540c\u7684\u5206\u7247\u4e0a\uff0c\u5f53\u591a\u4e2a\u8fdb\u7a0b\u540c\u65f6\u66f4\u65b0\u6587\u6863\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u5199\u51b2\u7a81\uff0c\n\u8fd9\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u810f\u6570\u636e\u3002\n\u7c7b\u6bd4\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u7684\u5199\u51b2\u7a81\u89e3\u51b3\u65b9\u6cd5"],["ul",["li",["p","\u60b2\u89c2\u9501\uff1a\u5047\u8bbe\u4efb\u4f55\u60c5\u51b5\u4e0b\u90fd\u4f1a\u53d1\u751f\u51b2\u7a81\uff0c\u5199\u6570\u636e\u65f6\u5148\u8bf7\u6c42\u9501\uff0c\u5f97\u5230\u9501\u4e4b\u540e\u5199\u6570\u636e\uff0c\u5b8c\u6210\u540e\u91ca\u653e\u9501"]],["li",["p","\u4e50\u89c2\u9501\uff1a\u5047\u8bbe\u4e0d\u4f1a\u9020\u6210\u51b2\u7a81\uff0c\u76f4\u63a5\u53bb\u5199, \u5199\u6570\u636e\u7684\u65f6\u5019\u8fdb\u884c\u7248\u672c\u6bd4\u8f83\uff0c\u5982\u679c\u4e0d\u4e00\u81f4\uff0c\u8bf4\u660e\u6709\u5176\u4ed6\u8fdb\u7a0b\u4fee\u6539\u8fc7\uff0c\u629b\u51fa\u5f02\u5e38\n\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7248\u672c\u53f7\u6765\u89e3\u51b3Elasticsearch\u4e2d\u7684\u5199\u51b2\u7a81\u95ee\u9898\n\u5728\u63d0\u4ea4\u66f4\u65b0\u7684\u65f6\u5019\u52a0\u5165\u7248\u672c\u53f7\uff0c\u5982\u679c\u7248\u672c\u53f7\u4e00\u81f4\u5219\u4fee\u6539\uff0c\u4e0d\u4e00\u81f4\u5219\u8df3\u8fc7"]]],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>X POST <span class="token operator">-</span>H <span class="token string">"Content-Type: application/json"</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token punctuation">:</span><span class="token number">9200</span><span class="token operator">/</span>blog<span class="token operator">/</span>post<span class="token operator">/</span><span class="token number">123</span><span class="token operator">?</span>version<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">-</span>d <span class="token string">\'{ "title": "Update partial blog", "views": 0 }\'</span>'},["code",'curl -X POST -H "Content-Type: application/json" http://localhost:9200/blog/post/123?version=1 -d \'{ "title": "Update partial blog", "views": 0 }\'']]],meta:{order:51,title:"Elastic Search \u5165\u95e8",type:"\u5165\u95e8",filename:"docs/database/elastic-introduction.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5Elastic-Search",title:"\u5b89\u88c5Elastic Search"},"\u5b89\u88c5Elastic Search"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5206\u7247",title:"\u5206\u7247"},"\u5206\u7247"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u542f\u52a8\u591a\u4e2anode\u5b9e\u4f8b",title:"\u542f\u52a8\u591a\u4e2anode\u5b9e\u4f8b"},"\u542f\u52a8\u591a\u4e2a",["code","node"],"\u5b9e\u4f8b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6570\u636e\u7ed3\u6784",title:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u57fa\u672c\u64cd\u4f5c",title:"\u57fa\u672c\u64cd\u4f5c"},"\u57fa\u672c\u64cd\u4f5c"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6587\u6863\u51b2\u7a81",title:"\u6587\u6863\u51b2\u7a81"},"\u6587\u6863\u51b2\u7a81"]]]}}});