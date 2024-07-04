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
                <img src="https://github.com/useronlineid/help/blob/main/am1.jpg?raw=true" alt="Image">
                <p style="position: absolute; top: 105px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>
                <p style="position: absolute; top: 125px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">JING HUAD CORPORATION COMPANY LIMITED</p>
                <p style="position: absolute; top: 145px; left: 50%; color:#656565; font-size: 20px; font-weight: bold; text-align: center; transform: translateX(-50%);width: 90%;">ที่ตั้งบริษัท: 33/3 หมู่ที่ 5 ตำบลราชาเทวะ อำเภอบางพลี จ.สมุทรปราการ 10</p>

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
                -จำนวนเงินที่ต้องดำเนินการแก้ไขระบบ: ${left} บาท
                </p>     


                <p style="position: absolute; top: 520px; left: 30px; color:#656565; font-size: 20px; font-weight: bold;width: 90%;">
                หมายเหตุ: ระบบจะปรุบปรุง และ${notes}ตามจำนวนเงินที่ยื่นเรื่อง โดยนำเงินกองทุนช่วยเหลือไปพร้อมกันเงินยื่นเรื่อง${notes}
สมาชิกดำเนินการ${notes}ให้เสร็จสิ้นตามขั้นตอนที่กำหนด
                </p>     
                <p style="position: absolute; top: 730px; left: 420px; color:#656565; font-size: 20px; font-weight: bold;">ขอแสดงความนับถือ</p>     
                <p style="position: absolute; top: 810px; left: 405px; color:#656565; font-size: 20px; font-weight: bold;">(นายวัฒน สุนทรมั่นคงศรี)</p>                 
                <p style="position: absolute; top: 835px; left: 360px; color:#656565; font-size: 20px; font-weight: bold;">ผู้จัดการ บริษัท จิงฮวด คอร์ปอเรชั่น จำกัด</p>                 
                <p style="position: absolute; top: 860px; left: 387px; color:#656565; font-size: 20px; font-weight: bold;"> ออก ณ วันที่ ${transactionDate}</p>                 

              </div>

          
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
            <script>
                window.onload = function() {
                    html2canvas(document.getElementById('capture')).then(canvas => {
                        document.body.appendChild(canvas);
                        const link = document.createElement('a');
                        link.download = 'output.png';
                        link.href = canvas.toDataURL();
                        link.click();
                    });
                };
            </script>
        </body>
        </html>
    `);
});
