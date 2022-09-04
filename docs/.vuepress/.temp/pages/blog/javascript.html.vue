<template><div><h3 id="_1-javascript的基本类型-引用类型-null和undefined的区别" tabindex="-1"><a class="header-anchor" href="#_1-javascript的基本类型-引用类型-null和undefined的区别" aria-hidden="true">#</a> 1. JavaScript的基本类型？引用类型？null和undefined的区别?</h3>
<ul>
<li>基本类型 <code v-pre>Number String Boolean null undefined Symbol</code></li>
<li>引用类型 <code v-pre> Object Function Array</code></li>
<li>undefined 变量声明未初始化；null 变量声明并赋值为null</li>
</ul>
<h3 id="_2-判断javascript数据类型" tabindex="-1"><a class="header-anchor" href="#_2-判断javascript数据类型" aria-hidden="true">#</a> 2. 判断JavaScript数据类型</h3>
<ul>
<li>typeof 判断null 为object</li>
<li>instanceof 判断引用类型</li>
<li><code v-pre>Object.prototype.toString</code></li>
</ul>
<h3 id="_3-创建函数的几种方式" tabindex="-1"><a class="header-anchor" href="#_3-创建函数的几种方式" aria-hidden="true">#</a> 3.创建函数的几种方式</h3>
<ul>
<li>函数声明</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">sum1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>函数表达式</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">sum1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-javascript创建对象的几种方式" tabindex="-1"><a class="header-anchor" href="#_4-javascript创建对象的几种方式" aria-hidden="true">#</a> 4.JavaScript创建对象的几种方式</h3>
<ul>
<li>对象字面量</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  cat<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Tom'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-javascript原生对象及宿主对象" tabindex="-1"><a class="header-anchor" href="#_5-javascript原生对象及宿主对象" aria-hidden="true">#</a> 5.JavaScript原生对象及宿主对象</h3>
<table>
<thead>
<tr>
<th style="text-align:left">原生对象</th>
<th style="text-align:left">宿主对象</th>
<th style="text-align:left">内部对象</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">独立于宿主环境的ECMScript实现提供的对象，包含<code v-pre>Object Function Array String Boolean Date RegExp Error SyntaxError TypeError URIError</code></td>
<td style="text-align:left"><code v-pre>BOM DOM</code>都是宿主对象。</td>
<td style="text-align:left"><code v-pre>Global Math</code></td>
</tr>
</tbody>
</table>
<h3 id="_6-区别" tabindex="-1"><a class="header-anchor" href="#_6-区别" aria-hidden="true">#</a> 6.=== ==区别</h3>
<table>
<thead>
<tr>
<th style="text-align:left">===</th>
<th style="text-align:left">==</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">等同符，比较值和类型</td>
<td style="text-align:left">等值符，类型相同直接比值，类型不同会自动转化类型比较</td>
</tr>
</tbody>
</table>
<h3 id="_7-null-undefined区别" tabindex="-1"><a class="header-anchor" href="#_7-null-undefined区别" aria-hidden="true">#</a> 7.null undefined区别</h3>
<table>
<thead>
<tr>
<th style="text-align:left">null</th>
<th style="text-align:left">undefined</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">变量声明并定义,值为'空值'</td>
<td style="text-align:left">表示值不存在</td>
</tr>
</tbody>
</table>
<h3 id="_8-区分数组和对象" tabindex="-1"><a class="header-anchor" href="#_8-区分数组和对象" aria-hidden="true">#</a> 8.区分数组和对象</h3>
<ul>
<li>ES6的<code v-pre>Array.isArray()</code></li>
<li>instanceof</li>
<li>constructor</li>
<li><code v-pre>Object.prototype.toString.call()</code></li>
</ul>
<h3 id="_9-多维数组降维" tabindex="-1"><a class="header-anchor" href="#_9-多维数组降维" aria-hidden="true">#</a> 9.多维数组降维</h3>
<ul>
<li>数组字符串化<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">222</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">,</span> <span class="token number">444</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  arr <span class="token operator">+=</span> <span class="token string">''</span>
  arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>递归<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">reduceDimension</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> <span class="token function-variable function">toArr</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ar<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        el <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> <span class="token function">toArr</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">:</span> ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">toArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><code v-pre>Array.prototype.flat()</code><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 传入参数可以实现几维数组的降维，传入Infinity，展开任意维度的数组</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3, 4, [ 5, [ 6 ] ] ]</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3, 4, 5, [ 6 ] ]</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3, 4, 5, 6 ]</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ 1, 2, 3, 4, 5, 6 ]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_10-判断俩对象是否相等" tabindex="-1"><a class="header-anchor" href="#_10-判断俩对象是否相等" aria-hidden="true">#</a> 10.判断俩对象是否相等</h3>
<ul>
<li>ES6的<code v-pre>Object.is</code>，判断两个对象的引用地址是否一致</li>
<li>判断内容是否一致，遍历所有键名和键值是否一致<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 思路： </span>
  <span class="token comment">// 判断两个对象是否指向同一内存</span>
  <span class="token comment">// 使用Object.getOwnPropertyNames获取所有键名数组</span>
  <span class="token comment">// 判断两个键名数组是否相等</span>
  <span class="token comment">// 遍历键名，判断键值是否相等</span>
  <span class="token keyword">function</span> <span class="token function">isObjectValueEqual</span><span class="token punctuation">(</span><span class="token parameter">o1<span class="token punctuation">,</span> o2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 同一内存</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>o1 <span class="token operator">===</span> o2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token comment">// 获取键名数组</span>
    <span class="token keyword">let</span> oProp1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span>
    <span class="token keyword">let</span> oProp2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span>
    <span class="token comment">// 判断数组长度是否一致</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oProp1<span class="token punctuation">.</span>length <span class="token operator">!==</span> oProp2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token comment">// 遍历对象的键值</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> o1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 判断o1的键 ，在o2中是否存在</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断o1的键值是否为对象，是则递归，不是则直接判断是否相等</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> o1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObjectValueEqual</span><span class="token punctuation">(</span>o1<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> o2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>o1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> o2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_11-遍历对象的属性" tabindex="-1"><a class="header-anchor" href="#_11-遍历对象的属性" aria-hidden="true">#</a> 11.遍历对象的属性</h3>
<table>
<thead>
<tr>
<th style="text-align:left"><code v-pre>Object.keys()</code></th>
<th style="text-align:left"><code v-pre>Object.getOwnPropertyNames()</code></th>
<th style="text-align:left"><code v-pre>for...in</code></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">遍历自身可枚举属性（可枚举，非继承属性）</td>
<td style="text-align:left">遍历自身所有属性（可枚举，不可枚举，非继承属性）</td>
<td style="text-align:left">遍历可枚举的自身属性和继承属性（可枚举，可继承）<code v-pre>for...in </code>返回的key顺序与<code v-pre>Object.keys</code>一致，for in会枚举原型链上的属性</td>
</tr>
</tbody>
</table>
</div></template>
