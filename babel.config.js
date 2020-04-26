const presets = [
  [
    // preset-env 指定したブラウザやNodeのバージョンに合わせてネイティブサポートしていない文法のみ変換
    "@babel/env",
    {
      targets: {
        ie: 11,
      },
      // usageにすることで必要なpolyfillだけをimportするように
      useBuiltIns: "usage",
      corejs: 3
    },
  ],
];
module.exports = { presets };
