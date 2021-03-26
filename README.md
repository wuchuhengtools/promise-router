<h1 align="center"> 路由解析器 </h1>

[![Build Status](https://travis-ci.org/wuchuhengtools/promise-router.svg?branch=master)](https://travis-ci.org/wuchuhengtools/promise-router)
[![codecov](https://codecov.io/gh/wuchuhengtools/promise-router/branch/master/graph/badge.svg?token=EDF42SJ22M)](https://codecov.io/gh/wuchuhengtools/promise-router)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwuchuhengtools%2Fpromise-router.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwuchuhengtools%2Fpromise-router?ref=badge_shield)

## Installing

```shell
$ npm i @wuchuhengtools/promise-router
```

## Usage

``` typescript
import router from '@wuchuhengtools/promise-router'
// ...
router('/me/devices/:id/files/:fileId', '/me/devices/11111/files/22222').then(e => {
    console.log(e) // { "routeParams": { "id": "sdfasdfadsfasd", "fileId": "22222" } 
})
```
## Contributing

You can contribute in one of three ways:

1. File bug reports using the [issue tracker](https://github.com/wuchuhengtools/promise-router/issues).
2. Answer questions or fix bugs on the [issue tracker](https://github.com/wuchuhengtools/promise-router/issues).
3. Contribute new features or update the wiki.

_The code contribution process is not very formal. You just need to make sure that you follow the PSR-0, PSR-1, and PSR-2 coding guidelines. Any new code contributions must be accompanied by unit tests where applicable._

## License

MIT