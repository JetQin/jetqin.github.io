webpackJsonp([46],{1307:function(n,s){n.exports={content:["article",["h2","\u7b80\u4ecb"],["p","\u52a8\u6001\u89c4\u5212\u662f\u4e00\u79cd\u4f18\u5316\u9012\u5f52\u8c03\u7528\u7684\u65b9\u6cd5\uff0c\u6838\u5fc3\u601d\u60f3\u662f\u628a\u4e00\u4e2a\u95ee\u9898\u5206\u89e3\u6210\u82e5\u5e72\u4e2a\u5b50\u95ee\u9898\uff0c\u6c42\u89e3\u5b50\u95ee\u9898\u5e76\u5c06\u4e2d\u95f4\u7ed3\u679c\u5b58\u50a8\u8d77\u6765\n\uff0c\u6c42\u89e3\u6700\u7ec8\u7ed3\u679c\u65f6\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5b50\u95ee\u9898\u7684\u7ed3\u679c\u3002\u6700\u5178\u578b\u7684\u5c31\u662f\u6590\u6ce2\u90a3\u5951\u6570\u5217\u3002\n\u4ee5\u4e0b\u901a\u8fc7\u4e09\u79cd\u65b9\u6cd5\u6765\u5b9e\u73b0:"],["h2","\u5b9e\u73b0"],["pre",{lang:null,highlighted:'# fibonacii array\n# <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">13</span>\n\n# \u7b2c\u4e00\u79cd\u5b9e\u73b0\uff0c\u6b64\u65b9\u6cd5\u662f\u6700\u7b80\u5355\u7684\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff0c\u7f3a\u70b9\u662f\u9700\u8981\u5360\u7528\u5927\u91cf\u5185\u5b58\uff0c\u8017\u65f6\u8f83\u957f\n# \u5206\u6790\uff1a\n#  <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>\n#  <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n#  <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n#  <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n#  \u6b64\u65b9\u6cd5\u4f1a\u4ee5\u6307\u6570\u7ea7\u7684\u65b9\u5f0f\u4ea7\u751f\u6570\u636e\u8282\u70b9\uff0c\u4e14\u9012\u5f52\u6df1\u5ea6\u4f1a\u5f88\u5927\uff0c\u5f53\u76ee\u6807\u6c42\u89e3\u503c\u8fc7\u5927\u65f6\uff0c\u5341\u5206\u8017\u65f6\n#  \ndef <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">or</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>\n        return <span class="token number">1</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        return <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>\n\n# \u7b2c\u4e8c\u79cd\u5b9e\u73b0\n# \u5206\u6790\uff1a\n#  \u6b64\u65b9\u6cd5\u4f1a\u5c06\u8fc7\u7a0b\u4e2d\u6c42\u89e3\u7684\u4e2d\u95f4\u503c\u5b58\u50a8\u5728\u6570\u7ec4\u4e2d<span class="token punctuation">,</span> \u53ef\u4ee5\u89e3\u51b3\u6307\u6570\u7ea7\u7684\u5185\u5b58\u589e\u957f\u7684\u95ee\u9898\n# \n\ndef <span class="token function">fibonacci_memo</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> memo<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span> is <span class="token operator">not</span> None<span class="token punctuation">:</span>\n        return memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span>\n    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">or</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>\n        result <span class="token operator">=</span> <span class="token number">1</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        result <span class="token operator">=</span> <span class="token function">fibonacci_memo</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> memo<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci_memo</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> memo<span class="token punctuation">)</span>\n    memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> result\n    return memo<span class="token punctuation">[</span>n<span class="token punctuation">]</span>\n\n# \u7b2c\u4e09\u79cd\u5b9e\u73b0\n# \u5206\u6790\uff1a\n#  \u81ea\u5e95\u5411\u4e0a\u6c42\u89e3\uff0c\u89e3\u51b3\u4e86\u7a7a\u95f4\uff0c\u548c\u9012\u5f52\u8c03\u7528\u7684\u95ee\u9898\n# \n\ndef <span class="token function">fibonacci_bottom_up</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    result_set <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n    <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">or</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>\n        return <span class="token number">1</span>\n    result_set<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>\n    result_set<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>\n    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        result_set<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> result_set<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> result_set<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>\n    return result_set<span class="token punctuation">[</span>n<span class="token punctuation">]</span>\n\n\n<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">\'__main__\'</span><span class="token punctuation">:</span>\n    count <span class="token operator">=</span> <span class="token number">6</span>\n    memo <span class="token operator">=</span> <span class="token punctuation">(</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">[</span>None<span class="token punctuation">]</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">fibonacci</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">fibonacci_memo</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> memo<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">fibonacci_bottom_up</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>'},["code","# fibonacii array\n# 1, 1, 2, 3, 5, 8, 13\n\n# \u7b2c\u4e00\u79cd\u5b9e\u73b0\uff0c\u6b64\u65b9\u6cd5\u662f\u6700\u7b80\u5355\u7684\u4e00\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff0c\u7f3a\u70b9\u662f\u9700\u8981\u5360\u7528\u5927\u91cf\u5185\u5b58\uff0c\u8017\u65f6\u8f83\u957f\n# \u5206\u6790\uff1a\n#  fibonacci(5) -> fibonacci(4) + fibonacci(3)\n#  fibonacci(4) -> fibonacci(3) + fibonacci(2)\n#  fibonacci(3) -> fibonacci(2) + fibonacci(1)\n#  fibonacci(2) -> fibonacci(1) + fibonacci(0)\n#  \u6b64\u65b9\u6cd5\u4f1a\u4ee5\u6307\u6570\u7ea7\u7684\u65b9\u5f0f\u4ea7\u751f\u6570\u636e\u8282\u70b9\uff0c\u4e14\u9012\u5f52\u6df1\u5ea6\u4f1a\u5f88\u5927\uff0c\u5f53\u76ee\u6807\u6c42\u89e3\u503c\u8fc7\u5927\u65f6\uff0c\u5341\u5206\u8017\u65f6\n#  \ndef fibonacci(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)\n\n# \u7b2c\u4e8c\u79cd\u5b9e\u73b0\n# \u5206\u6790\uff1a\n#  \u6b64\u65b9\u6cd5\u4f1a\u5c06\u8fc7\u7a0b\u4e2d\u6c42\u89e3\u7684\u4e2d\u95f4\u503c\u5b58\u50a8\u5728\u6570\u7ec4\u4e2d, \u53ef\u4ee5\u89e3\u51b3\u6307\u6570\u7ea7\u7684\u5185\u5b58\u589e\u957f\u7684\u95ee\u9898\n# \n\ndef fibonacci_memo(n, memo):\n    if memo[n] is not None:\n        return memo[n]\n    if n == 0 or n == 1:\n        result = 1\n    else:\n        result = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)\n    memo[n] = result\n    return memo[n]\n\n# \u7b2c\u4e09\u79cd\u5b9e\u73b0\n# \u5206\u6790\uff1a\n#  \u81ea\u5e95\u5411\u4e0a\u6c42\u89e3\uff0c\u89e3\u51b3\u4e86\u7a7a\u95f4\uff0c\u548c\u9012\u5f52\u8c03\u7528\u7684\u95ee\u9898\n# \n\ndef fibonacci_bottom_up(n):\n    result_set = (n+1) * [0]\n    if n == 0 or n == 1:\n        return 1\n    result_set[0] = 1\n    result_set[1] = 1\n    for i in range(2, n+1):\n        result_set[i] = result_set[i-1] + result_set[i-2]\n    return result_set[n]\n\n\nif __name__ == '__main__':\n    count = 6\n    memo = (count+1) * [None]\n    print(fibonacci(count))\n    print(fibonacci_memo(count, memo))\n    print(fibonacci_bottom_up(count))"]],["h2","\u8f93\u51fa"],["pre",{lang:null,highlighted:'<span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>\n\u65e0\u8f93\u51fa\n\n\n<span class="token function">fibonacci_memo</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> memo<span class="token punctuation">)</span>\n<span class="token number">70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501</span>\n\n<span class="token function">fibonacci_bottom_up</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token number">70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501</span>'},["code","fibonacci(1000)\n\u65e0\u8f93\u51fa\n\n\nfibonacci_memo(1000, memo)\n70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501\n\nfibonacci_bottom_up(1000)\n70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501"]],["h2","\u53d8\u79cd"],["p",["a",{title:null,href:"https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/54/"},"Leetcode \u722c\u697c\u68af\u95ee\u9898"]],["h4","\u95ee\u9898\u63cf\u8ff0"],["pre",{lang:null,highlighted:'\u5047\u8bbe\u4f60\u6b63\u5728\u722c\u697c\u68af\u3002\u9700\u8981 n \u9636\u4f60\u624d\u80fd\u5230\u8fbe\u697c\u9876\u3002\n\u6bcf\u6b21\u4f60\u53ef\u4ee5\u722c <span class="token number">1</span> \u6216 <span class="token number">2</span> \u4e2a\u53f0\u9636\u3002\u4f60\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u722c\u5230\u697c\u9876\u5462\uff1f\n\n\u6ce8\u610f\uff1a\u7ed9\u5b9a n \u662f\u4e00\u4e2a\u6b63\u6574\u6570\u3002\n\n\u8f93\u5165\uff1a <span class="token number">2</span>\n\u8f93\u51fa\uff1a <span class="token number">2</span>\n\u89e3\u91ca\uff1a \u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u722c\u5230\u697c\u9876\u3002\n<span class="token number">1</span><span class="token punctuation">.</span>  <span class="token number">1</span> \u9636 <span class="token operator">+</span> <span class="token number">1</span> \u9636\n<span class="token number">2</span><span class="token punctuation">.</span>  <span class="token number">2</span> \u9636'},["code","\u5047\u8bbe\u4f60\u6b63\u5728\u722c\u697c\u68af\u3002\u9700\u8981 n \u9636\u4f60\u624d\u80fd\u5230\u8fbe\u697c\u9876\u3002\n\u6bcf\u6b21\u4f60\u53ef\u4ee5\u722c 1 \u6216 2 \u4e2a\u53f0\u9636\u3002\u4f60\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u722c\u5230\u697c\u9876\u5462\uff1f\n\n\u6ce8\u610f\uff1a\u7ed9\u5b9a n \u662f\u4e00\u4e2a\u6b63\u6574\u6570\u3002\n\n\u8f93\u5165\uff1a 2\n\u8f93\u51fa\uff1a 2\n\u89e3\u91ca\uff1a \u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u722c\u5230\u697c\u9876\u3002\n1.  1 \u9636 + 1 \u9636\n2.  2 \u9636"]],["h4","\u95ee\u9898\u5206\u6790"],["pre",{lang:null,highlighted:'\u81ea\u5e95\u5411\u4e0a\u6c42\u89e3\n\u5f53n <span class="token operator">=</span> <span class="token number">0</span>\u65f6\uff0c\u6709 <span class="token number">0</span> \u79cd\u65b9\u6cd5\n\n\u5f53n <span class="token operator">=</span> <span class="token number">1</span>\u65f6\uff0c\u6709<span class="token number">1</span>\u79cd\u65b9\u6cd5\uff0c \n\n<span class="token operator">+</span>  <span class="token number">1</span> \u9636 \n\n\u5f53n <span class="token operator">=</span> <span class="token number">2</span>\u65f6\uff0c\u6709<span class="token number">2</span>\u79cd\u65b9\u6cd5\n<span class="token operator">+</span>  <span class="token number">1</span> \u9636 <span class="token operator">+</span> <span class="token number">1</span> \u9636\n<span class="token operator">+</span>  <span class="token number">2</span> \u9636\n\n\u5f53n <span class="token operator">=</span> <span class="token number">3</span>\u65f6\uff0c\u6709<span class="token number">3</span>\u79cd\u65b9\u6cd5\n<span class="token operator">+</span>  <span class="token number">1</span> \u9636 <span class="token operator">+</span> <span class="token number">1</span> \u9636 <span class="token operator">+</span> <span class="token number">1</span> \u9636\n<span class="token operator">+</span>  <span class="token number">2</span> \u9636 <span class="token operator">+</span> <span class="token number">1</span> \u9636\n<span class="token operator">+</span>  <span class="token number">1</span> \u9636 <span class="token operator">+</span> <span class="token number">2</span> \u9636\n\n<span class="token number">3</span>\u9636\u7684\u603b\u65b9\u6cd5\u6570\u5c31\u662f <span class="token operator">=</span> <span class="token number">2</span>\u9636\u7684\u65b9\u6cd5\u6570 <span class="token operator">+</span> <span class="token number">1</span>\u9636\u7684\u65b9\u6cd5\u6570\n<span class="token function">num_ways</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">num_ways</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">num_ways</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>'},["code","\u81ea\u5e95\u5411\u4e0a\u6c42\u89e3\n\u5f53n = 0\u65f6\uff0c\u6709 0 \u79cd\u65b9\u6cd5\n\n\u5f53n = 1\u65f6\uff0c\u67091\u79cd\u65b9\u6cd5\uff0c \n\n+  1 \u9636 \n\n\u5f53n = 2\u65f6\uff0c\u67092\u79cd\u65b9\u6cd5\n+  1 \u9636 + 1 \u9636\n+  2 \u9636\n\n\u5f53n = 3\u65f6\uff0c\u67093\u79cd\u65b9\u6cd5\n+  1 \u9636 + 1 \u9636 + 1 \u9636\n+  2 \u9636 + 1 \u9636\n+  1 \u9636 + 2 \u9636\n\n3\u9636\u7684\u603b\u65b9\u6cd5\u6570\u5c31\u662f = 2\u9636\u7684\u65b9\u6cd5\u6570 + 1\u9636\u7684\u65b9\u6cd5\u6570\nnum_ways(n) = num_ways(n-1) + num_ways(n-2)"]],["h4","\u95ee\u9898\u6c42\u89e3"],["pre",{lang:null,highlighted:'class Solution<span class="token punctuation">:</span>\n    def <span class="token function">climbStairs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> n<span class="token punctuation">:</span> int<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> int<span class="token punctuation">:</span>\n        steps <span class="token operator">=</span> <span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n        <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>\n            return <span class="token number">1</span>\n        <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span>\n            return <span class="token number">2</span>\n        steps<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>\n        steps<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>\n        <span class="token keyword">for</span> index <span class="token keyword">in</span> <span class="token function">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n            steps<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> steps<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> steps<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span>\n        return steps<span class="token punctuation">[</span>n<span class="token punctuation">]</span>'},["code","class Solution:\n    def climbStairs(self, n: int) -> int:\n        steps = (n+1) * [0]\n        if n == 1:\n            return 1\n        if n == 2:\n            return 2\n        steps[1] = 1\n        steps[2] = 2\n        for index in range(3, n+1):\n            steps[index] = steps[index - 1] + steps[index - 2]\n        return steps[n]"]]],meta:{order:5,title:"\u52a8\u6001\u89c4\u5212",type:"\u5165\u95e8",filename:"docs/algorithm/dynamic_program.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u7b80\u4ecb",title:"\u7b80\u4ecb"},"\u7b80\u4ecb"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b9e\u73b0",title:"\u5b9e\u73b0"},"\u5b9e\u73b0"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8f93\u51fa",title:"\u8f93\u51fa"},"\u8f93\u51fa"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u53d8\u79cd",title:"\u53d8\u79cd"},"\u53d8\u79cd"]]]}}});