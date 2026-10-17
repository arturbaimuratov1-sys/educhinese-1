/**
 * EduChinese — редактируемые данные демо-лендинга.
 * =================================================
 * Это ЕДИНСТВЕННОЕ место, где меняются тексты, фото и контакты для демо.
 * - Всё, что помечено isDemo: true, — выдуманный пример оформления. Заменить реальным.
 * - Настоящий WhatsApp школы вписывать ТОЛЬКО сюда и только если он подтверждён.
 *   Пока номера нет — оставь whatsapp: "" и форма будет честно работать в демо-режиме.
 * - Цены, стаж, число учеников, сертификаты и отзывы НЕ выдумывать: их здесь нет специально.
 */
const SITE_CONTENT = {
  brand: { name: "EduChinese", city: "Актобе", tagline: "Китайский язык — с понятного первого шага" },
  contacts: {
    city: "г. Актобе (точный адрес — после подтверждения)",
    phone: "",            // например: "+7 700 000-00-00" — только подтверждённый
    whatsapp: "",         // например: "77070000000" — только подтверждённый, без пробелов
    telegram: "",
    email: "",
    scheduleNote: "Офлайн и онлайн · расписание — после подтверждения",
    isDemo: true
  },
  demo: {
    notice: "Демо-версия дизайна. Тексты, фото и примеры отзывов — заглушки для согласования.",
    formMessage: "Демо-режим: заявка никуда не отправляется и никому не уходит. Чтобы включить запись, добавьте подтверждённый номер WhatsApp в site-content.js.",
    teachersNote: "Место под преподавателей: добавим реальные фото, имена и опыт после подтверждения. Выдуманных людей не показываем.",
    reviewsNote: "Ниже — примеры ОФОРМЛЕНИЯ отзывов (демо). Заменить реальными отзывами школы."
  },
  // Демо-примеры оформления отзывов. НЕ выдавать за настоящие.
  reviewsDemo: [
    { text: "Пример оформления: короткий отзыв ученика о первых занятиях и понятных объяснениях.", name: "Имя ученика", detail: "Демо · формат: группа", isDemo: true },
    { text: "Пример оформления: отзыв родителя о записи, расписании и связи с преподавателем.", name: "Имя родителя", detail: "Демо · формат: дети", isDemo: true },
    { text: "Пример оформления: отзыв о подготовке к поездке и разговорной практике.", name: "Имя ученика", detail: "Демо · формат: индивидуально", isDemo: true }
  ],
  photos: [
    { id: "pexels-7396399", url: "https://images.pexels.com/photos/7396399/pexels-photo-7396399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Ученики занимаются в светлом классе — иллюстративное фото", credit: "cottonbro studio / Pexels", page: "https://www.pexels.com/photo/7396399/" },
    { id: "pexels-5907795", url: "https://images.pexels.com/photos/5907795/pexels-photo-5907795.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Кисти для каллиграфии и иероглифы — иллюстративное фото", credit: "Feng Zou / Pexels", page: "https://www.pexels.com/photo/5907795/" },
    { id: "pexels-9016474", url: "https://images.pexels.com/photos/9016474/pexels-photo-9016474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Каллиграфия на красной бумаге — иллюстративное фото", credit: "Kevin Malik / Pexels", page: "https://www.pexels.com/photo/9016474/" },
    { id: "pexels-5905710", url: "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Ученик делает записи во время онлайн-занятия — иллюстративное фото", credit: "Katerina Holmes / Pexels", page: "https://www.pexels.com/photo/5905710/" },
    { id: "pexels-6503100", url: "https://images.pexels.com/photos/6503100/pexels-photo-6503100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Преподаватель пишет на доске — иллюстративное фото", credit: "Thirdman / Pexels", page: "https://www.pexels.com/photo/6503100/" }
  ]
};
