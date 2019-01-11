webpackJsonp([10],{1277:function(s,n){s.exports={content:["article",["p","Docker Registry \u662f\u4e00\u4e2a\u65e0\u72b6\u6001\uff0c\u53ef\u4f38\u7f29\u7684\u670d\u52a1\u7aef\u5e94\u7528\uff0c\u7528\u6765\u5b58\u50a8\u548c\u5206\u53d1docker image\u3002"],["ol",["li",["p","\u4f7f\u7528docker registry \u53ef\u4ee5\u8ba9\u4f60\u63a7\u5236image \u5b58\u50a8\u7684\u4f4d\u7f6e"]],["li",["p","\u53ef\u4ee5\u63a7\u5236image\u5206\u53d1\u7684\u7ba1\u9053"]],["li",["p","\u628a\u955c\u50cf\u7684\u5b58\u50a8\uff0c\u5206\u53d1\u4ee5\u53ca\u5f00\u53d1\u6d41\u7a0b\u96c6\u6210\u5230\u4e00\u8d77"]]],["p","\u672c\u5730\u90e8\u7f72registry server"],["pre",{lang:null,highlighted:'docker run <span class="token operator">-</span>d \\\n  <span class="token operator">-</span>e REGISTRY_HTTP_ADDR<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">.</span><span class="token number">0.0</span><span class="token punctuation">:</span><span class="token number">5001</span>\n  <span class="token operator">-</span>p <span class="token number">5000</span><span class="token punctuation">:</span><span class="token number">5000</span> \\\n  <span class="token operator">-</span><span class="token operator">-</span>restart<span class="token operator">=</span>always \\\n  <span class="token operator">-</span><span class="token operator">-</span>name registry \\\n  <span class="token operator">-</span>v <span class="token operator">/</span>mnt<span class="token operator">/</span>registry<span class="token punctuation">:</span><span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>registry \\\n  registry<span class="token punctuation">:</span><span class="token number">2</span>'},["code","docker run -d \\\n  -e REGISTRY_HTTP_ADDR=0.0.0.0:5001\n  -p 5000:5000 \\\n  --restart=always \\\n  --name registry \\\n  -v /mnt/registry:/var/lib/registry \\\n  registry:2"]],["ul",["li",["p","-e \u6307\u5b9aregistry\u76d1\u542c\u7684\u7aef\u53e3"]],["li",["p","-p \u6307\u5b9a\u7aef\u53e3 \u5bbf\u4e3b\u673a\u7aef\u53e3:container\u7aef\u53e3"]],["li",["p","--restart \u8bbe\u7f6e\u91cd\u542f\u7b56\u7565\uff0c\u81ea\u52a8\u91cd\u542f"]],["li",["p","--name \u6307\u5b9aregistry \u540d\u5b57"]],["li",["p","-v \u9700\u8981\u6307\u5b9a\u5bbf\u4e3b\u673a\u7684\u76ee\u5f55\u4e3aregistry\u955c\u50cf\u5b58\u50a8\u76ee\u5f55\uff0c\u4f7f\u7528\u8be5\u547d\u4ee4\u5c06\u5bbf\u4e3b\u673a\u76ee\u5f55\u6302\u8f7d\u5230docker registry"]]],["h2","\u7ed9Registry server \u6dfb\u52a0\u8bc1\u4e66"],["h4","\u521b\u5efaregistry\u8bc1\u4e66"],["pre",{lang:null,highlighted:'$ mkdir <span class="token operator">-</span>p certs <span class="token operator">&amp;</span><span class="token operator">&amp;</span> cd certs\n\n$ openssl req \\\n  <span class="token operator">-</span>newkey rsa<span class="token punctuation">:</span><span class="token number">4096</span> <span class="token operator">-</span>nodes <span class="token operator">-</span>sha256 <span class="token operator">-</span>keyout domain<span class="token punctuation">.</span>key \\\n  <span class="token operator">-</span>x509 <span class="token operator">-</span>days <span class="token number">365</span> <span class="token operator">-</span>out domain<span class="token punctuation">.</span>crt'},["code","$ mkdir -p certs && cd certs\n\n$ openssl req \\\n  -newkey rsa:4096 -nodes -sha256 -keyout domain.key \\\n  -x509 -days 365 -out domain.crt"]],["p","\u4f7f\u7528\u8bc1\u4e66\u542f\u52a8docker registry"],["pre",{lang:null,highlighted:'docker run <span class="token operator">-</span>d \\\n  <span class="token operator">-</span><span class="token operator">-</span>restart<span class="token operator">=</span>always \\\n  <span class="token operator">-</span><span class="token operator">-</span>name registry \\\n  <span class="token operator">-</span>v `pwd`<span class="token operator">/</span>certs<span class="token punctuation">:</span><span class="token operator">/</span>certs \\\n  <span class="token operator">-</span>e REGISTRY_HTTP_ADDR<span class="token operator">=</span><span class="token number">0.0</span><span class="token punctuation">.</span><span class="token number">0.0</span><span class="token punctuation">:</span><span class="token number">443</span> \\\n  <span class="token operator">-</span>e REGISTRY_HTTP_TLS_CERTIFICATE<span class="token operator">=</span><span class="token operator">/</span>certs<span class="token operator">/</span>domain<span class="token punctuation">.</span>crt \\\n  <span class="token operator">-</span>e REGISTRY_HTTP_TLS_KEY<span class="token operator">=</span><span class="token operator">/</span>certs<span class="token operator">/</span>domain<span class="token punctuation">.</span>key \\\n  <span class="token operator">-</span>p <span class="token number">443</span><span class="token punctuation">:</span><span class="token number">443</span> \\\n  registry<span class="token punctuation">:</span><span class="token number">2</span>'},["code","docker run -d \\\n  --restart=always \\\n  --name registry \\\n  -v `pwd`/certs:/certs \\\n  -e REGISTRY_HTTP_ADDR=0.0.0.0:443 \\\n  -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt \\\n  -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key \\\n  -p 443:443 \\\n  registry:2"]],["h4","\u62f7\u8d1d\u8bc1\u4e66\u5230\u6307\u5b9a\u7684\u76ee\u5f55"],["p",["strong","Linux"],":  Copy the",["code","domain.crt"],"file to",["code","/etc/docker/certs.d/myregistrydomain.com:5000/ca.crt"],"on every Docker host. You do not need to restart Docker."],["p",["strong","MAC"],"\uff1a"],["pre",{lang:null,highlighted:'~<span class="token operator">/</span><span class="token punctuation">.</span>docker<span class="token operator">/</span>certs<span class="token punctuation">.</span>d<span class="token operator">/</span><span class="token operator">&lt;</span>MyRegistry<span class="token operator">></span><span class="token punctuation">:</span><span class="token operator">&lt;</span>Port<span class="token operator">></span><span class="token operator">/</span>client<span class="token punctuation">.</span>cert ~<span class="token operator">/</span><span class="token punctuation">.</span>docker<span class="token operator">/</span>certs<span class="token punctuation">.</span>d<span class="token operator">/</span><span class="token operator">&lt;</span>MyRegistry<span class="token operator">></span><span class="token punctuation">:</span><span class="token operator">&lt;</span>Port<span class="token operator">></span><span class="token operator">/</span>client<span class="token punctuation">.</span>key<span class="token punctuation">.</span>'},["code","~/.docker/certs.d/<MyRegistry>:<Port>/client.cert ~/.docker/certs.d/<MyRegistry>:<Port>/client.key."]]],meta:{order:1,title:"\u90e8\u7f72Docker Registry",type:"\u5165\u95e8",filename:"docs/bigdata/docker-registry.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u7ed9Registry-server-\u6dfb\u52a0\u8bc1\u4e66",title:"\u7ed9Registry server \u6dfb\u52a0\u8bc1\u4e66"},"\u7ed9Registry server \u6dfb\u52a0\u8bc1\u4e66"]]]}}});