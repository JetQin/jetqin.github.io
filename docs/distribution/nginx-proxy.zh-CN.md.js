webpackJsonp([21],{1298:function(n,s){n.exports={content:["article",["p","Nginx \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684http\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u7528\u6765\u5b9e\u73b0\u52a8\u6001\u4ee3\u7406\uff0c\u8d1f\u8f7d\u5747\u8861\uff0c\u6700\u8fd1\u9700\u505a\u4e00\u4e2aweb\uff0cmobile\u7684\u5206\u6d41\u5904\u7406\uff0c\n\u63a5\u4e0b\u6765\u5c31\u4f7f\u7528Nginx\u6765\u5206\u6d41web\u548cmobile\u7684\u8bf7\u6c42\u3002"],["h2","\u9759\u6001\u5185\u5bb9\u4ee3\u7406"],["p","\u4f7f\u7528Nginx\u5b9e\u73b0\u9759\u6001\u5185\u5bb9\u4ee3\u7406\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u65e0\u884c\u4ee3\u7801\u5373\u53ef\u3002\u6253\u5f00Nginx\u914d\u7f6e\u6587\u4ef6\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\u3002"],["ul",["li",["p",["code","Linux \u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55 /etc/nginx/nginx.conf"]]],["li",["p",["code","OSX \u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55 /usr/local/etc/nginx/nginx.conf"]]]],["pre",{lang:null,highlighted:'server {\n        listen <span class="token number">80</span> default_server<span class="token comment" spellcheck="true">;         #\u6307\u5b9a\u76d1\u542c\u7aef\u53e3</span>\n        server_name www<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com<span class="token comment" spellcheck="true">;      #\u5236\u5b9a\u670d\u52a1\u5668\u57df\u540d\u6216\u8005ip</span>\n        location <span class="token operator">/</span> {\n            root <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token comment" spellcheck="true">;   #\u670d\u52a1\u5668\u4e2d\u5b58\u653e\u9759\u6001\u6587\u4ef6\u7684\u76ee\u5f55</span>\n            index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token comment" spellcheck="true">;   #\u9ed8\u8ba4\u8bbf\u95ee\u9875\u9762</span>\n        }\n } '},["code","server {\n        listen 80 default_server;         #\u6307\u5b9a\u76d1\u542c\u7aef\u53e3\n        server_name www.example.com;      #\u5236\u5b9a\u670d\u52a1\u5668\u57df\u540d\u6216\u8005ip\n        location / {\n            root /usr/share/nginx/html;   #\u670d\u52a1\u5668\u4e2d\u5b58\u653e\u9759\u6001\u6587\u4ef6\u7684\u76ee\u5f55\n            index index.html index.htm;   #\u9ed8\u8ba4\u8bbf\u95ee\u9875\u9762\n        }\n } "]],["h2","\u540e\u53f0\u670d\u52a1"],["p","\u901a\u5e38\u524d\u53f0\u9759\u6001\u6587\u4ef6\u548c\u540e\u53f0rest service\u662f\u5206\u5f00\u5f00\u53d1\u7684\uff0c\u5f00\u53d1\u65f6\u53ef\u4ee5\u7528mock\u6d4b\u8bd5\uff0c\u90e8\u7f72\u7684\u65f6\u5019\u901a\u8fc7nginx\n\u8def\u7531\u524d\u7aef\u7684http\u8bf7\u6c42\u5230\u540e\u53f0\u670d\u52a1\u5668\u5373\u53ef\u3002"],["pre",{lang:null,highlighted:'server {\n        listen <span class="token number">81</span><span class="token comment" spellcheck="true">;</span>\n        server_name <span class="token number">99.99</span><span class="token punctuation">.</span><span class="token number">99.99</span> example<span class="token punctuation">.</span>com<span class="token comment" spellcheck="true">;</span>\n        root <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token comment" spellcheck="true">;  </span>\n        index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token comment" spellcheck="true">; </span>\n\n        <span class="token directive keyword">#proxy_set_header</span> \u6765\u8bbe\u7f6e\n        location <span class="token operator">/</span>api {\n            proxy_pass http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>api<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token comment" spellcheck="true">;      # \u6307\u5b9a\u540e\u53f0\u670d\u52a1\u5668api\u5730\u5740</span>\n            proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span><span class="token keyword">For</span> <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token comment" spellcheck="true">; #\u662f\u7528\u6765\u8bc6\u522b\u901a\u8fc7HTTP\u4ee3\u7406\u6216\u8d1f\u8f7d\u5747\u8861\u65b9\u5f0f\u8fde\u63a5\u5230Web\u670d\u52a1\u5668\u7684\u5ba2\u6237\u7aef\u6700\u539f\u59cb\u7684IP\u5730\u5740\u7684HTTP\u8bf7\u6c42\u5934\u5b57\u6bb5</span>\n            proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto <span class="token variable">$scheme</span><span class="token comment" spellcheck="true">;   # $scheme \u7528\u6765\u6307\u660e\u4f7f\u7528http\u8fd8\u662fhttps\u534f\u8bae</span>\n            proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Port <span class="token variable">$server_port</span><span class="token comment" spellcheck="true">;  #\u4ee3\u7406\u7aef\u53e3</span>\n        }\n}'},["code","server {\n        listen 81;\n        server_name 99.99.99.99 example.com;\n        root /usr/share/nginx/html;  \n        index index.html index.htm; \n\n        #proxy_set_header \u6765\u8bbe\u7f6e\n        location /api {\n            proxy_pass http://api.example.com/;      # \u6307\u5b9a\u540e\u53f0\u670d\u52a1\u5668api\u5730\u5740\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; #\u662f\u7528\u6765\u8bc6\u522b\u901a\u8fc7HTTP\u4ee3\u7406\u6216\u8d1f\u8f7d\u5747\u8861\u65b9\u5f0f\u8fde\u63a5\u5230Web\u670d\u52a1\u5668\u7684\u5ba2\u6237\u7aef\u6700\u539f\u59cb\u7684IP\u5730\u5740\u7684HTTP\u8bf7\u6c42\u5934\u5b57\u6bb5\n            proxy_set_header X-Forwarded-Proto $scheme;   # $scheme \u7528\u6765\u6307\u660e\u4f7f\u7528http\u8fd8\u662fhttps\u534f\u8bae\n            proxy_set_header X-Forwarded-Port $server_port;  #\u4ee3\u7406\u7aef\u53e3\n        }\n}"]],["p","\u901a\u8fc7\u4ee5\u4e0a\u4ee3\u7801\u6211\u4eec\u5c31\u5b9e\u73b0\u4e86\u52a8\u9759\u9694\u79bb\uff0c\u9759\u6001\u4ee3\u7801\u90e8\u7f72\u7f51\u7ad9\u7684\u9759\u6001\u6587\u4ef6(js,css,html,images), \u540e\u53f0\u670d\u52a1\u901a\u8fc7\u4ee3\u7406\u8bbf\u95ee"],["h2","\u5206\u79bb\u79fb\u52a8\u7aef\u548c\u684c\u9762\u7aef"],["p","\u901a\u5e38\u7f51\u7ad9\u7684\u5165\u53e3\u90fd\u662f\u7edf\u4e00\u7684\uff0c\u7531\u4e8eweb\u7aef\u548c\u79fb\u52a8\u7aef\u6709\u4e0d\u540c\u7684\u5c5e\u6027\uff0c\u6240\u4ee5\u4e3a\u4e86\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u9700\u8981\u4e24\u5957\u4ee3\u7801\uff0c\n\u6211\u4eec\u5e0c\u671b\u4f7f\u7528\u79fb\u52a8\u5ba2\u6237\u7aef\u7684\u5e0c\u671b\u4ed6\u8bbf\u95eeA\u9875\u9762\uff0c\u684c\u9762\u7aef\u7684\u8bbf\u95eeB\u9875\u9762\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u5206\u79bb\u7528\u6237\u8bbe\u5907\u3002"],["pre",{lang:null,highlighted:'    server {\n        listen <span class="token number">80</span><span class="token comment" spellcheck="true">;</span>\n        server_name <span class="token number">99.99</span><span class="token punctuation">.</span><span class="token number">99.99</span> example<span class="token punctuation">.</span>com<span class="token comment" spellcheck="true">;</span>\n\n        # \u901a\u8fc7`http_user_agent`\u6765\u5224\u65ad\u7528\u6237\u8bbf\u95ee\u7684\u8bbe\u5907\uff0c\u5f53\u53d1\u73b0\u7528\u6237\u4f7f\u7528\u7684\u662f\u79fb\u52a8\u8bbe\u5907\u5c31\u628a\u8bf7\u6c42\u91cd\u5199\uff0c\u8bbf\u95ee\u6307\u5b9a\u7684\u79fb\u52a8\u7aef\u9875\u9762\n        <span class="token operator">&lt;</span>br<span class="token operator">></span>\u6ce8\u610f\uff1a<span class="token keyword">if</span>\u548c<span class="token punctuation">(</span> \u4e4b\u95f4\u5fc5\u987b\u6709\u4e00\u4e2a\u7a7a\u683c\u5426\u5219nginx\u542f\u52a8\u65f6\u4f1a\u62a5\u9519<span class="token operator">&lt;</span><span class="token operator">/</span>br<span class="token operator">></span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_user_agent</span> ~<span class="token operator">*</span> <span class="token string">\'(iPhone|iPod|iPad|Android|BlackBerry|webOS|Windows Phone\'</span><span class="token punctuation">)</span>{ \n            rewrite <span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>mobile<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com<span class="token operator">/</span> permanent<span class="token comment" spellcheck="true">;</span>\n        }\n\n    }\n\n    server {\n        listen <span class="token number">80</span><span class="token comment" spellcheck="true">;</span>\n        server_name <span class="token number">10.10</span><span class="token punctuation">.</span><span class="token number">10.10</span> mobile<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com<span class="token comment" spellcheck="true">;</span>\n\n        root <span class="token operator">/</span>var<span class="token operator">/</span>www<span class="token operator">/</span>html<span class="token operator">/</span>mobile<span class="token comment" spellcheck="true">;</span>\n        index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token comment" spellcheck="true">;</span>\n\n        location <span class="token operator">/</span>api {\n            proxy_pass http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>api<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token comment" spellcheck="true">;      # \u6307\u5b9a\u540e\u53f0\u670d\u52a1\u5668api\u5730\u5740</span>\n            proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span><span class="token keyword">For</span> <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token comment" spellcheck="true">; #\u662f\u7528\u6765\u8bc6\u522b\u901a\u8fc7HTTP\u4ee3\u7406\u6216\u8d1f\u8f7d\u5747\u8861\u65b9\u5f0f\u8fde\u63a5\u5230Web\u670d\u52a1\u5668\u7684\u5ba2\u6237\u7aef\u6700\u539f\u59cb\u7684IP\u5730\u5740\u7684HTTP\u8bf7\u6c42\u5934\u5b57\u6bb5</span>\n            proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto <span class="token variable">$scheme</span><span class="token comment" spellcheck="true">;   # $scheme \u7528\u6765\u6307\u660e\u4f7f\u7528http\u8fd8\u662fhttps\u534f\u8bae</span>\n            proxy_set_header X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Port <span class="token variable">$server_port</span><span class="token comment" spellcheck="true">;  #\u4ee3\u7406\u7aef\u53e3</span>\n        }\n    }\n\n    '},["code","    server {\n        listen 80;\n        server_name 99.99.99.99 example.com;\n\n        # \u901a\u8fc7`http_user_agent`\u6765\u5224\u65ad\u7528\u6237\u8bbf\u95ee\u7684\u8bbe\u5907\uff0c\u5f53\u53d1\u73b0\u7528\u6237\u4f7f\u7528\u7684\u662f\u79fb\u52a8\u8bbe\u5907\u5c31\u628a\u8bf7\u6c42\u91cd\u5199\uff0c\u8bbf\u95ee\u6307\u5b9a\u7684\u79fb\u52a8\u7aef\u9875\u9762\n        <br>\u6ce8\u610f\uff1aif\u548c( \u4e4b\u95f4\u5fc5\u987b\u6709\u4e00\u4e2a\u7a7a\u683c\u5426\u5219nginx\u542f\u52a8\u65f6\u4f1a\u62a5\u9519</br>\n        if ($http_user_agent ~* '(iPhone|iPod|iPad|Android|BlackBerry|webOS|Windows Phone'){ \n            rewrite ^(.*) http://mobile.example.com/ permanent;\n        }\n\n    }\n\n    server {\n        listen 80;\n        server_name 10.10.10.10 mobile.example.com;\n\n        root /var/www/html/mobile;\n        index index.html index.htm;\n\n        location /api {\n            proxy_pass http://api.example.com/;      # \u6307\u5b9a\u540e\u53f0\u670d\u52a1\u5668api\u5730\u5740\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; #\u662f\u7528\u6765\u8bc6\u522b\u901a\u8fc7HTTP\u4ee3\u7406\u6216\u8d1f\u8f7d\u5747\u8861\u65b9\u5f0f\u8fde\u63a5\u5230Web\u670d\u52a1\u5668\u7684\u5ba2\u6237\u7aef\u6700\u539f\u59cb\u7684IP\u5730\u5740\u7684HTTP\u8bf7\u6c42\u5934\u5b57\u6bb5\n            proxy_set_header X-Forwarded-Proto $scheme;   # $scheme \u7528\u6765\u6307\u660e\u4f7f\u7528http\u8fd8\u662fhttps\u534f\u8bae\n            proxy_set_header X-Forwarded-Port $server_port;  #\u4ee3\u7406\u7aef\u53e3\n        }\n    }\n\n    "]]],meta:{order:2,title:"\u4f7f\u7528Nginx\u5b9e\u73b0\u52a8\u9759\u5206\u79bb",type:"\u5165\u95e8",filename:"docs/distribution/nginx-proxy.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u9759\u6001\u5185\u5bb9\u4ee3\u7406",title:"\u9759\u6001\u5185\u5bb9\u4ee3\u7406"},"\u9759\u6001\u5185\u5bb9\u4ee3\u7406"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u540e\u53f0\u670d\u52a1",title:"\u540e\u53f0\u670d\u52a1"},"\u540e\u53f0\u670d\u52a1"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5206\u79bb\u79fb\u52a8\u7aef\u548c\u684c\u9762\u7aef",title:"\u5206\u79bb\u79fb\u52a8\u7aef\u548c\u684c\u9762\u7aef"},"\u5206\u79bb\u79fb\u52a8\u7aef\u548c\u684c\u9762\u7aef"]]]}}});