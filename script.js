
function showTaniMessage() {
    var elements = document.getElementsByClassName("taniMessage");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = "1";
    }
}

function showTaniMessage2() {
    var elements = document.getElementsByClassName("taniMessage2");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = "1";
    }
}

function notEnough() {
    var elements = document.getElementsByClassName("taniSougouMessage");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.opacity = "1";
    }
}


function notYetStyle(notYet){
    notYet.style.color = 'red';
    notYet.style.fontWeight = 'bold';
    notYet.style.backgroundColor = 'white';
}

function done(done){
    done.style.color = 'black';
    done.style.fontWeight = 'normal';
    done.style.backgroundColor = 'rgb(243, 243, 243)';
}



function extractAndSaveLastDigit(inputString) {
    let savedLastDigit = null;
    if (typeof inputString !== 'string' || inputString.length === 0) {
      console.error('Input should be a non-empty string.');
      return;
    }
  
    const lastCharacter = inputString.slice(-1);
    const lastDigit = parseInt(lastCharacter);
  
    if (isNaN(lastDigit)) {
      console.error('Last character is not a valid digit.');
      return;
    }
    savedLastDigit = lastDigit; // 数値を保存する
    return savedLastDigit;
  }

// ファイルを非同期で読み込む関数
function readFileAsync(file, callback) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const content = event.target.result;
      callback(content);
    };
    reader.readAsText(file);
}

function cal(){
    // HTMLテーブル要素を取得
    const table = document.querySelector('table');
    const subjectInfoArray = [];

    // table内の全ての行を取得
    const rows = table.querySelectorAll('tr.subjectMain');
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        // 行内のセルを取得
        const cells = row.querySelectorAll('td');

        // subjectInfoオブジェクトを生成して初期化
        const subjectInfo = {
            subjectName: '',
            subjectPoint: '',
            alreadyTaken: false,
            futurePlan: false,
        };
        // 科目コードを取得してくる
        const classList = row.classList;
        for (const className of classList) {
            if (className.startsWith('X')) {
                subjectInfo.subjectName = className.split(' ')[0]; // スペースで分割して先頭部分を取得
                break;
            }
        }

        for (const className of classList) {
            if (className.startsWith('P')) {
                subjectInfo.subjectPoint = className.split(' ')[0]; // スペースで分割して先頭部分を取得
                break;
            }
        }

        // チェックボックスの状態を取得し代入
        const checkboxes = row.querySelectorAll('input[type="checkbox"]');
        subjectInfo.alreadyTaken = checkboxes[0].checked;
        subjectInfo.futurePlan = checkboxes[1].checked;
        // subjectInfoを配列に追加
        subjectInfoArray.push(subjectInfo);
    }

    // ファイル選択時の処理
    let point = 0;
    for(let i = 0; i < subjectInfoArray.length; i++){
        if(subjectInfoArray[i].alreadyTaken){
            let n;
            n = extractAndSaveLastDigit(subjectInfoArray[i].subjectPoint);
            point+=n;
        }
    }
    console.log('point=' + point);

    let nowPoint = document.getElementsByClassName("taniSenmon");

    for (let i = 0; i < nowPoint.length; i++) {
        nowPoint[i].textContent = point.toString();
    }

    point = 0;
    for(let i = 0; i < subjectInfoArray.length; i++){
        if(subjectInfoArray[i].alreadyTaken || subjectInfoArray[i].futurePlan){
            let n;
            n = extractAndSaveLastDigit(subjectInfoArray[i].subjectPoint);
            point+=n;
        }
    }

    let futurePoint = document.getElementsByClassName("taniSenmonFuture");

    for (let i = 0; i < futurePoint.length; i++) {
        futurePoint[i].textContent = point.toString();
    }

    showTaniMessage();
    

    let n = 0;
    const mustElementX1017 = document.querySelector('table .X1017');
    while(subjectInfoArray[n].subjectName != 'X1017'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1017);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1017);
    }
    n = 0;
    const mustElementX1018 = document.querySelector('table .X1018');
    while(subjectInfoArray[n].subjectName != 'X1018'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1018);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1018);
    }
    n = 0;
    const mustElementX1019 = document.querySelector('table .X1019');
    while(subjectInfoArray[n].subjectName != 'X1019'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1019);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1019);
    }
    n = 0;
    const mustElementX1016 = document.querySelector('table .X1016');
    while(subjectInfoArray[n].subjectName != 'X1016'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1016);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1016);
    }
    n = 0;
    const mustElementX1014 = document.querySelector('table .X1014');
    while(subjectInfoArray[n].subjectName != 'X1014'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1014);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1014);
    }
    n = 0;
    const mustElementX1001 = document.querySelector('table .X1001');
    while(subjectInfoArray[n].subjectName != 'X1001'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1001);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1001);
    }
    n = 0;
    const mustElementX1003 = document.querySelector('table .X1003');
    while(subjectInfoArray[n].subjectName != 'X1003'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1003);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1003);
    }
    n = 0;
    const mustElementX1004 = document.querySelector('table .X1004');
    while(subjectInfoArray[n].subjectName != 'X1004'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1004);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1004);
    }
    n = 0;
    const mustElementX1013 = document.querySelector('table .X1013');
    while(subjectInfoArray[n].subjectName != 'X1013'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1013);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1013);
    }
    n = 0;
    const mustElementX1012 = document.querySelector('table .X1012');
    while(subjectInfoArray[n].subjectName != 'X1012'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1012);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1012);
    }
    n = 0;
    const mustElementX1005 = document.querySelector('table .X1005');
    while(subjectInfoArray[n].subjectName != 'X1005'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1005);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1005);
    }
    n = 0;
    const mustElementX1006 = document.querySelector('table .X1006');
    while(subjectInfoArray[n].subjectName != 'X1006'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1006);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1006);
    }
    n = 0;
    const mustElementX1011 = document.querySelector('table .X1011');
    while(subjectInfoArray[n].subjectName != 'X1011'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX1011);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX1011);
    }
    n = 0;
    const mustElementX3003 = document.querySelector('table .X3003');
    while(subjectInfoArray[n].subjectName != 'X3003'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        notYetStyle(mustElementX3003);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        done(mustElementX3003);
    }
}

