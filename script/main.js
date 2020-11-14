/*Сделать ДЗ:
~~~~~1) Написать скрипт для отправки данных по видео~~~~~
2) Обязательно посмотреть дополнительное видео после практики
3) Подключить скрипт отправки данных к:
    · Модальному окну
    · Контактной форме в самом низу страницы
4) После отправки инпуты должны очищаться
5) Сделать валидацию данных при вводе: в поля с номером телефона можно ввести только цифры и знак “+”
6) Запретить ввод любых символов в поле "Ваше имя" и "Ваше сообщение", кроме Кириллицы и пробелов!
*/

/* eslint-disable no-use-before-define */
window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line strict
    'use strict';

    // Таймер
    const countTimer = deadline => {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        let timeInterval = 0;

        const addZero = n => (n < 10 ? "0" + n : n);

        const getTimeRemaining = () => {

            const dateStop = new Date(deadline).getTime(),
                dateNew = new Date().getTime(),
                timeRemaining = (dateStop - dateNew) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            return { timeRemaining, hours, minutes, seconds };

        };

        const updateClock = () => {

            const timer = getTimeRemaining();

            const trueClock = (timeValue, timeSelector) => (timeValue <= 0 ?
                timeSelector.textContent = '00' :
                timeSelector.textContent = addZero(timeValue));

            trueClock(timer.hours, timerHours);
            trueClock(timer.minutes, timerMinutes);
            trueClock(timer.seconds, timerSeconds);


            if (timer.timeRemaining <= 0) {
                clearInterval(this.timeInterval);
            }

        };
        updateClock();
        // eslint-disable-next-line no-unused-vars
        timeInterval = setInterval(updateClock, 1000);

    };

    // Меню
    const toggleMenu = () => {

        const handlerMenu = () => {

            const target = event.target;

            const displayMenu = () => {
                document.querySelector('menu').classList.toggle('active-menu');
            };

            if (target.closest('.menu') ||
				(!target.closest('menu') &&
					document.querySelector('menu').classList.contains('active-menu'))) {
                displayMenu();
            }

            if (target.closest('menu') && target.closest('[href^="#"]')) {
                displayMenu();
            }
        };

        document.body.addEventListener('click', handlerMenu);
    };

    // Модальное окно
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content'),
            popupData = {
                count: -445,
                speed: 15,
                startPos: -445,
                endPos: 0
            };

        const showPopup = () => {

            if (popupData.startPos > popupData.endPos) {
                popupData.count -= popupData.speed;
            } else {
                popupData.count += popupData.speed;
            }

            popupContent.style.transform = `translateY(${popupData.count}px)`;

            if (popupData.startPos > popupData.endPos ?
                popupData.count > popupData.endPos :
                popupData.count < popupData.endPos) {
                requestAnimationFrame(showPopup);
            }
        };

        popupBtn.forEach(elem => {

            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (window.innerWidth > 768) {
                    popupData.count = popupData.startPos;
                    requestAnimationFrame(showPopup);
                }
            });

        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    // // Скролл при click на href = '#';
    const smoothLinks = document.querySelectorAll('menu ul>li a, a[href="#service-block"]');

    for (const smoothLink of smoothLinks) {

        smoothLink.addEventListener('click', e => {

            e.preventDefault();

            const id = smoothLink.getAttribute('href');
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        });
    }

    // Tabs
    const tabs = () => {

        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {

            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }

        };

        tabHeader.addEventListener('click', event => {

            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }

        });
    };

    // Add dot
    const addDot = () => {

        const portfolioItem = document.querySelectorAll('.portfolio-item'),
            portfolioDots = document.querySelector('.portfolio-dots');

        portfolioItem.forEach(() => {
            const dot = document.createElement('li');
            dot.classList.add('dot');
            portfolioDots.appendChild(dot);
        });

        portfolioDots.children[0].classList.add('dot-active');

    };

    // Slider id = portfolio
    const slider = () => {

        const slide = document.querySelectorAll('.portfolio-item'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide = currentSlide < slide.length - 1 ? currentSlide + 1 : 0;
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (target.matches('.portfolio-btn, .dot')) {
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dot, currentSlide, 'dot-active');

                if (target.matches('#arrow-right')) {
                    currentSlide++;
                } else if (target.matches('#arrow-left')) {
                    currentSlide--;
                } else if (target.matches('.dot')) {
                    dot.forEach((elem, index) => {
                        if (elem === target) {
                            currentSlide = index;
                        }
                    });
                }

                if (currentSlide >= slide.length) {
                    currentSlide = 0;
                }
                if (currentSlide < 0) {
                    currentSlide = slide.length - 1;
                }

                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(dot, currentSlide, 'dot-active');
            }
        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide();
    };

    // Работа с img src
    const setCommandImg = () => {

        const commandRow = document.querySelector('#command .row');

        const mouseImg = e => {

            const target = e.target;

            if (target.classList.contains('command__photo')) {

                const lastSrc = target.src;

                target.src = target.dataset.img;
                target.dataset.img = lastSrc;

            }
        };

        commandRow.addEventListener('mouseover', mouseImg);
        commandRow.addEventListener('mouseout', mouseImg);

    };

    // Сalculator
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 10,
                step = 70;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;


            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            }
            if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (!!typeValue && !!squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            if (totalValue.textContent !== total) {
                if (totalValue.textContent > total) {
                    step = -50;
                }

                const timer = setInterval(() => {
                    totalValue.textContent = +totalValue.textContent + step;
                    if ((total - totalValue.textContent) * step < 1) {
                        clearInterval(timer);
                        totalValue.textContent = Math.round(total);
                    }
                }, 0);
            }
        };

        calcBlock.addEventListener('input', e => {
            const target = e.target;

            if (target.matches('select') ||
            target.matches('input')) {
                countSum();
            }
        });
        // Enter Only Numbers!
        const enterOnlyNumbers = () => {

            calcBlock.addEventListener('input', e => {

                if (e.target.matches('.calc-square') ||
                e.target.matches('.calc-count') ||
                e.target.matches('.calc-day')) {
                    e.target.value = e.target.value.replace(/\D/g, '');
                }
            });
        };
        enterOnlyNumbers();

    };

    // Send AJAX Form
    const sendForm = () => {
        // Сообщения для пользователя
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

        const postData = (body, outputData, errorData) => {
            // Создали объект request
            const request = new XMLHttpRequest();
            // Прослушка события readystatechange для request
            request.addEventListener('readystatechange', () => {

                if (request.readyState !== 4) {
                    return;
                }

                if (request.readyState === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });

            // Настройка запроса, метод POST к файлу php
            request.open('POST', './server.php');
            // Добавление заголовков, сейчас json, но могут быть и formData!
            request.setRequestHeader('Content-Type', 'application/json');

            // Отправка formData с помощью метода request
            // request.send(formData);

            // либо, если требует сервер перегнать его в json формат
            request.send(JSON.stringify(body));
            // Для этого все данные с помощью цикла (for of либо forEach) получаем
            // с обьекта farmData записываем в переменную body, и перед отправкой переводим все в json
        };

        // Выбор формы по тегу button
        const clearInput = idForm => {
            const form = document.getElementById(idForm);
            [...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' &&
                    item.type !== 'button')
                .forEach(item => item.value = '');
        };

        // Validator
        const isValid = e => {

            const target = e.target;

            if (target.matches('.form-phone')) {
                target.value = target.value.replace(/[^+\d]/g, '');
            }
            if (target.name === 'user_name') {
                target.value = target.value.replace(/[^а-яё ]/gi, '');
            }
            if (target.matches('.mess')) {
                target.value = target.value.replace(/[^а-яё ,.]/gi, '');
            }

        };

        const processForm = idForm => {
            // Получение формы из html
            const form = document.getElementById(idForm);

            // Элемент который добавляется на страницу
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'font-size: 2rem;';

            // Обработчик события submit для form
            form.addEventListener('submit', e =>  {

                e.preventDefault();
                // Добавили пустой элемент!
                form.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;

                // Объект formData, который считывает все данные
                // с form с обязательным атрибутом name=''
                const formData = new FormData(form);
                const body = {};

                // for (let val of formData.entries()) {
                //     body[val[0]] = val[1];
                // }

                formData.forEach((val, key) => {
                    body[key] = val;
                });
                postData(body,
                    () => {
                        statusMessage.textContent = successMessage;
                        clearInput(idForm);
                    },
                    error => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    }
                );
            });

            form.addEventListener('input', isValid);
        };

        processForm('form1');
        processForm('form2');
        processForm('form3');

    };

    countTimer('09 november 2020');
    toggleMenu();
    togglePopUp();
    tabs();
    addDot();
    setCommandImg();
    calc(100);
    sendForm();
    slider();

});
