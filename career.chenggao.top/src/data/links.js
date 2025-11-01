export const links = {
  personalWebsite: "https://life.chenggao.top",
  wechatPublic: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMTM4MzQ5Mw==&action=getalbum&album_id=4105509608708521990#wechat_redirect",
  github: "https://github.com/SAM-yuan-shan",
  resume: "/resume.pdf",
  projects: {
    bankRateSystem: "#",
    esgCrawler: "#",
    albertModel: "#",
    productQuery: "https://licai.chenggao.top",
    aiCardTool: "https://aicards.chenggao.top"
  },
  portfolio: {
    personalSite: "https://life.chenggao.top",
    aiCardTool: "https://aicards.chenggao.top",
    academicDrawings: "modal:academic-drawings",
    dataVisualization: "modal:data-visualization",
    wechatArticles: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkyMTM4MzQ5Mw==&action=getalbum&album_id=4105509608708521990#wechat_redirect",
    svgCards: "modal:svg-cards"
  },
  academic: {
    cuhkEmail: "mailto:15396631779@163.com",
    researchPapers: "#",
    competitionResults: "modal:competition-results"
  },
  internships: {
    szeri: "#",
    tianhong: "#",
    mijiahe: "#",
    gffutures: "#"
  }
}

export const getLinkType = (url) => {
  if (url.startsWith("mailto:")) {
    return { href: url, type: "email" }
  }
  if (url.startsWith("modal:")) {
    return { href: "#", type: "modal", modalId: url.replace("modal:", "") }
  }
  if (url.startsWith("http") || url.startsWith("https")) {
    return { href: url, type: "external", target: "_blank" }
  }
  if (url.startsWith("/") && url.includes(".pdf")) {
    return { href: url, type: "download", target: "_blank" }
  }
  if (url.startsWith("#")) {
    return { href: url, type: "internal" }
  }
  return { href: url, type: "external", target: "_blank" }
}