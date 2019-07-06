webpackJsonp([43],{1316:function(n,s){n.exports={content:["article",["h3","docker \u5b89\u88c5"],["ul",["li",["p","\u4e0b\u8f7d\u5e76\u5b89\u88c5"],["p"," \u8be6\u7ec6\u5185\u5bb9\u89c1 ",["a",{title:null,href:"https://docs.docker.com/docker-for-mac/install/#install-and-run-docker-for-mac"},"install docker on mac"]]],["li",["p","\u4f7f\u7528docker-machine\u547d\u4ee4\u521b\u5efa"],["pre",{lang:null,highlighted:'docker<span class="token operator">-</span>machine create \n<span class="token operator">-</span><span class="token operator">-</span>driver virtualbox \n<span class="token operator">-</span><span class="token operator">-</span>virtualbox<span class="token operator">-</span>boot2docker<span class="token operator">-</span>url ~<span class="token operator">/</span><span class="token punctuation">.</span>docker<span class="token operator">/</span>machine<span class="token operator">/</span>boot2docker<span class="token punctuation">.</span>iso\n\n\u7531\u4e8e\u7f51\u7edc\u73af\u5883\u7684\u539f\u56e0\uff0c\u53ef\u4ee5\u901a\u8fc7<span class="token operator">-</span><span class="token operator">-</span>virtualbox<span class="token operator">-</span>boot2docker<span class="token operator">-</span>url \u53c2\u6570\u6307\u5b9a\u955c\u50cf\u6765\u521b\u5efavm<span class="token punctuation">,</span> \u5982\u679c\u9700\u8981\u6307\u5b9a\u521b\u5efa\u7684\u65f6\u5019\u5176\u4ed6\u53c2\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u8be2\u76f8\u5173\u53c2\u6570`docker<span class="token operator">-</span>machine create <span class="token operator">-</span><span class="token operator">-</span>help`\n\ndocker<span class="token operator">-</span>machine create <span class="token operator">-</span><span class="token operator">-</span>help\nUsage<span class="token punctuation">:</span> docker<span class="token operator">-</span>machine create <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token punctuation">[</span>arg<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>\n\nCreate a machine\n\nDescription<span class="token punctuation">:</span>\n   Run <span class="token string">\'docker-machine create --driver name --help\'</span> <span class="token keyword">to</span> include the create flags <span class="token keyword">for</span> that driver <span class="token keyword">in</span> the help text<span class="token punctuation">.</span>\n\nOptions<span class="token punctuation">:</span>\n   <span class="token operator">-</span><span class="token operator">-</span>driver<span class="token punctuation">,</span> <span class="token operator">-</span>d <span class="token string">"virtualbox"</span>      Driver <span class="token keyword">to</span> create machine <span class="token keyword">with</span><span class="token punctuation">.</span> <span class="token punctuation">[</span><span class="token variable">$MACHINE_DRIVER</span><span class="token punctuation">]</span>'},["code","docker-machine create \n--driver virtualbox \n--virtualbox-boot2docker-url ~/.docker/machine/boot2docker.iso\n\n\u7531\u4e8e\u7f51\u7edc\u73af\u5883\u7684\u539f\u56e0\uff0c\u53ef\u4ee5\u901a\u8fc7--virtualbox-boot2docker-url \u53c2\u6570\u6307\u5b9a\u955c\u50cf\u6765\u521b\u5efavm, \u5982\u679c\u9700\u8981\u6307\u5b9a\u521b\u5efa\u7684\u65f6\u5019\u5176\u4ed6\u53c2\u6570\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u67e5\u8be2\u76f8\u5173\u53c2\u6570`docker-machine create --help`\n\ndocker-machine create --help\nUsage: docker-machine create [OPTIONS] [arg...]\n\nCreate a machine\n\nDescription:\n   Run 'docker-machine create --driver name --help' to include the create flags for that driver in the help text.\n\nOptions:\n   --driver, -d \"virtualbox\"      Driver to create machine with. [$MACHINE_DRIVER]"]]],["li",["p","\u914d\u7f6e\u73af\u5883\u53d8\u91cf"],["p","\u7f16\u8f91bash_profile \uff0c\u5728profile \u4e2d\u8ffd\u52a0\u5982\u4e0b\u73af\u5883\u53d8\u91cf\uff0c\u5426\u5219\u6267\u884cdocker ps \u65f6\uff0c\u4f1a\u627e\u4e0d\u5230\u8bc1\u4e66\u62a5\u9519"],["pre",{lang:null,highlighted:'vim ~<span class="token operator">/</span><span class="token punctuation">.</span>bash_profile\nexport DOCKER_HOST<span class="token operator">=</span>tcp<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">99.100</span><span class="token punctuation">:</span><span class="token number">2376</span>\nexport DOCKER_MACHINE_NAME<span class="token operator">=</span><span class="token keyword">default</span>\nexport DOCKER_TLS_VERIFY<span class="token operator">=</span><span class="token number">1</span>\nexport DOCKER_CERT_PATH<span class="token operator">=</span>~<span class="token operator">/</span><span class="token punctuation">.</span>docker<span class="token operator">/</span>machine<span class="token operator">/</span>machines<span class="token operator">/</span><span class="token keyword">default</span>\nsource ~<span class="token operator">/</span><span class="token punctuation">.</span>bash_profile'},["code","vim ~/.bash_profile\nexport DOCKER_HOST=tcp://192.168.99.100:2376\nexport DOCKER_MACHINE_NAME=default\nexport DOCKER_TLS_VERIFY=1\nexport DOCKER_CERT_PATH=~/.docker/machine/machines/default\nsource ~/.bash_profile"]]]],["h3","\u68c0\u9a8c\u5b89\u88c5"],["p","\u786e\u4fdddocker\uff0c docker-compose, docker-machine \u6b63\u786e\u5b89\u88c5\uff0c\u5177\u4f53\u8f93\u51fa\u7684\u7248\u672c\u4f9d\u8d56\u4e8e\u4f60\u5b89\u88c5\u7684docker\u7248\u672c"],["pre",{lang:null,highlighted:'  docker <span class="token operator">-</span><span class="token operator">-</span>version\n  Docker version <span class="token number">18.09</span><span class="token punctuation">.</span><span class="token number">0</span><span class="token punctuation">,</span> build 4d60db4\n\n  docker<span class="token operator">-</span>machine <span class="token operator">-</span><span class="token operator">-</span>version\n  docker<span class="token operator">-</span>machine version <span class="token number">0.16</span><span class="token punctuation">.</span><span class="token number">0</span><span class="token punctuation">,</span> build 702c267f\n\n  docker<span class="token operator">-</span>compose <span class="token operator">-</span><span class="token operator">-</span>version\n  docker<span class="token operator">-</span>compose version <span class="token number">1.23</span><span class="token punctuation">.</span><span class="token number">2</span><span class="token punctuation">,</span> build 1110ad01'},["code","  docker --version\n  Docker version 18.09.0, build 4d60db4\n\n  docker-machine --version\n  docker-machine version 0.16.0, build 702c267f\n\n  docker-compose --version\n  docker-compose version 1.23.2, build 1110ad01"]],["h3","\u901a\u8fc7\u62c9\u53d6Image\u521b\u5efa\u5e94\u7528"],["p"," ",["code","-p 8000:80"]," \u6307\u5b9a\u5c06\u5bb9\u5668\u768480 \u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u76848000 \u7aef\u53e3\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u901a\u8fc7\u5bbf\u4e3b\u673a\u76848000 \u7aef\u53e3\u8bbf\u95eecontainer\u8fd0\u884c\u7684\u670d\u52a1"],["pre",{lang:null,highlighted:'  docker run <span class="token operator">-</span>d <span class="token operator">-</span>p <span class="token number">8000</span><span class="token punctuation">:</span><span class="token number">80</span> nginx\n  4dbae34c228135f7777f5b5766284c7940073228b94a5712c621a82c671843ee'},["code","  docker run -d -p 8000:80 nginx\n  4dbae34c228135f7777f5b5766284c7940073228b94a5712c621a82c671843ee"]],["p"," \u67e5\u770b\u6b63\u5728\u8fd0\u884c\u7684 ",["code","container"]],["pre",{lang:null,highlighted:'  docker ps\n  CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES\n  4dbae34c2281        nginx               <span class="token string">"nginx -g \'daemon of\u2026"</span>   <span class="token number">3</span> seconds ago       Up <span class="token number">2</span> seconds        <span class="token number">0.0</span><span class="token punctuation">.</span><span class="token number">0.0</span><span class="token punctuation">:</span><span class="token number">8000</span><span class="token operator">-</span><span class="token operator">></span><span class="token number">80</span><span class="token operator">/</span>tcp   modest_fermi'},["code",'  docker ps\n  CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES\n  4dbae34c2281        nginx               "nginx -g \'daemon of\u2026"   3 seconds ago       Up 2 seconds        0.0.0.0:8000->80/tcp   modest_fermi']],["p","\u6d4f\u89c8\u5668\u8bbf\u95ee\u7684\u65f6\u5019\u8f93\u5165\u7684\u4e0d\u662f\u672c\u5730\u7684ip 127.0.0.1 \u800c\u662fdocker-machine\u7684ip\u5730\u5740\uff0c \u67e5\u770bdocker-machine\u7684ip\u5730\u5740\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4:"],["pre",{lang:null,highlighted:'docker<span class="token operator">-</span>machine ip <span class="token keyword">default</span>\n<span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">99.100</span>'},["code","docker-machine ip default\n192.168.99.100"]],["p",["img",{title:null,src:"https://i.loli.net/2018/12/05/5c077fec14f13.png",alt:"5c077fec14f13"}]],["h3","FAQ"],["p","Docker\u56fd\u5185\u62c9\u53d6\u5f88\u6162\uff0c\u5efa\u8bae\u66f4\u6539docker regirstry"],["pre",{lang:null,highlighted:'\u60a8\u53ef\u4ee5\u5728 Docker \u5b88\u62a4\u8fdb\u7a0b\u542f\u52a8\u65f6\u4f20\u5165 <span class="token operator">-</span><span class="token operator">-</span>registry<span class="token operator">-</span>mirror \u53c2\u6570\uff1a\n$ docker <span class="token operator">-</span><span class="token operator">-</span>registry<span class="token operator">-</span>mirror<span class="token operator">=</span>https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>registry<span class="token punctuation">.</span>docker<span class="token operator">-</span>cn<span class="token punctuation">.</span>com daemon\n\n\u4e3a\u4e86\u6c38\u4e45\u6027\u4fdd\u7559\u66f4\u6539\uff0c\u60a8\u53ef\u4ee5\u4fee\u6539 <span class="token operator">/</span>etc<span class="token operator">/</span>docker<span class="token operator">/</span>daemon<span class="token punctuation">.</span>json \u6587\u4ef6\u5e76\u6dfb\u52a0\u4e0a registry<span class="token operator">-</span>mirrors \u952e\u503c\u3002\n{\n  <span class="token string">"registry-mirrors"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"https://registry.docker-cn.com"</span><span class="token punctuation">]</span>\n}'},["code",'\u60a8\u53ef\u4ee5\u5728 Docker \u5b88\u62a4\u8fdb\u7a0b\u542f\u52a8\u65f6\u4f20\u5165 --registry-mirror \u53c2\u6570\uff1a\n$ docker --registry-mirror=https://registry.docker-cn.com daemon\n\n\u4e3a\u4e86\u6c38\u4e45\u6027\u4fdd\u7559\u66f4\u6539\uff0c\u60a8\u53ef\u4ee5\u4fee\u6539 /etc/docker/daemon.json \u6587\u4ef6\u5e76\u6dfb\u52a0\u4e0a registry-mirrors \u952e\u503c\u3002\n{\n  "registry-mirrors": ["https://registry.docker-cn.com"]\n}']],["p","\u62c9\u53d6Image\u65f6\u4f1a\u62a5\u5982\u4e0b\u9519\u8bef\uff0c\u8fd9\u662f\u56e0\u4e3a\u672a\u767b\u5f55\uff0c\u5982\u679c\u4f60\u6ca1\u6709docker hub\u7684\u8d26\u53f7\u9700\u8981\u53bb",["a",{title:null,href:"https://hub.docker.com"},"Docker Hub"]," \u521b\u5efa\u4e00\u4e2a\u8d26\u53f7"],["pre",{lang:null,highlighted:' docker pull registry\n Using <span class="token keyword">default</span> tag<span class="token punctuation">:</span> latest\n Error response from daemon<span class="token punctuation">:</span> Get https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>registry<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">.</span>docker<span class="token punctuation">.</span>io<span class="token operator">/</span>v2<span class="token operator">/</span>library<span class="token operator">/</span>registry<span class="token operator">/</span>manifests<span class="token operator">/</span>latest<span class="token punctuation">:</span> unauthorized<span class="token punctuation">:</span> incorrect username <span class="token operator">or</span> password'},["code"," docker pull registry\n Using default tag: latest\n Error response from daemon: Get https://registry-1.docker.io/v2/library/registry/manifests/latest: unauthorized: incorrect username or password"]],["p"," \u5f53\u6210\u529f\u521b\u5efa\u597d\u8d26\u53f7\u65f6\uff0c\u4f7f\u7528docker login \u547d\u4ee4\u767b\u5f55 \uff0c\u767b\u5f55\u6210\u529f\u4e4b\u540e\u5c31\u53ef\u4ee5\u6b63\u5e38\u62c9\u53d6\u955c\u50cf\uff0c\u5207\u8bb0\uff0c",["strong",["em","\u8fd9\u91cc\u767b\u5f55\u7684\u65f6\u5019\u4f7f\u7528\u7684\u662f\u7528\u6237\u540d\u800c\u975e\u4f60\u6ce8\u518c\u7684\u65f6\u5019\u4f7f\u7528\u7684\u90ae\u7bb1"]]],["pre",{lang:null,highlighted:'  docker login\n  Login <span class="token keyword">with</span> your Docker ID <span class="token keyword">to</span> push <span class="token operator">and</span> pull images from Docker Hub<span class="token punctuation">.</span> <span class="token keyword">If</span> you don\'t have a Docker ID<span class="token punctuation">,</span> head over <span class="token keyword">to</span> https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>hub<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>com <span class="token keyword">to</span> create one<span class="token punctuation">.</span>\n  Username<span class="token punctuation">:</span> test\n  Password<span class="token punctuation">:</span>\n  Login Succeeded'},["code","  docker login\n  Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.\n  Username: test\n  Password:\n  Login Succeeded"]]],meta:{order:1,title:"Docker \u5165\u95e8",type:"\u5165\u95e8",filename:"docs/bigdata/docker.zh-CN.md"},toc:["ul"]}}});