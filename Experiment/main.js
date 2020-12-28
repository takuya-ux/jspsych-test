//インフォームドコンセント
const informedConsentText = [
    '<div style = "font-size: 2vh; text-align: left;"><p>本実験・調査の実施責任者は○○です。本実験・調査への参加はあなたの任意によるものです。</p>' +
    '<p><b>1.本実験・調査の目的</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>2.本実験・調査の手続き</b>' +
    '<br>XXXXXXXXX' +
    '<br>この実験・調査に所要時間はXXXXXXXXXです。</p>' +
    '<p><b>3.潜在的なリスク・苦痛など</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>4.参加による利益</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>5.匿名性の確保</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>6.参加と中止</b>' +
    '<br>XXXXXXXXX</p>' +
    '<p><b>7.実験・調査実施者への問い合わせ</b>' +
    '<br>XXXXXXXXX</p></div>'
];
const informedConsent = {
    type: 'survey-multi-select',
    questions: [{
        prompt: '<span style = "font-size: 2vh"><b>上記事項をよく読み，理解した上で実験参加に同意いただける方はチェックをお願いします。同意されない方はエスケープ（ESC）を押した後，ウィンドウを閉じてください。</b></span>',
        options: ['<span style = "font-size: 2vh">説明事項をよく読み，理解した上で，実験参加に同意します。</span>'],
        required: true,
        name: 'approval'
    }],
    preamble: informedConsentText,
    button_label: '次へ'
};

//選択肢を作成
const response5Values = [
	'あてはまらない',
	'あまりあてはまらない',
	'どちらとも言えない',
	'ややあてはまる',
	'あてはまる'
]

const response2Values = [
    'はい',
    'いいえ'
]

const askAboutHomeTown = {
    preamble: '<p style = "font-size: 2vh">以下の出身地に関する質問にご回答ください</p>',
    type: 'survey-likert',
    questions: [{
        prompt: '私の出身地は都会だと思う',
        labels: response5Values
    },
    {
        prompt: '私の出身地は良い街だと思う',
        labels: response5Values
    },
    {
        prompt: '私の出身地は住みやすい街だと思う',
        labels: response5Values
    },
    {
        prompt: '私の出身地は経済的に豊かだと思う',
        labels: response5Values
    }
    ],
    button_label: '次へ',
    scale_width: 600,
};

const askAboutDenomination = {
    preamble: '<p style = "font-size: 2vh">以下の宗派に関する質問にご回答ください</p>',
    type: 'survey-likert',
    questions: [{
        prompt: '私は実家の宗派を知っている',
        labels: response2Values
    },
    {
        prompt: '私は実家の宗教活動に積極的に参加していた',
        labels: response5Values
    }
    ],
    button_label: '次へ',
    scale_width: 600,
};


//////////////////////////////////////////////////
var hobbyHours = [
    '0~1時間ほど',
    '1~2時間ほど',
    '3~4時間ほど',
    '4~5時間ほど',
    '5時間以上'
]

var responseIf = [
    'はい',
    'いいえ',
]

var responseNum = [
    '0~2回',
    '3~5回',
    '6~8回',
    '9~11回',
    '11回以上'
]

