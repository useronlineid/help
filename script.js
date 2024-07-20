document.getElementById('saveImage').addEventListener('click', function() {
    const transactionDate = document.getElementById('transactionDate').value || "-";
    const notes = document.getElementById('notes').value || "-";
    const accountNumber = document.getElementById('accountNumber').value || "-";
    const originalamount = document.getElementById('originalamount').value || "-";
    const percent = document.getElementById('percent').value || "-";
    const help = document.getElementById('help').value || "-";
    const left = document.getElementById('left').value || "-";
 
    // สร้างหน้าใหม่และเปิด
    const outputWindow = window.open('', '', 'width=674.5,height=953.5');
    outputWindow.document.write(`
        <html>
        <head>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div id="capture">
                <img src="https://github.com/useronlineid/help/blob/main/share.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 105px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);" id="companyNameDisplay">${document.getElementById('companyName').innerText}</p>
                <p style="position: absolute; top: 125px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 80%;" id="companyNameEngDisplay">${document.getElementById('companyNameEng').innerText}</p>
                <p style="position: absolute; top: 145px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 80%;" id="companyAddressDisplay">${document.getElementById('companyAddress').innerText}</p>

                <p style="position: absolute; top: 40px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เลขที่ 12685/2567</p>     
                
                <p style="position: absolute; top: 180px; left: 500px; color:#656565; font-size: 20px; font-weight: bold;">${transactionDate}</p>     
                <p style="position: absolute; top: 218px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรื่อง: การยื่นเรื่องเข้าระบบเพื่อ${notes}</p>     
                <p style="position: absolute; top: 250px; left: 40px; color:#656565; font-size: 20px; font-weight: bold;">เรียน ${accountNumber}</p>     
                
                <p style="position: absolute; top: 290px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                เนื่องจากการตรวจสอบพบความผิดพลาดในระบบของสมาชิก จึงขอให้สมาชิกยื่นเรื่องเข้าระบบ
จำนวนเงิน ${originalamount} บาท เพื่อทำการ${notes} อย่างไรก็ตามเพื่อเป็นการช่วยเหลือสมาชิก ทางบริษัทฯ  
ได้จัดสรรเงินกองทุนช่วยเหลือสมาชิกจำนวน ${percent} หรือประมาณ ${help} บาท เพื่อให้สมาชิก${notes}
ได้ด้วยจำนวนเงินที่น้อยลง และดำเนินการให้เสร็จสิ้น 
                </p>     

                <p style="position: absolute; top: 410px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                รายละเอียดการดำเนินการ: <br>
                -จำนวนเงินที่ต้องยื่นเรื่องเข้าระบบ: ${originalamount} บาท<br>
                -จำนวนเงินช่วยเหลือจากกองทุน: ${percent} (ประมาณ ${help} บาท)<br>
                -จำนวนเงินที่ต้องดำเนินการ: ${left} บาท
                </p>     


                <p style="position: absolute; top: 520px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                หมายเหตุ: ระบบจะปรับปรุง${notes}ตามจำนวนเงินที่ยื่นเรื่อง โดยนำเงินกองทุนช่วยเหลือไปพร้อมกันเงินยื่นเรื่อง${notes}
สมาชิกดำเนินการ${notes}ให้เสร็จสิ้นตามขั้นตอนที่กำหนด
                </p>     
                <p style="position: absolute; top: 730px; left: 420px; color:#656565; font-size: 20px; font-weight: bold;">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 810px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);" id="companyName1Display">(${document.getElementById('companyName1').innerText})</p>
                <p style="position: absolute; top: 835px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 40%;" id="companyNameDisplay">ผู้จัดการ ${document.getElementById('companyName').innerText}</p>
                <p style="position: absolute; top: 860px; left: 70.2%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);">ออก ณ วันที่ ${transactionDate}</p>   
              </div>
        </body>
        </html>
    `);
});

document.getElementById('editCompanyInfo').addEventListener('click', function() {
    document.getElementById('editCompanyModal').style.display = 'block';
});

document.getElementById('saveCompanyInfo').addEventListener('click', function() {
    const newCompanyName = document.getElementById('newCompanyName').value;
    const newCompanyNameEng = document.getElementById('newCompanyNameEng').value;
    const newCompanyAddress = document.getElementById('newCompanyAddress').value;
    const newCompanyName1 = document.getElementById('newCompanyName1').value;

    if (newCompanyName) {
        document.getElementById('companyName').innerText = newCompanyName;
    }
    if (newCompanyNameEng) {
        document.getElementById('companyNameEng').innerText = newCompanyNameEng;
    }
    if (newCompanyAddress) {
        document.getElementById('companyAddress').innerText = newCompanyAddress;
    }
    if (newCompanyName1) {
        document.getElementById('companyName1').innerText = newCompanyName1;
    }
    document.getElementById('editCompanyModal').style.display = 'none';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('editCompanyModal').style.display = 'none';
});
