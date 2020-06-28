// Eslint 支持多种格式的配置文件，优先级如下：
// 1、 .eslintrc.js
// 2、 .eslintrc.yaml
// 3、 .eslintrc.yml
// 4、 .eslintrc.json
// 5、 .eslintrc
// 6、 package.json

// extends: "eslint:recommended" ==> https://cn.eslint.org/docs/user-guide/getting-started

// extends属性值可以省略包名的前缀 eslint-config-
// 比如，eslint-config-react-app: extends
// https://cn.eslint.org/docs/developer-guide/shareable-configs
// https://www.npmjs.com/package/eslint-config-react-app

// 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
// 比如，eslint-plugin-react-hooks: plugins 属性值可以省略包名的前缀 eslint-plugin-
// https://cn.eslint.org/docs/user-guide/configuring



module.exports = {
    // 一个配置文件可以被基础配置中的已启用的规则继承。
    "extends": [
        "react-app",
        "plugin:jsx-a11y/recommended",
        // "plugin:@typescript-eslint/recommended",
        // "prettier/@typescript-eslint", // 可选 // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended" // 重点 // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    "plugins": ["jsx-a11y"],
    "rules": {
        // "规则名": [规则值, 规则配置]
        // "off"或者0     //关闭规则关闭
        // "warn"或者1    //在打开的规则作为警告（不影响退出代码）
        // "error"或者2   //把规则作为一个错误（退出代码触发时为1）
        // 自定义你的规则,https://eslint.bootcss.com/docs/rules/ 可以查找规则
        // "no-debugger": 1,//比如发现debugger时只是警告，不要报错
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    }
}
