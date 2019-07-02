webpackJsonp([48],{1307:function(n,s){n.exports={content:["article",["h2","Introduction"],["p","  I have been going through Google/Volley\u2019s source code recently and the method"],["p","   ",["code","com.android.volley.toolbox.DiskBasedCache#writeInt caught my attention:"]],["pre",{lang:null,highlighted:'<span class="token keyword">static</span> void <span class="token function">writeInt</span><span class="token punctuation">(</span>OutputStream os<span class="token punctuation">,</span> int n<span class="token punctuation">)</span> throws IOException {\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}'},["code","static void writeInt(OutputStream os, int n) throws IOException {\n    os.write((n >> 0) & 0xff);\n    os.write((n >> 8) & 0xff);\n    os.write((n >> 16) & 0xff);\n    os.write((n >> 24) & 0xff);\n}"]],["p"," If your knowledge on bitwise operations is a little rusty, the following section could \n give you a refresher."],["p","Bitwise Operations Warm-up\nLet\u2019s look at the following expression first:"],["pre",{lang:null,highlighted:'<span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span>'},["code","(n >> 8) & 0xff"]],["p","Break it down."],["p","This expression:"],["pre",{lang:null,highlighted:'n <span class="token operator">></span><span class="token operator">></span> <span class="token number">8</span>'},["code","n >> 8"]],["p","is a signed right shift, illustrated as follows\uff1a"],["p","And"],["p","0xff\nis a hex value, whose bits are:"],["p","So the operation"],["pre",{lang:null,highlighted:'<span class="token operator">&amp;</span> <span class="token number">0xff</span>'},["code","& 0xff"]],["p","cuts off bits that are higher than the low 8 bits."],["p","To sum it up, the operation:"],["pre",{lang:null,highlighted:'<span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span>'},["code","(n >> 8) & 0xff"]],["p","can be illustrated as the following diagram:"],["p","Now we understand that to write a 32-bit integer into an OutputStream, we can divide the integer into 4 bytes and write One byte (8-bits) at a time, and do it 4 times with the 4 bytes."],["p","So to write a 64-bit long data type, we naturally think of doing something similar. If an integer can be divided into 4 bytes then a long can be divided into 8 bytes. We could write one byte at a time and do it 8 times for the 8 bytes, right?"],["p","The code should look like this:"],["pre",{lang:null,highlighted:'<span class="token keyword">static</span> void <span class="token function">writeLong</span><span class="token punctuation">(</span>OutputStream os<span class="token punctuation">,</span> long n<span class="token punctuation">)</span> throws IOException {\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">48</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span> <span class="token number">56</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}'},["code","static void writeLong(OutputStream os, long n) throws IOException {\n    os.write((n >> 0) & 0xff);\n    os.write((n >> 8) & 0xff);\n    os.write((n >> 16) & 0xff);\n    os.write((n >> 24) & 0xff);\n    os.write((n >> 32) & 0xff);\n    os.write((n >> 40) & 0xff);\n    os.write((n >> 48) & 0xff);\n    os.write((n >> 56) & 0xff);\n}"]],["p","One Problem\nThe code snippet above looks ok. Except there is one problem: it does NOT compile!"],["p","Because in this case, the parameter n is a long type and after we\u2019ve done bitwise operations on it, it still gives us long data type."],["p","when we are passing a long typed variable to java.io.OutputStream#write(int) we get a compilation error."],["p","Solution\nThere is a technique in Java called Narrowing Primitive Conversion."],["h2","Chapter 5. Conversions and Contexts"],["p","Casting a 32-bit integer to a 8-bit byte in Java will result in the remaining byte value only taking the low 8 bits of the original integer and discarding all the higher bits."],["p","Because there is a type casting happening, we could use java.io.OutputStream#write(int) without a problem."],["pre",{lang:null,highlighted:'<span class="token keyword">static</span> void <span class="token function">writeLong</span><span class="token punctuation">(</span>OutputStream os<span class="token punctuation">,</span> long n<span class="token punctuation">)</span> throws IOException {\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">48</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">(</span>byte<span class="token punctuation">)</span><span class="token punctuation">(</span>n <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">56</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}'},["code","static void writeLong(OutputStream os, long n) throws IOException {\n    os.write((byte)(n >>> 0));\n    os.write((byte)(n >>> 8));\n    os.write((byte)(n >>> 16));\n    os.write((byte)(n >>> 24));\n    os.write((byte)(n >>> 32));\n    os.write((byte)(n >>> 40));\n    os.write((byte)(n >>> 48));\n    os.write((byte)(n >>> 56));\n}"]],["p","Similar techniques could be found in java.io.Bits#putInt:"],["pre",{lang:null,highlighted:'<span class="token keyword">static</span> void <span class="token function">putInt</span><span class="token punctuation">(</span>byte<span class="token punctuation">[</span><span class="token punctuation">]</span> b<span class="token punctuation">,</span> int off<span class="token punctuation">,</span> int val<span class="token punctuation">)</span> {\n    b<span class="token punctuation">[</span>off <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>byte<span class="token punctuation">)</span> <span class="token punctuation">(</span>val       <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    b<span class="token punctuation">[</span>off <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>byte<span class="token punctuation">)</span> <span class="token punctuation">(</span>val <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span>  <span class="token number">8</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    b<span class="token punctuation">[</span>off <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>byte<span class="token punctuation">)</span> <span class="token punctuation">(</span>val <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    b<span class="token punctuation">[</span>off    <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>byte<span class="token punctuation">)</span> <span class="token punctuation">(</span>val <span class="token operator">></span><span class="token operator">></span><span class="token operator">></span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}'},["code","static void putInt(byte[] b, int off, int val) {\n    b[off + 3] = (byte) (val       );\n    b[off + 2] = (byte) (val >>>  8);\n    b[off + 1] = (byte) (val >>> 16);\n    b[off    ] = (byte) (val >>> 24);\n}"]],["p",["a",{title:null,href:"https://android.jlelse.eu/java-when-to-use-n-8-0xff-and-when-to-use-byte-n-8-2efd82ae7dd7"},"\u5f15\u7528\u81ea https://android.jlelse.eu/java-when-to-use-n-8-0xff-and-when-to-use-byte-n-8-2efd82ae7dd7"]]],meta:{order:1,title:"When to Use (n >> 8) & 0xff and When to Use (byte)(n >>> 8)",type:"\u5165\u95e8",filename:"docs/algorithm/bitsets-operation.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Introduction",title:"Introduction"},"Introduction"]],["li",["a",{className:"bisheng-toc-h2",href:"#Chapter-5.-Conversions-and-Contexts",title:"Chapter 5. Conversions and Contexts"},"Chapter 5. Conversions and Contexts"]]]}}});