function start() {
  /*document.body.innerHTML += `  
    <div id="msg-div">
      <p id="msg"></p>
    </div>`;*/

  let azkar = [
        'الله اكبر',
        'الصلاه اهم من كل شئ',
        'صلي علي النبي',
        'لا إلاه إلا الله',
        'بإسم الله تتم الامور',
        'لا إلاه الا انت سبحانك',
        'المُتوفيِ هو الله\n المُتوفيَ هو الانسان الميت',
        'إن الله يراك',
        'لا تنسي صلاتك',
        'لا تدع الهاتف يلهيك عن صلاتك',
        'اذكر الله',
        'سبحان الله',
        'بسم الله',
        'لا إله إلا الله',
        'صلي علي محمد',
        'محمد اخر الانبياء',
        'لم يذكر كل الانبياء قي القرأن',
        'سيدنا ابراهيم ابو الانبياء\n فكل الانبياء من بعده كانو من نسله',
        'تذكر ان الله يراك',
        'إن الدنيا اختبار \n فلا تدع الدنيا تلهيك عن واجبك',
        'إستعيذ بالله من شياطين الإنس و الجن'
        ]

  const msgDiv = document.getElementById('msgDiv');
  const msg = document.getElementById('msg');
  msg.innerText = azkar[Math.floor(Math.random() * azkar.length)];
  console.log(azkar[Math.floor(Math.random() * azkar.length)]);
}
start();