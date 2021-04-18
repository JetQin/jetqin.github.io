webpackJsonp([23],{1311:function(n,s){n.exports={content:["article",["p","OAuth2 \u4e2d\u6709\u4e09\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u662f\u5ba2\u6237\u7aef(OAuth2 client)\uff0c\u8ba4\u8bc1\u670d\u52a1(OAuth2 Provider)\uff0c\u8d44\u6e90\u670d\u52a1(OAuth2 Resource). \n\u8ba4\u8bc1\u670d\u52a1\u7528\u6765\u4fdd\u62a4\u8d44\u6e90\u88ab\u6388\u6743\u7684\u5ba2\u6237\u7aef\u8fdb\u884c\u8bbf\u95ee\uff0c\u8ba4\u8bc1\u670d\u52a1\u901a\u8fc7\u7ba1\u7406token\u6765\u4f7f\u5176\u8bbf\u95ee\u4e0d\u540c\u7684\u8d44\u6e90\u3002"],["p",["code","Spring Security OAuth2"]," \u901a\u8fc7 Security Filter Chain \u6765\u62e6\u622a",["code","/oauth/authorize"],"\u548c",["code","/oauth/token"],"\u4e24\u4e2a\u5730\u5740\u5b9e\u73b0\u8ba4\u8bc1\u548c\u6388\u6743\u3002"],["p",["code","AuthorizationEndpoint"]," \u7528\u4f5c\u8ba4\u8bc1. Default URL: /oauth/authorize.\n",["code","TokenEndpoint"]," \u7528\u4f5c\u83b7\u53d6\u6388\u6743token. Default URL: /oauth/token."],["h2","\u6388\u6743\u7c7b\u578b"],["p","OAuth2 \u63d0\u4f9b\u4e86\u5982\u4e0b\u51e0\u79cd\u6388\u6743\u7c7b\u578b: ",["a",{title:null,href:"https://oauth.net/2/grant-types/"},"\u53ef\u53c2\u8003"]],["ul",["li",["p",["code","Authorization Code"],": \u901a\u8fc7\u7b2c\u4e09\u65b9\u5e73\u53f0\u6388\u6743\u83b7\u5f97\u7684\u767b\u5f55token"]],["li",["p",["code","Password"],": \u7528\u6237\u63d0\u4ea4\u7528\u6237\u540d\u5bc6\u7801\u6765\u83b7\u53d6token"],["pre",{lang:null,highlighted:'POST <span class="token operator">/</span>oauth<span class="token operator">/</span>token HTTP<span class="token operator">/</span><span class="token number">1.1</span>\nHost<span class="token punctuation">:</span> authorization<span class="token operator">-</span>server<span class="token punctuation">.</span>com\nContent<span class="token operator">-</span>type<span class="token punctuation">:</span> application<span class="token operator">/</span>x<span class="token operator">-</span>www<span class="token operator">-</span>form<span class="token operator">-</span>urlencoded\n\ngrant_type<span class="token operator">=</span>password\n<span class="token operator">&amp;</span>username<span class="token operator">=</span>exampleuser\n<span class="token operator">&amp;</span>password<span class="token operator">=</span>1234luggage\n<span class="token operator">&amp;</span>client_id<span class="token operator">=</span>xxxxxxxxxx\n\n{\n<span class="token string">"access_token"</span><span class="token punctuation">:</span> <span class="token string">"MTQ0NjOkZmQ5OTM5NDE9ZTZjNGZmZjI3"</span><span class="token punctuation">,</span>\n<span class="token string">"token_type"</span><span class="token punctuation">:</span> <span class="token string">"bearer"</span><span class="token punctuation">,</span>\n<span class="token string">"expires_in"</span><span class="token punctuation">:</span> <span class="token number">3600</span><span class="token punctuation">,</span>\n<span class="token string">"scope"</span><span class="token punctuation">:</span> <span class="token string">"create"</span>\n}'},["code",'POST /oauth/token HTTP/1.1\nHost: authorization-server.com\nContent-type: application/x-www-form-urlencoded\n\ngrant_type=password\n&username=exampleuser\n&password=1234luggage\n&client_id=xxxxxxxxxx\n\n{\n"access_token": "MTQ0NjOkZmQ5OTM5NDE9ZTZjNGZmZjI3",\n"token_type": "bearer",\n"expires_in": 3600,\n"scope": "create"\n}']]],["li",["p",["code","Client credentials"],": \u5f53\u5e94\u7528\u8bf7\u6c42access token\u8bbf\u95ee\u81ea\u5df1\u7684\u8d44\u6e90"],["pre",{lang:null,highlighted:'POST <span class="token operator">/</span>token HTTP<span class="token operator">/</span><span class="token number">1.1</span>\nHost<span class="token punctuation">:</span> authorization<span class="token operator">-</span>server<span class="token punctuation">.</span>com\n\ngrant_type<span class="token operator">=</span>client_credentials\n<span class="token operator">&amp;</span>client_id<span class="token operator">=</span>xxxxxxxxxx\n<span class="token operator">&amp;</span>client_secret<span class="token operator">=</span>xxxxxxxxxx'},["code","POST /token HTTP/1.1\nHost: authorization-server.com\n\ngrant_type=client_credentials\n&client_id=xxxxxxxxxx\n&client_secret=xxxxxxxxxx"]]],["li",["p",["code","Refresh Token"],": \u5f53access token\u8fc7\u671f\u540e\u901a\u8fc7refresh token\u91cd\u65b0\u83b7\u53d6access token"]]],["pre",{lang:null,highlighted:'POST <span class="token operator">/</span>oauth<span class="token operator">/</span>token HTTP<span class="token operator">/</span><span class="token number">1.1</span>\nHost<span class="token punctuation">:</span> authorization<span class="token operator">-</span>server<span class="token punctuation">.</span>com\n \ngrant_type<span class="token operator">=</span>refresh_token\n<span class="token operator">&amp;</span>refresh_token<span class="token operator">=</span>xxxxxxxxxxx\n<span class="token operator">&amp;</span>client_id<span class="token operator">=</span>xxxxxxxxxx\n<span class="token operator">&amp;</span>client_secret<span class="token operator">=</span>xxxxxxxxxx'},["code","POST /oauth/token HTTP/1.1\nHost: authorization-server.com\n \ngrant_type=refresh_token\n&refresh_token=xxxxxxxxxxx\n&client_id=xxxxxxxxxx\n&client_secret=xxxxxxxxxx"]],["h2","Authorization Server"],["p","\u4ee3\u7801\u4e2d\u901a\u8fc7",["code","@EnableAuthorizationServer"],"\u6ce8\u89e3\u4ee5\u53ca",["code","AuthorizationServerConfigurer"],"\u63a5\u53e3\u6765\u5b9e\u73b0\u76f8\u5173\u7684\u914d\u7f6e"],["pre",{lang:null,highlighted:'public class AuthorizationServerConfigurerAdapter implements AuthorizationServerConfigurer {\n    public <span class="token function">AuthorizationServerConfigurerAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    }\n\n    public void <span class="token function">configure</span><span class="token punctuation">(</span>AuthorizationServerSecurityConfigurer security<span class="token punctuation">)</span> throws Exception {\n        <span class="token operator">/</span><span class="token operator">/</span> \u5b9a\u4e49token \u5b89\u5168\u89c4\u5219\n    }\n\n    public void <span class="token function">configure</span><span class="token punctuation">(</span>ClientDetailsServiceConfigurer clients<span class="token punctuation">)</span> throws Exception {\n       <span class="token operator">/</span><span class="token operator">/</span> \u5ba2\u6237\u7aef\u914d\u7f6e\u4fe1\u606f\u521d\u59cb\u5316\n    }\n\n    public void <span class="token function">configure</span><span class="token punctuation">(</span>AuthorizationServerEndpointsConfigurer endpoints<span class="token punctuation">)</span> throws Exception {\n        <span class="token operator">/</span><span class="token operator">/</span> \u5b9a\u4e49\u670d\u52a1\u7aeftoken\uff0c\u8ba4\u8bc1\n    }\n}'},["code","public class AuthorizationServerConfigurerAdapter implements AuthorizationServerConfigurer {\n    public AuthorizationServerConfigurerAdapter() {\n    }\n\n    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {\n        // \u5b9a\u4e49token \u5b89\u5168\u89c4\u5219\n    }\n\n    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {\n       // \u5ba2\u6237\u7aef\u914d\u7f6e\u4fe1\u606f\u521d\u59cb\u5316\n    }\n\n    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {\n        // \u5b9a\u4e49\u670d\u52a1\u7aeftoken\uff0c\u8ba4\u8bc1\n    }\n}"]],["h2","Token\u7ba1\u7406"],["p","Spring Security OAuth2 \u63d0\u4f9b\u4e86\u4e09\u79cd\u65b9\u5f0f\u6765\u7ba1\u7406Token\u3002"],["ul",["li",["p",["code","InMemoryTokenStore"],": \u53ef\u4ee5\u5c06token\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u53ea\u652f\u6301\u5355\u4e2aserver\uff0c\u4f1a\u6709\u5355\u70b9\u5931\u8d25\u7684\u95ee\u9898"]],["li",["p",["code","JdbcTokenStore"],": \u5c06token\u5b58\u50a8\u5230\u5173\u7cfb\u6570\u636e\u5e93\u4e2d\uff0c\u53ef\u4ee5\u5bf9\u670d\u52a1\u8fdb\u884c\u6a2a\u5411\u6269\u5c55"]],["li",["p",["code","JSON Web Token"],": \u5c06\u6240\u6709\u4fe1\u606f\u5b58\u50a8\u5230token\u4e2d\uff0ctoken\u957f\u5ea6\u5f88\u5927\uff0c\u4e0d\u80fd\u8fdb\u884ctoken\u56de\u6536"]]],["h2","\u5ba2\u6237\u7aef\u914d\u7f6e"],["p",["code","ClientDetailsServiceConfigurer"]," \u53ef\u4ee5\u5b9a\u4e49\u5728\u5185\u5b58\u4e2d\u4e5f\u53ef\u4ee5\u901a\u8fc7jdbc\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u5b83\u5305\u542b\u5982\u4e0b\u4fe1\u606f\u3002"],["ul",["li",["p",["code","clientId"],": \u5ba2\u6237\u7aefid"]],["li",["p",["code","secret"],": \u5ba2\u6237\u7aef\u5bc6\u94a5"]],["li",["p",["code","scope"],": \u9650\u5236\u5ba2\u6237\u7aef\u7684\u4f5c\u7528\u57df"]],["li",["p",["code","authorizedGrantTypes"],": \u6388\u6743\u7c7b\u578b"]],["li",["p",["code","authorities"],":\u6743\u9650"]]],["h2","\u793a\u4f8b\u4ee3\u7801"],["pre",{lang:null,highlighted:'<span class="token variable">@Configuration</span>\n<span class="token variable">@EnableAuthorizationServer</span>\npublic class AuthServerOAuth2Config\n  extends AuthorizationServerConfigurerAdapter {\n  \n    <span class="token variable">@Autowired</span>\n    @<span class="token function">Qualifier</span><span class="token punctuation">(</span><span class="token string">"authenticationManagerBean"</span><span class="token punctuation">)</span>\n    private AuthenticationManager authenticationManager<span class="token comment" spellcheck="true">;</span>\n \n    <span class="token variable">@Override</span>\n    public void <span class="token function">configure</span><span class="token punctuation">(</span>\n      AuthorizationServerSecurityConfigurer oauthServer<span class="token punctuation">)</span> \n      throws Exception {\n        oauthServer\n          <span class="token punctuation">.</span><span class="token function">tokenKeyAccess</span><span class="token punctuation">(</span><span class="token string">"permitAll()"</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">checkTokenAccess</span><span class="token punctuation">(</span><span class="token string">"isAuthenticated()"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n \n    <span class="token variable">@Override</span>\n    public void <span class="token function">configure</span><span class="token punctuation">(</span>ClientDetailsServiceConfigurer clients<span class="token punctuation">)</span> \n      throws Exception {\n        clients<span class="token punctuation">.</span><span class="token function">jdbc</span><span class="token punctuation">(</span><span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">withClient</span><span class="token punctuation">(</span><span class="token string">"sampleClientId"</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">authorizedGrantTypes</span><span class="token punctuation">(</span><span class="token string">"implicit"</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">scopes</span><span class="token punctuation">(</span><span class="token string">"read"</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">autoApprove</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">withClient</span><span class="token punctuation">(</span><span class="token string">"clientIdPassword"</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">secret</span><span class="token punctuation">(</span><span class="token string">"secret"</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">authorizedGrantTypes</span><span class="token punctuation">(</span>\n            <span class="token string">"password"</span><span class="token punctuation">,</span><span class="token string">"authorization_code"</span><span class="token punctuation">,</span> <span class="token string">"refresh_token"</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">scopes</span><span class="token punctuation">(</span><span class="token string">"read"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n \n    <span class="token variable">@Override</span>\n    public void <span class="token function">configure</span><span class="token punctuation">(</span>\n      AuthorizationServerEndpointsConfigurer endpoints<span class="token punctuation">)</span> \n      throws Exception {\n  \n        endpoints\n          <span class="token punctuation">.</span><span class="token function">tokenStore</span><span class="token punctuation">(</span><span class="token function">tokenStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">authenticationManager</span><span class="token punctuation">(</span>authenticationManager<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n \n    <span class="token variable">@Bean</span>\n    public TokenStore <span class="token function">tokenStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        return new <span class="token function">JdbcTokenStore</span><span class="token punctuation">(</span><span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'@Configuration\n@EnableAuthorizationServer\npublic class AuthServerOAuth2Config\n  extends AuthorizationServerConfigurerAdapter {\n  \n    @Autowired\n    @Qualifier("authenticationManagerBean")\n    private AuthenticationManager authenticationManager;\n \n    @Override\n    public void configure(\n      AuthorizationServerSecurityConfigurer oauthServer) \n      throws Exception {\n        oauthServer\n          .tokenKeyAccess("permitAll()")\n          .checkTokenAccess("isAuthenticated()");\n    }\n \n    @Override\n    public void configure(ClientDetailsServiceConfigurer clients) \n      throws Exception {\n        clients.jdbc(dataSource())\n          .withClient("sampleClientId")\n          .authorizedGrantTypes("implicit")\n          .scopes("read")\n          .autoApprove(true)\n          .and()\n          .withClient("clientIdPassword")\n          .secret("secret")\n          .authorizedGrantTypes(\n            "password","authorization_code", "refresh_token")\n          .scopes("read");\n    }\n \n    @Override\n    public void configure(\n      AuthorizationServerEndpointsConfigurer endpoints) \n      throws Exception {\n  \n        endpoints\n          .tokenStore(tokenStore())\n          .authenticationManager(authenticationManager);\n    }\n \n    @Bean\n    public TokenStore tokenStore() {\n        return new JdbcTokenStore(dataSource());\n    }\n}']]],meta:{order:9,title:"Spring OAUTH SSO \u5355\u70b9\u767b\u5f55",type:"\u8fdb\u9636",filename:"docs/distribution/sso-single-signon.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6388\u6743\u7c7b\u578b",title:"\u6388\u6743\u7c7b\u578b"},"\u6388\u6743\u7c7b\u578b"]],["li",["a",{className:"bisheng-toc-h2",href:"#Authorization-Server",title:"Authorization Server"},"Authorization Server"]],["li",["a",{className:"bisheng-toc-h2",href:"#Token\u7ba1\u7406",title:"Token\u7ba1\u7406"},"Token\u7ba1\u7406"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5ba2\u6237\u7aef\u914d\u7f6e",title:"\u5ba2\u6237\u7aef\u914d\u7f6e"},"\u5ba2\u6237\u7aef\u914d\u7f6e"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793a\u4f8b\u4ee3\u7801",title:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"]]]}}});