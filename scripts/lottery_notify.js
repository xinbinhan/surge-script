// 双色球 + 大乐透 AI 推荐
// Surge / Loon / QX 通用

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pad(n) {
  return n < 10 ? "0" + n : n;
}

// 随机不重复号码
function uniqueNumbers(count, min, max) {
  let arr = [];

  while (arr.length < count) {
    let n = rand(min, max);

    if (!arr.includes(n)) {
      arr.push(n);
    }
  }

  return arr.sort((a, b) => a - b);
}

// 双色球
const ssqRed = uniqueNumbers(6, 1, 33)
  .map(pad)
  .join(" ");

const ssqBlue = pad(rand(1, 16));

// 大乐透
const dltFront = uniqueNumbers(5, 1, 35)
  .map(pad)
  .join(" ");

const dltBack = uniqueNumbers(2, 1, 12)
  .map(pad)
  .join(" ");

// 日期
const now = new Date();

const date =
  now.getFullYear() +
  "/" +
  pad(now.getMonth() + 1) +
  "/" +
  pad(now.getDate());


// 通知内容
const title = "🎰 今日中奖彩票号码";

// 副标题（双色球）
const subtitle =
`双色球 🔴 ${ssqRed} + 🔵 ${ssqBlue}`;

// 正文（大乐透）
const body =
`大乐透 🟠 ${dltFront} + 🔵 ${dltBack}

━━━━━━━━━━━━

🤖 AI随机生成
🍀 理性购彩`;

$notification.post(
  title,
  subtitle,
  body
);

$done();

