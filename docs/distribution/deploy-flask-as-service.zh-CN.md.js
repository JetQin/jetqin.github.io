webpackJsonp([28],{1294:function(n,s){n.exports={content:["article",["h2","\u521b\u5efaFlask App"],["pre",{lang:null,highlighted:'#!<span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>python\nfrom flask import Flask<span class="token punctuation">,</span> request\napp <span class="token operator">=</span> <span class="token function">Flask</span><span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\n\n<span class="token variable">@app</span><span class="token punctuation">.</span><span class="token function">route</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">\'GET\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\ndef <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n return <span class="token string">"Hello world flask app"</span>\n\n<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">\'__main__\'</span><span class="token punctuation">:</span>\n app<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">"0.0.0.0"</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">9006</span><span class="token punctuation">)</span>'},["code","#!/usr/bin/python\nfrom flask import Flask, request\napp = Flask(__name__)\n\n@app.route('/', methods=['GET'])\ndef index():\n return \"Hello world flask app\"\n\nif __name__ == '__main__':\n app.run(host=\"0.0.0.0\", port=9006)"]],["h2","\u521b\u5efaApp Config"],["pre",{lang:null,highlighted:'description <span class="token string">"flask"</span>\nstart on stopped rc RUNLEVEL<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">2345</span><span class="token punctuation">]</span>\nrespawn\nexec python <span class="token operator">/</span>home<span class="token operator">/</span>jet<span class="token operator">/</span>server<span class="token punctuation">.</span>py'},["code",'description "flask"\nstart on stopped rc RUNLEVEL=[2345]\nrespawn\nexec python /home/jet/server.py']],["h2","\u521b\u5efa service"],["p","sudo service flask start",["br"],"If you receive any error, you may have to create an additional/lib/systemd/system/flask.service  "],["pre",{lang:null,highlighted:'<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>\nDescription<span class="token operator">=</span>Flask web server\n<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>\nWantedBy<span class="token operator">=</span>multi<span class="token operator">-</span>user<span class="token punctuation">.</span>target\n<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>\nUser<span class="token operator">=</span>jet\nPermissionsStartOnly<span class="token operator">=</span><span class="token boolean">true</span>\nExecStart<span class="token operator">=</span><span class="token operator">/</span>home<span class="token operator">/</span>jet<span class="token operator">/</span>server<span class="token punctuation">.</span>py\nTimeoutSec<span class="token operator">=</span><span class="token number">600</span>\nRestart<span class="token operator">=</span>on<span class="token operator">-</span>failure\nRuntimeDirectoryMode<span class="token operator">=</span><span class="token number">755</span>'},["code","[Unit]\nDescription=Flask web server\n[Install]\nWantedBy=multi-user.target\n[Service]\nUser=jet\nPermissionsStartOnly=true\nExecStart=/home/jet/server.py\nTimeoutSec=600\nRestart=on-failure\nRuntimeDirectoryMode=755"]],["h2","\u4fee\u6539app\u6267\u884c\u6743\u9650"],["pre",{lang:null,highlighted:'chown jet server<span class="token punctuation">.</span>py \nchmod <span class="token operator">+</span>x server<span class="token punctuation">.</span>py'},["code","chown jet server.py \nchmod +x server.py"]],["h2","\u542f\u52a8\u670d\u52a1"],["pre",{lang:null,highlighted:"sudo service flask start\nsudo service flask status"},["code","sudo service flask start\nsudo service flask status"]]],meta:{order:4,title:"Deploy Flask App as Service",type:"\u5165\u95e8",filename:"docs/distribution/deploy-flask-as-service.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u521b\u5efaFlask-App",title:"\u521b\u5efaFlask App"},"\u521b\u5efaFlask App"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u521b\u5efaApp-Config",title:"\u521b\u5efaApp Config"},"\u521b\u5efaApp Config"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u521b\u5efa-service",title:"\u521b\u5efa service"},"\u521b\u5efa service"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4fee\u6539app\u6267\u884c\u6743\u9650",title:"\u4fee\u6539app\u6267\u884c\u6743\u9650"},"\u4fee\u6539app\u6267\u884c\u6743\u9650"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u542f\u52a8\u670d\u52a1",title:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"]]]}}});