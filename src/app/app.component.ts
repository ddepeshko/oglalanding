import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CountdownTimerComponent, DatePipe],
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  public targetDate = new Date('2025-05-17T00:00:00');
  public isBrowser = false;
  public baseProgramList = [
    'Постановка Цілі. Точка А. Заміри. Текстове завдання.',
    'Перелік необхідних продуктів, загальне меню на два тижні.',
    'Аудіо - підкласт про основи стрункого харчування. ',
    'Відео-Уроки «Лімфодренажна гімнастика» і «Суглобова гімнастика».',
    'Відео-Підкаст «Про Водний Режим» і  Відео-Урок «Заминка, Пост-Стретчінг».',
    'Відео+текстовий Алгоритм «Рекомендації до фізичної активності».',
    'Відео-Тренування з Лімфодренажним ефектом.',
    'Заміри, текстове завдання, перегляд проміжних результатів.',
    'Аудіо-підкаст Ефективні оберіги від зривів.',
    'Відео-урок про Секрети стрункого та легкого приготування страв.',
    'Відео-Тренування «Тіло-Мрія».',
    'Аудіо -підкаст +текстовий алгоритм про План дій на Майбутнє.',
    'Точка В. Результати. Мотивація на подальший рух.',
  ];
  public extendedProgramList = [
    'Індивідуальний смачний  раціон харчування з веденням на два тижні.',
    'Онлайн - Діагностика з плануванням оптимальної програми тренувань для Тіла-Мрія.',
    'Доступ до курсу  2 місяці.',
  ];
  public resultsViewItemConfig = [
    {
      icon: 'assets/icons/sort-down-icon.svg',
      text: 'Легке та здорове зниження ваги (жир + зменшення набряків)',
    },
    {
      icon: 'assets/icons/flash-icon.svg',
      text: 'Збільшення енергії, покращення самопочуття',
    },
    {
      icon: 'assets/icons/reason-icon-3.svg',
      text: 'Зниження тяги до солодкого та шкідливої їжі',
    },
    {
      icon: 'assets/icons/reason-icon-2.svg',
      text: 'Нові стрункі харчові звички',
    },
    {
      icon: 'assets/icons/action-icon.svg',
      text: 'Поліпшення тонусу тіла та витривалості',
    },
    {
      icon: 'assets/icons/food-icon.svg',
      text: 'Розуміння, як тренуватися і харчуватися для збереження форми',
    },
    {
      icon: 'assets/icons/lovely-icon.svg',
      text: 'Захопливі погляди від чоловіків',
    },
  ];
  public slides = [
    {
      photo: 'assets/images/user-1.png',
      name: 'Вікторія',
      text:
        'Дякую за чудовий курс! \n' +
        '\n' +
        'Мінус 2 кг, -1,5 см у талії та стегнах. \n' +
        '\n' +
        'Відчуваю легкість!',
    },
    {
      photo: 'assets/images/user-2.png',
      name: 'Світлана',
      text:
        'Курс неймовірний! \n' +
        '\n' +
        "Почала правильно харчуватися, зникли набряки, з'явилося більше енергії!",
    },
    {
      photo: 'assets/images/user-3.png',
      name: 'Анна',
      text:
        'Зрозуміла, як бути у формі постійно. \n' +
        '\n' +
        'Мінус 2 кг, легкість у тілі та енергія!',
    },
  ];
  public questions = [
    {
      title: 'Немає часу на курс. Що робити?',
      description:
        'Уроки курсу легкі та цікаві, займають мінімум часу. \n' +
        '\n' +
        'Тренування та гімнастика не потребують багато часу, а завдяки курсу у вас з’явиться більше енергії на всі справи.',
    },
    {
      title: 'А якщо у мене проблеми з суглобами?',
      description:
        'Комплекс вправ розроблений з урахуванням можливих обмежень по здоров’ю. \n' +
        '\n' +
        'У кожній вправі передбачені різні варіації виконання.',
    },
    {
      title: 'А якщо раціон мені не підійде?',
      description:
        'План харчування включає 14 різноманітних варіантів. \n' +
        '\n' +
        'Ви можете обрати ті страви, що найбільше вам підходять, або повторювати улюблені.',
    },
    {
      title: 'А якщо у мене немає часу готувати?',
      description:
        'Страви в раціоні прості у приготуванні та не вимагають багато часу чи складних інгредієнтів.',
    },
    {
      title: 'А якщо у мене проблеми з суглобами?',
      description:
        'Комплекс вправ розроблений з урахуванням можливих обмежень по здоров’ю. \n' +
        '\n' +
        'У кожній вправі передбачені різні варіації виконання.',
    },
  ];

  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      import('swiper/element/bundle').then(({ register }) => {
        register();
      });
    }
  }
  public ngAfterViewInit(): void {
    if (this.isBrowser && this.swiperEl?.nativeElement) {
      setTimeout(() => {
        this.swiperEl.nativeElement.swiper?.update();
      }, 100);
    }
  }

  public nextSlide(): void {
    this.swiperEl?.nativeElement.swiper?.slideNext();
  }

  public prevSlide(): void {
    this.swiperEl?.nativeElement.swiper?.slidePrev();
  }

  public toggleAnswer(questionTitle: HTMLDivElement): void {
    questionTitle.classList.toggle('selected');
  }
}
