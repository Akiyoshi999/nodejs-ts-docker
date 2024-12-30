## メモ

1. Docker Build 時、intel(x86)を指定しないとエラーが発生した。以下のコマンドで実施後、成功するようになった。

   ```
   docker buildx build --platform=linux/amd64  -t cdk-express -f Dockerfile.backend .
   ```

   これでもいけるかも？

   ```
   docker build -t cdk-express -f Dockerfile.backend . --platform linux/amd64
   ```
