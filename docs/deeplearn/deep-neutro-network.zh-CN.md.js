webpackJsonp([21],{1278:function(n,s){n.exports={content:["article",["p","\u795e\u7ecf\u7f51\u7edc\u662f\u4e00\u79cd\u76d1\u7763\u5b66\u4e60\uff0c\u901a\u5e38\u7528\u6765\u505a\u5206\u7c7b\u6216\u8005\u9884\u6d4b\uff0c\u5f88\u591a\u60c5\u51b5\u4e0b\u7ebf\u6027\u6a21\u578b\u5e76\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u8981\u6c42\uff0c\u6bd4\u5982\u4e8c\u7ef4\u5750\u6807\u4e2d\u7684\u70b9\u5e76\u975e\u603b\u662f\n\u5448\u7ebf\u6027\u6392\u5217\uff0c\u6b64\u65f6\u7ebf\u6027\u6a21\u578b\u5c31\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u8981\u6c42\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7\u4e00\u4e9b\u51fd\u6570\u5c06\u5750\u6807\u4e2d\u7684\u70b9\u4ee5\u975e\u7ebf\u6027\u7684\u65b9\u5f0f\u8868\u8fbe\u51fa\u6765\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\n\u4e00\u4e9b\u975e\u7ebf\u6027\u7684\u6fc0\u6d3b\u51fd\u6570"],["h2","\u6fc0\u6d3b\u51fd\u6570"],["p","\u5e38\u7528\u7684\u6fc0\u6d3b\u51fd\u6570\u6709"],["p","Sigmoid \u6fc0\u6d3b\u51fd\u6570"],["p","$$ sigmoid(x) = \\frac{1}{1 + e^{-x}} $$"],["p","Relu \u6fc0\u6d3b\u51fd\u6570"],["p","$$ relu(x) = \\begin{cases} x & \\text{x >= 0}","\\"," 0 & \\text{x < 0} \\end{cases} $$"],["h2","\u635f\u5931\u51fd\u6570"],["p","\u635f\u5931\u51fd\u6570\u7528\u6765\u8ba1\u7b97\u9884\u6d4b\u503c\u4e0e\u771f\u5b9e\u503c\u4e4b\u95f4\u7684\u8bef\u5dee\uff0c\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u901a\u8fc7\u4e0d\u65ad\u4f18\u5316\u5404\u4e2a\u53d8\u91cf\u6765\u5bfb\u627e\u6700\u4f18\u89e3\u4f7f\u5f97\u635f\u5931\u51fd\u6570\u7684\u503c\u8d8a\u5c0f\uff0c\u8868\u660e\u9884\u6d4b\u51fd\u6570\u9884\u6d4b\u7684\u503c\u4e0e\u771f\u5b9e\u503c\u8d8a\u63a5\u8fd1\uff0c\u901a\u5e38\u4f7f\u7528\u5230\u7684\u635f\u5931\u51fd\u6570\u6709\u5747\u65b9\u5dee"],["p","$$ MSE = \\frac{ \\sum_{k=1}^N(y_k -y^{'})}{n} $$"],["p","\u8fd8\u6709\u4ea4\u53c9\u71b5"],["h2","\u4ea4\u53c9\u71b5"],["p","\u4fe1\u606f\u71b5\uff1a \u4fe1\u606f\u71b5\u4ee3\u8868\u7684\u662f\u968f\u673a\u53d8\u91cf\u6216\u6574\u4e2a\u7cfb\u7edf\u7684\u4e0d\u786e\u5b9a\u6027\uff0c\u71b5\u8d8a\u5927\uff0c\u968f\u673a\u53d8\u91cf\u6216\u7cfb\u7edf\u7684\u4e0d\u786e\u5b9a\u6027\u5c31\u8d8a\u5927"],["p","\u6709(A,B,C,D)\u56db\u4e2a\u5b57\u6bcd, \u901a\u5e38\u60c5\u51b5\u4e0b\u6211\u4eec\u9884\u6d4b\u6bcf\u4e2a\u5b57\u6bcd\u51fa\u73b0\u7684\u6982\u7387\u4e3ap (1/4,1/4,1/4,1/4) \u90a3\u4e48\u9700\u8981\u591a\u5c11\u4e2a\u5b57\u7b26\u624d\u80fd\u7f16\u7801\u8fd9\u4e32\u6587\u5b57\u5462, \u7b54\u6848\u662f\uff1a"],["p","$$ log_2\\frac{1}{4} = 2 $$"],["p","\u5982\u679c(A,B,C,D) \u51fa\u73b0\u7684\u6982\u7387\u662fq (1/2, 1/2, 0, 0) \u90a3\u6211\u4eec\u53ea\u9700\u89811\u4e2a\u5b57\u7b26\u5c31\u53ef\u4ee5\u7f16\u7801\u8fd9\u56db\u4e2a\u5b57\u6bcd"],["p","$$ log_2\\frac{1}{2} = 1 $$"],["p","\u4fe1\u606f\u71b5\u5c31\u662f\b\u7f16\u7801\u6240\u6709\u4fe1\u606f\u6240\u9700\u8981\u7684\u5143\u7d20\u4e2a\u6570, \u8ba1\u7b97\u516c\u5f0f\u5982\u4e0b:"],["p","$$  \\sum_{k=1}^N p_k \\log_2 \\frac{1}{p_k}  $$"],["p","\u771f\u5b9e\u6982\u7387\u5206\u5e03\uff1a"],["p","$$ \n   2",["em","  \\log_2\\frac{1}{\\frac{1}{2}} "]," \\frac{1}{2}  = 1\n$$"],["p","\u9884\u6d4b\u6982\u7387\u5206\u5e03\uff1a"],["p","$$ \n   4 ",["em"," \\log_2\\frac{1}{\\frac{1}{4}} "]," \\frac{1}{4} = 2\n$$"],["p","\u975e\u771f\u5b9e\u5206\u5e03q\u5f97\u5230\u7684\u5e73\u5747\u7f16\u7801\u957f\u5ea6\bH(p,q) = 2 \u4e0e\u771f\u5b9e\u5206\u5e03p\u5f97\u5230\u7684\u5e73\u5747\u7f16\u7801\u957f\u5ea6H(p) = 1, \u53ef\u4ee5\u770b\u5230\u975e\u771f\u5b9e\u5206\u5e03\b > \u771f\u5b9e\u5206\u5e03"],["p","\u4ea4\u53c9\u71b5\uff0c\u5176\u7528\u6765\u8861\u91cf\u5728\u7ed9\u5b9a\u7684\u771f\u5b9e\u5206\u5e03\u4e0b\uff0c\u4f7f\u7528\u975e\u771f\u5b9e\u5206\u5e03\u6240\u6307\u5b9a\u7684\u7b56\u7565\u6d88\u9664\u7cfb\u7edf\u7684\u4e0d\u786e\u5b9a\u6027\u6240\u9700\u8981\u4ed8\u51fa\u7684\u52aa\u529b\u7684\u5927\u5c0f\u3002\u5373\uff1a"],["p","$$  \\sum_{k=1}^N p_k \\log_2 \\frac{1}{q_k}  $$ "],["p","$$  \\frac{1}{4} ",["em"," \\log_2 4 + \\frac{1}{4} "]," \\log_2 4= 1 $$"],["p","\u4ea4\u53c9\u71b5\u8d8a\u4f4e\uff0c\u8fd9\u4e2a\u7b56\u7565\u5c31\u8d8a\u597d\uff0c\u6700\u4f4e\u7684\u4ea4\u53c9\u71b5\u4e5f\u5c31\u662f\u4f7f\u7528\u4e86\u771f\u5b9e\u5206\u5e03\u6240\u8ba1\u7b97\u51fa\u6765\u7684\u4fe1\u606f\u71b5\uff0c\u56e0\u4e3a\u6b64\u65f6 p = q \uff0c\u4ea4\u53c9\u71b5 = \u4fe1\u606f\u71b5"],["p",["a",{title:null,href:"https://www.zhihu.com/question/41252833"},"\u8be6\u7ec6\u5185\u5bb9\u53ef\u67e5\u770b"]],["h2","\u4ee3\u7801\u5b9e\u73b0"],["p","\u5982\u4e0b\u6211\u4eec\u5b9e\u73b0\u4e00\u4e2a\u53cc\u5c42\u795e\u7ecf\u7f51\u7edc\u5305\u542b\u4e00\u4e2a\b\u9690\u85cf\u5c42\uff0c "],["pre",{lang:null,highlighted:'# <span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>coding<span class="token punctuation">:</span>utf<span class="token operator">-</span><span class="token number">8</span><span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>\n\nimport tensorflow as tf\nimport numpy as np\n\n\nclass <span class="token function">DeepNeutralNetwork</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n    def <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> learning_rate<span class="token operator">=</span><span class="token number">0.01</span><span class="token punctuation">,</span> epochs<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> dimension<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">,</span> hidden<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n        self<span class="token punctuation">.</span>learning_rate <span class="token operator">=</span> learning_rate\n        self<span class="token punctuation">.</span>epochs <span class="token operator">=</span> epochs\n        self<span class="token punctuation">.</span>batch_size <span class="token operator">=</span> batch_size\n        self<span class="token punctuation">.</span>dimension <span class="token operator">=</span> dimension\n        self<span class="token punctuation">.</span>hidden <span class="token operator">=</span> hidden\n\n        self<span class="token punctuation">.</span>x_train_vals <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> dimension<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">astype</span><span class="token punctuation">(</span>dtype<span class="token operator">=</span>np<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>\n        self<span class="token punctuation">.</span>y_train_vals <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">astype</span><span class="token punctuation">(</span>dtype<span class="token operator">=</span>np<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>\n\n        self<span class="token punctuation">.</span>x_data <span class="token operator">=</span> tf<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">[</span>None<span class="token punctuation">,</span> dimension<span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>\n        self<span class="token punctuation">.</span>y_actual <span class="token operator">=</span> tf<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">[</span>None<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dtype<span class="token operator">=</span>tf<span class="token punctuation">.</span>float32<span class="token punctuation">)</span>\n        self<span class="token punctuation">.</span>y_predict <span class="token operator">=</span> self<span class="token punctuation">.</span><span class="token function">build_model</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    def <span class="token function">build_model</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n        weight1 <span class="token operator">=</span> tf<span class="token punctuation">.</span><span class="token function">Variable</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">random_normal</span><span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">[</span>self<span class="token punctuation">.</span>dimension<span class="token punctuation">,</span> self<span class="token punctuation">.</span>hidden<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        bias1 <span class="token operator">=</span> tf<span class="token punctuation">.</span><span class="token function">Variable</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">random_normal</span><span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">[</span>self<span class="token punctuation">.</span>hidden<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n        weight2 <span class="token operator">=</span> tf<span class="token punctuation">.</span><span class="token function">Variable</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">random_normal</span><span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">[</span>self<span class="token punctuation">.</span>hidden<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        bias2 <span class="token operator">=</span> tf<span class="token punctuation">.</span><span class="token function">Variable</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">random_normal</span><span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n        model <span class="token operator">=</span> tf<span class="token punctuation">.</span>nn<span class="token punctuation">.</span><span class="token function">relu</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">matmul</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>x_data<span class="token punctuation">,</span> weight1<span class="token punctuation">)</span><span class="token punctuation">,</span> bias1<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        model <span class="token operator">=</span> tf<span class="token punctuation">.</span>nn<span class="token punctuation">.</span><span class="token function">relu</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">matmul</span><span class="token punctuation">(</span>model<span class="token punctuation">,</span> weight2<span class="token punctuation">)</span><span class="token punctuation">,</span> bias2<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n        return model\n\n    def <span class="token function">train</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>\n\n        <span class="token keyword">with</span> tf<span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span> as sess<span class="token punctuation">:</span>\n            sess<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">global_variables_initializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n            loss <span class="token operator">=</span> tf<span class="token punctuation">.</span><span class="token function">reduce_mean</span><span class="token punctuation">(</span>tf<span class="token punctuation">.</span><span class="token function">square</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>y_actual <span class="token operator">-</span> self<span class="token punctuation">.</span>y_predict<span class="token punctuation">)</span><span class="token punctuation">)</span>\n            optimizer <span class="token operator">=</span> tf<span class="token punctuation">.</span>train<span class="token punctuation">.</span><span class="token function">GradientDescentOptimizer</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>learning_rate<span class="token punctuation">)</span>\n            train_step <span class="token operator">=</span> optimizer<span class="token punctuation">.</span><span class="token function">minimize</span><span class="token punctuation">(</span>loss<span class="token punctuation">)</span>\n            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>epochs<span class="token punctuation">)</span><span class="token punctuation">:</span>\n                rand_index <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span><span class="token function">choice</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>x_train_vals<span class="token punctuation">)</span><span class="token punctuation">,</span> size<span class="token operator">=</span>self<span class="token punctuation">.</span>batch_size<span class="token punctuation">)</span>\n                rand_x <span class="token operator">=</span> self<span class="token punctuation">.</span>x_train_vals<span class="token punctuation">[</span>rand_index<span class="token punctuation">]</span>\n                rand_y <span class="token operator">=</span> self<span class="token punctuation">.</span>y_train_vals<span class="token punctuation">[</span>rand_index<span class="token punctuation">]</span>\n                sess<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>train_step<span class="token punctuation">,</span> feed_dict<span class="token operator">=</span>{self<span class="token punctuation">.</span>x_data<span class="token punctuation">:</span> rand_x<span class="token punctuation">,</span> self<span class="token punctuation">.</span>y_actual<span class="token punctuation">:</span> rand_y}<span class="token punctuation">)</span>\n                temp_loss <span class="token operator">=</span> sess<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>loss<span class="token punctuation">,</span> feed_dict<span class="token operator">=</span>{self<span class="token punctuation">.</span>x_data<span class="token punctuation">:</span> rand_x<span class="token punctuation">,</span> self<span class="token punctuation">.</span>y_actual<span class="token punctuation">:</span> rand_y}<span class="token punctuation">)</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> % <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>\n                    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">\'Step: %d, loss: %f\'</span> % <span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> temp_loss<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n\ndef <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    model <span class="token operator">=</span> <span class="token function">DeepNeutralNetwork</span><span class="token punctuation">(</span>epochs<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">)</span>\n    model<span class="token punctuation">.</span><span class="token function">train</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n\n<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">\'__main__\'</span><span class="token punctuation">:</span>\n    <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>'},["code","# -*-coding:utf-8-*-\n\nimport tensorflow as tf\nimport numpy as np\n\n\nclass DeepNeutralNetwork(object):\n\n    def __init__(self, learning_rate=0.01, epochs=100, batch_size=100, dimension=8, hidden=10):\n\n        self.learning_rate = learning_rate\n        self.epochs = epochs\n        self.batch_size = batch_size\n        self.dimension = dimension\n        self.hidden = hidden\n\n        self.x_train_vals = np.random.rand(1000, dimension).astype(dtype=np.float32)\n        self.y_train_vals = np.random.rand(1000, 1).astype(dtype=np.float32)\n\n        self.x_data = tf.placeholder(shape=[None, dimension], dtype=tf.float32)\n        self.y_actual = tf.placeholder(shape=[None, 1], dtype=tf.float32)\n        self.y_predict = self.build_model()\n\n    def build_model(self):\n\n        weight1 = tf.Variable(tf.random_normal(shape=[self.dimension, self.hidden]))\n        bias1 = tf.Variable(tf.random_normal(shape=[self.hidden]))\n\n        weight2 = tf.Variable(tf.random_normal(shape=[self.hidden, 1]))\n        bias2 = tf.Variable(tf.random_normal(shape=[1]))\n\n        model = tf.nn.relu(tf.add(tf.matmul(self.x_data, weight1), bias1))\n        model = tf.nn.relu(tf.add(tf.matmul(model, weight2), bias2))\n\n        return model\n\n    def train(self):\n\n        with tf.Session() as sess:\n            sess.run(tf.global_variables_initializer())\n\n            loss = tf.reduce_mean(tf.square(self.y_actual - self.y_predict))\n            optimizer = tf.train.GradientDescentOptimizer(self.learning_rate)\n            train_step = optimizer.minimize(loss)\n            for i in range(self.epochs):\n                rand_index = np.random.choice(len(self.x_train_vals), size=self.batch_size)\n                rand_x = self.x_train_vals[rand_index]\n                rand_y = self.y_train_vals[rand_index]\n                sess.run(train_step, feed_dict={self.x_data: rand_x, self.y_actual: rand_y})\n                temp_loss = sess.run(loss, feed_dict={self.x_data: rand_x, self.y_actual: rand_y})\n                if (i+1) % 10 == 0:\n                    print('Step: %d, loss: %f' % (i+1, temp_loss))\n\n\ndef main():\n    model = DeepNeutralNetwork(epochs=1000)\n    model.train()\n\n\nif __name__ == '__main__':\n    main()"]],["h2","\u4f18\u5316\b\u6027\u80fd"],["p","\u795e\u7ecf\u7f51\u7edc\u901a\u5e38\u4f1a\u9047\u5230\b\u8fc7\u62df\u5408\u548c\u6b20\u62df\u5408\u7684\u95ee\u9898\uff0c\u8fc7\u62df\u5408\u5373\u6a21\u578b\u5728\u8bad\u7ec3\u96c6\u4e0a\u6027\u80fd\u5f88\u597d\uff0c\u5728\u6d4b\u8bd5\u96c6\u5408\u4e2d\u6027\u80fd\u663e\u8457\u4e0b\u964d\uff0c\u5176\u6cdb\u5316\u6027\u80fd\u5f88\u5dee\uff0c\u8fd9\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\uff0c\u6b20\u62df\u5408\u5219\u662f\u6211\u4eec\u7684\u9884\u6d4b\u6a21\u578b\u4e0d\u80fd\b\u8868\u8fbe\u6211\u4eec\u6a21\u578b\u6570\u636e\uff0c\u62df\u5408\u5ea6\u8f83\u5dee"],["h4","\u89e3\u51b3\u8fc7\u62df\u5408\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u65b9\u6cd5\uff0c"],["ul",["li",["p","\u589e\u52a0\u9690\u85cf\u5c42"]],["li",["p","Dropout \u4e22\u5f03\u6570\u636e"]]],["h4","\u89e3\u51b3\u6b20\u62df\u5408\u7684\u65b9\u6cd5"],["ul",["li",["p","\u589e\u52a0\u6d4b\u8bd5\u96c6\u5408\u6570\u636e"]]],["p","\u63a8\u8350\u5927\u5bb6\u4e00\u4e2a\u673a\u5668\u5b66\u4e60\u7684\u5728\u7ebf\u6a21\u62df\u7f51\u7ad9",["a",{title:null,href:"https://editor.aifiddle.io/"},"AI Editor"],"\uff0c\u6709\u5174\u8da3\u7684\u53ef\u4ee5\u5c1d\u8bd5\u4e0b"]],meta:{order:1,title:"\u795e\u7ecf\u7f51\u7edc",type:"\u5165\u95e8",filename:"docs/deeplearn/deep-neutro-network.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6fc0\u6d3b\u51fd\u6570",title:"\u6fc0\u6d3b\u51fd\u6570"},"\u6fc0\u6d3b\u51fd\u6570"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u635f\u5931\u51fd\u6570",title:"\u635f\u5931\u51fd\u6570"},"\u635f\u5931\u51fd\u6570"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4ea4\u53c9\u71b5",title:"\u4ea4\u53c9\u71b5"},"\u4ea4\u53c9\u71b5"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4ee3\u7801\u5b9e\u73b0",title:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f18\u5316\b\u6027\u80fd",title:"\u4f18\u5316\b\u6027\u80fd"},"\u4f18\u5316\b\u6027\u80fd"]]]}}});