function cal2(){
    let msg = '';
    let sougouMessage = document.getElementsByClassName("taniSougouMessage");
    for (let i = 0; i < sougouMessage.length; i++) {
        sougouMessage[i].textContent = "";
    }

    // HTMLテーブル要素を取得
    const table = document.querySelector('.sub table');
    const subjectInfoArray = [];

    // table内の全ての行を取得
    const rows = table.querySelectorAll('tr.subjectSub');
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        // 行内のセルを取得
        const cells = row.querySelectorAll('td');

        // subjectInfoオブジェクトを生成して初期化
        const subjectInfo = {
            subjectName: '',
            subjectPoint: '',
            alreadyTaken: false,
            futurePlan: false,
        };

        // 科目コードを取得してくる
        const classList = row.classList;
        for (const className of classList) {
            if (className.startsWith('G')) {
                subjectInfo.subjectName = className.split(' ')[0]; // スペースで分割して先頭部分を取得
                break;
            }
        }

        for (const className of classList) {
            if (className.startsWith('P')) {
                subjectInfo.subjectPoint = className.split(' ')[0]; // スペースで分割して先頭部分を取得
                break;
            }
        }

        // チェックボックスの状態を取得し代入
        const checkboxes = row.querySelectorAll('input[type="checkbox"]');
        subjectInfo.alreadyTaken = checkboxes[0].checked;
        subjectInfo.futurePlan = checkboxes[1].checked;
        // subjectInfoを配列に追加
        subjectInfoArray.push(subjectInfo);
    }

    // ファイル選択時の処理
    let point = 0;
    for(let i = 0; i < subjectInfoArray.length; i++){
        if(subjectInfoArray[i].alreadyTaken){
            let n;
            n = extractAndSaveLastDigit(subjectInfoArray[i].subjectPoint);
            point+=n;
        }
    }
    console.log('point=' + point);

    let nowPoint = document.getElementsByClassName("taniSenmon2");

    for (let i = 0; i < nowPoint.length; i++) {
        nowPoint[i].textContent = point.toString();
    }

    point = 0;
    for(let i = 0; i < subjectInfoArray.length; i++){
        if(subjectInfoArray[i].alreadyTaken || subjectInfoArray[i].futurePlan){
            let n;
            n = extractAndSaveLastDigit(subjectInfoArray[i].subjectPoint);
            point+=n;
        }
    }

    let futurePoint = document.getElementsByClassName("taniSenmonFuture2");

    for (let i = 0; i < futurePoint.length; i++) {
        futurePoint[i].textContent = point.toString();
    }

    showTaniMessage2();
    
    let n = 0;
    let groupB = 0;
    
    const mustElementG1829 = document.querySelector('.sub table .G1829');
    while(subjectInfoArray[n].subjectName != 'G1829'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
        notYetStyle(mustElementG1829);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
        done(mustElementG1829);
    }
    const mustElementG1830 = document.querySelector('.sub table .G1830');
    while(subjectInfoArray[n].subjectName != 'G1830'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
        notYetStyle(mustElementG1830);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
        done(mustElementG1830);
    }
    const mustElementG1831 = document.querySelector('.sub table .G1831');
    while(subjectInfoArray[n].subjectName != 'G1831'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
        notYetStyle(mustElementG1831);
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
        done(mustElementG1831);
    }
    while(subjectInfoArray[n].subjectName != 'G3834'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3832'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3833'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3835'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3836'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3837'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3838'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3845'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G3846'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupB+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupB+=2;
    }


    if(groupB<6){
        console.log('グループBの単位不足');
        msg = 'グループBの単位不足';
    }
    for (let i = 0; i < sougouMessage.length; i++) {
        sougouMessage[i].textContent += msg;
    }

    let groupA = groupB;

    while(subjectInfoArray[n].subjectName != 'G3843'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupA+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupA+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3844'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupA+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupA+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3841'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupA+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupA+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3842'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupA+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupA+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3839'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupA+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupA+=1;
    }
    while(subjectInfoArray[n].subjectName != 'G3840'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupA+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupA+=1;
    }

    if(groupA<8){
        console.log('グループAの単位不足');
        msg = 'グループAの単位不足';
    }

    for (let i = 0; i < sougouMessage.length; i++) {
        sougouMessage[i].textContent += msg;
    }

    let groupC = groupA;

    while(subjectInfoArray[n].subjectName != 'G2834'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2835'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2836'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2837'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2036'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2001'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2026'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2064'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2065'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2014'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2013'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2066'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2048'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2010'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2067'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2821'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2069'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2841'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2822'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2008'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2009'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2838'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2839'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2840'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2070'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2823'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2824'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }
    while(subjectInfoArray[n].subjectName != 'G2833'){
        n++;
    }
    if(!subjectInfoArray[n].alreadyTaken && !subjectInfoArray[n].futurePlan){
        groupC+=0;
    }else if(subjectInfoArray[n].alreadyTaken || subjectInfoArray[n].futurePlan){
        groupC+=2;
    }

    if(groupC<24){
        console.log('グループCの単位不足');
        msg = 'グループCの単位不足';
    }

    for (let i = 0; i < sougouMessage.length; i++) {
        sougouMessage[i].textContent += msg;
    }

    if(groupA<6 || groupB<8 || groupC<24){
        notEnough();
    }

    console.log(groupA);
    console.log(groupB);
    console.log(groupC);
}
