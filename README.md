# Contents_Management_System

## 项目代码和接口文件

https://gitee.com/wu-fei11/vue3-ts-cms-final/tree/master
https://documenter.getpostman.com/view/12347168/TzsfmQvw#6241f067-d7c4-4b1b-aebf-8c2d322813d3

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Project init setting tools

1. .editorconfig

2. .prettierrc
3. .prettierignore

```package.json
 "scripts": {
   //...
    "prettier": "prettier --write .",
},
```

```eslintrc.js
 extends: [
    //...
    "plugin:prettier/recommended",
  ],
```

4. husky

```
npx husky-init && npm install
```

```..husky\pre-commit
# 提交前执行eslint代码规范
npm run lint
```

5. commitizen

```
npm install commitizen -D
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

```package.json
 "scripts": {
   //...
    "commit": "cz"
},
```

6. commitlint

```
npm i @commitlint/config-conventional @commitlint/cli -D
```

```commitlint.config.js
// 用于拦截不规范的git commit -m "<不规范message>"
module.exports = {
  extends: ["@commitlint/config-conventional"]
}
```

```..husky\commit-msg
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# 用于拦截不规范的git commit -m "<不规范message>"
npx --no-install commitlint --edit
```

7. 修改 webpack 配置文件
   vue.config.js