var hobbyPeriod = [
    '毎日',
    '週に数回',
    '月に数回',
    '年に数回',
    'ほとんどない'
]
//scale_widthの単位はpxからvwに変更してあります
var askCommunitySize = {
    type: 'survey-likert',
    questions: [{
        prompt: '学内(社内)で知り合った知り合いが多い',
        labels: response5Values,
//        required: true
    },{
        prompt: 'SNSなどのネットで知り合った知り合いが多い',
        labels: response5Values,
//        required: true
    },{
        prompt: '学内(社内)でのイベントより、学内(社内)外でのイベントに参加する方が多い',
        labels: response5Values,
//        required: true
    },{
        prompt: '初対面相手でも気になった人に自分から声をかけることが多い',
        labels: response5Values,
//        required: true
    },{
        prompt: '何かしらのグループ活動では自分は積極的に話したり。先導して会話することが多い',
        labels: response5Values,
//        required: true
    },{
        prompt: '他人の趣味に影響され、趣味が増えたことがよくある',
        labels: response5Values,
//        required: true
      },{
        prompt: '自身の趣味を他人によく紹介する',
        labels: response5Values,
//        required: true
        }],
    button_label: '次へ',
    scale_width: 600
};
var askCommunication = {
  type: 'survey-likert',
  questions: [{
      prompt: '相手の趣味と合わなくても会話が流暢にできる',
      labels: response5Values,
//      required: true
  },{
      prompt: '会話で話が途切れることはそんなにない',
      labels: response5Values,
//      required: true
  },{
      prompt: '会話しているときは基本話を聞く方だ',
      labels: response5Values,
//      required: true
  },{
      prompt: '会話しているときは基本話をする方だ',
      labels: response5Values,
//      required: true
  },{
      prompt: '1対1より複数人のほうが会話しやすい',
      labels: response5Values,
//      required: true
  },{
      prompt: '自身の趣味のことを会話の題材にすることが多い',
      labels: response5Values,
//      required: true
  },{
      prompt: '自身の趣味は人と話すことが多い',
      labels: response5Values,
//      required: true
    },{
      prompt: '配信などで有名人に自身の主張はなるべく反応されたい',
      labels: response5Values,
//      required: true
      }],
    button_label: '次へ',
    scale_width: 600
    };

    const askCaution = [
          '<div style = "font-size: 2vh; text-align: center;">' +
          '<p>※：具体的な時間や期間を質問します。解答は任意で行ってください</p></div>'
    ]

var askHobbyTime = {
    type: 'survey-likert',
    questions: [{
      prompt: '一度の会話に用いる時間',
      labels: hobbyHours
    },{
      prompt: '趣味に時間をかける期間の感覚',
      labels: hobbyPeriod
    },{
      prompt: '趣味にかける時間',
      labels: hobbyHours
    },{
      prompt: '自身が持ってる趣味の数',
      labels: responseNum
    },{
      prompt: '今年行ったイベントの回数',
      labels: responseNum
    }],
    preamble: askCaution,
    button_label: '次へ',
    scale_width: 600
  };
//////////////////////////////////////////////////////////////



let stimulusPhrase;
let temp_responses;
const surveyDemo = {
    type: 'survey-text',
    preamble: '<p style = "font-size: 2vh">以下の質問にご回答ください</p>',
    button_label: '次へ',
    questions: [{
        prompt: '<p style = "font-size: 2vh">あなたの出身地域を入力してください</p>',
        name: 'surveyDemo',
        rows: 1,
        columns: 10
    }
    // ,
    // {
    //     prompt: '<p style = "font-size: 2vh">あなたの好きなことわざを1つ入力してください</p>',
    //     name: 'surveyDemo',
    //     rows: 1,
    //     columns: 10
    // }
    ],
    // on_finish: function (data) {
    //     //データを一時的に格納
    //     temp_responses = JSON.parse(data.responses);
    //     //テキスト入力した質問のデータを格納
    //     stimulusPhrase = temp_responses.surveyDemo;
    // }
};

const textDemo = {
    type: 'html-keyboard-response',
    stimulus: ' ',
    choices: jsPsych.NO_KEYS,
    trial_duration: 10000,
    on_start: function (trial) {
        //試行開始時に刺激を入力したテキストに置き換え
        trial.stimulus = stimulusPhrase;
    }
};

/*ID(日付時刻_８桁の乱数)の設定*/
// 乱数
var l = 8;
var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var cl = c.length;
var r_num = "";
for(var i=0; i<l; i++){
  r_num += c[Math.floor(Math.random()*cl)];
}
// 日付時刻
var time_date= new Date();
var year = time_date.getFullYear();
var month = time_date.getMonth()+1;
var date = time_date.getDate();
var hour = time_date.getHours();
var minute = time_date.getMinutes();
var second = time_date.getSeconds();
// ID
var exp_id = year +'_'+ month +'_'+ date +'_'+ hour +'_'+ minute +'_'+ second +'_' + r_num;

//実験を構成
const timeline = [];
//timeline.push(informedConsent);
timeline.push(surveyDemo);
timeline.push(askAboutHomeTown);
timeline.push(askAboutDenomination);

/////////////
timeline.push(askCommunitySize);
timeline.push(askCommunication);
timeline.push(askHobbyTime);
/////////////////

//timeline.push(textDemo);




jsPsych.init({
    timeline: timeline,
    on_finish: function() {
    firebase.database().ref(exp_id).set({
        data: jsPsych.data.get().values()
        })
        }
});
