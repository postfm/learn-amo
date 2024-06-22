module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset"
  ],
  plugins: [
    [
      'import',
      {
        libraryName: "ant-design-vue",
        librryDirectory: 'es',
        style: true
      },
      'ant-desing-vue'
    ],
    [
      'import',
      {
        libraryName: "@ant-design/icons-vue",
        librryDirectory: 'es/icons',
        camel2DashComponentName: false
      },
      'ant-desing-icons-vue'
    ]
  ]
}