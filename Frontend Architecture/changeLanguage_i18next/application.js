    // @ts-check
    /* eslint no-param-reassign: ["error", { "props": false }] */

    import i18next from 'i18next';
    import ru from './locales/ru.js';
    import en from './locales/en.js';

    const state = {
    clicks: 0,
    activeLang: 'English'
    }

    const createLayout = () => {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    btnGroup.setAttribute('role', 'group');

    const btnEn = document.createElement('button');
    btnEn.type = 'button';
    btnEn.className = 'btn mb-3 btn-primary';
    btnEn.id = 'en';
    btnEn.textContent = 'English';

    const btnRu = document.createElement('button');
    btnRu.type = 'button';
    btnRu.className = 'btn mb-3 btn-outline-primary';
    btnRu.id = 'ru';
    btnRu.textContent = 'Русский';

    btnGroup.appendChild(btnEn);
    btnGroup.appendChild(btnRu);

    const btnClicks = document.createElement('button');
    btnClicks.type = 'button';
    btnClicks.className = 'btn btn-info mb-3 align-self-center';
    btnClicks.textContent = `${state.clicks} clicks`;

    const btnReset = document.createElement('button');
    btnReset.type = 'button';
    btnReset.className = 'btn btn-warning';
    btnReset.id = 'reset';
    btnReset.textContent = 'Reset';

    container.appendChild(btnGroup);
    container.appendChild(btnClicks);
    container.appendChild(btnReset);
    }


    export default async function () {

    const i18nextInstance = i18next.createInstance();
    await i18nextInstance.init({
        lng: 'en',
        debug: true,
        resources: {
        ru,
        en
        },
    });


    createLayout();
    const render = (state, i18nextInstance) => {
        const buttonEng = document.querySelector('#en');
        const buttonRu = document.querySelector('#ru');
        const buttonClicker = document.querySelector('.btn-info');
        const resetButton = document.querySelector('#reset');

        if (state.activeLang === 'English') {
        i18nextInstance.changeLanguage('en', (err) => {});
        buttonRu.classList.add('btn-outline-primary')
        buttonRu.classList.remove('btn-primary')
        buttonEng.classList.add('btn-primary')
        buttonEng.classList.remove('btn-outline-primary')

        } else {
        i18nextInstance.changeLanguage('ru', (err) => {});
        buttonEng.classList.add('btn-outline-primary')
        buttonEng.classList.remove('btn-primary')
        buttonRu.classList.add('btn-primary')
        buttonRu.classList.remove('btn-outline-primary')
        }
        buttonClicker.innerHTML = i18nextInstance.t('clicks', { count: state.clicks });
        resetButton.innerHTML = i18nextInstance.t('key')

    }


    const buttonClicker = document.querySelector('.btn-info');
    const buttonReset = document.querySelector('.btn-warning');


    const buttons = document.querySelectorAll('.btn-group button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
        state.activeLang = e.target.innerText;
        render(state, i18nextInstance)
        }
        )
    })

    buttonClicker.addEventListener('click', () => {
        state.clicks += 1;
        render(state, i18nextInstance);
    })

    buttonReset.addEventListener('click', () => {
        state.clicks = 0;
        render(state, i18nextInstance);
    })

    }

