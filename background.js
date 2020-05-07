(($) => {
  const API_URL = "https://script.google.com/a/g.softbank.co.jp/macros/s/AKfycbwRbVw2uT9zKUkXeFsJ1MaV45SMsg2Jz6BCJ9XoJ751oP8Z7n50/exec";

  let timer = function() {
    chrome.alarms.create('ALARM_NAME', {periodInMinutes: 1});
    chrome.alarms.onAlarm.addListener((alarm) => {
      if (alarm.name === 'ALARM_NAME') {
        notice();
      }
    });
  };

  let notice = function() {
    $.ajax({
      url: API_URL,
      type: "GET",
      timespan: 1000
    }).done((data, textStatus, jqXHR) => {
      console.log(JSON.stringify(data));
    }).fail((jqXHR, textStatus, errorThrown) => {
        console.log(jqXHR.status);
    }).always(() => {
      console.log("finish");
    });
  };

  let init = function() {
    timer();
  };

  init();
})(jQuery);
