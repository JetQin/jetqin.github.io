webpackJsonp([9],{1278:function(n,a){n.exports={content:["article",["h2","jps \u865a\u62df\u673a\u8fdb\u7a0b\u72b6\u51b5\u76d1\u63a7\u5de5\u5177"],["p","jps \u53ef\u4ee5\u5217\u51fa\u6b63\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u8fdb\u7a0b\uff0c\u5c4f\u663e\u793a\u865a\u62df\u673a\u6267\u884c\u4e3b\u7c7b\u7684\u540d\u79f0"],["pre",{lang:null,highlighted:'jps <span class="token operator">-</span>l\n<span class="token number">45604</span> org<span class="token punctuation">.</span>jetbrains<span class="token punctuation">.</span>jps<span class="token punctuation">.</span>cmdline<span class="token punctuation">.</span>Launcher\n<span class="token number">53550</span> sun<span class="token punctuation">.</span>tools<span class="token punctuation">.</span>jps<span class="token punctuation">.</span>Jps'},["code","jps -l\n45604 org.jetbrains.jps.cmdline.Launcher\n53550 sun.tools.jps.Jps"]],["h2","jstat \u865a\u62df\u673a\u7edf\u8ba1\u4fe1\u606f\u76d1\u89c6\u5de5\u5177"],["p","jstat \u53ef\u4ee5\u663e\u793a\u672c\u5730\u6216\u8fdc\u7a0b\u865a\u62df\u673a\u8fdb\u7a0b\u4e2d\u7684\u7c7b\u88c5\u8f7d\uff0c\u5185\u5b58\uff0c\u5783\u573e\u6536\u96c6\u7b49\u8fd0\u884c\u6570\u636e"],["pre",{lang:null,highlighted:'jstat <span class="token operator">-</span>gcutil <span class="token number">45604</span> <span class="token number">250</span> <span class="token number">20</span>\n\nS0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT\n<span class="token number">0.00</span>  <span class="token number">99.38</span>  <span class="token number">42.26</span>  <span class="token number">39.65</span>  <span class="token number">98.09</span>  <span class="token number">95.76</span>      <span class="token number">3</span>    <span class="token number">0.013</span>     <span class="token number">0</span>    <span class="token number">0.000</span>    <span class="token number">0.013</span>\n\nS0<span class="token punctuation">:</span> Survivor <span class="token number">0</span>\u533a\nS1<span class="token punctuation">:</span> Survivor <span class="token number">1</span>\u533a\nE<span class="token punctuation">:</span> Eden\u533a\nO<span class="token punctuation">:</span> \u8001\u5e74\u4ee3\nM<span class="token punctuation">:</span> Metaspace \u533a\n<span class="token function">YGC</span><span class="token punctuation">(</span>Young GC<span class="token punctuation">)</span><span class="token punctuation">:</span> \u5171\u53d1\u751fMinor GC\u7684\u6b21\u6570\n<span class="token function">YGCT</span><span class="token punctuation">(</span>Young GC Time<span class="token punctuation">)</span><span class="token punctuation">:</span> \u8017\u65f6 <span class="token number">0.013</span>\u79d2\n<span class="token function">FGC</span><span class="token punctuation">(</span>Full GC<span class="token punctuation">)</span><span class="token punctuation">:</span>  \u53d1\u751fFull GC <span class="token number">0</span>\u6b21\n<span class="token function">FGCT</span><span class="token punctuation">(</span>Full GC Time<span class="token punctuation">)</span><span class="token punctuation">:</span> \u8017\u65f6 <span class="token number">0.000</span>\u79d2\n<span class="token function">GCT</span><span class="token punctuation">(</span>GC Time<span class="token punctuation">)</span><span class="token punctuation">:</span> \u5783\u573e\u56de\u6536\u603b\u8017\u65f6'},["code","jstat -gcutil 45604 250 20\n\nS0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT\n0.00  99.38  42.26  39.65  98.09  95.76      3    0.013     0    0.000    0.013\n\nS0: Survivor 0\u533a\nS1: Survivor 1\u533a\nE: Eden\u533a\nO: \u8001\u5e74\u4ee3\nM: Metaspace \u533a\nYGC(Young GC): \u5171\u53d1\u751fMinor GC\u7684\u6b21\u6570\nYGCT(Young GC Time): \u8017\u65f6 0.013\u79d2\nFGC(Full GC):  \u53d1\u751fFull GC 0\u6b21\nFGCT(Full GC Time): \u8017\u65f6 0.000\u79d2\nGCT(GC Time): \u5783\u573e\u56de\u6536\u603b\u8017\u65f6"]],["h2","jmap Java \u5185\u5b58\u6620\u50cf\u5de5\u5177"],["p","jmap \u547d\u4ee4\u7528\u4e8e\u751f\u6210\u5806\u8f6c\u50a8\u5feb\u7167\uff08\u4e00\u822c\u6210\u4e3aheapdump\u6216dump\u6587\u4ef6\uff09\u4e5f\u53ef\u4ee5\u901a\u8fc7-XX:+HeapDumpOnOutOfMemeoryError\u53c2\u6570, \n\u53ef\u4ee5\u8ba9\u865a\u62df\u673a\u5728OOM\u5f02\u5e38\u51fa\u73b0\u4e4b\u540e\u81ea\u52a8\u751f\u6210dump\u6587\u4ef6\uff0c jmap\u8fd8\u53ef\u4ee5\u67e5\u8be2finalize\u6267\u884c\u961f\u5217\uff0cJava\u5806\u548c\u6c38\u4e45\u5e26\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5982\n\u7a7a\u95f4\u4f7f\u7528\u7387\uff0c\u5f53\u524d\u4f7f\u7528\u7684\u6536\u96c6\u5668\u7b49"],["pre",{lang:null,highlighted:'jmap <span class="token operator">-</span>dump<span class="token punctuation">:</span>format<span class="token operator">=</span>b<span class="token punctuation">,</span>file<span class="token operator">=</span>idea<span class="token punctuation">.</span>bin <span class="token number">53850</span>\nDumping heap <span class="token keyword">to</span> <span class="token operator">/</span>home<span class="token operator">/</span>idea<span class="token punctuation">.</span>bin <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nHeap dump file created'},["code","jmap -dump:format=b,file=idea.bin 53850\nDumping heap to /home/idea.bin ...\nHeap dump file created"]],["h2","jhat \u865a\u62df\u673a\u5806\u8f6c\u50a8\u5feb\u7167\u5206\u6790\u5de5\u5177"],["p","jhat \u53ef\u4ee5\u7528\u6765\u5206\u6790jmap\u751f\u6210\u7684\u5806\u8f6c\u50a8\u5feb\u7167, \u5f53\u670d\u52a1ready\u4e4b\u540e\u53ef\u901a\u8fc7\u6d4f\u89c8\u5668\u67e5\u770b",["code","http://localhost:7000"]],["pre",{lang:null,highlighted:'jhat idea<span class="token punctuation">.</span>bin\nReading from idea<span class="token punctuation">.</span>bin<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nDump file created Tue Feb <span class="token number">12</span> <span class="token number">23</span><span class="token punctuation">:</span><span class="token number">29</span><span class="token punctuation">:</span><span class="token number">22</span> CST <span class="token number">2019</span>\nSnapshot read<span class="token punctuation">,</span> resolving<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nResolving <span class="token number">92874</span> objects<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nChasing references<span class="token punctuation">,</span> expect <span class="token number">18</span> dots<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nEliminating duplicate references<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\nSnapshot resolved<span class="token punctuation">.</span>\nStarted HTTP server on port <span class="token number">7000</span>\nServer is ready<span class="token punctuation">.</span>'},["code","jhat idea.bin\nReading from idea.bin...\nDump file created Tue Feb 12 23:29:22 CST 2019\nSnapshot read, resolving...\nResolving 92874 objects...\nChasing references, expect 18 dots..................\nEliminating duplicate references..................\nSnapshot resolved.\nStarted HTTP server on port 7000\nServer is ready."]],["h2","jstack \u5806\u5185\u5b58\u8ddf\u8e2a\u5de5\u5177"],["p","jstack\u547d\u4ee4\u7528\u4e8e\u751f\u6210\u865a\u62df\u673a\u5f53\u524d\u65f6\u523b\u7ebf\u7a0b\u5feb\u7167\uff0c\u7ebf\u7a0b\u5feb\u7167\u5c31\u662f\u5f53\u524d\u865a\u62df\u673a\u5185\u6bcf\u4e00\u6761\u7ebf\u7a0b\u6b63\u5728\u6267\u884c\u7684\u65b9\u6cd5\u5806\u6808\u7684\u96c6\u5408\u3002"],["pre",{lang:null,highlighted:'jstack <span class="token number">33390</span>\n<span class="token number">2019</span><span class="token operator">-</span><span class="token number">02</span><span class="token operator">-</span><span class="token number">14</span> <span class="token number">16</span><span class="token punctuation">:</span><span class="token number">15</span><span class="token punctuation">:</span><span class="token number">05</span>\nFull thread dump OpenJDK <span class="token number">64</span><span class="token operator">-</span>Bit Server VM <span class="token punctuation">(</span><span class="token number">25.152</span><span class="token operator">-</span>b26 mixed mode<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n<span class="token string">"JobScheduler FJ pool 2/3"</span> <span class="token directive keyword">#5667</span> daemon prio<span class="token operator">=</span><span class="token number">4</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007fc37dbfe000</span> nid<span class="token operator">=</span><span class="token number">0x133a3</span> waiting on condition <span class="token punctuation">[</span><span class="token number">0x000070000b616000</span><span class="token punctuation">]</span>\n   java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>State<span class="token punctuation">:</span> WAITING <span class="token punctuation">(</span>parking<span class="token punctuation">)</span>\n\tat sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span>Unsafe<span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span>Native Method<span class="token punctuation">)</span>\n\t<span class="token operator">-</span> parking <span class="token keyword">to</span> wait <span class="token keyword">for</span>  <span class="token operator">&lt;</span><span class="token number">0x00000007a19c75f8</span><span class="token operator">></span> <span class="token punctuation">(</span>a java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>ForkJoinPool<span class="token punctuation">)</span>\n\tat java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>ForkJoinPool<span class="token punctuation">.</span><span class="token function">awaitWork</span><span class="token punctuation">(</span>ForkJoinPool<span class="token punctuation">.</span>java<span class="token punctuation">:</span><span class="token number">1824</span><span class="token punctuation">)</span>\n\tat java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>ForkJoinPool<span class="token punctuation">.</span><span class="token function">runWorker</span><span class="token punctuation">(</span>ForkJoinPool<span class="token punctuation">.</span>java<span class="token punctuation">:</span><span class="token number">1693</span><span class="token punctuation">)</span>\n\tat java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span>ForkJoinWorkerThread<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>ForkJoinWorkerThread<span class="token punctuation">.</span>java<span class="token punctuation">:</span><span class="token number">157</span><span class="token punctuation">)</span>\nVM Thread" os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007fc37b024000</span> nid<span class="token operator">=</span><span class="token number">0x3303</span> runnable\n\n<span class="token string">"Gang worker#0 (Parallel GC Threads)"</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007fc37a812800</span> nid<span class="token operator">=</span><span class="token number">0x5207</span> runnable\n\n<span class="token string">"Gang worker#1 (Parallel GC Threads)"</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007fc37a81f000</span> nid<span class="token operator">=</span><span class="token number">0x5003</span> runnable\n\n<span class="token string">"Gang worker#2 (Parallel GC Threads)"</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007fc37a81f800</span> nid<span class="token operator">=</span><span class="token number">0x4e03</span> runnable\n\n<span class="token string">"Gang worker#3 (Parallel GC Threads)"</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007fc37a820000</span> nid<span class="token operator">=</span><span class="token number">0x4d03</span> runnable\n\n<span class="token string">"Concurrent Mark-Sweep GC Thread"</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007fc37b800800</span> nid<span class="token operator">=</span><span class="token number">0x4b03</span> runnable\n\n<span class="token string">"VM Periodic Task Thread"</span> os_prio<span class="token operator">=</span><span class="token number">31</span> tid<span class="token operator">=</span><span class="token number">0x00007fc37b03f000</span> nid<span class="token operator">=</span><span class="token number">0x3f03</span> waiting on condition\n\nJNI <span class="token keyword">global</span> references<span class="token punctuation">:</span> <span class="token number">15008</span>'},["code",'jstack 33390\n2019-02-14 16:15:05\nFull thread dump OpenJDK 64-Bit Server VM (25.152-b26 mixed mode):\n\n"JobScheduler FJ pool 2/3" #5667 daemon prio=4 os_prio=31 tid=0x00007fc37dbfe000 nid=0x133a3 waiting on condition [0x000070000b616000]\n   java.lang.Thread.State: WAITING (parking)\n\tat sun.misc.Unsafe.park(Native Method)\n\t- parking to wait for  <0x00000007a19c75f8> (a java.util.concurrent.ForkJoinPool)\n\tat java.util.concurrent.ForkJoinPool.awaitWork(ForkJoinPool.java:1824)\n\tat java.util.concurrent.ForkJoinPool.runWorker(ForkJoinPool.java:1693)\n\tat java.util.concurrent.ForkJoinWorkerThread.run(ForkJoinWorkerThread.java:157)\nVM Thread" os_prio=31 tid=0x00007fc37b024000 nid=0x3303 runnable\n\n"Gang worker#0 (Parallel GC Threads)" os_prio=31 tid=0x00007fc37a812800 nid=0x5207 runnable\n\n"Gang worker#1 (Parallel GC Threads)" os_prio=31 tid=0x00007fc37a81f000 nid=0x5003 runnable\n\n"Gang worker#2 (Parallel GC Threads)" os_prio=31 tid=0x00007fc37a81f800 nid=0x4e03 runnable\n\n"Gang worker#3 (Parallel GC Threads)" os_prio=31 tid=0x00007fc37a820000 nid=0x4d03 runnable\n\n"Concurrent Mark-Sweep GC Thread" os_prio=31 tid=0x00007fc37b800800 nid=0x4b03 runnable\n\n"VM Periodic Task Thread" os_prio=31 tid=0x00007fc37b03f000 nid=0x3f03 waiting on condition\n\nJNI global references: 15008']]],meta:{order:1,title:"Java\u5185\u5b58\u8bca\u65ad\u5e38\u7528\u547d\u4ee4",type:"\u8fdb\u9636",filename:"docs/java/jvm-command.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#jps-\u865a\u62df\u673a\u8fdb\u7a0b\u72b6\u51b5\u76d1\u63a7\u5de5\u5177",title:"jps \u865a\u62df\u673a\u8fdb\u7a0b\u72b6\u51b5\u76d1\u63a7\u5de5\u5177"},"jps \u865a\u62df\u673a\u8fdb\u7a0b\u72b6\u51b5\u76d1\u63a7\u5de5\u5177"]],["li",["a",{className:"bisheng-toc-h2",href:"#jstat-\u865a\u62df\u673a\u7edf\u8ba1\u4fe1\u606f\u76d1\u89c6\u5de5\u5177",title:"jstat \u865a\u62df\u673a\u7edf\u8ba1\u4fe1\u606f\u76d1\u89c6\u5de5\u5177"},"jstat \u865a\u62df\u673a\u7edf\u8ba1\u4fe1\u606f\u76d1\u89c6\u5de5\u5177"]],["li",["a",{className:"bisheng-toc-h2",href:"#jmap-Java-\u5185\u5b58\u6620\u50cf\u5de5\u5177",title:"jmap Java \u5185\u5b58\u6620\u50cf\u5de5\u5177"},"jmap Java \u5185\u5b58\u6620\u50cf\u5de5\u5177"]],["li",["a",{className:"bisheng-toc-h2",href:"#jhat-\u865a\u62df\u673a\u5806\u8f6c\u50a8\u5feb\u7167\u5206\u6790\u5de5\u5177",title:"jhat \u865a\u62df\u673a\u5806\u8f6c\u50a8\u5feb\u7167\u5206\u6790\u5de5\u5177"},"jhat \u865a\u62df\u673a\u5806\u8f6c\u50a8\u5feb\u7167\u5206\u6790\u5de5\u5177"]],["li",["a",{className:"bisheng-toc-h2",href:"#jstack-\u5806\u5185\u5b58\u8ddf\u8e2a\u5de5\u5177",title:"jstack \u5806\u5185\u5b58\u8ddf\u8e2a\u5de5\u5177"},"jstack \u5806\u5185\u5b58\u8ddf\u8e2a\u5de5\u5177"]]]}}});