

## 2023/01/13
Gitの使い方なんとなくOK
とりあえず開発始められるようになったので、諸々を調整していきます。
一応Node.jsで作ろうかなと思ってます。
まずはWebアプリで、のちにElectoronとか使えればいいかなと思います。
とは言っても、Webアプリにしちゃって、ラズパイとかで編集機ネットワークに繋げばそれで良い気がする。
→じゃあDocker使っても良いんじゃない？
→→ありよりのあり。
→→→CI/CDツールも使えるし、色々練習できそう。

ということで、ウェブアプリで作っていこー！
ウェブアプリならワンちゃんVISTAとかでも動く気がする。

まずは何から始めれば良いんだろう。
とりあえず、XML→JSONとJSON→XMLを実装する必要がある。

ぼちぼちとフロント機能を作っていかないといけない。

データベースも必要。

XML2JSONを使ってみる。
https://goat-inc.co.jp/blog/1688/

Git IgnoreでGit管理しないファイル・フォルダーを指定（除外する）
https://qiita.com/growsic/items/b2965c0ba3b0aaae1ff8


## 2023/01/16
これJSONにする必要ある？？？
→どのみちXMLを直接いじるわけにはいかないから、JSONにする必要はあるらしい。
XMLをオブジェクトに展開することをパースというらしい。
https://developer.mozilla.org/ja/docs/Web/Guide/Parsing_and_serializing_XML

DOMをいじることで、実質的には直接弄ってることになるらしいけど、今回はJSONに移行する。
そっちのほうがデータベースも作りやすいし、多分楽。

https://qiita.com/seigot/items/a19d15c75ab2f9478a0b

とりあえず、XML2JSして、JSONを書き出すことができた。
