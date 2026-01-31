document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                const tabContents = document.querySelectorAll('.tab-content');
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    const practicalTabButtons = document.querySelectorAll('.practical-tab-btn');
    if (practicalTabButtons.length > 0) {
        practicalTabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                const tabContents = document.querySelectorAll('.practical-tab-content');
                
                practicalTabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                faqItem.classList.toggle('active');
            });
        });
    }
    
    const currencyConverter = document.querySelector('#currencyConverter');
    if (currencyConverter) {
        const amountInput = document.querySelector('#amount');
        const fromCurrency = document.querySelector('#fromCurrency');
        const toCurrency = document.querySelector('#toCurrency');
        const convertButton = document.querySelector('.btn-convert');
        const swapButton = document.querySelector('.btn-swap');
        const inputAmountDisplay = document.querySelector('.input-amount span');
        const outputAmountDisplay = document.querySelector('.output-amount span');
        
        const exchangeRates = {
            EUR: 1,
            USD: 1.08,
            GBP: 0.86,
            MUR: 49.5,
            JPY: 162.5,
            AUD: 1.65
        };
        
        function convertCurrency() {
            const amount = parseFloat(amountInput.value) || 0;
            const from = fromCurrency.value;
            const to = toCurrency.value;
            
            if (amount <= 0) return;
            
            const amountInEUR = amount / exchangeRates[from];
            const convertedAmount = amountInEUR * exchangeRates[to];
            
            inputAmountDisplay.textContent = `${amount.toFixed(2)} ${from}`;
            outputAmountDisplay.textContent = `${convertedAmount.toFixed(2)} ${to}`;
        }
        
        if (convertButton) {
            convertButton.addEventListener('click', convertCurrency);
        }
        
        if (swapButton) {
            swapButton.addEventListener('click', function() {
                const temp = fromCurrency.value;
                fromCurrency.value = toCurrency.value;
                toCurrency.value = temp;
                convertCurrency();
            });
        }
        
        if (amountInput && fromCurrency && toCurrency) {
            amountInput.addEventListener('input', convertCurrency);
            fromCurrency.addEventListener('change', convertCurrency);
            toCurrency.addEventListener('change', convertCurrency);
        }
        
        convertCurrency();
    }
    
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});