import{_ as a,o as e,c as h,e as r}from"./app.53ffeb25.js";const d={},i=r('<h3 id="\u5B57\u8282\u4E00\u9762" tabindex="-1"><a class="header-anchor" href="#\u5B57\u8282\u4E00\u9762" aria-hidden="true">#</a> \u5B57\u8282\u4E00\u9762</h3><h4 id="_1-\u5E38\u7528\u7684http\u7801" tabindex="-1"><a class="header-anchor" href="#_1-\u5E38\u7528\u7684http\u7801" aria-hidden="true">#</a> 1. \u5E38\u7528\u7684http\u7801</h4><ol><li>200 \u63A5\u53E3\u6210\u529F</li><li>301 \u6C38\u4E45\u91CD\u5B9A\u5411</li><li>302 \u4E34\u65F6\u91CD\u5B9A\u5411</li><li>304 \u534F\u5546\u7F13\u5B58</li><li>400 bad request</li><li>403 Forbidden \u670D\u52A1\u5668\u7981\u6B62\u8BBF\u95EE</li><li>404 \u8D44\u6E90\u672A\u627E\u5230</li><li>500 \u670D\u52A1\u5668\u9519\u8BEF</li><li>502 Bad Gateway \u670D\u52A1\u5668\u81EA\u8EAB\u662F\u6B63\u5E38\u7684\uFF0C\u4F46\u8BBF\u95EE\u7684\u65F6\u5019\u51FA\u9519\u4E86</li><li>503 service unavailable \u670D\u52A1\u5668\u5F53\u524D\u5F88\u5FD9\uFF0C\u6682\u65F6\u65E0\u6CD5\u54CD\u5E94</li></ol><h4 id="_2-301\u548C302\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-301\u548C302\u7684\u533A\u522B" aria-hidden="true">#</a> 2. 301\u548C302\u7684\u533A\u522B</h4><ul><li>301\u6C38\u4E45\u91CD\u5B9A\u5411 \u6BD4\u5982\u7F51\u7AD9http\u5347\u7EA7\u4E3Ahttps\uFF0C\u65E7\u7AD9\u70B9\u4E0D\u518D\u4F7F\u7528\uFF0C\u5E94\u5F53\u8FD4\u56DE301\uFF0C\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4F1A\u505A\u7F13\u5B58\u4F18\u5316\uFF0C\u7B2C\u4E8C\u6B21\u8BBF\u95EE\u65F6\uFF0C\u81EA\u52A8\u8BBF\u95EE\u91CD\u5B9A\u5411\u7684\u5730\u5740</li><li>302\u4E34\u65F6\u91CD\u5B9A\u5411 \u6D4F\u89C8\u5668\u4E0D\u4F1A\u7F13\u5B58\u4F18\u5316</li></ul><h4 id="_3-\u524D\u7AEF\u8DEF\u7531\u600E\u4E48\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-\u524D\u7AEF\u8DEF\u7531\u600E\u4E48\u5B9E\u73B0" aria-hidden="true">#</a> 3. \u524D\u7AEF\u8DEF\u7531\u600E\u4E48\u5B9E\u73B0</h4><h4 id="_4-\u524D\u7AEF\u8DEF\u7531\u76F4\u63A5\u5237\u65B0404\u600E\u4E48\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_4-\u524D\u7AEF\u8DEF\u7531\u76F4\u63A5\u5237\u65B0404\u600E\u4E48\u5904\u7406" aria-hidden="true">#</a> 4. \u524D\u7AEF\u8DEF\u7531\u76F4\u63A5\u5237\u65B0404\u600E\u4E48\u5904\u7406</h4><h4 id="_5-\u4ECE\u524D\u7AEF\u5230\u540E\u7AEF\u5168\u94FE\u8DEF\u5982\u4F55\u8BBE\u8BA1\u4E00\u4E2A\u767B\u5F55\u7684\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_5-\u4ECE\u524D\u7AEF\u5230\u540E\u7AEF\u5168\u94FE\u8DEF\u5982\u4F55\u8BBE\u8BA1\u4E00\u4E2A\u767B\u5F55\u7684\u6D41\u7A0B" aria-hidden="true">#</a> 5. \u4ECE\u524D\u7AEF\u5230\u540E\u7AEF\u5168\u94FE\u8DEF\u5982\u4F55\u8BBE\u8BA1\u4E00\u4E2A\u767B\u5F55\u7684\u6D41\u7A0B</h4><h4 id="_6-\u4EC0\u4E48\u662F\u8DE8\u57DF-\u600E\u6837\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_6-\u4EC0\u4E48\u662F\u8DE8\u57DF-\u600E\u6837\u5904\u7406" aria-hidden="true">#</a> 6. \u4EC0\u4E48\u662F\u8DE8\u57DF\uFF1F\u600E\u6837\u5904\u7406</h4><h4 id="_7-\u7B80\u5355\u8BF7\u6C42\u548C\u590D\u6742\u8BF7\u6C42\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_7-\u7B80\u5355\u8BF7\u6C42\u548C\u590D\u6742\u8BF7\u6C42\u7684\u533A\u522B" aria-hidden="true">#</a> 7. \u7B80\u5355\u8BF7\u6C42\u548C\u590D\u6742\u8BF7\u6C42\u7684\u533A\u522B</h4><h4 id="_8-\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_8-\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u7B56\u7565" aria-hidden="true">#</a> 8. \u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u7B56\u7565</h4><h4 id="_9-domain\u5C5E\u6027\u89E3\u51B3\u8DE8\u57DF\u3001\u51E0\u79CDdomain\u8BBE\u7F6E\u5BF9\u8DE8\u57DF\u662F\u5426\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_9-domain\u5C5E\u6027\u89E3\u51B3\u8DE8\u57DF\u3001\u51E0\u79CDdomain\u8BBE\u7F6E\u5BF9\u8DE8\u57DF\u662F\u5426\u751F\u6548" aria-hidden="true">#</a> 9. domain\u5C5E\u6027\u89E3\u51B3\u8DE8\u57DF\u3001\u51E0\u79CDdomain\u8BBE\u7F6E\u5BF9\u8DE8\u57DF\u662F\u5426\u751F\u6548</h4><h4 id="_10-ts\u6CDB\u578B\u505A\u4EC0\u4E48\u7684-infer\u5173\u952E\u5B57\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_10-ts\u6CDB\u578B\u505A\u4EC0\u4E48\u7684-infer\u5173\u952E\u5B57\u7684\u4F5C\u7528" aria-hidden="true">#</a> 10. ts\u6CDB\u578B\u505A\u4EC0\u4E48\u7684\uFF0Cinfer\u5173\u952E\u5B57\u7684\u4F5C\u7528</h4><h3 id="\u5FEB\u624B\u5E7F\u5DDE\u4E8C\u9762" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u624B\u5E7F\u5DDE\u4E8C\u9762" aria-hidden="true">#</a> \u5FEB\u624B\u5E7F\u5DDE\u4E8C\u9762</h3><h4 id="_1-css\u7684\u76D2\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_1-css\u7684\u76D2\u6A21\u578B" aria-hidden="true">#</a> 1. css\u7684\u76D2\u6A21\u578B</h4><h4 id="_2-\u5B9E\u73B0\u52A8\u753B\u6709\u54EA\u4E9B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0\u52A8\u753B\u6709\u54EA\u4E9B\u65B9\u6CD5" aria-hidden="true">#</a> 2. \u5B9E\u73B0\u52A8\u753B\u6709\u54EA\u4E9B\u65B9\u6CD5</h4><h4 id="_3-\u6D4F\u89C8\u5668\u6E32\u67D3\u51FA\u4E00\u4E2A\u9875\u9762\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-\u6D4F\u89C8\u5668\u6E32\u67D3\u51FA\u4E00\u4E2A\u9875\u9762\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> 3. \u6D4F\u89C8\u5668\u6E32\u67D3\u51FA\u4E00\u4E2A\u9875\u9762\u7684\u8FC7\u7A0B</h4><h4 id="_4-\u9879\u76EE\u91CD\u6784\u5F00\u53D1\u5982\u4F55\u5E76\u884C" tabindex="-1"><a class="header-anchor" href="#_4-\u9879\u76EE\u91CD\u6784\u5F00\u53D1\u5982\u4F55\u5E76\u884C" aria-hidden="true">#</a> 4. \u9879\u76EE\u91CD\u6784\u5F00\u53D1\u5982\u4F55\u5E76\u884C</h4><h4 id="_5-\u9879\u76EE\u5DE5\u7A0B\u5316\u8FDB\u884C\u4E86\u54EA\u4E9B\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_5-\u9879\u76EE\u5DE5\u7A0B\u5316\u8FDB\u884C\u4E86\u54EA\u4E9B\u4F18\u5316" aria-hidden="true">#</a> 5. \u9879\u76EE\u5DE5\u7A0B\u5316\u8FDB\u884C\u4E86\u54EA\u4E9B\u4F18\u5316</h4><h4 id="_6-\u9879\u76EE\u4E2D\u7EE7\u7EED\u4F18\u5316\u4F1A\u4ECE\u54EA\u4E9B\u65B9\u9762\u53BB\u505A" tabindex="-1"><a class="header-anchor" href="#_6-\u9879\u76EE\u4E2D\u7EE7\u7EED\u4F18\u5316\u4F1A\u4ECE\u54EA\u4E9B\u65B9\u9762\u53BB\u505A" aria-hidden="true">#</a> 6. \u9879\u76EE\u4E2D\u7EE7\u7EED\u4F18\u5316\u4F1A\u4ECE\u54EA\u4E9B\u65B9\u9762\u53BB\u505A</h4><h4 id="_7-nodejs\u9879\u76EE\u7684\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_7-nodejs\u9879\u76EE\u7684\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> 7. nodejs\u9879\u76EE\u7684\u6027\u80FD\u4F18\u5316</h4><h4 id="_8-\u524D\u7AEF\u76D1\u63A7\u600E\u4E48\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_8-\u524D\u7AEF\u76D1\u63A7\u600E\u4E48\u5B9E\u73B0" aria-hidden="true">#</a> 8. \u524D\u7AEF\u76D1\u63A7\u600E\u4E48\u5B9E\u73B0</h4><h3 id="\u963F\u91CCp6\u4E00\u9762" tabindex="-1"><a class="header-anchor" href="#\u963F\u91CCp6\u4E00\u9762" aria-hidden="true">#</a> \u963F\u91CCP6\u4E00\u9762</h3><h4 id="_1-\u7B80\u5355\u7684\u81EA\u6211\u4ECB\u7ECD-\u9879\u76EE\u53CA\u6280\u672F\u6808" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u5355\u7684\u81EA\u6211\u4ECB\u7ECD-\u9879\u76EE\u53CA\u6280\u672F\u6808" aria-hidden="true">#</a> 1. \u7B80\u5355\u7684\u81EA\u6211\u4ECB\u7ECD\uFF0C\u9879\u76EE\u53CA\u6280\u672F\u6808</h4><h4 id="_2-react\u548Cvue\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-react\u548Cvue\u7684\u533A\u522B" aria-hidden="true">#</a> 2. react\u548Cvue\u7684\u533A\u522B</h4><h4 id="_3-diff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-diff\u7B97\u6CD5" aria-hidden="true">#</a> 3. diff\u7B97\u6CD5</h4><h4 id="_4-\u8BE6\u7EC6\u8BF4\u660E\u89C2\u5BDF\u8005\u6A21\u5F0F\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_4-\u8BE6\u7EC6\u8BF4\u660E\u89C2\u5BDF\u8005\u6A21\u5F0F\u5B9E\u73B0" aria-hidden="true">#</a> 4. \u8BE6\u7EC6\u8BF4\u660E\u89C2\u5BDF\u8005\u6A21\u5F0F\u5B9E\u73B0</h4><h4 id="_5-http\u62A5\u6587\u5934\u90E8\u6709\u54EA\u4E9B\u5B57\u6BB5-\u6709\u4EC0\u4E48\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#_5-http\u62A5\u6587\u5934\u90E8\u6709\u54EA\u4E9B\u5B57\u6BB5-\u6709\u4EC0\u4E48\u610F\u4E49" aria-hidden="true">#</a> 5. http\u62A5\u6587\u5934\u90E8\u6709\u54EA\u4E9B\u5B57\u6BB5\uFF1F\u6709\u4EC0\u4E48\u610F\u4E49\uFF1F</h4><h4 id="_6-\u79FB\u52A8\u7AEF\u9AD8\u6E05\u65B9\u6848\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_6-\u79FB\u52A8\u7AEF\u9AD8\u6E05\u65B9\u6848\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> 6. \u79FB\u52A8\u7AEF\u9AD8\u6E05\u65B9\u6848\u5982\u4F55\u89E3\u51B3</h4><h4 id="_7-webpack\u7684\u539F\u7406-loader\u548Cplugin\u662F\u5E72\u4EC0\u4E48\u7684-\u6709\u81EA\u5DF1\u5199\u8FC7\u5417" tabindex="-1"><a class="header-anchor" href="#_7-webpack\u7684\u539F\u7406-loader\u548Cplugin\u662F\u5E72\u4EC0\u4E48\u7684-\u6709\u81EA\u5DF1\u5199\u8FC7\u5417" aria-hidden="true">#</a> 7. webpack\u7684\u539F\u7406\uFF0Cloader\u548Cplugin\u662F\u5E72\u4EC0\u4E48\u7684\uFF1F\u6709\u81EA\u5DF1\u5199\u8FC7\u5417\uFF1F</h4><h4 id="_8-\u7B80\u8FF0\u4ECE\u7F51\u9875\u8F93\u5165url\u5230\u7F51\u9875\u5C55\u793A\u7684\u8FC7\u7A0B\u53D1\u751F\u4E86\u54EA\u4E9B\u4E8B\u60C5" tabindex="-1"><a class="header-anchor" href="#_8-\u7B80\u8FF0\u4ECE\u7F51\u9875\u8F93\u5165url\u5230\u7F51\u9875\u5C55\u793A\u7684\u8FC7\u7A0B\u53D1\u751F\u4E86\u54EA\u4E9B\u4E8B\u60C5" aria-hidden="true">#</a> 8. \u7B80\u8FF0\u4ECE\u7F51\u9875\u8F93\u5165URL\u5230\u7F51\u9875\u5C55\u793A\u7684\u8FC7\u7A0B\u53D1\u751F\u4E86\u54EA\u4E9B\u4E8B\u60C5\uFF1F</h4><h4 id="_9-ssr\u548C\u5BA2\u6237\u7AEF\u6E32\u67D3\u6709\u4EC0\u4E48\u533A\u522B-vue\u5982\u4F55\u5B9E\u73B0\u7ED1\u5B9A\u4E8B\u4EF6\u7684" tabindex="-1"><a class="header-anchor" href="#_9-ssr\u548C\u5BA2\u6237\u7AEF\u6E32\u67D3\u6709\u4EC0\u4E48\u533A\u522B-vue\u5982\u4F55\u5B9E\u73B0\u7ED1\u5B9A\u4E8B\u4EF6\u7684" aria-hidden="true">#</a> 9. SSR\u548C\u5BA2\u6237\u7AEF\u6E32\u67D3\u6709\u4EC0\u4E48\u533A\u522B\uFF1Fvue\u5982\u4F55\u5B9E\u73B0\u7ED1\u5B9A\u4E8B\u4EF6\u7684\uFF1F</h4><h4 id="_10-\u516C\u53F8node\u67B6\u6784\u4E2D\u5BB9\u707E\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_10-\u516C\u53F8node\u67B6\u6784\u4E2D\u5BB9\u707E\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 10. \u516C\u53F8node\u67B6\u6784\u4E2D\u5BB9\u707E\u7684\u5B9E\u73B0\uFF1F</h4><h4 id="_11-\u6D4F\u89C8\u5668\u4E8B\u4EF6\u6709\u54EA\u4E9B\u8FC7\u7A0B-\u4E3A\u4EC0\u4E48\u4E00\u822C\u5728\u5192\u6CE1\u9636\u6BB5-\u800C\u4E0D\u662F\u5728\u6355\u83B7\u9636\u6BB5\u6CE8\u518C\u76D1\u542C-addeventlistener\u53C2\u6570\u5206\u522B\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_11-\u6D4F\u89C8\u5668\u4E8B\u4EF6\u6709\u54EA\u4E9B\u8FC7\u7A0B-\u4E3A\u4EC0\u4E48\u4E00\u822C\u5728\u5192\u6CE1\u9636\u6BB5-\u800C\u4E0D\u662F\u5728\u6355\u83B7\u9636\u6BB5\u6CE8\u518C\u76D1\u542C-addeventlistener\u53C2\u6570\u5206\u522B\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 11. \u6D4F\u89C8\u5668\u4E8B\u4EF6\u6709\u54EA\u4E9B\u8FC7\u7A0B\uFF1F\u4E3A\u4EC0\u4E48\u4E00\u822C\u5728\u5192\u6CE1\u9636\u6BB5\uFF0C\u800C\u4E0D\u662F\u5728\u6355\u83B7\u9636\u6BB5\u6CE8\u518C\u76D1\u542C\uFF1FaddEventListener\u53C2\u6570\u5206\u522B\u662F\u4EC0\u4E48\uFF1F</h4><h4 id="_12-\u9762\u5411\u5BF9\u8C61\u5982\u4F55\u5B9E\u73B0-\u9700\u8981\u590D\u7528\u7684\u53D8\u91CF\u600E\u4E48\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_12-\u9762\u5411\u5BF9\u8C61\u5982\u4F55\u5B9E\u73B0-\u9700\u8981\u590D\u7528\u7684\u53D8\u91CF\u600E\u4E48\u5904\u7406" aria-hidden="true">#</a> 12. \u9762\u5411\u5BF9\u8C61\u5982\u4F55\u5B9E\u73B0\uFF1F\u9700\u8981\u590D\u7528\u7684\u53D8\u91CF\u600E\u4E48\u5904\u7406\uFF1F</h4><h4 id="_13-\u79FB\u52A8\u7AEF300ms\u5EF6\u65F6\u7684\u539F\u56E0-\u5982\u4F55\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_13-\u79FB\u52A8\u7AEF300ms\u5EF6\u65F6\u7684\u539F\u56E0-\u5982\u4F55\u5904\u7406" aria-hidden="true">#</a> 13. \u79FB\u52A8\u7AEF300ms\u5EF6\u65F6\u7684\u539F\u56E0\uFF1F\u5982\u4F55\u5904\u7406\uFF1F</h4><h4 id="_14-\u4E3B\u6D41\u6846\u67B6\u7684\u6570\u636E\u5355\u5411-\u53CC\u5411\u7ED1\u5B9A\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_14-\u4E3B\u6D41\u6846\u67B6\u7684\u6570\u636E\u5355\u5411-\u53CC\u5411\u7ED1\u5B9A\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 14. \u4E3B\u6D41\u6846\u67B6\u7684\u6570\u636E\u5355\u5411/\u53CC\u5411\u7ED1\u5B9A\u5B9E\u73B0\u539F\u7406\uFF1F</h4><h4 id="_15-\u4F60\u89C9\u5F97\u81EA\u5DF1\u5728\u524D\u7AEF\u5DE5\u4F5C\u7684\u6700\u5927\u4F18\u70B9\u662F\u4EC0\u4E48-\u62FF\u5B9E\u9645\u5DE5\u4F5C\u5185\u5BB9\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_15-\u4F60\u89C9\u5F97\u81EA\u5DF1\u5728\u524D\u7AEF\u5DE5\u4F5C\u7684\u6700\u5927\u4F18\u70B9\u662F\u4EC0\u4E48-\u62FF\u5B9E\u9645\u5DE5\u4F5C\u5185\u5BB9\u4E3E\u4F8B" aria-hidden="true">#</a> 15. \u4F60\u89C9\u5F97\u81EA\u5DF1\u5728\u524D\u7AEF\u5DE5\u4F5C\u7684\u6700\u5927\u4F18\u70B9\u662F\u4EC0\u4E48\uFF1F\u62FF\u5B9E\u9645\u5DE5\u4F5C\u5185\u5BB9\u4E3E\u4F8B</h4><h3 id="\u5174\u4E1A\u6570\u91D1\u4E00\u9762" tabindex="-1"><a class="header-anchor" href="#\u5174\u4E1A\u6570\u91D1\u4E00\u9762" aria-hidden="true">#</a> \u5174\u4E1A\u6570\u91D1\u4E00\u9762</h3><h4 id="_1-\u7B80\u5355\u7684\u81EA\u6211\u4ECB\u7ECD-\u9879\u76EE\u53CA\u6280\u672F\u6808-1" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u5355\u7684\u81EA\u6211\u4ECB\u7ECD-\u9879\u76EE\u53CA\u6280\u672F\u6808-1" aria-hidden="true">#</a> 1. \u7B80\u5355\u7684\u81EA\u6211\u4ECB\u7ECD\uFF0C\u9879\u76EE\u53CA\u6280\u672F\u6808</h4><h4 id="_2-\u8F93\u5165url\u5230\u663E\u793A\u6574\u4E2A\u9875\u9762\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-\u8F93\u5165url\u5230\u663E\u793A\u6574\u4E2A\u9875\u9762\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> 2. \u8F93\u5165URL\u5230\u663E\u793A\u6574\u4E2A\u9875\u9762\u7684\u8FC7\u7A0B</h4><h4 id="_3-css\u4F1A\u963B\u585Edom\u5417" tabindex="-1"><a class="header-anchor" href="#_3-css\u4F1A\u963B\u585Edom\u5417" aria-hidden="true">#</a> 3. CSS\u4F1A\u963B\u585EDOM\u5417</h4><h4 id="_4-\u4ECB\u7ECD\u4E00\u4E0B\u76D2\u5B50\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_4-\u4ECB\u7ECD\u4E00\u4E0B\u76D2\u5B50\u6A21\u578B" aria-hidden="true">#</a> 4. \u4ECB\u7ECD\u4E00\u4E0B\u76D2\u5B50\u6A21\u578B</h4><h4 id="_5-\u5F39\u6027\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_5-\u5F39\u6027\u5E03\u5C40" aria-hidden="true">#</a> 5. \u5F39\u6027\u5E03\u5C40</h4><h4 id="_6-\u4ECB\u7ECD\u4E00\u4E0B\u4E8B\u4EF6\u5FAA\u73AF-\u6709\u54EA\u4E9B\u5F02\u6B65\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_6-\u4ECB\u7ECD\u4E00\u4E0B\u4E8B\u4EF6\u5FAA\u73AF-\u6709\u54EA\u4E9B\u5F02\u6B65\u65B9\u6CD5" aria-hidden="true">#</a> 6. \u4ECB\u7ECD\u4E00\u4E0B\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u6709\u54EA\u4E9B\u5F02\u6B65\u65B9\u6CD5</h4><h4 id="_7-promise\u548Cawait\u3001async\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_7-promise\u548Cawait\u3001async\u7684\u533A\u522B" aria-hidden="true">#</a> 7. promise\u548Cawait\u3001async\u7684\u533A\u522B</h4><h4 id="_8-webpack\u6253\u5305\u7684\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_8-webpack\u6253\u5305\u7684\u6D41\u7A0B" aria-hidden="true">#</a> 8. webpack\u6253\u5305\u7684\u6D41\u7A0B</h4><h4 id="_9-vue\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_9-vue\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 9. vue\u751F\u547D\u5468\u671F</h4><h4 id="_10-vue\u7684nexttick" tabindex="-1"><a class="header-anchor" href="#_10-vue\u7684nexttick" aria-hidden="true">#</a> 10. vue\u7684nextTick</h4><h4 id="_11-vue\u7684diff\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_11-vue\u7684diff\u7B97\u6CD5" aria-hidden="true">#</a> 11. vue\u7684diff\u7B97\u6CD5</h4><h4 id="_12-\u5B66\u8FC7\u54EA\u4E9B\u8BBE\u8BA1\u6A21\u5F0F\u4EE5\u53CA\u5BF9\u8BBE\u8BA1\u6A21\u5F0F\u7684\u7406\u89E3-vue\u6E90\u7801\u7528\u5230\u4E86\u54EA\u4E9B\u6D89\u53CA\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_12-\u5B66\u8FC7\u54EA\u4E9B\u8BBE\u8BA1\u6A21\u5F0F\u4EE5\u53CA\u5BF9\u8BBE\u8BA1\u6A21\u5F0F\u7684\u7406\u89E3-vue\u6E90\u7801\u7528\u5230\u4E86\u54EA\u4E9B\u6D89\u53CA\u6A21\u5F0F" aria-hidden="true">#</a> 12. \u5B66\u8FC7\u54EA\u4E9B\u8BBE\u8BA1\u6A21\u5F0F\u4EE5\u53CA\u5BF9\u8BBE\u8BA1\u6A21\u5F0F\u7684\u7406\u89E3\uFF0CVUE\u6E90\u7801\u7528\u5230\u4E86\u54EA\u4E9B\u6D89\u53CA\u6A21\u5F0F</h4><h4 id="_13-\u4E86\u89E3\u8FC7\u4EE3\u7801\u98CE\u683C\u5417-\u770B\u8FC7\u54EA\u4E9B\u4EE3\u7801\u98CE\u683C\u7684\u4E66-\u4EC0\u4E48\u6837\u7684\u4EE3\u7801\u662F\u597D\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_13-\u4E86\u89E3\u8FC7\u4EE3\u7801\u98CE\u683C\u5417-\u770B\u8FC7\u54EA\u4E9B\u4EE3\u7801\u98CE\u683C\u7684\u4E66-\u4EC0\u4E48\u6837\u7684\u4EE3\u7801\u662F\u597D\u4EE3\u7801" aria-hidden="true">#</a> 13. \u4E86\u89E3\u8FC7\u4EE3\u7801\u98CE\u683C\u5417\uFF0C\u770B\u8FC7\u54EA\u4E9B\u4EE3\u7801\u98CE\u683C\u7684\u4E66\uFF0C\u4EC0\u4E48\u6837\u7684\u4EE3\u7801\u662F\u597D\u4EE3\u7801</h4>',52),n=[i];function t(s,c){return e(),h("div",null,n)}var l=a(d,[["render",t],["__file","interview-from-online.html.vue"]]);export{l as default};