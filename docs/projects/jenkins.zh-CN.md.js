webpackJsonp([1],{1319:function(n,s){n.exports={content:["article",["h2","Jenkins \u662f\u4ec0\u4e48\uff1f"],["p","Jenkins\u662f\u4e00\u6b3e\u5f00\u6e90 CI&CD \u8f6f\u4ef6\uff0c\u7528\u4e8e\u81ea\u52a8\u5316\u5404\u79cd\u4efb\u52a1\uff0c\u5305\u62ec\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u90e8\u7f72\u8f6f\u4ef6\u3002"],["p","Jenkins \u652f\u6301\u5404\u79cd\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u901a\u8fc7\u7cfb\u7edf\u5305\u3001Docker \u6216\u8005\u901a\u8fc7\u4e00\u4e2a\u72ec\u7acb\u7684 Java \u7a0b\u5e8f\u3002"],["h2","\u5b89\u88c5Jenkins"],["p","Jenkins \u63d0\u4f9b\u4e86\u591a\u79cd\u7248\u672c\u7684\u4e0b\u8f7d\u65b9\u5f0f\uff0c\u5177\u4f53\u53ef\u4ee5\u5728\u8fd9\u91cc\u67e5\u770b\n",["a",{title:null,href:"https://jenkins.io/zh/download/"},"Jenkins"],"\n\u4e5f\u53ef\u4ee5\u901a\u8fc7 docker \u5bb9\u5668\u5b89\u88c5"],["pre",{lang:null,highlighted:'docker run <span class="token operator">-</span>d <span class="token operator">-</span>u root  \\\n<span class="token operator">-</span>p <span class="token number">8080</span><span class="token punctuation">:</span><span class="token number">8080</span>  \\\n<span class="token operator">-</span>v jenkins<span class="token operator">-</span>data<span class="token punctuation">:</span><span class="token operator">/</span>var<span class="token operator">/</span>jenkins_home   \\\n<span class="token operator">-</span>v <span class="token operator">/</span>var<span class="token operator">/</span>run<span class="token operator">/</span>docker<span class="token punctuation">.</span>sock<span class="token punctuation">:</span><span class="token operator">/</span>var<span class="token operator">/</span>run<span class="token operator">/</span>docker<span class="token punctuation">.</span>sock   \\\njenkinsci<span class="token operator">/</span>blueocean'},["code","docker run -d -u root  \\\n-p 8080:8080  \\\n-v jenkins-data:/var/jenkins_home   \\\n-v /var/run/docker.sock:/var/run/docker.sock   \\\njenkinsci/blueocean"]],["h2","\u542f\u505cJenkins"],["p","OSX \u4e2dJenkins\u7684\u914d\u7f6e\u6587\u4ef6\u5728",["code","/Library/Preferences/org.jenkins-ci.plist"]],["p","\u542f\u52a8Jenkins"],["pre",{lang:null,highlighted:'sudo launchctl load <span class="token operator">/</span>Library<span class="token operator">/</span>LaunchDaemons<span class="token operator">/</span>org<span class="token punctuation">.</span>jenkins<span class="token operator">-</span>ci<span class="token punctuation">.</span>plist'},["code","sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist"]],["p","\u505c\u6b62Jenkins"],["pre",{lang:null,highlighted:'sudo launchctl unload <span class="token operator">/</span>Library<span class="token operator">/</span>LaunchDaemons<span class="token operator">/</span>org<span class="token punctuation">.</span>jenkins<span class="token operator">-</span>ci<span class="token punctuation">.</span>plist'},["code","sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist"]],["p","\u5378\u8f7dJenkins"],["pre",{lang:null,highlighted:'<span class="token operator">/</span>Library<span class="token operator">/</span>Application Support<span class="token operator">/</span>Jenkins<span class="token operator">/</span>Uninstall<span class="token punctuation">.</span>command'},["code","/Library/Application Support/Jenkins/Uninstall.command"]],["h2","Jenkins Pipeline"],["p",'Jenkins Pipeline\uff08\u6216\u7b80\u79f0\u4e3a "Pipeline"\uff09\u662f\u4e00\u5957\u63d2\u4ef6\uff0c\u5c06\u6301\u7eed\u4ea4\u4ed8\u7684\u5b9e\u73b0\u548c\u5b9e\u65bd\u96c6\u6210\u5230 Jenkins \u4e2d\n\u521b\u5efaJenkins Pipeline\u9879\u76ee\uff0c\u5728Pipeline\u4e2d\u914d\u7f6e\u76f8\u5173\u7684\u9879\u76ee\u5730\u5740'],["p","\u7f16\u8bd1\u9879\u76ee\u4e4b\u524d\u5728",["code","http://localhost:8080/configureCredentials/"]," \u6dfb\u52a0credentials"],["p",["img",{title:null,src:"./assets/jenkins-pipeline.png",alt:"Jenkins Pipeline"}]],["p","Jenkins Output\n",["img",{title:null,src:"./assets/jenkins-output.png",alt:"Jenkins output"}]],["h2","\u7f16\u5199pipeline"],["p","Pipeline \u4e2dagent\u5b9a\u4e49\u4e86\u4ee3\u7801\u7684\u6267\u884c\u73af\u5883\uff0c\u53ef\u4ee5\u662fjava, maven, gradle, node \u7b49, stage\u5b9a\u4e49\u4e86\u64cd\u4f5c\u6b65\u9aa4\uff0c\u53ef\u4ee5\u628a\u201c\u6b65\u9aa4\uff08step)\u201d\u770b\u4f5c\u4e00\u4e2a\u6267\u884c\u5355\u4e00\u52a8\u4f5c\u7684\u5355\u4e00\u7684\u547d\u4ee4\u3002 \u5f53\u4e00\u4e2a\u6b65\u9aa4\u8fd0\u884c\u6210\u529f\u65f6\u7ee7\u7eed\u8fd0\u884c\u4e0b\u4e00\u4e2a\u6b65\u9aa4\u3002\u5f53\u4efb\u4f55\u4e00\u4e2a\u6b65\u9aa4\u6267\u884c\u5931\u8d25\u65f6\uff0cPipeline \u7684\u6267\u884c\u7ed3\u679c\u4e5f\u4e3a\u5931\u8d25\u3002"],["pre",{lang:null,highlighted:'pipeline {\n    agent {\n        docker {\n            image <span class="token string">\'gradle\'</span>\n        }\n    }\n\n    environment {\n        DISABLE_AUTH <span class="token operator">=</span> <span class="token string">\'true\'</span>\n        DB_ENGINE    <span class="token operator">=</span> <span class="token string">\'sqlite\'</span>\n    }\n\n    stages {\n\n        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">\'Init\'</span><span class="token punctuation">)</span> {\n            steps {\n                echo <span class="token string">\'Init\'</span>\n                sh <span class="token string">\'gradle compileJava\'</span>\n            }\n        }\n\n        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">\'Build\'</span><span class="token punctuation">)</span> {\n            steps {\n                echo <span class="token string">\'Building\'</span>\n                sh <span class="token string">\'gradle build\'</span>\n            }\n        }\n        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">\'Test\'</span><span class="token punctuation">)</span> {\n            steps {\n                echo <span class="token string">\'Testing\'</span>\n                sh <span class="token string">\'gradle test\'</span>\n            }\n        }\n        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">\'Deploy\'</span><span class="token punctuation">)</span> {\n            steps {\n                echo <span class="token string">\'Deploying\'</span>\n                sh <span class="token string">\'gradle jar\'</span>\n            }\n        }\n    }\n\n    post {\n        success {\n            echo <span class="token string">\'I succeeeded!\'</span>\n        }\n    }\n}'},["code","pipeline {\n    agent {\n        docker {\n            image 'gradle'\n        }\n    }\n\n    environment {\n        DISABLE_AUTH = 'true'\n        DB_ENGINE    = 'sqlite'\n    }\n\n    stages {\n\n        stage('Init') {\n            steps {\n                echo 'Init'\n                sh 'gradle compileJava'\n            }\n        }\n\n        stage('Build') {\n            steps {\n                echo 'Building'\n                sh 'gradle build'\n            }\n        }\n        stage('Test') {\n            steps {\n                echo 'Testing'\n                sh 'gradle test'\n            }\n        }\n        stage('Deploy') {\n            steps {\n                echo 'Deploying'\n                sh 'gradle jar'\n            }\n        }\n    }\n\n    post {\n        success {\n            echo 'I succeeeded!'\n        }\n    }\n}"]],["h2","BlueOcean \u63d2\u4ef6"],["p","Blue Ocean \u662f\u4e00\u4e2a\u53ef\u89c6\u5316Pipeline\u6d41\u7a0b\u7684\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5b9e\u65f6\u663e\u793a\u7f16\u8bd1\u72b6\u6001\u3002\n",["a",{title:null,href:"https://jenkins.io/doc/book/blueocean/getting-started/"},"Blue Ocean"]],["p","\u793a\u4f8b\u8f93\u51fa\n",["img",{title:null,src:"./assets/jenkins-blue.png",alt:"Output"}]]],meta:{order:1,title:"Jenkins \u4f7f\u7528\u5165\u95e8",type:"\u5165\u95e8",filename:"docs/projects/jenkins.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Jenkins-\u662f\u4ec0\u4e48\uff1f",title:"Jenkins \u662f\u4ec0\u4e48\uff1f"},"Jenkins \u662f\u4ec0\u4e48\uff1f"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5Jenkins",title:"\u5b89\u88c5Jenkins"},"\u5b89\u88c5Jenkins"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u542f\u505cJenkins",title:"\u542f\u505cJenkins"},"\u542f\u505cJenkins"]],["li",["a",{className:"bisheng-toc-h2",href:"#Jenkins-Pipeline",title:"Jenkins Pipeline"},"Jenkins Pipeline"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7f16\u5199pipeline",title:"\u7f16\u5199pipeline"},"\u7f16\u5199pipeline"]],["li",["a",{className:"bisheng-toc-h2",href:"#BlueOcean-\u63d2\u4ef6",title:"BlueOcean \u63d2\u4ef6"},"BlueOcean \u63d2\u4ef6"]]]}}});