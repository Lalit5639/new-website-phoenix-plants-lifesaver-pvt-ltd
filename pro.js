const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const products = document.querySelectorAll(".product-card");

function filterProducts() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  products.forEach(product => {
    const name = product.innerText.toLowerCase();
    const productCategory = product.dataset.category;

    if (
      name.includes(search) &&
      (category === "all" || productCategory === category)
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

searchInput.addEventListener("keyup", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
