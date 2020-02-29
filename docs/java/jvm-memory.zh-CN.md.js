webpackJsonp([7],{1280:function(e,a){e.exports={content:["article",["p","Java\u865a\u62df\u673a\u5728\u6267\u884cjava\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u628a\u5b83\u6240\u7ba1\u7406\u7684\u5185\u5b58\u5212\u5206\u4e3a\u82e5\u5e72\u4e2a\u4e0d\u540c\u7684\u6570\u636e\u533a\u57df,\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u8fd0\u884c\u65f6\u533a\u57df\u3002"],["h2","\u8fd0\u884c\u65f6\u5185\u5b58\u533a\u57df"],["p",["img",{title:null,src:"./assets/memory_region.png",alt:"Memory region"}]],["ul",["li",["p","\u7a0b\u5e8f\u8ba1\u6570\u5668:\n\u7a0b\u5e8f\u8ba1\u6570\u5668\u662f\u4e00\u5757\u8f83\u5c0f\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u53ef\u4ee5\u770b\u4f5c\u662f\u5f53\u524d\u7ebf\u7a0b\u6240\u6267\u884c\u7684\u5b57\u8282\u7801\u7684\u884c\u53f7\u6307\u793a\u5668\uff0c\u5b57\u8282\u7801\u89e3\u91ca\u5668\u901a\u8fc7\u6539\u53d8\u8fd9\u4e2a\u8ba1\u6570\u5668\u7684\u503c\u6765\u9009\u53d6\u4e0b\u4e00\u6761\u9700\u8981\u6267\u884c\u7684\u5b57\u8282\u7801\u6307\u4ee4\uff0c \u5206\u652f\uff0c\u5faa\u73af\uff0c\u8df3\u8f6c\uff0c\u5f02\u5e38\u5904\u7406\uff0c\u7ebf\u7a0b\u6062\u590d\u7b49\u57fa\u7840\u529f\u80fd\u90fd\u9700\u8981\u4f9d\u8d56\u8fd9\u4e2a\u8ba1\u6570\u5668\u5b8c\u6210\u3002\u5728\u4efb\u4f55\u4e00\u4e2a\u786e\u5b9a\u7684\u65f6\u523b\uff0c\u4e00\u4e2a\u5904\u7406\u5668\u53ea\u4f1a\u6267\u884c\u4e00\u6761\u6307\u4ee4\uff0c\u4e3a\u4e86\u7ebf\u7a0b\u5207\u6362\u540e\u80fd\u6062\u590d\u5230\u6b63\u786e\u7684\u6267\u884c\u4f4d\u7f6e\uff0c\u6bcf\u6761\u7ebf\u7a0b\u90fd\u9700\u8981\u4e00\u4e2a\u72ec\u7acb\u7684\u7a0b\u5e8f\u8ba1\u6570\u5668\u3002\u5404\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u4e92\u4e0d\u5f71\u54cd\u3002 \u6b64\u5185\u5b58\u533a\u57df\u4e0d\u4f1a\u5f15\u8d77OutOfMemory\u3002"]],["li",["p","Java\u865a\u62df\u673a\u6808:\nJava\u865a\u62df\u673a\u6808\u4e0e\u7a0b\u5e8f\u8ba1\u6570\u5668\u4e00\u6837\u662f\u7ebf\u7a0b\u79c1\u6709\u7684\uff0c\u751f\u547d\u5468\u671f\u4e0e\u7ebf\u7a0b\u76f8\u540c\u3002\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u88ab\u8c03\u7528\u76f4\u81f3\u6267\u884c\u5b8c\u6210\u7684\u8fc7\u7a0b\u5c31\u5bf9\u5e94\u7740\u4e00\u4e2a\u6808\u5e27\u5728\u865a\u62df\u673a\u4e2d\u4ece\u5165\u6808\u5230\u51fa\u6808\u7684\u8fc7\u7a0b\u3002\u5b83\u5b58\u50a8\u7f16\u8bd1\u671f\u7684\u57fa\u672c\u7c7b\u578b\uff0c \u5b83\u4f1a\u629b\u51faStackOverflowError\u6216OutOfMemoryError \uff08\u5982\u679c\u7ebf\u7a0b\u8bf7\u6c42\u7684\u6808\u6df1\u5ea6\u5927\u4e8e\u865a\u62df\u673a\u6240\u5141\u8bb8\u7684\u6df1\u5ea6\u4f1a\u629b\u51fa \u5b83\u4f1a\u629b\u51faStackOverflowError\uff0c\u5982\u679c\u6808\u53ef\u52a8\u6001\u6269\u5c55\uff0c\u5982\u679c\u4ed6\u65e0\u6cd5\u7533\u8bf7\u5230\u8db3\u591f\u5185\u5b58\u65f6\u4f1a\u8dd1\u51faOutOfMemoryError)"]],["li",["p","\u672c\u5730\u65b9\u6cd5\u6808:\n\u672c\u5730\u65b9\u6cd5\u6808\u662f\u4e3a\u865a\u62df\u673a\u4f7f\u7528\u5230\u7684Native\u65b9\u6cd5\u670d\u52a1\uff0c\u521d\u6b21\u4e4b\u5916\u4e0eJava\u865a\u62df\u673a\u6808\u76f8\u4f3c\u3002"]],["li",["p","\u5806:"],["p","Java\u865a\u62df\u673a\u6240\u7ba1\u7406\u7684\u5185\u5b58\u4e2d\u6700\u5927\u7684\u4e00\u5757\u3002Java \u5806\u662f\u88ab\u6240\u6709\u7ebf\u7a0b\u5171\u4eab\u7684\u4e00\u5757\u5185\u5b58\u533a\u57df\uff0c\u5728\u865a\u62df\u673a\u542f\u52a8\u65f6\u521b\u5efa\u3002\u6b64\u5185\u5b58\u533a\u57df\u7684\u552f\u4e00\u76ee\u7684\u662f\u5b58\u653e\u5bf9\u8c61\u5b9e\u4f8b.\u7531\u4e8e\u73b0\u5728\u6536\u96c6\u5668\u57fa\u672c\u91c7\u7528\u7684\u90fd\u662f\u5206\u4ee3\u6536\u96c6\u7b97\u6cd5\uff0cJava\u5806\u53ef\u4ee5\u7ec6\u5206\u4e3a\u65b0\u751f\u4ee3\u548c\u8001\u5e74\u4ee3\u3002\u518d\u7ec6\u81f4\u4e00\u70b9\u6709Dden\u7a7a\u95f4\uff0cFrom Survivor\u7a7a\u95f4\uff0cTo Survivor\u7a7a\u95f4\uff08\u53ef\u4ee5\u901a\u8fc7-Xms -Xmx\u6765\u63a7\u5236\u542f\u52a8\u65f6\u5806\u5185\u5b58\u5927\u5c0f\uff09"]]],["ul",["li",["p","\u65b9\u6cd5\u533a:"],["p","\u65b9\u6cd5\u533a\u4e0eJava\u5806\u4e00\u6837\uff0c\u662f\u5404\u4e2a\u7ebf\u7a0b\u5171\u4eab\u7684\u5185\u5b58\u533a\u57df\uff0c\u5b83\u7528\u4e8e\u5b58\u50a8\u5df2\u88ab\u865a\u62df\u673a\u52a0\u8f7d\u7684\u7c7b\u4fe1\u606f\uff0c\u5e38\u91cf\uff0c\u9759\u6001\u53d8\u91cf\u5373\u65f6\u7f16\u8bd1\u5668\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u6570\u636e"]],["li",["p","\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60:"],["p","\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u662f\u65b9\u6cd5\u533a\u4e2d\u7684\u4e00\u90e8\u5206\uff0cClass\u6587\u4ef6\u4e2d\u9664\u4e86\u6709\u7c7b\u7684\u7248\u672c\uff0c\u5b57\u6bb5\uff0c\u65b9\u6cd5\uff0c\u63a5\u53e3\u7b49\u63cf\u8ff0\u4fe1\u606f\u5916\uff0c\u8fd8\u6709\u4e00\u9879\u4fe1\u606f\u662f\u5e38\u91cf\u6c60(Constant Pool Table), \u7528\u4e8e\u5b58\u653e\u7f16\u8bd1\u671f\u751f\u6210\u7684\u5404\u79cd\u5b57\u9762\u91cf\u548c\u7b26\u53f7\u5f15\u7528\uff0c\u8fd9\u90e8\u5206\u5185\u5bb9\u5c06\u5728\u7c7b\u52a0\u8f7d\u540e\u5b58\u653e\u5230\u65b9\u6cd5\u533a\u7684\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u4e2d\u3002\u4e00\u822c\u7684\u9664\u4e86\u4fdd\u5b58Class\u6587\u4ef6\u4e2d\u63cf\u8ff0\u7684\u7b26\u53f7\u5f15\u7528\u5916\u8fd8\u4f1a\u5427\u7ffb\u8bd1\u51fa\u6765\u7684\u76f4\u63a5\u5f15\u7528\u4e5f\u5b58\u50a8\u5728\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\uff0c \u5f53\u65e0\u6cd5\u5728\u7533\u8bf7\u5230\u5185\u5b58\u65f6\u4f1a\u629b\u51fa\uff08OutOfMemoryError\uff09."]],["li",["p","\u76f4\u63a5\u5185\u5b58\uff1a"],["p","JDK1.4\u4e4b\u540e\u5f15\u5165\u4e86Channedl\u4e0e\u7f13\u51b2\u533a\u7684I/O\u65b9\u5f0f\uff0c\u4ed6\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528Native\u51fd\u6570\u5e93\u76f4\u63a5\u5206\u914d\u5806\u5916\u5185\u5b58\uff0c\u7136\u540e\u901a\u8fc7\u4e00\u4e2a\u5b58\u50a8\u5728Java\u5806\u91cc\u7684DirectByteBuffer\u5bf9\u8c61\u4f5c\u4e3a\u8fd9\u5757\u5185\u5b58\u7684\u5f15\u7528\u8fdb\u884c\u64cd\u4f5c\uff0c\u56e0\u4e3a\u907f\u514d\u4e86Java\u5806\u548cNtaive\u5806\u4e2d\u6765\u56de\u590d\u5236\u6570\u636e\uff0c\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u6027\u80fd."]]],["h2","Java\u5bf9\u8c61\u8bbf\u95ee"],["pre",{lang:null,highlighted:'Object object <span class="token operator">=</span> new <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","Object object = new Object();"]],["ul",["li",["p","\u7b49\u53f7\u5de6\u8fb9",["code","Object object"],"\u4f1a\u5728Java\u865a\u62df\u673a\u6808\u7684\u672c\u5730\u4fbf\u91cf\u8868\u4e2d"]],["li",["p","\u7b49\u53f7\u53f3\u8fb9",["code","new Object()"],"\u4f1a\u5728java\u5806\u4e2d\u5f62\u6210\u4e00\u5757\u6751\u7c97\u4e86Objec\u7c7b\u578b\u5bf9\u8c61\u7684\u5b9e\u4f8b\u6570\u636e"]]],["p","\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u4e24\u79cd\u65b9\u5f0f\u6765\u8bbf\u95ee\u865a\u62df\u673a\u4e2d\u7684\u5bf9\u8c61\uff1a"],["ul",["li",["p","\u4f7f\u7528\u53e5\u67c4"],["p",["img",{title:null,src:"./assets/reference.png",alt:"Reference"}]],["p","\u6b64\u65b9\u6cd5\u4f1a\u5728Java\u5806\u4e2d\u5212\u5206\u51fa\u6765\u4e00\u5757\u5185\u5b58\u6765\u4f5c\u4e3a\u53e5\u67c4\u6c60\uff0c\u5f15\u7528\u4e2d\u5b58\u50a8\u7684\u5c31\u662f\u5bf9\u8c61\u7684\u53e5\u67c4\u5730\u5740\uff0c\u53e5\u67c4\u4e2d\u5305\u542b\u4e86\u5bf9\u8c61\u5b9e\u4f8b\u6570\u636e\u548c\u7c7b\u578b\u6570\u636e\u5404\u81ea\u7684\u5177\u4f53\u5730\u5740"]],["li",["p","\u76f4\u63a5\u6307\u9488"],["p",["img",{title:null,src:"./assets/direct_reference.png",alt:"Direct Reference"}]],["p","\u6b64\u65b9\u6cd5\u5f15\u7528\u4e2d\u76f4\u63a5\u5b58\u50a8\u7684\u5c31\u662f\u5bf9\u8c61\u5730\u5740"]],["li",["p","\u4f18\u7f3a\u70b9\u5bf9\u6bd4\uff1a\n  \u4f7f\u7528\u53e5\u67c4\uff1a\u5f15\u7528\u4e2d\u5b58\u50a8\u7684\u662f\u7a33\u5b9a\u7684\u53e5\u67c4\u5730\u5740\uff0c\u5728\u5bf9\u8c61\u88ab\u79fb\u52a8\u65f6\u53ea\u4f1a\u6539\u53d8\u53e5\u67c4\u4e2d\u7684\u5b9e\u4f8b\u6570\u636e\u6307\u9488\u3002\u5f15\u7528\u672c\u8eab\u4e0d\u9700\u8981\u4fee\u6539\u3002 \u76f4\u63a5\u6307\u9488\u7684\u6700\u5927\u4f18\u70b9\u662f\u901f\u5ea6\u5feb\uff0c\u5b83\u51cf\u5c11\u4e86\u4e00\u6b21\u6307\u9488\u5b9a\u4f4d\u65f6\u95f4\u5f00\u9500\u3002"]]]],meta:{order:5,title:"Java\u5185\u5b58\u533a\u57df",type:"\u5165\u95e8",filename:"docs/java/jvm-memory.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u8fd0\u884c\u65f6\u5185\u5b58\u533a\u57df",title:"\u8fd0\u884c\u65f6\u5185\u5b58\u533a\u57df"},"\u8fd0\u884c\u65f6\u5185\u5b58\u533a\u57df"]],["li",["a",{className:"bisheng-toc-h2",href:"#Java\u5bf9\u8c61\u8bbf\u95ee",title:"Java\u5bf9\u8c61\u8bbf\u95ee"},"Java\u5bf9\u8c61\u8bbf\u95ee"]]]}}});