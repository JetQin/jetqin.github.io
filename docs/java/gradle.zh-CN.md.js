webpackJsonp([15],{1269:function(a,s){a.exports={content:["article",["h2","Gradle\u7b80\u4ecb"],["p","Gradle\u662f\u57fa\u4e8eJVM\u7684\u6784\u5efa\u5de5\u5177\uff0c\u76f8\u6bd4\u4e8eANT\u548cMaven\u5b83\u7684\u7ed3\u6784\u66f4\u7b80\u5355\uff0c\u6548\u7387\u66f4\u9ad8\u3002 Gradle\u6784\u5efa\u811a\u672c\u662f\n\u58f0\u660e\u5f0f\u7684\uff0c\u53ef\u8bfb\u7684\uff0c\u5e76\u4e14\u6e05\u6670\u5730\u8868\u8fbe\u5b83\u4eec\u7684\u610f\u56fe\u3002ANT\u548cMaven\u4f7f\u7528\u7684\u662fxml\u6765\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\uff0c\u800cGradle\n\u4f7f\u7528Groovy\u811a\u672c\u7f16\u5199\u3002"],["h2","\u5b89\u88c5Gradle"],["p","OSX \u4e0a\u5b89\u88c5Gradle\u53ea\u9700\u8981\u4e0b\u8f7d\u5e76\u5c06Gradle\u89e3\u538b\u5230\u6307\u5b9a\u7684\u76ee\u5f55\uff0c\u7136\u540e\u5c06Gradle\u7684\u76ee\u5f55\u6dfb\u52a0\u5230",["code","bash_profile"],"\n\u4e2d\u5373\u53ef."],["pre",{lang:null,highlighted:'gradle <span class="token operator">-</span>version\n\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\nGradle <span class="token number">4.5</span><span class="token punctuation">.</span><span class="token number">1</span>\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n\nBuild time<span class="token punctuation">:</span>   <span class="token number">2018</span><span class="token operator">-</span><span class="token number">02</span><span class="token operator">-</span><span class="token number">05</span> <span class="token number">13</span><span class="token punctuation">:</span><span class="token number">22</span><span class="token punctuation">:</span><span class="token number">49</span> UTC\nRevision<span class="token punctuation">:</span>     37007e1c012001ff09973e0bd095139239ecd3b3\n\nGroovy<span class="token punctuation">:</span>       <span class="token number">2.4</span><span class="token punctuation">.</span><span class="token number">12</span>\nAnt<span class="token punctuation">:</span>          Apache <span class="token function">Ant</span><span class="token punctuation">(</span>TM<span class="token punctuation">)</span> version <span class="token number">1.9</span><span class="token punctuation">.</span><span class="token number">9</span> compiled on February <span class="token number">2</span> <span class="token number">2017</span>\nJVM<span class="token punctuation">:</span>          <span class="token number">1.8</span><span class="token punctuation">.</span>0_181 <span class="token punctuation">(</span>Oracle Corporation <span class="token number">25.181</span><span class="token operator">-</span>b13<span class="token punctuation">)</span>\nOS<span class="token punctuation">:</span>           Mac OS X <span class="token number">10.14</span><span class="token punctuation">.</span><span class="token number">2</span> x86_64'},["code","gradle -version\n\n------------------------------------------------------------\nGradle 4.5.1\n------------------------------------------------------------\n\nBuild time:   2018-02-05 13:22:49 UTC\nRevision:     37007e1c012001ff09973e0bd095139239ecd3b3\n\nGroovy:       2.4.12\nAnt:          Apache Ant(TM) version 1.9.9 compiled on February 2 2017\nJVM:          1.8.0_181 (Oracle Corporation 25.181-b13)\nOS:           Mac OS X 10.14.2 x86_64"]],["h2","\u7f16\u8bd1\u9879\u76ee"],["p","\u9ed8\u8ba4\u7684Gradle\u6784\u5efa\u811a\u672c\u7684\u540d\u5b57\u662fbuild.gradle. \u901a\u8fc7\u6267\u884cgradle init\u547d\u4ee4\u5373\u53ef\u521b\u5efa\u4e00\u4e2aGradle\u793a\u4f8b\u9879\u76ee"],["pre",{lang:null,highlighted:'gradle init <span class="token operator">-</span><span class="token operator">-</span>type<span class="token operator">=</span>java<span class="token operator">-</span>application\n\nls <span class="token operator">-</span>al\ntotal <span class="token number">40</span>\ndrwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x   <span class="token number">9</span> jet  staff   <span class="token number">288</span> May <span class="token number">19</span> <span class="token number">15</span><span class="token punctuation">:</span><span class="token number">02</span> <span class="token punctuation">.</span>\ndrwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x<span class="token operator">+</span> <span class="token number">73</span> jet  staff  <span class="token number">2336</span> May <span class="token number">19</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">59</span> <span class="token punctuation">.</span><span class="token punctuation">.</span>\ndrwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x   <span class="token number">4</span> jet  staff   <span class="token number">128</span> May <span class="token number">19</span> <span class="token number">14</span><span class="token punctuation">:</span><span class="token number">59</span> <span class="token punctuation">.</span>gradle\n<span class="token operator">-</span>rw<span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>   <span class="token number">1</span> jet  staff   <span class="token number">994</span> May <span class="token number">19</span> <span class="token number">15</span><span class="token punctuation">:</span><span class="token number">02</span> build<span class="token punctuation">.</span>gradle\ndrwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x   <span class="token number">3</span> jet  staff    <span class="token number">96</span> May <span class="token number">19</span> <span class="token number">15</span><span class="token punctuation">:</span><span class="token number">01</span> gradle\n<span class="token operator">-</span>rwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x   <span class="token number">1</span> jet  staff  <span class="token number">5296</span> May <span class="token number">19</span> <span class="token number">15</span><span class="token punctuation">:</span><span class="token number">01</span> gradlew\n<span class="token operator">-</span>rw<span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>   <span class="token number">1</span> jet  staff  <span class="token number">2260</span> May <span class="token number">19</span> <span class="token number">15</span><span class="token punctuation">:</span><span class="token number">01</span> gradlew<span class="token punctuation">.</span>bat\n<span class="token operator">-</span>rw<span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>r<span class="token operator">-</span><span class="token operator">-</span>   <span class="token number">1</span> jet  staff   <span class="token number">353</span> May <span class="token number">19</span> <span class="token number">15</span><span class="token punctuation">:</span><span class="token number">02</span> settings<span class="token punctuation">.</span>gradle\ndrwxr<span class="token operator">-</span>xr<span class="token operator">-</span>x   <span class="token number">4</span> jet  staff   <span class="token number">128</span> May <span class="token number">19</span> <span class="token number">15</span><span class="token punctuation">:</span><span class="token number">02</span> src'},["code","gradle init --type=java-application\n\nls -al\ntotal 40\ndrwxr-xr-x   9 jet  staff   288 May 19 15:02 .\ndrwxr-xr-x+ 73 jet  staff  2336 May 19 14:59 ..\ndrwxr-xr-x   4 jet  staff   128 May 19 14:59 .gradle\n-rw-r--r--   1 jet  staff   994 May 19 15:02 build.gradle\ndrwxr-xr-x   3 jet  staff    96 May 19 15:01 gradle\n-rwxr-xr-x   1 jet  staff  5296 May 19 15:01 gradlew\n-rw-r--r--   1 jet  staff  2260 May 19 15:01 gradlew.bat\n-rw-r--r--   1 jet  staff   353 May 19 15:02 settings.gradle\ndrwxr-xr-x   4 jet  staff   128 May 19 15:02 src"]],["h2","Gradle\u5305\u88c5\u5668"],["p","Gradle\u5305\u88c5\u5668\uff0c\u80fd\u591f\u8ba9\u673a\u5668\u5728\u6ca1\u6709\u5b89\u88c5Gradle\u7684\u73af\u5883\u4e0b\u6267\u884cGradle\u6784\u5efa\u3002\u5b83\u8ba9\u6784\u5efa\u811a\u672c\u8fd0\u884c\u5728\u4e00\u4e2a\u6307\u5b9a\u7684Gradle\u811a\u672c\u4e0a\n\uff0c\u901a\u8fc7\u81ea\u52a8\u4ece\u4e2d\u5fc3\u4ed3\u5e93\u4e0b\u8f7dGradle\uff0c\u89e3\u538b\u4e4b\u540e\u6765\u6267\u884c\u6700\u7ec8\u7684\u6784\u5efa\u3002\u5b83\u7684\u76ee\u7684\u5728\u4e8e\u521b\u9020\u4e00\u4e2a\u72ec\u7acb\u4e8e\u7cfb\u7edf\uff0c\u914d\u7f6e\u7684Gradle\u7248\u672c\n\u7684\u53ef\u9760\u548c\u53ef\u91cd\u590d\u7684\u6784\u5efa\u3002"],["ul",["li",["p","\u5982\u4f55\u914d\u7f6e\u5305\u88c5\u5668\n\u521b\u5efa\u914d\u7f6e\u5305\u88c5\u5668\u53ea\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u5305\u88c5\u5668\u4efb\u52a1\uff0c\u7136\u540e\u6267\u884c\u8fd9\u4e2a\u5305\u88c5\u5668\u4efb\u52a1\u3002"]]],["p","\u5b9a\u4e49\u4e00\u4e2a\u5305\u88c5\u5668\u4efb\u52a1"],["pre",{lang:null,highlighted:'task <span class="token function">wrapper</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> Wrapper<span class="token punctuation">)</span> {\n    gradleVersion <span class="token operator">=</span> <span class="token string">\'5.4.1\'</span>\n}'},["code","task wrapper(type: Wrapper) {\n    gradleVersion = '5.4.1'\n}"]],["p","\u6267\u884c\u5305\u88c5\u5668\u4efb\u52a1"],["pre",{lang:null,highlighted:"gradle wrapper"},["code","gradle wrapper"]],["h2","Gradle\u914d\u7f6e"],["p","\u6bcf\u4e2aGradle\u9879\u76ee\u90fd\u5305\u542b\u4e86\u4e09\u90e8\u5206: project, task, property. \u6bcf\u4e2a\u6784\u5efa\u5305\u542b\u81f3\u5c11\u4e00\u4e2aproject\uff0c \u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\ntask\u3002\u6784\u5efa\u4e2d\u4f9d\u8d56\u7684\u76f8\u5173\u5c5e\u6027\u4f7f\u7528property\u5b58\u50a8\u3002"]],meta:{order:8,title:"Gradle \u5165\u95e8",type:"\u5165\u95e8",filename:"docs/java/gradle.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Gradle\u7b80\u4ecb",title:"Gradle\u7b80\u4ecb"},"Gradle\u7b80\u4ecb"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5Gradle",title:"\u5b89\u88c5Gradle"},"\u5b89\u88c5Gradle"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7f16\u8bd1\u9879\u76ee",title:"\u7f16\u8bd1\u9879\u76ee"},"\u7f16\u8bd1\u9879\u76ee"]],["li",["a",{className:"bisheng-toc-h2",href:"#Gradle\u5305\u88c5\u5668",title:"Gradle\u5305\u88c5\u5668"},"Gradle\u5305\u88c5\u5668"]],["li",["a",{className:"bisheng-toc-h2",href:"#Gradle\u914d\u7f6e",title:"Gradle\u914d\u7f6e"},"Gradle\u914d\u7f6e"]]]}}});