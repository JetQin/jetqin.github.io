webpackJsonp([21],{1310:function(n,s){n.exports={content:["article",["h2","\u7b80\u4ecb"],["p","Zookeeper\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u8fb9\u754c\u670d\u52a1\uff0c\u5f88\u591a\u5206\u5e03\u5f0f\u5f00\u6e90\u9879\u76ee\u90fd\u6709\u4f7f\u7528\u5230zookeeper\u3002\n\u5b83\u6709\u5f88\u591a\u65b9\u9762\u7684\u5e94\u7528\uff0c\u5982\u5206\u5e03\u5f0f\u9501\uff0c\u5206\u5e03\u5f0f\u9009\u4e3e\u7b49\u3002"],["h2","\u4e0b\u8f7d\u5b89\u88c5"],["p","\u5982\u679c\u60f3\u5c1d\u8bd5\u6700\u65b0\u7684zookeeper\u53ef\u4ee5\u5728",["a",{title:null,href:"https://archive.apache.org/dist/zookeeper/"},"\u8fd9\u91cc"],"\u4e0b\u8f7d\u6700\u65b0\u7684zookeeper\u6587\u4ef6\uff0c\n\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e"],["pre",{lang:null,highlighted:'tar <span class="token operator">-</span>xvf apache<span class="token operator">-</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz\ncd ~<span class="token operator">/</span>apache<span class="token operator">-</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>conf\ncp zoo_sample<span class="token punctuation">.</span>cfg zoo<span class="token punctuation">.</span>cfg\nzkServer<span class="token punctuation">.</span>sh start                   # \u9ed8\u8ba4\u8c03\u7528zoo<span class="token punctuation">.</span>cfg'},["code","tar -xvf apache-zookeeper-3.5.6.tar.gz\ncd ~/apache-zookeeper-3.5.6/conf\ncp zoo_sample.cfg zoo.cfg\nzkServer.sh start                   # \u9ed8\u8ba4\u8c03\u7528zoo.cfg"]],["h2","\u90e8\u7f72"],["ul",["li",["p","\u5355\u8282\u70b9\u90e8\u7f72"]]],["p","\u914d\u7f6e\u6587\u4ef6"],["pre",{lang:null,highlighted:'# The number of milliseconds of each tick\ntickTime<span class="token operator">=</span><span class="token number">2000</span>\n\n# The number of ticks that the initial \n# synchronization phase can take\ninitLimit<span class="token operator">=</span><span class="token number">10</span>\n\n# sending a request <span class="token operator">and</span> getting an acknowledgement\nsyncLimit<span class="token operator">=</span><span class="token number">5</span>\n\n# the directory where the snapshot is stored<span class="token punctuation">.</span>\ndataDir<span class="token operator">=</span>\uff5e<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>data<span class="token operator">/</span>zk\n\n# the port at which the clients will connect\nclientPort<span class="token operator">=</span><span class="token number">2181</span>\n\n# increase this <span class="token keyword">if</span> you need <span class="token keyword">to</span> handle more clients\nmaxClientCnxns<span class="token operator">=</span><span class="token number">60</span>'},["code","# The number of milliseconds of each tick\ntickTime=2000\n\n# The number of ticks that the initial \n# synchronization phase can take\ninitLimit=10\n\n# sending a request and getting an acknowledgement\nsyncLimit=5\n\n# the directory where the snapshot is stored.\ndataDir=\uff5e/zookeeper-3.5.6/data/zk\n\n# the port at which the clients will connect\nclientPort=2181\n\n# increase this if you need to handle more clients\nmaxClientCnxns=60"]],["p","\u5355\u8282\u70b9\u90e8\u7f72\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528",["code","zkServer.sh start"]," \u542f\u52a8"],["ul",["li",["p","\u591a\u63a5\u70b9\u90e8\u7f72"]]],["p","\u4e3a\u4e86\u5b9e\u9a8c\u76ee\u7684\u53ef\u4ee5\u5728\u540c\u4e00\u53f0\u7269\u7406\u673a\u5668\u4e0a\u90e8\u7f72\u591a\u4e2azookeeper server\u3002\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u6b65\u9aa4\u6765\u542f\u52a8\u591a\u4e2azookeeper server"],["pre",{lang:null,highlighted:'<span class="token operator">-</span> copy\u914d\u7f6e\u6587\u4ef6\n```\ncp conf<span class="token operator">/</span>zoo<span class="token punctuation">.</span>cfg conf<span class="token operator">/</span>zoo1<span class="token punctuation">.</span>cfg\ncp conf<span class="token operator">/</span>zoo<span class="token punctuation">.</span>cfg conf<span class="token operator">/</span>zoo1<span class="token punctuation">.</span>cfg\ncp conf<span class="token operator">/</span>zoo<span class="token punctuation">.</span>cfg conf<span class="token operator">/</span>zoo1<span class="token punctuation">.</span>cfg\n```\n<span class="token operator">-</span> \u4fee\u6539\u914d\u7f6e\u6587\u4ef6\nzoo1<span class="token punctuation">.</span>cfg<span class="token punctuation">,</span> zoo2<span class="token punctuation">.</span>cfg<span class="token punctuation">,</span> zoo3<span class="token punctuation">.</span>cfg \u4e09\u8005\u7684\u552f\u4e00\u4e0d\u901a\u70b9\u5728\u4e8edataDir\uff0cclientPort\uff0c\u9700\u8981\u4e3a\u4e09\u8005\u8bbe\u5b9a\u4e0d\u540c\u7684\u5b58\u50a8\u76ee\u5f55\u548c\u7aef\u53e3\u53f7\n\n```\n##### zoo1<span class="token punctuation">.</span>cfg\n    tickTime<span class="token operator">=</span><span class="token number">2000</span>\n    initLimit<span class="token operator">=</span><span class="token number">10</span>\n    syncLimit<span class="token operator">=</span><span class="token number">5</span>\n    dataDir<span class="token operator">=</span><span class="token operator">/</span>Users<span class="token operator">/</span>jet<span class="token operator">/</span>app<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>data<span class="token operator">/</span>zk1\n    clientPort<span class="token operator">=</span><span class="token number">2181</span>\n    maxClientCnxns<span class="token operator">=</span><span class="token number">60</span>\n    server<span class="token punctuation">.</span><span class="token number">1</span><span class="token operator">=</span>localhost<span class="token punctuation">:</span><span class="token number">2887</span><span class="token punctuation">:</span><span class="token number">3887</span>\n    server<span class="token punctuation">.</span><span class="token number">2</span><span class="token operator">=</span>localhost<span class="token punctuation">:</span><span class="token number">2888</span><span class="token punctuation">:</span><span class="token number">3888</span>\n    server<span class="token punctuation">.</span><span class="token number">3</span><span class="token operator">=</span>localhost<span class="token punctuation">:</span><span class="token number">2889</span><span class="token punctuation">:</span><span class="token number">3889</span>\n\n##### zoo2<span class="token punctuation">.</span>cfg\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    dataDir<span class="token operator">=</span><span class="token operator">/</span>Users<span class="token operator">/</span>jet<span class="token operator">/</span>app<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>data<span class="token operator">/</span>zk2\n    clientPort<span class="token operator">=</span><span class="token number">2182</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\n##### zoo3<span class="token punctuation">.</span>cfg\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    dataDir<span class="token operator">=</span><span class="token operator">/</span>Users<span class="token operator">/</span>jet<span class="token operator">/</span>app<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>data<span class="token operator">/</span>zk3\n    clientPort<span class="token operator">=</span><span class="token number">2183</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n```\n<span class="token operator">-</span> \u521b\u5efazookeeper id\uff0c\n  \u5728dataDir\u76ee\u5f55\u4e0b\u4e3a\u4e09\u8005\u5206\u522b\u521b\u5efa`myid`\u6587\u4ef6<span class="token punctuation">,</span>myid \u4e2d\u6307\u5b9azkserver\u7684\u5168\u5c40\u552f\u4e00ID\uff0c\u5982 <span class="token number">1</span>\uff0c \u5982\u4e0b\u56fe\n  !<span class="token punctuation">[</span>Zookeeper Server<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">/</span>assets<span class="token operator">/</span>zkserver<span class="token punctuation">.</span>png<span class="token punctuation">)</span>'},["code","- copy\u914d\u7f6e\u6587\u4ef6\n```\ncp conf/zoo.cfg conf/zoo1.cfg\ncp conf/zoo.cfg conf/zoo1.cfg\ncp conf/zoo.cfg conf/zoo1.cfg\n```\n- \u4fee\u6539\u914d\u7f6e\u6587\u4ef6\nzoo1.cfg, zoo2.cfg, zoo3.cfg \u4e09\u8005\u7684\u552f\u4e00\u4e0d\u901a\u70b9\u5728\u4e8edataDir\uff0cclientPort\uff0c\u9700\u8981\u4e3a\u4e09\u8005\u8bbe\u5b9a\u4e0d\u540c\u7684\u5b58\u50a8\u76ee\u5f55\u548c\u7aef\u53e3\u53f7\n\n```\n##### zoo1.cfg\n    tickTime=2000\n    initLimit=10\n    syncLimit=5\n    dataDir=/Users/jet/app/zookeeper-3.5.6/data/zk1\n    clientPort=2181\n    maxClientCnxns=60\n    server.1=localhost:2887:3887\n    server.2=localhost:2888:3888\n    server.3=localhost:2889:3889\n\n##### zoo2.cfg\n    ...\n    dataDir=/Users/jet/app/zookeeper-3.5.6/data/zk2\n    clientPort=2182\n    ...\n\n##### zoo3.cfg\n    ...\n    dataDir=/Users/jet/app/zookeeper-3.5.6/data/zk3\n    clientPort=2183\n    ...\n```\n- \u521b\u5efazookeeper id\uff0c\n  \u5728dataDir\u76ee\u5f55\u4e0b\u4e3a\u4e09\u8005\u5206\u522b\u521b\u5efa`myid`\u6587\u4ef6,myid \u4e2d\u6307\u5b9azkserver\u7684\u5168\u5c40\u552f\u4e00ID\uff0c\u5982 1\uff0c \u5982\u4e0b\u56fe\n  ![Zookeeper Server](./assets/zkserver.png)"]],["h2","\u5e94\u7528"],["h4","\u901a\u8fc7zkAll.sh\u542f\u52a8zk1\uff0c2\uff0c3"],["pre",{lang:null,highlighted:'Zookeeper config ~<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>bin<span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>conf\nZooKeeper JMX enabled by <span class="token keyword">default</span>\nUsing config<span class="token punctuation">:</span> ~<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>conf<span class="token operator">/</span>zoo1<span class="token punctuation">.</span>cfg\nStarting zookeeper <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> STARTED\nZookeeper config ~<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>bin<span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>conf\nZooKeeper JMX enabled by <span class="token keyword">default</span>\nUsing config<span class="token punctuation">:</span> ~<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>conf<span class="token operator">/</span>zoo2<span class="token punctuation">.</span>cfg\nStarting zookeeper <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> STARTED\nZookeeper config ~<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>bin<span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>conf\nZooKeeper JMX enabled by <span class="token keyword">default</span>\nUsing config<span class="token punctuation">:</span> ~<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>conf<span class="token operator">/</span>zoo3<span class="token punctuation">.</span>cfg\nStarting zookeeper <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> STARTED'},["code","Zookeeper config ~/zookeeper-3.5.6/bin/../conf\nZooKeeper JMX enabled by default\nUsing config: ~/zookeeper-3.5.6/conf/zoo1.cfg\nStarting zookeeper ... STARTED\nZookeeper config ~/zookeeper-3.5.6/bin/../conf\nZooKeeper JMX enabled by default\nUsing config: ~/zookeeper-3.5.6/conf/zoo2.cfg\nStarting zookeeper ... STARTED\nZookeeper config ~/zookeeper-3.5.6/bin/../conf\nZooKeeper JMX enabled by default\nUsing config: ~/zookeeper-3.5.6/conf/zoo3.cfg\nStarting zookeeper ... STARTED"]],["ul",["li",["p","\u8fde\u63a5\u5230zkServer"]]],["pre",{lang:null,highlighted:'zkCli<span class="token punctuation">.</span>sh <span class="token operator">-</span>server localhost<span class="token punctuation">:</span><span class="token number">2181</span>\n\nZookeeper config ~<span class="token operator">/</span>zookeeper<span class="token operator">-</span><span class="token number">3.5</span><span class="token punctuation">.</span><span class="token number">6</span><span class="token operator">/</span>bin<span class="token operator">/</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>conf\nConnecting <span class="token keyword">to</span> localhost<span class="token punctuation">:</span><span class="token number">2181</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\nWelcome <span class="token keyword">to</span> ZooKeeper!\n<span class="token number">2019</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">22</span><span class="token punctuation">:</span><span class="token number">49</span><span class="token punctuation">:</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">610</span> <span class="token punctuation">[</span>myid<span class="token punctuation">:</span>localhost<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">]</span> <span class="token operator">-</span> INFO  <span class="token punctuation">[</span>main<span class="token operator">-</span><span class="token function">SendThread</span><span class="token punctuation">(</span>localhost<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">)</span><span class="token punctuation">:</span>ClientCnxn<span class="token variable">$SendThread</span><span class="token variable">@1112</span><span class="token punctuation">]</span> <span class="token operator">-</span> Opening socket connection <span class="token keyword">to</span> server localhost<span class="token operator">/</span><span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">.</span> Will <span class="token operator">not</span> attempt <span class="token keyword">to</span> authenticate using SASL <span class="token punctuation">(</span>unknown error<span class="token punctuation">)</span>\nJLine support is enabled\n<span class="token number">2019</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">22</span><span class="token punctuation">:</span><span class="token number">49</span><span class="token punctuation">:</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">628</span> <span class="token punctuation">[</span>myid<span class="token punctuation">:</span>localhost<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">]</span> <span class="token operator">-</span> INFO  <span class="token punctuation">[</span>main<span class="token operator">-</span><span class="token function">SendThread</span><span class="token punctuation">(</span>localhost<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">)</span><span class="token punctuation">:</span>ClientCnxn<span class="token variable">$SendThread</span><span class="token variable">@959</span><span class="token punctuation">]</span> <span class="token operator">-</span> Socket connection established<span class="token punctuation">,</span> initiating session<span class="token punctuation">,</span> client<span class="token punctuation">:</span> <span class="token operator">/</span><span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">57401</span><span class="token punctuation">,</span> server<span class="token punctuation">:</span> localhost<span class="token operator">/</span><span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">2181</span>\n<span class="token number">2019</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">21</span> <span class="token number">22</span><span class="token punctuation">:</span><span class="token number">49</span><span class="token punctuation">:</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">671</span> <span class="token punctuation">[</span>myid<span class="token punctuation">:</span>localhost<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">]</span> <span class="token operator">-</span> INFO  <span class="token punctuation">[</span>main<span class="token operator">-</span><span class="token function">SendThread</span><span class="token punctuation">(</span>localhost<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">)</span><span class="token punctuation">:</span>ClientCnxn<span class="token variable">$SendThread</span><span class="token variable">@1394</span><span class="token punctuation">]</span> <span class="token operator">-</span> Session establishment complete on server localhost<span class="token operator">/</span><span class="token number">127.0</span><span class="token punctuation">.</span><span class="token number">0.1</span><span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">,</span> sessionid <span class="token operator">=</span> <span class="token number">0x10003be32c80000</span><span class="token punctuation">,</span> negotiated timeout <span class="token operator">=</span> <span class="token number">30000</span>\n\nWATCHER<span class="token punctuation">:</span><span class="token punctuation">:</span>\n\n## \u521b\u5efanode\n\n<span class="token punctuation">[</span>zk<span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token function">2181</span><span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">]</span> create tmp\nPath must start <span class="token keyword">with</span> <span class="token operator">/</span> character\n<span class="token punctuation">[</span>zk<span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token function">2181</span><span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">]</span> create <span class="token operator">/</span>tmp\nCreated <span class="token operator">/</span>tmp\n\n## \u7ed9\u8282\u70b9\u8d4b\u503c\n<span class="token punctuation">[</span>zk<span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token function">2181</span><span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">4</span><span class="token punctuation">]</span> set <span class="token operator">/</span>tmp <span class="token string">\'hello zookeeper\'</span>\n\n## \u83b7\u53d6\u8282\u503c\n<span class="token punctuation">[</span>zk<span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token function">2181</span><span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">6</span><span class="token punctuation">]</span> get <span class="token operator">/</span>tmp\nhello zookeeper\n\n## \u5220\u9664node\n<span class="token punctuation">[</span>zk<span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token function">2181</span><span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">7</span><span class="token punctuation">]</span> delete <span class="token operator">/</span>tmp\n<span class="token punctuation">[</span>zk<span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token function">2181</span><span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">8</span><span class="token punctuation">]</span> get <span class="token operator">/</span>tmp\norg<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span>KeeperException<span class="token variable">$NoNodeException</span><span class="token punctuation">:</span> KeeperErrorCode <span class="token operator">=</span> NoNode <span class="token keyword">for</span> <span class="token operator">/</span>tmp'},["code","zkCli.sh -server localhost:2181\n\nZookeeper config ~/zookeeper-3.5.6/bin/../conf\nConnecting to localhost:2181\n......\n\nWelcome to ZooKeeper!\n2019-11-21 22:49:34,610 [myid:localhost:2181] - INFO  [main-SendThread(localhost:2181):ClientCnxn$SendThread@1112] - Opening socket connection to server localhost/127.0.0.1:2181. Will not attempt to authenticate using SASL (unknown error)\nJLine support is enabled\n2019-11-21 22:49:34,628 [myid:localhost:2181] - INFO  [main-SendThread(localhost:2181):ClientCnxn$SendThread@959] - Socket connection established, initiating session, client: /127.0.0.1:57401, server: localhost/127.0.0.1:2181\n2019-11-21 22:49:34,671 [myid:localhost:2181] - INFO  [main-SendThread(localhost:2181):ClientCnxn$SendThread@1394] - Session establishment complete on server localhost/127.0.0.1:2181, sessionid = 0x10003be32c80000, negotiated timeout = 30000\n\nWATCHER::\n\n## \u521b\u5efanode\n\n[zk: localhost:2181(CONNECTED) 0] create tmp\nPath must start with / character\n[zk: localhost:2181(CONNECTED) 2] create /tmp\nCreated /tmp\n\n## \u7ed9\u8282\u70b9\u8d4b\u503c\n[zk: localhost:2181(CONNECTED) 4] set /tmp 'hello zookeeper'\n\n## \u83b7\u53d6\u8282\u503c\n[zk: localhost:2181(CONNECTED) 6] get /tmp\nhello zookeeper\n\n## \u5220\u9664node\n[zk: localhost:2181(CONNECTED) 7] delete /tmp\n[zk: localhost:2181(CONNECTED) 8] get /tmp\norg.apache.zookeeper.KeeperException$NoNodeException: KeeperErrorCode = NoNode for /tmp"]]],meta:{order:3,title:"Zookeeper \u5165\u95e8",type:"\u5165\u95e8",filename:"docs/distribution/zookeeper.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u7b80\u4ecb",title:"\u7b80\u4ecb"},"\u7b80\u4ecb"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4e0b\u8f7d\u5b89\u88c5",title:"\u4e0b\u8f7d\u5b89\u88c5"},"\u4e0b\u8f7d\u5b89\u88c5"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u90e8\u7f72",title:"\u90e8\u7f72"},"\u90e8\u7f72"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5e94\u7528",title:"\u5e94\u7528"},"\u5e94\u7528"]]]}}});