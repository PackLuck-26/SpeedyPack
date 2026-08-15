const productData = {
  thermal: {
    name: "สติ๊กเกอร์ความร้อน",
    detail: "สติ๊กเกอร์ความร้อนสำหรับเครื่องพิมพ์ Direct Thermal มีหลายขนาดและจำนวนดวงให้เลือก เหมาะสำหรับพิมพ์ฉลากสินค้า บาร์โค้ด ราคา และใบปะหน้าพัสดุ โดยไม่ต้องใช้หมึกหรือริบบอน",
    suitable: "ร้านค้าออนไลน์, ฉลากสินค้า, บาร์โค้ด, ป้ายราคา, ใบปะหน้าพัสดุ และงานคลังสินค้า",
    tip: "เลือกขนาดสติ๊กเกอร์ให้เหมาะกับพื้นที่พิมพ์และรุ่นเครื่องพิมพ์ของคุณ ตัวเลขหลังขนาดคือจำนวนดวงต่อม้วน",
    variants: [
      { label: "30×20 mm / 1,000 ดวง", price: 22 },
      { label: "35×25 mm / 800 ดวง", price: 25 },
      { label: "40×20 mm / 700 ดวง", price: 20 },
      { label: "40×30 mm / 800 ดวง", price: 35 },
      { label: "50×20 mm / 1,500 ดวง", price: 55 },
      { label: "50×30 mm / 700 ดวง", price: 35 },
      { label: "50×40 mm / 700 ดวง", price: 40 },
      { label: "60×40 mm / 500 ดวง", price: 58 },
      { label: "70×40 mm / 500 ดวง", price: 40 },
      { label: "70×50 mm / 500 ดวง", price: 45 },
      { label: "80×50 mm / 500 ดวง", price: 59 },
      { label: "80×60 mm / 500 ดวง", price: 61 },
      { label: "80×90 mm / 500 ดวง", price: 87 },
      { label: "100×50 mm / 500 ดวง", price: 65 },
      { label: "100×75 mm / 500 ดวง", price: 75 },
      { label: "100×80 mm / 500 ดวง", price: 89 },
      { label: "100×100 mm / 500 ดวง", price: 79 },
      { label: "100×180 mm / 300 ดวง", price: 90 },
      { label: "100×150 mm / 350 ดวง", price: 70 },
      { label: "100×150 mm / 500 ดวง", price: 99 }
    ]
  },
  receipt: {
    name: "กระดาษใบเสร็จ",
    detail: "กระดาษความร้อนสำหรับเครื่องพิมพ์ใบเสร็จและเครื่อง POS พิมพ์คมชัด ใช้งานสะดวก และไม่ต้องใช้ริบบอนหมึก มีหลายขนาดให้เลือกตามรุ่นเครื่องพิมพ์",
    suitable: "ร้านอาหาร, ร้านค้าปลีก, คาเฟ่, จุดชำระเงิน, เครื่อง POS และเครื่องพิมพ์ใบเสร็จระบบความร้อน",
    tip: "ตรวจสอบหน้ากว้างและเส้นผ่านศูนย์กลางม้วนที่เครื่องรองรับก่อนสั่งซื้อ",
    variants: [
      { label: "57×40 mm", price: 7 },
      { label: "57×50 mm", price: 9 },
      { label: "80×50 mm", price: 15 },
      { label: "80×60 mm", price: 19 },
      { label: "80×80 mm", price: 22 }
    ]
  },
  mailer: {
    name: "ถุงไปรษณีย์พลาสติก",
    detail: "ถุงไปรษณีย์พลาสติกสำหรับแพ็กและจัดส่งสินค้า น้ำหนักเบา ใช้งานรวดเร็ว ช่วยป้องกันฝุ่นและความชื้นระหว่างขนส่ง มีหลายขนาดให้เลือก",
    suitable: "เสื้อผ้า, สินค้าแฟชั่น, ของใช้ชิ้นเล็ก, ออเดอร์ออนไลน์ และพัสดุทั่วไป",
    tip: "เลือกขนาดให้เหลือพื้นที่สำหรับปิดปากถุง และเสริมบับเบิ้ลเมื่อแพ็กสินค้าที่แตกหักหรือเป็นรอยง่าย",
    variants: [
      { label: "17×30 cm", price: 29 },
      { label: "20×30 cm", price: 38 },
      { label: "20×35 cm", price: 46 },
      { label: "25×35 cm", price: 57 },
      { label: "28×42 cm", price: 86 },
      { label: "32×45 cm", price: 96 },
      { label: "35×45 cm", price: 110 },
      { label: "38×52 cm", price: 148 },
      { label: "45×60 cm", price: 175 },
      { label: "50×70 cm", price: 250 },
      { label: "60×80 cm", price: 349 }
    ]
  },
  bubblemail: {
    name: "ซองบับเบิ้ล",
    detail: "ซองบับเบิ้ลสำหรับจัดส่งสินค้าที่ต้องการการป้องกันแรงกระแทกมากกว่าซองพลาสติกทั่วไป มีหลายขนาดและจำนวนต่อแพ็กให้เลือก",
    suitable: "เครื่องประดับ, เครื่องสำอาง, อุปกรณ์อิเล็กทรอนิกส์ชิ้นเล็ก, ของสะสม และสินค้าที่เป็นรอยง่าย",
    tip: "ตัวเลข +4 หรือ +5 คือส่วนฝากาว/ปากซอง เลือกขนาดให้มีพื้นที่รอบสินค้าเล็กน้อยเพื่อช่วยรองรับแรงกระแทก",
    variants: [
      { label: "14×17+4 cm / 20 ซอง", price: 24 },
      { label: "14×17+4 cm / 50 ซอง", price: 55 },
      { label: "14×17+4 cm / 100 ซอง", price: 99 },
      { label: "15×20+4 cm / 20 ซอง", price: 32 },
      { label: "17×18+4 cm / 20 ซอง", price: 37 },
      { label: "17×21+4 cm / 20 ซอง", price: 38 },
      { label: "17×21+4 cm / 50 ซอง", price: 94 },
      { label: "17×21+4 cm / 100 ซอง", price: 187 },
      { label: "18×23+4 cm / 20 ซอง", price: 42 },
      { label: "19×28+4 cm / 20 ซอง", price: 51 },
      { label: "20×30+4 cm / 20 ซอง", price: 52 },
      { label: "22×25+4 cm / 20 ซอง", price: 53 },
      { label: "22×25+4 cm / 50 ซอง", price: 131 },
      { label: "22×25+4 cm / 100 ซอง", price: 260 },
      { label: "26×30+4 cm / 20 ซอง", price: 64 },
      { label: "26×30+4 cm / 50 ซอง", price: 157 },
      { label: "26×30+4 cm / 100 ซอง", price: 313 },
      { label: "28×38+5 cm / 20 ซอง", price: 101 }
    ]
  },
  box: {
    name: "กล่องพัสดุ",
    detail: "กล่องกระดาษลูกฟูกสำหรับแพ็กและขนส่งสินค้า มีหลายเบอร์ให้เลือกตามขนาดสินค้า ช่วยคงรูปทรงพัสดุและป้องกันระหว่างการจัดส่ง",
    suitable: "สินค้าทั่วไป, พัสดุร้านค้าออนไลน์, ของใช้, ของขวัญ และสินค้าที่ต้องการโครงสร้างป้องกัน",
    tip: "วัดกว้าง × ยาว × สูงของสินค้ารวมวัสดุกันกระแทกก่อนเลือกเบอร์กล่อง",
    variants: [
      { label: "เบอร์ 00 (ไม่พิมพ์ลาย)", price: 25 },
      { label: "เบอร์ 00 (พิมพ์ลาย)", price: 27 },
      { label: "เบอร์ 0", price: 38 },
      { label: "เบอร์ 0+4", price: 46 },
      { label: "เบอร์ AA", price: 48 },
      { label: "เบอร์ A", price: 55 },
      { label: "เบอร์ AB", price: 63 },
      { label: "เบอร์ 2A", price: 68 },
      { label: "เบอร์ B", price: 86 },
      { label: "เบอร์ 2B", price: 115 },
      { label: "เบอร์ C", price: 117 },
      { label: "เบอร์ 2C", price: 172 },
      { label: "เบอร์ D", price: 159 },
      { label: "เบอร์ 2D", price: 229 },
      { label: "เบอร์ E", price: 211 },
      { label: "เบอร์ M", price: 279 },
      { label: "เบอร์ F", price: 306 },
      { label: "เบอร์ 2F", price: 267 }
    ]
  },
  tape: {
    name: "เทปกาว",
    detail: "เทปกาวสำหรับปิดกล่องและแพ็กพัสดุ มีหลายสีและหลายรูปแบบ รวมถึงเทประวังแตกและเทป Thank You พร้อมตัวเลือกแบบแพ็ก 6 ม้วนและยกลัง 72 ม้วน",
    suitable: "ปิดกล่องพัสดุ, แพ็กสินค้า, งานคลัง, งานย้ายของ และร้านค้าออนไลน์",
    tip: "เลือกชนิดเทปให้เหมาะกับงานและจำนวนที่ใช้งาน หากใช้เป็นประจำแบบ 72 ม้วนจะเหมาะกับการสต็อกสินค้า",
    variants: [
      { label: "เทปเหลือง 100 หลา / 6 ม้วน", price: 132 },
      { label: "เทปเหลือง 100 หลา / 72 ม้วน", price: 1580 },
      { label: "เทปใส 100 หลา / 6 ม้วน", price: 132 },
      { label: "เทปใส 100 หลา / 72 ม้วน", price: 1580 },
      { label: "เทประวังแตก 45 หลา / 6 ม้วน", price: 132 },
      { label: "เทประวังแตก 45 หลา / 72 ม้วน", price: 1580 },
      { label: "เทปฟ้า Thank You 100 หลา / 6 ม้วน", price: 102 },
      { label: "เทปฟ้า Thank You 100 หลา / 72 ม้วน", price: 1199 },
      { label: "เทปขาว Thank You 100 หลา / 6 ม้วน", price: 102 },
      { label: "เทปขาว Thank You 100 หลา / 72 ม้วน", price: 1199 },
      { label: "เทปน้ำตาล Thank You 100 หลา / 6 ม้วน", price: 102 },
      { label: "เทปน้ำตาล Thank You 100 หลา / 72 ม้วน", price: 1199 }
    ]
  },
  bubble: {
    name: "บับเบิ้ลกันกระแทก",
    detail: "บับเบิ้ลกันกระแทกแบบม้วนสำหรับห่อสินค้าและเติมช่องว่างในกล่อง มีทั้งสีใสและสีดำ หลายหน้ากว้างให้เลือก",
    suitable: "แก้ว, เซรามิก, เครื่องใช้ไฟฟ้า, เครื่องสำอาง, ของสะสม และสินค้าที่ต้องการการปกป้องเป็นพิเศษ",
    tip: "ห่อสินค้าอย่างน้อย 1–2 รอบตามความเปราะบาง และเลือกสีดำเมื่อต้องการช่วยพรางสินค้า",
    variants: [
      { label: "22×100 m / สีใส", price: 97 },
      { label: "22×100 m / สีดำ", price: 97 },
      { label: "32×100 m / สีใส", price: 123 },
      { label: "32×100 m / สีดำ", price: 123 },
      { label: "43×100 m / สีใส", price: 187 },
      { label: "43×100 m / สีดำ", price: 187 },
      { label: "65×100 m / สีใส", price: 235 },
      { label: "65×100 m / สีดำ", price: 235 },
      { label: "130×100 m / สีใส", price: 473 },
      { label: "130×100 m / สีดำ", price: 473 }
    ]
  },
  film: {
    name: "ฟิล์มยืดพันพาเลท",
    detail: "ฟิล์มยืดสำหรับพันรวมสินค้า กล่อง หรือพาเลทให้แน่น ช่วยลดการเคลื่อนตัวและป้องกันฝุ่น มีทั้งสีใสและสีดำ รวมถึงแบบแพ็ก 6 ม้วน",
    suitable: "คลังสินค้า, พาเลท, งานขนส่ง, การย้ายสินค้า และการรวมกล่องหลายชิ้น",
    tip: "เลือกความหนาไมครอนตามระดับความแข็งแรงที่ต้องการ และเลือกสีดำเมื่อต้องการพรางสินค้า",
    variants: [
      { label: "17 ไมครอน / สีใส", price: 145 },
      { label: "17 ไมครอน / สีดำ", price: 145 },
      { label: "20 ไมครอน / สีใส", price: 290 },
      { label: "20 ไมครอน / สีดำ", price: 290 },
      { label: "6 ม้วน / 17 ไมครอน / สีใส", price: 870 },
      { label: "6 ม้วน / 17 ไมครอน / สีดำ", price: 870 },
      { label: "6 ม้วน / 20 ไมครอน / สีใส", price: 1740 },
      { label: "6 ม้วน / 20 ไมครอน / สีดำ", price: 1740 }
    ]
  }
};

