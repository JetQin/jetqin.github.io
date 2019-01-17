webpackJsonp([14],{1279:function(n,s){n.exports={content:["article",["h2","Docker Compose \u9884\u89c8"],["p","docker \u547d\u4ee4\u53ef\u4ee5\u7f16\u8bd1\uff0c\u6253\u5305\uff0c\u90e8\u7f72image\uff0cdocker compose\u53ef\u4ee5\u540c\u65f6\u90e8\u7f72\u8fd0\u884c\u591a\u4e2a\u5bb9\u5668\uff0cdocker compse\u4f7f\u7528YAML\u6587\u4ef6\u8fdb\u884c\u76f8\u5173service\u7684\u914d\u7f6e\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u884c\u7b80\u5355\u7684\u547d\u4ee4\u542f\u52a8\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u670d\u52a1\u3002"],["p","\u4f7f\u7528docker-compose\u4e00\u822c\u6709\u4ee5\u4e0b\u6b65\u9aa4\uff1a"],["ol",["li",["p","\u7f16\u5199Dockerfile\uff0c\u5b9a\u4e49\u5c06\u8981\u90e8\u7f72\u7684\u5e94\u7528"]],["li",["p","\u7f16\u5199docker-compose.yml\u6587\u4ef6\uff0c\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5b9a\u4e49\u670d\u52a1\uff0c\u4ed6\u4eec\u53ef\u4ee5\u8fd0\u884c\u5728\u72ec\u7acb\u7684\u5bb9\u5668\u4e4b\u4e2d"]],["li",["p","\u6267\u884cdocker-compose up,\u542f\u52a8\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u670d\u52a1"]]],["h2","\u521b\u5efa\u9879\u76ee"],["p","\u521b\u5efa\u9879\u76ee\uff0c\u8fd9\u91cc\u4f7f\u7528spring-boot\u521b\u5efa\u4e00\u4e2amysql\u7684\u8bfb\u5199\u5e94\u7528\uff0c\u8be5\u5e94\u7528\u4f9d\u8d56mysql\u670d\u52a1\uff0c\u6240\u4ee5\u6211\u4eec\u7684\u5e94\u7528\u5305\u62ec\u4e24\u4e2a\u90e8\u5206"],["p","\u4e00\u4e2a\u662f\u540e\u53f0\u670d\u52a1\u7531spring boot \u7f16\u5199\uff0c\u53e6\u5916\u4e00\u4e2a\u662fmysql\u63d0\u4f9b\u6570\u636e\u5e93\u670d\u52a1\u3002\u5177\u4f53",["a",{title:null,href:"git@github.com:JetQin/spring-boot-mysql.git"},"spring boot mysql"]],["h2","\u7f16\u5199Dockerfile"],["p","Dockerfile  \u7528\u6765\u5c06\u6211\u4eec\u7684\u5e94\u7528\u7f16\u8bd1\u6210image\uff0c \u7136\u540e\u901a\u8fc7\u628aimage\u90e8\u7f72\u5230\u5bb9\u5668\u4e2d\u5411\u5916\u63d0\u4f9b\u670d\u52a1"],["pre",{lang:null,highlighted:'FROM openjdk<span class="token punctuation">:</span><span class="token number">8</span><span class="token operator">-</span>jdk<span class="token operator">-</span>alpine\nVOLUME <span class="token operator">/</span>tmp\nARG JAVA_OPTS\nENV JAVA_OPTS<span class="token operator">=</span><span class="token variable">$JAVA_OPTS</span>\nADD target<span class="token operator">/</span>gs<span class="token operator">-</span>mysql<span class="token operator">-</span>data<span class="token operator">-</span><span class="token number">0.1</span><span class="token punctuation">.</span><span class="token number">0</span><span class="token punctuation">.</span>jar gs<span class="token operator">-</span>data<span class="token punctuation">.</span>jar\nEXPOSE <span class="token number">5001</span>\nENTRYPOINT exec java <span class="token variable">$JAVA_OPTS</span> <span class="token operator">-</span>Djava<span class="token punctuation">.</span>security<span class="token punctuation">.</span>egd<span class="token operator">=</span>file<span class="token punctuation">:</span><span class="token operator">/</span>dev<span class="token operator">/</span><span class="token punctuation">.</span><span class="token operator">/</span>urandom <span class="token operator">-</span>jar gs<span class="token operator">-</span>data<span class="token punctuation">.</span>jar'},["code","FROM openjdk:8-jdk-alpine\nVOLUME /tmp\nARG JAVA_OPTS\nENV JAVA_OPTS=$JAVA_OPTS\nADD target/gs-mysql-data-0.1.0.jar gs-data.jar\nEXPOSE 5001\nENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar gs-data.jar"]],["h2","\u7f16\u5199docker-compose"],["p","docker-compose.yml\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e86\u4e24\u4e2a\u670d\u52a1spring-boot-gs-data\uff0c \u4ee5\u53cadb.  \u8fd9\u91cc\u6709\u4e24\u79cd\u65b9\u5f0f, \u4e00\u662f\u5728\u5bb9\u5668\u5185\uff0c\u4e8c\u662f\u901a\u8fc7docker-machin\u3002"],["p",["strong","docker \u5bb9\u5668\u90e8\u7f72"],"\uff0cmysql\u7684\u670d\u52a1\u540d\u5b9a\u4e49\u4e3a",["strong",["em","db"]],"\uff0c\u4e0d\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0c\u5bbf\u4e3b\u673a\u65e0\u6cd5\u8bbf\u95eedb\u670d\u52a1\uff0c\u4f46\u662f\u5176\u4ed6\u5bb9\u5668\u53ef\u4ee5\u901a\u8fc7\u670d\u52a1\u540ddb\u8c03\u7528\uff0c\u5982\u679c\u4f60\u7528\u7684\u662fmysql\u3002\u53ef\u4ee5\u8fd9\u6837\u914d\u7f6ejdbc url  ",["strong",["em","jdbc:mysql://db:3306/db_example"]]],["pre",{lang:null,highlighted:'version<span class="token punctuation">:</span> <span class="token string">\'3.3\'</span>\nservices<span class="token punctuation">:</span>\n  db<span class="token punctuation">:</span>\n    image<span class="token punctuation">:</span> mysql\n    container_name<span class="token punctuation">:</span> mysql<span class="token operator">-</span>container\n    environment<span class="token punctuation">:</span>\n      <span class="token operator">-</span> MYSQL_USER<span class="token operator">=</span>springuser\n      <span class="token operator">-</span> MYSQL_PASSWORD<span class="token operator">=</span>ThePassword\n      <span class="token operator">-</span> MYSQL_DATABASE<span class="token operator">=</span>db_example\n      <span class="token operator">-</span> MYSQL_ROOT_PASSWORD<span class="token operator">=</span>root\n\n  gs_data<span class="token punctuation">:</span>\n    build<span class="token punctuation">:</span> <span class="token punctuation">.</span>\n    image<span class="token punctuation">:</span> spring<span class="token operator">-</span>boot<span class="token operator">-</span>gs<span class="token operator">-</span>data\n    container_name<span class="token punctuation">:</span> gs<span class="token operator">-</span>data<span class="token operator">-</span>container\n    ports<span class="token punctuation">:</span>\n      <span class="token operator">-</span> <span class="token string">"8080:8080"</span>\n    depends_on<span class="token punctuation">:</span>\n      <span class="token operator">-</span> db\n    environment<span class="token punctuation">:</span>\n      <span class="token operator">-</span> DB_HOST<span class="token operator">=</span>db\n      <span class="token operator">-</span> DB_PORT<span class="token operator">=</span><span class="token number">3306</span>\n      <span class="token operator">-</span> DB_USER<span class="token operator">=</span>springuser\n      <span class="token operator">-</span> DB_PASSWORD<span class="token operator">=</span>ThePassword\n      <span class="token operator">-</span> DB_NAME<span class="token operator">=</span>db_example'},["code","version: '3.3'\nservices:\n  db:\n    image: mysql\n    container_name: mysql-container\n    environment:\n      - MYSQL_USER=springuser\n      - MYSQL_PASSWORD=ThePassword\n      - MYSQL_DATABASE=db_example\n      - MYSQL_ROOT_PASSWORD=root\n\n  gs_data:\n    build: .\n    image: spring-boot-gs-data\n    container_name: gs-data-container\n    ports:\n      - \"8080:8080\"\n    depends_on:\n      - db\n    environment:\n      - DB_HOST=db\n      - DB_PORT=3306\n      - DB_USER=springuser\n      - DB_PASSWORD=ThePassword\n      - DB_NAME=db_example"]],["p","\u901a\u8fc7docker-machine \u8bbf\u95ee\uff0cmysql \u5411\u5bbf\u4e3b\u673a\u66b4\u9732\u4e86\u7aef\u53e3\uff0c\u6b64\u65f6\u5bbf\u4e3b\u673a\u53ef\u4ee5\u8bbf\u95ee\u5230mysql\u63d0\u4f9b\u7684\u6570\u636e\u5e93\u670d\u52a1\uff0c\u6b64\u65f6\u8bbf\u95ee\u6b64\u6570\u636e\u5e93\u670d\u52a1\u9700\u8981\u4f7f\u7528docker-machine \u7684ip\u5730\u5740\uff0c\u53ef\u4ee5\u901a\u8fc7",["strong",["em","docke-machine ip \uff08machine \u540d\u5b57\uff09"]]," \u83b7\u53d6ip\u5730\u5740"],["pre",{lang:null,highlighted:'version<span class="token punctuation">:</span> <span class="token string">\'3.3\'</span>                               # \u5b9a\u4e49compose \u7248\u672c\u53f7\nservices<span class="token punctuation">:</span>                                    # Service \u5b9a\u4e49\n db<span class="token punctuation">:</span>                                         # \u5b9a\u4e49\u7b2c\u4e00\u4e2a\u670d\u52a1\u540d\u79f0\n   image<span class="token punctuation">:</span> mysql                              # \u5b9a\u4e49\u62c9\u53d6\u7684image\u540d\u5b57\n   container_name<span class="token punctuation">:</span> mysql<span class="token operator">-</span>container           # \u5b9a\u4e49container\u540d\u79f0\n ports<span class="token punctuation">:</span>\n   <span class="token operator">-</span> <span class="token string">"3000:3306"</span>                             # \u5bf9\u5916\u63d0\u7aef\u53e3\uff0c\u5bbf\u4e3b\u673a\u7aef\u53e3\u4e3a<span class="token number">3000</span>\uff0c\u5bb9\u5668\u7aef\u53e3<span class="token number">3306</span>\n environment<span class="token punctuation">:</span>\n   <span class="token operator">-</span> MYSQL_USER<span class="token operator">=</span>springuser                   # mysql\u9ed8\u8ba4\u7528\u6237\uff0c\u542f\u52a8\u65f6\u521b\u5efa\n   <span class="token operator">-</span> MYSQL_PASSWORD<span class="token operator">=</span>ThePassword              # mysql\u9ed8\u8ba4\u5bc6\u7801\uff0c\u542f\u52a8\u65f6\u521b\u5efa\n   <span class="token operator">-</span> MYSQL_DATABASE<span class="token operator">=</span>db_example               # mysql\u9ed8\u8ba4\u6570\u636e\u5e93\uff0c\u542f\u52a8\u65f6\u521b\u5efa\n   <span class="token operator">-</span> MYSQL_ROOT_PASSWORD<span class="token operator">=</span>root                # mysql\u9ed8\u8ba4root\u5bc6\u7801\uff0c\u542f\u52a8\u65f6\u521b\u5efa\n gs_data<span class="token punctuation">:</span>                                    # \u5b9a\u4e49\u7b2c\u4e8c\u4e2a\u670d\u52a1\u540d\u79f0\n   build<span class="token punctuation">:</span> <span class="token punctuation">.</span>                                  # \u4f7f\u7528Dockefile\u8fdb\u884cbuild\n   image<span class="token punctuation">:</span> spring<span class="token operator">-</span>boot<span class="token operator">-</span>gs<span class="token operator">-</span>data                # \u7f16\u8bd1\u597d\u7684image name\n   container_name<span class="token punctuation">:</span> gs<span class="token operator">-</span>data<span class="token operator">-</span>container         # \u90e8\u7f72\u65f6\u5bb9\u5668\u540d\u79f0\n   ports<span class="token punctuation">:</span>                                    # \u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7aef\u53e3\n     <span class="token operator">-</span> <span class="token string">"8080:8080"</span>\n   depends_on<span class="token punctuation">:</span>                               # \u4f9d\u8d56\u4e8e\u7b2c\u4e00\u4e2a\u670d\u52a1\n     <span class="token operator">-</span> db\n   environment<span class="token punctuation">:</span>                              # \u5b9a\u4e49\u670d\u52a1\u9700\u8981\u7684\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\n     <span class="token operator">-</span> DB_HOST<span class="token operator">=</span><span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">99.100</span>\n     <span class="token operator">-</span> DB_PORT<span class="token operator">=</span><span class="token number">3000</span>\n     <span class="token operator">-</span> DB_USER<span class="token operator">=</span>springuser\n     <span class="token operator">-</span> DB_PASSWORD<span class="token operator">=</span>ThePassword\n     <span class="token operator">-</span> DB_NAME<span class="token operator">=</span>db_example'},["code",'version: \'3.3\'                               # \u5b9a\u4e49compose \u7248\u672c\u53f7\nservices:                                    # Service \u5b9a\u4e49\n db:                                         # \u5b9a\u4e49\u7b2c\u4e00\u4e2a\u670d\u52a1\u540d\u79f0\n   image: mysql                              # \u5b9a\u4e49\u62c9\u53d6\u7684image\u540d\u5b57\n   container_name: mysql-container           # \u5b9a\u4e49container\u540d\u79f0\n ports:\n   - "3000:3306"                             # \u5bf9\u5916\u63d0\u7aef\u53e3\uff0c\u5bbf\u4e3b\u673a\u7aef\u53e3\u4e3a3000\uff0c\u5bb9\u5668\u7aef\u53e33306\n environment:\n   - MYSQL_USER=springuser                   # mysql\u9ed8\u8ba4\u7528\u6237\uff0c\u542f\u52a8\u65f6\u521b\u5efa\n   - MYSQL_PASSWORD=ThePassword              # mysql\u9ed8\u8ba4\u5bc6\u7801\uff0c\u542f\u52a8\u65f6\u521b\u5efa\n   - MYSQL_DATABASE=db_example               # mysql\u9ed8\u8ba4\u6570\u636e\u5e93\uff0c\u542f\u52a8\u65f6\u521b\u5efa\n   - MYSQL_ROOT_PASSWORD=root                # mysql\u9ed8\u8ba4root\u5bc6\u7801\uff0c\u542f\u52a8\u65f6\u521b\u5efa\n gs_data:                                    # \u5b9a\u4e49\u7b2c\u4e8c\u4e2a\u670d\u52a1\u540d\u79f0\n   build: .                                  # \u4f7f\u7528Dockefile\u8fdb\u884cbuild\n   image: spring-boot-gs-data                # \u7f16\u8bd1\u597d\u7684image name\n   container_name: gs-data-container         # \u90e8\u7f72\u65f6\u5bb9\u5668\u540d\u79f0\n   ports:                                    # \u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7aef\u53e3\n     - "8080:8080"\n   depends_on:                               # \u4f9d\u8d56\u4e8e\u7b2c\u4e00\u4e2a\u670d\u52a1\n     - db\n   environment:                              # \u5b9a\u4e49\u670d\u52a1\u9700\u8981\u7684\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\n     - DB_HOST=192.168.99.100\n     - DB_PORT=3000\n     - DB_USER=springuser\n     - DB_PASSWORD=ThePassword\n     - DB_NAME=db_example']],["p","application.properties, \u8fd9\u91cc\u4f7f\u7528\u5360\u4f4d\u7b26\u52a8\u6001\u83b7\u53d6\u6570\u636e\u5e93\u914d\u7f6e\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7531docker-compose\u542f\u52a8\u65f6\u52a8\u6001\u4f20\u5165"],["pre",{lang:null,highlighted:'server<span class="token punctuation">.</span>port<span class="token operator">=</span><span class="token number">8080</span>\nspring<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>hibernate<span class="token punctuation">.</span>ddl<span class="token operator">-</span>auto<span class="token operator">=</span>create\nspring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>url<span class="token operator">=</span>jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>${DB_HOST}<span class="token punctuation">:</span>${DB_PORT}<span class="token operator">/</span>${DB_NAME}\nspring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>username<span class="token operator">=</span>${DB_USER}\nspring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>password<span class="token operator">=</span>${DB_PASSWORD}\nspring<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>driver<span class="token operator">-</span>class<span class="token operator">-</span>name <span class="token operator">=</span> com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span>Driver\nspring<span class="token punctuation">.</span>jpa<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>hibernate<span class="token punctuation">.</span>dialect <span class="token operator">=</span> org<span class="token punctuation">.</span>hibernate<span class="token punctuation">.</span>dialect<span class="token punctuation">.</span>MySQL5Dialect'},["code","server.port=8080\nspring.jpa.hibernate.ddl-auto=create\nspring.datasource.url=jdbc:mysql://${DB_HOST}:${DB_PORT}/${DB_NAME}\nspring.datasource.username=${DB_USER}\nspring.datasource.password=${DB_PASSWORD}\nspring.datasource.driver-class-name = com.mysql.jdbc.Driver\nspring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect"]],["table",["thead",["tr",["th"],["th","\u5bf9\u5bbf\u4e3b\u673a\u5f00\u653e\u7aef\u53e3"],["th","\u8bbf\u95ee\u6570\u636e\u5e93\u65b9\u5f0f"]]],["tbody",["tr",["td","\u7b2c\u4e00\u79cd\u65b9\u5f0f"],["td","\u5426"],["td","\u901a\u8fc7\u670d\u52a1\u540d\u5b57\u8c03\u7528"]],["tr",["td","\u7b2c\u4e8c\u79cd\u65b9\u5f0f"],["td","\u662f"],["td","\u901a\u8fc7ip\u5730\u5740\u8c03\u7528"]]]],["p",["strong",["em","\u5982\u679c\u670d\u52a1\u5c11\u7684\u5316\uff0c\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e00\u79cd\u65b9\u5f0f\u90e8\u7f72\uff0c\u5982\u679cdocker\u662f\u4e00\u4e2a\u96c6\u7fa4\uff0c\u6700\u597d\u4f7f\u7528\u7b2c\u4e8c\u79cd\u65b9\u5f0f"]]],["h2","\u8fd0\u884c"],["p","\u542f\u52a8\u65f6\u53ea\u9700\u8981\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5373\u53ef\u4e00\u6b21\u6027\u90e8\u7f72db\uff0c\u548cgs_data\u4e24\u4e2a\u670d\u52a1\uff0c\u5177\u4f53\u662f\u5426\u8fd8\u9700\u8981\u5176\u4ed6\u670d\u52a1\uff0c\u53ef\u4ee5\u4f9d\u8d56\u4f60\u7684\u9700\u6c42\u5b9a\u5236"],["p","docker-compose.yml"],["pre",{lang:null,highlighted:'docker<span class="token operator">-</span>compose up          <span class="token operator">/</span><span class="token operator">/</span>\u524d\u53f0\u542f\u52a8\uff0c\u542f\u52a8\u65f6\u4f1a\u5728\u547d\u4ee4\u884c\u6253\u5370\u76f8\u5173\u7684\u65e5\u5fd7\u4fe1\u606f\ndocker<span class="token operator">-</span>compose up <span class="token operator">-</span>d       <span class="token operator">/</span><span class="token operator">/</span>\u540e\u53f0\u542f\u52a8'},["code","docker-compose up          //\u524d\u53f0\u542f\u52a8\uff0c\u542f\u52a8\u65f6\u4f1a\u5728\u547d\u4ee4\u884c\u6253\u5370\u76f8\u5173\u7684\u65e5\u5fd7\u4fe1\u606f\ndocker-compose up -d       //\u540e\u53f0\u542f\u52a8"]],["p","\u8f93\u51fa"],["pre",{lang:null,highlighted:'docker<span class="token operator">-</span>compose up\nBuilding gs_data\n<span class="token keyword">Step</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">7</span> <span class="token punctuation">:</span> FROM openjdk<span class="token punctuation">:</span><span class="token number">8</span><span class="token operator">-</span>jdk<span class="token operator">-</span>alpine\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> 97bc1352afde\n<span class="token keyword">Step</span> <span class="token number">2</span><span class="token operator">/</span><span class="token number">7</span> <span class="token punctuation">:</span> VOLUME <span class="token operator">/</span>tmp\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> Running <span class="token keyword">in</span> 6e580cf16d5b\nRemoving intermediate container 6e580cf16d5b\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> 0ce3e37f3d5f\n<span class="token keyword">Step</span> <span class="token number">3</span><span class="token operator">/</span><span class="token number">7</span> <span class="token punctuation">:</span> ARG JAVA_OPTS\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> Running <span class="token keyword">in</span> efebcd3176fc\nRemoving intermediate container efebcd3176fc\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> 547b511e91e2\n<span class="token keyword">Step</span> <span class="token number">4</span><span class="token operator">/</span><span class="token number">7</span> <span class="token punctuation">:</span> ENV JAVA_OPTS<span class="token operator">=</span><span class="token variable">$JAVA_OPTS</span>\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> Running <span class="token keyword">in</span> ea93bcb1b04f\nRemoving intermediate container ea93bcb1b04f\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> 1bf53f6ed368\n<span class="token keyword">Step</span> <span class="token number">5</span><span class="token operator">/</span><span class="token number">7</span> <span class="token punctuation">:</span> ADD target<span class="token operator">/</span>gs<span class="token operator">-</span>mysql<span class="token operator">-</span>data<span class="token operator">-</span><span class="token number">0.1</span><span class="token punctuation">.</span><span class="token number">0</span><span class="token punctuation">.</span>jar gs<span class="token operator">-</span>data<span class="token punctuation">.</span>jar\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> 975ebe826c4a\n<span class="token keyword">Step</span> <span class="token number">6</span><span class="token operator">/</span><span class="token number">7</span> <span class="token punctuation">:</span> EXPOSE <span class="token number">5001</span>\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> Running <span class="token keyword">in</span> 127bf2247342\nRemoving intermediate container 127bf2247342\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> 7d7006130982\n<span class="token keyword">Step</span> <span class="token number">7</span><span class="token operator">/</span><span class="token number">7</span> <span class="token punctuation">:</span> ENTRYPOINT exec java <span class="token variable">$JAVA_OPTS</span> <span class="token operator">-</span>Djava<span class="token punctuation">.</span>security<span class="token punctuation">.</span>egd<span class="token operator">=</span>file<span class="token punctuation">:</span><span class="token operator">/</span>dev<span class="token operator">/</span><span class="token punctuation">.</span><span class="token operator">/</span>urandom <span class="token operator">-</span>jar gs<span class="token operator">-</span>data<span class="token punctuation">.</span>jar\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> Running <span class="token keyword">in</span> f1eab4b0251d\nRemoving intermediate container f1eab4b0251d\n <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">></span> 08fb51304c50\n\nSuccessfully built 08fb51304c50\nSuccessfully tagged spring<span class="token operator">-</span>boot<span class="token operator">-</span>gs<span class="token operator">-</span>data<span class="token punctuation">:</span>latest\nWARNING<span class="token punctuation">:</span> Image <span class="token keyword">for</span> service gs_data was built because it did <span class="token operator">not</span> already exist<span class="token punctuation">.</span> <span class="token keyword">To</span> rebuild this image you must use `docker<span class="token operator">-</span>compose build` <span class="token operator">or</span> `docker<span class="token operator">-</span>compose up <span class="token operator">-</span><span class="token operator">-</span>build`<span class="token punctuation">.</span>\nStarting mysql<span class="token operator">-</span>container <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> done\nCreating gs<span class="token operator">-</span>data<span class="token operator">-</span>container <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> done'},["code","docker-compose up\nBuilding gs_data\nStep 1/7 : FROM openjdk:8-jdk-alpine\n ---\x3e 97bc1352afde\nStep 2/7 : VOLUME /tmp\n ---\x3e Running in 6e580cf16d5b\nRemoving intermediate container 6e580cf16d5b\n ---\x3e 0ce3e37f3d5f\nStep 3/7 : ARG JAVA_OPTS\n ---\x3e Running in efebcd3176fc\nRemoving intermediate container efebcd3176fc\n ---\x3e 547b511e91e2\nStep 4/7 : ENV JAVA_OPTS=$JAVA_OPTS\n ---\x3e Running in ea93bcb1b04f\nRemoving intermediate container ea93bcb1b04f\n ---\x3e 1bf53f6ed368\nStep 5/7 : ADD target/gs-mysql-data-0.1.0.jar gs-data.jar\n ---\x3e 975ebe826c4a\nStep 6/7 : EXPOSE 5001\n ---\x3e Running in 127bf2247342\nRemoving intermediate container 127bf2247342\n ---\x3e 7d7006130982\nStep 7/7 : ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar gs-data.jar\n ---\x3e Running in f1eab4b0251d\nRemoving intermediate container f1eab4b0251d\n ---\x3e 08fb51304c50\n\nSuccessfully built 08fb51304c50\nSuccessfully tagged spring-boot-gs-data:latest\nWARNING: Image for service gs_data was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.\nStarting mysql-container ... done\nCreating gs-data-container ... done"]],["p","\u9a8c\u8bc1\uff1a"],["pre",{lang:null,highlighted:'curl <span class="token operator">-</span>s <span class="token string">"http://192.168.99.100:8080/demo/add?name=Jet&amp;email=test@test.com"</span>  <span class="token operator">/</span><span class="token operator">/</span>\u6dfb\u52a0\u7528\u6237\nSaved\n\ncurl <span class="token operator">-</span>s <span class="token string">"http://192.168.99.100:8080/demo/all"</span>          <span class="token operator">/</span><span class="token operator">/</span>\u67e5\u8be2\n<span class="token punctuation">[</span>{<span class="token string">"id"</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"name"</span><span class="token punctuation">:</span><span class="token string">"Jet"</span><span class="token punctuation">,</span><span class="token string">"email"</span><span class="token punctuation">:</span><span class="token string">"test@test.com"</span>}<span class="token punctuation">]</span>'},["code",'curl -s "http://192.168.99.100:8080/demo/add?name=Jet&email=test@test.com"  //\u6dfb\u52a0\u7528\u6237\nSaved\n\ncurl -s "http://192.168.99.100:8080/demo/all"          //\u67e5\u8be2\n[{"id":1,"name":"Jet","email":"test@test.com"}]']]],meta:{order:1,title:"Docker Compose \u5165\u95e8 (\u4e00)",type:"\u5165\u95e8",filename:"docs/bigdata/docker-compose.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Docker-Compose-\u9884\u89c8",title:"Docker Compose \u9884\u89c8"},"Docker Compose \u9884\u89c8"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u521b\u5efa\u9879\u76ee",title:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7f16\u5199Dockerfile",title:"\u7f16\u5199Dockerfile"},"\u7f16\u5199Dockerfile"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7f16\u5199docker-compose",title:"\u7f16\u5199docker-compose"},"\u7f16\u5199docker-compose"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8fd0\u884c",title:"\u8fd0\u884c"},"\u8fd0\u884c"]]]}}});