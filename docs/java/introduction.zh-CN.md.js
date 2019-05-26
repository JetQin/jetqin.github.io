webpackJsonp([14],{1269:function(n,s){n.exports={content:["article",["h2","\u5b9a\u4e49"],["p","\u89c2\u5bdf\u8005\u6a21\u5f0f\u4e5f\u79f0\u4f5c\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f,  \u88ab\u89c2\u5bdf\u8005(\u53d1\u5e03)+\u89c2\u5bdf\u8005(\u8ba2\u9605\u8005)=\u89c2\u5bdf\u8005\u6a21\u5f0f\uff0c\u5b83\u662f\u4e00\u79cd\u4e00\u5bf9\u591a\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5f53\u4e00\u4e2a\u5bf9\u8c61\u72b6\u6001\u6539\u53d8\uff0c\u5219\u6240\u6709\u4f9d\u8d56\u4e8e\u5b83\u7684\u5bf9\u8c61\u90fd\u4f1a\u5f97\u5230\u66f4\u65b0\u901a\u77e5\u3002"],["h2","\u5b9e\u73b0"],["p","\u89c2\u5bdf\u8005"],["pre",{lang:null,highlighted:'public interface Observer {\n    <span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span>\n     <span class="token operator">*</span> This method is called whenever the observed object is changed<span class="token punctuation">.</span> An\n     <span class="token operator">*</span> application calls an <span class="token operator">&lt;</span>tt<span class="token operator">></span>Observable<span class="token operator">&lt;</span><span class="token operator">/</span>tt<span class="token operator">></span> object\'s\n     <span class="token operator">*</span> <span class="token operator">&lt;</span>code<span class="token operator">></span>notifyObservers<span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">></span> method <span class="token keyword">to</span> have all the object\'s\n     <span class="token operator">*</span> observers notified of the change<span class="token punctuation">.</span>\n     <span class="token operator">*</span>\n     <span class="token operator">*</span> <span class="token variable">@param</span>   o     the observable object<span class="token punctuation">.</span>\n     <span class="token operator">*</span> <span class="token variable">@param</span>   arg   an argument passed <span class="token keyword">to</span> the <span class="token operator">&lt;</span>code<span class="token operator">></span>notifyObservers<span class="token operator">&lt;</span><span class="token operator">/</span>code<span class="token operator">></span>\n     <span class="token operator">*</span>                 method<span class="token punctuation">.</span>\n     <span class="token operator">*</span><span class="token operator">/</span>\n    void <span class="token function">update</span><span class="token punctuation">(</span>Observable o<span class="token punctuation">,</span> Object arg<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}'},["code","public interface Observer {\n    /**\n     * This method is called whenever the observed object is changed. An\n     * application calls an <tt>Observable</tt> object's\n     * <code>notifyObservers</code> method to have all the object's\n     * observers notified of the change.\n     *\n     * @param   o     the observable object.\n     * @param   arg   an argument passed to the <code>notifyObservers</code>\n     *                 method.\n     */\n    void update(Observable o, Object arg);\n}"]],["p","\u88ab\u89c2\u5bdf\u8005"],["pre",{lang:null,highlighted:'public class Observable {\n    private boolean changed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token comment" spellcheck="true">;</span>\n    private Vector<span class="token operator">&lt;</span>Observer<span class="token operator">></span> obs<span class="token comment" spellcheck="true">;</span>\n    public <span class="token function">Observable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        obs <span class="token operator">=</span> new Vector<span class="token operator">&lt;></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n    public synchronized void <span class="token function">addObserver</span><span class="token punctuation">(</span>Observer o<span class="token punctuation">)</span> {\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n            throw new <span class="token function">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>!obs<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span> {\n            obs<span class="token punctuation">.</span><span class="token function">addElement</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        }\n    }\n\n    public synchronized void <span class="token function">deleteObserver</span><span class="token punctuation">(</span>Observer o<span class="token punctuation">)</span> {\n        obs<span class="token punctuation">.</span><span class="token function">removeElement</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n    public void <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n    public void <span class="token function">notifyObservers</span><span class="token punctuation">(</span>Object arg<span class="token punctuation">)</span> {\n         Object<span class="token punctuation">[</span><span class="token punctuation">]</span> arrLocal<span class="token comment" spellcheck="true">;</span>\n         synchronized <span class="token punctuation">(</span>this<span class="token punctuation">)</span> {\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>!changed<span class="token punctuation">)</span>\n                return<span class="token comment" spellcheck="true">;</span>\n            arrLocal <span class="token operator">=</span> obs<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            <span class="token function">clearChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        }\n        <span class="token keyword">for</span> <span class="token punctuation">(</span>int i <span class="token operator">=</span> arrLocal<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token comment" spellcheck="true">; i>=0; i--){</span>\n            <span class="token punctuation">(</span><span class="token punctuation">(</span>Observer<span class="token punctuation">)</span>arrLocal<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        }\n    }\n    \n    protected synchronized void <span class="token function">setChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        changed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n    protected synchronized void <span class="token function">clearChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        changed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token comment" spellcheck="true">;</span>\n    }\n  }'},["code","public class Observable {\n    private boolean changed = false;\n    private Vector<Observer> obs;\n    public Observable() {\n        obs = new Vector<>();\n    }\n\n    public synchronized void addObserver(Observer o) {\n        if (o == null)\n            throw new NullPointerException();\n        if (!obs.contains(o)) {\n            obs.addElement(o);\n        }\n    }\n\n    public synchronized void deleteObserver(Observer o) {\n        obs.removeElement(o);\n    }\n\n    public void notifyObservers() {\n        notifyObservers(null);\n    }\n\n    public void notifyObservers(Object arg) {\n         Object[] arrLocal;\n         synchronized (this) {\n            if (!changed)\n                return;\n            arrLocal = obs.toArray();\n            clearChanged();\n        }\n        for (int i = arrLocal.length-1; i>=0; i--){\n            ((Observer)arrLocal[i]).update(this, arg);\n        }\n    }\n    \n    protected synchronized void setChanged() {\n        changed = true;\n    }\n\n    protected synchronized void clearChanged() {\n        changed = false;\n    }\n  }"]],["h2","\u4f18\u70b9"],["p","\u89c2\u5bdf\u8005\u4e0e\u88ab\u89c2\u5bdf\u8005\u76f4\u63a5\u662f\u677e\u8026\u5408\u7684\uff0c\u65e0\u8bba\u589e\u52a0\u89c2\u5bdf\u8005\u8fd8\u662f\u88ab\u89c2\u5bdf\u8005\u90fd\u662f\u5f88\u5bb9\u6613\u6269\u5c55\u7684"],["h2","\u7f3a\u70b9"],["p","\u89c2\u5bdf\u8005\u6a21\u5f0f\u7684\u901a\u77e5\u9ed8\u8ba4\u662f\u6309\u987a\u5e8f\u8fdb\u884c\u7684\uff0c\u4e00\u4e2a\u89c2\u5bdf\u5219\u88ab\u963b\u585e\u540e\uff0c\u4e4b\u540e\u7684\u89c2\u5bdf\u5219\u4e5f\u4f1a\u88ab\u963b\u585e\u3002"],["h2","\u5e94\u7528\u573a\u666f"],["p","\u80a1\u7968\u4e70\u5356\uff1a\u5f53\u80a1\u4ef7\u8fbe\u5230\u4e00\u5b9a\u4ef7\u683c\u65f6\u4e70\u5165\u80a1\u7968\uff0c\u5f53\u80a1\u4ef7\u4f4e\u4e8e\u67d0\u4e00\u4ef7\u683c\u65f6\u5356\u51fa\u80a1\u7968"],["pre",{lang:null,highlighted:'import java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Observable<span class="token comment" spellcheck="true">;</span>\n\npublic class StockObservable extends Observable\n{\n    private double price<span class="token comment" spellcheck="true">;</span>\n\n    public <span class="token function">StockObservable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    {\n        <span class="token function">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        this<span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">0.0</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n    public void <span class="token function">setPrice</span><span class="token punctuation">(</span>double price<span class="token punctuation">)</span>{\n        this<span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token comment" spellcheck="true">;</span>\n        this<span class="token punctuation">.</span><span class="token function">setChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        this<span class="token punctuation">.</span><span class="token function">notifyObservers</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n}\n\n\nimport java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Observable<span class="token comment" spellcheck="true">;</span>\nimport java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Observer<span class="token comment" spellcheck="true">;</span>\n\npublic class SellObserver implements Observer\n{\n    public <span class="token function">SellObserver</span><span class="token punctuation">(</span>StockObservable observable<span class="token punctuation">)</span>{\n        observable<span class="token punctuation">.</span><span class="token function">addObserver</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n    <span class="token variable">@Override</span>\n    public void <span class="token function">update</span><span class="token punctuation">(</span>Observable o<span class="token punctuation">,</span> Object arg<span class="token punctuation">)</span>\n    {\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Sell"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'import java.util.Observable;\n\npublic class StockObservable extends Observable\n{\n    private double price;\n\n    public StockObservable()\n    {\n        super();\n        this.price = 0.0;\n    }\n\n    public void setPrice(double price){\n        this.price = price;\n        this.setChanged();\n        this.notifyObservers(price);\n    }\n\n}\n\n\nimport java.util.Observable;\nimport java.util.Observer;\n\npublic class SellObserver implements Observer\n{\n    public SellObserver(StockObservable observable){\n        observable.addObserver(this);\n    }\n\n    @Override\n    public void update(Observable o, Object arg)\n    {\n        System.out.println("Sell");\n    }\n}']]],meta:{order:1,title:"\u89c2\u5bdf\u8005\u6a21\u5f0f",type:"\u5165\u95e8",filename:"docs/java/introduction.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5b9a\u4e49",title:"\u5b9a\u4e49"},"\u5b9a\u4e49"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b9e\u73b0",title:"\u5b9e\u73b0"},"\u5b9e\u73b0"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f18\u70b9",title:"\u4f18\u70b9"},"\u4f18\u70b9"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7f3a\u70b9",title:"\u7f3a\u70b9"},"\u7f3a\u70b9"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5e94\u7528\u573a\u666f",title:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"]]]}}});