let json = {
    "emergency_services": [
      {
        "number": "012-2111-0000",
        "service": "نجدة الطرق السريعة"
      },
      {
        "number": "123",
        "service": "الإسعاف"
      },
      {
        "number": "126",
        "service": "شرطة السياحة"
      },
      {
        "number": "128",
        "service": "شرطة المرور"
      },
      {
        "number": "122",
        "service": "شرطة الطوارئ"
      },
      {
        "number": "180",
        "service": "إدارة المطافئ"
      },
      {
        "number": "121",
        "service": "طوارئ الكهرباء"
      },
      {
        "number": "129",
        "service": "طوارئ الغاز"
      },
      {
        "number": "150",
        "service": "الساعة"
      },
      {
        "number": "144",
        "service": "المكالمات الدولية من خطوط أرضية"
      },
      {
        "number": "177",
        "service": "الاستعلام عن فواتير الخطوط الأرضية"
      },
      {
        "number": "16",
        "service": "شكاوى الخطوط الأرضية"
      },
      {
      "number": "012-2111-0000",
        "service": [
          "طريق القاهرة الإسكندرية الصحراوي",
        ]
      }
    ],
  }
let items = document.getElementById("items");
items.innerHTML = "";
json.emergency_services.forEach(element => {
items.innerHTML += `
  <div class="col-xl-4 col-md-6">
    <article>

      <p class="post-category">ارقام للطوارء</p>

      <h2 class="title">
        <a href="tel:${(element.number.replace("-","").replace("-","")).length > 3 ? "+2"+element.number.replace("-","").replace("-",""):element.number.replace("-","").replace("-","")}">${element.service}</a>
      </h2>

      <div style="color:var(--color-primary)" class="d-flex align-items-center justify-content-center">
        <div class="post-meta">
        <h3 class="post-author-list">
        <a href="tel:${(element.number.replace("-","").replace("-","")).length > 3 ? "+2"+element.number.replace("-","").replace("-",""):element.number.replace("-","").replace("-","")}">${element.number}</a>
        </h3>
        </div>
      </div>

    </article>
  </div>
`;
// alert(element.number)
});