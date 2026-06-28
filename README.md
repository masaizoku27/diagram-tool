# 図解ツクール

## ローカルで動作確認する

```
npm install
npm run dev
```

## GitHub Pagesに公開する手順

1. GitHubで新しいリポジトリを作る（例: `diagram-tool`）。Public/Privateどちらでも無料で使えるが、Pages機能自体はPrivateリポジトリでも無料プランで使える。

2. リポジトリ名が `diagram-tool` 以外の場合、`vite.config.js` の `base` をリポジトリ名に合わせて書き換える。

   ```js
   base: "/作ったリポジトリ名/",
   ```

3. このフォルダの中身をそのリポジトリにpushする。

   ```
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/ユーザー名/diagram-tool.git
   git push -u origin main
   ```

4. GitHubのリポジトリページで `Settings` → `Pages` を開き、`Build and deployment` の `Source` を `GitHub Actions` に設定する。

5. `main` ブランチにpushすると、`.github/workflows/deploy.yml` が自動的にビルドしてGitHub Pagesに公開する。`Actions` タブで進行状況を確認できる。

6. 数分後、`https://ユーザー名.github.io/diagram-tool/` でアクセスできるようになる。

## OGP（SNSでのリンク表示）について

`index.html` にOGP用のメタタグを設定済み。`public/ogp.png` がリンク共有時に表示される画像。

画像を変更したい場合は `public/ogp.png` を別の画像に置き換える（1200×630px推奨）。タイトルや説明文を変えたい場合は `index.html` 内の `og:title` ・`og:description` ・`twitter:title` ・`twitter:description` を書き換える。

リポジトリ名やユーザー名を変えた場合は、`index.html` 内の `og:url` ・`og:image` ・`twitter:image` のURLも合わせて変更すること。



- 無料のGitHub Pagesは静的ファイルのホスティングのみ。今回のアプリはブラウザ内だけで完結するReactアプリなので、これで問題なく動く。
- 今後コードを更新したら、再度 `git add` → `git commit` → `git push` するだけで自動的に再公開される。
