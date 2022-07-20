import { createI18n } from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'

const messages = {
  en: { ...enLocale },
  zh: { ...zhLocale }
}

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'zh',
  messages
})

export default i18n