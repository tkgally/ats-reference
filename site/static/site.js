// ATSガイドのスクリプト：メニュー、表示の切り替え、サイト内検索、体験コーナー（demo）
(function () {
  "use strict";
  var root = document.body.getAttribute("data-root") || "./";

  // ---------------------------------------------------------------- メニュー（スマートフォン）
  var menuButton = document.querySelector(".menu-button");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!document.body.classList.contains("menu-open")) return;
      if (e.target.closest(".sidebar") || e.target.closest(".menu-button")) return;
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  }
  var current = document.querySelector(".sidebar a.current");
  if (current && current.scrollIntoView) current.scrollIntoView({ block: "center" });
  window.scrollTo(0, 0);

  // ---------------------------------------------------------------- 明るい表示／暗い表示
  var themeButton = document.querySelector(".theme-button");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var el = document.documentElement;
      var dark = el.dataset.theme ? el.dataset.theme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      el.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("ats-theme", el.dataset.theme); } catch (e) {}
    });
  }

  // ---------------------------------------------------------------- サイト内検索
  var input = document.getElementById("search-input");
  if (input) {
    var status = document.getElementById("search-status");
    var list = document.getElementById("search-results");
    var data = null;
    status.textContent = "索引を読み込んでいます…";
    fetch(root + "search-index.json").then(function (r) { return r.json(); }).then(function (d) {
      data = d;
      status.textContent = "言葉を入力すると、解説ページとWikiから探します。";
      var q = new URLSearchParams(location.search).get("q");
      if (q) { input.value = q; run(); }
    }).catch(function () { status.textContent = "索引を読み込めませんでした。"; });

    var esc = function (s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
    var norm = function (s) { return s.normalize("NFKC").toLowerCase(); };
    var run = function () {
      if (!data) return;
      var terms = norm(input.value).split(/\s+/).filter(Boolean);
      list.innerHTML = "";
      if (!terms.length) { status.textContent = "言葉を入力すると、解説ページとWikiから探します。"; return; }
      var hits = [];
      data.forEach(function (p) {
        var t = norm(p.t), x = norm(p.x), score = 0;
        for (var i = 0; i < terms.length; i++) {
          var inT = t.indexOf(terms[i]) >= 0, inX = x.indexOf(terms[i]) >= 0;
          if (!inT && !inX) return;
          score += (inT ? 10 : 0) + (inX ? 1 : 0) + (x.split(terms[i]).length - 1) * 0.1;
        }
        if (p.k === "解説") score += 0.5;
        hits.push({ p: p, score: score });
      });
      hits.sort(function (a, b) { return b.score - a.score; });
      status.textContent = hits.length ? hits.length + "件見つかりました。" : "見つかりませんでした。別の言い方でも試してください。";
      hits.slice(0, 50).forEach(function (h) {
        var p = h.p, x = p.x, nx = norm(x), pos = nx.indexOf(terms[0]);
        var start = Math.max(0, pos - 40), snippet = x.slice(start, start + 120);
        var html = esc(snippet);
        terms.forEach(function (term) {
          var re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
          html = html.replace(re, function (m) { return "<mark>" + m + "</mark>"; });
        });
        var li = document.createElement("li");
        li.innerHTML = '<span class="tag">' + esc(p.k) + '</span><a href="' + root + p.u + '">' + esc(p.t) + "</a><p>" + (start > 0 ? "…" : "") + html + "…</p>";
        list.appendChild(li);
      });
    };
    input.addEventListener("input", run);
  }

  // ---------------------------------------------------------------- コードの「コピー」ボタン
  document.querySelectorAll(".prose pre").forEach(function (pre) {
    if (!navigator.clipboard) return;
    var wrap = document.createElement("div");
    wrap.className = "pre-wrap";
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    var b = document.createElement("button");
    b.type = "button"; b.className = "copy-button"; b.textContent = "コピー";
    b.addEventListener("click", function () {
      navigator.clipboard.writeText(pre.innerText).then(function () {
        b.textContent = "コピーしました";
        setTimeout(function () { b.textContent = "コピー"; }, 1600);
      }, function () { b.textContent = "コピーできません"; });
    });
    wrap.appendChild(b);
  });

  // ---------------------------------------------------------------- 体験コーナー
  var demos = {
    // 次の言葉の予測：生成AIが一語ずつ確率で選んで文を作るようすを見せる
    "next-token": function (el) {
      var steps = [
        { ctx: "今日は天気が", cands: [["よい", 0.46], ["悪い", 0.21], ["晴れ", 0.14], ["いい", 0.12], ["雨", 0.07]] },
        { ctx: "今日は天気がよい", cands: [["ので", 0.41], ["。", 0.27], ["から", 0.18], ["けれど", 0.09], ["日", 0.05]] },
        { ctx: "今日は天気がよいので", cands: [["散歩", 0.38], ["洗濯", 0.24], ["公園", 0.19], ["海", 0.11], ["勉強", 0.08]] },
        { ctx: "今日は天気がよいので散歩", cands: [["に", 0.62], ["を", 0.2], ["し", 0.12], ["して", 0.04], ["が", 0.02]] },
        { ctx: "今日は天気がよいので散歩に", cands: [["行き", 0.55], ["出かけ", 0.33], ["行こ", 0.08], ["出", 0.03], ["来", 0.01]] },
        { ctx: "今日は天気がよいので散歩に行き", cands: [["ます", 0.48], ["たい", 0.36], ["まし", 0.1], ["ましょう", 0.05], ["そう", 0.01]] }
      ];
      var i = 0, temp = 1, ended = false;
      el.innerHTML = '<p class="demo-title">体験：AIは次の言葉をどう選ぶ？</p>' +
        '<p class="nt-text" style="font-size:1.25em;margin:.4em 0"></p>' +
        '<div class="nt-bars"></div>' +
        '<div class="controls"><button class="primary nt-next">次の言葉を選ぶ</button><button class="nt-reset">最初から</button>' +
        '<label style="display:flex;align-items:center;gap:6px;font-size:14px">温度（ランダムさ）<input class="nt-temp" type="range" min="0" max="2" step="0.1" value="1"><span class="nt-tv">1.0</span></label></div>' +
        '<p class="muted nt-note" style="font-size:14px;margin:0">確率は説明のための架空の数字です。「温度」を上げると、確率の低い言葉も選ばれやすくなります。</p>';
      var text = el.querySelector(".nt-text"), bars = el.querySelector(".nt-bars");
      var chosen = "今日は天気が";
      var colors = ["var(--c-blue)", "var(--c-green)", "var(--c-orange)", "var(--c-purple)", "var(--c-teal)"];
      var weights = function (c) {
        if (temp < 0.05) return c.map(function (x, k) { return k === 0 ? 1 : 0; });
        var w = c.map(function (x) { return Math.pow(x[1], 1 / temp); });
        var s = w.reduce(function (a, b) { return a + b; }, 0);
        return w.map(function (x) { return x / s; });
      };
      var draw = function () {
        text.innerHTML = '<span>' + chosen + '</span><span style="color:var(--muted)">▍</span>';
        bars.innerHTML = "";
        if (i >= steps.length) {
          bars.innerHTML = '<p class="muted">' + (ended ? "（ここで文が終わりました。実際のAIは「文の終わり」を表す記号も予測して、そこで止まります。）"
            : "（この体験で用意した続きはここまでです。実際のAIは、選ばれた言葉に合わせて次の候補をその都度計算し直し、文を続けます。）") + "</p>";
          return;
        }
        var c = steps[i].cands, w = weights(c);
        c.forEach(function (x, k) {
          var row = document.createElement("div");
          row.style.cssText = "display:grid;grid-template-columns:6em 1fr 3.5em;gap:8px;align-items:center;font-size:15px;margin:3px 0";
          row.innerHTML = "<span>" + x[0] + '</span><span style="background:var(--bg-soft);border-radius:6px;height:18px;overflow:hidden"><span style="display:block;height:100%;width:' +
            (w[k] * 100).toFixed(1) + "%;background:" + colors[k] + ';transition:width .3s"></span></span><span class="muted">' + Math.round(w[k] * 100) + "%</span>";
          bars.appendChild(row);
        });
      };
      el.querySelector(".nt-next").addEventListener("click", function () {
        if (i >= steps.length) return;
        var c = steps[i].cands, w = weights(c), r = Math.random(), acc = 0, pick = c[0][0];
        for (var k = 0; k < c.length; k++) { acc += w[k]; if (r <= acc) { pick = c[k][0]; break; } }
        chosen += pick;
        // 架空の続きは最も確率の高い道筋で用意してあるので、違う語を選んだら物語はそこで終える
        i = pick === c[0][0] ? i + 1 : steps.length;
        ended = i >= steps.length && pick === c[0][0];
        draw();
      });
      el.querySelector(".nt-reset").addEventListener("click", function () { i = 0; ended = false; chosen = "今日は天気が"; draw(); });
      el.querySelector(".nt-temp").addEventListener("input", function (e) {
        temp = parseFloat(e.target.value); el.querySelector(".nt-tv").textContent = temp.toFixed(1); draw();
      });
      draw();
    },

    // プロンプトの組み立て：要素を足すごとに頼み方がどう具体的になるかを見せる
    "prompt-builder": function (el) {
      var parts = [
        { name: "目的", text: "大学祭の模擬店の企画を考えています。案を出してください。", gain: "何をしてほしいかが伝わります。" },
        { name: "背景", text: "私たちは情報系の1年生5人のグループです。", gain: "誰が、どんな状況で使うのかが分かり、規模に合った案になります。" },
        { name: "条件", text: "予算は3万円、火を使う調理はできません。準備は2週間以内でできるものにしてください。", gain: "守るべき制約が分かり、実行できない案が減ります。" },
        { name: "出力の形", text: "案を5つ、表にしてください。列は「案」「費用の目安」「準備の手間」「工夫の点」です。", gain: "比べやすい形で返ってきます。" },
        { name: "資料と例", text: "去年は、冷たいドリンクの店が3店あり、行列ができていました。", gain: "判断の材料が増え、被らない案を考えてもらえます。" }
      ];
      el.innerHTML = '<p class="demo-title">体験：要素を足すとプロンプトはどう変わる？</p>' +
        '<p class="muted" style="font-size:14px;margin:0 0 6px">チェックを入れた要素が、下のプロンプトに加わります。</p>' +
        '<div class="controls pb-checks"></div>' +
        '<blockquote class="pb-out" style="margin:8px 0;white-space:pre-wrap"></blockquote>' +
        '<p class="pb-note muted" style="font-size:14px;margin:0"></p>';
      var checks = el.querySelector(".pb-checks"), out = el.querySelector(".pb-out"), note = el.querySelector(".pb-note");
      var boxes = [];
      var draw = function () {
        var on = parts.filter(function (p, k) { return boxes[k].checked; });
        out.textContent = on.length ? on.map(function (p) { return p.text; }).join("") : "大学祭の模擬店のアイデアを教えて。";
        note.textContent = on.length ? on.map(function (p) { return p.name + "：" + p.gain; }).join(" ") : "何も足さないと、ありきたりな案が返ってきがちです。";
      };
      parts.forEach(function (p) {
        var l = document.createElement("label");
        l.style.cssText = "display:flex;align-items:center;gap:4px;font-size:15px";
        var c = document.createElement("input");
        c.type = "checkbox"; c.addEventListener("change", draw);
        boxes.push(c); l.appendChild(c); l.appendChild(document.createTextNode(p.name));
        checks.appendChild(l);
      });
      draw();
    },

    // 貼り付ける前の確認：四つの問いに答えると、どうすればよいかの判断が出る
    "paste-check": function (el) {
      var qs = [
        { q: "パスワードやAPIキーが含まれている？", act: "貼らない。消してから使う。", lv: "red" },
        { q: "他人の個人情報（氏名、学籍番号、連絡先、写真など）が含まれている？", act: "削るか、「Aさん」のように置き換える。", lv: "orange" },
        { q: "他人の作品や有料の資料を使う？", act: "利用条件を確かめ、必要な部分だけにする。", lv: "orange" },
        { q: "非公開の資料や未発表の内容？", act: "持ち主や教員に確認してから使う。", lv: "orange" }
      ];
      el.innerHTML = '<p class="demo-title">体験：AIに貼り付ける前の確認</p>' +
        '<p class="muted" style="font-size:14px;margin:0 0 6px">貼り付けようとしている内容に当てはまるものにチェックを入れてください。</p>' +
        '<div class="pc-checks" style="display:grid;gap:6px"></div>' +
        '<div class="pc-out box" style="margin:10px 0 0" role="status" aria-live="polite"></div>';
      var checks = el.querySelector(".pc-checks"), out = el.querySelector(".pc-out"), boxes = [];
      var draw = function () {
        var hit = qs.filter(function (x, k) { return boxes[k].checked; });
        if (!hit.length) {
          out.className = "pc-out box tip";
          out.innerHTML = '<p class="box-title">使ってよい</p><p style="margin:0">どれにも当たらなければ、貼り付けて使えます。ただし、返ってきた答えは自分で確かめてください。</p>';
          return;
        }
        var red = hit.some(function (x) { return x.lv === "red"; });
        out.className = "pc-out box " + (red ? "danger" : "warn");
        out.innerHTML = '<p class="box-title">' + (red ? "そのままでは貼らない" : "対応してから使う") + "</p>" +
          "<ul style=\"margin:0\">" + hit.map(function (x) { return "<li>" + x.act + "</li>"; }).join("") + "</ul>";
      };
      qs.forEach(function (x) {
        var l = document.createElement("label");
        l.style.cssText = "display:flex;align-items:flex-start;gap:6px;font-size:15px";
        var c = document.createElement("input");
        c.type = "checkbox"; c.style.marginTop = "5px"; c.addEventListener("change", draw);
        boxes.push(c); l.appendChild(c); l.appendChild(document.createTextNode(x.q));
        checks.appendChild(l);
      });
      draw();
    },

    // 文脈の窓：会話が長くなると古い発言が窓からあふれるようすを見せる
    "context-window": function (el) {
      var msgs = [
        "私の名前は田中です。", "卒業研究のテーマは水質調査です。", "調査地は多摩川です。",
        "まず背景を書きたいです。", "先行研究を三つ挙げてください。", "二つ目を短くしてください。",
        "方法の節に進みます。", "採水は月に一度です。", "グラフの案をください。", "結論を一文でまとめて。"
      ];
      var n = 0, size = 5;
      el.innerHTML = '<p class="demo-title">体験：文脈の窓からあふれる古い発言</p>' +
        '<div class="controls"><button class="primary cw-add">発言を一つ足す</button><button class="cw-reset">最初から</button>' +
        '<label style="display:flex;align-items:center;gap:6px;font-size:14px">窓の大きさ<input class="cw-size" type="range" min="3" max="8" step="1" value="5"><span class="cw-sv">5</span>件</label></div>' +
        '<div class="cw-list" style="display:grid;gap:4px;margin:8px 0"></div>' +
        '<p class="cw-note" role="status" aria-live="polite" style="font-size:15px;margin:0"></p>' +
        '<p class="muted" style="font-size:14px;margin:6px 0 0">実際の窓はトークンで数え、もっと大きいですが、あふれると古い部分が読めなくなる点は同じです。サービスによっては、あふれる前に要約されます。</p>';
      var list = el.querySelector(".cw-list"), note = el.querySelector(".cw-note");
      var draw = function () {
        list.innerHTML = "";
        msgs.slice(0, n).forEach(function (m, k) {
          var inside = k >= n - size;
          var d = document.createElement("div");
          d.style.cssText = "padding:4px 10px;border-radius:6px;font-size:15px;border:1px solid " + (inside ? "var(--c-green)" : "var(--line-strong)") + ";background:" + (inside ? "var(--c-green-soft)" : "var(--bg-soft)") + ";" + (inside ? "" : "opacity:.65;text-decoration:line-through");
          d.textContent = (inside ? "窓の中：" : "窓の外：") + m;
          list.appendChild(d);
        });
        if (n === 0) note.textContent = "「発言を一つ足す」を押して、会話を進めてください。";
        else if (n > size) note.textContent = "AIには、緑の発言しか見えません。名前やテーマなど、最初に伝えたことは忘れたように見えます。大事なことは、改めて書くか、資料のファイルにまとめて読み込ませます。";
        else note.textContent = "いまは全ての発言が窓に入っているので、AIはどれも読めます。";
        el.querySelector(".cw-add").disabled = n >= msgs.length;
      };
      el.querySelector(".cw-add").addEventListener("click", function () { if (n < msgs.length) { n++; draw(); } });
      el.querySelector(".cw-reset").addEventListener("click", function () { n = 0; draw(); });
      el.querySelector(".cw-size").addEventListener("input", function (e) { size = +e.target.value; el.querySelector(".cw-sv").textContent = size; draw(); });
      draw();
    },

    // 間違い探し：AIの答えの中から、確かめが必要な文を選んで答え合わせをする
    "halluc-quiz": function (el) {
      var items = [
        { t: "富士山の標高は3,776メートルです。", bad: false, why: "正しい内容です。国土地理院が公表している標高と一致します。" },
        { t: "山梨県と静岡県にまたがっています。", bad: false, why: "正しい内容です。" },
        { t: "2013年に、ユネスコの世界文化遺産に登録されました。", bad: false, why: "正しい内容です。「自然遺産」ではなく「文化遺産」である点も合っています。" },
        { t: "最後に噴火したのは2020年です。", bad: true, why: "誤りです。最後の噴火は1707年（宝永噴火）とされています。年や数字は取り違えやすいので、公的な資料で確かめます。" },
        { t: "日本一高い山で、世界の山の高さでも上位10位に入ります。", bad: true, why: "後半が誤りです。日本一は正しいものの、世界の山の中では標高3,776メートルは上位に入りません（世界最高峰のエベレストは8,000メートルを超えます）。正しい内容に誤りを混ぜて、もっともらしく見せる間違いがあります。" },
        { t: "参考：山田太郎『富士山の科学』（青空出版、2019年）", bad: true, why: "この本は、この体験のために作った架空の出典です。AIが挙げた出典は、自分で探して開くまで信用しません。" }
      ];
      el.innerHTML = '<p class="demo-title">体験：AIの答えの間違い探し</p>' +
        '<p class="muted" style="font-size:14px;margin:0 0 6px">質問「富士山について教えて」に対するAIの答えです。確かめる必要があると思う文にチェックを入れて、答え合わせを押してください。</p>' +
        '<div class="hq-list" style="display:grid;gap:6px"></div>' +
        '<div class="controls"><button class="primary hq-go">答え合わせ</button><button class="hq-reset">やり直す</button></div>' +
        '<div class="hq-out" role="status" aria-live="polite"></div>';
      var list = el.querySelector(".hq-list"), out = el.querySelector(".hq-out"), rows = [];
      items.forEach(function (x) {
        var l = document.createElement("label");
        l.style.cssText = "display:flex;align-items:flex-start;gap:6px;font-size:15px;padding:4px 8px;border-radius:6px;border:1px solid var(--line-strong)";
        var c = document.createElement("input");
        c.type = "checkbox"; c.style.marginTop = "5px";
        var t = document.createElement("span"); t.textContent = x.t;
        var r = document.createElement("span"); r.className = "hq-r"; r.style.cssText = "display:block;font-size:14px;margin-top:2px";
        var w = document.createElement("span"); w.appendChild(t); w.appendChild(r);
        l.appendChild(c); l.appendChild(w); list.appendChild(l);
        rows.push({ box: c, label: l, r: r, x: x });
      });
      el.querySelector(".hq-go").addEventListener("click", function () {
        var ok = 0;
        rows.forEach(function (o) {
          var hit = o.box.checked === o.x.bad;
          if (hit) ok++;
          o.label.style.borderColor = hit ? "var(--c-green)" : "var(--c-red)";
          o.r.textContent = (hit ? "○ " : "× ") + (o.x.bad ? "確かめが必要。" : "確かめて問題なし。") + o.x.why;
        });
        out.className = "hq-out box " + (ok === rows.length ? "tip" : "note");
        out.innerHTML = '<p class="box-title">' + ok + " / " + rows.length + ' 問、合っていました</p><p style="margin:0">AIの答えは、正しい文と間違った文が同じ調子で並びます。文章の自信ありげな調子では見分けられません。年、数字、「最大」などの言い切り、出典は、特に確かめます。</p>';
      });
      el.querySelector(".hq-reset").addEventListener("click", function () {
        rows.forEach(function (o) { o.box.checked = false; o.label.style.borderColor = ""; o.r.textContent = ""; });
        out.className = "hq-out"; out.innerHTML = "";
      });
    },

    // エージェントのループ：目標に対して、計画→道具→観察を一歩ずつ見せる
    "agent-loop": function (el) {
      var steps = [
        { plan: "まず指示ファイル（AGENTS.md）を読んで、取り込みの手順を確かめよう。", tool: "ファイルを読む：AGENTS.md", obs: "「取り込みでは、要約ページを作り、目録と作業記録を更新する」と書いてある。", judge: "手順は分かった。まだ何も作っていないので、続ける。" },
        { plan: "次に、取り込む授業のメモを読もう。", tool: "ファイルを読む：raw/class-memo.md", obs: "メモには、日程の変更と、新しく配られるツールの名前が書いてある。", judge: "内容は分かった。要約ページを作る段階に進む。" },
        { plan: "目録を見て、関係するWikiのページを探そう。", tool: "ファイルを読む：wiki/index.md", obs: "「授業の日程」のページと「ツール」のページが関係しそうだ。", judge: "書き換える先が決まった。続ける。" },
        { plan: "要約ページを作り、日程のページを書き換えよう。", tool: "ファイルを書く：wiki/sources/class-memo.md ほか", obs: "ファイルが作られ、日程のページが書き換わった。", judge: "書き換えたが、リンクが正しいかはまだ確かめていない。続ける。" },
        { plan: "書き換えたページを検査の命令で確かめよう。", tool: "命令を実行する：python site/build.py --check", obs: "「リンク切れが1件あります」と出た。", judge: "目標にはまだ届いていない。直す必要がある。" },
        { plan: "リンク切れの場所を探して直そう。", tool: "ファイルを書く：wiki/sources/class-memo.md", obs: "リンクの書き方を直した。", judge: "直したが、確かめ直していない。続ける。" },
        { plan: "もう一度、検査の命令を実行しよう。", tool: "命令を実行する：python site/build.py --check", obs: "「警告0件」と出た。", judge: "目標に届いた。人に報告する。" }
      ];
      var n = 0;
      el.innerHTML = '<p class="demo-title">体験：エージェントのループを一歩ずつ見る</p>' +
        '<p style="margin:0 0 6px;font-size:15px">目標：「授業のメモをWikiに取り込んで」（架空の例です）</p>' +
        '<div class="controls"><button class="primary al-next">次の一歩へ</button><button class="al-reset">最初から</button></div>' +
        '<ol class="al-list" style="list-style:none;padding:0;margin:8px 0;display:grid;gap:8px"></ol>' +
        '<p class="al-note" role="status" aria-live="polite" style="font-size:15px;margin:0"></p>' +
        '<p class="muted" style="font-size:14px;margin:6px 0 0">実際のエージェントの動きは毎回少しずつ違います。ここでは、ループの形を見るための単純な例にしています。</p>';
      var list = el.querySelector(".al-list"), note = el.querySelector(".al-note"), next = el.querySelector(".al-next");
      var rows = [["計画", "plan", "var(--c-purple)"], ["道具", "tool", "var(--c-blue)"], ["観察", "obs", "var(--c-green)"], ["判断", "judge", "var(--c-orange)"]];
      var draw = function () {
        list.innerHTML = "";
        steps.slice(0, n).forEach(function (st, k) {
          var li = document.createElement("li");
          var last = k === n - 1;
          li.style.cssText = "padding:8px 12px;border-radius:8px;border:1px solid " + (last ? "var(--c-purple)" : "var(--line-strong)") + ";background:var(--bg-soft);font-size:15px";
          var h = document.createElement("div");
          h.style.cssText = "font-weight:700;margin-bottom:2px";
          h.textContent = "ループ" + (k + 1) + "回目";
          li.appendChild(h);
          rows.forEach(function (r) {
            var d = document.createElement("div");
            var tag = document.createElement("span");
            tag.style.cssText = "display:inline-block;min-width:3em;margin-right:8px;font-weight:700;color:" + r[2];
            tag.textContent = r[0];
            d.appendChild(tag);
            d.appendChild(document.createTextNode(st[r[1]]));
            li.appendChild(d);
          });
          list.appendChild(li);
        });
        if (n === 0) note.textContent = "「次の一歩へ」を押すと、エージェントが一回のループで考えることと、したことが一つずつ出ます。";
        else if (n < steps.length) note.textContent = "ループは、目標に届くまで続きます。途中で結果を見て、やり方を変えられる点がチャットとの違いです。";
        else note.textContent = "7回のループで目標に届きました。5回目のように、結果を見て間違いに気づき、直すのがエージェントの強みです。ただし、最後の報告を信じる前に、人が結果を確かめます。";
        next.disabled = n >= steps.length;
      };
      next.addEventListener("click", function () { if (n < steps.length) { n++; draw(); } });
      el.querySelector(".al-reset").addEventListener("click", function () { n = 0; draw(); });
      draw();
    },

    // コミットとブランチ：ボタンでブランチを作り、コミットし、マージするようすを見せる
    "branch-sim": function (el) {
      var main, br, merged, note;
      var reset = function () { main = [{ t: "c" }, { t: "c" }]; br = null; merged = 0; note = "mainには2つのコミットがあります。まず「ブランチを作る」を押してみましょう。"; };
      reset();
      el.innerHTML = '<p class="demo-title">体験：コミットとブランチを動かしてみる</p>' +
        '<div class="controls"><button class="primary bs-branch">ブランチを作る</button><button class="bs-cb">ブランチでコミット</button><button class="bs-cm">mainでコミット</button><button class="bs-merge">mainにマージ</button><button class="bs-reset">最初から</button></div>' +
        '<div class="bs-view" style="overflow-x:auto"></div>' +
        '<p class="bs-note" role="status" aria-live="polite" style="font-size:15px;margin:6px 0 0"></p>' +
        '<p class="muted" style="font-size:14px;margin:6px 0 0">模式図です。実際のGitHubでは、マージの前にプルリクエストで内容を確かめます。</p>';
      var view = el.querySelector(".bs-view"), nt = el.querySelector(".bs-note");
      var q = function (c) { return el.querySelector(c); };
      var draw = function () {
        var W = 56, x0 = 70, n = main.length, bn = br ? br.n : 0;
        var total = Math.max(n, (br ? br.at + 1 + bn : 0) + (merged ? 0 : 0)) + 1;
        var width = x0 + (total + 1) * W, yM = 30, yB = 80;
        var g = '<svg viewBox="0 0 ' + width + ' 110" width="' + width + '" height="110" role="img" aria-label="mainブランチのコミット' + n + '個と、作業用ブランチのコミット' + bn + '個を並べた図">';
        g += '<text x="4" y="' + (yM + 5) + '" font-size="14" fill="var(--fg)">main</text>';
        if (br) g += '<text x="4" y="' + (yB + 5) + '" font-size="14" fill="var(--c-orange)">作業用</text>';
        var line = function (x1, y1, x2, y2, c) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + c + '" stroke-width="3"/>'; };
        main.forEach(function (c, i) {
          var x = x0 + i * W;
          if (i) g += line(x - W, yM, x, yM, "var(--c-green)");
        });
        if (br) {
          var bx = x0 + br.at * W;
          for (var k = 1; k <= bn; k++) g += line(bx + (k - 1) * W, k === 1 ? yM : yB, bx + k * W, yB, "var(--c-orange)");
          if (bn) { for (var j = 1; j <= bn; j++) g += '<circle cx="' + (bx + j * W) + '" cy="' + yB + '" r="9" fill="var(--c-orange)"/>'; }
          else g += '<text x="' + (bx + 14) + '" y="' + (yB + 5) + '" font-size="13" fill="var(--muted)">（まだコミットなし）</text>';
          if (!bn) g += line(bx, yM, bx, yB, "var(--c-orange)");
        }
        main.forEach(function (c, i) {
          g += '<circle cx="' + (x0 + i * W) + '" cy="' + yM + '" r="9" fill="' + (c.t === "m" ? "var(--c-purple)" : "var(--c-green)") + '"/>';
        });
        view.innerHTML = g + "</svg>";
        q(".bs-branch").disabled = !!br;
        q(".bs-cb").disabled = !br;
        q(".bs-merge").disabled = !br || !br.n;
        nt.textContent = note;
      };
      q(".bs-branch").addEventListener("click", function () { br = { at: main.length - 1, n: 0 }; note = "mainの最新のコミットから、作業用のブランチが枝分かれしました。ここでの変更はmainに影響しません。"; draw(); });
      q(".bs-cb").addEventListener("click", function () { br.n++; note = "ブランチにコミットが増えました。mainは変わっていません。"; draw(); });
      q(".bs-cm").addEventListener("click", function () {
        main.push({ t: "c" });
        note = br ? "mainが先に進みました。ブランチとmainが同じ場所を変えていると、マージのときに衝突（コンフリクト）が起きることがあります。" : "mainに直接コミットしました。一人で試すときはこれでもよいですが、チームやAIエージェントとの作業では、ブランチで作業するのが安全です。";
        draw();
      });
      q(".bs-merge").addEventListener("click", function () {
        main.push({ t: "m" });
        br = null; merged++;
        note = "ブランチの変更がmainに合流しました（紫の点がマージのコミット）。役目を終えたブランチは削除してよく、図からも消えます。";
        draw();
      });
      q(".bs-reset").addEventListener("click", function () { reset(); draw(); });
      draw();
    },

    // Markdownの確認：書いた文章の表示と、日本語の規則に反する点を見せる
    "md-check": function (el) {
      var sample = "# 活動の記録\n\nこれは**「重要」**な記録です。\nここで改行しています。\n\n- 1つ目の項目\n- 2つ目の項目\n\nGitHubのリポジトリ、とAIを使う(最初の日)。";
      el.innerHTML = '<p class="demo-title">体験：Markdownの表示と規則の確認</p>' +
        '<p class="muted" style="font-size:14px;margin:0 0 6px">左の欄に書き換えると、右に表示の例と、日本語の規則に反する点が出ます。表示は、この体験用の簡単な仕組みで作った例です。</p>' +
        '<label for="mdc-in" style="font-size:14px">Markdownで書く</label>' +
        '<textarea id="mdc-in" class="mdc-in" rows="9" style="width:100%;box-sizing:border-box;font:inherit;font-family:monospace;font-size:14px;padding:8px;border-radius:8px;border:1px solid var(--line-strong);background:var(--bg);color:var(--fg)"></textarea>' +
        '<div class="controls"><button class="mdc-reset">例に戻す</button></div>' +
        '<p class="demo-title" style="margin-top:8px">表示の例</p><div class="mdc-view" style="padding:6px 12px;border:1px solid var(--line-strong);border-radius:8px;min-height:3em"></div>' +
        '<p class="demo-title" style="margin-top:12px">規則の確認</p><ul class="mdc-warn" role="status" aria-live="polite" style="margin:0;padding-left:1.4em"></ul>';
      var inp = el.querySelector(".mdc-in"), view = el.querySelector(".mdc-view"), warn = el.querySelector(".mdc-warn");
      var esc = function (s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); };
      var P = /[\p{P}\p{S}]/u, S = /\s/;
      // 太字：CommonMarkの「強調の記号の隣の文字」の規則を簡略にまねる
      var bold = function (s) {
        return s.replace(/\*\*([^*]+?)\*\*/g, function (m, t, off) {
          var before = off > 0 ? s.charAt(off - 1) : " ", after = s.charAt(off + m.length) || " ";
          var okOpen = !P.test(t.charAt(0)) || S.test(before) || P.test(before);
          var okClose = !P.test(t.charAt(t.length - 1)) || S.test(after) || P.test(after);
          return okOpen && okClose ? "<strong>" + t + "</strong>" : m;
        });
      };
      var render = function (text) {
        var html = "", para = [], list = [];
        var flushP = function () { if (para.length) { html += "<p>" + bold(esc(para.join("\n")).replace(/\n/g, " ")) + "</p>"; para = []; } };
        var flushL = function () { if (list.length) { html += "<ul>" + list.map(function (x) { return "<li>" + bold(esc(x)) + "</li>"; }).join("") + "</ul>"; list = []; } };
        text.split("\n").forEach(function (ln) {
          var h = /^(#{1,3}) (.+)$/.exec(ln), li = /^[-*] (.+)$/.exec(ln);
          if (/^\s*$/.test(ln)) { flushP(); flushL(); }
          else if (h) { flushP(); flushL(); html += "<h" + (h[1].length + 2) + ' style="margin:.4em 0">' + bold(esc(h[2])) + "</h" + (h[1].length + 2) + ">"; }
          else if (li) { flushP(); list.push(li[1]); }
          else { flushL(); para.push(ln); }
        });
        flushP(); flushL();
        return html;
      };
      var check = function (text) {
        var w = [];
        if (/\*\*|__/.test(text.replace(/`[^`]*`/g, ""))) w.push("太字の記号（`**`など）があります。日本語では記号がそのまま表示されることが多いので、見出しや箇条書き、かぎ括弧で強調します。");
        var paras = text.split(/\n\s*\n/);
        if (paras.some(function (p) { var ls = p.split("\n").filter(function (l) { return l.trim(); }); return ls.length > 1 && !ls.some(function (l) { return /^(#|[-*] |\d+\. )/.test(l); }); })) w.push("段落の途中で改行しています。表示では半角の空白になり、日本語の文に不自然な空きが入ります。一つの段落は一行で書きます。");
        if (/[぀-ヿ一-鿿][,.()!?:;]|[,(][぀-ヿ一-鿿]/.test(text)) w.push("日本語の文の中に半角の句読点や括弧があります。「、」「。」「（」「）」を使います。");
        if (/[぀-ヿ一-鿿] +[A-Za-z0-9]|[A-Za-z0-9] +[぀-ヿ一-鿿]/.test(text)) w.push("日本語と英数字の間に空白があります。入れない決まりです（例：「GitHubのリポジトリ」）。");
        if (/~/.test(text)) w.push("半角の`~`があります。範囲は「〜」を使います。");
        warn.innerHTML = w.length ? w.map(function (x) { return "<li>" + esc(x).replace(/`([^`]*)`/g, "<code>$1</code>") + "</li>"; }).join("") : "<li>見つかりませんでした。規則どおりです。</li>";
      };
      var update = function () { view.innerHTML = render(inp.value); check(inp.value); };
      inp.value = sample; update();
      inp.addEventListener("input", update);
      el.querySelector(".mdc-reset").addEventListener("click", function () { inp.value = sample; update(); });
    },

    // 衝突の解消：印つきのファイルを自分で直し、印が残っていないかを確かめる
    "conflict-sim": function (el) {
      var ours = "第5回の日付：11月4日（水）";
      var theirs = "第5回の日付：11月5日（木）。発表は一人5分。";
      var start = "# 授業の予定\n\n第4回の日付：10月28日（水）\n\n<<<<<<< feature（自分のブランチ）\n" + theirs + "\n=======\n" + ours + "\n>>>>>>> main\n\n第6回の日付：11月11日（水）\n";
      el.innerHTML = '<p class="demo-title">体験：衝突を自分で解消してみよう</p>' +
        '<p style="margin:.2em 0 .6em;font-size:15px">下のファイルでは、第5回の行が、自分のブランチ（<code>feature</code>）と<code>main</code>で別々に書き換えられています。印の行（<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>、<code>=======</code>、<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>）を消して、残したい内容にしてから「解決済みにする」を押してください。</p>' +
        '<div class="controls"><button class="cs-a">上の案（feature）を残す</button><button class="cs-b">下の案（main）を残す</button><button class="cs-ab">両方を合わせる</button><button class="cs-reset">最初から</button></div>' +
        '<textarea class="cs-text" rows="10" spellcheck="false" aria-label="衝突のあるファイル" style="width:100%;box-sizing:border-box;font-family:var(--mono, monospace);font-size:14px;padding:8px;border-radius:8px;border:1px solid var(--line-strong);background:var(--bg-soft);color:var(--fg)"></textarea>' +
        '<div class="controls"><button class="primary cs-ok">解決済みにする（Mark as resolved）</button></div>' +
        '<p class="cs-msg" role="status" style="margin:0;font-size:15px"></p>';
      var ta = el.querySelector(".cs-text"), msg = el.querySelector(".cs-msg");
      var set = function (mid) { ta.value = "# 授業の予定\n\n第4回の日付：10月28日（水）\n\n" + mid + "\n\n第6回の日付：11月11日（水）\n"; msg.textContent = ""; };
      ta.value = start;
      el.querySelector(".cs-a").addEventListener("click", function () { set(theirs); });
      el.querySelector(".cs-b").addEventListener("click", function () { set(ours); });
      el.querySelector(".cs-ab").addEventListener("click", function () { set("第5回の日付：11月4日（水）。発表は一人5分。"); });
      el.querySelector(".cs-reset").addEventListener("click", function () { ta.value = start; msg.textContent = ""; });
      el.querySelector(".cs-ok").addEventListener("click", function () {
        var v = ta.value;
        if (/^(<{7}|={7}|>{7})/m.test(v)) { msg.textContent = "まだ印の行が残っています。三種類の印の行をすべて消してください。印が残ったままだと、そのまま確定されてしまいます。"; }
        else if (!/第5回/.test(v)) { msg.textContent = "第5回の行がなくなっています。どちらかの案、または両方を合わせた文を残してください。"; }
        else if ((v.match(/第5回の日付/g) || []).length > 1) { msg.textContent = "第5回の行が二つ残っています。一つにまとめてください。"; }
        else { msg.textContent = "解決できました。実際のGitHubでは、このあと「Commit merge」を押すと衝突が消え、マージできるようになります。どの案を選ぶかは、担当者どうしで確かめてから決めましょう。"; }
      });
    },

    // トークン分け：文がどのような断片に分かれるかの例を見せる
    "tokens": function (el) {
      var samples = [
        { label: "日本語", parts: ["東京", "都市", "大学", "で", "AI", "を", "学", "ぶ", "。"] },
        { label: "英語", parts: ["Tokyo", " City", " University", " teaches", " AI", "."] },
        { label: "コード", parts: ["print", "(\"", "Hello", ",", " world", "!\")"] }
      ];
      var colors = ["blue", "green", "orange", "purple", "teal", "yellow", "red"];
      el.innerHTML = '<p class="demo-title">体験：文はトークンに分けて読まれる</p><div class="controls"></div><div class="tk-out" style="font-size:1.2em;line-height:2.2"></div><p class="muted tk-count" style="font-size:14px;margin:0"></p>';
      var controls = el.querySelector(".controls"), out = el.querySelector(".tk-out"), count = el.querySelector(".tk-count");
      var show = function (s) {
        out.innerHTML = s.parts.map(function (p, k) {
          var c = colors[k % colors.length];
          return '<span style="background:var(--c-' + c + '-soft);border-bottom:3px solid var(--c-' + c + ');padding:2px 3px;margin:0 1px;border-radius:4px;white-space:pre">' + p.replace(/</g, "&lt;") + "</span>";
        }).join("");
        count.textContent = "この例では" + s.parts.length + "トークン。分け方はモデルごとに異なり、ここに示したのは一例です。";
      };
      samples.forEach(function (s, k) {
        var b = document.createElement("button");
        b.textContent = s.label;
        b.addEventListener("click", function () { show(s); });
        controls.appendChild(b);
        if (k === 0) show(s);
      });
    }
  };
  document.querySelectorAll("[data-demo]").forEach(function (el) {
    var f = demos[el.getAttribute("data-demo")];
    if (f) f(el);
  });
})();
