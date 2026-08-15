const productData = {
  thermal: {
    name: "สติ๊กเกอร์ความร้อน",
    variants: [
      { label: "40×30 mm", price: 20 },
      { label: "50×30 mm", price: 25 },
      { label: "50×50 mm", price: 35 },
      { label: "100×150 mm", price: 240 }
    ]
  },
  receipt: {
    name: "กระดาษใบเสร็จ",
    variants: [
      { label: "57×40 mm", price: 7 },
      { label: "57×50 mm", price: 12 },
      { label: "80×80 mm", price: 35 }
    ]
  },
  mailer: {
    name: "ถุงไปรษณีย์พลาสติก",
    variants: [
      { label: "17×30 cm / 50 ใบ", price: 29 },
      { label: "25×35 cm / 50 ใบ", price: 39 },
      { label: "28×42 cm / 50 ใบ", price: 49 },
      { label: "38×52 cm / 50 ใบ", price: 69 }
    ]
  },
  bubblemail: {
    name: "ซองบับเบิ้ล",
    variants: [
      { label: "11×15 cm / 10 ใบ", price: 24 },
      { label: "15×20 cm / 10 ใบ", price: 29 },
      { label: "20×30 cm / 10 ใบ", price: 39 },
      { label: "25×35 cm / 10 ใบ", price: 49 }
    ]
  },
  box: {
    name: "กล่องพัสดุ",
    variants: [
      { label: "เบอร์ 0", price: 25 },
      { label: "เบอร์ 2A", price: 35 },
      { label: "เบอร์ B", price: 45 },
      { label: "เบอร์ C", price: 55 }
    ]
  },
  tape: {
    name: "เทปกาว",
    variants: [
      { label: "เทปใส 48 mm × 100 หลา / 6 ม้วน", price: 132 },
      { label: "เทปน้ำตาล 48 mm × 100 หลา / 6 ม้วน", price: 145 },
      { label: "เทประวังแตก / 6 ม้วน", price: 159 }
    ]
  },
  bubble: {
    name: "บับเบิ้ลกันกระแทก",
    variants: [
      { label: "หน้ากว้าง 30 cm", price: 97 },
      { label: "หน้ากว้าง 50 cm", price: 145 },
      { label: "หน้ากว้าง 65 cm", price: 189 },
      { label: "หน้ากว้าง 130 cm", price: 349 }
    ]
  },
  film: {
    name: "ฟิล์มยืดพันพาเลท",
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
  const select = card.querySelector(".variant-select");
  const variant = productData[key].variants[Number(select.value)];
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
  const select = card.querySelector(".variant-select");
  const priceEl = card.querySelector(".price");
  select.innerHTML = data.variants.map((v, i) => `<option value="${i}">${v.label} — ${money(v.price)}</option>`).join("");
  priceEl.textContent = `ราคาเริ่มต้น ${money(data.variants[0].price)}`;

  select.addEventListener("change", () => {
    const variant = data.variants[Number(select.value)];
    priceEl.textContent = money(variant.price);
  });

  const qtyInput = card.querySelector(".qty-input");
  card.querySelector(".qty-minus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) - 1);
  });
  card.querySelector(".qty-plus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) + 1);
  });

  card.querySelector(".add-cart").addEventListener("click", () => {
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
  document.getElementById("modalImage").src = card.querySelector(".product-visual img").src;
  document.getElementById("modalImage").alt = data.name;
  document.getElementById("modalTitle").textContent = data.name;
  document.getElementById("modalDescription").textContent = card.querySelector(".product-description").textContent;
  document.getElementById("modalPrice").textContent = money(data.variants[0].price);
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
