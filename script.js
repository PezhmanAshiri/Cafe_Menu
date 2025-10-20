
// ——— داده‌های نمونه منو (می‌توانید قیمت‌ها و موارد را ویرایش کنید)
 const MENU = [
    { id: 'c1', title: 'اسپرسو سینگل', cat: 'Coffee', desc: 'اسپرسو خالص، طعم غلیظ', price: 155000 , img:'images/esperso.jpeg' },
    { id: 'c2', title: 'اسپرسو دبل', cat: 'Coffee', desc: 'اسپرسو خالص، طعم غلیظ', price: 55000 , img:'images/esperso.jpeg' },
    { id: 'c3', title: 'کاپوچینو', cat: 'Coffee', desc: 'اسپرسو خالص، طعم غلیظ', price: 55000 ,img:'images/capochino.jpeg' },
    { id: 'c4', title: 'لاته', cat: 'Coffee', desc: 'اسپرسو خالص، طعم غلیظ', price: 55000 },
    { id: 'c5', title: 'موکا', cat: 'Coffee', desc: 'اسپرسو خالص، طعم غلیظ', price: 55000 },
    { id: 'c6', title: 'کارامل ماکیاتو', cat: 'Coffee', desc: 'اسپرسو خالص، طعم غلیظ', price: 55000 },
    { id: 'c7', title: 'کورتادو', cat: 'Coffee', desc: 'اسپرسو خالص، طعم غلیظ', price: 55000 },
  
    { id: 'h1', title: 'هات چاکلت', cat: 'Hot Drinks', desc: 'قهوه با شیر بخار داده', price: 85000 },
    { id: 'h2', title: 'پنیک چاکلت', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
    { id: 'h3', title: 'فندق چاکلت', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
    { id: 'h4', title: 'وایت چاکلت', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
    { id: 'h5', title: 'کاپو خلیجی', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
    { id: 'h6', title: 'ماسالا', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
    { id: 'h7', title: 'کارامل بیسکوِئیت', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
    { id: 'h8', title: 'چای کرک زعفرانی', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
    { id: 'h9', title: 'شیر چای هل', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
    { id: 'h10', title: 'پسته مخصوص', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
    { id: 'h11', title: 'پسته زعفرانی', cat: 'Hot Drinks', desc: 'فوم سبک، تعادل خوب', price: 80000 },
  
    { id: 't1', title: 'چای سیاه', cat: 'Tea', desc: 'سرو در قوری، ۲ نفره', price: 60000,},
    { id: 't2', title: 'چای طعم دار', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't3', title: 'چای زعفرانی', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't4', title: 'چای کارامل', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't5', title: 'چای وانیل', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't6', title: 'ماچا', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't7', title: 'تی لاته', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't8', title: 'دمنوش چای ترش', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't10', title: 'دمنوش رنجبیل لیمو', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't11', title: 'چاش ترش', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't12', title: 'چای مراکشی', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't13', title: 'دمنوش بابونه', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't14', title: 'دمنوش ایرانی', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 't15', title: 'دمنوش fresh', cat: 'Tea', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
  
  
  
    { id: 'd1', title: 'کیک اسنیکرز', cat: 'Dessert', desc: 'با سس توت‌فرنگی', price: 95000 },
    { id: 'd2', title: 'کیک تیرامسیو', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd3', title: 'کیک شکلاتی', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd4', title: 'چیز کیک اورئو', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd5', title: 'چیز کیک لوتوس', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd6', title: 'راش کیک', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd7', title: 'کیک هویچ گردو', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd8', title: 'کیک پسته', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd9', title: 'کیک سرشیر', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd10', title: 'کیک نوتلا', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd11', title: 'کوکی نیویورکی', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
    { id: 'd12', title: 'کوکی رژیمی', cat: 'Dessert', desc: 'گردویی، لطیف', price: 90000 },
  
  
  
    { id: 's1', title: 'شیک نوتلا', cat: 'Shakes', desc: 'گردویی، لطیف', price: 90000 },
    { id: 's2', title: 'شیک شکلات', cat: 'Shakes', desc: 'گردویی، لطیف', price: 90000 },
    { id: 's3', title: 'شیک پینات لوتوس', cat: 'Shakes', desc: 'گردویی، لطیف', price: 90000 },
    { id: 's4', title: 'شیک بادوم زمینی', cat: 'Shakes', desc: 'گردویی، لطیف', price: 90000 },
    { id: 's5', title: 'شیک لوتوس', cat: 'Shakes', desc: 'گردویی، لطیف', price: 90000 },
    { id: 's6', title: 'شیک کارامل تردی', cat: 'Shakes', desc: 'گردویی، لطیف', price: 90000 },
    { id: 's7', title: 'شیک تیرامسیو', cat: 'Shakes', desc: 'گردویی، لطیف', price: 90000 },
    { id: 's8', title: 'شیک پروتئین', cat: 'Shakes', desc: 'گردویی، لطیف', price: 90000 },
    
  
    { id: 'ie1', title: 'آیس پیج ماکیاتو', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie2', title: 'آیس گرین ماکیاتو', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie3', title: 'آیس بری ماکیاتو', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie4', title: 'آیس کارامل ماکیاتو', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie5', title: 'آیس کافی', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie6', title: 'آیس گلدن ماکیاتو', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie7', title: 'آیس موکا', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie8', title: 'آیس کوکو ماکیاتو', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie9', title: 'آیس آمریکانو', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie10', title: 'آفوگاتو', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
    { id: 'ie11', title: 'آفو مارشلو', cat: 'Ice Espresso', desc: 'آرام‌بخش و خوش‌عطر', price: 70000 },
   
  ];

// ——— تنظیمات: شماره واتس‌اپ کافه (فقط ارقام، با کد کشور)
const WHATSAPP_NUMBER = '989393844761';

// ——— ابزار کمکی
const qs = (s, el = document) => el.querySelector(s);
const qsa = (sel) => document.querySelectorAll(sel);
const fmt = (n) => n.toLocaleString('fa-IR') + ' تومان';

// ——— متغیر شماره میز
let pickupType = ''; // کاربر هنوز چیزی انتخاب نکرده


// 🔢 تابع کمکی: تبدیل هر نوع عدد فارسی یا عربی به انگلیسی
function toEnglishDigits(str) {
  if (!str) return '';
  return str
    .replace(/[۰-۹]/g, d => '0123456789'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)]) // فارسی
    .replace(/[٠-٩]/g, d => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)]) // عربی
    .replace(/[^0-9]/g, ''); // حذف کاراکترهای غیر عددی
}

// 🎯 مقدار شماره میز همیشه مستقیم از input گرفته می‌شود
let tableNo = '';
const tableInput = document.getElementById('tableNo');
if (tableInput) {
  tableInput.addEventListener('input', () => {
    tableNo = toEnglishDigits(tableInput.value.trim());
  });
}

// 🚀 ثبت سفارش واتساپ
qs('#checkoutBtn').addEventListener('click', () => {
  const tableInput = document.getElementById('tableNo');
  const val = toEnglishDigits(tableInput?.value.trim() || '');
  tableNo = val;

  if (!tableNo) {
    alert('لطفاً ابتدا شماره میز را وارد کنید.');
    return;
  }

  if (!pickupType) {
    alert('لطفاً نحوه دریافت سفارش را انتخاب کنید.');
    return;
  }

  const msg = buildOrderMessage();
  if (!msg) {
    alert('آیتمی انتخاب نکرده‌اید');
    return;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});


window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const toggleCart = document.getElementById('showCartBtn');
  const closeCart = document.getElementById('closeCart');

  if (!header || !toggleCart) return;

  // 🎞️ انیمیشن نرم برای محو و نمایش
  function hideHeaderSmooth() {
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    header.style.opacity = '0';
    header.style.transform = 'translateY(-100%)';
    header.style.pointerEvents = 'none';
  }

  function showHeaderSmooth() {
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
    header.style.pointerEvents = 'auto';
  }


  // 🔹 وضعیت فعلی هدر
  let headerHidden = false;

  window.addEventListener('scroll', () => {
    const btnTop = toggleCart.getBoundingClientRect().top;
    const scrollTop = window.scrollY;

    const btnAbsoluteTop = scrollTop + btnTop;
    const triggerPoint = btnAbsoluteTop - window.innerHeight * 0.1;

    // وقتی رسیدی به دکمه → محو شو
    if (scrollTop >= triggerPoint && !headerHidden) {
      hideHeaderSmooth();
      headerHidden = true;
    }
    // وقتی برگشتی بالا → سریع‌تر برگرد
    else if (scrollTop < triggerPoint && headerHidden) {
      showHeaderSmooth();
      headerHidden = false;
    }
  });

  // ✳️ کلیک روی مشاهده فاکتور → محو
  toggleCart.addEventListener('click', hideHeaderSmooth);
  if (closeCart) closeCart.addEventListener('click', showHeaderSmooth);
});


document.addEventListener("DOMContentLoaded", () => {
  // 🟢 اطمینان از وجود داده‌ها
  if (typeof MENU === "undefined") {
    console.error("❌ MENU تعریف نشده است. فایل داده‌های منو باید قبل از این اسکریپت بارگذاری شود.");
    return;
  }

  // 🧩 المان‌ها
  const menuEl = document.getElementById("menu");
  const searchInput = document.getElementById("search");
  const suggestionsBox = document.getElementById("suggestions");
  const categorySelect = document.getElementById("categoryFilter");
  const ALL_MENU = [...MENU];

  // 💰 فرمت عدد
  function fmt(p) {
    return `${Number(p).toLocaleString("fa-IR")} تومان`;
  }

  // ☕ رندر منو
  function renderMenu(list) {
    menuEl.innerHTML = "";
    list.forEach(item => {
      const card = document.createElement("article");
      card.className = "card";
      card.setAttribute("data-cat", item.cat);
      card.innerHTML = `
        <div class="thumb">
          <img src="${item.img || 'images/default.jpg'}" alt="${item.title}">
        </div>
        <div class="card-body">
          <div class="title">${item.title}</div>
          <div class="meta">${item.desc || ''}</div>
          <div class="price-row">
            <div class="price">${fmt(item.price)}</div>
            <div class="qty" data-id="${item.id}">
            <button aria-label="افزودن" data-action="inc">+</button>
            <span class="q">${cart[item.id]?.qty || 0}</span>
            <button aria-label="کم کردن" data-action="dec">−</button>
            </div>
          </div>
        </div>`;
      menuEl.appendChild(card);
    });

    // ✨ انیمیشن نرم کارت‌ها
    setTimeout(() => {
      document.querySelectorAll("#menu .card").forEach((card, i) => {
        setTimeout(() => card.classList.add("show"), i * 40);
      });
    }, 30);
  }

  // 🔎 فیلتر و جستجو
  function filterMenu() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const filtered = ALL_MENU.filter(item => {
      const matchCat = category === "all" || item.cat === category;
      const matchQuery =
        query === "" ||
        item.title.toLowerCase().includes(query) ||
        (item.desc && item.desc.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });
    renderMenu(filtered);
  }

  // 🟤 تعامل با دکمه‌های + و −
  menuEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const wrap = btn.closest(".qty");
    const id = wrap.getAttribute("data-id");
    const act = btn.getAttribute("data-action");
    addItem(id, act === "inc" ? +1 : -1);
  });

  // 🔸 تغییر دسته
  categorySelect.addEventListener("change", () => {
    searchInput.value = "";
    suggestionsBox.style.display = "none";
    filterMenu();
  });

  // 🔍 جستجو با پیشنهاد
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    suggestionsBox.innerHTML = "";

    if (query.length < 2) {
      suggestionsBox.style.display = "none";
      filterMenu();
      return;
    }

    const results = ALL_MENU.filter(item =>
      item.title.toLowerCase().includes(query) ||
      (item.desc && item.desc.toLowerCase().includes(query))
    );

    if (results.length === 0) {
      suggestionsBox.style.display = "none";
      return;
    }

    results.forEach(r => {
      const div = document.createElement("div");
      div.textContent = r.title;
      div.className = "suggestion-item";
      div.addEventListener("click", () => {
        searchInput.value = r.title;
        suggestionsBox.style.display = "none";
        renderMenu(ALL_MENU.filter(item => item.title === r.title));
        updateQtyUI();
      });
      suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = "block";
    filterMenu();
  });

  // 🔹 بستن با کلیک بیرون
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-container")) {
      suggestionsBox.style.display = "none";
    }
  });

  // 🚀 شروع
  renderMenu(ALL_MENU);
  updateQtyUI();
});

// 🧾 باز و بسته شدن پنل فاکتور
const showCartBtn = document.getElementById("showCartBtn");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartOverlay = document.getElementById("cartOverlay");


if (showCartBtn && cartPanel && closeCart) {
  // باز شدن از پایین
  showCartBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // جلوگیری از بستن فوری
    cartPanel.classList.add("active");
  });

  // بستن با دکمه ×
  closeCart.addEventListener("click", (e) => {
    e.stopPropagation();
    cartPanel.classList.remove("active");
  });

  // ❌ جلوگیری از بسته شدن هنگام کلیک داخل پنل
  cartPanel.addEventListener("click", (e) => e.stopPropagation());

  // ✅ بستن فقط وقتی بیرون از پنل کلیک شد
  document.addEventListener("click", (e) => {
    const isInsideCart = e.target.closest(".cart-panel");
    const isCartButton = e.target.closest("#showCartBtn");
    if (!isInsideCart && !isCartButton) {
      cartPanel.classList.remove("active");
    }
  });
} else {
  console.warn("❗ یکی از المان‌های سبد خرید پیدا نشد.");
}

 




