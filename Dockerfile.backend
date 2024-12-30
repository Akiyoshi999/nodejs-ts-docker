# Node.js 18 の公式イメージを基にする
FROM node:18

COPY . /usr/src/app
# 作業ディレクトリを設定
WORKDIR /usr/src/app

# パッケージのインストール
RUN npm install 

EXPOSE 3000

CMD [ "npm","run","start" ]