let cart = [];
const cartCountEl = document.getElementById("cartCount");
const toast = document.getElementById("toast");
const cartDrawer = document.getElementById("cartDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartSubtotalEl = document.getElementById("cartSubtotal");

function money(value) {
  return `฿${Number(value).toLocaleString("th-TH")}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function openCart() {
  cartDrawer.classList.add("open");
  drawerBackdrop.classList.add("show");
  cartDrawer.setAttribute("aria-hidden", "false");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("show");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function renderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartCountEl.textContent = totalQty;
  cartSubtotalEl.textContent = money(subtotal);
  cartEmptyEl.style.display = cart.length ? "none" : "block";
  cartItemsEl.innerHTML = cart.map((item, index) => `
    <div class="cart-line">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-line-copy">
        <strong>${item.name}</strong>
        <span>${item.variant}</span>
        <div class="cart-line-bottom">
          <span>${money(item.price)} × ${item.qty}</span>
          <strong>${money(item.price * item.qty)}</strong>
        </div>
      </div>
      <button class="remove-cart" type="button" data-index="${index}" aria-label="ลบสินค้า">×</button>
    </div>`).join("");

  document.querySelectorAll(".remove-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      cart.splice(Number(btn.dataset.index), 1);
      renderCart();
    });
  });
}

function getCardInfo(card) {
  const key = card.dataset.category;
  const selectedIndex = Number(card.dataset.selectedVariant);
  const variant = productData[key].variants[selectedIndex];
  const qty = Math.max(1, Number(card.querySelector(".qty-input").value) || 1);
  return {
    key,
    name: productData[key].name,
    variant: variant.label,
    price: variant.price,
    qty,
    image: card.querySelector(".product-visual img").getAttribute("src")
  };
}

document.querySelectorAll(".product-card").forEach(card => {
  const key = card.dataset.category;
  const data = productData[key];
  if (!data) return;

  const priceEl = card.querySelector(".price");
  card.dataset.selectedVariant = "";
  priceEl.textContent = `ราคาเริ่มต้น ${money(Math.min(...data.variants.map(v => v.price)))}`;

  const qtyInput = card.querySelector(".qty-input");
  card.querySelector(".qty-minus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) - 1);
  });
  card.querySelector(".qty-plus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) + 1);
  });

  card.querySelector(".add-cart").addEventListener("click", () => {
    if (card.dataset.selectedVariant === "") {
      openDetails(card);
      showToast("กรุณาเลือกขนาดหรือรูปแบบสินค้าก่อน");
      return;
    }

    const item = getCardInfo(card);
    const existing = cart.find(x => x.key === item.key && x.variant === item.variant);
    if (existing) existing.qty += item.qty;
    else cart.push(item);
    renderCart();
    showToast(`เพิ่ม ${item.name} (${item.variant}) ลงตะกร้าแล้ว`);
  });

  card.querySelector(".detail-btn").addEventListener("click", () => openDetails(card));
});

document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
drawerBackdrop.addEventListener("click", closeCart);

document.getElementById("categoryToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

document.querySelectorAll(".category-card").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.display = card.dataset.category === category ? "flex" : "none";
    });
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("showAll").addEventListener("click", () => {
  document.querySelectorAll(".product-card").forEach(card => card.style.display = "flex");
});

document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
  let found = 0;
  document.querySelectorAll(".product-card").forEach(card => {
    const match = !keyword || card.innerText.toLowerCase().includes(keyword);
    card.style.display = match ? "flex" : "none";
    if (match) found += 1;
  });
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  if (keyword) showToast(found ? `พบสินค้า ${found} รายการ` : "ไม่พบสินค้าที่ค้นหา");
});

const productModal = document.getElementById("productModal");
const detailBackdrop = document.getElementById("detailBackdrop");
function openDetails(card) {
  const key = card.dataset.category;
  const data = productData[key];
  const selectedIndex = card.dataset.selectedVariant === "" ? -1 : Number(card.dataset.selectedVariant);

  document.getElementById("modalImage").src = card.querySelector(".product-visual img").src;
  document.getElementById("modalImage").alt = data.name;
  document.getElementById("modalTitle").textContent = data.name;
  document.getElementById("modalDescription").textContent = data.detail;
  document.getElementById("modalSuitable").textContent = data.suitable;
  document.getElementById("modalTip").textContent = data.tip;
  document.getElementById("modalPrice").textContent = money(Math.min(...data.variants.map(v => v.price)));
  const variantCount = document.getElementById("modalVariantCount");
  if (variantCount) variantCount.textContent = `${data.variants.length} ตัวเลือก — แตะเพื่อเลือก`;

  const variantList = document.getElementById("modalVariantList");
  variantList.innerHTML = data.variants.map((variant, index) => `
    <button class="modal-variant-row ${index === selectedIndex ? "selected" : ""}" type="button" data-variant-index="${index}">
      <div>
        <strong>${variant.label}</strong>
        <span>ตัวเลือกที่ ${index + 1} จาก ${data.variants.length}</span>
      </div>
      <strong class="modal-variant-price">${money(variant.price)}</strong>
    </button>
  `).join("");

  variantList.querySelectorAll(".modal-variant-row").forEach(row => {
    row.addEventListener("click", () => {
      const index = Number(row.dataset.variantIndex);
      const variant = data.variants[index];
      const qty = Math.max(1, Number(card.querySelector(".qty-input").value) || 1);

      card.dataset.selectedVariant = String(index);
      card.querySelector(".price").textContent = `ราคา ${money(variant.price)}`;

      variantList.querySelectorAll(".modal-variant-row").forEach(item => item.classList.remove("selected"));
      row.classList.add("selected");

      const item = {
        key,
        name: data.name,
        variant: variant.label,
        price: variant.price,
        qty,
        image: card.querySelector(".product-visual img").getAttribute("src")
      };

      const existing = cart.find(x => x.key === item.key && x.variant === item.variant);
      if (existing) existing.qty += item.qty;
      else cart.push(item);

      renderCart();
      closeDetails();
      openCart();
      showToast(`เพิ่ม ${data.name} (${variant.label}) ลงตะกร้าแล้ว`);
    });
  });

  productModal.classList.add("open");
  detailBackdrop.classList.add("show");
  productModal.setAttribute("aria-hidden", "false");
}

function closeDetails() {
  productModal.classList.remove("open");
  detailBackdrop.classList.remove("show");
  productModal.setAttribute("aria-hidden", "true");
}
document.getElementById("detailClose").addEventListener("click", closeDetails);
detailBackdrop.addEventListener("click", closeDetails);

document.getElementById("checkoutButton").addEventListener("click", () => {
  if (!cart.length) {
    showToast("กรุณาเพิ่มสินค้าลงตะกร้าก่อน");
    return;
  }
  showToast("ขั้นตอน Checkout จะเชื่อมต่อในขั้นถัดไป");
});

document.getElementById("newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  const email = document.getElementById("newsletterEmail").value.trim();
  if (email) {
    showToast("สมัครรับข่าวสารเรียบร้อยแล้ว");
    event.target.reset();
  }
});

renderCart();
