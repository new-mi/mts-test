import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    footerList: [
      {
        id: 0,
        name: 'Поддержка' ,
        items: [
          {
            name: 'Обратная связь',
            href: "#"
          },
          {
            name: 'Контакты',
            href: "#"
          },
          {
            name: 'Политика обработки cookie',
            href: "#"
          },
          {
            name: 'Перейти на сайт mts.ru',
            href: "#"
          }
        ]
      },
      {
        id: 1,
        name: 'Реклама и продвижение' ,
        items: [
          {
            name: 'МТС коммуникатор ',
            href: "#"
          },
          {
            name: 'Цифровой ассистент',
            href: "#"
          },
          {
            name: 'Голосовой робот',
            href: "#"
          },
          {
            name: 'Push for site',
            href: "#"
          },
          {
            name: 'Анализ геоданных',
            href: "#"
          },
          {
            name: 'TVBit',
            href: "#"
          }
        ]
      },
      {
        id: 2,
        name: 'Автоматизация процессов' ,
        items: [
          {
            name: 'Проверка контрагентов',
            href: "#"
          },
          {
            name: 'Конструктор документов',
            href: "#"
          },
          {
            name: 'CRM Простой бизнес',
            href: "#"
          },
          {
            name: 'Анализ геоданных',
            href: "#"
          },
          {
            name: 'Видеонаблюдение (Larga)',
            href: "#"
          },
          {
            name: 'Мобильные сотрудники',
            href: "#"
          },
          {
            name: 'Virtual POS',
            href: "#"
          }
        ]
      },
      {
        id: 3,
        name: 'IT и безопасность' ,
        items: [
          {
            name: 'Антивирус Касперского',
            href: "#"
          },
          {
            name: 'Антивирус eset',
            href: "#"
          },
          {
            name: 'Aнтивирус doctorweb',
            href: "#"
          },
          {
            name: 'MDM',
            href: "#"
          },
          {
            name: 'Видеонаблюдение',
            href: "#"
          },
          {
            name: 'Виртуальный сервер ',
            href: "#"
          }
        ]
      },
      {
        id: 4,
        name: 'Работа с клиентами' ,
        items: [
          {
            name: 'Голосовой робот',
            href: "#"
          },
          {
            name: 'Цифровой ассистент',
            href: "#"
          },
          {
            name: 'CRM простой бизнес',
            href: "#"
          },
          {
            name: 'МТС коммуникатор',
            href: "#"
          },
          {
            name: 'Видеонаблюдение',
            href: "#"
          },
          {
            name: 'Виртуальный сервер ',
            href: "#"
          }
        ]
      }
    ],
    pairClickOptions: [
      {
        src: '/assets/images/pair-click/icon_1.svg',
        text: 'В Бизнес маркете вы можете купить полезные сервисы для бизнеса онлайн'
      },
      {
        src: '/assets/images/pair-click/icon_2.svg',
        text: 'Оплата с вашего корпоративного мобильного счета'
      },
      {
        src: '/assets/images/pair-click/icon_3.svg',
        text: 'Счет за услуги в привычном формате'
      },
      {
        src: '/assets/images/pair-click/icon_4.svg',
        text: 'Покупка и доступ к услугам в режиме онлайн'
      },
      {
        src: '/assets/images/pair-click/icon_5.svg',
        text: 'Просто выберите номер корпоративный мобильный номер, с которого вы хотите оплатить бизнес услугу. Онлайн сервисы предоставляются сразу же после оплаты.'
      },
    ],
    servicesItems: [
      {
        id: 0,
        title: 'МТС Маркетолог',
        text: 'Используйте различные каналы коммуникации: SMS, ,E-mail, Viber, Баннеры, Социальные сети',
        src: '/assets/images/services/icon_1.svg',
        href: '#'
      },
      {
        id: 1,
        title: 'Бесплатный вызов 8800',
        text: 'У надежного бизнеса всегда есть номер 8800',
        src: '/assets/images/services/icon_2.svg',
        href: '#'
      },
      {
        id: 2,
        title: '#CloudMTS',
        text: 'Экосистема облачных сервисов для крупного бизнеса и корпораций',
        src: '/assets/images/services/icon_3.svg',
        href: '#'
      },
      {
        id: 3,
        title: 'Виртуальная АТС',
        text: 'Простой способ телефонизации офиса без дополнительных затрат',
        src: '/assets/images/services/icon_4.svg',
        href: '#'
      }
    ],
    tasks: [
      {
        id: 0,
        name: 'Реклама и продвижение',
        items: [
          {
            id: 0,
            logo: '/assets/images/logo.svg',
            title: 'Голосовой робот',
            text: 'Облачная платформа голосового робота для совершения автоматических звонков по готовым сценариям',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_call"><span>10</span><span>звонков бесплатно</span></div>`
              }
            ],
            href: '#'
          },
          {
            id: 1,
            logo: '/assets/images/logo.svg',
            title: 'МТС Коммуникатор',
            text: 'Услуга для корпоративных клиентов МТС, позволяющая организовать простой способ общения с клиентами',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_price"><p>от <span>30180</span> ₽/мес</p></div>`
              }
            ],
            href: '#'
          },
          {
            id: 2,
            logo: '/assets/images/logo.svg',
            title: 'Цифровой ассистент',
            text: 'Наймите электронного сотрудника для общения с клиентами. Готовые решения для корпоративных клиентов МТС',
            options: [],
            href: '#'
          },
          {
            id: 3,
            logo: '/assets/images/logo-push.svg',
            title: 'Push for site',
            text: 'Все, что нужно, чтобы лучше общаться с посетителями сайта и превращать их в покупателей.',
            options: [],
            href: '#'
          },
          {
            id: 4,
            logo: '/assets/images/logo.svg',
            title: 'Голосовой робот',
            text: 'Облачная платформа голосового робота для совершения автоматических звонков по готовым сценариям',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_call"><span>10</span><span>звонков бесплатно</span></div>`
              }
            ],
            href: '#'
          },
          {
            id: 5,
            logo: '/assets/images/logo.svg',
            title: 'МТС Коммуникатор',
            text: 'Услуга для корпоративных клиентов МТС, позволяющая организовать простой способ общения с клиентами',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_price"><p>от <span>30180</span> ₽/мес</p></div>`
              }
            ],
            href: '#'
          },
          {
            id: 6,
            logo: '/assets/images/logo.svg',
            title: 'Цифровой ассистент',
            text: 'Наймите электронного сотрудника для общения с клиентами. Готовые решения для корпоративных клиентов МТС',
            options: [],
            href: '#'
          },
          {
            id: 7,
            logo: '/assets/images/logo.svg',
            title: 'Push for site',
            text: 'Все, что нужно, чтобы лучше общаться с посетителями сайта и превращать их в покупателей.',
            options: [],
            href: '#'
          }
        ]
      },
      {
        id: 1,
        name: 'Автоматизация процессов',
        items: [
          {
            id: 0,
            logo: '/assets/images/logo.svg',
            title: 'Голосовой робот',
            text: 'Облачная платформа голосового робота для совершения автоматических звонков по готовым сценариям',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_call"><span>10</span><span>звонков бесплатно</span></div>`
              }
            ],
            href: '#'
          },
          {
            id: 1,
            logo: '/assets/images/logo.svg',
            title: 'МТС Коммуникатор',
            text: 'Услуга для корпоративных клиентов МТС, позволяющая организовать простой способ общения с клиентами',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_price"><p>от <span>30180</span> ₽/мес</p></div>`
              }
            ],
            href: '#'
          },
          {
            id: 2,
            logo: '/assets/images/logo.svg',
            title: 'Цифровой ассистент',
            text: 'Наймите электронного сотрудника для общения с клиентами. Готовые решения для корпоративных клиентов МТС',
            options: [],
            href: '#'
          },
          {
            id: 3,
            logo: '/assets/images/logo-push.svg',
            title: 'Push for site',
            text: 'Все, что нужно, чтобы лучше общаться с посетителями сайта и превращать их в покупателей.',
            options: [],
            href: '#'
          },
        ]
      },
      {
        id: 2,
        name: 'IT и безопасность',
        items: [
          {
            id: 0,
            logo: '/assets/images/logo.svg',
            title: 'Голосовой робот',
            text: 'Облачная платформа голосового робота для совершения автоматических звонков по готовым сценариям',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_call"><span>10</span><span>звонков бесплатно</span></div>`
              }
            ],
            href: '#'
          },
          {
            id: 1,
            logo: '/assets/images/logo.svg',
            title: 'МТС Коммуникатор',
            text: 'Услуга для корпоративных клиентов МТС, позволяющая организовать простой способ общения с клиентами',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_price"><p>от <span>30180</span> ₽/мес</p></div>`
              }
            ],
            href: '#'
          },
          {
            id: 2,
            logo: '/assets/images/logo.svg',
            title: 'Цифровой ассистент',
            text: 'Наймите электронного сотрудника для общения с клиентами. Готовые решения для корпоративных клиентов МТС',
            options: [],
            href: '#'
          }
        ]
      },
      {
        id: 3,
        name: 'Работа с клиентской базой',
        items: [
          {
            id: 0,
            logo: '/assets/images/logo.svg',
            title: 'Голосовой робот',
            text: 'Облачная платформа голосового робота для совершения автоматических звонков по готовым сценариям',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_call"><span>10</span><span>звонков бесплатно</span></div>`
              }
            ],
            href: '#'
          },
          {
            id: 1,
            logo: '/assets/images/logo.svg',
            title: 'МТС Коммуникатор',
            text: 'Услуга для корпоративных клиентов МТС, позволяющая организовать простой способ общения с клиентами',
            options: [
              {
                id: 0,
                html: `<div class="task__card-option task__card-option_price"><p>от <span>30180</span> ₽/мес</p></div>`
              }
            ],
            href: '#'
          }
        ]
      }
    ]
  },
  getters: {
    footerList: state => state.footerList,
    pairClickOptions: state => state.pairClickOptions,
    servicesItems: state => state.servicesItems,
    tasks: state => state.tasks,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
