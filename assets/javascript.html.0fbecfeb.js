import{_ as n,o as s,c as a,e as t}from"./app.53ffeb25.js";const e={},p=t(`<h3 id="_1-javascript\u7684\u57FA\u672C\u7C7B\u578B-\u5F15\u7528\u7C7B\u578B-null\u548Cundefined\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-javascript\u7684\u57FA\u672C\u7C7B\u578B-\u5F15\u7528\u7C7B\u578B-null\u548Cundefined\u7684\u533A\u522B" aria-hidden="true">#</a> 1. JavaScript\u7684\u57FA\u672C\u7C7B\u578B\uFF1F\u5F15\u7528\u7C7B\u578B\uFF1Fnull\u548Cundefined\u7684\u533A\u522B?</h3><ul><li>\u57FA\u672C\u7C7B\u578B <code>Number String Boolean null undefined Symbol</code></li><li>\u5F15\u7528\u7C7B\u578B <code> Object Function Array</code></li><li>undefined \u53D8\u91CF\u58F0\u660E\u672A\u521D\u59CB\u5316\uFF1Bnull \u53D8\u91CF\u58F0\u660E\u5E76\u8D4B\u503C\u4E3Anull</li></ul><h3 id="_2-\u5224\u65ADjavascript\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-\u5224\u65ADjavascript\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 2. \u5224\u65ADJavaScript\u6570\u636E\u7C7B\u578B</h3><ul><li>typeof \u5224\u65ADnull \u4E3Aobject</li><li>instanceof \u5224\u65AD\u5F15\u7528\u7C7B\u578B</li><li><code>Object.prototype.toString</code></li></ul><h3 id="_3-\u521B\u5EFA\u51FD\u6570\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u51FD\u6570\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 3.\u521B\u5EFA\u51FD\u6570\u7684\u51E0\u79CD\u65B9\u5F0F</h3><ul><li>\u51FD\u6570\u58F0\u660E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">sum1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u51FD\u6570\u8868\u8FBE\u5F0F</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">sum1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-javascript\u521B\u5EFA\u5BF9\u8C61\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-javascript\u521B\u5EFA\u5BF9\u8C61\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 4.JavaScript\u521B\u5EFA\u5BF9\u8C61\u7684\u51E0\u79CD\u65B9\u5F0F</h3><ul><li>\u5BF9\u8C61\u5B57\u9762\u91CF</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  cat<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-javascript\u539F\u751F\u5BF9\u8C61\u53CA\u5BBF\u4E3B\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_5-javascript\u539F\u751F\u5BF9\u8C61\u53CA\u5BBF\u4E3B\u5BF9\u8C61" aria-hidden="true">#</a> 5.JavaScript\u539F\u751F\u5BF9\u8C61\u53CA\u5BBF\u4E3B\u5BF9\u8C61</h3><table><thead><tr><th style="text-align:left;">\u539F\u751F\u5BF9\u8C61</th><th style="text-align:left;">\u5BBF\u4E3B\u5BF9\u8C61</th><th style="text-align:left;">\u5185\u90E8\u5BF9\u8C61</th></tr></thead><tbody><tr><td style="text-align:left;">\u72EC\u7ACB\u4E8E\u5BBF\u4E3B\u73AF\u5883\u7684ECMScript\u5B9E\u73B0\u63D0\u4F9B\u7684\u5BF9\u8C61\uFF0C\u5305\u542B<code>Object Function Array String Boolean Date RegExp Error SyntaxError TypeError URIError</code></td><td style="text-align:left;"><code>BOM DOM</code>\u90FD\u662F\u5BBF\u4E3B\u5BF9\u8C61\u3002</td><td style="text-align:left;"><code>Global Math</code></td></tr></tbody></table><h3 id="_6-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_6-\u533A\u522B" aria-hidden="true">#</a> 6.=== ==\u533A\u522B</h3><table><thead><tr><th style="text-align:left;">===</th><th style="text-align:left;">==</th></tr></thead><tbody><tr><td style="text-align:left;">\u7B49\u540C\u7B26\uFF0C\u6BD4\u8F83\u503C\u548C\u7C7B\u578B</td><td style="text-align:left;">\u7B49\u503C\u7B26\uFF0C\u7C7B\u578B\u76F8\u540C\u76F4\u63A5\u6BD4\u503C\uFF0C\u7C7B\u578B\u4E0D\u540C\u4F1A\u81EA\u52A8\u8F6C\u5316\u7C7B\u578B\u6BD4\u8F83</td></tr></tbody></table><h3 id="_7-null-undefined\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_7-null-undefined\u533A\u522B" aria-hidden="true">#</a> 7.null undefined\u533A\u522B</h3><table><thead><tr><th style="text-align:left;">null</th><th style="text-align:left;">undefined</th></tr></thead><tbody><tr><td style="text-align:left;">\u53D8\u91CF\u58F0\u660E\u5E76\u5B9A\u4E49,\u503C\u4E3A&#39;\u7A7A\u503C&#39;</td><td style="text-align:left;">\u8868\u793A\u503C\u4E0D\u5B58\u5728</td></tr></tbody></table><h3 id="_8-\u533A\u5206\u6570\u7EC4\u548C\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_8-\u533A\u5206\u6570\u7EC4\u548C\u5BF9\u8C61" aria-hidden="true">#</a> 8.\u533A\u5206\u6570\u7EC4\u548C\u5BF9\u8C61</h3><ul><li>ES6\u7684<code>Array.isArray()</code></li><li>instanceof</li><li>constructor</li><li><code>Object.prototype.toString.call()</code></li></ul><h3 id="_9-\u591A\u7EF4\u6570\u7EC4\u964D\u7EF4" tabindex="-1"><a class="header-anchor" href="#_9-\u591A\u7EF4\u6570\u7EC4\u964D\u7EF4" aria-hidden="true">#</a> 9.\u591A\u7EF4\u6570\u7EC4\u964D\u7EF4</h3><ul><li>\u6570\u7EC4\u5B57\u7B26\u4E32\u5316<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">222</span><span class="token punctuation">,</span> <span class="token number">333</span><span class="token punctuation">,</span> <span class="token number">444</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  arr <span class="token operator">+=</span> <span class="token string">&#39;&#39;</span>
  arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u9012\u5F52<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">function</span> <span class="token function">reduceDimension</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> <span class="token function-variable function">toArr</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ar<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        el <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> <span class="token function">toArr</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">:</span> ret<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">toArr</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><code>Array.prototype.flat()</code><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// \u4F20\u5165\u53C2\u6570\u53EF\u4EE5\u5B9E\u73B0\u51E0\u7EF4\u6570\u7EC4\u7684\u964D\u7EF4\uFF0C\u4F20\u5165Infinity\uFF0C\u5C55\u5F00\u4EFB\u610F\u7EF4\u5EA6\u7684\u6570\u7EC4</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3, 4, [ 5, [ 6 ] ] ]</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3, 4, 5, [ 6 ] ]</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 1, 2, 3, 4, 5, 6 ]</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[ 1, 2, 3, 4, 5, 6 ]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_10-\u5224\u65AD\u4FE9\u5BF9\u8C61\u662F\u5426\u76F8\u7B49" tabindex="-1"><a class="header-anchor" href="#_10-\u5224\u65AD\u4FE9\u5BF9\u8C61\u662F\u5426\u76F8\u7B49" aria-hidden="true">#</a> 10.\u5224\u65AD\u4FE9\u5BF9\u8C61\u662F\u5426\u76F8\u7B49</h3><ul><li>ES6\u7684<code>Object.is</code>\uFF0C\u5224\u65AD\u4E24\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\u5730\u5740\u662F\u5426\u4E00\u81F4</li><li>\u5224\u65AD\u5185\u5BB9\u662F\u5426\u4E00\u81F4\uFF0C\u904D\u5386\u6240\u6709\u952E\u540D\u548C\u952E\u503C\u662F\u5426\u4E00\u81F4<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// \u601D\u8DEF\uFF1A </span>
  <span class="token comment">// \u5224\u65AD\u4E24\u4E2A\u5BF9\u8C61\u662F\u5426\u6307\u5411\u540C\u4E00\u5185\u5B58</span>
  <span class="token comment">// \u4F7F\u7528Object.getOwnPropertyNames\u83B7\u53D6\u6240\u6709\u952E\u540D\u6570\u7EC4</span>
  <span class="token comment">// \u5224\u65AD\u4E24\u4E2A\u952E\u540D\u6570\u7EC4\u662F\u5426\u76F8\u7B49</span>
  <span class="token comment">// \u904D\u5386\u952E\u540D\uFF0C\u5224\u65AD\u952E\u503C\u662F\u5426\u76F8\u7B49</span>
  <span class="token keyword">function</span> <span class="token function">isObjectValueEqual</span><span class="token punctuation">(</span><span class="token parameter">o1<span class="token punctuation">,</span> o2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u540C\u4E00\u5185\u5B58</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>o1 <span class="token operator">===</span> o2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token comment">// \u83B7\u53D6\u952E\u540D\u6570\u7EC4</span>
    <span class="token keyword">let</span> oProp1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span>
    <span class="token keyword">let</span> oProp2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span>
    <span class="token comment">// \u5224\u65AD\u6570\u7EC4\u957F\u5EA6\u662F\u5426\u4E00\u81F4</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oProp1<span class="token punctuation">.</span>length <span class="token operator">!==</span> oProp2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token comment">// \u904D\u5386\u5BF9\u8C61\u7684\u952E\u503C</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> o1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5224\u65ADo1\u7684\u952E \uFF0C\u5728o2\u4E2D\u662F\u5426\u5B58\u5728</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5224\u65ADo1\u7684\u952E\u503C\u662F\u5426\u4E3A\u5BF9\u8C61\uFF0C\u662F\u5219\u9012\u5F52\uFF0C\u4E0D\u662F\u5219\u76F4\u63A5\u5224\u65AD\u662F\u5426\u76F8\u7B49</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> o1<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_11-\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_11-\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027" aria-hidden="true">#</a> 11.\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027</h3><table><thead><tr><th style="text-align:left;"><code>Object.keys()</code></th><th style="text-align:left;"><code>Object.getOwnPropertyNames()</code></th><th style="text-align:left;"><code>for...in</code></th></tr></thead><tbody><tr><td style="text-align:left;">\u904D\u5386\u81EA\u8EAB\u53EF\u679A\u4E3E\u5C5E\u6027\uFF08\u53EF\u679A\u4E3E\uFF0C\u975E\u7EE7\u627F\u5C5E\u6027\uFF09</td><td style="text-align:left;">\u904D\u5386\u81EA\u8EAB\u6240\u6709\u5C5E\u6027\uFF08\u53EF\u679A\u4E3E\uFF0C\u4E0D\u53EF\u679A\u4E3E\uFF0C\u975E\u7EE7\u627F\u5C5E\u6027\uFF09</td><td style="text-align:left;">\u904D\u5386\u53EF\u679A\u4E3E\u7684\u81EA\u8EAB\u5C5E\u6027\u548C\u7EE7\u627F\u5C5E\u6027\uFF08\u53EF\u679A\u4E3E\uFF0C\u53EF\u7EE7\u627F\uFF09<code>for...in </code>\u8FD4\u56DE\u7684key\u987A\u5E8F\u4E0E<code>Object.keys</code>\u4E00\u81F4\uFF0Cfor in\u4F1A\u679A\u4E3E\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027</td></tr></tbody></table><h3 id="_12-\u9632\u6296\u548C\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#_12-\u9632\u6296\u548C\u8282\u6D41" aria-hidden="true">#</a> 12.\u9632\u6296\u548C\u8282\u6D41</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9632\u6296</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8282\u6D41</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> prev <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> context <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">let</span> args <span class="token operator">=</span> arguments
    <span class="token keyword">let</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> prev <span class="token operator">&gt;=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      prev <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-\u5C06\u6570\u5B57-12345678-\u8F6C\u5316\u6210-rmb-\u5F62\u5F0F-\u5982-12-345-678" tabindex="-1"><a class="header-anchor" href="#_13-\u5C06\u6570\u5B57-12345678-\u8F6C\u5316\u6210-rmb-\u5F62\u5F0F-\u5982-12-345-678" aria-hidden="true">#</a> 13. \u5C06\u6570\u5B57 12345678 \u8F6C\u5316\u6210 RMB \u5F62\u5F0F \u5982\uFF1A 12,345,678</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5148\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token number">12345678</span> <span class="token operator">+</span> <span class="token string">&#39;&#39;</span>
<span class="token comment">// \u5C01\u88C5\u4E00\u4E2A\u53CD\u8F6C\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// split(\u8F6C\u6362\u4E3A\u6570\u7EC4)  reverse(\u53CD\u8F6C\u6570\u7EC4) join(\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32)</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8C03\u7528\u53CD\u8F6C\u6570\u7EC4\u7684\u65B9\u6CD5</span>
str <span class="token operator">=</span> <span class="token function">res</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token comment">//\u6BCF\u4E09\u4F4D\u5B57\u7B26\u52A0\u4E00\u4E2A &#39;,&#39;\u7684\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">toRMB</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> rmb <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rmb <span class="token operator">+=</span> str<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">!=</span> str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rmb <span class="token operator">+=</span> <span class="token string">&#39;,&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> rmb
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">res</span><span class="token punctuation">(</span><span class="token function">toRMB</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12,345,678</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#_14-\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> 14. \u6570\u7EC4\u53BB\u91CD</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. ES6\u7684Set\u53BB\u91CD</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">unique</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">unique</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","javascript.html.vue"]]);export{r as default};
