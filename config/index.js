export default {
    development: {
        cdn: './',
        apiBaseUrl: '/api' // 开发环境接口请求，后用于 proxy 代理配置
    },
    beta: {
        cdn: './', // 测试环境 cdn 路径
        apiBaseUrl: '/api' // 测试环境接口地址
    },
    release: {
        cdn: './', // 正式环境 cdn 路径
        apiBaseUrl: 'https://cjjapi.fuzhouxiaoyu.com' // 正式环境接口地址
    }
}
