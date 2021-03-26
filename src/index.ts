const router = (route: string, url: string): Promise<MainFunction.RouterResType> => {
   return new Promise<MainFunction.RouterResType>((resolve, reject) => {
       const regex = /:([^\/]+)/gm;
       let m;
       type KeywordsType = Array<string>
       let keywords: KeywordsType = [];
       while ((m = regex.exec(route)) !== null) {
           keywords.push(m[1])
       }
       route = route.replace(/\//g, '\\\/');
       route = route.replace(/:[^\/|^\\]+/g, '([^\\\/|^\\?]+)')
       const rule = `^${route}$`
       const routePreg = new RegExp(rule, 'i')
       if (!routePreg.test(url)) {
           return reject("the route was't matched")
       }
       m = routePreg.exec(url) as Array<string>
       const res : Record<string,string> = {};
       m.slice(1).forEach((e, i) => {
           res[keywords[i]] = e
       })
       resolve({routeParams: res})
   })
}

export default router;