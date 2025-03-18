// Diary page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const filterButtons = document.querySelectorAll('.filter-btn');
    const diaryEntries = document.querySelectorAll('.diary-entry');
    const searchInput = document.getElementById('diary-search');

    // Initialize animations
    initEntryAnimations();

    // Filter entries by category
    function filterEntries(category) {
        diaryEntries.forEach(entry => {
            if (category === 'all' || entry.dataset.category === category) {
                entry.classList.add('visible');
                setTimeout(() => {
                    entry.style.display = '';
                    setTimeout(() => {
                        entry.classList.add('fade-in');
                    }, 10);
                }, 10);
            } else {
                entry.classList.remove('fade-in');
                setTimeout(() => {
                    entry.classList.remove('visible');
                    setTimeout(() => {
                        entry.style.display = 'none';
                    }, 300);
                }, 10);
            }
        });
    }

    // Search entries by content
    function searchEntries(searchTerm) {
        const term = searchTerm.toLowerCase().trim();

        if (term === '') {
            // If search is empty, show all entries based on current category filter
            const activeCategory = document.querySelector('.filter-btn.active').dataset.filter;
            filterEntries(activeCategory);
            return;
        }

        diaryEntries.forEach(entry => {
            const title = entry.querySelector('.entry-title').textContent.toLowerCase();
            const content = entry.querySelector('.entry-content').textContent.toLowerCase();
            const tags = Array.from(entry.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            const category = entry.dataset.category.toLowerCase();

            // Check if entry matches search term
            const matchesSearch =
                title.includes(term) ||
                content.includes(term) ||
                tags.some(tag => tag.includes(term)) ||
                category.includes(term);

            // Only show if it matches search AND matches current category filter
            const activeCategory = document.querySelector('.filter-btn.active').dataset.filter;
            const matchesCategory = activeCategory === 'all' || entry.dataset.category === activeCategory;

            if (matchesSearch && matchesCategory) {
                entry.classList.add('visible');
                setTimeout(() => {
                    entry.style.display = '';
                    setTimeout(() => {
                        entry.classList.add('fade-in');
                    }, 10);
                }, 10);
            } else {
                entry.classList.remove('fade-in');
                setTimeout(() => {
                    entry.classList.remove('visible');
                    setTimeout(() => {
                        entry.style.display = 'none';
                    }, 300);
                }, 10);
            }
        });

        // Show "no results" message if no entries match
        const visibleEntries = document.querySelectorAll('.diary-entry.visible');
        const noResultsMsg = document.querySelector('.no-results-message') || createNoResultsMessage();

        if (visibleEntries.length === 0) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }
    }

    // Create "no results" message element
    function createNoResultsMessage() {
        const msg = document.createElement('div');
        msg.className = 'no-results-message';
        msg.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No entries found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        document.querySelector('.diary-entries').appendChild(msg);
        return msg;
    }

    // Initialize entry animations
    function initEntryAnimations() {
        diaryEntries.forEach(entry => {
            entry.classList.add('visible');

            // Add hover effect for tags
            const tags = entry.querySelectorAll('.tag');
            tags.forEach(tag => {
                tag.addEventListener('click', () => {
                    searchInput.value = tag.textContent;
                    searchEntries(tag.textContent);
                });
            });
        });
    }

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Filter entries
            const category = this.dataset.filter;

            // If search input is empty, just filter by category
            if (searchInput.value.trim() === '') {
                filterEntries(category);
            } else {
                // Otherwise, run search with current filters
                searchEntries(searchInput.value);
            }
        });
    });

    // Add event listener to search input
    if (searchInput) {
        let debounceTimeout;

        searchInput.addEventListener('input', function() {
            // Clear previous timeout
            clearTimeout(debounceTimeout);

            // Set new timeout to debounce search
            debounceTimeout = setTimeout(() => {
                searchEntries(this.value);
            }, 300);
        });

        // Add clear button to search input
        const searchBox = searchInput.parentElement;
        const clearButton = document.createElement('button');
        clearButton.className = 'search-clear';
        clearButton.innerHTML = '<i class="fas fa-times"></i>';
        clearButton.style.display = 'none';
        searchBox.appendChild(clearButton);

        // Show/hide clear button based on input content
        searchInput.addEventListener('input', function() {
            clearButton.style.display = this.value ? 'block' : 'none';
        });

        // Clear search on button click
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            clearButton.style.display = 'none';

            // Reset to active category filter
            const activeCategory = document.querySelector('.filter-btn.active').dataset.filter;
            filterEntries(activeCategory);
        });
    }

    // Pagination functionality
    const pageNumbers = document.querySelectorAll('.page-number');
    const prevButton = document.querySelector('.page-control:first-child');
    const nextButton = document.querySelector('.page-control:last-child');
    const currentPageDisplay = document.querySelector('.current-page');

    // These would typically connect to a backend
    // For this static demo, we'll just simulate page changes
    if (pageNumbers.length > 0) {
        pageNumbers.forEach(pageNumber => {
            pageNumber.addEventListener('click', function(e) {
                e.preventDefault();

                // Add loading animation
                const entriesContainer = document.querySelector('.diary-entries');
                entriesContainer.classList.add('loading');

                setTimeout(() => {
                    // Remove active class from all page numbers
                    pageNumbers.forEach(page => page.classList.remove('active'));

                    // Add active class to clicked page number
                    this.classList.add('active');

                    // Update page display
                    const pageNum = this.textContent;
                    currentPageDisplay.textContent = `Page ${pageNum} of 3`;

                    // Update prev/next buttons
                    prevButton.classList.toggle('disabled', pageNum === '1');
                    nextButton.classList.toggle('disabled', pageNum === '3');

                    // Reset entries animation
                    resetEntryAnimations();

                    // Remove loading animation
                    entriesContainer.classList.remove('loading');

                    // In a real app, this would load the new page data
                    // For demo, we'll just scroll to top
                    window.scrollTo({
                        top: document.querySelector('.diary-container').offsetTop - 100,
                        behavior: 'smooth'
                    });
                }, 500);
            });
        });

        // Previous page button
        if (prevButton) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault();

                if (this.classList.contains('disabled')) return;

                const activePage = document.querySelector('.page-number.active');
                const prevPage = activePage.previousElementSibling;

                if (prevPage && prevPage.classList.contains('page-number')) {
                    prevPage.click();
                }
            });
        }

        // Next page button
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault();

                if (this.classList.contains('disabled')) return;

                const activePage = document.querySelector('.page-number.active');
                const nextPage = activePage.nextElementSibling;

                if (nextPage && nextPage.classList.contains('page-number')) {
                    nextPage.click();
                }
            });
        }
    }

    // Reset entry animations (when changing pages)
    function resetEntryAnimations() {
        diaryEntries.forEach((entry, index) => {
            entry.classList.remove('fade-in-up');
            entry.offsetHeight; // Force reflow
            entry.style.animationDelay = `${0.1 * index}s`;
            entry.classList.add('fade-in-up');
        });
    }

    // Add styles for loading animation
    const style = document.createElement('style');
    style.textContent = `
        .diary-entries.loading {
            opacity: 0.6;
            transition: opacity 0.3s ease;
        }

        .no-results-message {
            display: none;
            padding: 3rem;
            text-align: center;
        }

        .empty-state {
            padding: 3rem;
            background-color: var(--color-bg-secondary);
            border-radius: var(--border-radius);
            border: 1px solid var(--color-border);
        }

        .empty-state i {
            font-size: 3rem;
            color: var(--color-accent-primary);
            opacity: 0.5;
            margin-bottom: 1rem;
        }

        .empty-state h3 {
            color: var(--color-text-primary);
            margin-bottom: 0.5rem;
        }

        .empty-state p {
            color: var(--color-text-secondary);
        }

        .search-clear {
            position: absolute;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--color-text-secondary);
            cursor: pointer;
            font-size: 0.8rem;
            opacity: 0.7;
            transition: opacity 0.2s ease;
        }

        .search-clear:hover {
            opacity: 1;
            color: var(--color-accent-primary);
        }

        .visible {
            opacity: 1;
        }

        .diary-entry {
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .diary-entry.fade-in {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
});
