const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } =  require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    // webpack역할: js, img 등등의 파일들을 하나로 합쳐주는 번들러. 이 여러개의 모듈로 연결돼있는 시작점을 엔트리라고 함.
    main: "./src/app.js", // webpack에게 엔트리의 위치를 알려주면 연결 돼 있는 모든 모듈을 하나로 만들어줌.
  },
  output: {
    // 여러개의 모듈을 하나로 만들어서 저장시킬 위치. 결과물 : dist폴더 안에 main.js
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // css 파일에 대한 정규 표현식
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        use: [{ 
            loader: "file-loader",
            options: { 
                name: '[name].[ext]?[hash]' // 원본 파일의 이름과 확장자. 브라우저가 가지고 있는 이미지 캐시를 사용하지 않도록 처리함.
            }
        }],
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new CleanWebpackPlugin(), // output으로 설정 돼 있는 dist 폴더를 삭제하고 webpack을 돌림
  ]
};
