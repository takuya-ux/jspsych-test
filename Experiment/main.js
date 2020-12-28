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
var responseValues = [
    'あてはまらない',
    'あまりあてはまらない',
    'どちらとも言えない',
    'ややあてはまる',
    'あてはまる'
]

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
        labels: responseValues,
        required: true
    },{
        prompt: 'SNSなどのネットで知り合った知り合いが多い',
        labels: responseValues,
        required: true
    },{
        prompt: '学内(社内)でのイベントより、学内(社内)外でのイベントに参加する方が多い',
        labels: responseValues,
        required: true
    },{
        prompt: '初対面相手でも気になった人に自分から声をかけることが多い',
        labels: responseValues,
        required: true
    },{
        prompt: '何かしらのグループ活動では自分は積極的に話したり。先導して会話することが多い',
        labels: responseValues,
        required: true
    },{
        prompt: '他人の趣味に影響され、趣味が増えたことがよくある',
        labels: responseValues,
        required: true
      },{
        prompt: '自身の趣味を他人によく紹介する',
        labels: responseValues,
        required: true
        }],
    button_label: '次へ',
    scale_width: 600
};
var askCommunication = {
  type: 'survey-likert',
  questions: [{
      prompt: '相手の趣味と合わなくても会話が流暢にできる',
      labels: responseValues,
      required: true
  },{
      prompt: '会話で話が途切れることはそんなにない',
      labels: responseValues,
      required: true
  },{
      prompt: '会話しているときは基本話を聞く方だ',
      labels: responseValues,
      required: true
  },{
      prompt: '会話しているときは基本話をする方だ',
      labels: responseValues,
      required: true
  },{
      prompt: '1対1より複数人のほうが会話しやすい',
      labels: responseValues,
      required: true
  },{
      prompt: '自身の趣味のことを会話の題材にすることが多い',
      labels: responseValues,
      required: true
  },{
      prompt: '自身の趣味は人と話すことが多い',
      labels: responseValues,
      required: true
    },{
      prompt: '配信などで有名人に自身の主張はなるべく反応されたい',
      labels: responseValues,
      required: true
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
      labels: hobbyHours
    }],
    preamble: askCaution,
    button_label: '次へ',
    scale_width: 600
  };

var a
//実験を構成
var timeline = [];
timeline.push(askCommunitySize);
timeline.push(askCommunication);
timeline.push(askHobbyTime);

/*タイムラインの開始*/
jsPsych.init({
    timeline: timeline,
    on_finish: function() {
    firebase.database().ref(exp_id).set({
      data: jsPsych.data.get().values()
    })
    }
});
