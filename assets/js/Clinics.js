let json = {
  "clinics": [
    { "name": "عيادة الرضا لأمراض القلب", "address": "شارع الأهرامات، منطقة الجيزة", "specialty": "أمراض القلب" },
    { "name": "عيادة الابتسامة لطب الأسنان", "address": "شارع الملك فيصل، منطقة الدقي", "specialty": "طب الأسنان" },
    { "name": "عيادة الشمس لأمراض العيون", "address": "شارع التحرير، وسط القاهرة", "specialty": "أمراض العيون" },
    { "name": "عيادة السلام للأطفال والتطوير", "address": "شارع مصطفى النحاس، مصر الجديدة", "specialty": "طب الأطفال" },
    { "name": "عيادة السعادة للعلاج النفسي", "address": "شارع الهرم، منطقة الهرم", "specialty": "علم النفس السريري" },
    { "name": "عيادة الورد للجراحة التجميلية", "address": "شارع الإسكندرية، منطقة الإسكندرية", "specialty": "جراحة التجميل" },
    { "name": "عيادة السلامة للعلاج الطبيعي", "address": "شارع السلامة، منطقة الجيزة", "specialty": "العلاج الطبيعي" },
    { "name": "عيادة النيل لأمراض المعدة", "address": "شارع النيل، وسط القاهرة", "specialty": "أمراض المعدة" },
    { "name": "عيادة الزهور لجراحة التجميل", "address": "شارع الأزهر، وسط القاهرة", "specialty": "جراحة التجميل" },
    { "name": "عيادة الحياة للعلاج الطبيعي", "address": "شارع الحياة، منطقة الجيزة", "specialty": "العلاج الطبيعي" },
    { "name": "عيادة الطب العائلي للأطباء", "address": "شارع الطب العائلي، مصر الجديدة", "specialty": "طب الأسرة" },
    { "name": "عيادة السكري لأمراض السكر", "address": "شارع الزمالك، منطقة الزمالك", "specialty": "أمراض السكر" },
    { "name": "عيادة الرياضة لطب الرياضة", "address": "شارع الرياضة، منطقة القاهرة", "specialty": "الطب الرياضي" },
    { "name": "عيادة الجوهرة لأمراض الأطفال", "address": "شارع الجوهرة، منطقة الإسماعيلية", "specialty": "طب الأطفال" },
    { "name": "عيادة الكلى لأمراض الكلى", "address": "شارع الأميرات، الإسكندرية", "specialty": "أمراض الكلى" },
    { "name": "عيادة الطوارئ للحالات الطارئة", "address": "شارع الطوارئ، منطقة القاهرة", "specialty": "طب الطوارئ" },
    { "name": "عيادة الأمانة لأمراض العقم", "address": "شارع الأمانة، مصر الجديدة", "specialty": "أمراض العقم" },
    { "name": "عيادة النجاح لطب الأمراض الجلدية", "address": "شارع النجاح، وسط القاهرة", "specialty": "طب الأمراض الجلدية" },
    { "name": "عيادة الشبكية لأمراض العيون", "address": "شارع الشبكية، منطقة الهرم", "specialty": "أمراض العيون" },
    { "name": "عيادة الحياة الطبيعية للطب البديل", "address": "شارع الحياة الطبيعية، منطقة الجيزة", "specialty": "الطب البديل" },
    { "name": "عيادة الأمراض العقلية للصحة النفسية", "address": "شارع العقلية، منطقة القاهرة", "specialty": "الصحة النفسية" },
    { "name": "عيادة الرياضية لطب الأعصاب", "address": "شارع الرياضية، مصر الجديدة", "specialty": "طب الأعصاب" },
    { "name": "عيادة الحياة السعيدة لأمراض الجهاز التنفسي", "address": "شارع السعيدة، الإسكندرية", "specialty": "أمراض الجهاز التنفسي" },
    { "name": "عيادة النهر لطب الأسنان", "address": "شارع النهر، منطقة القاهرة", "specialty": "طب الأسنان" },
    { "name": "عيادة الغد لأمراض الوراثية", "address": "شارع الغد، منطقة الجيزة", "specialty": "الأمراض الوراثية" },
    { "name": "عيادة النخيل للأمراض السكرية", "address": "شارع النخيل، الإسماعيلية", "specialty": "أمراض السكر" },
    { "name": "عيادة الفرح للعلاج النفسي", "address": "شارع الفرح، منطقة القاهرة", "specialty": "علم النفس السريري" },
    { "name": "عيادة الشارقة لجراحة العظام", "address": "شارع الشارقة، منطقة الهرم", "specialty": "جراحة العظام" },
    { "name": "عيادة النجوم لطب الأشعة", "address": "شارع النجوم، الإسكندرية", "specialty": "طب الأشعة" },
    { "name": "عيادة الرعاية لعلاج الأسنان", "address": "شارع الرعاية، مصر الجديدة", "specialty": "عناية الأسنان" }
  ]
}

let items = document.getElementById("items");
items.innerHTML = "";
json.clinics.forEach(element => {
items.innerHTML += `
  <div class="col-xl-4 col-md-6">
    <article>

      <p class="post-category">${element.specialty}</p>

      <h2 class="title">
        <a href="javascript:alert('لا يوجد حجز الان')">${element.name}</a>
      </h2>

      <div class="d-flex align-items-center justify-content-end">
        <div class="post-meta">
        <p class="post-author-list">
        ${element.address}
        </p>
        </div>
      </div>

    </article>
  </div>
`;
// alert(element.number)
});