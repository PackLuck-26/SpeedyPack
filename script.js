
let cartCount = 0;
const cartCountEl = document.getElementById("cartCount");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount += 1;
    cartCountEl.textContent = cartCount;
    showToast(`เพิ่ม ${button.dataset.name} ลงตะกร้าแล้ว`);
  });
});

document.getElementById("categoryToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

document.querySelectorAll(".category-card").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    document.querySelectorAll(".product-card").forEach((card) => {
      const match = card.dataset.category === category;
      card.style.display = match ? "block" : "none";
    });
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("showAll").addEventListener("click", () => {
  document.querySelectorAll(".product-card").forEach((card) => {
    card.style.display = "block";
  });
});

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const keyword = document.getElementById("searchInput").value.trim().toLowerCase();

  if (!keyword) {
    document.querySelectorAll(".product-card").forEach((card) => card.style.display = "block");
    return;
  }

  let found = 0;
  document.querySelectorAll(".product-card").forEach((card) => {
    const text = card.innerText.toLowerCase();
    const match = text.includes(keyword);
    card.style.display = match ? "block" : "none";
    if (match) found += 1;
  });

  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  showToast(found ? `พบสินค้า ${found} รายการ` : "ไม่พบสินค้าที่ค้นหา");
});

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("newsletterEmail").value.trim();
  if (email) {
    showToast("สมัครรับข่าวสารเรียบร้อยแล้ว");
    event.target.reset();
  }
});
