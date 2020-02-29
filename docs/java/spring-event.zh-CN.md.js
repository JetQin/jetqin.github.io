webpackJsonp([6],{1281:function(n,s){n.exports={content:["article",["h2","\u7b80\u4ecb"],["p","Spring \u5185\u90e8\u63d0\u4f9b\u4e86\u4e8b\u4ef6\u673a\u5236\uff0c\u901a\u8fc7\u8fd9\u4e2a\u4e8b\u4ef6\u673a\u5236\u6211\u4eec\u53ef\u4ee5\u89e3\u8026\u7cfb\u7edf\u7684\u903b\u8f91\uff0c\u5b9e\u73b0\u677e\u8026\u5408\u7684\u76ee\u7684\u3002\n\u4e8b\u4ef6\u673a\u5236\u5305\u542b\u5982\u4e0b\u4e09\u4e2a\u7ec4\u4ef6:"],["ul",["li",["p","\u4e8b\u4ef6\u53d1\u5e03\u8005:  \u7528\u6765\u53d1\u5e03\u4e8b\u4ef6\uff0c\u53d1\u5e03\u4e8b\u4ef6\u540e\u7cfb\u7edf\u5176\u4ed6\u7ec4\u4ef6\u53ef\u4ee5\u63a5\u53d7\u5230\u76f8\u5e94\u7684\u4e8b\u4ef6, \u7531",["code","ApplicationPublisher"],"\u5b9e\u73b0"]],["li",["p","\u4e8b\u4ef6\uff1a\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u5982\u7528\u6237\u521b\u5efa\uff0c\u767b\u5f55\u7b49\uff0c\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627f",["code","ApplicationEvent"],"\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002"]],["li",["p","\u4e8b\u4ef6\u76d1\u542c\u8005: Spring\u63d0\u4f9b\u4e86",["code","@EventListener"],"\u6ce8\u89e3\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728\u65b9\u6cd5\u4e0a\u4f7f\u7528\u6b64\u6ce8\u89e3\u6765\u76d1\u542c\u5bf9\u5e94\u7684\u4e8b\u4ef6"]]],["h2","\u793a\u4f8b"],["ul",["li",["h4","\u6784\u9020\u4e8b\u4ef6"]]],["p","\u6211\u4eec\u53ef\u4ee5\u7ee7\u627f",["code","ApplicationEvent"],"\u6765\u5b9e\u73b0\u81ea\u5df1\u7684\u4e8b\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",["code","ApplicationEvent"],"\n\u6b64\u5916Spring\u8fd8\u63d0\u4f9b\u4e86\u8bb8\u591a\u5176\u4ed6\u4e8b\u4ef6\uff1a\n",["img",{title:null,src:"./assets/spring-event.png",alt:"Spring event"}]],["pre",{lang:null,highlighted:'<span class="token variable">@Data</span>\n<span class="token variable">@ToString</span>\npublic class PersonLoginEvent extends ApplicationEvent {\n\n    String message<span class="token comment" spellcheck="true">;</span>\n\n    public <span class="token function">PersonLoginEvent</span><span class="token punctuation">(</span>Object source<span class="token punctuation">,</span> String message<span class="token punctuation">)</span> {\n        <span class="token function">super</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        this<span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token comment" spellcheck="true">;</span>\n    }\n}\n\n<span class="token variable">@Data</span>\n<span class="token variable">@ToString</span>\npublic class PersonCreateEvent extends ApplicationEvent {\n\n    String message<span class="token comment" spellcheck="true">;</span>\n\n    public <span class="token function">PersonCreateEvent</span><span class="token punctuation">(</span>Object source<span class="token punctuation">,</span> String message<span class="token punctuation">)</span> {\n        <span class="token function">super</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        this<span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code","@Data\n@ToString\npublic class PersonLoginEvent extends ApplicationEvent {\n\n    String message;\n\n    public PersonLoginEvent(Object source, String message) {\n        super(source);\n        this.message = message;\n    }\n}\n\n@Data\n@ToString\npublic class PersonCreateEvent extends ApplicationEvent {\n\n    String message;\n\n    public PersonCreateEvent(Object source, String message) {\n        super(source);\n        this.message = message;\n    }\n}"]],["ul",["li",["h4","\u53d1\u5e03\u4e8b\u4ef6"]]],["p","\u5728\u7cfb\u7edf\u4e2d\u901a\u8fc7\u7ed1\u5b9aApplicationEventPublisher\u5373\u53ef\u4f7f\u7528\u5176\u53d1\u5e03\u4e8b\u4ef6\u3002\u4e00\u65e6\u4e8b\u4ef6\u53d1\u5e03\u7acb\u523b\u4f1a\u88ab\u76d1\u542c\u5668\u63a5\u6536\u5230\uff0c\n\u53d1\u9001\u6d88\u606f\u662f\u540c\u6b65\u64cd\u4f5c\uff0c\u5982\u679c\u5e0c\u671b\u5f02\u6b65\u53d1\u9001\u6d88\u606f\u53ef\u4ee5\u58f0\u660e",["code","ApplicationEventMulticaster"],"\uff0c\u4f7f\u7528Executor\n\u6765\u5f02\u6b65\u53d1\u9001,\u63a8\u8350\u4f7f\u7528\u3002"],["pre",{lang:null,highlighted:'<span class="token variable">@SpringBootApplication</span>\npublic class UpscaleApplication implements CommandLineRunner<span class="token punctuation">,</span>ApplicationListener<span class="token operator">&lt;</span>ApplicationStartedEvent<span class="token operator">></span> {\n\n\t<span class="token variable">@Autowired</span>\n\tApplicationEventPublisher publisher<span class="token comment" spellcheck="true">;</span>\n\n    @<span class="token function">Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"applicationEventMulticaster"</span><span class="token punctuation">)</span>\n    public ApplicationEventMulticaster <span class="token function">simpleApplicationEventMulticaster</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        SimpleApplicationEventMulticaster eventMulticaster  <span class="token operator">=</span> new <span class="token function">SimpleApplicationEventMulticaster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        eventMulticaster<span class="token punctuation">.</span><span class="token function">setTaskExecutor</span><span class="token punctuation">(</span>new <span class="token function">SimpleAsyncTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        return eventMulticaster<span class="token comment" spellcheck="true">;</span>\n\n\tpublic <span class="token keyword">static</span> void <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> {\n\t\tSpringApplication<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>UpscaleApplication<span class="token punctuation">.</span>class<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t}\n\n\t<span class="token variable">@Override</span>\n\tpublic void <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span>ApplicationStartedEvent event<span class="token punctuation">)</span> {\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"Application Started!"</span><span class="token punctuation">)</span>\n\t}\n\n\t<span class="token variable">@Override</span>\n\tpublic void <span class="token function">run</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> throws Exception {\n\t\tlog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"Start send message"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t\tpublisher<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span>new <span class="token function">PersonCreateEvent</span><span class="token punctuation">(</span><span class="token string">"Created Person"</span><span class="token punctuation">,</span><span class="token string">"Successfully create person!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        publisher<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span>new <span class="token function">PersonLoginEvent</span><span class="token punctuation">(</span><span class="token string">"Person Login"</span><span class="token punctuation">,</span><span class="token string">"Person login successfully!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t}\n}'},["code",'@SpringBootApplication\npublic class UpscaleApplication implements CommandLineRunner,ApplicationListener<ApplicationStartedEvent> {\n\n\t@Autowired\n\tApplicationEventPublisher publisher;\n\n    @Bean(name = "applicationEventMulticaster")\n    public ApplicationEventMulticaster simpleApplicationEventMulticaster() {\n        SimpleApplicationEventMulticaster eventMulticaster  = new SimpleApplicationEventMulticaster();\n        eventMulticaster.setTaskExecutor(new SimpleAsyncTaskExecutor());\n        return eventMulticaster;\n\n\tpublic static void main(String[] args) {\n\t\tSpringApplication.run(UpscaleApplication.class, args);\n\t}\n\n\t@Override\n\tpublic void onApplicationEvent(ApplicationStartedEvent event) {\n        log.info("Application Started!")\n\t}\n\n\t@Override\n\tpublic void run(String... args) throws Exception {\n\t\tlog.info("Start send message");\n\t\tpublisher.publishEvent(new PersonCreateEvent("Created Person","Successfully create person!"));\n        publisher.publishEvent(new PersonLoginEvent("Person Login","Person login successfully!"));\n\t}\n}']],["ul",["li",["h4","\u76d1\u542c\u4e8b\u4ef6"]]],["p","\u53ef\u4ee5\u901a\u8fc7class\u6765\u9650\u5236\u76d1\u542c\u7684\u4e8b\u4ef6\u5bf9\u8c61\u7684\u7c7b\u578b\uff0c\u53ea\u6709\u5339\u914d\u7684\u4e8b\u4ef6\u624d\u4f1a\u88ab\u5904\u7406"],["pre",{lang:null,highlighted:'import lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span>Slf4j<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>EventListener<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span>Service<span class="token comment" spellcheck="true">;</span>\n\n<span class="token variable">@Service</span>\n<span class="token variable">@Slf4j</span>\npublic class EventListenerService {\n\n    @<span class="token function">EventListener</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> {PersonCreateEvent<span class="token punctuation">.</span>class}<span class="token punctuation">)</span>\n    public void <span class="token function">handlePersonCreate</span><span class="token punctuation">(</span>PersonCreateEvent event<span class="token punctuation">)</span>{\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"Peson create event:"</span> <span class="token operator">+</span> event<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n    @<span class="token function">EventListener</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> {PersonLoginEvent<span class="token punctuation">.</span>class}<span class="token punctuation">)</span>\n    public void <span class="token function">handlePersonLogin</span><span class="token punctuation">(</span>PersonLoginEvent event<span class="token punctuation">)</span>{\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"Peson login event:"</span> <span class="token operator">+</span> event<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}\n\n## \u8f93\u51fa\n\n<span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">14</span> <span class="token number">19</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">19.963</span>  INFO <span class="token number">9456</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> i<span class="token punctuation">.</span>g<span class="token punctuation">.</span>j<span class="token punctuation">.</span>u<span class="token punctuation">.</span>s<span class="token punctuation">.</span>events<span class="token punctuation">.</span>EventListenerService    <span class="token punctuation">:</span> Peson create event<span class="token punctuation">:</span><span class="token function">PersonCreateEvent</span><span class="token punctuation">(</span>message<span class="token operator">=</span>Successfully create person<span class="token punctuation">)</span>\n<span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">14</span> <span class="token number">19</span><span class="token punctuation">:</span><span class="token number">45</span><span class="token punctuation">:</span><span class="token number">19.964</span>  INFO <span class="token number">9456</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> i<span class="token punctuation">.</span>g<span class="token punctuation">.</span>j<span class="token punctuation">.</span>u<span class="token punctuation">.</span>s<span class="token punctuation">.</span>events<span class="token punctuation">.</span>EventListenerService    <span class="token punctuation">:</span> Peson login event<span class="token punctuation">:</span><span class="token function">PersonLoginEvent</span><span class="token punctuation">(</span>message<span class="token operator">=</span>person login successfully<span class="token punctuation">)</span>'},["code",'import lombok.extern.slf4j.Slf4j;\nimport org.springframework.context.event.EventListener;\nimport org.springframework.stereotype.Service;\n\n@Service\n@Slf4j\npublic class EventListenerService {\n\n    @EventListener(classes = {PersonCreateEvent.class})\n    public void handlePersonCreate(PersonCreateEvent event){\n        log.info("Peson create event:" + event);\n    }\n\n    @EventListener(classes = {PersonLoginEvent.class})\n    public void handlePersonLogin(PersonLoginEvent event){\n        log.info("Peson login event:" + event);\n    }\n}\n\n## \u8f93\u51fa\n\n2019-06-14 19:45:19.963  INFO 9456 --- [           main] i.g.j.u.s.events.EventListenerService    : Peson create event:PersonCreateEvent(message=Successfully create person)\n2019-06-14 19:45:19.964  INFO 9456 --- [           main] i.g.j.u.s.events.EventListenerService    : Peson login event:PersonLoginEvent(message=person login successfully)']],["h2","\u4e8b\u52a1\u76d1\u542c\u5668"],["p","\u5982\u679c\u8981\u5728\u6570\u636e\u5e93\u64cd\u4f5c\u4e4b\u540e\u53d1\u9001\u901a\u77e5\u6d88\u606f\uff0c\u6b64\u65f6\u6570\u636e\u5e93\u64cd\u4f5c\u662f\u5728\u4e8b\u52a1\u4e2d\u6267\u884c\u7684\uff0c\u4e8b\u52a1\u4e2d\u6267\u884c\u6709\u53ef\u80fd\u6210\u529f\u4e5f\n\u6709\u53ef\u80fd\u5931\u8d25\uff0c\u5e0c\u671b\u5728\u6570\u636e\u5e93\u64cd\u4f5c\u6210\u529f\u4e4b\u540e\u63a5\u6536\u5230\u6d88\u606f\u3002\u6b64\u65f6\u6211\u4eec\u9700\u8981",["code","TransactionalEventListener"],"\n\u5b83\u4e5f\u662f\u4e00\u79cd",["code","EventListener"],"\uff0c\u53ea\u4e0d\u8fc7\u5b83\u548c\u4e8b\u52a1\u7ed1\u5b9a\uff0c\u53ea\u6709\u5f53\u4e8b\u52a1\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u56de\u8c03\u6b64\u65b9\u6cd5."],["pre",{lang:null,highlighted:'   @<span class="token function">TransactionalEventListener</span><span class="token punctuation">(</span>phase <span class="token operator">=</span> TransactionPhase<span class="token punctuation">.</span>AFTER_COMMIT<span class="token punctuation">)</span>\n   public void <span class="token function">handlePersonPersist</span><span class="token punctuation">(</span>PersonCreateEvent event<span class="token punctuation">)</span>{\n\n  }'},["code","   @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\n   public void handlePersonPersist(PersonCreateEvent event){\n\n  }"]],["p","\u6709\u5982\u4e0b\u56db\u79cd\u4e8b\u52a1\u9636\u6bb5"],["ul",["li",["p","BEFORE_COMMIT:  \u4e8b\u52a1\u63d0\u4ea4\u4e4b\u524d"]],["li",["p","AFTER_COMMIT: \u672a\u6307\u5b9a\u65f6\uff0c\u9ed8\u8ba4\u4f7f\u7528"]],["li",["p","AFTER_ROLLBACK: \u4e8b\u52a1\u56de\u6eda\u4e4b\u540e"]],["li",["p","AFTER_COMPLETION: \u4e8b\u52a1\u6210\u529f\u63d0\u4ea4"]],["li",["h4","\u793a\u4f8b"]]],["p","\u5982\u679c\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u65b9\u6cd5\u672a\u4f7f\u7528Transaction\u8fdb\u884c\u6807\u6ce8\uff0c\u5373\u4f7f\u6267\u884c\u6b64\u65b9\u6cd5\uff0c\u63a5\u6536\u65b9\u4e5f\u65e0\u6cd5\u63a5\u6536\u5230\u6d88\u606f\u3002\n\u6b64\u5916\uff0c\u8fd8\u9700\u8981\u6ee1\u8db3\u4e8b\u52a1\u7684\u9636\u6bb5\u4e0e\u63a5\u6536\u65b9\u4e00\u81f4"],["pre",{lang:null,highlighted:'## \u6d88\u606f\u53d1\u9001\u65b9\npublic class PersonService {\n    \n    <span class="token variable">@Autowired</span>\n    PersonRepository repository<span class="token comment" spellcheck="true">;</span>\n\n    <span class="token variable">@Autowired</span>\n    EventPublisherService eventPublisherService<span class="token comment" spellcheck="true">;</span>\n\n    @<span class="token function">Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> Propagation<span class="token punctuation">.</span>REQUIRES_NEW<span class="token punctuation">)</span>\n    public Person <span class="token function">savePerson</span><span class="token punctuation">(</span>Person person<span class="token punctuation">)</span>{\n        Assert<span class="token punctuation">.</span><span class="token function">notNull</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">"Person should not be null"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        eventPublisherService<span class="token punctuation">.</span><span class="token function">publishMessage</span><span class="token punctuation">(</span>new <span class="token function">PersonCreateEvent</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">"persist person"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        return repository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}\n\n## \u6d88\u606f\u63a5\u6536\u65b9\n\n<span class="token variable">@Service</span>\n<span class="token variable">@Slf4j</span>\npublic class EventListenerService {\n\n    @<span class="token function">TransactionalEventListener</span><span class="token punctuation">(</span>phase <span class="token operator">=</span> TransactionPhase<span class="token punctuation">.</span>AFTER_COMMIT<span class="token punctuation">)</span>\n    public void <span class="token function">handlePersonPersist</span><span class="token punctuation">(</span>PersonCreateEvent event<span class="token punctuation">)</span>{\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"*********************************************"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"Peson transaction create event:"</span> <span class="token operator">+</span> event<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'## \u6d88\u606f\u53d1\u9001\u65b9\npublic class PersonService {\n    \n    @Autowired\n    PersonRepository repository;\n\n    @Autowired\n    EventPublisherService eventPublisherService;\n\n    @Transactional(propagation = Propagation.REQUIRES_NEW)\n    public Person savePerson(Person person){\n        Assert.notNull(person,"Person should not be null");\n        eventPublisherService.publishMessage(new PersonCreateEvent(person,"persist person"));\n        return repository.save(person);\n    }\n}\n\n## \u6d88\u606f\u63a5\u6536\u65b9\n\n@Service\n@Slf4j\npublic class EventListenerService {\n\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\n    public void handlePersonPersist(PersonCreateEvent event){\n        log.info("*********************************************");\n        log.info("Peson transaction create event:" + event);\n    }\n}']],["p","\u8f93\u51fa"],["pre",{lang:null,highlighted:'<span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">14</span> <span class="token number">20</span><span class="token punctuation">:</span><span class="token number">38</span><span class="token punctuation">:</span><span class="token number">27.177</span>  INFO <span class="token number">22835</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> i<span class="token punctuation">.</span>g<span class="token punctuation">.</span>j<span class="token punctuation">.</span>u<span class="token punctuation">.</span>s<span class="token punctuation">.</span>events<span class="token punctuation">.</span>EventListenerService    <span class="token punctuation">:</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>\n<span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">14</span> <span class="token number">20</span><span class="token punctuation">:</span><span class="token number">38</span><span class="token punctuation">:</span><span class="token number">27.177</span>  INFO <span class="token number">22835</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> i<span class="token punctuation">.</span>g<span class="token punctuation">.</span>j<span class="token punctuation">.</span>u<span class="token punctuation">.</span>s<span class="token punctuation">.</span>events<span class="token punctuation">.</span>EventListenerService    <span class="token punctuation">:</span> Peson transaction create event<span class="token punctuation">:</span><span class="token function">PersonCreateEvent</span><span class="token punctuation">(</span>message<span class="token operator">=</span>persist person<span class="token punctuation">)</span>\n<span class="token number">2019</span><span class="token operator">-</span><span class="token number">06</span><span class="token operator">-</span><span class="token number">14</span> <span class="token number">20</span><span class="token punctuation">:</span><span class="token number">38</span><span class="token punctuation">:</span><span class="token number">27.371</span>  INFO <span class="token number">22835</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">192.168</span><span class="token punctuation">.</span><span class="token number">1.7</span><span class="token punctuation">]</span> o<span class="token punctuation">.</span>a<span class="token punctuation">.</span>c<span class="token punctuation">.</span>c<span class="token punctuation">.</span>C<span class="token punctuation">.</span><span class="token punctuation">[</span>Tomcat<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>localhost<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token operator">/</span><span class="token punctuation">]</span>       <span class="token punctuation">:</span> Initializing Spring DispatcherServlet <span class="token string">\'dispatcherServlet\'</span>'},["code","2019-06-14 20:38:27.177  INFO 22835 --- [           main] i.g.j.u.s.events.EventListenerService    : *********************************************\n2019-06-14 20:38:27.177  INFO 22835 --- [           main] i.g.j.u.s.events.EventListenerService    : Peson transaction create event:PersonCreateEvent(message=persist person)\n2019-06-14 20:38:27.371  INFO 22835 --- [(3)-192.168.1.7] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'"]],["h2","\u603b\u7ed3"],["p","EventListener\u53ef\u4ee5\u5728\u5355\u5e94\u7528\u4e2d\u5404\u7ec4\u4ef6\u6765\u8fdb\u884c\u6d88\u606f\u7684\u4f20\u9012\u5b9e\u73b0\u7cfb\u7edf\u677e\u8026\u5408\u7684\u76ee\u7684\uff0c\u4f46\u662f\u65e0\u6cd5\u8de8\u5e94\u7528\u8fdb\u884c\u6d88\u606f\u901a\u77e5\n\u5982\u679c\u9700\u8981\u5728\u591a\u4e2a\u5fae\u670d\u52a1\u4e4b\u95f4\u8def\u7531\u6d88\u606f\u9700\u8981\u501f\u52a9\u7b2c\u4e09\u65b9\u6d88\u606f\u4e2d\u95f4\u4ef6",["code","kafka"],",",["code","rabbitmq"],"."]],meta:{order:10,title:"Spring \u4e8b\u4ef6\u6a21\u578b",type:"\u5165\u95e8",filename:"docs/java/spring-event.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u7b80\u4ecb",title:"\u7b80\u4ecb"},"\u7b80\u4ecb"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793a\u4f8b",title:"\u793a\u4f8b"},"\u793a\u4f8b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4e8b\u52a1\u76d1\u542c\u5668",title:"\u4e8b\u52a1\u76d1\u542c\u5668"},"\u4e8b\u52a1\u76d1\u542c\u5668"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u603b\u7ed3",title:"\u603b\u7ed3"},"\u603b\u7ed3"]]]}}});