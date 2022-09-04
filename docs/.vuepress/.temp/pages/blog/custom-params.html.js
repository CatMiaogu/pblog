export const data = JSON.parse("{\"key\":\"v-2dbdd1aa\",\"path\":\"/blog/custom-params.html\",\"title\":\"额外参数\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"额外参数\",\"description\":\"组件默认参数外传入自定义参数\"},\"excerpt\":\"\",\"headers\":[{\"level\":3,\"title\":\"拓展组件方法默认参数\",\"slug\":\"拓展组件方法默认参数\",\"children\":[]}],\"git\":{\"updatedTime\":1657247199000,\"contributors\":[{\"name\":\"赵涛\",\"email\":\"zhaotao@reyun.com\",\"commits\":1}]},\"filePathRelative\":\"blog/custom-params.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
