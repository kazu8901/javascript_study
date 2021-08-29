// 変数
let hensu ='hello world';

// 上書き
hensu = "hello world2"

// 定数
// 書き換えができない
const kontya = "こんちゃ";

// 配列
let nandarou = ['1', 'が', '3', '4']

// ループ分
let index = 0;
while(index < nandarou.length) {
  // 繰り返したい命令
  console.log(nandarou[index]);
  index++;
}

// 条件分岐
if(nandarou.length > 13) {
  console.log('デュフフ');
} else {
  console.log('コポォ');
}

// 関数
const test = (arg) => {
  if(nandarou.length > arg) {
    console.log('デュフフ');
  } else {
    console.log('コポォ');
  }
};

test(12);

// オブジェクト
// 複数の情報をもてる、情報の塊
const obj = {
  color: 'blue',
  size: 'large',
  purfume: 'mint',
  testTest: () => {
    console.log('hello world')
  }
}

// webブラウザ全体のプロパティを持っている
// window

// ポップアップを出す
window.alert('ギャアアアアアア')

// 表示しているページ全体のオブジェクト
// document

                                            // ↓イベント
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  // 命令文を書く
  window.alert('ギャアアアアアア！！')
});

console.log(document.getElementsByTagName('button')[0]);