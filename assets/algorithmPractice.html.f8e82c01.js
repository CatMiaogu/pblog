import{_ as n,o as s,c as a,e}from"./app.53ffeb25.js";const p={},t=e(`<h1 id="\u7B97\u6CD5\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#\u7B97\u6CD5\u5B9E\u6218" aria-hidden="true">#</a> \u7B97\u6CD5\u5B9E\u6218</h1><h3 id="_1-\u6241\u5E73\u6570\u636E\u7ED3\u6784\u8F6Ctree" tabindex="-1"><a class="header-anchor" href="#_1-\u6241\u5E73\u6570\u636E\u7ED3\u6784\u8F6Ctree" aria-hidden="true">#</a> 1. \u6241\u5E73\u6570\u636E\u7ED3\u6784\u8F6CTree</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u793A\u4F8B</span>
 <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E81&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E82&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E83&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E84&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E85&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token comment">// \u8F93\u51FA</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E81&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E82&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u90E8\u95E83&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;pid&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;children&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// \u7ED3\u679C ,,,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1. \u9012\u5F52 \u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(2^n)</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getChildren</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> result<span class="token punctuation">,</span> pid</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>pid <span class="token operator">===</span> pid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newItem <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>item<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newItem<span class="token punctuation">)</span>
      <span class="token function">getChildren</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> newItem<span class="token punctuation">.</span>children<span class="token punctuation">,</span> item<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">arrayToTree</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> pid</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token function">getChildren</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> result<span class="token punctuation">,</span> pid<span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span>stringify
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">j</span><span class="token punctuation">(</span><span class="token function">arrayToTree</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. map \u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(2n)</strong></p><blockquote><p>\u4E3B\u8981\u601D\u8DEF\u662F\u5148\u628A\u6570\u636E\u8F6C\u6210Map\u53BB\u5B58\u50A8\uFF0C\u4E4B\u540E\u904D\u5386\u7684\u540C\u65F6\u501F\u52A9\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u76F4\u63A5\u4ECEMap\u627E\u5BF9\u5E94\u7684\u6570\u636E\u505A\u5B58\u50A8</p></blockquote><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const arrayToTree = (items) =&gt; {
  const result = []
  const itemMap = {}
  for (const item of items) {
    itemMap[item.id] = {...item, children:[]}
  }

  for (const item of items) {
    const id = item.id
    const pid = item.pid
    const treeItem = itemMap[id]
    if(pid === 0) {
      result.push(treeItem)
    } else {
      if(!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. map\u4EC5\u5FAA\u73AF\u4E00\u6B21 \u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(n)</strong></p><blockquote><p>\u533A\u522B\uFF1A\u5FAA\u73AF\u4E00\u6B21\u540C\u65F6\u5B58\u50A8map\u548C\u5904\u7406children</p></blockquote><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const arrayToTree = (items) =&gt; {
  const result = []
  const itemMap = {} 

  for (const item of items) {
    const id = item.id
    const pid = item.pid
    
    if(!itemMap[id]) {
      itemMap[id] = {
        children: []
      }
    }
    itemMap[id] = {
      ...item, children: itemMap[id][&#39;children&#39;]
    }

    const treeItem = itemMap[id]

    if(pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[t];function o(l,c){return s(),a("div",null,i)}var u=n(p,[["render",o],["__file","algorithmPractice.html.vue"]]);export{u as default};
