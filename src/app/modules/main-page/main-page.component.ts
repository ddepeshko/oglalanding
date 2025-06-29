import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DestroyRef,
  ElementRef,
  Inject,
  inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { fromEvent, map, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CountdownTimerComponent } from '../../components/countdown-timer/countdown-timer.component';
const MOBILE_VIEWPORT_SIZE = 769;
@Component({
  selector: 'app-main-page',
  imports: [CountdownTimerComponent, DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit, AfterViewInit {
  public paymentLink: string = 'http://secure.wayforpay.com/payment/httpswwwfiteasyme';
  public targetDate = new Date('2025-07-06T00:00:00');
  public isBrowser = false;
  public baseProgramList = [
    'День 1. Точка А і точка Б. Урок «Алгоритм створення Тіла з Плоским животом та тонкою талією».',
    'День 2. Урок «Як харчуватися щоб зменшити Живіт?». Нагляд ні приклади-варіанти трапез на 7 днів.',
    'День 3. Урок «Як тренуватись для корекції Форми та зниження ваги?».',
    'День 4. Урок «Стрес, якість сну та розмір живота». Авторська методика «Стрункий Сон».',
    'День 5. Урок «Вплив силових тренувань на розмір живота». Схема тренувань для Тіла-Мрія.',
    'День 6. Урок «Водний Режим і вплив деяких напоїв на обхват талії».',
    'День 7. Урок «Постава як причина випираючого живота».  Приклади вправ.',
    'День 8. Мотивація та план дій на майбутнє.',
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
  public isMobile = false;
  private destroyRef = inject(DestroyRef);

  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      import('swiper/element/bundle').then(({ register }) => {
        register();
      });
    }
  }
  public ngAfterViewInit(): void {
    if (this.isBrowser) {
      fromEvent(window, 'resize')
        .pipe(
          startWith(null),
          map(() => window.innerWidth),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe((windowSize) => {
          this.isMobile = windowSize < MOBILE_VIEWPORT_SIZE;
        });
      if (this.swiperEl?.nativeElement) {
        setTimeout(() => {
          this.swiperEl.nativeElement.swiper?.update();
        }, 100);
      }
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

  ngOnInit(): void {
    const title = 'Fit Easy — Міні-Курс «Плоский живіт»';
    const description =
      'Вже за 7 днів отримай мінус в см та чіткий Алгоритм до Тіла з плоским животиком! Відчуй Легкість та впевненість у Собі!';
    this.title.setTitle(title);
    this.meta.addTags([
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'assets/images/banner-img-small.png' },
      { property: 'og:url', content: 'https://www.fit-easy.me/' },
      { property: 'og:type', content: 'website' },
    ]);
  }
}