// 📦 نحوه دریافت سفارش
document.querySelectorAll('input[name="pickupType"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    pickupType = e.target.value;
  });
});


 


// سبد خرید در حافظه
localStorage.removeItem('cafe_cart'); // ✅ با هر بار رفرش، سبد خالی می‌شوذ

// ——— سبد خرید
let cart = JSON.parse(localStorage.getItem('cafe_cart') || '{}');
function saveCart() { localStorage.setItem('cafe_cart', JSON.stringify(cart)); }
function updateQtyUI() {
  qsa('.qty').forEach(q => {
    const id = q.getAttribute('data-id');
    const v = cart[id]?.qty || 0;
    q.querySelector('.q').textContent = v;
  });
}
function renderCart() {
  const cartItemsEl = qs('#cartItems');
  const entries = Object.values(cart);
  if (entries.length === 0) {
    cartItemsEl.className = 'cart-empty';
    cartItemsEl.textContent = 'آیتمی انتخاب نکرده اید';
    qs('#cartTotal').textContent = '0';
    return;
  }
  cartItemsEl.className = '';
  cartItemsEl.innerHTML = '';
  let total = 0;
  entries.forEach(it => {
    total += it.qty * it.price;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div>
        <div>${it.title} × ${it.qty}</div>
        <small>${fmt(it.price)} </small>
      </div>
      <div>
        <button class="btn btn-ghost" data-id="${it.id}" data-act="minus" style="padding:6px 10px">−</button>
        <button class="btn btn-ghost" data-id="${it.id}" data-act="plus" style="padding:6px 10px">+</button>
        <button class="btn btn-danger" data-id="${it.id}" data-act="remove" style="padding:6px 10px">حذف</button>
      </div>`;
    cartItemsEl.appendChild(row);
  });
  qs('#cartTotal').textContent = fmt(total);
  updateCartCount();
}

// ✅ شمارنده آیتم‌های سبد خرید روی دکمه
function updateCartCount() {
  const countEl = document.getElementById("cartCount");
  if (!countEl) return;

  // محاسبه مجموع آیتم‌ها
  const totalItems = Object.values(cart).reduce((sum, it) => sum + (it.qty || 0), 0);

  // بروزرسانی نمایش
  if (totalItems > 0) {
    countEl.textContent = totalItems;
    countEl.classList.remove("hidden");
  } else {
    countEl.textContent = "0";
    countEl.classList.add("hidden");
  }
}




// ——— افزودن یا حذف آیتم
function addItem(id, delta) {
  const item = MENU.find(x => x.id === id);
  if (!item) return;
  const cur = cart[id]?.qty || 0;
  const next = Math.max(0, cur + delta);
  if (next === 0) delete cart[id];
  else cart[id] = { id, title: item.title, price: item.price, qty: next };
  saveCart(); updateQtyUI(); renderCart(); updateCartCount();

}



qs('#cartPanel').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b) return;
  const id = b.getAttribute('data-id');
  const act = b.getAttribute('data-act');
  if (!id) return;
  if (act === 'plus') addItem(id, +1);
  if (act === 'minus') addItem(id, -1);
  if (act === 'remove') { delete cart[id]; saveCart(); updateQtyUI(); updateCartCount();
  renderCart(); }
});

  







// ——— ثبت سفارش
function buildOrderMessage() {
  const entries = Object.values(cart);
  if (entries.length === 0) return '';
  const lines = [];
  lines.push('سفارش جدید از سایت کافه');
  lines.push(`میز: ${tableNo || '—'}`);
  lines.push(`نحوه دریافت: ${pickupType === 'dinein' ? 'در کافه میل می‌شود' : 'بیرون‌بر'}`);
  lines.push('');
  entries.forEach(it => {
    lines.push(`• ${it.title} × ${it.qty} = ${(it.qty * it.price).toLocaleString('fa-IR')} تومان`);
  });
  const total = entries.reduce((s, it) => s + it.qty * it.price, 0);
  lines.push('');
  lines.push(`جمع کل: ${total.toLocaleString('fa-IR')} تومان`);
  lines.push(`زمان: ${new Date().toLocaleString('fa-IR')}`);
  return lines.join('\n');
}




qs('#confirmLocalBtn').addEventListener('click', () => {
  const tableInput = document.getElementById('tableNo');
  const tableValue = toEnglishDigits(tableInput.value.trim());
  tableNo = tableValue;
  if (!tableNo) { alert('لطفاً ابتدا شماره میز را وارد کنید.'); return; }
  if (!pickupType) { alert('لطفاً نحوه دریافت سفارش را انتخاب کنید.'); return; }
  const msg = buildOrderMessage();
  if (!msg) { alert('آیتمی انتخاب نکرده اید'); return; }
  const code = Math.random().toString(36).slice(2, 8).toUpperCase();
  localStorage.setItem('last_order', JSON.stringify({ code, table: tableNo, cart, at: Date.now() }));
  alert('سفارش شما ثبت شد. کد پیگیری: ' + code + '\nآن را به گارسون نشان دهید.');
});

// ——— حذف سبد
qs('#clearBtn').addEventListener('click', () => {
  if (confirm('سفارشات حذف شوند؟')) { cart = {}; saveCart(); updateQtyUI(); updateCartCount();
  renderCart(); }
});

// ——— راه‌اندازی اولیه
(function init() {
  updateQtyUI();
  updateCartCount();
  renderCart();
  const y = qs('#year');
  if (y) y.textContent = new Date().getFullYear();
})();




