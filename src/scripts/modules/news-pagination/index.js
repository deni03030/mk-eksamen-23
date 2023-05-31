function News() {
    const paginationItems = document.querySelectorAll('.news-pagination__page-number');

    paginationItems.forEach((item) => {
        item.addEventListener('click', function () {
            const pageNumber = parseInt(this.dataset.page, 10);
            const newsCards = document.getElementById('news-cards');
            newsCards.className = `company-news container company-news--grid news-page-${pageNumber}`;
        });
    });
}

export default News;
