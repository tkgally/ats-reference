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
