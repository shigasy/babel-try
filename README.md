# babel-try

- babelは構文処理のみでES5などにtranceパイル。ブラウザによって対応するものはpolyfillが必要。（Promiseなど）
- polyfillでIE11に対応。
- BrowserifyでcommonJSをブラウザで読み込める形に変換