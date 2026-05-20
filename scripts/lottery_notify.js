// 真实彩票开奖结果查询
// Surge / Loon / QX 通用

const url = "https://api.vvhan.com/api/caipiao";

$httpClient.get(url, function(error, response, data) {

  if (error) {
    $notification.post(
      "🎰 彩票开奖结果查询",
      "获取失败",
      String(error)
    );
    $done();
    return;
  }

  try {

    const json = JSON.parse(data);

    // 双色球
    const ssq = json.data.ssq;

    // 大乐透
    const dlt = json.data.dlt;

    const title = "🎰 今日开奖结果";

    const subtitle =
`双色球 第${ssq.code}期`;

    const body =
`🔴 ${ssq.red}
🔵 ${ssq.blue}

━━━━━━━━━━━━

大乐透 第${dlt.code}期

🟠 ${dlt.front}
🔵 ${dlt.back}

━━━━━━━━━━━━

📅 开奖日期：${ssq.date}`;

    $notification.post(
      title,
      subtitle,
      body
    );

  } catch(e) {

    $notification.post(
      "🎰 彩票开奖结果查询",
      "解析失败",
      String(e)
    );

  }

  $done();

});
