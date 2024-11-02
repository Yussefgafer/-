$(document).ready(function () {
    var link = window.location.href;
    var linkArray = link.split("=");
    var souraNum=linkArray[1];
    // var tafasirPages=ibnKathir[souraNum-1]['tafssirAssafa7at']
    var tafasirPages=tafasir[0][souraNum-1]['tafssirAssafa7at']
    // console.log(ibnKathir[souraNum-1]['tafssirAssafa7at']);
    var safhaSelect = $('#safha-select');
    var tafsirSelect = $('#tafsir-select');
    var tafsirP = $('#tafsir-text');
    var souraTitle = $('#souraName');
    souraTitle.append(Object.keys(quran)[souraNum-1])
    addSafhaOptions(safhaSelect);
    // var tafasirArray=['ibnKathir','jlalyn','mokhtasar','moyassar','qortobi','sa3di','shawkani','tabari'];
    // var tafasirArrayNames=['ابن كثير','الجلالين','المختصر','الميسر','القرطبي','السعدي','الشوكاني','الطبري'];
    var tafasirArray=['ibnKathir','jlalyn','mokhtasar','moyassar','sa3di'];
    var tafasirArrayNames=['ابن كثير','الجلالين','المختصر','الميسر','السعدي'];
    addTafasirOptions(tafsirSelect);

    // var currentPage=1;
    var currentPage=quran[Object.keys(quran)[souraNum-1]]['startPage']
    var currentTafsir=1;
    filltafsir(currentPage,currentTafsir)
    // fillFirst(currentPage,currentTafsir)
    // console.log(findSoura(5));

   safhaSelect.on("change", function (e) {
       // document.getElementById('tafsir-text').innerHTML=''
       currentPage=this.value
    filltafsir(currentPage,currentTafsir)
    });
   tafsirSelect.on("change", function (e) {
    // document.getElementById('tafsir-text').innerHTML=''
    currentTafsir=this.value
    filltafsir(currentPage,currentTafsir)
    // console.log(this.value);
    });
    /*********************************************************FUNCTIONS*****************************************************/
    function fillFirst(currentPage,currentTafsir){
        document.getElementById('tafsir-text').innerHTML=''
        var tafsirName=tafasirArray[currentTafsir-1]
        // var souraId=findSoura(currentPage) //from 1 to 114
        var souraId=findSouraNew(currentPage,tafasir[currentTafsir-1]) //from 1 to 114
        // console.log(souraId-1);
        // console.log(ibnKathir[souraId-1]);
        var contentObj=ibnKathir[souraId-1].tafssirAssafa7at
        var indexInSouraArray=currentPage-ibnKathir[souraId-1].assaf7aNbrFrom
        // console.log(contentObj[indexInSouraArray][currentPage]);
        var tafsirText=contentObj[indexInSouraArray][currentPage];
        tafsirP.append(tafsirText)
    }
    function filltafsir(currentPage,currentTafsir){
        document.getElementById('tafsir-text').innerHTML=''
        var tafsirName=tafasirArray[currentTafsir-1]
        // var souraId=findSoura(currentPage) //from 1 to 114
        var souraId=findSouraNew(currentPage,tafasir[currentTafsir-1]) //from 1 to 114

        // var contentObj=ibnKathir[souraId-1].tafssirAssafa7at
        // var indexInSouraArray=currentPage-ibnKathir[souraId-1].assaf7aNbrFrom
        var contentObj=tafasir[currentTafsir-1][souraId-1].tafssirAssafa7at
        var indexInSouraArray=currentPage-tafasir[currentTafsir-1][souraId-1].assaf7aNbrFrom
        // console.log(contentObj[indexInSouraArray][currentPage]);
        // console.log('souraId: '+souraId);
        // console.log('currentTafsir: '+currentTafsir);
        // console.log('currentPage: '+currentPage);
        // console.log('indexInSouraArray: '+indexInSouraArray);
        // console.log(tafasir[currentTafsir-1][souraId-1]);
        var tafsirText=contentObj[indexInSouraArray][currentPage];

        tafsirP.append(tafsirText)
    }
    
    function addTafasirOptions(tafsir) {
        tafsir.innerHTML = ''
    
        for (var i = 0; i < tafasirArrayNames.length; i++) {
    
            var option = document.createElement("option");
            option.innerHTML = tafasirArrayNames[i]
            // option.value =tafasirArray[i]
            option.value =i+1
            // if (i == (souraNum - 1)) {
            //     option.setAttribute('selected', 'selected')
            // }
            tafsir.append(option);
        }
    }
    
    function addSafhaOptions(soura) {
        soura.innerHTML = ''
    
        // for (var i = 0; i < 604; i++) {
        for (var i = 0; i < tafasirPages.length; i++) {
    
            var option = document.createElement("option");
            // option.innerHTML = 'الصفحة '+(i+1)
            option.innerHTML = 'الصفحة '+(Object.keys(tafasirPages[i])[0])
            // option.value =(i+1)
            option.value =Object.keys(tafasirPages[i])[0]
            // if (i == (souraNum - 1)) {
            //     option.setAttribute('selected', 'selected')
            // }
            soura.append(option);
        }
    }
// console.log('findSouraNew(604): ');
// console.log(ibnKathir[findSouraNew(604,ibnKathir)-1]);
    function findSoura(page) {
        for (var i = 0; i < Object.keys(quran).length; i++) {
            // console.log(`start: ${quran[Object.keys(quran)[i]].startPage}-finish ${quran[Object.keys(quran)[i]].endPage}`);
            if (parseInt(page) >= parseInt(quran[Object.keys(quran)[i]].startPage) && parseInt(page) <= parseInt(quran[Object.keys(quran)[i]].endPage)) {
                return (i + 1)
            }
        }
    }
    function findSouraNew(page,qObject) {
        var sourasArray=[]
        for (var i = 0; i < Object.keys(qObject).length; i++) {

            // console.log(`start: ${quran[Object.keys(quran)[i]].startPage}-finish ${quran[Object.keys(quran)[i]].endPage}`);
            if (parseInt(page) >= parseInt(qObject[i]["assaf7aNbrFrom"]) && parseInt(page) <= parseInt(qObject[i]["assaf7aNbrTo"])) {
            //    console.log(qObject[i]);
                // return (i + 1)
                sourasArray.push((i+1))
            }
        }
        // return sourasArray[1]
        return sourasArray[sourasArray.length-1]
    }
    //problem with al ma2ida because it starts at page 106 the endPage of Annisae and findSoura returns annisae object
});    
