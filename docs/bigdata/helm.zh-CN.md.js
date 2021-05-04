webpackJsonp([55],{1327:function(s,a){s.exports={content:["article",["h2","Helm \u7b80\u4ecb"],["h2","Helm \u5b89\u88c5"],["pre",{lang:null,highlighted:'brew install kubernetes<span class="token operator">-</span>helm'},["code","brew install kubernetes-helm"]],["p","\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\u65e0\u6cd5\u4ecegcr.io\u4e2d\u62c9\u53d6tiller\uff0c\u9700\u8981\u5355\u72ec\u62c9\u53d6docker\u955c\u50cf\uff0c\u4f7f\u7528--tiller-image\u6307\u5b9a\u52a0\u8f7d\u7684\u955c\u50cf"],["pre",{lang:null,highlighted:'helm init  <span class="token operator">-</span><span class="token operator">-</span>history<span class="token operator">-</span>max <span class="token number">200</span> <span class="token operator">-</span><span class="token operator">-</span>tiller<span class="token operator">-</span>image<span class="token operator">=</span>jessestuart<span class="token operator">/</span>tiller\n\n$ helm init \\\n<span class="token operator">-</span><span class="token operator">-</span>history<span class="token operator">-</span>max <span class="token number">200</span> \\\n<span class="token operator">-</span><span class="token operator">-</span>override <span class="token string">\'spec.template.spec.containers[0].command\'</span><span class="token operator">=</span><span class="token string">\'{/tiller,--storage=secret}\'</span> \\\n<span class="token operator">-</span><span class="token operator">-</span>tiller<span class="token operator">-</span>image<span class="token operator">=</span>ist0ne<span class="token operator">/</span>tiller \\\n<span class="token operator">-</span><span class="token operator">-</span>tiller<span class="token operator">-</span>tls \\\n<span class="token operator">-</span><span class="token operator">-</span>tiller<span class="token operator">-</span>tls<span class="token operator">-</span>verify \\\n<span class="token operator">-</span><span class="token operator">-</span>tiller<span class="token operator">-</span>tls<span class="token operator">-</span>cert<span class="token operator">=</span>cert<span class="token punctuation">.</span>pem \\\n<span class="token operator">-</span><span class="token operator">-</span>tiller<span class="token operator">-</span>tls<span class="token operator">-</span>key<span class="token operator">=</span>key<span class="token punctuation">.</span>pem \\\n<span class="token operator">-</span><span class="token operator">-</span>tls<span class="token operator">-</span>ca<span class="token operator">-</span>cert<span class="token operator">=</span>ca<span class="token punctuation">.</span>pem \\\n<span class="token operator">-</span><span class="token operator">-</span>service<span class="token operator">-</span>account<span class="token operator">=</span>accountname'},["code","helm init  --history-max 200 --tiller-image=jessestuart/tiller\n\n$ helm init \\\n--history-max 200 \\\n--override 'spec.template.spec.containers[0].command'='{/tiller,--storage=secret}' \\\n--tiller-image=ist0ne/tiller \\\n--tiller-tls \\\n--tiller-tls-verify \\\n--tiller-tls-cert=cert.pem \\\n--tiller-tls-key=key.pem \\\n--tls-ca-cert=ca.pem \\\n--service-account=accountname"]],["pre",{lang:null,highlighted:'#!<span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>env bash\n\necho <span class="token string">"install helm"</span>\n# installs helm <span class="token keyword">with</span> bash commands <span class="token keyword">for</span> easier command line integration\ncurl https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>helm<span class="token operator">/</span>master<span class="token operator">/</span>scripts<span class="token operator">/</span>get | bash\n# add a service account within a namespace <span class="token keyword">to</span> segregate tiller\nkubectl <span class="token operator">-</span><span class="token operator">-</span>namespace kube<span class="token operator">-</span>system create sa tiller\n# create a cluster role binding <span class="token keyword">for</span> tiller\nkubectl create clusterrolebinding tiller \\\n    <span class="token operator">-</span><span class="token operator">-</span>clusterrole cluster<span class="token operator">-</span>admin \\\n    <span class="token operator">-</span><span class="token operator">-</span>serviceaccount<span class="token operator">=</span>kube<span class="token operator">-</span>system<span class="token punctuation">:</span>tiller\n\necho <span class="token string">"initialize helm"</span>\n# initialized helm within the tiller service account\nhelm init <span class="token operator">-</span><span class="token operator">-</span>service<span class="token operator">-</span>account tiller <span class="token operator">-</span><span class="token operator">-</span>tiller<span class="token operator">-</span>image<span class="token operator">=</span>jessestuart<span class="token operator">/</span>tiller\n# updates the repos <span class="token keyword">for</span> Helm repo integration\nhelm repo update\n\necho <span class="token string">"verify helm"</span>\n# verify that helm is installed <span class="token keyword">in</span> the cluster\nkubectl get deploy<span class="token punctuation">,</span>svc tiller<span class="token operator">-</span>deploy <span class="token operator">-</span>n kube<span class="token operator">-</span>system'},["code",'#!/usr/bin/env bash\n\necho "install helm"\n# installs helm with bash commands for easier command line integration\ncurl https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get | bash\n# add a service account within a namespace to segregate tiller\nkubectl --namespace kube-system create sa tiller\n# create a cluster role binding for tiller\nkubectl create clusterrolebinding tiller \\\n    --clusterrole cluster-admin \\\n    --serviceaccount=kube-system:tiller\n\necho "initialize helm"\n# initialized helm within the tiller service account\nhelm init --service-account tiller --tiller-image=jessestuart/tiller\n# updates the repos for Helm repo integration\nhelm repo update\n\necho "verify helm"\n# verify that helm is installed in the cluster\nkubectl get deploy,svc tiller-deploy -n kube-system']]],meta:{order:1,title:"Helm \u5165\u95e8",type:"\u5165\u95e8",filename:"docs/bigdata/helm.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Helm-\u7b80\u4ecb",title:"Helm \u7b80\u4ecb"},"Helm \u7b80\u4ecb"]],["li",["a",{className:"bisheng-toc-h2",href:"#Helm-\u5b89\u88c5",title:"Helm \u5b89\u88c5"},"Helm \u5b89\u88c5"]]]}}});