export const data = JSON.parse("{\"key\":\"v-2d0ad528\",\"path\":\"/zh/\",\"title\":\"测试\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1657247199000,\"contributors\":[{\"name\":\"赵涛\",\"email\":\"zhaotao@reyun.com\",\"commits\":1}]},\"filePathRelative\":\"zh/README.md\"}")

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
