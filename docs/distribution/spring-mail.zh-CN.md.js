webpackJsonp([11],{1283:function(n,s){n.exports={content:["article",["h2","SMTP \u7b80\u4ecb"],["p","SMTP\u670d\u52a1\u5668\u4f7f\u7528\u7aef\u53e325\uff0c\u5904\u4e8e\u5b89\u5168\u8003\u8651\u73b0\u5728\u5f88\u591a\u670d\u52a1\u5668\u4f7f\u7528SSL\uff0cTLS\u52a0\u5bc6\uff0c\u6b64\u65f6\u4f7f\u7528\u989d\u5916\u7684\u7aef\u53e3\u6765\u505a\u52a0\u5bc6\u5904\u7406\uff0cSSL\u5bf9\u5e94\u7684\u662f465\u7aef\u53e3\b, TLS\u5bf9\u5e94\u7684\u662f587\u7aef\u53e3\u3002 \u4f8b\u5982\uff1a"],["pre",{lang:null,highlighted:'smtp<span class="token punctuation">.</span>gmail<span class="token punctuation">.</span>com\nPort <span class="token number">465</span> <span class="token punctuation">(</span>SSL required<span class="token punctuation">)</span>\nPort <span class="token number">587</span> <span class="token punctuation">(</span>TLS required<span class="token punctuation">)</span>\nDynamic IPs allowed'},["code","smtp.gmail.com\nPort 465 (SSL required)\nPort 587 (TLS required)\nDynamic IPs allowed"]],["h2","\u4f7f\u7528openssl \u6d4b\u8bd5 SMTP \u670d\u52a1\u5668"],["ul",["li",["p","Step 1: \u5efa\u7acb starttls \u8fde\u63a5"]]],["pre",{lang:null,highlighted:'openssl s_client <span class="token operator">-</span>connect smtp<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>yahoo<span class="token punctuation">.</span>com<span class="token punctuation">:</span><span class="token number">587</span> <span class="token operator">-</span>starttls smtp'},["code","openssl s_client -connect smtp.mail.yahoo.com:587 -starttls smtp"]],["p","\u8fd4\u56de\u7ed3\u679c:"],["pre",{lang:null,highlighted:'<span class="token function">CONNECTED</span><span class="token punctuation">(</span><span class="token number">00000003</span><span class="token punctuation">)</span>\ndepth<span class="token operator">=</span><span class="token number">1</span> C <span class="token operator">=</span> US<span class="token punctuation">,</span> O <span class="token operator">=</span> DigiCert Inc<span class="token punctuation">,</span> OU <span class="token operator">=</span> www<span class="token punctuation">.</span>digicert<span class="token punctuation">.</span>com<span class="token punctuation">,</span> CN <span class="token operator">=</span> DigiCert SHA2 High Assurance Server CA\nverify error<span class="token punctuation">:</span>num<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">:</span>unable <span class="token keyword">to</span> get <span class="token keyword">local</span> issuer certificate\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\nCertificate chain\n <span class="token number">0</span> s<span class="token punctuation">:</span><span class="token operator">/</span>C<span class="token operator">=</span>US<span class="token operator">/</span>ST<span class="token operator">=</span>California<span class="token operator">/</span>L<span class="token operator">=</span>Sunnyvale<span class="token operator">/</span>O<span class="token operator">=</span>Yahoo Holdings<span class="token punctuation">,</span> Inc<span class="token punctuation">.</span><span class="token operator">/</span>CN<span class="token operator">=</span>smtp<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>yahoo<span class="token punctuation">.</span>com\n   i<span class="token punctuation">:</span><span class="token operator">/</span>C<span class="token operator">=</span>US<span class="token operator">/</span>O<span class="token operator">=</span>DigiCert Inc<span class="token operator">/</span>OU<span class="token operator">=</span>www<span class="token punctuation">.</span>digicert<span class="token punctuation">.</span>com<span class="token operator">/</span>CN<span class="token operator">=</span>DigiCert SHA2 High Assurance Server CA\n <span class="token number">1</span> s<span class="token punctuation">:</span><span class="token operator">/</span>C<span class="token operator">=</span>US<span class="token operator">/</span>O<span class="token operator">=</span>DigiCert Inc<span class="token operator">/</span>OU<span class="token operator">=</span>www<span class="token punctuation">.</span>digicert<span class="token punctuation">.</span>com<span class="token operator">/</span>CN<span class="token operator">=</span>DigiCert SHA2 High Assurance Server CA\n   i<span class="token punctuation">:</span><span class="token operator">/</span>C<span class="token operator">=</span>US<span class="token operator">/</span>O<span class="token operator">=</span>DigiCert Inc<span class="token operator">/</span>OU<span class="token operator">=</span>www<span class="token punctuation">.</span>digicert<span class="token punctuation">.</span>com<span class="token operator">/</span>CN<span class="token operator">=</span>DigiCert High Assurance EV Root CA\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\nServer certificate\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>BEGIN CERTIFICATE<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>END CERTIFICATE<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\nsubject<span class="token operator">=</span><span class="token operator">/</span>C<span class="token operator">=</span>US<span class="token operator">/</span>ST<span class="token operator">=</span>California<span class="token operator">/</span>L<span class="token operator">=</span>Sunnyvale<span class="token operator">/</span>O<span class="token operator">=</span>Yahoo Holdings<span class="token punctuation">,</span> Inc<span class="token punctuation">.</span><span class="token operator">/</span>CN<span class="token operator">=</span>smtp<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>yahoo<span class="token punctuation">.</span>com\nissuer<span class="token operator">=</span><span class="token operator">/</span>C<span class="token operator">=</span>US<span class="token operator">/</span>O<span class="token operator">=</span>DigiCert Inc<span class="token operator">/</span>OU<span class="token operator">=</span>www<span class="token punctuation">.</span>digicert<span class="token punctuation">.</span>com<span class="token operator">/</span>CN<span class="token operator">=</span>DigiCert SHA2 High Assurance Server CA\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\nNo client certificate CA names sent\nPeer signing digest<span class="token punctuation">:</span> SHA512\nServer Temp Key<span class="token punctuation">:</span> ECDH<span class="token punctuation">,</span> B<span class="token operator">-</span><span class="token number">571</span><span class="token punctuation">,</span> <span class="token number">570</span> bits\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\nSSL handshake has read <span class="token number">4139</span> bytes <span class="token operator">and</span> written <span class="token number">603</span> bytes\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\nNew<span class="token punctuation">,</span> TLSv1<span class="token operator">/</span>SSLv3<span class="token punctuation">,</span> Cipher is ECDHE<span class="token operator">-</span>RSA<span class="token operator">-</span>AES256<span class="token operator">-</span>GCM<span class="token operator">-</span>SHA384\nServer public key is <span class="token number">2048</span> bit\nSecure Renegotiation IS supported\nCompression<span class="token punctuation">:</span> NONE\nExpansion<span class="token punctuation">:</span> NONE\nNo ALPN negotiated\nSSL<span class="token operator">-</span>Session<span class="token punctuation">:</span>\n    Protocol  <span class="token punctuation">:</span> TLSv1<span class="token punctuation">.</span><span class="token number">2</span>\n    Cipher    <span class="token punctuation">:</span> ECDHE<span class="token operator">-</span>RSA<span class="token operator">-</span>AES256<span class="token operator">-</span>GCM<span class="token operator">-</span>SHA384\n    Session<span class="token operator">-</span>ID<span class="token punctuation">:</span> 5C38217626A530D017658EA1137482BA2D3DAC724D09EE712AEEF570085CD13D\n    Session<span class="token operator">-</span>ID<span class="token operator">-</span>ctx<span class="token punctuation">:</span>\n    Master<span class="token operator">-</span>Key<span class="token punctuation">:</span> FB777B06585B4B1A075DCC2EAFF1E831548E4D00BE764C9CD2C6743E99E6C9E1FDFAE37EAA65226D7D2E7784380757CA\n    Key<span class="token operator">-</span>Arg   <span class="token punctuation">:</span> None\n    PSK identity<span class="token punctuation">:</span> None\n    PSK identity hint<span class="token punctuation">:</span> None\n    SRP username<span class="token punctuation">:</span> None\n    Start Time<span class="token punctuation">:</span> <span class="token number">1547182454</span>\n    Timeout   <span class="token punctuation">:</span> <span class="token number">300</span> <span class="token punctuation">(</span>sec<span class="token punctuation">)</span>\n    Verify return code<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">(</span>unable <span class="token keyword">to</span> get <span class="token keyword">local</span> issuer certificate<span class="token punctuation">)</span>\n<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>\n<span class="token number">250</span> STARTTLS'},["code","CONNECTED(00000003)\ndepth=1 C = US, O = DigiCert Inc, OU = www.digicert.com, CN = DigiCert SHA2 High Assurance Server CA\nverify error:num=20:unable to get local issuer certificate\n---\nCertificate chain\n 0 s:/C=US/ST=California/L=Sunnyvale/O=Yahoo Holdings, Inc./CN=smtp.mail.yahoo.com\n   i:/C=US/O=DigiCert Inc/OU=www.digicert.com/CN=DigiCert SHA2 High Assurance Server CA\n 1 s:/C=US/O=DigiCert Inc/OU=www.digicert.com/CN=DigiCert SHA2 High Assurance Server CA\n   i:/C=US/O=DigiCert Inc/OU=www.digicert.com/CN=DigiCert High Assurance EV Root CA\n---\nServer certificate\n-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\nsubject=/C=US/ST=California/L=Sunnyvale/O=Yahoo Holdings, Inc./CN=smtp.mail.yahoo.com\nissuer=/C=US/O=DigiCert Inc/OU=www.digicert.com/CN=DigiCert SHA2 High Assurance Server CA\n---\nNo client certificate CA names sent\nPeer signing digest: SHA512\nServer Temp Key: ECDH, B-571, 570 bits\n---\nSSL handshake has read 4139 bytes and written 603 bytes\n---\nNew, TLSv1/SSLv3, Cipher is ECDHE-RSA-AES256-GCM-SHA384\nServer public key is 2048 bit\nSecure Renegotiation IS supported\nCompression: NONE\nExpansion: NONE\nNo ALPN negotiated\nSSL-Session:\n    Protocol  : TLSv1.2\n    Cipher    : ECDHE-RSA-AES256-GCM-SHA384\n    Session-ID: 5C38217626A530D017658EA1137482BA2D3DAC724D09EE712AEEF570085CD13D\n    Session-ID-ctx:\n    Master-Key: FB777B06585B4B1A075DCC2EAFF1E831548E4D00BE764C9CD2C6743E99E6C9E1FDFAE37EAA65226D7D2E7784380757CA\n    Key-Arg   : None\n    PSK identity: None\n    PSK identity hint: None\n    SRP username: None\n    Start Time: 1547182454\n    Timeout   : 300 (sec)\n    Verify return code: 20 (unable to get local issuer certificate)\n---\n250 STARTTLS"]],["ul",["li",["p","Step 2: \u6d4b\u8bd5\u8fde\u63a5"]]],["pre",{lang:null,highlighted:"EHLO localhost \u6216\u8005 HELO localhost"},["code","EHLO localhost \u6216\u8005 HELO localhost"]],["p","\u8fd4\u56de\u7ed3\u679c: \u8fd9\u91cc\u8fd4\u56de\u7684\u662f\u76ee\u6807\u670d\u52a1\u5668\u652f\u6301\u7684\u767b\u5f55\u65b9\u6cd5\uff0c\u53ef\u4ee5\u770b\u5230\u6700\u540e\u4e00\u884c\u663e\u793a\u670d\u52a1\u5668\u652f\u6301\u56db\u79cd\u767b\u5f55\u65b9\u5f0f\n\u5206\u522b\u662f PLAIN, LOGIN, XOAUTH2,OAUTHBEARER, \u6211\u4eec\u4e0b\u9762\u4f7f\u7528\u7b2c\u4e8c\u79cd ",["code","AUTH LOGIN"]],["pre",{lang:null,highlighted:'<span class="token number">250</span><span class="token operator">-</span>smtp412<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>sg3<span class="token punctuation">.</span>yahoo<span class="token punctuation">.</span>com Hello localhost <span class="token punctuation">[</span><span class="token number">113.201</span><span class="token punctuation">.</span><span class="token number">50.30</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token number">250</span><span class="token operator">-</span>PIPELINING\n<span class="token number">250</span><span class="token operator">-</span>ENHANCEDSTATUSCODES\n<span class="token number">250</span><span class="token operator">-</span>8BITMIME\n<span class="token number">250</span><span class="token operator">-</span>SIZE <span class="token number">41697280</span>\n<span class="token number">250</span> AUTH PLAIN LOGIN XOAUTH2 OAUTHBEARER'},["code","250-smtp412.mail.sg3.yahoo.com Hello localhost [113.201.50.30])\n250-PIPELINING\n250-ENHANCEDSTATUSCODES\n250-8BITMIME\n250-SIZE 41697280\n250 AUTH PLAIN LOGIN XOAUTH2 OAUTHBEARER"]],["ul",["li",["p","Step 3: \u767b\u5f55"]]],["pre",{lang:null,highlighted:'AUTH LOGIN\n<span class="token number">334</span> VXNlcm5hbWU6    # \u8fd4\u56de\u7ed3\u679c\uff0c\u7b49\u5f85\u8f93\u5165\u7528\u6237\u540d\n                    # \u901a\u8fc7base64\u52a0\u5bc6\u7528\u6237\u540d<span class="token punctuation">,</span> \u53ef\u4ee5\u901a\u8fc7python base64<span class="token punctuation">,</span>\n                    # \u8fdb\u884c\u52a0\u5bc6base64<span class="token punctuation">.</span><span class="token function">b64encode</span><span class="token punctuation">(</span><span class="token string">\'example@gmail.com\'</span><span class="token punctuation">)</span>\nZGV2Lm5nb3JnYW5pem\n\n<span class="token number">334</span> UGFzc3dvcmQ6    # \u8fd4\u56de\u7ed3\u679c<span class="token punctuation">,</span> \u7b49\u5f85\u8f93\u5165\u5bc6\u7801\namV0LnFpbkBwdWxzZX  # \u6b64\u4e3a\u5bc6\u7801\uff0c\u5bc6\u7801\u540c\u6837\u9700\u8981\bbase64\u52a0\u5bc6'},["code","AUTH LOGIN\n334 VXNlcm5hbWU6    # \u8fd4\u56de\u7ed3\u679c\uff0c\u7b49\u5f85\u8f93\u5165\u7528\u6237\u540d\n                    # \u901a\u8fc7base64\u52a0\u5bc6\u7528\u6237\u540d, \u53ef\u4ee5\u901a\u8fc7python base64,\n                    # \u8fdb\u884c\u52a0\u5bc6base64.b64encode('example@gmail.com')\nZGV2Lm5nb3JnYW5pem\n\n334 UGFzc3dvcmQ6    # \u8fd4\u56de\u7ed3\u679c, \u7b49\u5f85\u8f93\u5165\u5bc6\u7801\namV0LnFpbkBwdWxzZX  # \u6b64\u4e3a\u5bc6\u7801\uff0c\u5bc6\u7801\u540c\u6837\u9700\u8981\bbase64\u52a0\u5bc6"]],["p","\u8fd4\u56de\u7ed3\u679c:   \u5982\u679c\u7528\u6237\u540d\u5bc6\u7801\u6b63\u786e\u4f1a\u663e\u793a",["code","235 2.7.0 Accepted"]," \u5426\u5219\u4f1a\u663e\u793a ",["code","535 Authentication failed"]],["pre",{lang:null,highlighted:'<span class="token number">235</span> <span class="token number">2.7</span><span class="token punctuation">.</span><span class="token number">0</span> Accepted\n<span class="token number">535</span> <span class="token number">5.7</span><span class="token punctuation">.</span><span class="token number">1</span> Authentication failed'},["code","235 2.7.0 Accepted\n535 5.7.1 Authentication failed"]],["h2","\u901a\u8fc7spring boot mail \u5b9e\u73b0\u90ae\u4ef6\u53d1\u9001\u529f\u80fd"],["p","\u5f53\u4f60\u901a\u8fc7openssl \u9a8c\u8bc1SMTP\u670d\u52a1\u5668\b\u80fd\u6b63\u5e38\u767b\u5f55\u65f6\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u901a\u8fc7\u7f16\u7801\u6765\u5b9e\u73b0\u90ae\u4ef6\u53d1\u9001\u529f\u80fd\uff0c\u6709\u65f6\u5019\b\u4e0d\u540c\u7684smtp\u670d\u52a1\u5668\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\n\u5f88\u591a\u65f6\u5019SMTP\u670d\u52a1\u5668\u4e3a\u4e86\u5b89\u5168\b\u4f1a\u5c01\u9501\u5916\u90e8\u8bbf\u95ee\uff0c\u5bfc\u81f4\u65e0\u6cd5\u53d1\u9001\u90ae\u4ef6\u3002"],["p",["strong","SMTP \u5c5e\u6027\u914d\u7f6e"],"\uff0c \u4fee\u6539",["code","application.properties"]],["pre",{lang:null,highlighted:'# Yahoo \u90ae\u4ef6\u670d\u52a1\u5668\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>host<span class="token operator">=</span>smtp<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>yahoo<span class="token punctuation">.</span>com\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>port<span class="token operator">=</span><span class="token number">587</span>\n\n# Gmail \u90ae\u4ef6\u670d\u52a1\u5668\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>host<span class="token operator">=</span>smtp<span class="token punctuation">.</span>gmail<span class="token punctuation">.</span>com\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>port<span class="token operator">=</span><span class="token number">587</span>\n\n# Outlook \u90ae\u4ef6\u670d\u52a1\u5668\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>host<span class="token operator">=</span>smtp<span class="token operator">-</span>mail<span class="token punctuation">.</span>outlook<span class="token punctuation">.</span>com\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>port<span class="token operator">=</span><span class="token number">587</span>\n\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>username<span class="token operator">=</span>xxxxx<span class="token variable">@outlook</span><span class="token punctuation">.</span>com\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>password<span class="token operator">=</span>xxxxx\n\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>smtp<span class="token punctuation">.</span>connectiontimeout<span class="token operator">=</span><span class="token number">5000</span>   #\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>smtp<span class="token punctuation">.</span>timeout<span class="token operator">=</span><span class="token number">3000</span>\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>smtp<span class="token punctuation">.</span>writetimeout<span class="token operator">=</span><span class="token number">5000</span>\n\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>debug<span class="token operator">=</span><span class="token boolean">true</span>\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>smtp<span class="token punctuation">.</span>starttls<span class="token punctuation">.</span>enable<span class="token operator">=</span><span class="token boolean">true</span>\nspring<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>smtp<span class="token punctuation">.</span>starttls<span class="token punctuation">.</span>required<span class="token operator">=</span><span class="token boolean">true</span>'},["code","# Yahoo \u90ae\u4ef6\u670d\u52a1\u5668\nspring.mail.host=smtp.mail.yahoo.com\nspring.mail.port=587\n\n# Gmail \u90ae\u4ef6\u670d\u52a1\u5668\nspring.mail.host=smtp.gmail.com\nspring.mail.port=587\n\n# Outlook \u90ae\u4ef6\u670d\u52a1\u5668\nspring.mail.host=smtp-mail.outlook.com\nspring.mail.port=587\n\nspring.mail.username=xxxxx@outlook.com\nspring.mail.password=xxxxx\n\nspring.mail.properties.mail.smtp.connectiontimeout=5000   #\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\nspring.mail.properties.mail.smtp.timeout=3000\nspring.mail.properties.mail.smtp.writetimeout=5000\n\nspring.mail.properties.mail.debug=true\nspring.mail.properties.mail.smtp.starttls.enable=true\nspring.mail.properties.mail.smtp.starttls.required=true"]],["p",["strong","\u6838\u5fc3\u4ee3\u7801 ",["code","EmailService"],":"]],["p"," spring-boot-starter-mail \u5df2\u7ecf\b\u5c01\u88c5\u4e86\u4e00\u4e9b\u65b9\u6cd5\uff0c\u6211\u4eec\u8fd9\u91cc\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528JavaMailSender\u6765\u53d1\u9001\u90ae\u4ef6\uff0c\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u6784\u9020\u4e00\u4e2aMimeMessage, \u7136\u540e\u4f7f\u7528MimeMessageHelper\u5bf9message\u8fdb\u884c\u8d4b\u503c\uff0c\u5305\u62ec\u6536\u4ef6\u4eba\uff0c\u53d1\u4ef6\u4eba\uff0c\u4e3b\u9898\u4ee5\u53ca\u90ae\u4ef6\u5185\u5bb9\uff0c\u6211\u4eec\u53ef\u4ee5\u6784\u9020\u4f7f\u7528\u4e00\u4e2aFreemaker\uff0c\u6784\u9020\u4e00\u4e2a\u90ae\u4ef6\u6a21\u7248\uff0c\u5173\u952e\u4fe1\u606f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5360\u4f4d\u7b26\u663e\u793a\uff0c\u901a\u8fc7\u54c8\u5e0c\u8868\u5728\u6784\u9020\u7684\u65f6\u5019\u4f20\u5165"],["pre",{lang:null,highlighted:'import org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>Autowired<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>env<span class="token punctuation">.</span>Environment<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span>JavaMailSender<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>javamail<span class="token punctuation">.</span>MimeMessageHelper<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span>Service<span class="token comment" spellcheck="true">;</span>\n\nimport javax<span class="token punctuation">.</span>mail<span class="token punctuation">.</span>internet<span class="token punctuation">.</span>MimeMessage<span class="token comment" spellcheck="true">;</span>\nimport java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map<span class="token comment" spellcheck="true">;</span>\n\nimport freemarker<span class="token punctuation">.</span>template<span class="token punctuation">.</span>Configuration<span class="token comment" spellcheck="true">;</span>\nimport freemarker<span class="token punctuation">.</span>template<span class="token punctuation">.</span>Template<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>ui<span class="token punctuation">.</span>freemarker<span class="token punctuation">.</span>FreeMarkerTemplateUtils<span class="token comment" spellcheck="true">;</span>\n\n<span class="token variable">@Service</span>\npublic class EmailService\n{\n    <span class="token variable">@Autowired</span>\n    Environment env<span class="token comment" spellcheck="true">;</span>\n\n    <span class="token variable">@Autowired</span>\n    private JavaMailSender sender<span class="token comment" spellcheck="true">;</span>\n\n    <span class="token variable">@Autowired</span>\n    private Configuration freemarkerConfig<span class="token comment" spellcheck="true">;</span>\n\n\n    public void <span class="token function">sendResetEmail</span><span class="token punctuation">(</span>String <span class="token keyword">to</span><span class="token punctuation">,</span> Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span>Object<span class="token operator">></span> params<span class="token punctuation">)</span> throws Exception{\n        MimeMessage message <span class="token operator">=</span> sender<span class="token punctuation">.</span><span class="token function">createMimeMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        MimeMessageHelper helper <span class="token operator">=</span> new <span class="token function">MimeMessageHelper</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        freemarkerConfig<span class="token punctuation">.</span><span class="token function">setClassForTemplateLoading</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"/"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        Template t <span class="token operator">=</span> freemarkerConfig<span class="token punctuation">.</span><span class="token function">getTemplate</span><span class="token punctuation">(</span><span class="token string">"emails/Example.ftl"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;             //\u8bbe\u7f6e\u90ae\u4ef6\u6a21\u7248</span>\n        String text <span class="token operator">=</span> FreeMarkerTemplateUtils<span class="token punctuation">.</span><span class="token function">processTemplateIntoString</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;  //\u5c06\u90ae\u4ef6\u6a21\u7248\u8f6c\u6362\u6210\u90ae\u4ef6\u6b63\u6587</span>\n        helper<span class="token punctuation">.</span><span class="token function">setTo</span><span class="token punctuation">(</span><span class="token keyword">to</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        helper<span class="token punctuation">.</span><span class="token function">setFrom</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"spring.mail.username"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        helper<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        helper<span class="token punctuation">.</span><span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token string">"Reset Password Email"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        sender<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n}'},["code",'import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.core.env.Environment;\nimport org.springframework.mail.javamail.JavaMailSender;\nimport org.springframework.mail.javamail.MimeMessageHelper;\nimport org.springframework.stereotype.Service;\n\nimport javax.mail.internet.MimeMessage;\nimport java.util.Map;\n\nimport freemarker.template.Configuration;\nimport freemarker.template.Template;\nimport org.springframework.ui.freemarker.FreeMarkerTemplateUtils;\n\n@Service\npublic class EmailService\n{\n    @Autowired\n    Environment env;\n\n    @Autowired\n    private JavaMailSender sender;\n\n    @Autowired\n    private Configuration freemarkerConfig;\n\n\n    public void sendResetEmail(String to, Map<String,Object> params) throws Exception{\n        MimeMessage message = sender.createMimeMessage();\n        MimeMessageHelper helper = new MimeMessageHelper(message);\n        freemarkerConfig.setClassForTemplateLoading(this.getClass(), "/");\n        Template t = freemarkerConfig.getTemplate("emails/Example.ftl");             //\u8bbe\u7f6e\u90ae\u4ef6\u6a21\u7248\n        String text = FreeMarkerTemplateUtils.processTemplateIntoString(t, params);  //\u5c06\u90ae\u4ef6\u6a21\u7248\u8f6c\u6362\u6210\u90ae\u4ef6\u6b63\u6587\n        helper.setTo(to);\n        helper.setFrom(env.getProperty("spring.mail.username"));\n        helper.setText(text,true);\n        helper.setSubject("Reset Password Email");\n        sender.send(message);\n    }\n\n}']],["p",["strong","Example.ftl\b:"]," \u90ae\u4ef6\u6a21\u7248, \u53ef\u4ee5\b\u5728\u90ae\u4ef6\u6a21\u7248\u91cc\u5b9a\u4e49\u53d8\u91cf\uff0c\u6784\u9020\b\u90ae\u4ef6\u5185\u5bb9\u7684\u65f6\u5019\u901a\u8fc7\u54c8\u5e0c\u8868\u4f20\u5165"],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>html<span class="token operator">></span>\n  <span class="token operator">&lt;</span>body<span class="token operator">></span>\n  <span class="token operator">&lt;</span>h3<span class="token operator">></span>Hi ${user}<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>\n  <span class="token operator">&lt;</span>h3<span class="token operator">></span>welcome <span class="token keyword">to</span> the application!<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>'},["code","<html>\n  <body>\n  <h3>Hi ${user}: </h3>\n  <h3>welcome to the application!</h3>\n  </body>\n</html>"]]],meta:{order:1,title:"Using spring boot to send email",type:"\u5165\u95e8",filename:"docs/distribution/spring-mail.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#SMTP-\u7b80\u4ecb",title:"SMTP \u7b80\u4ecb"},"SMTP \u7b80\u4ecb"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528openssl-\u6d4b\u8bd5-SMTP-\u670d\u52a1\u5668",title:"\u4f7f\u7528openssl \u6d4b\u8bd5 SMTP \u670d\u52a1\u5668"},"\u4f7f\u7528openssl \u6d4b\u8bd5 SMTP \u670d\u52a1\u5668"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u901a\u8fc7spring-boot-mail-\u5b9e\u73b0\u90ae\u4ef6\u53d1\u9001\u529f\u80fd",title:"\u901a\u8fc7spring boot mail \u5b9e\u73b0\u90ae\u4ef6\u53d1\u9001\u529f\u80fd"},"\u901a\u8fc7spring boot mail \u5b9e\u73b0\u90ae\u4ef6\u53d1\u9001\u529f\u80fd"]]]}}});