// 某月的最后一天？
function getLastDayOfMonth(year, month){
    let d = new Date(year, month + 1, 0);
  //  d.setDate(d.getDate() - 1)
    return d.getDate();
}

console.log(getLastDayOfMonth(2012,1));
console.log(getLastDayOfMonth(2019, 9));


function getScondsToday(){
    let curent = Date.now();
    let today = new Date();
    let temp = new Date(today.getFullYear(), today.getMonth(), today.getDate(),0,0,0);
    return Math.ceil((curent - temp.getTime())/1000);
}

console.log(getScondsToday());

/* 
写一个函数 formatDate(date)，能够将 date 格式化如下：

如果 date 距离现在少于 1 秒，输出 "刚刚"。
否则，如果少于 1 分钟，输出 "n 秒之前"。
否则，如果少于 1 小时，输出 "n 分钟之前"。
否则，输出完整日期，用格式"DD.MM.YY HH:mm"。即："day.month.year hours:minutes"，所有的数都用两位数表示，例如：31.12.16 10:00。

举个例子：

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

*/
