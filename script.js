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
    detail: "กระดาษความร้อนสำหรับเครื่องพิมพ์ใบเสร็จและเครื่อง POS ให้ข้อความอ่านง่ายและใช้งานสะดวก ไม่ต้องใช้ริบบอนหมึก",
    suitable: "ร้านอาหาร, ร้านค้าปลีก, คาเฟ่, จุดชำระเงิน และเครื่องพิมพ์ใบเสร็จระบบความร้อน",
    tip: "ควรวัดหน้ากว้างกระดาษและพื้นที่ใส่ม้วนของเครื่องพิมพ์เดิม เพื่อเลือกขนาดที่ใช้งานได้พอดี",
    variants: [
      { label: "57×40 mm", price: 7 },
      { label: "57×50 mm", price: 12 },
      { label: "80×80 mm", price: 35 }
    ]
  },
  mailer: {
    name: "ถุงไปรษณีย์พลาสติก",
    detail: "ถุงสำหรับแพ็กสินค้าจัดส่ง น้ำหนักเบาและใช้งานรวดเร็ว ช่วยป้องกันฝุ่นและละอองน้ำระหว่างการขนส่ง เหมาะกับสินค้าที่ไม่จำเป็นต้องใช้กล่องแข็ง",
    suitable: "เสื้อผ้า, สินค้าแฟชั่น, ของใช้ชิ้นเล็ก, ออเดอร์ออนไลน์ และพัสดุที่ต้องการลดน้ำหนักบรรจุภัณฑ์",
    tip: "เลือกขนาดให้เหลือพื้นที่สำหรับปิดปากถุง และควรเสริมวัสดุกันกระแทกเมื่อบรรจุสินค้าที่แตกหักง่าย",
    variants: [
      { label: "17×30 cm / 50 ใบ", price: 29 },
      { label: "25×35 cm / 50 ใบ", price: 39 },
      { label: "28×42 cm / 50 ใบ", price: 49 },
      { label: "38×52 cm / 50 ใบ", price: 69 }
    ]
  },
  bubblemail: {
    name: "ซองบับเบิ้ล",
    detail: "ซองจัดส่งที่มีชั้นบับเบิ้ลช่วยรองรับแรงกระแทก เหมาะกับสินค้าชิ้นเล็กที่ต้องการการป้องกันมากกว่าซองพลาสติกทั่วไป",
    suitable: "เครื่องประดับ, อุปกรณ์อิเล็กทรอนิกส์ชิ้นเล็ก, เครื่องสำอาง, ของสะสม และสินค้าที่เป็นรอยง่าย",
    tip: "เลือกขนาดซองให้มีพื้นที่รอบสินค้าเล็กน้อย หากสินค้าเปราะบางมากควรห่อบับเบิ้ลเพิ่มอีกชั้นก่อนใส่ซอง",
    variants: [
      { label: "11×15 cm / 10 ใบ", price: 24 },
      { label: "15×20 cm / 10 ใบ", price: 29 },
      { label: "20×30 cm / 10 ใบ", price: 39 },
      { label: "25×35 cm / 10 ใบ", price: 49 }
    ]
  },
  box: {
    name: "กล่องพัสดุ",
    detail: "กล่องกระดาษลูกฟูกสำหรับแพ็กและขนส่งสินค้า ช่วยคงรูปทรงของพัสดุและเพิ่มความเป็นระเบียบในการจัดส่ง มีหลายเบอร์ให้เลือกตามขนาดสินค้า",
    suitable: "สินค้าทั่วไป, พัสดุร้านค้าออนไลน์, ของใช้, ของขวัญ และสินค้าที่ต้องการโครงสร้างป้องกันระหว่างขนส่ง",
    tip: "วัดกว้าง × ยาว × สูงของสินค้ารวมวัสดุกันกระแทกก่อนเลือกเบอร์กล่อง เพื่อไม่ให้กล่องแน่นหรือมีช่องว่างมากเกินไป",
    variants: [
      { label: "เบอร์ 0", price: 25 },
      { label: "เบอร์ 2A", price: 35 },
      { label: "เบอร์ B", price: 45 },
      { label: "เบอร์ C", price: 55 }
    ]
  },
  tape: {
    name: "เทปกาว",
    detail: "เทปสำหรับปิดกล่องและแพ็กพัสดุ มีทั้งแบบใส น้ำตาล และเทประวังแตก ช่วยให้การปิดกล่องเรียบร้อยและเลือกใช้ให้เหมาะกับลักษณะการจัดส่งได้",
    suitable: "ปิดกล่องพัสดุ, แพ็กสินค้า, งานคลัง, งานย้ายของ และพัสดุที่ต้องการข้อความเตือนระวังแตก",
    tip: "เช็ดพื้นผิวกล่องให้แห้งและไม่มีฝุ่นก่อนติดเทป และกดแนวเทปให้แนบกับกล่องตลอดแนวเพื่อการยึดติดที่ดี",
    variants: [
      { label: "เทปใส 48 mm × 100 หลา / 6 ม้วน", price: 132 },
      { label: "เทปน้ำตาล 48 mm × 100 หลา / 6 ม้วน", price: 145 },
      { label: "เทประวังแตก / 6 ม้วน", price: 159 }
    ]
  },
  bubble: {
    name: "บับเบิ้ลกันกระแทก",
    detail: "พลาสติกบับเบิ้ลสำหรับห่อสินค้าและเติมช่องว่างในกล่อง ช่วยลดแรงกระแทกและลดโอกาสเกิดรอยระหว่างการขนส่ง",
    suitable: "แก้ว, เซรามิก, เครื่องใช้ไฟฟ้า, เครื่องสำอาง, ของสะสม และสินค้าที่ต้องการการปกป้องเป็นพิเศษ",
    tip: "ห่อสินค้าอย่างน้อย 1–2 รอบตามความเปราะบาง และยึดบับเบิ้ลด้วยเทปก่อนใส่ลงกล่องเพื่อไม่ให้คลายตัว",
    variants: [
      { label: "หน้ากว้าง 30 cm", price: 97 },
      { label: "หน้ากว้าง 50 cm", price: 145 },
      { label: "หน้ากว้าง 65 cm", price: 189 },
      { label: "หน้ากว้าง 130 cm", price: 349 }
    ]
  },
  film: {
    name: "ฟิล์มยืดพันพาเลท",
    detail: "ฟิล์มยืดสำหรับพันรวมสินค้า กล่อง หรือพาเลทให้แน่นเป็นชุดเดียว ช่วยลดการเคลื่อนตัวของสินค้าและช่วยป้องกันฝุ่นระหว่างจัดเก็บและขนส่ง",
    suitable: "คลังสินค้า, พาเลท, งานขนส่ง, การย้ายสินค้า และการรวมกล่องหลายชิ้นเข้าด้วยกัน",
    tip: "เริ่มพันจากฐานสินค้าและซ้อนแนวฟิล์มในแต่ละรอบเพื่อเพิ่มความแน่น หากต้องการพรางสินค้าให้เลือกแบบสีดำ",
    variants: [
      { label: "20 cm × 300 m", price: 145 },
      { label: "50 cm × 300 m", price: 189 },
      { label: "สีดำ 50 cm × 300 m", price: 219 },
      { label: "เกรดอุตสาหกรรม 50 cm", price: 269 }
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

      card.dataset.selectedVariant = String(index);
      card.querySelector(".price").textContent = `ราคา ${money(variant.price)}`;

      variantList.querySelectorAll(".modal-variant-row").forEach(item => item.classList.remove("selected"));
      row.classList.add("selected");
      showToast(`เลือก ${variant.label} แล้ว`);
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
