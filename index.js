const {
  Telegraf,
  Markup
} = require('telegraf')
require('dotenv').config()
const text = require ('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
//bot.start((ctx) => ctx.reply('Welcome'))
bot.start((ctx) => ctx.reply(`Привіт ${ctx.message.from.first_name ? ctx.message.from.first_name : 'друг'}! 
Я Бот школи STUD-POINT,  за допомогою якого ти зможеш дізнатись більше про школу, отримати відповіді на найпоширеніші питання та можливість задати своє, отримати відповідь щодо найкращих способів співпраці. Привітайся (напиши Привіт чи відправ стікер) та вперед (натисни /help щоб ознайомитись з переліком команд)`))
bot.hears('Привіт', (ctx) => ctx.reply('Вітаємо в нашій спільноті!:)'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
//bot.menu((ctx) => ctx.reply(`Щоб найкраще побудувати нашу комунікацію, найбільш цікаво поспілкуватись та дізнатись найактуальнішу інформацію, набирай відповідну категорію (роль) та вперед`))
bot.help((ctx) => ctx.reply(text.commands))

bot.command('menu', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Меню</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Студент', 'btn_1'), Markup.button.callback('Партнер', 'btn_2')], 
        [Markup.button.callback('Роботодавець', 'btn_3')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

bot.command('student_questions', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Питання студентів</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Як взяти участь в IT School/Sales School/будь-якому проєкті STUD-POINT?', 'btn_4')], 
        [Markup.button.callback('Як купити відеокурси STUD-POINT і скільки вони коштують?', 'btn_5')], 
        [Markup.button.callback('Ви отримали моє резюме, хочу працювати у вас?', 'btn_6')],
        [Markup.button.callback('Я економіст/копірайтер/дизайнер/будь-хто, які вакансії ви можете мені запропонувати?', 'btn_7')],
        [Markup.button.callback('Які івенти будуть проходити найближчим часом?', 'btn_8')],
        [Markup.button.callback('Які можливості відкриває Ваша компанія?', 'btn_9')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

bot.command('partners_questions', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Питання партнерів</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Які послуги Ви надаєте?', 'btn_10')], 
        [Markup.button.callback('Які матеріали Ви розміщуєте?', 'btn_11')], 
        [Markup.button.callback('Які слоти на публікацію у вас є і чи можна опублікувати комерційне просто зараз?', 'btn_12')],
        [Markup.button.callback('Як і на яких умовах розмістити у вас вакансію/анонс/інформацію?', 'btn_13')],
        [Markup.button.callback('Хочемо взяти участь у проєкті', 'btn_14')],
        [Markup.button.callback('Як можна познайомитися з Вашим портфоліо?', 'btn_15')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})

bot.command('employers_questions', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Питання партнерів</b>', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Які послуги Ви надаєте?', 'btn_10')], 
        [Markup.button.callback('Які матеріали Ви розміщуєте?', 'btn_11')], 
        [Markup.button.callback('Які слоти на публікацію у вас є і чи можна опублікувати комерційне просто зараз?', 'btn_12')],
        [Markup.button.callback('Як і на яких умовах розмістити у вас вакансію/анонс/інформацію?', 'btn_13')],
        [Markup.button.callback('Хочемо взяти участь у проєкті', 'btn_14')],
        [Markup.button.callback('Як можна познайомитися з Вашим портфоліо?', 'btn_15')]
      ]
    ))
  } catch (e) {
    console.error(e)
  }
})


bot.command('contact', async (ctx) => {
  try {
    await ctx.replyWithHTML(`<b>Юридична адреса</b> - вул. Васильківська 30, Київ, 03022 Україна; <b>Поштова адреса</b> - ТОВ "СТУД ПОИНТ", а/с №27, Київ, 03022 Україна; <b>Офіс</b> - вул. М. Грушевського 3а, коворкінг "Generator" Київ, Україна; <b>Телефон</b> - 050 346-36-36, 098 346-36-36, 073 346-36-36`)
  } catch (e) {
    console.error(e)
  }
})

bot.command('info', async (ctx) => {
  try {
    await ctx.replyWithHTML(`В даному розділі будуть відображатись новини, лайфхаки та інше`)
  } catch (e) {
    console.error(e)
  }
})

bot.command('real_conversation', async (ctx) => {
  try {
    await ctx.replyWithHTML(`Залиште, будь ласка, Ваші контакти.
    Наш HR manager звяжеться з Вами найближчим часом. 
    Враховуйте, що на всі Ваші питання відповідають живі люди. 
    Вони дуже-дуже намагаються робити це якнайшввидше. 
    Зовсім скоро відповімо і Вам :)`)
  } catch (e) {
    console.error(e)
  }
})


function addActionBot(id_btn, src_img, text, preview) {
  bot.action(id_btn, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      if (src_img !== false) {
        await ctx.replyWithPhoto({
          source: src_img
        })
      }
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: preview
      })
    } catch (e) {
      console.error(e)
    }
  })
}
// Обработчик кнопок с помощью функции
addActionBot('btn_1', './img/1.jpg', text.text1, false)
addActionBot('btn_2', './img/2.jpg', text.text2, false)
addActionBot('btn_3', './img/3.jpg', text.text3, false)

addActionBot('btn_4', false, text.text4, true)
addActionBot('btn_5', false, text.text5, true)
addActionBot('btn_6', false, text.text6, false)
addActionBot('btn_7', false, text.text7, false)
addActionBot('btn_8', false, text.text8, false)
addActionBot('btn_9', false, text.text9, false)

addActionBot('btn_10', false, text.text10, false)
addActionBot('btn_11', false, text.text11, false)
addActionBot('btn_12', false, text.text12, false)
addActionBot('btn_13', false, text.text13, false)
addActionBot('btn_14', false, text.text14, false)
addActionBot('btn_15', false, text.text15, false)

bot.launch()


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))