# 動画の元

`site/static/media/`に置いた動画（MP4）の元になるファイルです。動画は、HTMLとCSSで作ったアニメーションをヘッドレスブラウザで再生して録画し、ffmpegでMP4に変換して作っています。公開はされません（`site/static/`だけが公開される）。

## 作り方

`llm-wiki-flow.html`（AIエージェントが知識ベースを更新する流れ、約34秒）の例：

```
node site/media-src/record.js "$PWD/site/media-src/llm-wiki-flow.html" /tmp/vid 37000
ffmpeg -ss 1.0 -i /tmp/vid/*.webm -t 34 -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart -an site/static/media/llm-wiki-flow.mp4
ffmpeg -i /tmp/vid/poster.png -q:v 4 site/static/media/llm-wiki-flow-poster.jpg
```

- `record.js`はPlaywrightで1280×720の画面を録画する。三つ目の引数は録画する長さ（ミリ秒）。最後の画面を`poster.png`として保存する。
- 録画の始めの約1秒はページの読み込み中なので、`-ss`で切り落とす。
- Playwrightの場所は環境によって違うので、`record.js`の`require`を必要に応じて書き換える。
- 動画は数MB以内にする。字幕にあたる説明は、アニメーションの中に大きな文字で入れる（音声は入れない）。
